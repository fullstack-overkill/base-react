import Service from '../service';
import Axios from './axios';

/**
 * @type {Rest}
 */
export default class AxiosHttpClient extends Service {
  /**
   * @param {String} resource
   */
  constructor(resource, options = {}) {
    super(options);
    this.http = Axios;
  }

  /**
   * @param {String} url
   * @param {Object} params
   */
  get(url, params) {
    return this.http.get(url, { params });
  }

  /**
   * @param {String} url
   * @param {Object} data
   */
  create(url, data) {
    return this.http.post(url, data);
  }

  /**
   * @param {String} url
   * @param {Integer|String} id
   * @param {Object} data
   */
  update(url, id, data) {
    return this.http.put(url, id, {...data, });
  }

  /**
   * @param {String} url
   * @param {Integer|String} id
   */
  delete(url, id) {
    return this.http.delete(url, id);
  }
}
