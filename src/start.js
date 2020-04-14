/* 
Verification type of device:
1. Check kind of devices (PC or Mobile)
2. Paste in LocalStorage path of bundle 
*/

if (!localStorage.device) {
  const MobileDetect = require("mobile-detect");
  const md = new MobileDetect(self.navigator.userAgent);
  localStorage.device = md.mobile()
    ? "./mobileVersion.68783d3c.js"
    : "./indexPC.e686e9d6.js";
}

/*
====================
This was done to animation without delay
==================== 
Verification first cache-loading:
1. Add pre-load spinner
2. Registering a service worker
3. Caching list of files according to specific kind of device(localStorage.device)
4. Include of the bundle concerned
5. Delete spinner after full loading
*/

if (!localStorage.getItem("caching")) {
  addSpinner();
  import("../swREG.js")
    .then(module => {
      module.ServiceWorkerReg();
    })
    .then(() => import("./caching.js").then(mod => mod.Caching()));
} else {
  import('./mobileVersion/index').then(mod => mod.Portfolio);
}

function addSpinner() {
  document.body.innerHTML += `
<div id="spinner">
<div class="loading">Loading...</div>
<div class="character knight"></div>
<div class="bloodBug">
<div class="bug">BUG</div>
<div class="explosion"></div>
</div>
<div class="character goldKnight"></div>
</div>
`;
}
// *Names for separate bundles:
// - './mobileVersion/index'
// - './indexPC'
// - localStorage.device