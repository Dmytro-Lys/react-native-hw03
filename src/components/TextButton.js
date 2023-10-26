import { Pressable, Text } from "react-native";
import PropTypes from "prop-types";


const TextButton = ({ text, onPress, styleButton, styleText }) => {
    return (
         <Pressable
            onPress={onPress}
            style={styleButton}>
           <Text style={styleText}>{text}</Text>
        </Pressable>
    )
}

export default TextButton

TextButton.propTypes = {
    styleButton: PropTypes.object.isRequired,
    styleText: PropTypes.object.isRequired ,
   onPress: PropTypes.func.isRequired,
   text: PropTypes.string.isRequired
}