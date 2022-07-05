import response from './httpResponse';

export default class HttpClient {
  constructor(RestLib) {
    this.Rest = new RestLib();
  }

  async get(url, params) {
    const result = await this.Rest.get(url, params);
    return response(result);
  }

  async delete(url, params) {
    const result = await this.Rest.delete(url, params);
    return response(result);
  }
}
