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

//3. an array of all of the contacts over the age of 50

//4. the first ten contacts when alphabetically ordered by name

//5. the oldest person's name

//6. the contact id with the name Isabella Burke

//7. an array of all of the contacts, but with the name split up into a firstName
// and lastName properties

//8. an array of all of the contacts where the friends property
// is an array with each contact that is their friend

//9. the average age of the contacts

//10. the median age of the contacts