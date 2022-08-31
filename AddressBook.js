console.log("Welcome to The Address Book JS Program ")
class Contact {
    constructor(...params) {
        this.firstName = params[0];
        this.city = params[1];
        this.phoneNo = params[2];
    }

    get firstName() {
        return this._firstName
    }
    set firstName(firstName) {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$')
        if (nameRegex.test(firstName))
            this._firstName = firstName;
        else throw "Incorrect First Name";
    }
 
    get city() { return this._city }
    set city(city) {
        let regex = RegExp('[a-zA-Z0-9 ,]{4,}')
        if (regex.test(city))
            this._city = city
        else throw "Incorrect City"
    }
    
    get phoneNo() { return this._phoneNo }
    set phoneNo(phoneNo) {
        let regex = RegExp('[0-9]{10}')
        if (regex.test(phoneNo))
            this._phoneNo = phoneNo
        else throw "Incorrect Phone Number"
    }
 


}
var addressBookArray = new Array()
try {
    let contact1 = new Contact("Mrunal","mumbai","9892820223");
    let contact2 = new Contact("Kunal","thane","9892820223");
    addressBookArray.push(contact1);
    addressBookArray.push(contact2);

}
catch (e) {
    console.log(e)
}
for (let i = 0; i < addressBookArray.length; i++) {
    console.log(addressBookArray[i])
}
const prompt = require('prompt-sync')();


function findContact(fname, lname) {
    let contactToEdit;
    for (let i = 0; i < addressBookArray.length; i++) {
        if (addressBookArray[i].firstName === fname)
            contactToEdit = addressBookArray[i]
    }

    if (contactToEdit == null)
        console.log("No Contact Found To Edit")
    else {
        let input = 1;
        while (input != 4) {
            console.log("1. Edit First Name\n2. Edit City \n3. Phone no \n4. Exit");
            input = prompt("Enter Your Choice:  ")
            input = parseInt(input)
            switch (input) {
                case 1:
                    let fname = prompt("Enter the first Name: ")
                    contactToEdit.firstName = fname
                    break
                case 2:
                    let city_edit = prompt("Enter the city: ")
                    contactToEdit.city = city_edit
                    break
                case 3:
                    let phone_edit = prompt("Enter the phone number: ")
                    contactToEdit.phoneNo = phone_edit
                    case 4:
                        break;
  
                default:
                    console.log("Wrong Input")
            }
        }
    }
}

// let del=(Name)=>{
//     let contactToEdit,index;
//     for(let i=0;i<addressBookArray.length;i++){
//         if(addressBookArray[i].firstName==Name)
//         contactToEdit=addressBookArray[i];
//         index=addressBookArray.indexOf(contactToEdit);
//         console.log(index);
//         console.log("delete");
//     }
//     if(index!=1){
//         addressBookArray.splice(index,1);
//     }
// }



// let param1 = prompt("Enter the First Name to edit  ")
// findContact(param1);
// for (let i = 0; i < addressBookArray.length; i++) {
//     console.log(addressBookArray[i])
// }

// let name =prompt("enter name to delete");
// del(name);
// for(let i=0;i<addressBookArray.length;i++){
//     console.log(addressBookArray[i]);
// }

let count=()=>{
    console.log("number of contact");
    console.log(addressBookArray.length);
}
count();
let duplicate=(firstName,city,phoneNo)=>{
    if(addressBookArray.some(contacts=>contacts.firstName==firstName)){
        console.log("contact already exist");
    }
    else
    addressBookArray.push(new Contact(firstName,city,phoneNo));
}
duplicate("Mrunal1");

