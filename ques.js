let arr = [11, 13, 12, 45, 18, 54, 23];

function findThirdLargest(arr) {
    let first = -Infinity, second = -Infinity, third = -Infinity;

    for (let num of arr) {
        if (num > first) {
            third = second;
            second = first;
            first = num;
        } else if (num > second) {
            third = second;
            second = num;
        } else if (num > third) {
            third = num;
        }
    }

    if (third === -Infinity) {
        return "No third largest element is present";
    }

    return third;
}

let thirdLargest = findThirdLargest(arr);
console.log(thirdLargest);
