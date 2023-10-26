import { StyleSheet } from "react-native";
import TextButton from "./TextButton";
import PropTypes from "prop-types"

const styles = StyleSheet.create({
    buttonLink: {
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    buttonLinkTitle: {
        marginTop: 16,
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        textAlign: 'center',
        color: '#1B4371',
    }
})   

const LinkButton = ({ text, onPress }) => {
    return (
          <TextButton text={text} onPress={onPress} styleButton={styles.buttonLink} styleText={styles.buttonLinkTitle}/>
    )
}

export default LinkButton;

LinkButton.propTypes = {
   text: PropTypes.string.isRequired ,
   onPress: PropTypes.func.isRequired
}