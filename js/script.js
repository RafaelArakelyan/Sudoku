'use strict'

let randomNumber = document.querySelectorAll('.blok1>.d') //fillNumber1
let fillNumber2 = document.querySelectorAll('.blok2>.d')
let fillNumber3 = document.querySelectorAll('.blok3>.d')
let fillNumber4 = document.querySelectorAll('.blok4>.d')
let fillNumber5 = document.querySelectorAll('.blok5>.d')
let fillNumber6 = document.querySelectorAll('.blok6>.d')
let fillNumber7 = document.querySelectorAll('.blok7>.d')
let fillNumber8 = document.querySelectorAll('.blok8>.d')
let fillNumber9 = document.querySelectorAll('.blok9>.d')

let secHoriz1 = document.querySelectorAll('.blok > .s1')
let secHoriz2 = document.querySelectorAll('.blok > .s2')
let secHoriz3 = document.querySelectorAll('.blok > .s3')
let secHoriz4 = document.querySelectorAll('.blok > .s4')
let secHoriz5 = document.querySelectorAll('.blok > .s5')
let secHoriz6 = document.querySelectorAll('.blok > .s6')
let secHoriz7 = document.querySelectorAll('.blok > .s7')
let secHoriz8 = document.querySelectorAll('.blok > .s8')
let secHoriz9 = document.querySelectorAll('.blok > .s9')

let secVert1 = document.querySelectorAll('.blok > .sv1')
let secVert2 = document.querySelectorAll('.blok > .sv2')
let secVert3 = document.querySelectorAll('.blok > .sv3')
let secVert4 = document.querySelectorAll('.blok > .sv4')
let secVert5 = document.querySelectorAll('.blok > .sv5')
let secVert6 = document.querySelectorAll('.blok > .sv6')
let secVert7 = document.querySelectorAll('.blok > .sv7')
let secVert8 = document.querySelectorAll('.blok > .sv8')
let secVert9 = document.querySelectorAll('.blok > .sv9')

let newbtn = document.querySelector('.newBtn')
let option1 = document.querySelector('.easy')
let option2 = document.querySelector('.middle')
let option3 = document.querySelector('.hard')
let select = document.querySelector('.select')

let wrapVictor = document.querySelector('.wrap-victor')

let inpSwitch = document.querySelector('input')

let arrSudoku, arrSudoku1 = [],
   obj = {}

let sudokuItems = document.querySelectorAll('.blok>.d')

let ansver = document.querySelectorAll('.ansver')


// Կոճակների պատահարները
newbtn.addEventListener('click', newRandom)





//////////////////////////////////////////////////////////////
//Պատահական ձևով լրացնում ենք sudoku-ն
function newRandom() {
   // Զրոյացնում ենք դաշտերի ֆոները
   for (let i = 0; i < sudokuItems.length; i++) {
      sudokuItems[i].style.backgroundColor = ''
      sudokuItems[i].style.textDecoration = 'none' //Խաղը թարմացնելուց ջնջում ենք բոլոր underscore-ները
   }

   obj = {} // խաղը թարմացնելուց օբյեկտը դատարկում ենք, որպեսզի գալոչկան միացնելուց նախորդ խաղից մնացած underscore-ները նորից ցույց չտա

   wrapVictor.style.display = 'none'

   let t1 = true,
      t2 = true,
      t3 = true,
      a;
   //Պատահական ձևով լրացնում ենք առաջին սեկցիան
   for (let i = 0; i < randomNumber.length; i++) {
      randomNumber[i].innerHTML = ''
   }

   function rand() {
      return Math.round(Math.random() * 8 + 1)
   }
   t1 = true

   while (t1) {
      t2 = true
      for (let i = 0; i < randomNumber.length; i++) {
         if (randomNumber[i].innerHTML == '') {
            t2 = false;
         }
      }
      if (t2) {
         t1 = false
      }

      a = rand() //Ստանում ենք պատահական թիվ [1-9] միջակայքից

      for (let i = 0; i < randomNumber.length; i++) {
         if (randomNumber[i].innerHTML == '') {
            t3 = true
            for (let j = 0; j < randomNumber.length; j++) {
               if (randomNumber[j].innerHTML == a && i != j) {
                  t3 = false
               }
            }
            if (t3) {
               randomNumber[i].innerHTML = a
            }
         }
      }
   }



   //Երկրորդ մասը
   // Ըստ առաջին սեկցիաի, պատահական գեներացված, լրացնում ենք մնացած արկղեը, նախորոք մշակված ալգորիթմի
   let arr = [
      [],
      [],
      []
   ];
   let k = 0;


   //Սեկցիայի արկղերը տեղափոխում է տեղերով
   function fill_1(arrExam) {
      let k1
      for (let i = 0; i < arrExam.length - 1; i++) {
         for (let j = 0; j < arrExam[i].length; j++) {
            k1 = arrExam[i][j]
            arrExam[i][j] = arrExam[i + 1][j]
            arrExam[i + 1][j] = k1
         }
      }
      return arrExam
   }

   for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
         arr[i][j] = +randomNumber[k].innerHTML
         k++
      }
   }

   k = 0
   arr = fill_1(arr)

   for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
         fillNumber2[k].innerHTML = arr[i][j]
         k++
      }
   }

   arr = fill_1(arr)
   k = 0
   for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
         fillNumber3[k].innerHTML = arr[i][j]
         k++
      }
   }



   //Երրորդ մաս
   //Լրացնում ենք մնացած սեկցիաները, ըստ նախորոք մշակված ալգորիթմի

   let arrSec1 = [
      [],
      [],
      []
   ]

   function fill_2(arr) {
      let k2;
      for (let i = 0; i < arr.length; i++) {
         for (let j = 0; j < arr[i].length - 1; j++) {
            k2 = arr[i][j]
            arr[i][j] = arr[i][j + 1]
            arr[i][j + 1] = k2
         }
      }
      return arr
   }

   for (let i = 0; i < randomNumber.length; i++) {
      arrSec1[0][i] = +randomNumber[i].innerHTML
   }
   for (let i = 0; i < fillNumber2.length; i++) {
      arrSec1[1][i] = +fillNumber2[i].innerHTML
   }
   for (let i = 0; i < fillNumber3.length; i++) {
      arrSec1[2][i] = +fillNumber3[i].innerHTML
   }
   arrSec1 = fill_2(arrSec1)


   for (let i = 0; i < arrSec1[0].length; i++) {
      fillNumber4[i].innerHTML = arrSec1[0][i]
   }
   for (let i = 0; i < arrSec1[1].length; i++) {
      fillNumber5[i].innerHTML = arrSec1[1][i]
   }
   for (let i = 0; i < arrSec1[2].length; i++) {
      fillNumber6[i].innerHTML = arrSec1[2][i]
   }
   arrSec1 = fill_2(arrSec1)
   for (let i = 0; i < arrSec1[0].length; i++) {
      fillNumber7[i].innerHTML = arrSec1[0][i]
   }
   for (let i = 0; i < arrSec1[1].length; i++) {
      fillNumber8[i].innerHTML = arrSec1[1][i]
   }
   for (let i = 0; i < arrSec1[2].length; i++) {
      fillNumber9[i].innerHTML = arrSec1[2][i]
   }




   //Չորորդ մաս։ Պատահական կերպով խառնում ենք շարքերը
   let rand1 = Math.round(Math.random() * 2)
   if (rand1 == 0) {
      let krand;
      for (let i = 0; i < 9; i++) {
         krand = secVert1[i].innerHTML
         secVert1[i].innerHTML = secVert2[i].innerHTML
         secVert2[i].innerHTML = krand
      }
      for (let i = 0; i < 9; i++) {
         krand = secVert4[i].innerHTML
         secVert4[i].innerHTML = secVert6[i].innerHTML
         secVert6[i].innerHTML = krand
      }
      for (let i = 0; i < 9; i++) {
         krand = secVert8[i].innerHTML
         secVert8[i].innerHTML = secVert9[i].innerHTML
         secVert9[i].innerHTML = krand
      }
   }
   if (rand1 == 1) {
      let krand;
      for (let i = 0; i < 9; i++) {
         krand = secVert1[i].innerHTML
         secVert1[i].innerHTML = secVert3[i].innerHTML
         secVert3[i].innerHTML = krand
      }
      for (let i = 0; i < 9; i++) {
         krand = secVert4[i].innerHTML
         secVert4[i].innerHTML = secVert5[i].innerHTML
         secVert5[i].innerHTML = krand
      }
      for (let i = 0; i < 9; i++) {
         krand = secVert7[i].innerHTML
         secVert7[i].innerHTML = secVert8[i].innerHTML
         secVert8[i].innerHTML = krand
      }
   }
   if (rand1 == 2) {
      let krand;
      for (let i = 0; i < 9; i++) {
         krand = secVert2[i].innerHTML
         secVert2[i].innerHTML = secVert3[i].innerHTML
         secVert3[i].innerHTML = krand
      }
      for (let i = 0; i < 9; i++) {
         krand = secVert5[i].innerHTML
         secVert5[i].innerHTML = secVert6[i].innerHTML
         secVert6[i].innerHTML = krand
      }
      for (let i = 0; i < 9; i++) {
         krand = secVert7[i].innerHTML
         secVert7[i].innerHTML = secVert9[i].innerHTML
         secVert9[i].innerHTML = krand
      }
   }



   //Մաս հինգերորդ։ Ըստ ընտրված կատեգորիայի գեներացնում է համապատասխան sudoku-ն՝ պարզ, միջին, բարդ:

   //Ստանում ենք sudoku-ն զանգվածի տեսքով
   arrSudoku = [
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      []
   ]
   let ksud = 0
   for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
         arrSudoku[i][j] = +sudokuItems[ksud].innerHTML
         arrSudoku1[ksud] = +sudokuItems[ksud].innerHTML
         sudokuItems[ksud].style.color = 'black' //Անջատում ենք նախորդ խաղում տրված ոճերը
         ksud++
      }
   }


   if (select.value == 'easy') {
      let keasy = 0
      while (keasy < 42) {
         let reasy = Math.floor(Math.random() * 81)
         if (sudokuItems[reasy].innerHTML != '') {
            sudokuItems[reasy].innerHTML = ''
            keasy++
         }
      }
   }
   if (select.value == 'middle') {
      let kmiddle = 0
      while (kmiddle < 50) {
         let rmiddle = Math.floor(Math.random() * 81)
         if (sudokuItems[rmiddle].innerHTML != '') {
            sudokuItems[rmiddle].innerHTML = ''
            kmiddle++
         }
      }
   }
   if (select.value == 'hard') {
      let khard = 0
      while (khard < 56) {
         let rhard = Math.floor(Math.random() * 81)
         if (sudokuItems[rhard].innerHTML != '') {
            sudokuItems[rhard].innerHTML = ''
            khard++
         }
      }
   }


   //Կապում ենք արկղերի պատահարները այնպես, որ -ի սկզբնական արժեքները չկարողանանք փոխել
   for (let i = 0; i < sudokuItems.length; i++) {
      if (sudokuItems[i].innerHTML == '') {
         sudokuItems[i].addEventListener('click', clickStyle)
      }
   }
}





///////////////////////////////////////////////////////////////
// Տալիս ենք ֆունկցիոնալություն sudoku-ի արկղերին

let x, y, z = 0,
   z1 = 0,
   z3

function clickStyle() {
   z = 1
   for (let i = 0; i < sudokuItems.length; i++) {
      sudokuItems[i].style.backgroundColor = ''
   }
   this.style.backgroundColor = '#3F8161'
   x = +this.classList[1] - 1
}

for (let i = 0; i < ansver.length; i++) {
   ansver[i].addEventListener('click', pushItem)
}


function pushItem() {
   let kcheck = 0,
      g = 0
   if (z == 1) {
      z3 = this.innerHTML
      y = +this.innerHTML

      //Ավելացրեցինք խաչը, թվերը ջնջելու համար։ Այստեղ ստուգում ենք խաչը սեղմելու դեպքը
      if(isNaN(z3)){
         sudokuItems[x].innerHTML = ''
      }
      else{
         //Ստանում ենք օբյեկտը սխալի դեպքը գրելու համար 
         obj[x] = y

         sudokuItems[x].innerHTML = y
         sudokuItems[x].style.color = 'red'

         //Ստուգում ենք խաղի հաղթելու պայմանը
         for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
               if (arrSudoku[i][j] == +sudokuItems[kcheck].innerHTML) {
                  g++
                  sudokuItems[kcheck].style.textDecoration = 'none' //Թվի ճիշտ ներմուծելու դեպքում ջնջում է տակի գիծը
               }
               kcheck++
            }
         }

         //Հաղթելու դեպքում կատարվում է այստեղ գրվածը
         if (g == 81) {
            wrapVictor.style.display = 'flex'
         }

         if (z1) {
            switchBtn()
         }
      }

      inpSwitch.addEventListener('click', switchBtn)



      function switchBtn() {
         let arrSwitch = []
         for (let b in obj) {
            arrSwitch.push(b)
         }
         if (inpSwitch.checked) {
            for (let i = 0; i < arrSwitch.length; i++) {
               if (obj[+arrSwitch[i]] != arrSudoku1[+arrSwitch[i]]) {
                  sudokuItems[+arrSwitch[i]].style.textDecoration = 'underline'
               }
            }
            z1 = 1
         } else {
            for (let i = 0; i < arrSwitch.length; i++) {
               sudokuItems[+arrSwitch[i]].style.textDecoration = 'none'
            }
            z1 = 0
         }
      }
   }
}