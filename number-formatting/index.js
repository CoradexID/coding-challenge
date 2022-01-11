/*
 *
 *  Number Format
 *  1000000 -> 1,000,000.00
 *
*/


function intFormat(int){
	var number_string = int.toString().replace(/[^,\d]/g, ''),
	split   		= number_string.split(','),
	remain     		= split[0].length % 3,
	rupiah     		= split[0].substr(0, remain),
	final     		= split[0].substr(remain).match(/\d{3}/gi);
 
	if(final){
		separator = remain ? ',' : '';
		rupiah += separator + final.join(',');
	}
 
	rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
	return 'Rp. ' + rupiah;
}

const formatted = intFormat(1000000000);
console.log(formatted);