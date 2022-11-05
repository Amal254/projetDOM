
let total=document.getElementById('total')

let part1=document.getElementById('part1')
let pqtn_1=document.getElementById('pqtn1')
let p1_price=document.getElementById('p1price')



let part2=document.getElementById('part2')
let pqtn_2=document.getElementById('pqtn2')
let p2_price=document.getElementById('p2price')


let part3=document.getElementById('part3')
let pqtn_3=document.getElementById('pqtn3')
let p3_price=document.getElementById('p3price')


let heart_0=document.getElementById('heart')
let heart_1=document.getElementById('heart1')
let heart_2=document.getElementById('heart2')
// ===================== start part 1 ======================
function heart1(){
  if(heart_0.style.color=='red'){
    heart_0.style.color='black'
  }
  else{
    heart_0.style.color='red'
  }
}

function inc(){
  pqtn_1.innerHTML=+pqtn_1.innerHTML+1
  p1_price.innerHTML=+p1_price.innerHTML+250
  total.innerHTML=+total.innerHTML+250
}

function dec(){
  if(pqtn_1.innerHTML==0){
    pqtn_1.innerHTML=pqtn_1.innerHTML
    total.innerHTML=+total.innerHTML
    p1_price.innerHTML=p1_price.innerHTML
  }
  else{  pqtn_1.innerHTML=+pqtn_1.innerHTML-1
    total.innerHTML=+total.innerHTML-250
    p1_price.innerHTML=+p1_price.innerHTML-250}

}
function remove(){
part1.style.display='none'
total.innerHTML=+total.innerHTML-p1_price.innerHTML
}
// ===================== start part 2 ======================
function inc2(){
  pqtn_2.innerHTML=+pqtn_2.innerHTML+1
  p2_price.innerHTML=+p2_price.innerHTML+250;
  total.innerHTML=+total.innerHTML+250
}
function dec2(){
  if(pqtn_2.innerHTML==0){
    pqtn_2.innerHTML=pqtn_2.innerHTML
    total.innerHTML=+total.innerHTML
    p2_price.innerHTML=p2_price.innerHTML
  }
  else{  pqtn_2.innerHTML=+pqtn_2.innerHTML-1
    total.innerHTML=+total.innerHTML-250
    p2_price.innerHTML=+p2_price.innerHTML-250}
}
function remove2 (){
part2.style.display='none'
total.innerHTML=total.innerHTML-p1price2.innerHTML
}
function heart2(){
  if(heart_1.style.color=='red'){
    heart_1.style.color='black'
  }
  else{
    heart_1.style.color='red'
  }
}
// ===================== start part 3 ======================
function inc3(){
  pqtn_3.innerHTML=+pqtn_3.innerHTML+1
  p3_price.innerHTML=+p3_price.innerHTML+250;
  total.innerHTML=+total.innerHTML+250
}

function dec3(){
  if(pqtn_3.innerHTML==0){
    pqtn_3.innerHTML=pqtn_3.innerHTML
    total.innerHTML=+total.innerHTML
    p3_price.innerHTML=p3_price.innerHTML
  }
  else{  pqtn_3.innerHTML=+pqtn_3.innerHTML-1
    total.innerHTML=+total.innerHTML-250
    p3_price.innerHTML=+p3_price.innerHTML-250}

}
function remove3(){
part3.style.display='none'
total.innerHTML=total.innerHTML-p1price3.innerHTML
}
function heart3(){
  if(heart_2.style.color=='red'){
    heart_2.style.color='black'
  }
  else{
    heart_2.style.color='red'
  }
}