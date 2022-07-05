/**
 * @type {LocalStorage}
 */
export default class LocalStorage {
  /**
   * @type {String}
   */
  storageKey = '_';

  get(key) {
    return localStorage.getItem(this.storageKey + key);
  }

  set(key, value) {
    localStorage.setItem(this.storageKey + key, value);
  }

  remove(key) {
    localStorage.removeItem(this.storageKey + key);
  }
}
