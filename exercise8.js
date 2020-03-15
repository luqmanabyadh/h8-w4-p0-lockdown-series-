function tukarBesarKecil(kalimat) {
    // you can only write your code here!]
    var besar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var kecil = 'abcdefghijklmnopqrstuvwxyz';
    var arr = [];
    for (var i = 0; i < kalimat.length; i++) {
        arr.push(kalimat[i])
    }
    var hasil = ''
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < besar.length; j++) {
            if (arr[i] === besar[j]) {
                arr[i] = kecil[j]
            } else if (arr[i] === kecil[j]) {
                arr[i] = besar[j]
            }
        }
        hasil += arr[i]
    }

    return hasil
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"