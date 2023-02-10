import { writable, get } from "svelte/store";

/**
 * @typedef infoSettings
 * @type {object}
 * @property {boolean} go
 * @property {boolean} close
 * @property {string} category
 */

/** @type {infoSettings} */
export let ContextSettings = writable({
  go: true,
  close: false,
  category: 'skills'
});

export const getStore = get;