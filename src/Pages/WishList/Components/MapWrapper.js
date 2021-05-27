import React from 'react';
import { withGoogleMap, withScriptjs } from 'react-google-maps';
import styled from 'styled-components';
import Map from './Map';

const WrappedMap = withScriptjs(withGoogleMap(Map));

const MapWrapper = ({ roomList, selectedRoom, setSelectedRoom }) => {
  return (
    <StyledMap>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        roomList={roomList}
        selectedRoom={selectedRoom}
        setSelectedRoom={setSelectedRoom}
      />
    </StyledMap>
  );
};

const StyledMap = styled.div`
  width: 50vw;
  height: 100vh;
  overflow: hidden;
`;

export default MapWrapper;
