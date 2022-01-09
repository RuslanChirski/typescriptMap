import * as faker from 'faker';
import { Mappable } from './MapFacade';

export class Company implements Mappable {
    companyName: string;
    catchPhrase: string;
    color: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.color = 'blue';
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        }
    }

    getInfoWindowContent = (): string => {
        return `
            <div>
                <h2>Company name: ${this.companyName}</h2>
                <h4>Catch phrase: ${this.catchPhrase}</h4>
            </div>
        `
    }
}