import { StyleSheet, View, ImageBackground,  TouchableWithoutFeedback, Keyboard} from 'react-native';
import { useState } from "react";
import bgImage from '../../assets/images/photo_bg.jpg'
import { FormTitle, Input, FormSubmitButton, LinkButton } from '../components';



const styles = StyleSheet.create({
   imageBg: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',

  },
  form: {
    position: 'relative',
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 111,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#fff',

  },
  formElements: {
    flex: 1,
    maxHeight: 116,  
    rowGap: 16,
  },
 
});

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    alert("Submit")
  }

  const reset = () => {
    setEmail("")
    setPassword("")
  }

  const onLink = () => {
    alert("Link")
  }
  
  return (
    <ImageBackground source={bgImage} resizeMode="cover" style={styles.imageBg}>
       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      
       <View style={styles.form}>
        
          <FormTitle text="Увійти" />
          <View style={styles.formElements}>
            
              <Input inputName="email" handleChange={setEmail} inputValue={email} />
            
             {/* <KeyboardAvoidingView  behavior={Platform.OS == "ios" ? "padding" : "height"}> */}
              <Input inputName="password" handleChange={setPassword} inputValue={password} />
           {/* </KeyboardAvoidingView>      */}
          </View>
          <FormSubmitButton text="Увійти" onPress={onSubmit} />
            <LinkButton text="Немає акаунту? Зареєструватися" onPress={onLink} />
         {/* </KeyboardAvoidingView>    */}
        </View> 
        
         </TouchableWithoutFeedback>
      </ImageBackground>   
  );
}

export default LoginScreen;