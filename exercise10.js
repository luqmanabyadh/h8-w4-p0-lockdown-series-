function changeMe(arr) {
    // you can only write your code here!
    object = {
        firstName: '',
        lastName: '',
        gender: '',
        age: 0
    }

    for (var i = 0; i < arr.length; i++) {

        object.firstName = arr[i][0]
        object.lastName = arr[i][1]
        object.gender = arr[i][2]
        if (object.age === 0) {
            object.age = 2018 - arr[i][3]
        } else {
            object.age = 'Invalid birth year'
        }
        console.log(object)
    }
}

// TEST CASES
changeMe([
    ['Christ', 'Evans', 'Male', 1982],
    ['Robert', 'Downey', 'Male']
]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""