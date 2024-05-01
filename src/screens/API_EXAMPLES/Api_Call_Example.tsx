import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TempIcon from 'react-native-vector-icons/FontAwesome6';
import TempIcon1 from 'react-native-vector-icons/FontAwesome5';
import AirIcon from 'react-native-vector-icons/Entypo';
import VisibilityIcon from 'react-native-vector-icons/MaterialIcons';
import WindIcon from 'react-native-vector-icons/Fontisto'; 
import AirHumidityIcon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import Sun from 'react-native-vector-icons/MaterialIcons'; 

interface ApiCallExampleProps {}

const ApiCallExample = (props: ApiCallExampleProps) => {

    const [data,setData] = React.useState();
    const [data1,setData1] = React.useState();

    const getAPIData = async ()=>{
        console.log("getAPIData.........");

        const url = "https://api.openweathermap.org/data/2.5/weather?lat=23.0225&lon=72.5714&appid=082032f89a47ed9f3fc4b5c33267e186";
        
        let result = await fetch(url);
        result = await result.json();
        setData(result);
        console.log(result);
    }

    const get5DayWeatherForecastAPIData = async ()=>{
      console.log("get5DayWeatherForecastAPIData.........");

      const url = "https://api.openweathermap.org/data/2.5/forecast?lat=23.0225&lon=72.5714&appid=0d743f9e2a7d7e1642337e7d7e6272c8";
      let result = await fetch(url);
      result = await result.json();
      setData1(result);
      console.log(result);
  }

    React.useEffect(
        ()=>{
          get5DayWeatherForecastAPIData();
            getAPIData();
        },[]
    )
    // (32°F − 32) × 5/9

    const convertToFahrenheit = (tempInKelvin) => {

        return tempInKelvin - 273.15;
    }

    // (((A1/60)/60)/24)+DATE(1970,1,1)

    // const convertToDate = (unixTimeStamp) => {
    //     return new Date(unixTimeStamp * 1000);
    // }
    // Function to check if a date is today
const isToday = (someDate) => {
  const today = new Date();
  return someDate.getDate() === today.getDate() &&
         someDate.getMonth() === today.getMonth() &&
         someDate.getFullYear() === today.getFullYear();
}

// Function to check if a date is tomorrow
const isTomorrow = (someDate) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return someDate.getDate() === tomorrow.getDate() &&
         someDate.getMonth() === tomorrow.getMonth() &&
         someDate.getFullYear() === tomorrow.getFullYear();
}

// Function to format the date as "today" or "tomorrow" if applicable
const formatDate = (date) => {
  if (isToday(date)) {
    return 'Today';
  } else if (isTomorrow(date)) {
    return 'Tomorrow';
  } else {
    // If not today or tomorrow, format as a regular date
    return date.toLocaleDateString('en-GB' , { day: 'numeric', month: 'short' });
  }
}

const renderWeatherIcon = (description) => {
  // Convert description to uppercase for case-insensitive comparison
  const upperCaseDescription = description.toUpperCase();

  // Check weather description and return the appropriate icon
  if (upperCaseDescription.includes('CLEAR SKY')) {
    return <Sun name="sunny" size={20} color="orange" />;
  } else if (upperCaseDescription.includes('SCATTERED CLOUDS')) {
    return <WindIcon name="soundcloud" size={20} color="orange" /> ;
  }  else if (upperCaseDescription.includes('FEW CLOUDS')) {
    return <WindIcon name="day-cloudy" size={20} color="orange" /> ;
  }
  else if (upperCaseDescription.includes('OVERCAST CLOUDS')) {
    return <WindIcon name="cloudy-gusts" size={20} color="orange" /> ;
  }
  else if (upperCaseDescription.includes('BROKEN CLOUDS')) {
    return <WindIcon name="cloudflare" size={20} color="orange" /> ;
  }else {
    // Return a default icon or null if no match is found
    return null;
  }
};

  return (
    <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/Background.png')} style={styles.backImageStyle}>
      <ScrollView>
      {/* <Text>ApiCallExample</Text> */}
      
      {
        data?
        
        <View>
            <View style={styles.dateAdressStyle}>
              
            <Text><AirIcon name="location" size={20} color="grey" />  {data.name} , {data.sys.country}</Text>
        <Text> <WindIcon name="cloud-refresh" size={30} color="grey"/>  
        {/* {new Date(data.dt * 1000).toLocaleDateString('en-GB')} */}
        </Text>
            </View>
            <Text style={styles.tempView}>{convertToFahrenheit(data.main.temp).toFixed(0)}°C</Text>
        <Text style={{textAlign:'center'}}>{data.weather[0].description.toUpperCase()}</Text>

       

        <View style={styles.minMaxTemp}>
        {/* <Text>Minimum temperature at the moment :{convertToFahrenheit(data.main.temp_min).toFixed(2)} °C</Text> */}
        {/* <Text>Maximum temperature at the moment :{convertToFahrenheit(data.main.temp_max).toFixed(2)} °C</Text> */}
        </View>
        <View style={styles.sunView}>
          <View>
          {/* Sunrise Time : */}
        <Image source={require('../../assets/images/sun.png')} style={{height:50,width:50,alignSelf:'center'}}/>
        <Text> {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</Text>
        </View>
        <View>
        {/* Sunset Time : */}
        <Image source={require('../../assets/images/night.png')} style={{height:50,width:50,alignSelf:'center'}}/>
        <Text> {new Date(data.sys.sunset * 1000).toLocaleTimeString()}</Text>
        </View>
        </View>

        {
        data1 ?
        <View style={styles.fiveDayWeather}>
        <FlatList
        horizontal
        data={data1.list}
        renderItem={
          ({item})=>{
            return(
              <View style={styles.innerFiveDayView}>
                <Text style={styles.subTitleName}>{formatDate(new Date(item.dt * 1000))}</Text>
              {/* <Text>{new Date(item.dt * 1000).toLocaleDateString('en-GB')}</Text> */}
              <Text >{new Date(item.dt * 1000).toLocaleTimeString('en-GB').slice(0, 5)}</Text>
              <Text style={styles.titleName}>{convertToFahrenheit(item.main.temp).toFixed(0)}°C</Text>
              {/* <Text>{item.weather[0].description.toUpperCase()}</Text> */}
              <Text>{renderWeatherIcon(item.weather[0].description)}</Text>
              </View>
            )
          }
        }
        />
        </View>
        // <Text>{data1.city.coord.lat}</Text>
        // <Text>{data1.list.map(
        //   (item,index)=>{
        //     if(index === 0){
        //       return(
        //         <View>
        //           <Text>{new Date(item.dt * 1000).toLocaleDateString('en-GB')}</Text>
        //           <Text>{new Date(item.dt * 1000).toLocaleTimeString('en-GB').slice(0, 5)}</Text>

        //           <Text>{convertToFahrenheit(item.main.temp).toFixed(0)}°C</Text>
        //           <Text>{item.weather[0].description.toUpperCase()}</Text>
        //         </View>
        //       )
        //     }
        //   }
        // )}</Text>
        :<Text>NOT Data</Text>
      }

        <View style={{flexDirection:'row',marginHorizontal:10,flexWrap:'wrap',paddingLeft:8, marginBottom:15}}> 

        <View style={styles.boxStyle}>
    
    <TempIcon name="temperature-arrow-down" size={30} color="grey" />
    <Text style={styles.subTitleName}>Minimum temperature</Text>
    <Text style={styles.titleName}>{convertToFahrenheit(data.main.temp_min).toFixed(2)} °C</Text>
    </View>


    <View style={styles.boxStyle}>
    
    <TempIcon name="temperature-arrow-up" size={30} color="grey" />
    <Text style={styles.subTitleName}>Maximum temperature</Text>
    <Text style={styles.titleName}>{convertToFahrenheit(data.main.temp_max).toFixed(2)} °C</Text>
    </View>  

        <View style={styles.boxStyle}>
        <Icon name="coolant-temperature" size={30} color="grey" />
        <Text style={styles.subTitleName}>Feels Like</Text>
        <Text style={styles.titleName}>{convertToFahrenheit(data.main.feels_like).toFixed(0)}</Text>
        </View>

        <View style={styles.boxStyle}>
    
        <VisibilityIcon name="visibility" size={30} color="grey" />
        <Text style={styles.subTitleName}>Visibility</Text>
        <Text style={styles.titleName}>{data.visibility/1000} mi</Text>
        </View>


        <View style={styles.boxStyle}>
        
        <TempIcon1 name="cloud-rain" size={30} color="grey" />
        <Text style={styles.subTitleName}>Clouds</Text>
        <Text style={styles.titleName}>{data.clouds.all} %</Text>
        </View>

        <View style={styles.boxStyle}>
        <AirIcon name="air" size={30} color="grey" />
        <Text style={styles.subTitleName}>Air Pressure </Text>
        <Text style={styles.titleName}>{data.main.pressure} hPa</Text>
        </View>

        <View style={styles.boxStyle}>
      
        <WindIcon name="wind" size={30} color="grey" />
        <Text style={styles.subTitleName}>Wind Speed</Text>
        <Text style={styles.titleName}>{data.wind.speed} m/s</Text>
        </View>

        <View style={styles.boxStyle}>
      <AirHumidityIcon name="air-humidifier" size={30} color="grey" />
      <Text style={styles.subTitleName}>Humidity</Text>
      <Text style={styles.titleName}>{data.main.humidity} %</Text>
      </View>

      {/* <View style={styles.boxStyle}>
    
      <Icon name="coolant-temperature" size={30} color="grey" />
      <Text style={styles.subTitleName}>Wind Direction</Text>
      <Text style={styles.titleName}>{data.wind.deg} °</Text>
      </View>

      <View style={styles.boxStyle}>
      
      <Icon name="coolant-temperature" size={30} color="grey" />
      <Text style={styles.subTitleName}>Wind Speed</Text>
      <Text style={styles.titleName}>{data.wind.speed} m/s</Text>
      </View> */}





        </View>
        {/* <View style={styles.boxStyle}>
        <Icon name="coolant-temperature" size={30} color="grey" />
        <Text style={styles.subTitleName}>Feels Like</Text>
        <Text style={styles.titleName}>{convertToFahrenheit(data.main.feels_like).toFixed(0)}</Text>
        </View> */}
        {/* <Text>Humidity : {data.main.humidity} %</Text> */}
        {/* <Text>Air Pressure : {data.main.pressure} hPa</Text> */}
        {/* <Text>Wind Speed : {data.wind.speed} m/s</Text> */}
        {/* <Text>Wind Direction : {data.wind.deg} °</Text> */}
        {/* <Text>Visibility : {data.visibility/1000} mi</Text> */}
        {/* <Text>Description : {data.weather[0].description}</Text> */}
        {/* <Text>Clouds : {data.clouds.all} %</Text> */}
        {/* <Text>Sunrise : {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</Text> */}
        {/* <Text>Country : {data.sys.country}</Text> */}
       


        </View>
        // data.length ?
        // data.map(
        //     (item)=>{
               
        //         return(
        //             <View>
        //                 <Text>{item.base}</Text>
        //             </View>
        //         )
        //     }
        // )
        // <View>
        // <Text>{data.FacultyName}</Text>
        // </View>
        :
        <Text>NO DATA</Text>
      }
      </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ApiCallExample;

const styles = StyleSheet.create({
  container: {
    flex:1,
    // backgroundColor:'white'
  },
  backImageStyle:{
    flex:1
  },
  tempView:{
    fontSize:40,
    textAlign: 'center',
    justifyContent:'center',
    fontWeight:'900',
    color:'white'
  },
  dateAdressStyle:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:30,
    marginVertical:30,
    alignItems:'center',
    // alignContent:'center'
  },
  minMaxTemp:{
    paddingLeft:10,
    paddingTop:20
  },
  sunView:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:60,
    marginBottom:20,
  },
  boxStyle:{
    backgroundColor:'#170641',
    alignSelf:'flex-start',
    borderRadius:18,
    padding:20,
    margin:5,
    width:"45%"
  },
  subTitleName:{
    paddingTop:8,
    color:'grey',
    fontSize:15,
    fontWeight:'400'

  },
  titleName:{
    paddingTop:2,
    fontSize:20,
    fontWeight:'bold',
    color:'white'
  },
  fiveDayWeather:{
    marginHorizontal:20,
    backgroundColor:'#170641',
    borderRadius:18,
    marginBottom:10
  },
  innerFiveDayView:{
    padding:10
  }
});
