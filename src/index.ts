import { SearchCallback } from '../lib/index.d';


export function binarySearch<T>(arr: T[], search: SearchCallback<T> | T, left: number = 0, right: number = arr.length - 1): number
{
    if (right >= left)
    {
        const mid = Math.floor(left + (right - left) / 2);

        if (typeof search === "function")
        {
            if (search(arr[mid]) === 0) return mid;

            if (search(arr[mid]) < 0) return binarySearch(arr, search, mid + 1, right);

            return binarySearch(arr, search, left, mid - 1);
        }
        else
        {
            const predicate: SearchCallback<T> = (ele: T) => {
                return compareInequality<T>(ele, search);
            };

            return binarySearch(arr, predicate, left, right);
        }
    }

    return -1;
}

export function compareInequality<T>(item: T, searchValue: T): -1|0|1
{
    if (item === searchValue) return 0;
    if (item < searchValue) return -1;
    return 1;
}


