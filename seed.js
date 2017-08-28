const db = require('./db');
const User = require('./db/models/user');
const Campus = require('./db/models/campus');

const campusData = [
  {
    name:'Earth',
    image: 'https://astrobites.org/wp-content/uploads/2014/01/sv003.jpg'
  },
  {
    name:'Titan',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Titan_in_true_color.jpg'
  }
]

const userData = [
  {
    name: 'Katerina Donlan',
    email: 'KaterinaDonlan@gunnerkrigg.ac.uk',
    campusId: 1
  },
  {
    name: 'Antimony Carver',
    email: 'AntimonyCarver@gunnerkrigg.ac.uk',
    campusId: 1
  },
  {
    name: 'Some alien, I guess',
    email: 'dotheyuseemailontitan@example.com',
    campusId: 2
  }
]

Campus.sync({force: true})
.then( () => {
  return User.sync({force: true})
})
.then( () => {
  return Promise.all(campusData.map((campus) => {
    return Campus.create(campus)
  }))
})
.then( ()=> {
  return Promise.all(userData.map((user) => {
    return User.create(user)
  }))
})
.catch((err) => console.error("There was an error in seed", err, err.stack))
.finally( () => {
  console.log("Closing")
  db.close();
})
