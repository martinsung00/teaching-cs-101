"use strict";

/*
  Implement merge sort. You can assume the input is a list of numbers.

  α.
*/

/*
  Time: O(1)
  Space: O(1)
 */
function compare(a, b) {
  if (a < b) return -1;
  else if (a > b) return 1;
  else return 0;
}

/*
  Time: O(n)
  Space: O(n)
*/
function merge(arr, aux, low, mid, high, compare) {
  for (let i = low; i < high; i++) {
    aux[i] = arr[i];
  }

  let i = low;
  let j = mid + 1;

  for (let k = low; k <= high; k++) {
    if (i > mid) arr[k] = aux[j++];
    else if (j > high) arr[k] = aux[i++];
    else if (compare(aux[j], aux[i])) arr[k] = aux[j++];
    else arr[k] = aux[i++];
  }
}

export class MergeSort {
  constructor(arr, compare) {
    this.arr = arr;
    this.compare = compare;
  }

  merge = merge();

  /*
    Time: O(1) inherent, O(n log n) realized
    Space: O(1) inherent, O(n) realized
  */
  sortRecursive(arr, aux, low, high) {
    if (high <= low) return;
    const mid = low + (high - low) / 2;
    this.sortRecursive(arr, aux, low, mid);
    this.sortRecursive(arr, aux, mid + 1, high);
    this.merge(arr, aux, low, mid, high, this.compare);
  }

  /*
    Time: O(1) inherent, O(n log n) realized
    Space: O(1) inherent, O(n) realized
  */
  sort() {
    const aux = [];
    this.sortRecursive(this.arr, aux, 0, this.arr.length - 1);
    return this.arr;
  }
}
