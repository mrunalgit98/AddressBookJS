class Contact{

    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

   
    constructor(firstName,lastName,address,city,state,zip,phoneNumber,email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email
    }


}

let person = new Contact("Mrunal","Bhoir","Mumbai","Mumbai","MH",421265,993828432,"muads@gmail.com");
console.log(person); 