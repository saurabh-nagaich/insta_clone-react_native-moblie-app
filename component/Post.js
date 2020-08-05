import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import LikeIcon from "../assets/LikeIcon";
import Direct from "../assets/Direct";
import CommentIcon from "../assets/CommentIcon";
import ShareIcon from "../assets/ShareIcon";

function Post({ postId, userName, caption, imageUrl }) {
  const [name, setName] = useState("name6");
  return (
    <View style={styles.post_box}>
      <View style={styles.post_boder}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image style={styles.profile} source={{ uri: imageUrl }} />
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>{userName}</Text>
        </View>
        <View>
          <Image source={require("./../assets/menuIcon.png")} />
        </View>
      </View>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <View style={styles.icons}>
        <LikeIcon style={{ marginRight: 10 }} />
        <CommentIcon style={{ marginRight: 10 }} />
        <ShareIcon style={{ marginRight: 10 }} />
      </View>
      <Text style={{ fontWeight: "600", fontSize: 20, paddingHorizontal: 12 }}>
        988 likes
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
        }}
      >
        <Text style={{ marginLeft: 4, fontSize: 20, fontWeight: "bold" }}>
          {userName}
        </Text>
        <Text> {caption}</Text>
      </View>
      <Text style={{ opacity: 0.2, paddingHorizontal: 14 }}>comments...</Text>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 12,
          }}
        >
          <Text style={{ marginLeft: 4, fontSize: 15, fontWeight: "bold" }}>
            Rocky:
          </Text>
          <Text> Comments you rock</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 12,
          }}
        >
          <Text style={{ marginLeft: 4, fontSize: 15, fontWeight: "bold" }}>
            Rocky:
          </Text>
          <Text> Comments you rock</Text>
        </View>
      </ScrollView>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          style={{ ...styles.input, flex: 1 }}
          placeholder="Add a comment..."
        />
        <Text
          style={{
            ...styles.input,
            paddingTop: 12,
            fontSize: 15,
            color: "blue",
          }}
        >
          Post
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  post_box: {
    flex: 1,
    maxWidth: "100%",
    maxHeight: 600,
    borderColor: "black",
    // borderWidth:1,
    // margin: 10,
    paddingVertical: 10,
    marginBottom: 10,
  },
  profile: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginRight: 20,
  },
  post_boder: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  image: {
    width: "100%",
    height: "90%",
    maxHeight: 350,
  },
  input: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "rgba(1,1,1,0.2)",
    paddingHorizontal: 15,
    paddingVertical: 15,
    paddingTop: 5,
    marginTop: 6,
    marginBottom: 0,
  },
  icons: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});

export default Post;
