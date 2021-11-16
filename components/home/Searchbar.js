import React from 'react'
import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
export default function Searchbar({cityHandler}) {
    return (
    <View style={{
        marginTop:15,
        flexDirection:'row'
        }}>
            <GooglePlacesAutocomplete 
            query={{key:'AIzaSyA6LChhV0JLzIcsBmmfQGNVv_3-Lb17pDw'}}
            onPress={(data,details = null) => {
                const city = data.description.split(',')[0];
                cityHandler(city);
            }}
            placeholder='Search'
            renderLeftButton ={()=>{
            return(
                <View style={{marginLeft:10}}>
                       <Ionicons name='location-sharp' size={24}/>
                 </View>
                );
            }}
            renderRightButton ={()=>{
                return(
                    <View style={{flexDirection:'row',
                    marginRight:8,
                    backgroundColor:'white',
                    padding:9,
                    borderRadius:30,
                    alignItems:'center'
                    }}>
                           <AntDesign name='clockcircle' 
                           style={{marginRight:8}}
                           size={11}/>
                           <Text>History</Text>
                     </View>
                    );
                }}
            styles={{
                textInput:{
                    backgroundColor:"#eee",
                    borderRadius:50,
                    fontWeight:'700',
                    marginTop:2,
                    
                    
                },
                textInputContainer:{
                    backgroundColor:'#eee',
                    borderRadius:50,
                    flexDirection:'row',
                    alignItems:'center',
                    marginRight:10,
                    flexDirection:'row'
                    
                }
            }}
            >
            
           </GooglePlacesAutocomplete>
        </View>
    );
}
