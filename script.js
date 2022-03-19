const jokes = document.querySelector('#joke');
const jokesBtn = document.querySelector('#jokesBtn');


// Promises

// const press = (() => {
//     const setHeader = {
//         headers: {
//             Accept: 'application/json'
//         }
//     }
//     fetch('https://icanhazdadjoke.com',setHeader)
//     .then((res) => res.json())
//     .then((data) => 
//         jokes.innerHTML = data.joke
//     )
//     .catch((err) => {
//         console.log(err);
//     })
// })

// jokesBtn.addEventListener('click',press);
// press();    



// async , await

const press = (async () => {

    const setHeader  = {
        headers: {
            Accept: 'application/json'
        }
    }

    const res = await fetch('https://icanhazdadjoke.com',setHeader);
    const data = await res.json();
    jokes.innerHTML = data.joke;
    
})
jokesBtn.addEventListener('click',press);
press(); 

