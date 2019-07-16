import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.css']
})
export class UserManageComponent implements OnInit {

  show_form = false;
  current_entity = null;
  current_method = null;
  current_form_title = 'Novo usuário';

  users: User[];
  me: User;
  dialog_titles = { 'store': 'Novo usuário', 'update': 'Atualizar usuário', 'destroy': 'Deletar usuário' };

  constructor(private userService: UserService, private auth: AuthService) {
    this.updateUsers();

  }

  updateUsers() {
    this.userService.index()
      .subscribe((response: User[]) => this.users = response);
  }

  hideForm() {
    this.show_form = false;
  }

  showForm(model = null, method = 'store') {
    this.current_entity = model ?  User.makeFromModel(model) : new User();
    this.show_form = true;
    this.current_method = method;
    this.current_form_title = this.dialog_titles[this.current_method];
  }

  formFinish() {
    this.hideForm();
    this.updateUsers();
  }

  ngOnInit() {
    this.userService.me().subscribe((response: User) => this.me = response);
  }

}
