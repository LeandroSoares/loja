export class Author {
	static make(id, name, cpf, email) {
		let instance = new Author();
		instance.id = id;
		instance.name = name;
		instance.cpf = cpf;
		instance.email = email;
		return instance;
	}
	id: number;
	name: String;
	cpf: String;
	email: String;
}