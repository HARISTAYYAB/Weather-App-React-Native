import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import { React, useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { getVersion } from 'jest';



export default function Detail({ route }) {
    const [data, setdata] = useState()
    const name = route.params.unname;
    // const API_KEY = '6fae0789835d26dbcf99502261e31b62'


    useEffect(() => {
        
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=6fae0789835d26dbcf99502261e31b62`)
            .then(res => res.json())
            .then(res => setdata(res))
            .catch(err => console.log(err))
        // res=res.json()
        // console.log(res)

    }, [])

    return (
        <View style={{backgroundColor:'black',flex:1}} >
       
            {
                data ? <View style={{ alignItems: 'center', flex: 1, margin: 30, justifyContent: 'space-evenly', flexDirection: 'column' }} >
                    <View style={{ alignItems: 'center' }}  >
                        <Text style={{ color: 'white', fontSize: 35, fontWeight: 'bold' }} >{name}</Text>
                        <Text style={{ color: 'white', fontSize: 20 }} >{data['weather'][0]["main"]}</Text>

                    </View>
                    <View>
                       
                        <Text style={{ color: 'white', fontSize: 40, fontWeight: '900' }} >{(data['main']['temp'] - 273).toFixed(2)}&deg;C</Text>
                    </View>

                    <View>
                        <Text style={{ color: 'white', fontSize: 20,margin:16,fontWeight:'900' }}>Weather Detail</Text>
                        <View style={{width:400,paddingHorizontal:30}}  >
                            <View style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
                            <Text style={{ color: 'white', fontSize: 20, }} >Wind:</Text>
                            <Text style={{ color: 'white', fontSize: 20,}} >{data.wind.speed}Km/h</Text>
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-between',margin:10}} >
                            <Text style={{ color: 'white', fontSize: 20, }} >pressure:</Text>
                            <Text style={{ color: 'white', fontSize: 20,}} >{data['main']['pressure']}</Text>
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-between',margin:10}} >
                            <Text style={{ color: 'white', fontSize: 20, }} >Humidity:</Text>
                            <Text style={{ color: 'white', fontSize: 20,}} >{data['main']['humidity']}%</Text>
                            </View>
                            
                            <View style={{flexDirection:'row',justifyContent:'space-between',margin:10}} >
                            <Text style={{ color: 'white', fontSize: 20, }} >Visibility:</Text>
                            <Text style={{ color: 'white', fontSize: 20,}} >{data['visibility']} </Text>
                            </View>

                            <View style={{flexDirection:'row',justifyContent:'space-between',margin:10}} >
                            <Text style={{ color: 'white', fontSize: 20, }} >Description:</Text>
                            <Text style={{ color: 'white', fontSize: 20,}} >{data.weather[0].description} </Text>
                            </View>
                            
                            <Image style={{width:120,height:120}}  source={{uri:`https://openweathermap.org/img/w/'${data.weather[0].icon}.png`}} />
                            <Text style={{ color: 'white', fontSize: 20 }}></Text>
                        
                        </View>
                    </View>

                </View> : null
            }
        </View>
    )
}