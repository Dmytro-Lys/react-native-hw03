import { StyleSheet, Pressable } from 'react-native';
import { SvgXml } from 'react-native-svg';
import PropTypes from "prop-types";

const SvgButton = ({ styleButton = {}, onPress, svgWidth, svgHeight, svgFile, fill = 'none', rotation = 0 }) => {
    return (
          <Pressable
            onPress={onPress}
            style={[styles.buttonBase, styleButton]}>
            <SvgXml width={svgWidth} height={svgHeight} fill={fill} rotation={rotation} xml={svgFile} />
          </Pressable>    
    )
}


const styles = StyleSheet.create({
  buttonBase: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
})

export default SvgButton

SvgButton.propTypes = {
   styleButton: PropTypes.object ,
  onPress: PropTypes.func.isRequired,
  svgWidth: PropTypes.string.isRequired,
  svgHeight: PropTypes.string.isRequired,
  svgFile: PropTypes.string.isRequired,
  fill: PropTypes.string,
   rotation: PropTypes.number
}