import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import { db } from "./component/Firebase";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Post from "./component/Post";

export default function App() {
  const [post, setPost] = useState([]);
  // console.log(post);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPost(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, []);

  const renderPost = ({ item }) => {
    return (
      <Post
        key={item.id}
        userName={item.post.userName}
        imageUrl={item.post.imageUrl}
        caption={item.post.caption}
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView>
        <FlatList
          data={post}
          keyExtractor={(item) => item.id}
          renderItem={renderPost}
        />
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
