import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native'

export default class App extends Component {
  render() {
    return (
    <View style={styles.container}>
    
      <View style={styles.title_view}>
        <Text style={styles.title_text}>
            景点
        </Text>
		  </View>
      <ScrollView>

        <View style={styles.three_image_view}>
          <View style={styles.vertical_view}>
            <Image source={require('./img/xxx.png')} style={styles.topImg} />
            <Text style={styles.top_text}>
            北京朝阳区大望京公园
            </Text>
          </View>
        </View>
        <View style={styles.three_image_view}>
          <View style={styles.vertical_view}>
            <Image source={require('./img/xxx.png')} style={styles.topImg} />
            <Text style={styles.top_text}>
            北京 798 艺术区
            </Text>
          </View>
        </View>

      </ScrollView>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title_view:{
    flexDirection:'row',
    height:50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#27b5ee',
  },
  title_text:{
    color:'white',
    fontSize:20,
    textAlign:'center'
  },
  three_image_view:{
    paddingTop: 15,
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor:'white',
  },
  vertical_view:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
    paddingBottom:15,
  },
  top_text:{
    marginTop:5,
    color:'black',
    fontSize:16,
    textAlign:'center'
  }
})