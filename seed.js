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

db.sync({force: true})
.then( () => {
  Promise.all(campusData.map((campus) => {
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
  db.close();
})


// const campuses = campusData.map( (campus) => {
//    return Campus.build(campus)
// })

// const users = userData.map( (user) => {
//    return User.build(user)
// })

// db.sync({force: true})
// .then( () => {
//   Campus.save()
// })
// .then( () => {
//   User.save()
// })
// .catch((err) => console.error("There was an error in seed", err, err.stack))
// .finally( () => {
//   db.close();
// })
