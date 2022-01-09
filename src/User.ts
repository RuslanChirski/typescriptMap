import * as faker from 'faker';
import { Mappable } from './MapFacade';

export class User implements Mappable {
    name: string;
    color: string;
    location: {
        lat: number;
        lng: number;
    }

    constructor() {
        this.name = faker.name.firstName();
        this.color = 'red';
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        }
    }

    getInfoWindowContent = (): string => {
        return `
        <div>
            <h2>User's name: ${this.name}</h2>
        </div>
        `
    }
}