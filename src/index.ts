import { MapFacade } from './MapFacade';
import { User } from './User';
import { Company } from './Company';

const user = new User();
const company = new Company()
const map = new MapFacade('map');

map.addMarker(user);
map.addMarker(company);