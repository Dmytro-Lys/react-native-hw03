import { StyleSheet } from "react-native";
import TextButton from "./TextButton";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
    buttonShow: {
        position: 'absolute',
        right: 16,
        bottom: 16,
    },
    buttonShowTitle: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        color: '#1B4371',
    }
})   

const ShowButton = ({ titleShow, onPressShow }) => {
    return (
         <TextButton text={titleShow} onPress={onPressShow} styleButton={styles.buttonShow} styleText={styles.buttonShowTitle}/>
     )
}

export default ShowButton;

ShowButton.propTypes = {
   titleShow: PropTypes.string.isRequired ,
   onPressShow: PropTypes.func.isRequired
}