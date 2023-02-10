import { writable } from "svelte/store";

/**
 * @typedef PropertiesContext
 * @type {object}
 * @property {boolean} turnOffAnimation
 * @property {boolean} animation
 * @property {boolean} bounceInUp
 * @property {boolean} openPortal
 * @property {number} appearingPortal
 * @property {string} link
 * @property {null} getLinks
 * @property {string} wizardStatus
 * @property {string[]} stack
 */

/** @type {PropertiesContext} */
export let ContextSettings = writable({
  turnOffAnimation: false,
  animation: false,
  bounceInUp: false,
  openPortal: false,
  appearingPortal: 0,
  link: "",
  getLinks: null,
  wizardStatus: "appearing",
  stack: [],
});
