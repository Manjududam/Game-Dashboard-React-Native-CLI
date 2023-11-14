import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';



const Logout = () =>{
    return(
        <TouchableOpacity style={styles.Logout}>
            <MaterialCommunityIcons name="logout" size={24} color="black" />
            <Text>Logout</Text>
        </TouchableOpacity>
    );

}


const styles = StyleSheet.create({
    Logout:{
        paddingHorizontal: 5,
        marginTop: 50
    }
});

export  default Logout;

