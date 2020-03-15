// 1. buat var penampung
// 2. buat var index looping
// 3. jika angka lebih besar dari 1 dan jika index % index = 0



function angkaPrima(angka) {
    // you can only write your code here!
    var prima = 0;
    for (var i = 1; i <= angka; i++) {
        if (angka % i === 0) {
            prima++ 
        }
    }
    if (prima === 2) {
        return true
    } else {
        return false
    }
  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false

