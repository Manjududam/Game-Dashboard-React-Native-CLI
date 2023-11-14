import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Container:{
       flexDirection: "column",
        marginTop: 20,
        marginHorizontal: 10,
        justifyContent: "space-between"
        
    },
    ImageContainer: {
        flexDirection: "row", 
        justifyContent: "space-evenly", 
        alignItems: "center",
        borderWidth: 2,
        padding: 20,
        backgroundColor: "white",
        gap: 10,
        borderRadius : 10,
        marginTop:10,
    },
    image: {
      width: 55,
      height: 55,
      resizeMode: 'cover',
      borderRadius: 100,
      margin: "auto"
      
    },
})


export default styles;