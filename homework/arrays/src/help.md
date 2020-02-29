# Common Array Methods

It's helpful to have a list of what you can and cannnot do with arrays next to a list of exercises, so here are some common ways Arrays are accessed and mutated in NodeJS. Note that most languages will probably have some equivalent of these, but not necessarily, and not necessarily exactly the same.

Note that the scope of this document is for students first trying to learn arrays, so some of the more advanced methods are intentionally omitted (read: no lambda calculus here).

Please also always refer to more formal means of documentation when using these methods, especially when learning about them for the first time, instead of relying on this document.

## Mutating Methods
---

```
push()

arr.push(element1) || arr.push([element1, element2, ... , elementN])

Adds one or more elements to an array and returns the length of the new array.
```

```
pop()

arr.pop()

Removes the last element of the array and returns that element, but returns undefined if the original array is empty.
```

```
shift()

arr.shift()

Removes the first element from an array and returns that removed element, but returns undefined if the original array is empty.
```

```
arr.unshift(element1) || arr.unshift([element1, element2, ... , elementN])

Adds one or more elements to the beginning of an array and returns the new length of the array.
```

```
concat()

const newArr = oldArr.concat([element1, element2, ... , elementN])

Appends one or more arrays to another and returns a new array, but does not change any of the original arrays.
```

```
reverse()

arr.reverse()

Reverses an array in place.
```

```
slice()
splice()

Best to refer to more official documentation for these.
```

## Accessing Methods
---

```
includes()

arr.includes(valueToFind, fromIndex)

Determines whether an array includes a certain value among its entries, returning true or false. Note that invoking with the value fromIndex is optional.
```

```
indexOf()

arr.indexOf(valueToFind, fromIndex)

Returns the first index at which a given element can be found in the array, or -1 if it is not present. Note that invoking with the value fromIndex is optional.
```

```
toString()

Returns a string representing the specified array and its elements.

arr.toString()
```

```
isArray()

Array.isArray(variableToCheck)

Determines whether the passed value is an Array and return true if the value is an Array; otherwise, false.
```