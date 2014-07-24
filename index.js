/**
 * Convert any decimal number to any base number.
 *
 * @param  {Number} num, {Number} base
 * @return {String}
 */

module.exports = {
	convert : function (num, base) {
		return fromDecimal(num, base);
	}
}

function fromDecimal(num, base) {
   	var chars="0123456789ABCDEFGHIJ",
   		result="",
   		flag = '';

   	if(num < 0) {
   		num = num * -1;
   		flag += "-";
   	}
      
   	while(num > 0){
   		var i = num % base;
      	result = chars[i] + result;
      	num = Math.floor(num / base);
   	}

   	return flag + result;
}