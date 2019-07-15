import { Component, OnInit, Input } from '@angular/core';
import { Author } from 'src/app/models/author.model';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-author-select',
  templateUrl: './author-select.component.html',
  styleUrls: ['./author-select.component.css']
})
export class AuthorSelectComponent implements OnInit {
  @Input('model') authors: Author[];
  query;
  foundAuthors: Author[];
  constructor(private authorService: AuthorService) {

  }
  updateSearch() {
    this.authorService.search(this.query).subscribe((response: Author[]) => this.foundAuthors = response);
  }
  foundFiltered() {
    return this.foundAuthors != null ? this.foundAuthors.filter((author) => this.findIndexInAuthors(author) == -1) : [];
  }
  add(author: Author) {
    let index = this.findIndexInAuthors(author);
    if (index < 0) {
      this.authors.push(author);
    }
  }
  findIndexInAuthors(author: Author) {
    return this.authors.findIndex(_author => author.id == _author.id);
  }
  remove(author: Author) {
    this.authors.splice(this.findIndexInAuthors(author), 1);
  }
  ngOnInit() {
    if (this.authors == null) {
      this.authors = [];
    }
  }

}
