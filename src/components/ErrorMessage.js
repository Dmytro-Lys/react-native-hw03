import { StyleSheet, Text } from "react-native";

const ErrorMessage = ({ message }) => {
    return(
        <Text style={styles.errorMessage }>{message}</Text>
    ) 
}

const styles = StyleSheet.create({
   errorMessage: {
       position: 'absolute',
        left: 0,
        bottom: -14,
        fontFamily: 'Roboto-Regular',
        fontSize: 12,
        color: 'red',
  },
 
});

export default ErrorMessage