import { Author } from "./author.model";

export class Book {
	fields() { return ['id', 'title', 'subject', 'publish_year', 'price', 'quantity', 'authors'] };
	fillable() { return ['title', 'subject', 'publish_year', 'price', 'quantity', 'authors'] };

	static makeFromModel(model) {
		return new Book(model['id'], model['title'], model['subject'], model['publish_year'], model['price'], model['quantity'], model['authors']);
	}
	static make(id, title, subject, publish_year, price, quantity, authors) {
		return new Book(id, title, subject, publish_year, price, quantity, authors);
	}

	id: Number;
	title: String;
	subject: String;
	publish_year: String;
	price: Number;
	quantity: Number;
	authors: Author[];

	constructor(id = null, title = null, subject = null, publish_year = null, price = null, quantity = null, authors = []) {
		this.id = id;
		this.title = title;
		this.subject = subject;
		this.publish_year = publish_year;
		this.price = price;
		this.quantity = quantity;
		this.authors = authors;
	}

}