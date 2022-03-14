import App from "./App"
import express from App
import faker from App


const createUser = () =>({
      _id: faker.datatype.id(),
      firstName: faker.name.firstName(),
      lastName:faker.name.lastName(),
      phoneNumber:faker.commerce.phoneNumber(),
      email:faker.commerce.email(),
      password:faker.commerce.password()
})

const createCompany = () => {
  const company = {
    _id:faker.commerce._id(),
    name:faker.commerce.name(),
    address:{
    street: faker.address.street(),

  };
  return company;
}
