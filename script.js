const jokeElement = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

jokeBtn.addEventListener('click', generateNewJoke);

generateNewJoke();

async function generateNewJoke() {

    const header = {
        headers: {
            Accept: 'application/json'
        }
    };
    const result = await fetch('https://icanhazdadjoke.com', header);
    const data = await result.json();

    console.log(data.joke);

    jokeElement.innerHTML = data.joke;
}