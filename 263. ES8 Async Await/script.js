//Async Await

// movePlayer(100, 'Left')
//     .then(() => movePlayer(400, 'Left'))
//     .then(() => movePlayer(10, 'Right'))
//     .then(() => movePlayer(330, 'Left'));

// async function playerStart() {
//     const firstMove = await movePlayer(100, 'Left'); //pause
//     await movePlayer(400, 'Left'); //pause
//     await movePlayer(10, 'Right'); //pause
//     await movePlayer(330, 'Left'); //pause
// }

//fetch
fetch('http://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(console.log);
    
    
//async
// async function fetchUsers() { 
//     await fetch('http://jsonplaceholder.typicode.com/users')
//     .then(resp => resp.json())
//         .then(console.log);
// }

async function fetchUsers() { 
    const resp = await fetch('http://jsonplaceholder.typicode.com/users');
    const data = await resp.json();
    console.log(data);
}

fetchUsers();

const urls = [
    'http://jsonplaceholder.typicode.com/users',
    'http://jsonplaceholder.typicode.com/posts',
    'http://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url =>
    fetch(url).then(resp => resp.json())
)).then(array => {
    console.log('users', array[0]);
    console.log('posts', array[1]);
    console.log('albums', array[2]);
}).catch('oops');


const getData = async function () {
    try {
        const [users, posts, albums] = await Promise.all(urls.map(url =>
            fetch(url).then(resp => resp.json())
        ))
        console.log('getData users', users);
        console.log('getData posts', posts);
        console.log('getData albums', albums);
    } catch (err) {
        console.log('oops', err);
    }
}

getData();