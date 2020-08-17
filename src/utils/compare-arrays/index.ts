/**
 * Compares two arrays (any dimension) and returns true if they are equal, else false
 * @param arr1 First array to compare
 * @param arr2 Second array to compare
 */
export default function compareArrays(arr1: any[], arr2: any[]): boolean {
  if (!Array.isArray(arr1) && !Array.isArray(arr2)) return arr1 === arr2;
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++)
    if (!compareArrays(arr1[i], arr2[i])) return false;
  return true;
}
