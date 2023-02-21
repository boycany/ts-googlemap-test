
// const user = new User()
// console.log(user)

// const company = new Company()
// console.log(company)

import { User } from "./User"
import { Company } from "./company";
import { CustomMap } from "./customMap";

const user = new User()
const company = new Company()
const customMap = new CustomMap('map')

customMap.addMarker(user, user.name)
customMap.addMarker(company, company.companyName)
