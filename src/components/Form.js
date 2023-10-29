import { StyleSheet, View, TouchableWithoutFeedback, KeyboardAvoidingView,  Dimensions, Keyboard} from 'react-native';
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import FormTitle from './FormTitle';
import Input from './Input';
import FormSubmitButton from './FormSubmitButton';
import LinkButton from './LinkButton';

const windowWidth = Dimensions.get('window').width;

const Form = ({ fields, formStyle, fieldsStyle, formTitle, submitButtonText, linkButtonText, children }) => {

const styles = StyleSheet.create({
  formWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: windowWidth,
  },
  form: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: formStyle.paddingTop,
    paddingBottom: formStyle.paddingBottom,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#fff',
  },
  formElements: {
    flex: 1,
    maxHeight: fieldsStyle.maxHeight,  
    rowGap: 16,
  },
 
});

    const defaultValues = fields.reduce((obj, fieldName) => {
        return {...obj, [fieldName]: ''}
    }, {})
    
    const defaultValidation = fields.reduce((obj, fieldName) => {
        return {...obj, [fieldName]: true}
    }, {})

  const [formValues, setFormValues] = useState(defaultValues)
  const [formValidation, setFormValidation] = useState(defaultValidation);
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
            ...defaultValues
        });
    setFormValidation(
      {
        ...formValidation,
       ...defaultValidation
      }
    );
  }


  const onLink = () => {
    alert("Link")
  }
    
    return (
         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
           <View style={styles.formWrapper}>
            <View style={isShownKeyboard ? { ...styles.form,  paddingBottom: 0} : styles.form}> 
              <FormTitle text={formTitle} />
                <View style={styles.formElements}>
                    {fields.map( (field, index)  => {
                        return <Input key={index} inputName={field} handleChange={handleFormValueChange} inputValue={formValues} handleValidation={handleFormValidationChange} inputValidation={formValidation} />
                    })} 
              </View>
              <FormSubmitButton text={submitButtonText} onPress={onSubmit} />
              <LinkButton text={linkButtonText} onPress={onLink} />
              {children}  
            </View> 
            </View>
            </KeyboardAvoidingView> 
        </TouchableWithoutFeedback>     
    )
}

export default Form

Form.propTypes = {
   fields: PropTypes.array.isRequired ,
    formStyle: PropTypes.object.isRequired,
   fieldsStyle: PropTypes.object.isRequired,
    formTitle: PropTypes.string.isRequired,
   submitButtonText: PropTypes.string.isRequired,
   linkButtonText: PropTypes.string.isRequired
}