import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


export const getPlaceData = async (sw, ne) => {
  try {
    const {data: {data}} = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng
      },
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': '46305b07a9msh2c0afdc67414c78p15f47cjsn8f80f7138150'
      }  
    }
    );
      return data;
  } catch (error) {
    console.log(error);
  }
}