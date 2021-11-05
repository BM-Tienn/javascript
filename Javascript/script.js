console.log('abc');
// alert('abc');

var a = 1;
if (true) {
  console.log(a);
  var a = 2;
  console.log(a);
}

function sum(x, y) {
  console.log(a);
  return x + y;
}
sum(1, 2);

let b = 1;
b = 7;
if (true) {
  // console.log(b);
  let b = 2;
  console.log(b);
}
console.log(b);

const x = 5;
// const x = 7;

var m = new Boolean(false);
if (m) {
  // this code is executed
  console.log(typeof m);
}

// variables
// var x = 5;
// if (x % 2 == 1) {
//   console.log('là số lẻ', x);
//   var x = 6;
//   console.log(x);
// }
// console.log(x);

// let y = 5;
// if (y % 2 == 1) {
//   let y = 6;
//   console.log('là số lẻ', y);
//   console.log(y);
// }
// console.log(y);

const z = 10;
// const z = 5;
// z = 7;

console.log(`anbcbc

dkdkdk
dkkdkd

kđldldld
kdkdkkd
jjdjdjd`);

var str = '  abcd aef dagh aif a    j  f  ';
var newStr = '';
var countA = 0;

for (let i = 0; i < str.length; i++) {
  // reverse string
  newStr = str[i] + newStr;

  // count "a"
  if (str.charAt(i) === 'a') {
    countA++;
  }
}
console.log(newStr);
console.log(countA);

var countWord = 0;
var str1 = str.trim();
for (let i = 0; i < str1.length; i++) {
  // count word
  if (
    str1.charAt(i) !== ' ' &&
    (str1.charAt(i + 1) === ' ' || i === str1.length - 1)
  ) {
    countWord++;
  }
}
console.log(countWord);

var arr = [1, 10, 11, 2, 28, 3, 5];
var length = arr.length;
for (var j = 1; j < length; j++) {
  for (i = 0; i < j; i++) {
    if (arr[i] > arr[j]) {
      const tmp = arr[j];
      arr[j] = arr[i];
      arr[i] = tmp;
    }
  }
}
console.log(arr, arr[length - 2]);

// for (var j = 0; j < length; j++) {
//   for (i = j + 1; i < length; i++) {
//     if (arr[i] < arr[j]) {
//       const tmp = arr[j];
//       arr[j] = arr[i];
//       arr[i] = tmp;
//     }
//   }
// }
// console.log(arr, arr[length - 2]);

var obj = {
  a: 1,
  b: 'xyz',
  c: function () {
    return console.log('hello');
  },
};
obj.c();
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    const element = obj[key];
    console.log(key, element);
  }
}
console.log(Object.keys(obj), Object.values(obj));

function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2));
console.log(sum(5, 10));

minus = (a, b) => {
  return a - b;
};
console.log(minus(5, 10));

function notify() {
  console.log('Notify');
}
function taskOne(callback) {
  callback();
}
taskOne(notify);

function calculate(operator) {
  var num1 = parseFloat(document.getElementById('number1').value);
  var num2 = parseFloat(document.getElementById('number2').value);
  var result;
  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === 'x') {
    result = num1 * num2;
  } else if (operator === '/') {
    result = num1 / num2;
  }
  document.getElementById('result').innerHTML = result.toFixed(2);
}

// slide show
// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }

// Destructuring
var x1 = 1, y1 = 2;
var [a1, b1] = [x1, y1];
console.log(a1, b1);  // a1=1, b1=2

[x1, y1] = [y1, x1];
console.log(x1, y1);

function kiem_tra_snt(n) {
  // Biến cờ hiệu
  var flag = true;

  if (n < 2) {
    flag = false;
  }
  else if (n == 2) {
    flag = true;
  }
  // Nếu n là số chẵn > 2
  else if (n % 2 == 0) {
    flag = false;
  }
  else {
    // n là số lẻ >= 3
    // lặp từ 3 tới Math.sqrt(n) với bước nhảy là 2 (i+=2)
    for (var i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i == 0) {
        flag = false;
        break;
      }
    }
  }
  return flag;
}
function danh_sach_snt(n) {
  var list = [];
  for (var j = 1; j <= n; j++) {
    if (kiem_tra_snt(j)) {
      list.push(j)
    }
  }
  return list;
}
console.log(danh_sach_snt(20));

function sum(a,b) {
  let c = 1;
  function log() {
    let d = 5;
    console.log(a, c, d);  // ok
  }
  log();
  // console.log(d);  // lỗi
  return a + b + c;
}
console.log(sum(1,10));

function makeAdder(x) {
  return (y) => { return x + y; }
}
var add5 = makeAdder(5);
var add10 = makeAdder(10);
console.log(add5(2), add10(2), add10(3)) // 7, 12, 13