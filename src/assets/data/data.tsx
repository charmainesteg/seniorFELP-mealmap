import foodpantry1 from '../images/foodpantry1.jpeg';
import foodpantry2 from '../images/foodpantry2.jpeg';
const pantryData = [
  {
    id: 1,
    title: 'Intown Cares',
    image: foodpantry1,
    description:
      'Pantry distribution currently occurs Tuesdays and Saturdays from 10AM-12PM. All individuals can receive groceries twice a week.',
    location: '1026 Ponce de Leon Avenue NE, Atlanta, GA 30306',
    url: '/pantry/1',
  },
  {
    id: 2,
    title: 'AUMI Food Bank',
    image: foodpantry2,
    description:
      'Currently they provide food for more than 350 families per week, 100 seniors on a monthly basis and distribute 10,000 lbs of produce on a weekly basis for person over 55.',
    location: '466 Northside Dr NW, Atlanta, GA 30318',
    url: '/pantry/2',
  },
  {
    id: 3,
    title: 'Borean Outreach Ministry Center',
    image: '../images/foodpantry3.jpeg',
    description:
      'Borean Outreach feeds approximately 800 families per week. Distributed more than 20,000 lbs of food each week. Distributed 1.2 million pounds of food to the Atlanta community for the entire year.',
    location: '312 Hamilton E. Holmes Dr, Atlanta, GA 30318',
    url: 'https://atlantaberean.com/bomc/',
  },
  {
    id: 4,
    title: 'Toco Hills Community Alliance',
    image: '../images/foodpantry4.jpeg',
    description:
      'Toco Hills Community Alliance is open for food distribution Tuesday, Wednesday and Thursday from 1pm - 4pm.',
    location: '1790 Lavista Rd NE, Atlanta, GA 30329',
    url: 'https://tocohillsalliance.org/services',
  },
  {
    id: 5,
    title: 'Hosea Helps',
    image: '../images/foodpantry5.jpeg',
    description:
      'Families and individuals can visit their warehouse during the week and receive free emergency groceries.',
    location: '2545 Forrest Hills Dr SW, Atlanta, GA 30315',
    url: 'https://4hosea.org/programs/care-center/',
  },
  {
    id: 6,
    title: "Mimi's Pantry",
    image: '../images/foodpantry6.jpeg',
    description:
      "At Mimi's Pantry, full time students in the Atlanta University Center without a full meal plan receive fresh and frozen food items as often as they need food.",
    location: '266 Lee Ln SW, Atlanta, Ga 30314',
    url: 'https://4hosea.org/programs/care-center/',
  },
];
export default pantryData;
