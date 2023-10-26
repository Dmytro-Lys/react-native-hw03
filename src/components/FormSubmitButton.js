import { StyleSheet } from "react-native";
import TextButton from "./TextButton";
import PropTypes from "prop-types"


const FormSubmitButton = ({text, onPress}) => {
    return (
        <TextButton text={text} onPress={onPress} styleButton={styles.buttonSubmit} styleText={styles.buttonSubmitText} />
     )
}


const styles = StyleSheet.create({
    buttonSubmit: {
        borderRadius: 100,
        marginTop: 43,
        paddingHorizontal: 32,
        paddingVertical: 16,
        backgroundColor: '#FF6C00',

    },
    buttonSubmitText: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        textAlign: 'center',
        color: 'white',
        
    }

})   

export default FormSubmitButton;

FormSubmitButton.propTypes = {
   text: PropTypes.string.isRequired ,
   onPress: PropTypes.func.isRequired
}