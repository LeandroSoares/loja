import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';
import { Author } from 'src/app/models/author.model';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  authors: Author[];

  constructor(private authorService: AuthorService) {
    this.authorService.index()
      .subscribe((response: Author[]) => this.authors = response);
  }

  ngOnInit() {
  }

}
