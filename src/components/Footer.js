import {  StyleSheet, View } from "react-native";
import SvgPlusButton from "./SvgPlusButton";
import SvgButton from "./SvgButton";
import GridSvg from "../../assets/images/grid.svg";
import UserSvg from "../../assets/images/user.svg";


const styles = StyleSheet.create({
    containerFooter: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 9,
         maxHeight: 52,
        height: 52,
        marginBottom: 20,
        borderTopWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.30)',
        columnGap: 32,
        shadowOffsetHeight: -0.5,
        shadowColor: 'rgba(0, 0, 0, 0.30)',
    },
    buttonAdd: {
        maxWidth: 70,
        height: 40,
        borderRadius: 40,
        backgroundColor: '#FF6C00',
    },
    buttonSvg: {
        maxWidth: 40,
        height: 40,
        
    }
})


const Footer = () => {
    const addPost = () => alert("Add Post")

    const showEverythin = () => alert("Show everythin")

    const showUser = () => alert("Show user")

   
    return(
        <View style={styles.containerFooter}>
            <SvgButton styleButton={styles.buttonSvg} onPress={showEverythin} svgWidth='24' svgHeight='24' svgFile={GridSvg}/>
            <SvgPlusButton onPress={addPost} styleButton={styles.buttonAdd} stroke='white' />
            <SvgButton styleButton={styles.buttonSvg} onPress={showUser} svgWidth='24' svgHeight='24' svgFile={UserSvg}/>
        </View>
    )
}

export default Footer