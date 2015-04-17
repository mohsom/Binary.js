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
//Returns binary number from integer number
Binary.prototype = {
    toBinary: function (int_value) {
        var new_binary='';
        var i=0;
        while (int_value !=0) {
            var r;
            r = int_value % 2;
            int_value /= 2;
            new_binary+= r.toString();
            i++;
            int_value=parseInt(int_value);
        }
        new_binary+='0';
        new_binary=new_binary.split("").reverse().join("");
        return new_binary;
    }
};