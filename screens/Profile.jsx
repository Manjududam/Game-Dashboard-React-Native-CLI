import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";


import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import GamesPlayed from "./Games/GamesPlayed";
import Badges from "./Games/Badges/Badges";
import styles from "./Menu/Profile/Profile.style";


//Top Tabs
const TopTabs = createMaterialTopTabNavigator();

function TopTabsGroup() {
    return(
        <TopTabs.Navigator>
            <TopTabs.Screen name="GamesPlayed" component={GamesPlayed}/>
            <TopTabs.Screen name="Badges" component={Badges}/>
        </TopTabs.Navigator>
    )
}

const Profile = () =>{
    return(
            <>
            <View style={styles.Container}>
                <View style={styles.ImageContainer}>
                    <TouchableOpacity>
                    <Image source={require('../assets/images/kemal.jpg')} resizeMode="cover"
                    style={styles.image}/>
                    <Text style={styles.profileText}>Jina Simons</Text>
                    <Text style={[styles.profileText, {marginHorizontal: 9}]}>6000 Pts</Text>
                    </TouchableOpacity>
                    <View>
                        <Text style={{padding:10}}>
                            I'm a software developer that had been in the crypto space since 2012. And I've seen it grow and falter over a period of time.Really happy to be here!
                        </Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.Logout}>
                <MaterialCommunityIcons name="logout" size={24} color="black" />
                <Text>Logout</Text>
                </TouchableOpacity>
                <View style={styles.midContainer}>
                    <View>
                        <Text style={{fontSize: 18, opacity: 0.67}}>Under or Over</Text>
                        <TouchableOpacity style={styles.keys}>
                            <AntDesign name="arrowup" size={24} color="black" style={[styles.icons,{backgroundColor: "green"}]} /><Text>
                                81%
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={{fontSize: 18, opacity: 0.67}}>Top 5</Text>
                        <TouchableOpacity style={styles.keys}>
                            <AntDesign name="arrowdown" size={24} color="black" style={[styles.icons , {backgroundColor: "red"}]}/>
                            <Text>
                                -51%
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex: 1}}>
                   <TopTabsGroup/>
                </View>
                
            </View>
                </>

       
    )
}


export default Profile;