// el.addEventListener('click', submitForm);

// //callback pyramid of doom
// movePlayer(100, 'left', function () {
// 	movePlayer(400, 'left', function () {
// 		movePlayer(10, 'right', function () {
// 			movePlayer(330, 'left', function () {});
// 		});
// 	});
// });

// //using a promise
// movePlayer(100, 'left')
//     .then(() => movePlayer(400, 'left'))
//     .then(() => movePlayer(10, 'right'))
//     .then(() => movePlayer(330, 'left'))
    

// // another more realistic example (twitter clone)
// grabTweets('twitter/bill', (error, billTweets) => {
//     if (error) {
//         throw Error;
//     }
//     displayTweets(billTweets);
//     grabTweets('twitter/elonmusk', (error, elonTweets) => {
//         if (error) {
//             throw Error;
//         }
//         displayTweets(elonTweets);
//         grabTweets('twitter/vitalikbuterin', (error, vitalikTweets) => {
//             if (error) {
//                 throw Error;
//             }
//             displayTweets(vitalikTweets);
//         });
//     });
// });


const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Stuff Worked');
    } else {
        reject('Error, it broke!');
    }
})

promise.then(result => console.log(result, promise));

const promise2 = new Promise((resolve, reject) => {
	setTimeout(resolve, 100, 'HIII');
});

const promise3 = new Promise((resolve, reject) => {
	setTimeout(resolve, 1000, 'Pookie');
});

const promise4 = new Promise((resolve, reject) => {
	setTimeout(resolve, 5000, 'Is it me you are looking for?');
});

Promise.all([promise, promise2, promise3, promise4])
    .then(values => {
        console.log(values);
    })

promise
    .then(result => result + '!')
    .then(result2 => result2 + '?')
    .catch(() => console.log('Error!'))
    .then(result3 => {
        console.log(result3 + '!')
    });
    //.catch will only work on chains that are before it


const urls = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums'
];

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
}).catch(() => console.log('Error while fetching'));