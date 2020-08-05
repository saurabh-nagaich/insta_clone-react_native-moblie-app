import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

function ProfilIcon({url}) {
  return (
    <View style={{...styles.profile, backgroundColor: '#D4DCE7', marginTop: 5}}>
      {url ? <Image style={styles.profile} source={{uri: url}} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    width: 35,
    height: 35,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#a2a8ac',
  },
});

export default ProfilIcon;
