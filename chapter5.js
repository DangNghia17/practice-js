// 1. Higher-Order Function: filter
// Viết một hàm higher-order có tên là `filterArray` nhận vào một mảng và một hàm callback, 
// và trả về một mảng mới chỉ chứa các phần tử mà callback trả về `true`.
function filterArray(array, callback) {
    let result = [];
    for (let element of array) {
        if (callback(element)) {
            result.push(element);
        }
    }
    return result;
}

console.log(filterArray([1, 2, 3, 4, 5], n => n > 3)); // [4, 5]

// 2. Higher-Order Function: map
// Viết một hàm higher-order có tên là `mapArray` nhận vào một mảng và một hàm callback, 
// và trả về một mảng mới với các phần tử đã được biến đổi bởi callback.
function mapArray(array, callback) {
    let result = [];
    for (let element of array) {
        result.push(callback(element));
    }
    return result;
}

console.log(mapArray([1, 2, 3, 4, 5], n => n * 2)); // [2, 4, 6, 8, 10]

// 3. Higher-Order Function: reduce
// Viết một hàm higher-order có tên là `reduceArray` nhận vào một mảng, một hàm callback, 
// và một giá trị khởi tạo. Hàm này sẽ trả về một giá trị duy nhất sau khi xử lý tất cả 
// các phần tử trong mảng theo hàm callback.
function reduceArray(array, callback, initialValue) {
    let accumulator = initialValue;
    for (let element of array) {
        accumulator = callback(accumulator, element);
    }
    return accumulator;
}

console.log(reduceArray([1, 2, 3, 4, 5], (sum, n) => sum + n, 0)); // 15

// 4. Higher-Order Function: forEach
// Viết một hàm higher-order có tên là `forEachArray` nhận vào một mảng và một hàm callback, 
// và thực hiện callback trên mỗi phần tử trong mảng.
function forEachArray(array, callback) {
    for (let element of array) {
        callback(element);
    }
}

forEachArray([1, 2, 3], n => console.log(n * 2)); // 2, 4, 6

// 5. Higher-Order Function: some
// Viết một hàm higher-order có tên là `someArray` nhận vào một mảng và một hàm callback, 
// và trả về `true` nếu ít nhất một phần tử trong mảng thỏa mãn điều kiện của callback.
function someArray(array, callback) {
    for (let element of array) {
        if (callback(element)) {
            return true;
        }
    }
    return false;
}

console.log(someArray([1, 2, 3, 4, 5], n => n > 3)); // true

// 6. Higher-Order Function: every
// Viết một hàm higher-order có tên là `everyArray` nhận vào một mảng và một hàm callback, 
// và trả về `true` nếu tất cả các phần tử trong mảng thỏa mãn điều kiện của callback.
function everyArray(array, callback) {
    for (let element of array) {
        if (!callback(element)) {
            return false;
        }
    }
    return true;
}

console.log(everyArray([1, 2, 3, 4, 5], n => n > 0)); // true

// 7. Higher-Order Function: find
// Viết một hàm higher-order có tên là `findInArray` nhận vào một mảng và một hàm callback, 
// và trả về phần tử đầu tiên trong mảng thỏa mãn điều kiện của callback.
function findInArray(array, callback) {
    for (let element of array) {
        if (callback(element)) {
            return element;
        }
    }
    return undefined;
}

console.log(findInArray([1, 2, 3, 4, 5], n => n > 3)); // 4
