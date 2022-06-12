mapboxgl.accessToken = "pk.eyJ1IjoicmlkZGhpbWEtMjciLCJhIjoiY2wxMjE2dnh4MmQwNzNpa2JucXVzcWdhNSJ9.qRlud9NQGSwmRdxzCsuIfA"

let latitude = 77.17084 , longitude = 28.59518

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/riddhima-27/cl41rs959000f14qzyq2ins9e',
    center: [longitude, latitude],
    zoom: 5
});

var img1 = document.querySelector('#amber')

var marker1 = new mapboxgl.Marker({
    element: img1
})
.setLngLat([75.85150, 26.99539])
.addTo(map);


var img2 = document.querySelector('#gateway')

var marker2 = new mapboxgl.Marker({
    element: img1
})
.setLngLat([72.83464, 18.92233])
.addTo(map);


var img3 = document.querySelector('#gate')

var marker3 = new mapboxgl.Marker({
    element: img1
})
.setLngLat([77.229471, 28.61313])
.addTo(map);


var img4 = document.querySelector('#lotus')

var marker4 = new mapboxgl.Marker({
    element: img1
})
.setLngLat([77.25880, 28.55368])
.addTo(map);


var img5 = document.querySelector('#victoria')

var marker5 = new mapboxgl.Marker({
    element: img1
})
.setLngLat([88.34256, 22.544986])
.addTo(map);

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);