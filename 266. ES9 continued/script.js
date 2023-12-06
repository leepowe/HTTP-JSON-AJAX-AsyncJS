const urls = [
    'http://swapi.co/api/people/1', 
    'http://swapi.co/api/people/2', 
    'http://swapi.co/api/people/3', 
    'http://swapi.co/api/people/4'
]

Promise.all(urls.map(url => {
    return fetch(url).then(people => people.json())
}))
    .then(array => {
        console.log('1', array[0])
        console.log('2', array[1])
        console.log('3', array[2])
        console.log('4', array[3])
    })
    .catch(err => console.error('ughhh fix it!', err))