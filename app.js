/* GRAFFITI CANS STORE - versi statis (data + login simulasi via localStorage) */
const CATS=['Spray Paint Cans','Paint Markers','Caps & Nozzles','Ink & Refills','Accessories'];
const LOW=[8,5,10,5,4];
const PRODUCTS=[
{n:'Montana Black Matte 400ml',c:0,p:85000,d:0,s:40,t:120},{n:'Montana Orange Gloss 400ml',c:0,p:85000,d:10,s:25,t:88},
{n:'Loop Colors Red 400ml',c:0,p:78000,d:0,s:4,t:64},{n:'Ironlak White 600ml',c:0,p:99000,d:5,s:30,t:51},
{n:'Molotow One4All 227HS',c:1,p:72000,d:0,s:18,t:97},{n:'Molotow One4All 127HS',c:1,p:58000,d:0,s:0,t:73},
{n:'Fat Cap Pack isi 5',c:2,p:25000,d:0,s:60,t:140},{n:'Skinny Cap Pack isi 5',c:2,p:25000,d:0,s:55,t:102},
{n:'Molotow Refill Ink 30ml',c:3,p:45000,d:0,s:22,t:35},{n:'Respirator Mask Street Kit',c:4,p:165000,d:15,s:12,t:29}];
const REV=[2.4,3.1,2.8,4.2,5.0,6.3]; // pendapatan demo 6 bulan (juta Rp)
const ORDERS=44;
const rp=n=>'Rp '+Math.round(n).toLocaleString('id-ID');
const LS=localStorage;
function users(){let u=null;try{u=JSON.parse(LS.getItem('gc_users'))}catch(e){}
 if(!u){u=[{name:'Admin Graffiti',user:'admin',pass:'admin123',role:'admin'},{name:'Demo Customer',user:'customer',pass:'customer123',role:'customer'}];LS.setItem('gc_users',JSON.stringify(u))}return u}
function me(){try{return JSON.parse(LS.getItem('gc_me'))}catch(e){return null}}
function login(u){LS.setItem('gc_me',JSON.stringify({name:u.name,user:u.user,role:u.role}));location.href=u.role==='admin'?'dashboard.html':'shop.html'}
function logout(){LS.removeItem('gc_me');location.href='index.html'}
function guard(role){const m=me();if(!m){location.href='index.html';return null}
 if(role&&m.role!==role){location.href='shop.html';return null}renderNav(m);return m}
function renderNav(m){const p=location.pathname.split('/').pop();const on=f=>p===f?' class="on"':'';
 document.getElementById('hdr').innerHTML=`<div class="nav"><a class="brand" href="${m.role==='admin'?'dashboard.html':'shop.html'}">Graffiti<span>Cans</span></a>
 <input type="checkbox" id="nt" class="nav-toggle"><label for="nt" class="nav-burger"><span></span></label>
 <nav class="nav-links"><a href="shop.html"${on('shop.html')}>Shop</a>${m.role==='admin'?`<a href="dashboard.html"${on('dashboard.html')}>Dashboard</a>`:''}
 <button class="link-button" onclick="logout()">Keluar (${m.user})</button></nav></div>`}
const FOOT=`<footer class="site-footer"><div class="container footer-bottom">&copy; 2026 Graffiti Cans Store. Spray paint, paint markers, caps, ink, dan perlengkapan street art.</div></footer>`;
