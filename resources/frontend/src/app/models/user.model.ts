export class User {
	static makeFromModel(model) {
		let instance = new User();
		Object.assign(instance, model);
		return instance;
	}
	static make(name: string, email: string, password: string): User {
		throw new Error("Method not implemented.");
	}
	fillable() {
		return ['name', 'email', 'password'];
	}
	hidden() { return ['password'] }
	constructor(name: string = '', email: string = '', password: string = '') {
		this.name = name;
		this.email = email;
		this.password = password;
	}
	id: number;
	name: string;
	email: string;
	password: string;
}