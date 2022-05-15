import faker from "faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
  companyName: string = "";
  catchPhrase: string = "";
  location: {
    lat: number;
    lng: number;
  } = {
    lat: 0,
    lng: 0,
  };
  color: string = "red";

  constructor() {
    (this.companyName = faker.company.companyName()),
      (this.catchPhrase = faker.company.catchPhrase()),
      (this.location = {
        lat: Number(faker.address.latitude()),
        lng: Number(faker.address.longitude()),
      });
  }

  markerContent(): string {
    return `
    <div>
        <h1>Compamny name: ${this.companyName}</h1>
        <h3>Catch Phrase: ${this.catchPhrase}</h3>
    </div>
    `;
  }
}
