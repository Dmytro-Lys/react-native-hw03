import { StyleSheet, View, ImageBackground, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, Dimensions} from 'react-native';
import { useState, useEffect } from "react";
import bgImage from '../assets/images/photo_bg.jpg'
import defaultAvatar from '../assets/images/avatar.jpg'
import { Avatar, FormTitle, Input, FormSubmitButton, LinkButton, SvgPlusButton} from '../components';

const RegistrationScreen = () => {
  
  const [avatarImage, setAvatarImage] = useState(null)
  const [isShownKeyboard, setIsShownKeyboard] = useState(false)
  const [formValues, setFormValues] = useState({
    userName: '',
    email: '',
    password: ''
  })
  const [formValidation, setFormValidation] = useState({
    userName: true,
    email: true,
    password: true
  });


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
  
  const checkFormValidation = () =>  Object.values(formValidation).every( value => value)
  
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
    validationRequired();
    if (!checkFormValidation()) return alert('Form field values ​​are incorrect')
    console.log(formValues)
    
    reset()
  }
  
  const reset = () => {
    setFormValues(
      {
        ...formValues,
            userName: '',
    email: '',
    password: ''
      }
    );
    setFormValidation(
      {
        ...formValidation,
            userName: true,
    email: true,
    password: true
      }
    );
  }

  const onLink = () => {
    alert("Link")
  }
  
  const addAvatar = () => setAvatarImage(defaultAvatar)
  
  const removeAvatar = () => setAvatarImage(null)

  return (
    
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.imageBg}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView  behavior={Platform.OS == "ios" ? "padding" : "height"}>
            <View style={styles.formWrapper}>
              <View style={isShownKeyboard ? { ...styles.form, paddingBottom: 0 } : styles.form}>        
                <View style={styles.box}>
                  {avatarImage ? <Avatar avatarImage={avatarImage} size={120} /> : <Avatar size={120} />}
                  {avatarImage ? <SvgPlusButton onPress={removeAvatar} styleButton={{ ...styles.buttonAdd, ...styles.buttonRemove }} stroke='#e8e8e8' rotate='45'/> : <SvgPlusButton onPress={addAvatar} styleButton={styles.buttonAdd} stroke='#ff6c00'/>}
                </View>
                <FormTitle text="Реєстрація" />
                <View style={styles.formElements}>
                 <Input inputName="userName" handleChange= {handleFormValueChange} inputValue={formValues} handleValidation={handleFormValidationChange} inputValidation={formValidation} />
                  <Input inputName="email" handleChange= {handleFormValueChange} inputValue={formValues} handleValidation={handleFormValidationChange} inputValidation={formValidation}/>
                  <Input inputName="password" handleChange={handleFormValueChange} inputValue={formValues} handleValidation={handleFormValidationChange} inputValidation={formValidation} />
                </View>
                <FormSubmitButton text="Зареєструватися" onPress={onSubmit} />  
                <LinkButton text="Вже є акаунт? Увійти" onPress={onLink} />
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
  formWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: windowWidth,
  },
  form: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 92,
    paddingBottom: 45,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#fff',
  },
  formElements: {
    flex: 1,
    maxHeight: 182,
    height: 182,
    rowGap: 16,
  },
 
});


export default RegistrationScreen;