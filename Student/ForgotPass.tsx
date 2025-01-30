import React,{useState} from "react";
import {Text,TouchableOpacity,TextInput,View,StyleSheet, ScrollView, Button} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
const ForgotPass = () => {


  const [name, setName] = useState('');
  return(
    <ScrollView>
    <View>
      <View style={styles.bgstyle}>
       <Text style={{fontSize:30,textAlign:'center',marginBottom:35,marginTop:20,color:'blue'}}>Back to Login</Text>
      <View>
        <Text style={{textAlign:'center',fontSize:30,color:'black',fontWeight:'bold'}}>Forget Password</Text>
      </View>
        <View>
            <TextInput style={styles.emailstyle}
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder="  Email-Id *"
            />  
        </View>
        <View style={{ justifyContent: "center", alignItems: "center", height: 40, width: 370, margin:10 }}>
                            <TouchableOpacity>
                                <LinearGradient colors={['#8B41A2', '#983F7F', '#AF3B52', '#BD3633']}
                                    start={{ x: 1, y: 0 }}
                                    end={{ x: 0, y: 1 }}
                                    style={styles.gradient}
                                    
                                    >
                                    <Text style={styles.buttonText}>Submit</Text>
                                </LinearGradient>
                            </TouchableOpacity>
             </View>
             <View>
          <Text style={{marginLeft:10,marginRight:10,textAlign:'center',paddingTop:10,fontStyle:'italic',color:'black',fontWeight:'semibold'}}>
            We will send an reset password link to your registered email. You can follow and complete the given steps to reset your account password
          </Text>
        </View>
      </View> 
     
    
    </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
   bgstyle:{
      borderColor:'black',
      borderWidth:1,
      marginTop:170,
      marginLeft:15,
      marginRight:15,
      borderRadius:5,
      height:400
   },
   emailstyle:{
    borderColor:'gray',
    fontWeight:'bold',
    borderWidth:1,
    marginRight:10,
    marginLeft:10,
    marginBottom:20,
    marginTop:20,
    borderRadius:5,
    fontSize:15,
    color:'darkgray',
   },
   gradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width:150
   },
   buttonText: {
    fontSize: 25,
    textAlign: 'center',
    margin: 5,
    color: '#fff',
    backgroundColor: 'transparent',
    height:40,
    padding:5
    
   },
   
   

})
export default ForgotPass ;