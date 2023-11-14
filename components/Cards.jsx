import { Image, StyleSheet, Text, View } from 'react-native';



const Cards = () => {
    return(
    <View style={styles.Container}>
            <View style={styles.ImageContainer}>
            <Image style={styles.image} source={require('../assets/images/kemal.jpg')}/>
                <View style={{width: 200}}>
                    <Text>First Stripe Earned</Text>
                    <Text>First Stripe Earned First Stripe Earned</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        marginTop: 10,
        marginHorizontal: 10
    },
    ImageContainer: {
        flexDirection: "row", 
        justifyContent: "space-evenly", 
        alignItems: "center",
        borderWidth: 2,
        padding: 20,
        backgroundColor: "white"
    },
    image: {
      width: 55,
      height: 55,
      resizeMode: 'cover',
      borderRadius: 100,
      margin: "auto"
      
    },
    Logout: {
        flexDirection: "row",
        justifyContent: "center",
        paddingVertical: 15
    },
})


export default Cards;