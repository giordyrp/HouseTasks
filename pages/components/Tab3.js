import React,{Component} from 'react';
import { Text, View, StyleSheet, Image, ScrollView,
  TouchableOpacity,FlatList} from 'react-native';
import { Rating } from 'react-native-elements';



export default class Tab3 extends Component {

 constructor(props) {
    super(props);
    this.state = {
      data:[
        {id:1, image: "https://bootdey.com/img/Content/avatar/avatar5.png", name:"Isabel Guila",    comment:"Muy amable, me brindo muchas veces bebidas."},
        {id:2, image: "https://bootdey.com/img/Content/avatar/avatar6.png", name:"John Doe",     comment:"Es un excelente cliente, me hizo tour por toda la casa y me contó la historia de su familia. Tiene muchos contactos"},
        {id:3, image: "https://bootdey.com/img/Content/avatar/avatar7.png", name:"Juan Valdes", comment:"Cliente regular, se fue de la casa y no me colaboro con información que necesitaba, tuve que llamar muchas veces."},
          
      ]
    }
  }


  render() {
     const { rating } = this.props;
    return (
      <View style={styles.container} >    
<ScrollView style={{flex:1}}>
          <Rating
            showRating
            type="star"
            imageSize={20}            
            showReadOnlyText={false}
            startingValue={rating}   
            style={{alignSelf: 'center',}}                     
          />

          <View styles={styles.containerComments}>


    <FlatList
        style={styles.root}
        data={this.state.data}
        extraData={this.state}
        ItemSeparatorComponent={() => {
          return (
            <View style={styles.separator}/>
          )
        }}
        keyExtractor={(item)=>{
          return item.id;
        }}
        renderItem={(item) => {
          const Notification = item.item;
          return(
            <View style={styles.container}>
              <TouchableOpacity onPress={() => {}}>
                <Image style={styles.image} source={{uri: Notification.image}}/>
              </TouchableOpacity>
              <View style={styles.content}>
                <View style={styles.contentHeader}>
                  <Text  style={styles.name}>{Notification.name}</Text>
                  <Text style={styles.time}>
                    9:58 am
                  </Text>
                </View>
                <Text rkType='primary3 mediumLine'>{Notification.comment}</Text>
              </View>
            </View>
          );
        }}/>



      </View>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    alignSelf: 'center',
    
    
  },
  containerComments:{
    paddingLeft: 19,
    paddingRight: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },

   root: {
    backgroundColor: "#ffffff",
    marginTop:10,
    
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  image:{
    width:45,
    height:45,
    borderRadius:20,
    marginLeft:20
  },
  time:{
    fontSize:11,
    color:"#808080",
  },
  name:{
    fontSize:16,
    fontWeight:"bold",
  },
  
  });
