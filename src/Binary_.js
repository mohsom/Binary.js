/**
 * Binary.js- JavaScript library for working with binary numbers.
 */
//Binary constructor
function Binary() {

}
Binary.prototype = {
    //Returns binary decimal system value from decimal number system value
    decToBinary: function (int_value) {
        var new_binary = '';
        var i = 0;
        int_value = parseInt(int_value);
        while (int_value !== 0) {
            var r;
            r = int_value % 2;
            int_value /= 2;
            new_binary += r.toString();
            i++;
            int_value = parseInt(int_value);
        }
        new_binary += '0';
        new_binary = new_binary.split("").reverse().join("");
        return new_binary;
    },
    //Return val value in decimal number system
    binToDecimal: function (val) {
        var bin = val;
        var int = 0;
        var j = bin.length - 1;
        for (var i = 0; i < bin.length; i++) {
            int += Math.pow(2, j) * bin[i];
            j--;
        }
        return int;
    }
};
var _Binary=new Binary();