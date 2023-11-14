import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    Container:{
        flex: 1,

    },
    ImageContainer: {
      alignItems: 'center',
      justifyContent: "center",
      paddingVertical: 10,
    },
    profileText: {
        paddingVertical: 3

    },
    image: {
      width: 80,
      height: 80,
      resizeMode: 'cover',
      borderRadius: 100,
      margin: "auto"
      
    },
    Logout: {
        flexDirection: "row",
        justifyContent: "center",
        paddingVertical: 15
    },
    midContainer: {
        flexDirection : "row",
        justifyContent : "space-around",
        alignItems: "center",
        padding: 5,
        borderWidth: 2,
        borderColor: "red",
        paddingVertical: 10,
        marginHorizontal: 10,
        borderRadius: 10
    },
    keys: {
        flexDirection : "row",
        alignItems : "center",
        gap : 5,
        paddingVertical: 10
    },
    icons: {
        borderRadius :100,
        padding: 6
        
    }
  });


export default styles;