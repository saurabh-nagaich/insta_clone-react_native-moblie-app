import React from "react";
import { View, Button } from "react-native";
import DocumentPicker from "react-native-document-picker";

const pickFile = async () => {
  setTimeout(async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      console.log(
        res.uri,
        res.type, // mime type
        res.name,
        res.size
      );
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  });
};

function ImageUpload() {
  return (
    <View>
      <Button
        onPress={pickFile}
        title="Upload"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

export default ImageUpload;
