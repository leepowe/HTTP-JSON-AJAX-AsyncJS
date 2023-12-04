fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => console.log(response));

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => console.log(data));