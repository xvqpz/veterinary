const map = L.map('map');
map.setView([54.7286,25.2394], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', 
}).addTo(map);


const data = {
seskines: {
  coords: [54.7162159, 25.2459775],
  title: "Šeškinės veterinarijos klinika",
  address: `<b>Šeškinės veterinarijos klinika</b><br>
            Šeškinės g. 26<br>
            Vilnius`,
  website: 'http://www.vetgyd.lt/',
  phone: '+867790977'
},
drvet: {
  coords: [54.71529, 25.25016],
  title: "DR.VET Šeškinės",
  address: `<b>DR.VET Šeškinės</b><br>
          Šeškinės g. 22<br>
          Vilnius`,
  website: 'http://www.drvet.lt/',
  phone: '+37061112854'
},
letenele: {
  coords: [54.71922,25.25663],
  title: "AD Letenėlė",
  address: `<b>AD Letenėlė</b><br>
  Gelvonų g.<br>
  Vilnius`,
  website: 'http://www.adletenele.lt/',
  phone:'+37064615030'
},
drvet2:{
  coords:[54.70494,25.27163],
  title:"DR.VET Žalgirio klinika",
  address:`<b>DR.VET Žalgirio klinika</b><br>
  Žalgirio g. 135<br>
  Vilnius`,
  website: 'http://drvet.lt/',
  phone:'+370 611 41 596'
},
antanas:{
  coords:[54.70480,25.31001],
  title:"Antakalnio veterinarijos gydykla",
  address:`<b>Antakalnio veterinarijos gydykla</b><br>
  Antakalnio g. 50<br>
  Vilnius`,
  website: 'http://vetpaslaugos.lt/',
  phone:'+852344522'
},
jeruzale:{
  coords:[54.74185,25.27750],
  title:"Jeruzales veterinarijos klinika",
  address:`<b>Jeruzales veterinarijos klinika</b><br>
  Jeruzalės g. 7<br>
  Vilnius`,
  website: 'https://www.vetgydykla.lt/',
  phone:'+370 652 51003'
},
pijus:{
  coords:[54.73395,25.24661],
  title:"Valveta",
  address:`<b>Valveta</b><br>
  P. Žadeikos g. 9<br>
  Vilnius`,
  website: 'https://valveta.lt/',
  phone:'+3702304530'
},
tarande:{
  coords:[54.74899,25.19558],
  title:"Tarandes gyvunu namai",
  address:`<b>Tarandes gyvunu namai</b><br>
  Pikutiškių g. 9<br>
  Vilnius`,
  website: 'http://www.tarandesvet.lt/',
  phone:'+8 600 42545'
},
vetpulsas:{
  coords:[54.73603,25.21883],
  title:"Vetpulsas",
  address:`<b>Vetpulsas</b><br>
  Pavilnionių g. 35-41<br>
  Vilnius`,
  website: 'https://www.vetpulsas.lt/',
  phone:'+370 620 81 292'
},
vdc:{
  coords:[54.73635,25.22549],
  title:"Veterinarinės diagnostikos ir chirurgijos klinika",
  address:`<b>Veterinarinės diagnostikos ir chirurgijos klinika</b><br>
  Gabijos g. 40-53<br>
  Vilnius`,
  website: 'https://vdcklinika.lt/',
  phone:'+370 636 36 455'
},
zirafa:{
  coords:[54.72756,25.22679],
  title:"Greitoji Žirafa veterinarijos klinika",
  address:`<b>Greitoji Žirafa veterinarijos klinika</b><br>
  Žemynos g. 2B<br>
  Vilnius`,
  website: 'http://www.greitojizirafa.lt/',
  phone:'+370 606 98886'
},
indre:{
  coords:[54.72592,25.23129],
  title:"Indrės veterinarijos gydykla",
  address:`<b>Indrės veterinarijos gydykla</b><br>
  Žemynos g. 1<br>
  Vilnius`,
  website: 'http://www.indresgydykla.lt/',
  phone:'+370 5 2387533'
},
vet1:{
  coords:[54.72361,25.23156],
  title:"Vet1 Veterinary Clinic",
  address:`<b>Vet1 Veterinary Clinic</b><br>
  Žemynos g. 30<br>
  Vilnius`,
  website: 'https://www.vet1.lt/veterinarijos-klinika',
  phone:'+370 671 69828'
},
buivy:{
  coords:[54.71842,25.22181],
  title:"Buivydiškės Veterinary Clinic",
  address:`<b>Buivydiškės Veterinary Clinic</b><br>
  Justiniškių g. 64<br>
  Vilnius`,
  website: 'http://bvkklinika.lt/',
  phone:'+866377737'
},
just:{
  coords:[54.71691,25.22982],
  title:"Justiniškių Veterinarijos Klinika",
  address:`<b>Justiniškių Veterinarijos Klinika</b><br>
  Rygos g. 1<br>
  Vilnius`,
  website: 'http://www.justvetklinika.lt/',
  phone:'+852 400 337'
},
virsul:{
  coords:[54.70697,25.22425],
  title:"Viršuliškės Veterinary Clinic",
  address:`<b>Viršuliškės Veterinary Clinic</b><br>
  Viršuliškių g. 63<br>
  Vilnius`,
  website:'http://www.vilniausveterinarija.lt/',
  phone:'+370 690 00027'
},
shablon:{
  coords:[54.73082,25.23567],
  title:"VILNIUS VET",
  address:`<b>VILNIUS VET</b><br>
  Pašilaičių g. 1D<br>
  Vilnius`,
  website:'http://vilniusvet.lt/',
  phone:'+37060625957'
},
rita:{
  coords:[54.72565,25.24581],
  title:"Rita Žilinskienė Veterinary clinic",
  address:`<b>Rita Žilinskienė Veterinary clinic</b><br>
  Fabijoniškių g. 61<br>
  Vilnius`,
  website:'https://www.vetcentras.lt/',
  phone:'+37068989355'
},
zaliakalnis:{
  coords:[54.91074,23.91871],
  title:"Zaliakalnio veterinarija",
  address:`<b>Zaliakalnio veterinarija</b><br>
  Darbininkų g. 13<br>
  Kaunas`,
  website:'http://www.vetzaliakalnis.lt/',
  phone:'+8 601 23667'
},
vetmed:{
  coords:[54.91631,23.95280],
  title:"Veterinary Medical Center",
  address:`<b>Veterinary Medical Center</b><br>
  Partizanų g. 26<br>
  Kaunas`,
  website:'http://www.vetmedcentras.lt/',
  phone:'+8 612 80 004'
},
divaura:{
  coords:[54.91966,23.95834],
  title:"Veterinarijos klinika Divaura",
  address:`<b>Veterinarijos klinika Divaura</b><br>
  Partizanų g. 25<br>
  Kaunas`,
  website:'http://divaura.lt/',
  phone:'+370 612 55855'
},
shablon:{
  coords:[54.90152,23.97131],
  title:"Milavet veterinarijos klinika",
  address:`<b>Milavet veterinarijos klinika</b><br>
  K. Baršausko g. 83<br>
  Kaunas`,
  website:'http://www.milavet.lt/',
  phone:'+370 (609) 52 784'
},
boba:{
  coords:[54.89940,24.00441],
  title:"Snauceris, V. Siaurio veterinariniu paslaugu firma",
  address:`<b>Snauceris, V. Siaurio veterinariniu paslaugu firma</b><br>
  Technikos g. 39<br>
  Kaunas`,
  website:'http://www.snaucerisvet.lt/',
  phone:'+370 655 55818'
},
snauc:{
  coords:[54.92563,23.97770],
  title:"Veterinarijos Klinika Siaurio Šnauceris",
  address:`<b>Veterinarijos Klinika Siaurio Šnauceris</b><br>
  Pramonės pr. 36A, Kaunas, 50348 Kauno m. sav.<br>
  Kaunas`,
  website:'http://www.snaucerisvet.lt/',
  phone:'+370 655 55818'
},
vetvila:{
  coords:[54.95060,24.03520],
  title:"Vetvila",
  address:`<b>Vetvila</b><br>
  Miglės g. 1<br>
  Kaunas`,
  website:'http://www.vetvila.lt/',
  phone:'+370 601 88240'
},
// shablon:{
//     coords:[],
//     title:"",
//     address:`<b></b><br>
//     <br>
//     Kaunas`,
//     website:'',
//     phone:''
// },


};

for (let key in data) {
const vet = data[key]; 

if (vet.coords) { 
  L.marker(vet.coords, { 
      title: vet.title,
  })
  .bindPopup(`${vet.address}<br> <a href="${vet.website}">${vet.website}</a><br> <a href="tel:${vet.phone}">${vet.phone}</a>`)
  .addTo(map);
}
}

L.control.locate().addTo(map);
