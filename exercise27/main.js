function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; 
            if (success) {
                resolve("waa lagu guuuleystay");
            } else {
                reject("laguma guuleysan fadlan hubi");
            }
        }, 2000);
    });
}

fetchDataWithPromise()
    .then(message => console.log(message))
    .catch(error => console.error(error));