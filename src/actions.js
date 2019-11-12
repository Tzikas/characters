import axios from 'axios';

(async function() { //Self invoking anonymous function


    console.log('hihihihi')

    let data = await axios.get('https://dog.ceo/api/breeds/image/random')
    console.log(data)


    console.log(
        await axios.get('https://octhack.herokuapp.com/posts')
    )

    await axios.post('https://octhack.herokuapp.com/posts', {
        cool:'beans???'
    })


    console.log(
        await axios.get('https://octhack.herokuapp.com/posts')
    )


})();

  
  