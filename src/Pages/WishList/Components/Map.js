import React from 'react';
import { GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import styled from 'styled-components';
import RoomOnMap from './RoomOnMap';

const Map = props => {
  const google = window.google;
  const mapRef = React.createRef();
  const icon = {
    url: '/images/beer2.png',
    scaledSize: new google.maps.Size(32, 32),
  };

  // const drop = () => {
  //   for (let i = 0; i < neighborhoods.length; i++) {
  //     addMarkerWithTimeout(neighborhoods[i], i * 200);
  //   }
  // };

  // const addMarkerWithTimeout = (position, timeout) => {
  //   window.setTimeout(() => {
  //     markers.push(
  //       new google.maps.Marker({
  //         position: position,
  //         map,
  //         animation: google.maps.Animation.DROP,
  //       })
  //     );
  //   }, timeout);
  // };

  return (
    <GoogleMap
      ref={map => mapRef}
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
          onMouseOver={() => props.setSelectedRoom(room)}
          icon={icon}
          animation={google.maps.Animation.BOUNCE}
        />
      ))}
      {props.selectedRoom && (
        <StyledInfoWindow>
          <InfoWindow
            position={{
              lat: Number(props.selectedRoom.lat),
              lng: Number(props.selectedRoom.lng),
            }}
            onCloseClick={() => {
              props.setSelectedRoom(null);
            }}
          >
            <RoomOnMap selectedRoom={props.selectedRoom} />
          </InfoWindow>
        </StyledInfoWindow>
      )}
    </GoogleMap>
  );
};

const StyledInfoWindow = styled.div`
  //infowindow custome을 너무너무 하고 싶다!!!!!!!!!!!!!!!!
`;

export default Map;
