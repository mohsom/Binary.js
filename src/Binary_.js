/**
 * Binary.js- JavaScript library for working with binary numbers.
 */
//Binary constructor
function Binary(binary) {
    if (binary) {
        this.binary = binary;
    }
    else {
        this.binary = '';
    }
}
Binary.prototype = {
    toBinary: function (int_value) {
        var new_binary='';
        var i=0;
        while (int_value !== 0) {
            var r;
            r = int_value % 2;
            int_value /= 2;
            new_binary[i]= r;
            i++;
        }
        return new_binary;
    }
};
var a=new Binary();
var b=a.toBinary(3);
console.log(b);