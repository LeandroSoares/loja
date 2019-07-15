import { ICartItem } from 'src/app/models/cart-item.interface';
export interface ICheckout {
	name;
	cpf;
	email;
	address;
	postalcode;
	cart: ICartItem[];
}