let dibuka = false;
window.onload = (e)=>{
  console.log("everything loaded");
  tamu();
  let bukaUndangan = document.getElementById('bukaUndangan');
  bukaUndangan.removeAttribute('disabled')
  bukaUndangan.onclick = function(e){
    console.log(e.target.parentNode.getAttribute('id'))
    document.body.style.setProperty("--play", "play");
    e.target.parentNode.parentNode.style.display = "none";
    dibuka = true;
    togglePlay();
    window.scrollTo(0,0);
    //scrBtn.click()
  }
}

      
let audio = document.createElement('audio');
console.log(audio)
if("src" in audio){
     audio.src = "assets/Maher Zain - For The Rest Of My Life (Lyrics).mp3";
     audio.currentTime = 0
}
      
      
function tamu(){
  let tujuan = document.location.href.split('?');
  
  if(tujuan.length > 1){
  tujuan = tujuan[tujuan.length-1].split("=")[1];
  if(tujuan.split('_').length > 0){
    tujuan = tujuan.split('_')[0]
  }
  let tamu = document.getElementById('tamu');
  tamu.innerHTML = "";
  let teksP = document.createElement('p');
  teksP.textContent = tujuan.replace("-", " ");
  tamu.appendChild(teksP)
  }
}
      

let playing = false
function togglePlay(){
  console.log(playing)
  if(playing == true){
     audio.pause()
     playing = false
  }
  else {
     audio.play()
     playing = true
  }
}
function scroll(x, y){
   window.scrollBy(x, y)
}


let scrBtn = document.getElementById('scroll');
let autoScroll = false;
scrBtn.addEventListener('click',(e)=>{
   if(autoScroll == false){
     autoScroll = true;
     let y = 0;
   let s = setInterval(()=>{
     scroll(0, 2)
     y+=2;
     if(autoScroll==false || y >= document.body.offsetHeight){
       clearInterval(s)
     }
   }, 50)
   }
   else {
     autoScroll = false
   }
})

let play = document.getElementById('play')
console.log(play)
play.addEventListener('click', togglePlay)

//couple section
let flowers = document.getElementsByClassName('flowers');
      
function flowering(){
   let couple = document.getElementById('couple');
   let height = couple.getBoundingClientRect().height;
   let width = couple.getBoundingClientRect().width;
     
   for(let flower of flowers){
      
      let top = Math.floor(Math.random() * height);
      let left = Math.floor(Math.random() * width);
      
      flower.style.top = top + "px"
      flower.style.left = left + "px"
   }
}

flowering();

let x = setInterval(flowering, 5000)
      
      
//Acara section
      
let koord = [-6.928780, 109.583183]
  
var map = L.map('map',{
    dragging : false,
  }
).setView(koord, 18);
  
let googleStreets = L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});
googleStreets.addTo(map)
 /* L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);*/
var marker = L.marker(koord).addTo(map);
marker.bindPopup("<a style='color: #000; text-decoration: none; text-align: center;' href='https://maps.app.goo.gl/pHZNfzJhv67RJzM48'>Dukuh Ponolawen, RT 16/ RW 6, Desa Ponolawen kulon Kecamatan Kesesi, Kabupaten Pekalongan, Jawa Tengah</a>");
  
      
//galeri section
let fotolist = document.getElementsByClassName('fl');
let preview = document.getElementById('preview');
preview.addEventListener('click', (e)=>{
   let div = document.createElement('div')
   let active = document.getElementsByClassName('active')[0];
   let body = document.body;
   div.setAttribute('style', "position: fixed; z-index: 20; width: 100vw; height: 100vh; top: 0; left:0; background: rgba(0,0,0,.8); background-image: url('"+active.src+"'); background-position: center center; background-repeat: no-repeat; background-size: contain;");
   div.setAttribute('class',"fadeIn");
   let close = document.createElement('button');
   close.textContent="Tutup";
   close.setAttribute('style',"position: absolute; left: 30%; width: 40%;bottom: 10%; background: transparent; color: #fff; border: 2px solid #fff; border-radius: 8px; box-shadow: none; padding: 3% 5%;")
   close.addEventListener('click', (a)=>{
      body.removeChild(div);
            //div.style.backgroundImage = `url("${fotolist[0].src}")`;
   })
          
   div.appendChild(close)
   
   let next = document.createElement("button");
   next.setAttribute('class', 'buatHover');
   
   div.appendChild(next);
   let urut = active.getAttribute('urut');
   urut = parseInt(urut);
   next.addEventListener('click', (e)=>{
       urut = parseInt(urut);
       if(urut + 1 >= n){
           urut = 0;
       }
       else {
           urut += 1;
       }
       console.log(urut)
       div.style.backgroundImage = `url('${fotolist[urut].src}')`;
   })
          
   let prev = document.createElement("button");
   prev.setAttribute('class','buatHover');
   div.appendChild(prev);
   prev.addEventListener('click',(e)=>{
      urut = parseInt(urut);
      if(urut - 1 < 0){
           urut = n - 1;
      }
      else {
           urut -= 1;
      }
      console.log(urut)
      div.style.backgroundImage = `url('${fotolist[urut].src}')`;
    })
          
    body.appendChild(div)
});
      
function tampilFoto(el, src){
    let active = document.getElementsByClassName('active')[0];
     
     el.classList.add('active')
     active.classList.remove('active')
  
    let a = document.createElement('div');
    a.setAttribute('class', "previewFoto");
    a.setAttribute('style',`background-image: url('${src}')`);
        
    a.classList.add(random());
        //a.setAttribute('data-aos', 'slide-down')
    preview.appendChild(a);
}
      
      
let n = 0;
for(let foto of fotolist){
        //console.log('for ok')
   foto.setAttribute('urut', n);
   foto.addEventListener('click', (e)=>{
      console.log("tes")
      tampilFoto(foto, foto.src);
   })
   ++n;
}
      
let b = setInterval(carousel, 3000)
      
function carousel(){
    let active = document.getElementsByClassName('active')[0];
        
    let urut = active.getAttribute('urut');
    urut = parseInt(urut);
    if(urut + 1 >= n){
        urut = 0
    }
    else {
        urut += 1;
    }
    active.classList.remove('active')
    fotolist[urut].classList.add('active');
    gantiFoto();
}
      
function random(){
   let pilih = ["kiri","kiri", "tengah", "tengah", "kanan", "kanan"];
    return pilih[Math.round(Math.random()*(pilih.length-1))]
}
      
function gantiFoto(){
   let preview = document.getElementById('preview');
   let active = document.getElementsByClassName('active')[0];
        
   let a = document.createElement('div');
   a.setAttribute('class', "previewFoto");
   a.setAttribute('style',`background-image: url('${active.src}')`);
   a.classList.add(random());
        //a.setAttribute('data-aos', 'slide-down')
   preview.appendChild(a);
}
      
      
      //gift section
      
function toast(text){
   let toastIni = document.createElement('div');
    
   toastIni.setAttribute('style',"position: fixed; bottom: 10vh; width: 80%; padding: 5%; margin: 0 5%; background: rgba(120, 193, 243, .9); color: #fff; text-align: center; border-radius: 8px; z-index: 25; font-family: 'Montserrat', Sans-Serif;");
    
   toastIni.setAttribute('class','fadeIn');
   toastIni.innerHTML = `<p>${text}</p>`;
   document.body.appendChild(toastIni);

   setTimeout(()=>{
      toastIni.classList.remove('fadeIn');
      toastIni.classList.add('fadeOut');
      setTimeout(()=>{
        document.body.removeChild(toastIni)
      }, 1000);
   }, 2000);
    
}
    
function copy(ini, data) {
  // Get the text field
  //let teks = document.getElementById(coba);
   let copyText = document.createElement('input');
   copyText.value = data;
  //console.log(copyText.value);
  // Select the text field
   copyText.select();
   copyText.setSelectionRange(0, 99999);
  // For mobile devices
   // Copy the text inside the text field
   navigator.clipboard.writeText(copyText.value)
   .then(
      v => {
         toast('Rekening disalin: ' + copyText.value)
         ini.textContent = "Disalin!"
      },
      e => toast(e.toString())//console.log(e.toString())
   );
}

      
let WadahPesan = document.getElementsByClassName('c-pesan')[0];

function getPesan(){
  fetch(link, getParam)
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data);
    pesanList(data);
  })
  .catch((e)=> console.log(e.toString()))
}

function pesanList(arr){
  WadahPesan.innerHTML = "";
  for(let list of arr){
   let d = document.createElement('div');
   d.setAttribute('class','pesan');
   d.innerHTML = `
          <div class="nama">
          <span>
          ${list.nama}
          </span>
          </div>
          <div class="time">
          <span>${list.tanggal}</span>
          <span class="konfirmasi ${list.konfirmasi == 'Hadir' ? 'green' : 'red'}">${list.konfirmasi}</span>
          </div>
          <pre>${list.isiPesan}</pre>
   `;
    WadahPesan.appendChild(d);
   }
}


let link = "https://littleart.my.id/rest";
link = "https://iottry-dfc6.restdb.io/rest/pesan"

let postParam = {
  "mode" : "cors",
  "cache" : "no-cache",
  "method" : "POST",
  "headers" : {
    "Content-Type" : "application/json",
    "x-apikey" : "61272d4843cedb6d1f97e925",
    "cache-control" : "no-cache"
  },
}

let getParam = {
  "mode" : "cors",
  "cache" : "no-cache",
  "method" : "GET",
  "body" : null,
  "headers" : {
    "Content-Type" : "application/json",
    "x-apikey" : "61272d4843cedb6d1f97e925",
    "cache-control" : "no-cache"
  },
}

function tulisPesan(){
    let p = document.createElement('div');
    p.setAttribute('class', "modal-pesan");
    p.setAttribute('data-aos', "fade-up");
    p.innerHTML = `
        <input id="nama" type="text" placeholder="Masukan namamu di sini" />
        <input id="tanggal" type="text" value="" readonly />
        <select id="konfirmasi">
          <option value="">--Pilih-- </option>
          <option value="Hadir">Hadir</option>
          <option value="Tidak Hadir">Tidak Hadir</option>
        </select>
        <textarea id="pesanmu" placeholder="Masukan pesanmu di sini"></textarea>
        
        <button id="batal">Batal</button>
        <button id="kirim">Kirim Pesan</button>
    `;
        
    document.body.appendChild(p)
    let nama = document.getElementById('nama')
    let tanggal = document.getElementById('tanggal')
    let konfirmasi = document.getElementById('konfirmasi')
    let pesanmu = document.getElementById('pesanmu')
    let batal = document.getElementById('batal')
    let kirim = document.getElementById('kirim')
        
    let date = new Date();
    let bulan = date.getMonth()+1;
    if(bulan.length < 2){
        bulan = "0" + bulan;
    }
    tanggal.value = date.getHours() + ':' + date.getMinutes() + " " + date.getDate() + '/' + bulan + '/' + date.getFullYear()
        
    batal.addEventListener('click', (e)=>{
        document.body.removeChild(p)
    })
        
    kirim.addEventListener('click', (e)=>{
        let data = {}
        data.nama = nama.value;
        //data.tanggal = tanggal.value;
        data.konfirmasi = konfirmasi.value;
        data.isiPesan = pesanmu.value;
        data.tanggal = tanggal.value
          
        if(data.nama == "" || data.pesan == "" || data.konfirmasi == ""){
            toast("Masukan nama dan pesanmu serta konfirmasi kehadiran.");
        }
        else {
          postParam.body = JSON.stringify(data);
          ///batal.click();
          document.body.removeChild(p)
          fetch(link, postParam)
          .then((res)=>res.json())
          .then((feed)=>{
            console.log(feed)
            getPesan()
          })
          .catch((e)=>toast(e.toString()))
        }
        console.log(data)
    })
}


let waktuAcara = new Date("Aug 20, 2024 07:00:00").getTime();
function timer(){
  
  let waktu = new Date().getTime();
  let durasi = waktuAcara - waktu;
  
  if(durasi <= 0){
    return "selesai"
  }
  
  let hari = Math.floor(durasi/1000/60/60/24);
  let jam = Math.floor((durasi % (1000*60*60*24))/1000/60/60);
  let menit = Math.floor((durasi % (60*60*1000))/1000/60);
  let detik = Math.floor((durasi % (60*1000))/1000);
  console.log(hari + ", " + jam + ", " +menit + ", " + detik);
  
  return [hari, jam, menit, detik];
}

function countDown(arr = []){
  let counts = document.getElementsByClassName('count')
  
  for(let m = 0; m<counts.length; ++m){
    counts[m].textContent = arr[m];
  }
}

let c = setInterval(()=>{
  let arr = timer();
  //console.log(arr)
  if(dibuka == true){
    clearInterval(c);
  }
  
  
  if(arr == "selesai"){
    document.getElementById('counter').innerHTML =`
    <div class="selesai">
    Acara sudah dimulai
    </div>
    `;
  }
  else{
   countDown(arr);
  }
}, 1000);

//clearInterval(c);

getPesan()

/*
fetch(link, getParam).then((res)=>res.json()).then((data)=>{
  console.dir(data);
}).catch((e)=>{console.dir(e)})*/
let control = document.getElementById('control');
let expand = document.getElementById('expand');
let hide = document.getElementsByClassName('hide');
let show = false;

function hideMenu(arr){
  for(let menu of arr){
    menu.style.display = "none";
  }
}

function showMenu(arr){
  for(let menu of arr){
    menu.style.display = "flex";
  }
}

hideMenu(hide)

expand.onclick = (e)=>{
  if(show == false){
  showMenu(hide);
  show = true;
  }
  else {
    hideMenu(hide)
    show = false;
  }
}

function jump(target){
  let a = document.createElement('a');
  a.setAttribute('href','#'+target)
  a.click();
}

let canHide = document.getElementsByClassName('canHide');

function hideNow(arr){
  for(let rekening of arr){
    rekening.style.display = "none"
  }
}

let thisUrl = document.location.href;
//toast(thisUrl.split('_').length.toString());

if(thisUrl.split('_').length > 1){
  hideNow(canHide);
}
else {
  //do nothing
}
