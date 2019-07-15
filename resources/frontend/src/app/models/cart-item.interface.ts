import { Book } from "./book.model";

export interface ICartItem {
	book: Book;
	quantity: number;
}