
export type LatLng = { latitude: number; longitude: number };

export type RouteProperties = {
    title: string,
    startPostion: LatLng,
    endPosition: LatLng,
    points?: LatLng[]
}

export class Route {
    public properties : Required<RouteProperties>;
    constructor( properties: RouteProperties) { 
        this.properties = {
            ...properties,
            points : properties.points || []
        }

    }

    updateTitle(title: string){
        this.title = title;
    }

    get title(){
        return this.properties.title;
    }

    private set title(value: string){
        this.properties.title = value;
    }
}
