# Searching and Sorting

Understanding common searching and sorting algorithms is incredibly valuable. There happen to be many.

## Common Sorting Algorithms

Learning the common sorting algorithms is a great way to boost your performance. Of the five algorithms outlined below, merge sort, quick sort, and bucket sort are the most commonly used in interviews.

### Bubble Sort

In bubble sort, we start at the beginning of the array and swap the first two elements if the first is greater than the second. Then, we go to the next pair, and so on, continuously making sweeps of the array until it is sorted. In doing so, the smaller items slowly "bubble" up to the beginning of the list.

## Selection Sort

In selection sort, we find the smallest element using a linear scan and move it to the front, swapping it with the front element. Then, we find the second smallest element and move it, again doing a linear scan. Continue until all elements are in place. Selection sort is the child's algorithm: simple, but inefficient.

## Insertion Sort

In insertion sort, we iterate over the array, growing a sorted list behind the cursor. At each position, we check the value against the largest value in the sorted list, which happens to be in the position directly to the left. If the current element is larger, then progress the cursor, otherwise we shift all larger values forward to make a space, and write that number into the open position.

Amusing anecdote: when people are holding a hand of playing cards, particularly when playing bridge or big-two, also known as deuces, the mind naturally gravitates towards performing an insertion sort!

## Merge Sort

Merge sort is one of the most efficient sorting algorithms in existence, and is often on the challenging side to the uninitiated. It is built on the principle of divide and conquer. There are multiple ways to perform merge sort, but we will be focusing on the most common implementation, the top-down variant, for the time being.

Merge sort divides the unsorted list into n sub-lists, each containing one element, as a list of one element is considered sorted. We then repeatedly merge those sub-lists of one element each, to produce new, bigger sorted sub-lists until there is only one sub-list remaining, which is the sorted list.

The merge action happens like so: the first element of both lists is compared. The smaller element among two becomes a new element of the sorted list. The procedure is repeated until both the smaller sub-lists are empty and the newly combined sub-list covers all the elements of both sub-lists.

Visually:

First, divide:
1. [14, 7, 2, 12, 9, 11, 6, 2]
2. [14, 7, 3, 12], [9, 11, 6, 2]
3. [14, 7], [3, 12], [9, 11], [6, 2]
4. [14], [7], [3], [12], [9], [11], [6], [2]

Then merge:
5. [7], [14], [3], [12], [9], [11], [2], [6]
6. [3, 7, 12, 14], [2, 6, 9, 11]
7. [2, 3, 6, 7, 9, 11, 12, 14]