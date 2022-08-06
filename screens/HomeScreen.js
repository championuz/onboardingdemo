import React from 'react'
import {View, Text, Button, StyleSheet, Image} from 'react-native';

function HomeScreen({navigation}) {
  return (
      <View>
      <View
      style={styles.sectionContainer}>
      <Text
           style={styles.sectionTitle}>Home Screen</Text>
      </View>
        <View
           style={{
             backgroundColor: styles.white}}>
             <Image 
             source={{uri: 'https://images.pexels.com/photos/7008379/pexels-photo-7008379.jpeg?cs=srgb&dl=pexels-carlos-escobar-7008379.jpg&fm=jpg'}}
             style={{ width: 360, height: 200, resizeMode: 'cover', margin: 10 }}
              />
           <View
           style={styles.sectionContainer}>
             <Text>The main industries in the Portland area include computer chip manufacturing and sportswear design. In fact, two famous sportswear companies are based in the Portland Area: Nike and Columbia Sportswear. The largest employer is Intel which employs over 15,000 people in the greater Portland metro area. There are also many smaller technology companies located in downtown Portland. </Text>
           </View>
          
                </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 8,
     paddingHorizontal: 14,
   },
   scrollView: {
     paddingTop: 40,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
   white: {
       color: '#ffffff',
   },
 });
 