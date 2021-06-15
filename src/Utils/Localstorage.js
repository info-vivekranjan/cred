// SAVES DATA TO LOCALSTORAGE
const saveData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}

// LOADS DATA FROM LOCALSTORAGE
const getData = (key) => {
    try {
        let data = localStorage.getItem(key);
        data = JSON.parse(data);
        return data;
    } 
    catch (err) {
        return undefined;
    }
}
  
export { getData, saveData };