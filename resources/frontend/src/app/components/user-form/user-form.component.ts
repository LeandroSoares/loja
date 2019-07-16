import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Output() success = new EventEmitter();
  @Output() abort = new EventEmitter();
  @Input() method: string = 'store';
  @Input('model') model: User;
  errors: any;
  constructor(private userService: UserService) {
    this.reset();
  }
  onSubmit(event) {
    event.preventDefault();
    if (!this.userService[this.method]) {
      throw "The method:[" + this.method + "] don't exist in UserService.";
    }
    if (this.modelIsFilled()) {
      this.userService[this.method](this.model).subscribe(response => this.resolveResponse(response));
    } else {
      this.verifyEmptyFields();
    }
  }
  onAbort() {
    this.abort.emit();
  }
  resolveResponse(response) {
    this.resetErrors();
    if (response && response['error']) {
      response['fields'].forEach(field => this.errors[field] = 'Já existe usuário com este ' + field)
    } else {
      this.success.emit('success');
      this.reset();
    }
  }
  verifyEmptyFields() {
    for (const property of this.model.fillable()) {
      this.errors[property] = this.model[property] == null ? "Campo obrigatório" : false;
    }
  }
  modelIsFilled() {
    this.verifyEmptyFields();
    let filled = Object.values(this.errors).reduce((last, current) => {
      return current != false ? false : last;
    }, true);
    return filled;
  }
  reset() {
    this.resetErrors();
    this.model = new User();
  }
  resetErrors() {
    this.errors = {};
  }
  ngOnInit() {
  }


}
