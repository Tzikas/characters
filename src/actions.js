import axios from 'axios';

(async function() { //Self invoking anonymous function



    let data = await axios.get('https://dog.ceo/api/breeds/image/random')
    console.log(data)


    console.log(
        await axios.get('/characters')
    )

    await axios.post('/characters', {
        cool:'beans'
    })


    console.log(
        await axios.get('/characters')
    )


})();

  
  