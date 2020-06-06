import React from 'react';
import { View, Text ,AsyncStorage, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class SplashScreen extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      mobile:'',
      searchString:'',
      product_Data:[],
      product:'',
    };
  }
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    )
  }

  async componentDidMount() {
    const data = await this.performTimeConsumingTask();
    let isLogin =  await AsyncStorage.getItem("isLogin");
    if(isLogin =="1"){
      this.props.navigation.navigate('Pay');
    }else{
      this.props.navigation.navigate('Pay');
    }
}

  render() {
    return (
      <View style={styles.viewStyles}>
        <Image
          resizeMode="contain"  
          style={{alignSelf:"center", height:220, width:220, marginTop:-20}}
          source={require('../assets/servlogo.png')}/>
        <View style={styles.container}>
          <View style={styles.contain}>
          <Icon style={styles.Icon} name="check" size={20} color="#ff8b1a"/>
          <Text style={styles.textStyles}>Trained, Verified professional</Text>
        </View>
        <View style={styles.contain}>
          <Icon style={styles.Icon} name="check" size={20} color="#ff8b1a"/>
          <Text style={styles.textStyles}>Affordable fixed price</Text>
        </View>
        <View style={styles.contain}>
          <Icon style={styles.Icon} name="check" size={20} color="#ff8b1a"/>
          <Text style={styles.textStyles}>At your doorstep</Text>
        </View>
        </View>
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    marginTop:"50%",
    backgroundColor: '#ffffff'
  },
  textStyles: {
    color: '#a9a9a9',
    fontSize: 16,
  },
  contain:{
    marginLeft:"20%",
    flexDirection:"row",
    marginTop:10,
  },
  container:{
    marginTop:-60,
    justifyContent: 'center',
  },
}
