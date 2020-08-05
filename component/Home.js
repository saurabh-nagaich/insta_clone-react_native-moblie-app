import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
  FlatList,
} from "react-native";
import { db } from "./firebase";

import Header from "./Header";
import Post from "./Post";

const renderPost = ({ item }) => (
  <Post
    key={item.id}
    postId={item.id}
    userName={item.post.userName}
    caption={item.post.caption}
    imageUrl={item.post.imageUrl}
  />
);

function Home() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    db.collection("posts")
      // .orderBy("timestamp","desc")
      .onSnapshot((snapshort) => {
        setPost(
          snapshort.docs.map((doc) => ({
            id: doc.id,
            post: doc.data(),
          }))
        );
      });
  }, []);

  return (
    <SafeAreaView>
      <Header />
      <ScrollView>
        <FlatList
          data={post}
          keyExtractor={(item) => item.id}
          renderItem={renderPost}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS ? StatusBar.currentHeight : 0,
  },
});

export default Home;
