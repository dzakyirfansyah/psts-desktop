let pilihan = true;
while(pilihan) {
    // 
    let p = prompt('pilih kertas, batu, gunting')

    //
    let comp = Math.random();

    if( comp < 0,34){
        comp = 'kertas';
    } else if (comp >= 0,34 && comp < 0,67) {
        comp = 'batu';
    } else {
        comp = 'gunting';
    }

    //
    let hasil = '';

    if ( p== comp) {
        hasil = 'seri';
    } else if ( p== 'kertas') {
        hasil = (comp == 'batu') ? 'anda menang' : 'computer menang';
    } else if ( p== 'batu') {
        hasil = (comp == 'gunting') ? 'anda menang' : 'computer menang';
    } else if ( p== 'gunting') {
        hasil = (comp == 'kertas') ? 'anda menang' : 'computer menang';
    } else {
        hasil = 'anda kalah'
    }

    //
    alert ('anda pilih : ' + p + '\nComputer Pilih : ' + comp + '\nHasilnya : ' + hasil)

    pilihan = confirm('mau main lagi?')

}

