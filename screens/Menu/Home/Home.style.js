import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
        padding:20,
        marginTop:10
    },
    card: {
        backgroundColor: "#6f36ba",
        padding: 15, 
        margin:5
    },
    innerCard:{
        flexDirection: 'row',
        alignItems: "center",
        justifyContent:"space-between",
        gap:50
    },
    cardTitle:{
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "center",
        gap: 5
    },
    midCard:{
        padding: 15,
        gap: 10,
        backgroundColor:"#ebe4ed",
        margin:5
    },
    innerMidCard: {
        flexDirection :"row",
        justifyContent: "space-around",
        paddingVertical:5
    },
    innerMidCardText:{gap: 5, alignItems: "center", justifyContent:"center"},
    innerMidCardText2:
    {opacity:0.5},
    text: {
      fontSize: 14,
      marginBottom: 10,
    },
    buttonContainer:{flexDirection: "row", justifyContent: "space-around"},
    buttons: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
        paddingHorizontal: 25,
        paddingVertical: 8,
        borderRadius: 25
    },
    example: {
        margin: 15
      },
    BottomContainer:{
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    bottomCard:{marginTop: 10,backgroundColor:"#f2eeed", paddingVertical: 5, paddingHorizontal: 5},
    bottomCardInner:{flexDirection: "row",justifyContent: "space-between"},
    bottomCardEnd:{flexDirection: "row", justifyContent: "space-between"},
  });


  export default styles;