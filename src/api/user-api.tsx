import {UserType} from '../types';
const BASE_URL = "https://localhost:5001/";

export async function editUser(user:UserType) {
    const url = BASE_URL +"users/edit";
    fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user) 
      // body data type must match "Content-Type" header
    }).then(handleErrors)
    .then(function(response) {
        console.log("ok");
    }).catch(function(error) {
        console.log(error);
    });
}
export const loadUsers = async () => {
    const response = await fetch(BASE_URL +"users")
    // .then(handleErrors)
    // .then(function(response) {
    //     console.log("ok");
    // }).catch(function(error) {
    //     console.log(error);
    // });
    const data = await response.json();
    return data;
}
const handleErrors = (response:any) =>
 {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return  response.json();
}