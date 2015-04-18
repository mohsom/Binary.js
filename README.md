#Binary.js 
Small library for working with binary number system numbers. 
#Install
You can install <strong>Binary.js</strong> via <strong>Bower</strong>, just run this command in your terminal:<br>
<code>
$ bower install Binary.js
</code>
<br>
<br>
Or you can download <strong>Binary.js</strong> files from <strong>Google Drive</strong>: <br>
<strong>Binary_.js</strong><br>
<code>https://drive.google.com/file/d/0B7RsSAVShgJcV285dHJ4UjdQazg/view?usp=sharing</code>
<br>
<br>
<strong>Binary.min.js</strong><br>
<code>https://drive.google.com/file/d/0B7RsSAVShgJcYjlWalRGZ1FWRlk/view?usp=sharing</code>
<br>
#Documentation
<strong>_Binary</strong> object contains all the <strong>Binary.prototype</strong> methods for working with binary number system numbers.
<br>
<h2>a) Converting numbers</h2>
<h3>_Binary.decToBinary(int_value)</h3>
Converts the decimal number system value to binary number system value.
<br>
<code>
var a=_Binary.decToBinary(3);
console.log(a); //"011"
</code>
<h3>_Binary.binToDecimal(bin_value)</h3>
Converts the binary number system value to decimal number system value.
<br>
<code>
var a=_Binary.binToDecimal("011");
console.log(a); //3
</code>
<h2>b) Arithmetic operations</h2>
<h3>_Binary.sum(bin_value1,bin_value2)</h3>
Sum.<br>
<code>
var a=_Binary.sum("011","011");
a=_Binary.binToDecimal(a); //6
</code>
<h3>_Binary.subt(bin_value1,bin_value2)</h3>
Subtraction.<br>
<code>
var a=_Binary.subt("011","011");
a=_Binary.binToDecimal(a); //0
</code>
<h3>_Binary.mult(bin_value1,bin_value2)</h3>
Multiplication.<br>
<code>
var a=_Binary.mult("011","011");
a=_Binary.binToDecimal(a); //9
</code>
<h3>_Binary.divis(bin_value1,bin_value2)</h3>
Division.<br>
<code>
var a=_Binary.subt("011","011");
a=_Binary.binToDecimal(a); //1
</code>
