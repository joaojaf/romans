function toRomanNumerals() {
    var user = document.getElementById('arabicInput');
    var number = user.value;

    let roman = "";
    const romanNumList = {M:1000,CM:900, D:500,CD:400, C:100, XC:90,L:50, XV: 40, X:10, IX:9, V:5, IV:4, I:1};
    let a;
    if(number > 3999)
        return "Enter a number between 1 and 3999";
    else{
        for(let key in romanNumList){
            a = Math.floor(number / romanNumList[key]);
            if(a >= 0){
                for(let i = 0; i < a; i++){
                roman += key;
                }
            }
            number = number % romanNumList[key];
        }
    } 
    document.getElementById("arabicRes").innerHTML = roman;
}


function romanToArabic(){

let userinput = document.getElementById('romanInput');
let userinput2 = userinput.value;
userinput2 = userinput2.toUpperCase();
let romanNum = userinput2.split('');
let romanValue = [];

for (i = 0; i < romanNum.length; i++) {
  if (romanNum[i] === 'M') {
    romanValue.push(1000);
  }
  if (romanNum[i] === 'D') {
    romanValue.push(500);
  }
  if (romanNum[i] === 'C') {
    romanValue.push(100);
  }
  if (romanNum[i] === 'L') {
    romanValue.push(50);
  }
  if (romanNum[i] === 'X') {
    romanValue.push(10);
  }
  if (romanNum[i] === 'V') {
    romanValue.push(5);
  }
  if (romanNum[i] === 'I') {
    romanValue.push(1);
  }
}
var romanSum = 0;

for (i = 0; i < romanValue.length; i++) {
  var arr1 = romanValue[i];

  if (i + 1 < romanValue.length) {
    var arr2 = romanValue[i + 1];

    if (arr1 >= arr2) {
      romanSum = romanSum + arr1;
    } else {
      romanSum = romanSum + arr2 - arr1;
      i++;
    }
  } else {
    romanSum = romanSum + arr1;
  }
}
document.getElementById("romanRes").innerHTML = romanSum;
} 