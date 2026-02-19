async function fetchData() {
    console.log("waxaa bilaawday xogta"); 
       const response = await fetch('data.json');
        const data = await response.json(); 

    console.log("waa la keenay xogta:", data);
    console.log("hambalyo waa la dhameystiray xogtan .");
}

fetchData();
console.log("This message runs immediately and is not blocked.");