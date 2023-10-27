import { StyleSheet, View, ImageBackground,  TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions} from 'react-native';
import { useState, useEffect } from "react";
import bgImage from '../assets/images/photo_bg.jpg'
import { FormTitle, Input, FormSubmitButton, LinkButton } from '../components';


const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShownKeyboard, setIsShownKeyboard] = useState(false)
  
useEffect(() => {
  const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setIsShownKeyboard(true);
    });
  const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setIsShownKeyboard(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);


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
        <KeyboardAvoidingView  behavior={Platform.OS == "ios" ? "padding" : "height"}>
          <View style={styles.formWrapper}>
            <View style={isShownKeyboard ? { ...styles.form,  paddingBottom: 0} : styles.form}> 
              <FormTitle text="Увійти" />
              <View style={styles.formElements}>
                <Input inputName="email" handleChange={setEmail} inputValue={email} />
                <Input inputName="password" handleChange={setPassword} inputValue={password} />
              </View>
              <FormSubmitButton text="Увійти" onPress={onSubmit} />
              <LinkButton text="Немає акаунту? Зареєструватися" onPress={onLink} />
            </View> 
          </View>
        </KeyboardAvoidingView> 
      </TouchableWithoutFeedback>
    </ImageBackground>   
  );
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
   imageBg: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  formWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: windowWidth,
  },
  form: {
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

export default LoginScreen;