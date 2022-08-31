class Contact{
    constructor(...params){
        this.name=params[0];
        this.city=params[1];
        this.phone=params[2];
    }
    get name(){
        return this.name1
    }
    set name(name){
        let nameregex=RegExp('[A-Z]{1}[a-z]{2}')
        if(nameregex.test(name))
        this.name1=name;
        else throw "incorect name";
    }
    get city(){
        return this.city1
    }   
    set city(city){
        let regex=RegExp('[a-zA-Z0-9]')
        if(regex.test(city))
        this.city1=city
        else throw "incorrect city"
    }
    get phone(){
        return this.phone1;
    }
    set phone(phone){
        let regex=RegExp('[0-9]{10}')
        if(regex.test(phone))
        this.phone1=phone
        else throw "incorrect phone number"
    }
}
    try {
        let contact1 =new Contact("Mrunal","mumbai","9892820223")
        console.log(contact1);
    } catch (error) {
        console.log(error);
    }
