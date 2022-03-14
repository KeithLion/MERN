import App from "./App"
import express from App
import faker from App


const createUser = () =>({
      _id: faker.datatype.id(),
      firstName: faker.name.firstName(),
      lastName:faker.name.lastName(),
      phoneNumber:faker.phone.phoneNumber(),
      email:faker.commerce.email(),
      password:faker.commerce.password()
})

const createCompany = () => ({
    _id:faker.commerce._id(),
    name:faker.commerce.name(),
    address:{
    street: faker.address.street(),
    city: faker.city(),
    state:faker.state(),
    zipCode:faker.zip(),
    country:faker.country()
  };

})
