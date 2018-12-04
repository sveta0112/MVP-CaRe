const faker = require('faker');
const Nanny = require('./nanny.js');

const ourfaker = [];
let imageCounter = 1;
const locations = ['San Francisco', 'San Jose','Burlingame','Oakland', 'Daly City', 'Livermore'];
const payment = ['$12.50','$15.00','$20.00', '$25.00','$32.50'];
const type = ['All sitters', 'Occasional Sitters', 'Full time sitters', 'Part time sitters'];

for (let i = 1; i < 101; i += 1) {
  const data = {};
  // data.nanny_id = i + 1;
  const images_array = [];
  // for(let j = 1; j < faker.random.number(10) + 6; j += 1){
  //   const imageObject = {};
  //   imageObject.image_id = i * 100 + j;
  //   imageObject.image_url = `https://s3-us-west-1.amazonaws.com/lanakhan/img${imageCounter}.jpg`;
  //   if (imageCounter === 57) {
  //     imageCounter = 0;
  //   }
  //   imageCounter += 1;
    
  //   images_array.push(imageObject);
  //}
  data.firstName = faker.name.firstName();
  data.lastName = faker.name.lastName();
  data.email = faker.internet.email();
  data.location = locations[Math.floor(Math.random() * locations.length)];
  
  data.hourlyRate = payment[Math.floor(Math.random() * payment.length)];
  data.sitterType = type[Math.floor(Math.random() * type.length)];
  //data.stars = Math.floor(Math.random() * 5) + 1;
  //data.images_array = images_array;
  data.details = faker.lorem.paragraph(15);
  data.createdAt = JSON.stringify(faker.date.past()).slice(1, 11);

  ourfaker.push(data);
}
Nanny.create(ourfaker);
