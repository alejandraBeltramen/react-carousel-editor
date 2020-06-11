export const sortArrayBy = (array, propertyName) =>
   array.sort((a, b) =>
    (a[propertyName] > b[propertyName]) ? 1 : -1);