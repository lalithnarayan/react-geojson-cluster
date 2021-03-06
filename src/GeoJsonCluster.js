import { PropTypes } from 'react';
import { BaseTileLayer } from 'react-leaflet';
import cluster from 'leaflet-geojson-cluster';

export class GeoJsonCluster extends BaseTileLayer {
  componentWillMount() {
    super.componentWillMount();
    const { data, map, ...props } = this.props;
    this.leafletElement = cluster(data, props);
  }

  componentDidUpdate() {
    const { data, map, ...props } = this.props;
    map.removeLayer(this.leafletElement);
    this.leafletElement = cluster(data, props);
    map.addLayer(this.leafletElement);
  }
}

GeoJsonCluster.propTypes = {
  data: PropTypes.object.isRequired
};
