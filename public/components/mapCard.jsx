import { createStyles, Text, Card } from '@mantine/core';
import { Map, GoogleApiWrapper } from 'google-maps-react';


const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: "#F2FFF5",
    width:"50vw",
    height:"50vh"
  },

  label: {
    color:"#3A3A3A",
    fontFamily: `Microsoft YaHei UI, ${theme.fontFamily}`,
    fontWeight: 700,
    lineHeight: 1,
  },
  inner: {
    display: 'flex',

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

}));

export function MapCard(props) {
  const { classes, theme } = useStyles();
  
  return (
    <Card withBorder p="xl" radius="md" className={classes.card}>
      <div className={classes.inner}>
        <div>
          <Text fz="xl" className={classes.label}>
            Canada (Location pointed on map)
          </Text>
          <div>
            <Map
              google={props.google}
              zoom={4}
            //   center={{ lat: 56.1304, lng: -106.3468 }}
              initialCenter={{ lat: 56.1304, lng: -106.3468 }}
              style={{ width: '100vw' }}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default GoogleApiWrapper({
  apiKey: 'YOUR_GOOGLE_MAPS_API_KEY_HERE'
})(MapCard);
