import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import DataBadges from "../../../assets/Data/DataBadges";
import styles from "./Badges.style";


const Badges = () =>{
    return(
        <View style={styles.Container}>
            <FlatList showsVerticalScrollIndicator={false} style={{flexDirection: "column"}}
             data={DataBadges}
             renderItem={({item}) => (
                <View style={styles.ImageContainer}>
                <TouchableOpacity >
                    <Image style={styles.image} source={item.image} resizeMode="cover"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{width:200, padding:5}}>
                    <Text>{item.label}</Text>
                    <Text style={{marginTop:5}}>{item.desc}</Text>
                    </View>
                </TouchableOpacity>
                </View>
             )}/>
        </View>

      


    )
}

export default Badges;