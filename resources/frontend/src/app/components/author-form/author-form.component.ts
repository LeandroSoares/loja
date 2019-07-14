import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Author } from 'src/app/models/author.model';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css']
})
export class AuthorFormComponent implements OnInit {
  @Output() success = new EventEmitter();
  @Output() abort = new EventEmitter();
  @Input() method: string = 'store';
  @Input('model') author_model: Author;
  errors: any;
  constructor(private authorService: AuthorService) {
    this.reset();
  }
  onSubmit() {
    if (!this.authorService[this.method]){
      throw "The method:["+this.method+"] don't exist in AuthorService.";
    }
    if (this.modelIsFilled()) {
      this.authorService[this.method](this.author_model).subscribe(response => this.resolveResponse(response));
    } else {
      this.verifyEmptyFields();
    }
  }
  onAbort(){
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
    this.errors.name = this.modelNameIsFilled() ? false : "Campo obrigatório";
    this.errors.cpf = this.modelCPFIsFilled() ? false : "Campo obrigatório";
    this.errors.email = this.modelEmailIsFilled() ? false : "Campo obrigatório";
  }
  modelNameIsFilled() {
    return this.author_model.name != undefined && this.author_model.name != '';
  }
  modelCPFIsFilled() {
    return this.author_model.cpf != undefined && this.author_model.cpf != '';
  }
  modelEmailIsFilled() {
    return this.author_model.email != undefined && this.author_model.email != '';
  }
  modelIsFilled() {
    return this.modelNameIsFilled() && this.modelCPFIsFilled() && this.modelEmailIsFilled();
  }
  reset() {
    this.resetErrors();
    this.author_model = new Author();
  }
  resetErrors() {
    this.errors = {};
    this.errors.name = false;
    this.errors.cpf = false;
    this.errors.email = false;
  }
  ngOnInit() {
  }

}
