import { faker } from "@faker-js/faker";
import { Mappable } from "./customMap";

export class Company implements Mappable {
    companyName: string
    catchPhrase: string
    location: {
        lat: number,
        lng: number
    }
    color = 'black'

    constructor(){
        this.companyName = faker.company.name()
        this.catchPhrase = faker.company.catchPhrase()
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent(): string {
        return `
            <div>
                <h1>Companyame: ${this.companyName}<h1>
                <h3>Catchphrase: ${this.catchPhrase}<h3>
            </div>
        `
    }


}