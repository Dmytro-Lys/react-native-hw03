import { StyleSheet, ImageBackground} from 'react-native';
import bgImage from '../assets/images/photo_bg.jpg'
import {Form } from '../components';


const LoginScreen = () => {
 
  return (
    <ImageBackground source={bgImage} resizeMode="cover" style={styles.imageBg}>
      <Form
        fields={["email", "password"]}
        formStyle={styles.form}
        fieldsStyle={styles.formElements}
        formTitle="Увійти"
        submitButtonText="Увійти"
        linkButtonText="Немає акаунту? Зареєструватися"
      />
    </ImageBackground>   
  );
}



const styles = StyleSheet.create({
   imageBg: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
 
  form: {
    paddingTop: 32,
    paddingBottom: 111,
  },
  formElements: {
     maxHeight: 116,  
   },
 
});

export default LoginScreen;