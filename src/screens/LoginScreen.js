import { StyleSheet, View, ImageBackground,  TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions} from 'react-native';
import { useState, useEffect } from "react";
import bgImage from '../assets/images/photo_bg.jpg'
import { FormTitle, Input, FormSubmitButton, LinkButton } from '../components';


const LoginScreen = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  })
  const [formValidation, setFormValidation] = useState({
    email: true,
    password: true
  });
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

   const handleFormValueChange = (key, value) => {
    setFormValues(
      {
        ...formValues,
        [key]: value
      }
    );
  };

  const handleFormValidationChange = (key, value) => {
    setFormValidation(
      {
        ...formValidation,
        [key]: value
      }
    );
  };
  
  const validationRequired = () => {
    if (Object.values(formValues).some( value => !value)){
      Object.entries(formValues).forEach(([key, value]) => {
        if (!value) {
          formValidation[key] = false
        }
      }
    );
      setFormValidation({
        ...formValidation,
        ...formValidation
      })   
    }
  }
  
  const checkFormValidation = () => Object.values(formValidation).every(value => value)
  
  const onSubmit = () => {
    validationRequired();
    if (!checkFormValidation()) return alert('Form field values ​​are incorrect')
    console.log(formValues)
    
    reset()
  }
  
  const reset = () => {
    setFormValues(
      {
        ...formValues,
      email: '',
    password: ''
      }
    );
    setFormValidation(
      {
        ...formValidation,
    email: true,
    password: true
      }
    );
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
                <Input inputName="email" handleChange= {handleFormValueChange} inputValue={formValues} handleValidation={handleFormValidationChange} inputValidation={formValidation} />
                <Input inputName="password" handleChange= {handleFormValueChange} inputValue={formValues} handleValidation={handleFormValidationChange} inputValidation={formValidation} />
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