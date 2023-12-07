//finally - run a piece of code regardless of whether the preceding code errors or not.
const urls = [
	'http://swapi.py4e.com/api/people/1',
	'http://swapi.py4e.com/api/people/2',
	'http://swapi.py4e.com/api/people/3',
	'http://swapi.py4e.com/api/people/4',
];

Promise.all(urls.map(url => {
    return fetch(url).then(people => people.json())
}))
    .then(array => {
        // throw Error;
        console.log('1', array[0])
        console.log('2', array[1])
        console.log('3', array[2])
        console.log('4', array[3])
    })
    .catch(err => console.error('ughhh fix it!', err))
    .finally(data => console.log('extra'));

//for await of (for of loop with await)
const urls2 = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function () {
	try {
		const [users, posts, albums] = await Promise.all(
			urls2.map((url) => fetch(url).then((resp) => resp.json()))
		);
		console.log('getData users', users);
		console.log('getData posts', posts);
		console.log('getData albums', albums);
	} catch (err) {
		console.log('oops', err);
	}
};

//remembering for of loops
// const loopThroughUrls = url => {
//     for (url of urls) {
//         console.log('loopThroughUrls', url);
//     }
// }

const getData2 = async function () {
    const arrayOfPromises = urls2.map(url => fetch(url));
    for await (let request of arrayOfPromises) {
        const data = await request.json();
        console.log('data', data);
    }
}