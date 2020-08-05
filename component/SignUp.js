import React from "react";
import { View,TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
function SignUp() {

  const createAccount =()=>{}

  return (
    <KeyboardAwareScrollView>
      <View style={styles.SignUp}>
        <TextInput style={styles.input} autoCompleteType="username" placeholder="userName..." />
        <TextInput style={styles.input} autoCompleteType="email" placeholder="Enter your email..." />
        <TextInput style={styles.input}
          autoCompleteType="password"
          placeholder="create a password..."
        />
        <TextInput style={styles.input}
          autoCompleteType="password"
          placeholder="confirm password..."
        />
        <TouchableOpacity onPress={createAccount} style={{alignItems:"center"}}>
          <Text style={{backgroundColor:"blue",padding:10,borderRadius:8}}>Sign-up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles=StyleSheet.create({
  SignUp:{
    paddingHorizontal:0,
    margin:0
  },
  input:{
    padding:10,
    marginBottom:4,
    backgroundColor:"rgb(232, 220, 220)",
    borderRadius:10
  }
})

export default SignUp;
