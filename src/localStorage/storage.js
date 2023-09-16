// Function to read data from local storage
export function readFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return JSON.parse(data) || [];
  }
  
  // Function to write data to local storage
  export function writeToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  
  // Function to add or update an item in local storage data
  export function addItemToLocalStorage(key, item) {
    const data = readFromLocalStorage(key);
    data.push(item);
    writeToLocalStorage(key, data);
  }
  
  // Function to delete an item from local storage data by index
  export function deleteItemFromLocalStorage(key, index) {
    const data = readFromLocalStorage(key);
    if (index >= 0 && index < data.length) {
      data.splice(index, 1);
      writeToLocalStorage(key, data);
    }
  }
  
  // Function to update an item in local storage data by index
  export function updateItemInLocalStorage(key, index, newItem) {
    const data = readFromLocalStorage(key);
    if (index >= 0 && index < data.length) {
      data[index] = newItem;
      writeToLocalStorage(key, data);
    }
  }
  