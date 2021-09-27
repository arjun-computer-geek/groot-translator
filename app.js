var translateBtn = document.querySelector('#translateBtn');
var output = document.querySelector('#output');


const errorHandler = (error) => {

    alert(`You reached Maximum attempts. Please try after an hours.`)
    console.log(error)
}


const handleClick = () => {
    var inputText = document.querySelector('#inputText').value;
    var apiUrl = `https://api.funtranslations.com/translate/groot.json?text=${inputText}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(json => {
            output.innerText = json.contents.translated;
            })
        .catch((error) => errorHandler(error))
}

translateBtn.addEventListener('click', handleClick)