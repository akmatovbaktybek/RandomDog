const button = document.querySelector('.container__btn');;
const image = document.querySelector('.card__img');
const DOGS_URL = "https://dog.ceo/api/breeds/image/random";

async function getDog() {
   try {
      const response = await fetch(DOGS_URL);
      const data = await response.json();
      image.src = data.message;
   }
   catch (error) {
      console.log('error', error);
   }
};

button.addEventListener('click', () => {
   getDog();
});

// getDog();

// const getDog = fetch(DOGS_URL, {
//    method: 'GET',
// });

// console.log(getDog);

// getDog
//    .then((response) => {
//       return response.json();
//    })
//    .then((dogs) => {
//       console.log('dogs', dogs);
//    })
//    .catch((error) => {
//       console.log('error', error);
//    })

