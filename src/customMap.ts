
/**
 * Instructions to every other class on how they can be an argument
 * to 'addMarker()'
 */
export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string;
    color: string;
}

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(
            document.getElementById(divId) as HTMLElement,
            {
                zoom: 1,
                center: {
                    lat: 0,
                    lng: 0,
                },
            }
        );
    }

    /* 不是最佳解！如果還有類似 User 或 Company 的其他東西要做 Marker
       Code 會變得很冗長
    addMarker(mappable: User | Company): void {
        
         // "User | Company" 代表這兩個 interface 的交集
         // 所以只有 mappable.location 可以存取

        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng,
            },
        });
    }
    */

    addMarker(mappable: Mappable, label?: string): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng,
            },
            clickable: true,
            opacity: 0.8,
            label: label,
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                // content: 'Hi, ' + marker.getLabel()
                content: mappable.markerContent()
            })
            infoWindow.open({
                map: this.googleMap,
                anchor: marker
            })
        })
    }

}
