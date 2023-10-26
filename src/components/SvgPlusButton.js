import { StyleSheet, Pressable } from 'react-native';
import SvgPlus from './SvgPlus';
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  buttonBase: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    }
})
const SvgPlusButton = ({ styleButton, onPress, stroke, rotate = '0' }) => {
    
    return (
          <Pressable
            onPress={onPress}
            style={[styles.buttonBase, styleButton]}>
            <SvgPlus stroke={stroke} rotate = {rotate}/>
          </Pressable>    
    )
}

export default SvgPlusButton


SvgPlusButton.propTypes = {
   styleButton: PropTypes.object.isRequired ,
   onPress: PropTypes.func.isRequired,
   stroke: PropTypes.string.isRequired,
   rotate: PropTypes.string
}