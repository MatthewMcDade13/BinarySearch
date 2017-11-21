"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function binarySearch(arr, search, left, right) {
    if (left === void 0) { left = 0; }
    if (right === void 0) { right = arr.length - 1; }
    if (right >= left) {
        var mid = Math.floor(left + (right - left) / 2);
        if (typeof search === "function") {
            if (search(arr[mid]) === 0)
                return mid;
            if (search(arr[mid]) < 0)
                return binarySearch(arr, search, mid + 1, right);
            return binarySearch(arr, search, left, mid - 1);
        }
        else {
            var predicate = function (ele) {
                return compareInequality(ele, search);
            };
            return binarySearch(arr, predicate, left, right);
        }
    }
    return -1;
}
exports.binarySearch = binarySearch;
function compareInequality(item, searchValue) {
    if (item === searchValue)
        return 0;
    if (item < searchValue)
        return -1;
    return 1;
}
exports.compareInequality = compareInequality;
