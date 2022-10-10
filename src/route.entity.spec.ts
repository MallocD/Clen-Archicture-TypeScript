import { Route, RouteProperties } from "./route.entity"

describe('Route tests', () => {

    test('constructor', () => {
        let routeProperties: RouteProperties = {
            title: 'My fisrt route',
            startPostion: { latitude: 15, longitude: 20 },
            endPosition: { latitude: 20, longitude: 22 },
        }

        let route = new Route(routeProperties);
        expect(route.properties).toStrictEqual({
            ...routeProperties, points: []
        })

        routeProperties = {
            title: 'My fisrt route',
            startPostion: { latitude: 15, longitude: 20 },
            endPosition: { latitude: 20, longitude: 22 },
            points: [
                { longitude: 12, latitude: 20 }
            ]
        }

        route = new Route(routeProperties);
        expect(route.properties).toStrictEqual({
            ...routeProperties, points: [
                { longitude: 12, latitude: 20}
            ]
        })
    })

    test('updateTile method',()=>{
        const routeProperties: RouteProperties = {
            title: 'My fisrt route',
            startPostion: { latitude: 15, longitude: 20 },
            endPosition: { latitude: 20, longitude: 22 },
        }

        const route = new Route(routeProperties);
        route.updateTitle('title update');
        expect(route.title).toBe('title update')
    })
})