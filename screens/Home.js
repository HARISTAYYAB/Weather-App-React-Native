import { View, Text, ImageBackground, StyleSheet, TextInput,TouchableOpacity } from 'react-native'
import {React,useState} from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const [city, setcity] = useState("")
    const navigation = useNavigation();
    return (
            <ImageBackground style={{ height: '100%', width: '100%' }} blurRadius={10} source={require("../Assets/pic.jpg")}>
             <View style={{  }}>
                    <View>
                        <Icon style={{ margin: 20 }} name="menu-outline" color='white' size={35} />
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ color: 'white', marginLeft: 20, fontSize: 31 }} >Hellow S.G</Text>
                            <Text style={{ color: 'white', marginLeft: 20, fontSize: 25 }} >search the city by name</Text>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', }} >
                            <View style={{
                                flexDirection: 'row',width:300,height:50, alignItems: 'center', borderColor: 'white', paddingHorizontal: 10,
                                justifyContent: 'space-between', borderWidth: 2, borderRadius: 50, margin: 20,
                            }}>
                                <TextInput
                                value={city}
                                onChangeText={val=>setcity(val)}
                                 placeholder='Search the city' 
                                placeholderTextColor={"white"} style={{color:'white'}} 
                                />
                               <TouchableOpacity onPress={()=>{
                                navigation.navigate("Details",{
                                    unname:city
                                })
                                
                                }}>
                                <Icon name='search-outline' color="white" size={20} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
           
          </ImageBackground >
       
    )
}