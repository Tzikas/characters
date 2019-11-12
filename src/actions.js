import axios from 'axios';

(async function() { //Self invoking anonymous function



    let data = await axios.get('https://dog.ceo/api/breeds/image/random')
    console.log(data)


    console.log(
        await axios.get('http://localhost:8080/characters')
    )

    await axios.post('http://localhost:8080/characters', {
        cool:'beans'
    })


    console.log(
        await axios.get('http://localhost:8080/characters')
    )


})();

  
  