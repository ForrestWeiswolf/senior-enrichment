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

let cP = campusData.map(campus => Campus.create(campus));
let uP = userData.map(u => User.create(u))

let promises = cP.concat(uP)

Promise.all(cP)
.then(res => Promise.all(uP))
.then(res2 => db.sync({}))
// .finally( () => {
//   console.log("Closing")
//   db.close();
// })
.then(res3 => {
  console.log("db sync'd")
  db.close()
})
.catch((err) => console.error("There was an error in seed", err, err.stack))
