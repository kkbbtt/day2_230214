console.log("Hello world");

// 箱（変数）の作り方
var box = "箱だよ";
console.log(box);

var name = "Tech Next";
var age = "20";
var gender = "男";

console.log(name);
console.log(age);
console.log(gender);

// 四則演算ができる
console.log(1 + 1);


var a = 5
var b = 12
var c = 13
var d = 20

console.log(a + b + c);
console.log((a + b) * c);
console.log(d - a);
console.log(b * c);
console.log(d / a);
console.log(d % c);

// 条件分岐
var height = 185;
if (height < 130) {
    console.log("規定未満なので乗れませんよ");
} else if(height > 200) {
    console.log("規定を超えているため乗れませんよ");
} else {
    console.log("乗れますよ");
}


var ichiro = 23;
var jiro = 20;
var saburo = 17;
var shiro = 9;

if (ichiro >= 20) {
    console.log("20歳以上です");
}

if (jiro == 20) {
    console.log("二十歳です");
}

if (saburo <=20 && shiro <=20) {
    console.log("2人とも20歳以下です");
}

if (shiro >= 5) {
    console.log("5歳以上です");
} else {
    console.log("5歳未満です");
}


if (shiro <10) {
    console.log("子供です");
}

if (saburo >=10 && saburo<=19) {
    console.log("10代です");
}

// 繰り返し構文
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

for (var i = 1; i <= 10; i++) {
    console.log(i);
}

for (var i = 10; i <= 20; i++) {
    console.log(i);
}

for (var i = 1; i <= 100; i++) {
    console.log(i);
}

for (var i = 1; i <= 100; i = i +2) {
    console.log(i);
}

// ここから練習問題

// 基本

console.log("Hello World");

var name = "Superman";
console.log("変数nameの中身：" + name);

var lastName = "Kazuhiro";
var firstName ="Kubota";

console.log(lastName + " " + firstName);

var a = 10
var b = 2
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

var c = 10;
var d = 3;
console.log(c % d);

var e = 11;
var f = 13;
var g = e * f;
console.log(g);

var x = 10;
console.log(x);
console.log(x * x);
console.log(x * x * x);

// 条件分岐

var x = 15;
var y = 9;
if (x > y) {
    console.log("xはyより大きい。");
}

var x = 7;
var y = 9;
if (x > y) {
    console.log("xはyより大きい。");
} else if (y == x) {
    console.log("xとyは等しい");
} else {
    console.log("xはyより小さい");
}

var x = 7;
if (x % 2 == 0) {
    console.log("偶数です");
} else if (x % 2 == 1) {
    console.log("奇数です");
}

var x = 21;
if (x % 3 == 0) {
    console.log("3の倍数です");
} else if (x % 5 == 0) {
    console.log("5の倍数です");
} else {
    "3と5の倍数以外です"
}

var x = 15;
if (x >=10 && x <=20) {
    console.log("10以上かつ20以下です");
}

var x = 108;
if (x >=100 || x <=10) {
    console.log("100以上または10以下です");
}

var x = "セブアノ語";
if (x == "日本語") {
    console.log("ありがとう");
} else if (x == "英語") {
    console.log("thabk you");
} else if (x == "セブアノ語") {
    console.log("salamat");
} else {
    "わかりません"
}


// 繰り返し

for (var i = 1; i <= 10; i++) {
    console.log("hoge");
}

for (var i = 1; i <= 10; i++) {
    console.log(i);
}

for (var i = 1; i <= 9; i++) {
    console.log(i * 2);
}

for (var i = 2; i <= 100; i=i+2) {
    console.log(i);
}