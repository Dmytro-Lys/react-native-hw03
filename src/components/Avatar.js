import { StyleSheet,  ImageBackground } from 'react-native';
import PropTypes from "prop-types"

const Avatar = ({ avatarImage = null, size = 60, radius = 16 }) => {
  const styles = StyleSheet.create({
   avatarImage: {
      flex: 1,
      justifyContent: 'center',
      borderRadius: radius,
      maxWidth: size,
      maxHeight: size,
      width: size,
      height: size, 
      backgroundColor: '#f6f6f6',
      overflow: 'hidden',
  },
 
});
  
    return (
        <ImageBackground source={avatarImage } resizeMode="cover" style={styles.avatarImage} />
    )
}

 
    
export default Avatar;

Avatar.propTypes = {
   avatarImage: PropTypes.number,
    size: PropTypes.number,
   radius: PropTypes.number
}