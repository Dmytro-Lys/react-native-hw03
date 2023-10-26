import {StyleSheet, TextInput, View, KeyboardAvoidingView, Platform } from "react-native";
import { useState } from "react";
import inputProps from "../../assets/data/input.json"
import ShowButton from "./ShowButton";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
    inputBox: {
      position: 'relative',    
    },
    input: {
        padding: 16,
        maxHeight: 50,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        backgroundColor:'#F6F6F6',
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
    },
    inputFocused: {
        borderColor: '#FF6C00',
        backgroundColor: '#fff'
    },
})   

const Input = ({ inputName, handleChange, inputValue }) => {
    const [isFocused, setIsFocused] = useState(type === 'password' ? true : false)
    const { placeholder, pattern, type, minlength } = inputProps[inputName];
    const [secureTextShow, setSecureTextShow] = useState(type === 'password')
    const toggleFocus = focusStatus => {
       if (isFocused !== focusStatus) setIsFocused(focusStatus)    
    }
    
    const toggleSecureTextShow = () => secureTextShow ? setSecureTextShow(false) :  setSecureTextShow(true)

    return (
        <View style={styles.inputBox}>
         <KeyboardAvoidingView  behavior={Platform.OS == "ios" ? "padding" : "height"}>
        <TextInput
            style={[styles.input, isFocused && styles.inputFocused]}
            onChangeText={handleChange}
            onFocus={() => { toggleFocus(true) }}
            onBlur={() => {toggleFocus(false)}}
            value = {inputValue}
            placeholder={placeholder}
            placeholderTextColor = '#BDBDBD'
            pattern={pattern}
            type={type}
            minlength={minlength || '0'}
            maxlength='30'
            secureTextEntry={ secureTextShow}
            required />
         </KeyboardAvoidingView>           
        {type === 'password' && <ShowButton titleShow={secureTextShow ? "Показати" : "Сховати"} onPressShow={toggleSecureTextShow} />} 
        </View>
      )
}

export default Input;

Input.propTypes = {
   inputName: PropTypes.string.isRequired ,
    handleChange: PropTypes.func.isRequired,
   inputValue: PropTypes.string.isRequired
}