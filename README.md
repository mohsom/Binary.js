# Binary.js 
Small library for working with binary number system numbers. 
#Documentation
_Binary object contains all the Binary class methods for working with binary number system numbers.
<br>
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
<h3>_Binary.sum(bin_value1,bin_value2)</h3>
Sum of two binary number system numbers.<br>
<code>
var a=_Binary.sum("011","011");
a=_Binary.binToDecimal(a); //6
</code>
<h3>_Binary.subt(bin_value1,bin_value2)</h3>
Subtraction of two binary number system numbers.<br>
<code>
var a=_Binary.subt("011","011");
a=_Binary.binToDecimal(a); //0
</code>
<h3>_Binary.mult(bin_value1,bin_value2)</h3>
Multiplication of two binary number system numbers.<br>
<code>
var a=_Binary.mult("011","011");
a=_Binary.binToDecimal(a); //9
</code>
<h3>_Binary.divis(bin_value1,bin_value2)</h3>
Division of two binary number system numbers.<br>
<code>
var a=_Binary.subt("011","011");
a=_Binary.binToDecimal(a); //1
</code>
