const fs=require('node:fs'),vm=require('node:vm');
const elements=new Map();
const el=()=>({dataset:{},textContent:'',innerHTML:'',classList:{add(){},remove(){},contains(){return true},toggle(){}},appendChild(){},addEventListener(){}});
const c={console,setTimeout,clearTimeout,requestAnimationFrame(){},document:{getElementById(id){if(!elements.has(id))elements.set(id,el());return elements.get(id)},createElement:el,querySelectorAll(){return []},addEventListener(){}},Math};
elements.set('game',{...el(),getContext(){return {}},getBoundingClientRect(){return {left:0,top:0,width:1100,height:660}}});
vm.createContext(c);vm.runInContext(fs.readFileSync(__dirname+'/game.js','utf8'),c);
vm.runInContext(`
s.paused=false;update(1);if(s.energy<=140)throw Error('production');
launch();for(let i=0;i<40;i++)update(.1);if(!s.enemies.length)throw Error('spawn');
if(canPlace(550,335))throw Error('overlap');
reset();s.paused=false;s.wave=2;launch();if(!s.storm)throw Error('storm');
s.energy=0;s.food=0;s.oxygen=0;s.buildings=s.buildings.filter(b=>b.type==='base');const hp=s.buildings[0].hp;update(1);if(s.buildings[0].hp>=hp)throw Error('survival');
reset();s.paused=false;s.wave=6;s.phase='wave';s.remaining=0;update(.1);if(!s.over)throw Error('victory');
reset();s.paused=false;s.buildings[0].hp=0;update(.1);if(!s.over)throw Error('defeat');
`,c);
console.log('PASS: production, enemy spawn, placement, storm, survival, victory, defeat');

