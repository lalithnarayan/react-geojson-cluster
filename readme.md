# react-geojson-cluster

```
npm install react-geojson-cluster
```

## example
```js
import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { GeoJsonCluster } from'react-geojson-cluster';

const map = <Map id="map" center={[30.25, -97.75]} zoom={13}>
  <TileLayer
    url='https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png'
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    id='paulserraino.n0dn3pbe' />
  <GeoJsonCluster data={your_geojson} />
</Map>;

React.render(map, document.getElementById('map-container'));
```

## License
MIT