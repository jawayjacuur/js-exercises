async function fetchUsers(){

try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok){
        throw new Error(`wan ka xunahay dhaqdhaqaaqan mashaqeynayo: ${response.status}`);
    }

    const users = await response.json()
    console.log( "soo daabac kulIgood" , users)
}catch(error){
    console.error("cilad ayaaa ka jirto" , error)

}

}

fetchUsers()

