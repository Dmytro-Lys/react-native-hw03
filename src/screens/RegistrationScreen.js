import { StyleSheet, View, ImageBackground, } from 'react-native';
import { useState } from "react";
import bgImage from '../assets/images/photo_bg.jpg'
import defaultAvatar from '../assets/images/avatar.jpg'
import {Form, Avatar, SvgPlusButton} from '../components';

const RegistrationScreen = () => {
  
  const [avatarImage, setAvatarImage] = useState(null)
  
  const addAvatar = () => setAvatarImage(defaultAvatar)
  
  const removeAvatar = () => setAvatarImage(null)

  return (
    
    <ImageBackground source={bgImage} resizeMode="cover" style={styles.imageBg}>
      <Form
        fields={["userName", "email", "password"]}
        formStyle={styles.form}
        fieldsStyle={styles.formElements}
        formTitle="Реєстрація"
        submitButtonText="Зареєструватися"
        linkButtonText="Вже є акаунт? Увійти"
      >
        <View style={styles.box}>
          {avatarImage ? <Avatar avatarImage={avatarImage} size={120} /> : <Avatar size={120} />}
          {avatarImage ? <SvgPlusButton onPress={removeAvatar} styleButton={{ ...styles.buttonAdd, ...styles.buttonRemove }} stroke='#e8e8e8' rotate='45'/> : <SvgPlusButton onPress={addAvatar} styleButton={styles.buttonAdd} stroke='#ff6c00'/>}
        </View>
      </Form>
    </ImageBackground>  
        
  );
}

const styles = StyleSheet.create({
  imageBg: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
   box: {
    position: 'absolute',
    top: -60,
    left: '50%',
    transform: [{translateX: -50}],
  },
  buttonAdd: {
    position: 'absolute',
    right: -12.5,
    bottom: 12.5,
    width: 25,
    height: 25,
    backgroundColor: 'white',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ff6c00',
  },
  buttonRemove: {
     borderColor: '#e8e8e8',
  }, 
   form: {
    paddingTop: 92,
    paddingBottom: 45,
  },
   formElements: {
      maxHeight: 182,
  },
 
});


export default RegistrationScreen;