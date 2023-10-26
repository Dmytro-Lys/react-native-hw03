import { StyleSheet, View, Text } from "react-native";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
    containerHeader: {
        flex: 1,
        position: 'relative',
        justifyContent: 'center',
        marginTop: 44,
        maxHeight: 44,
        height: 44,
        borderBottomWidth: 1,
        borderColor: "lightgray",
        shadowOffsetHeight: 0.5,
        shadowColor: 'rgba(0, 0, 0, 0.30)',
      },
    textHeader: {
        fontFamily: 'Roboto-Medium',
        fontSize: 17,
        textAlign: 'center',
        lineHeight: 22,
        color: '#212121',
    },
    buttonSvg: {
        maxWidth: 40,
        height: 40,
        position: 'absolute',
        bottom: 0,
        right: 10,
    }
})

const Header = ({ title, children }) => {
    
    return (
        <View style={styles.containerHeader}>
            <Text style={styles.textHeader}>{title}</Text>
           {children}
       </View>
   )
}

export default Header;

Header.propTypes = {
   title: PropTypes.string.isRequired 
}