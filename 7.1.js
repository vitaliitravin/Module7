const person = {
    name: 'Vlad',
    age: 26
  }
  
  function hasProperty(person) {
    for (let prop in person) {
      if (person.hasOwnProperty(prop)) console.log(person[prop]);
    }
  }
  
  hasProperty(person);