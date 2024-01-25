import axios from 'axios';
const URL ='https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary'
  

 export const getPlacesData = async (sw, ne) => {
    try {
        const {data: { data } } = await axios.get(URL, {
            params: {
              bl_latitude: sw.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
              tr_latitude: ne.lat,
            },
            headers: {
              'X-RapidAPI-Key': 'f3c3b2dc41msh1d79a47cfd3cb3ep1418b1jsna62c417a24ab',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          });

        return data;
    } catch (error) {
        console.log(error)
    }
}