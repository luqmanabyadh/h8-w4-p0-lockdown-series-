function shoppingTime(memberId, money) {
    // you can only write your code here!
    var barang = [
        ['Sepatu Stacattu', 1500000],
        ['Baju Zoro', 500000],
        ['Baju H&N', 250000],
        ['Sweater Uniklooh', 175000],
        ['Casing Handphone', 50000]
    ]

    object = {
        memberId: memberId,
        money: money,
        listPurchased: [],
        changeMoney: 0
    }

    var sisa = money
    var check = false
    
    for (var i = 0; i < barang.length; i++) {
        if (sisa >= barang[i][1]) {
            object.listPurchased.push(barang[i][0])
            check = true
            sisa -= barang[i][1]
        }

        object.changeMoney = sisa
    }

    if (!memberId || !money) {
        return 'Mohon maaf, Toko X hanya berlaku untuk member saja'
    }
    else if (check === false) {
        return 'Mohon maaf uang tidak cukup ' + sisa
    }

    return object
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member sajas