import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { FlatList, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

class Message{
  text: string;
  sentBy: string;
  constructor(text: string, sentBy: string){
    this.text = text;
    this.sentBy = sentBy
  }
}

const styles = StyleSheet.create({
  bubbleWrapper:{
    flexDirection: 'column',
  },
  bubbleWrapperSent:{
    alignSelf: 'flex-end',
    marginLeft: 40,
  },
  bubbleWrapperReceived:{
    alignSelf:'flex-start',
    marginRight:40,
  },
  balloon:{
    padding: 8,
    borderRadius: 16
  },
  balloonSent:{
    backgroundColor: '#d70b26'
  },
  balloonReceived:{
    backgroundColor: 'white'
  },
  balloonText:{
    fontSize:18,
  },
  balloonTextSent:{
    color: 'white'
  },
  balloonTextReceived:{
    color: 'black'
  },
  sendButton:{
    backgroundColor:'#d70b26',
    color: Colors.white,
    height: 40,
    width: 70,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius:20,
    marginRight:5,
  },
  input:{
    width: '100%',
    height:40,
    borderColor: "#848484",
    borderWidth: 1,
    marginTop:'3%',
    marginBottom: '5%',
    padding: 10,
  },
  changeNameView:{
    padding: 50,
    backgroundColor: 'white',
  },
  container:{
    marginTop: 16,
    marginHorizontal:16 ,
  },
  scrollViewContainer:{
    padding:10,
    top:10,
  },
  messageTextInputContainer:{
    justifyContent:'flex-end',
    padding: 5,
    borderColor: 'transparent',
    borderTopColor: Colors.light,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop:20,
  },
  messageTextInput:{
    flex: 1,
    minHeight: 40,
    maxHeight: 40,
    paddingHorizontal: 12,
    marginHorizontal:5,
    fontSize:17,
    borderColor: Colors.light,
    borderWidth: 1,
    backgroundColor: Colors.white,
    borderRadius: 20,
  }


})

const ws = new WebSocket('ws://192.168.0.103:3000');
const chat = () => {
  const scrollRef = useRef<FlatList>(null)
  const [userLogged, setUserLogged] = useState('');
  const [message, setMessage] = useState('')
  const [chat, setChat] = useState<{messages: Message[]}>({messages:[]})

  useEffect(() => {
    const loadUser = async () => {
      try {
        const user = await AsyncStorage.getItem('USER_NAME');
        if (user) {
          setUserLogged(user);
        } else {
          setUserLogged('Guest');
        }
      } catch (error) {
        console.error('Erro ao carregar o usuário:', error);
      }
    };

    loadUser();
  }, []);

  useEffect(() => {
    ws.onopen = () => {
      console.log('cliente conectado');
    };
    ws.onmessage = ({data}) => {      
        chat.messages.push(JSON.parse(data))
        setChat({messages: chat.messages})
        scrollRef.current?.scrollToEnd({animated:true})
    };
  }, []);
 
  const sendMessage = () => {
    const jsonString : string = JSON.stringify({ text: message, sentBy: userLogged });
    ws.send(jsonString);
    setMessage('');
  };

  return (
    <Fragment>
      <FlatList 
      ref={scrollRef}
      style={styles.scrollViewContainer}
      data={chat.messages}
      renderItem={({item})=>{
        return(<Balloon message={item} currentUser={userLogged}/>)
      }}
      ListEmptyComponent={() => {
      return(<Text>Nenhuma mensagem no momento</Text>)  
      }}
      />
      <KeyboardAvoidingView style={styles.messageTextInputContainer}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height' }
      keyboardVerticalOffset={Platform.OS == 'ios' ? 100 : 0}
      >
        <TextInput 
          style={styles.messageTextInput} 
          value={message}
          placeholder='Escreva uma mensagem'
          onChangeText={(text) => setMessage(text)}/>
          <TouchableOpacity disabled={message.trim() === ''}
            onPress={()=>{sendMessage()}}
            style={styles.sendButton}>
            <Ionicons name="send" size={24} color="white"/>
          </TouchableOpacity>
      </KeyboardAvoidingView>
    </Fragment>
  )
}

const Balloon = ({message, currentUser} : any) =>{
    console.log("Message",message)
    console.log("User",currentUser)
      const sent = currentUser === message.sentBy;
    const balloonColor = sent
     ? styles.balloonSent 
     : styles.balloonReceived;
    const balloonTextColor = sent
     ? styles.balloonTextSent 
     : styles.balloonTextReceived;
    const bubbleWrapper = sent
     ? styles.bubbleWrapperSent 
     : styles.bubbleWrapperReceived;
    
  return(
    <View style={{marginBottom: '2%'}}>
      <View style={{...styles.bubbleWrapper, ...bubbleWrapper}}>
        <View style={{...styles.balloon, ...balloonColor}}>
          <Text>
            {message.sentBy}
          </Text>
          <Text style={{...styles.balloonText, ...balloonTextColor}}>
            {message.text}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default chat
