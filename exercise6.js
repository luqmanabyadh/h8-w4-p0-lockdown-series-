function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var total = []

    for (var i = 0; i <= angka; i++) {
        for (var j = 0; j <= angka; j++) {
            if (j * i === angka) {
                total.push(String(i) + String(j))
            }
        }
    }

    var minimum = total[0].length

    for (var k = 0; k < total.length; k++) {
        if (total[k].length < minimum) {
            minimum = total[k].length;
        }
    }

    return minimum
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2