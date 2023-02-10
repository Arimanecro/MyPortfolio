export const Caching = () => {
  
    let mobileFiles = [  
  'axes.e5473b84.png',
  'b52.79ef4533.eot',
  'b52.93b32e9d.woff',
  'b52.ae3f4a77.ttf',
  'b52.d43f3201.svg',
  'btnclose.2955c178.png',
  'caching.bce5fcf6.js',
  'clip.401877e2.png',
  'crown.8cb43fb9.png',
  'electron.7f94c962.png',
  'express.6576637f.png',
  'firebase.b185f0bf.png',
  'pwa.327ef8a6.png',
  'GraphQL.5189d76b.png',
  'grass.b1731966.jpg',
  'helmet.d0a6d10e.png',
  'js.800817a2.jpg',
  'KreepTown.25b3a7d3.eot',
  'KreepTown.6230b60e.svg',
  'KreepTown.6c76ade9.ttf',
  'KreepTown.d4effa9e.woff',
  'list.7c40af47.png',
  'mobileVersion.68783d3c.css',
  'mobileVersion.68783d3c.js',
  'mongo.85ead7a1.jpg',
  'mysql.0108374b.jpg',
  'node.49bece38.png',
  'php.4a69d658.png',
  'react.498579ad.png',
  'start.5aff1fc7.js',
  'sw.js',
  'swREG.374738ec.js',
  'ts.30424785.jpg',
  'ZOMBIESSTATION.26d988f5.ttf',
  'ZOMBIESSTATION.54493a18.woff',
  'ZOMBIESSTATION.be1530ba.svg',
  'ZOMBIESSTATION.d56de1f0.eot'
];
    let pcFiles = [
  'appearing.8ed6ef99.png',
  'appearing.b6889ca1.png',
  'appearing.fa2ecb85.png',
  'attack.69639980.png',
  'attack.b4f4296b.png',
  'attack.c355eb66.png',
  'b52.79ef4533.eot',
  'b52.93b32e9d.woff',
  'b52.ae3f4a77.ttf',
  'b52.d43f3201.svg',
  'bg_best.881e48c2.png',
  'caching.bce5fcf6.js',
  'clip.401877e2.png',
  'coffin.1ef27411.png',
  'dev.0d127b91.png',
  'electron.7f94c962.png',
  'express.6576637f.png',
  'fallenangel_one_running.7555c4b7.png',
  'firebase.b185f0bf.png',
  'pwa.327ef8a6.png',
  'ghost.9fa94348.png',
  'github.87a5af48.png',
  'goblin_running.ee5ae97d.png',
  'golem_ice_running.a3f43e26.png',
  'golem_lava_running.a37c9019.png',
  'golem_swamp_running.29c21a58.png',
  'GraphQL.5189d76b.png',
  'grass.8ea66717.jpg',
  'grass.b1731966.jpg',
  'idle.2ceac37f.png',
  'idle.a8ed585c.png',
  'idle.d44e1fc4.png',
  'indexPC.e686e9d6.css',
  'indexPC.e686e9d6.js',
  'js.800817a2.jpg',
  'KreepTown.25b3a7d3.eot',
  'KreepTown.6230b60e.svg',
  'KreepTown.6c76ade9.ttf',
  'KreepTown.d4effa9e.woff',
  'laptop.855d7aa0.jpg',
  'leg.e563918e.png',
  'list.7c40af47.png',
  'mongo.85ead7a1.jpg',
  'mysql.0108374b.jpg',
  'node.49bece38.png',
  'orc_running.f55fb520.png',
  'php.4a69d658.png',
  'portal.500dc5af.png',
  'react.498579ad.png',
  'reaper_running.2b517245.png',
  'select.cabc9244.png',
  'start.5aff1fc7.js',
  'sw.js',
  'swREG.374738ec.js',
  'troll_running.598607d7.png',
  'ts.30424785.jpg',
  'up_scroll3.8e288ea9.png',
  'down_scroll.e21fd408.png',
  'undeground.b60eea37.jpg',
  'unselect.b62a2648.png',
  'wifi.d08d1bed.svg',
  'ZOMBIESSTATION.26d988f5.ttf',
  'ZOMBIESSTATION.54493a18.woff',
  'ZOMBIESSTATION.be1530ba.svg',
  'ZOMBIESSTATION.d56de1f0.eot'
    ];
    
    let files = (localStorage.device.includes('mobile')) ? mobileFiles : pcFiles;
    //let files = [];
    const version = 1;

      caches.open(`static-v${version}`)
      .then(cache => cache.addAll(files)
      .then(() => {
        localStorage.setItem('caching', 'true');
        //console.log('Assets added to cache')
        
      }).then(()=> import(localStorage.device)
        .then(mod => mod.Portfolio))
        .then(()=>deleteSpinner())
      .catch(err => console.log('Error while fetching assets', err)))

};

function deleteSpinner(){
    document.getElementById('spinner').remove();
  
}