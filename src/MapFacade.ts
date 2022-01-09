// создается фасад для класса map для того, чтоб ограничить успользуемый другими разработчиками функционал


// Instructions to other classes how to be an argument for 'addMarker'
export interface Mappable {
    location: {
        lng: number;
        lat: number;
    };
    color: string;
    getInfoWindowContent(): string;
}

export class MapFacade {
    private readonly googleMap: google.maps.Map;

    constructor(mapWrapperId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(mapWrapperId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0,
            }
        });
    };

    // плохой подход, т.к. нарушается принцип DRY

    // addUserMarker = (user: User): void => {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: user.location,
    //     })
    // }
    //
    // addCompanyMarker = (company: Company): void => {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: company.location,
    //     })
    // }

    // плохой подход, т.к. при добавлении новых сущностей на карту, необходимо добавлять новые типы в addMarker
    // addMarker = (mappable: User | Company): void => {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: mapable.location
    //     })
    // }

    addMarker = (mappable: Mappable): void => {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: mappable.location,
        });
        const infoWindow = new google.maps.InfoWindow({
            content: mappable.getInfoWindowContent(),
        })
        marker.addListener('click', () => {
            infoWindow.open(this.googleMap, marker);
        })

    }


}