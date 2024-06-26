export default function appendToEachArrayValue(array, appendString) {
  array.forEach((value, index) => {
    array[index] = appendString + value;
  });

  return array;
}
