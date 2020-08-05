import React from 'react'
import { View, Text, Image, StyleSheet, Platform, StatusBar } from 'react-native'

import SvgComponent from "./../assets/Direct"
import AppPhoto from "./../assets/AppPhoto"



function Header() {
    return (
        <View style={style.header}>
            <AppPhoto />
            <Image source={require("./../assets/mainIcon.png")} /> 
            <SvgComponent />
        </View>
    )
}

const style = StyleSheet.create({
    header:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:Platform.OS === "android"? StatusBar.currentHeight+5 :0,
        marginHorizontal:10,
        borderBottomWidth:1,
        borderColor:"rgba(1,1,1,.1)",
        paddingBottom:5,  
    }
})

export default Header
