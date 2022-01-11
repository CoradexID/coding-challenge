/*
 *
 *  Number Format
 *  1000000 -> 1,000,000.00
 *
*/



function intFormat(angka, prefix = null){
	var number_string = angka.toString().replace(/[^,\d]/g, ''),
	split   		= number_string.split(','),
	sisa     		= split[0].length % 3,
	rupiah     		= split[0].substr(0, sisa),
	ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);
 
	// tambahkan titik jika yang di input sudah menjadi angka ribuan
	if(ribuan){
		separator = sisa ? ',' : '';
		rupiah += separator + ribuan.join(',');
	}
 
	rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
	return prefix == null ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
}

const formatted = intFormat(1000000000);
console.log(formatted);