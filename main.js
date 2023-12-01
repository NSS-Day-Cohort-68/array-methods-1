const contacts = require('./data.json');


// the following exercises require the data from data.json.
// you can look in that file to see the data structure you
// will be working with. 

// For each exercise:
// 1. use array methods with the variable contacts to get the desired result, 
// 2. store the result with a variable
// 3. appropriately log the results to the console



//You can put your solutions after each comment below:

//1. an array that contains all of the contacts that work at INSECTUS

const insectusContacts = (people) => {
    //create empty array to store insectus contacts
    const insectusContacts = [];
    //look at each contact
    for (const contact of people) {
        //look at company, if insectus, add to insectus-contacts
        if (contact.company.toLowerCase() === "insectus" ) {
            insectusContacts.push(contact)
        }
    }
    //return insectusContacts array
    return insectusContacts
}

insectusContacts(contacts)

const insectusContactsFilter = (people) => {
  return  people.filter(person => {return person.company.toLowerCase() === "insectus"})
}
const insectusPeople = insectusContactsFilter(contacts)
console.log(insectusPeople)

//2. an array all of the contacts, with only the name property
const getNames = (contacts) => {
    //create an empty array to store names
    const names = []
    //look through each contact
    for (const contact of contacts) {
        //grab the name of each item
        names.push(contact.name)
        //pushing to names array
    } 
    //reurn the new array of names
    return names
}

getNames(contacts)

const names = contacts.map(contact => contact.name)
console.log(names)

//3. an array of all of the contacts over the age of 50

// const contactsOver50 = () => {
//     //create an empty array to store contacts over 50
//     const peopleOver50 = []
//     //look through each contact
//     //look at each person's age
//     //if their age is over 50,
//     //add that contact to the empty array
// }

const contactsOver50 = (people) => {
return people.filter(person => person.age > 50)
}
const result = contactsOver50(contacts)
console.log(result)

const contactsCopy = () => {
    //copy each object in contacts 
    return contacts.map(contact => ({...contact})) 
    //create new array
    
}
//4. the first ten contacts when alphabetically ordered by name
    const firstTenSortedByName = (people) => {
      
        //create 
        const alphabeticalContacts = people.sort((a, b) => {
            const nameA = a.name.toUpperCase(); // ignore upper and lowercase
            const nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
          
            // names must be equal
            return 0;
          });
        
        return alphabeticalContacts.slice(0, 10)
        //push first 10 contacts to array in alpahbetical order  
        // display the first ten contacts 
    }

const answer = firstTenSortedByName(contactsCopy())
console.log(answer)

//5. the oldest person's name
const oldestPerson = (people) => {
    // sort the contacts in reverse by age
      const contactsSortedByAge = people.sort((person1, person2) => {
        const age1 = person1.age
        const age2 = person2.age

        return age2 - age1
      }) 

    // grab the person
    const oldPersonName = contactsSortedByAge[0].name

    // return their name
    return oldPersonName
}


const old = oldestPerson(contactsCopy());
console.log(old);

//6. the contact id with the name Isabella Burke

//7. an array of all of the contacts, but with the name split up into a firstName
// and lastName properties

//8. an array of all of the contacts where the friends property
// is an array with each contact that is their friend

//9. the average age of the contacts

//10. the median age of the contacts