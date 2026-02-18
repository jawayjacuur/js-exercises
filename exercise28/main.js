function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = false; 
            if (success) {
                resolve("waa lagu guuuleystay");
            } else {
                reject("laguma guuleysan fadlan hubi");
            }
        }, 2000);
    });
}

async function fetchDataAsync() {
    try {
        const message = await fetchDataWithPromise();
        console.log(message);
    } catch (error) {
        console.error(error);
    }
}

fetchDataAsync();
