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
//Sets this.binary value from decimal number
Binary.prototype = {
    decToBinary: function (int_value) {
        var new_binary = '';
        var i = 0;
        int_value = parseInt(int_value);
        while (int_value != 0) {
            var r;
            r = int_value % 2;
            int_value /= 2;
            new_binary += r.toString();
            i++;
            int_value = parseInt(int_value);
        }
        new_binary += '0';
        new_binary = new_binary.split("").reverse().join("");
        this.binary = new_binary;
    },
    binToDecimal: function () {
        var bin = this.binary;
        var int = 0;
        var j = bin.length - 1;
        for (var i = 0; i < bin.length; i++) {
            int += Math.pow(2, j) * bin[i];
            j--;
        }
        return int;
    }
};