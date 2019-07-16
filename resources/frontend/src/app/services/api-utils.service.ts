//TODO: refatorar os servicos e extender esta class
export class ApiUtils {
	api_url: string;
	constructor(api_url) {
		this.api_url = api_url;
	}
	protected api(...params) {
		return this.api_url + params.join('');
	}
}