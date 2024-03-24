$(document).ready(function(){
    $("body").click(function(){
      $("div").removeClass("hilang");
    });
  });

  $(document).ready(function(){
    $("body").click(function(){
      $("h5").removeClass("halo");
    });
  });

  

 function pindahs(){
  let pindahan = document.querySelector("#forom").value;
  localStorage.setItem("namauser" , pindahan);
  window.location.href = "Main.html";
  return false;
}

document.getElementById("spanduk").innerHTML = localStorage.getItem("namauser");




function income() {
  let inc = document.querySelector("#mnama").value;
  let ana = parseFloat(document.querySelector("#mnominal").value); 
  let inu = document.querySelector("#mselect").value;
  
  if(inc === '' || isNaN(ana) || ana <= 0 || inu === ''){ 
    alert("Masukkan data dengan benar");
  } else {
    let data = [{ nama: inc, nominal: ana, select: inu }];
    if(localStorage.getItem("data")) {
      data = JSON.parse(localStorage.getItem("data")).concat(data);
    }
  
    localStorage.setItem("data", JSON.stringify(data));
  
    location.href = "Main.html";
    alert("Pemasukkan Data Berhasil");
 
    return false;
  }
}

let data = JSON.parse(localStorage.getItem("data")) || [];
let totalSaldo = 0;

let isinya = data.map((item, index) => {
  totalSaldo += item.nominal; 
  return `<li class="list-group-item"><span class="dodo">${item.nama}<br> ${item.nominal}<br>${item.select} </span></li><hr>`;
}).join("");

const tambahinc = document.createElement("li");
tambahinc.classList.add("list-group-item");
tambahinc.innerHTML = isinya;
const letaknya = document.getElementById("sukan");
letaknya.appendChild(tambahinc);






function outcome() {
  let ara = document.querySelector("#knama").value; 
  let iru = parseFloat(document.querySelector("#knominal").value); 
  let uri = document.querySelector("#kselect").value;
  
  if(ara === '' || isNaN(iru) || iru <= 0 || uri === ''){ 
    alert("Masukkan data dengan benar");
  } else {
    let manatahu = [{ nama: ara, nominal: iru, select: uri }];
    if(localStorage.getItem("manatahu")) {
      manatahu = JSON.parse(localStorage.getItem("manatahu")).concat(manatahu);
    }
  
    localStorage.setItem("manatahu", JSON.stringify(manatahu));
  
    location.href = "Main.html";
    alert("Pengeluaran Data Berhasil");
 
    return false;
  }
}

let manatahu = JSON.parse(localStorage.getItem("manatahu")) || [];
let saldoku = 0; 

let isiuser = manatahu.map((item, index) => {
  saldoku += item.nominal; 
  return `<li class="list-group-item" ><span class="didi">${item.nama}<br>${item.nominal}<br>${item.select} <span></li>`;
}).join("");

const tambahout = document.createElement("li"); 
tambahout.classList.add("list-group-item"); 
tambahout.innerHTML = isiuser; 
const posisi = document.getElementById("pengeluaran");
posisi.appendChild(tambahout); 

document.getElementById("saldomu").innerText = `Total Saldo: ${totalSaldo - saldoku}`;



function logout(){
  localStorage.clear()
}



