import React,{useState} from 'react'
import { View, Text,Modal,TouchableOpacity, StyleSheet } from 'react-native'
//import { TouchableOpacity} from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import OrderItem from './OrderItem';

export default function ViewCart() {

    const [modalVisable,setModalVisible]=useState(false)


    const {items,restaurantName} = useSelector((state)=>state.cartReducer.selectedItems);


    const total = items.map((item)=>Number(item.price.replace("$","")))
    .reduce((prev,curr)=>prev+curr,0); 


    const totalUSD = total.toLocaleString("en",{
        style:"currency",
        currency:"USD"
    });

    //console.log(totalUSD)

    const checkModalCenter = ()=>(
        <>
        
        <View style={styles.modalContainer}>
            <View style={styles.modalCheckoutContainer}>
                <Text style={styles.restaurantName}>{restaurantName}</Text>
                {items.map((item,index)=> (
                 <OrderItem key={index} 
                 style={styles.subTotaltext} 
                 item={item}
                 >{item.name}</OrderItem>))}
                 <View style={styles.subtotalContainer} >
                 <Text style={[{...styles.subTotaltext},{fontWeight:"bold"}]}>Sub total</Text>
                 <Text>{totalUSD}</Text>
                 </View>
                <View style={{flexDirection:'row',
                 justifyContent:'center',}}>
                     <TouchableOpacity 
                     onPress={()=>setModalVisible(false)}
                     style={{
                         marginTop:20,
                         backgroundColor:'black',
                         alignItems:'center',
                         padding:13,
                         width:300,
                         position:'relative',
                         borderRadius:30,
                     }}>
                         <Text style={{
                             fontSize:16,
                             color:'white',
                             fontWeight:'bold'
                         }}>Checkout</Text>
                     </TouchableOpacity>

                </View>
            </View>
         </View>
        </>
    )
 
    return (
        <>
        <Modal animationType="slide"
        //hardwareAccelerated={true}
         visible={modalVisable}
         transparent={true}
        onRequestClose ={()=>setModalVisible(false) }
        >
            {checkModalCenter()}
        </Modal>
        {total ? (
        <View style={{
            //flex:1,
            alignItems:'center',
            flexDirection:'row',
            position:'absolute',
            justifyContent:'center',
            bottom:40,
            //borderTopStartRadius:50,
            zIndex:2
        }}>
        <View style={{
            flexDirection:'row',
            justifyContent:'center',
            width:'100%'
        }}>
            <TouchableOpacity
            style={{
                marginTop:20,
                backgroundColor:'black',
                flexDirection:'row',
                //alignItems:'center',
                padding:15,
                borderRadius:30,
                width:250,
                position:"relative",
                justifyContent:'center'
            }}
            onPress={()=>setModalVisible(!modalVisable)}>
            <Text style={{
            color:'#eee',
            fontSize:20,
            marginRight:30 }}
            >Viewcart</Text>
            <Text style={{color:'white',
            fontSize:20}}>$ {totalUSD}</Text>
            </TouchableOpacity>
        </View>
        </View>) : <></> }
        </>
    )
};

const styles = StyleSheet.create({
    modalContainer:{
        flex:1,
        justifyContent:'flex-end',
        backgroundColor:"rgba(0,0,0,0.7)"
    },
        modalCheckoutContainer :{
            backgroundColor:'white',
            padding:16,
            height:500,
            borderWidth:1
        },
    subTotaltext:{
        textAlign:'left',
        fontWeight:'600',
        fontSize:15,
        marginBottom:10 
       },
    restaurantName:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:18,
        marginBottom:10
    },
    Totaltext:{
        textAlign:'right',
        fontWeight:'bold',
        fontSize:18,
        marginTop:20, 
        marginRight:30,
        //justifyContent:'space-between'
       },
       subtotalContainer:{
        flexDirection:'row',
        justifyContent:"space-between",
        padding:20,
        fontWeight:'bold',
        //borderBottomWidth:1,
        //borderBottomColor:'#999'
       }

})
