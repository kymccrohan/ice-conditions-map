import { RegionObject } from "./RegionObject";
import { regions } from "../public/observations/regions";
import moment from 'moment';

export class ObservationObject {
    constructor(json) {
        this.id = json.id;
        this.key = json.id;
        this.date = moment(json.date);
        this.route = json.route;
        this.region = json.region;
        this.condition = json.condition;
        this.climbed = json.climbed;
        this.notes = json.notes;
        this.link = json.link;
        this.coordinates = json.coordinates;
        this.observer = json.observer;
        this.images = json.images;
        this.region = new RegionObject(regions.find(r => r.id === json.region));
        this.setAdditionalTexts()
    }

    setAdditionalTexts() {
        this.observerText = this.observer ? this.observer : 'Anonymous';
        this.dateString = this.date.format("MMM D, YYYY");
    }
}