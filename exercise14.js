function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var biaya = 2000
    var awal = 0
    var akhir = 0
    var penumpang = []

    for (var i = 0; i < arrPenumpang.length; i -= -1) {
        for (var j = 0; j < rute.length; j -= -1) {
            if (rute[j] === arrPenumpang[i][1]) {
                awal = j
            }
            if (rute[j] === arrPenumpang[i][2]) {
                akhir = j
            }
        }

        var total = (akhir - awal) * biaya

        penumpang.push( {
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: total
        })
    }

    return penumpang
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]