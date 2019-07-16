import { Author } from "./author.model";

export class Book {
	fields() { return ['id', 'title', 'subject', 'publish_year', 'price', 'quantity', 'authors'] };
	fillable() { return ['title', 'subject', 'publish_year', 'price', 'quantity', 'authors'] };

	static makeFromModel(model) {
		let instance = new Book();
		Object.assign(instance, model);
		return instance;
	}
	static make(id, title, subject, publish_year, price, quantity, authors) {
		return new Book(id, title, subject, publish_year, price, quantity, authors);
	}

	id: number;
	title: String;
	subject: String;
	publish_year: String;
	price: number;
	quantity: number;
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