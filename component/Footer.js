import React, { useState, useEffect } from "react";
import { db, auth } from "./Firebase";
import {
  Image,
  Modal,
  Alert,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import HomeIcon from "../assets/Home";
import SearchIcon from "../assets/SerchIcon";
import AddPostIcon from "../assets/AddPostIcon";
import LikeIcon from "../assets/LikeIcon";
import ImageUpload from "./ImageUpload";

export default function Footer() {
  const [modalVisible, setModalVisible] = useState(false);
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [LogInPage, setLoginPage] = useState(true);
  const [user, setUser] = useState(null);
  ////////////////////////////////////////////
  /////////Image Upload//////
  ///////////
  const [openImageUploadModal, setOpenImageUploadModal] = useState(false);
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState("");

  ///////////

  console.log(user);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        setUser(authUser);
        if (authUser.displayName) {
          //dont update username
        } else {
          //if we just created someone
          return authUser.updateProfile({
            displayName: userName,
          });
        }
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [user, userName]);

  const createAccount = () => {
    setModalVisible(false);
  };

  const signup = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: userName,
        });
      })
      .catch((error) => alert(error.message));

    setEmail("");
    setPassword("");
    setModalVisible(false);
  };

  const logOut = () => {
    auth.signOut();
    setModalVisible(false);
  };

  const LogIn = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));

    setModalVisible(false);
  };

  /////////////////////////////////
  //////Image Upload////////////
  //////////////

  const handalUpdate = (event) => {};

  ///////////////

  return (
    <View style={styles.footer}>
      <HomeIcon />
      <SearchIcon />
      <TouchableOpacity
        onPress={() => {
          setOpenImageUploadModal(true);
        }}
      >
        <AddPostIcon />
      </TouchableOpacity>
      <LikeIcon />
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Image
          style={styles.profile}
          source={require("./../assets/favicon.png")}
        />
      </TouchableOpacity>
      {/*  modal */}

      {/* <View style={styles.centeredView}> */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <KeyboardAwareScrollView>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={{
                  alignItems: "center",
                  position: "absolute",
                  marginLeft: "90%",
                }}
              >
                <Text
                  style={{
                    backgroundColor: "#998F88",
                    padding: 10,
                    borderRadius: 6,
                  }}
                >
                  X
                </Text>
              </TouchableOpacity>
              {user ? (
                <TouchableOpacity onPress={logOut}>
                  <Text
                    style={{
                      margin: 5,
                      fontSize: 20,
                      textDecorationLine: "underline",
                    }}
                  >
                    Log-Out
                  </Text>
                </TouchableOpacity>
              ) : !LogInPage ? (
                <View style={styles.SignUp}>
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Text
                      style={{
                        padding: 10,
                        borderRadius: 8,
                        fontSize: 20,
                        textDecorationLine: "underline",
                      }}
                    >
                      Sign-Up
                    </Text>
                  </View>
                  <TextInput
                    style={styles.input}
                    autoCompleteType="username"
                    placeholder="userName..."
                    value={userName}
                    onChangeText={(e) => setUsername(e)}
                  />
                  <TextInput
                    style={styles.input}
                    autoCompleteType="email"
                    placeholder="Enter your email..."
                    onChangeText={(event) => setEmail(event)}
                  />
                  <TextInput
                    style={styles.input}
                    autoCompleteType="password"
                    placeholder="create a password..."
                    onChangeText={(event) => setPassword(event)}
                  />
                  <TextInput
                    style={styles.input}
                    autoCompleteType="password"
                    placeholder="confirm password..."
                    onChangeText={(event) => setConfirmPassword(event)}
                  />
                  <TouchableOpacity
                    onPress={signup}
                    style={{ alignItems: "center" }}
                  >
                    <Text
                      style={{
                        backgroundColor: "blue",
                        padding: 10,
                        borderRadius: 8,
                        marginTop: 10,
                      }}
                    >
                      Sign-up
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setLoginPage(true)}
                    style={{ alignItems: "center" }}
                  >
                    <Text
                      style={{
                        backgroundColor: "green",
                        padding: 10,
                        borderRadius: 8,
                        marginTop: 10,
                      }}
                    >
                      Go to Log-In
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={styles.SignUp}>
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Text
                      style={{
                        padding: 10,
                        borderRadius: 8,
                        fontSize: 20,
                        textDecorationLine: "underline",
                      }}
                    >
                      Log-In
                    </Text>
                  </View>
                  <TextInput
                    style={styles.input}
                    autoCompleteType="email"
                    placeholder="Enter your email..."
                    onChangeText={(event) => setEmail(event)}
                  />
                  <TextInput
                    style={styles.input}
                    autoCompleteType="password"
                    placeholder="Enter your password..."
                    onChangeText={(event) => setPassword(event)}
                  />

                  <TouchableOpacity
                    onPress={LogIn}
                    style={{ alignItems: "center" }}
                  >
                    <Text
                      style={{
                        backgroundColor: "blue",
                        padding: 10,
                        borderRadius: 8,
                        marginTop: 10,
                      }}
                    >
                      Log-in
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setLoginPage(false)}
                    style={{ alignItems: "center" }}
                  >
                    <Text
                      style={{
                        backgroundColor: "green",
                        padding: 10,
                        borderRadius: 8,
                        marginTop: 10,
                      }}
                    >
                      Go to Sign-Up
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </KeyboardAwareScrollView>
          </View>
        </View>
      </Modal>

      {/* Image upload Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={openImageUploadModal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <KeyboardAwareScrollView>
              <TouchableOpacity
                onPress={() => {
                  setOpenImageUploadModal(false);
                }}
              >
                <Text
                  style={{
                    width: 30,
                    backgroundColor: "#998F88",
                    padding: 10,
                    borderRadius: 6,
                    marginLeft: "90%",
                    marginBottom: 10,
                  }}
                >
                  x
                </Text>
                <TextInput
                  style={{ borderBottomWidth: 1, marginBottom: 10 }}
                  onChangeText={(e) => setCaption(e)}
                  placeholder="Enter the caption... "
                />
                <ImageUpload />
                <TouchableOpacity
                  style={{ alignItems: "center", marginVertical: 10 }}
                  onClick={handalUpdate}
                >
                  <Text>Submit</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            </KeyboardAwareScrollView>
          </View>
        </View>
      </Modal>
      {/*  */}
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: "relative",
    // top: -12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 8,
    borderTopWidth: 1,
    borderColor: "rgba(1,1,1,.1)",
    paddingVertical: 5,
    // zIndex: 100,
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: -3,
  },
  modalView: {
    width: "100%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    // paddingHorizontal:0,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  SignUp: {
    paddingHorizontal: 0,
    margin: 0,
  },
  input: {
    padding: 10,
    marginBottom: 4,
    backgroundColor: "rgb(232, 220, 220)",
    borderRadius: 10,
  },
});
