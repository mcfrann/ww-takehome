import GoogleMapReact from 'google-map-react'
import MapMarker from './mapMarker'

function createMapOptions(maps) {
  // next props are exposed at maps
  // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
  // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
  // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
  // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
  // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
  return {
    styles: [
      {
        featureType: 'administrative',
        elementType: 'labels.text',
        stylers: [
          {
            visibility: 'on'
          }
        ]
      },
      {
        featureType: 'administrative',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#172d17'
          }
        ]
      },
      {
        featureType: 'landscape',
        elementType: 'all',
        stylers: [
          {
            color: '#f2bbb1'
          },
          {
            visibility: 'on'
          }
        ]
      },
      {
        featureType: 'poi',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'road',
        elementType: 'all',
        stylers: [
          {
            saturation: -100
          },
          {
            lightness: 45
          },
          {
            visibility: 'simplified'
          },
          {
            color: '#f2e8e2'
          }
        ]
      },
      {
        featureType: 'road',
        elementType: 'labels.text',
        stylers: [
          {
            visibility: 'on'
          }
        ]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#172d17'
          }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'all',
        stylers: [
          {
            visibility: 'simplified'
          }
        ]
      },
      {
        featureType: 'road.arterial',
        elementType: 'labels.icon',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'transit',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'transit',
        elementType: 'labels.text',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'water',
        elementType: 'all',
        stylers: [
          {
            color: '#f2e8e2'
          },
          {
            visibility: 'on'
          }
        ]
      }
    ]
  }
}

const GoogleMap = ({ latandLong }) => {
  console.log(window, 'window')
  let isMobile = false
  try {
    window
    isMobile = window.innerWidth < 821
  } catch (err) {
    console.log('Oops, `window` is not defined')
  }

  let mapHeight = 'inherit'
  let mapZoom = isMobile ? 15 : 16
  const defaultProps = {
    center: {
      lat: latandLong.lat,
      lng: latandLong.lon
    },
    zoom: mapZoom
  }
  return (
    <div className='map-section' style={{ height: mapHeight, width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAhpMokBSxcy4inB8f4BSRGB-SZ2w0-bck' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={createMapOptions}
      >
        <MapMarker lat={latandLong.lat} lng={latandLong.lon} />
      </GoogleMapReact>
    </div>
  )
}

export default GoogleMap
