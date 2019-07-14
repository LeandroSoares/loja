import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/models/author.model';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-author-manage',
  templateUrl: './author-manage.component.html',
  styleUrls: ['./author-manage.component.css']
})
export class AuthorManageComponent implements OnInit {
  show_author_form = false;
  current_author = null;
  current_method = null;
  current_form_title = 'Novo autor';

  authors: Author[];
  dialog_titles = { 'store': 'Novo autor', 'update': 'Atualizar autor', 'destroy': 'Deletar autor' };

  constructor(private authorService: AuthorService) { this.updateAuthors(); }

  updateAuthors() {
    this.authorService.index()
      .subscribe((response: Author[]) => this.authors = response);
  }

  hideAuthorForm() {
    this.show_author_form = false;
  }

  showAuthorForm(model, method) {
    this.current_author = model ? Author.make(model.id, model.name, model.cpf, model.email) : new Author();
    this.show_author_form = true;
    this.current_method = method || 'store';
    this.current_form_title = this.dialog_titles[this.current_method];
  }

  authorFormFinish() {
    this.hideAuthorForm();
    this.updateAuthors();
  }

  ngOnInit() {
  }

}
