import React from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import styled from 'styled-components'

const CustomMapContainer = styled(MapContainer)`
width: 100%;
height: 100%;
z-index: 0;

`

const MapComponent = ({userDetails}) => {

    const {lat, lng} = userDetails?.address?.geo
    
  return (
    
        <CustomMapContainer center={[lat, lng] || []} zoom={18} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[lat, lng]}>
    <Popup>
     Lat : {lat} <br />Lng : {lng}
    </Popup>
  </Marker>
</CustomMapContainer>
    
  )
}

export default MapComponent