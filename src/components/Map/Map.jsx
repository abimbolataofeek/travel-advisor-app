import React from 'react';
import GoogleMapReact from 'google-map-react';
import { paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOutlined from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './styles';

const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');

    const corrdinates = { lat: 0, lng: 0 };
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootsrapURLKeys={{ key: 'AIzaSyCChF5lTF4RwVSFK4au2ctlFEe9LtwgWtE' }}
                defaultCenter={corrdinates}
                center={corrdinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                option={''}
                onChange={''}
                onChildClick={''}
            >
            </GoogleMapReact>
        </div>
    )
}
export default Map;