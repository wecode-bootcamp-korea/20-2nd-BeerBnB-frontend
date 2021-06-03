import React, { useRef } from 'react';
import { GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import styled from 'styled-components';
import RoomOnMap from './RoomOnMap';

const Map = props => {
  const { setSelectedRoom, selectedRoom } = props;
  const google = window.google;
  const mapRef = useRef();
  const icon = {
    url: '/images/beer2.png',
    scaledSize: new google.maps.Size(32, 32),
  };

  return (
    <GoogleMap
      ref={mapRef}
      onIdle={props.onMapIdle}
      defaultZoom={12}
      defaultCenter={{ lat: 37.541, lng: 126.986 }}
    >
      {props.roomList.map(room => (
        <Marker
          key={room.room_id}
          position={{
            lat: Number(room.lat),
            lng: Number(room.lng),
          }}
          onMouseOver={() => setSelectedRoom(room)}
          icon={icon}
          animation={google.maps.Animation.BOUNCE}
        />
      ))}
      {props.selectedRoom && (
        <StyledInfoWindow>
          <InfoWindow
            position={{
              lat: Number(selectedRoom.lat),
              lng: Number(selectedRoom.lng),
            }}
            onCloseClick={() => {
              props.setSelectedRoom(null);
            }}
          >
            <RoomOnMap selectedRoom={selectedRoom} />
          </InfoWindow>
        </StyledInfoWindow>
      )}
    </GoogleMap>
  );
};

const StyledInfoWindow = styled.div``;

export default Map;
