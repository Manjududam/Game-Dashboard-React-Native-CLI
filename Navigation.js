
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";




import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Pressable, Text, TouchableOpacity, View } from "react-native";

import Home from "./screens/Home";
import Leagues from "./screens/Leagues";
import ReSearch from "./screens/ReSearch";
import LeaderBoard from "./screens/LeaderBoard";
import Profile from "./screens/Profile";
import ScreenHeaderBtn from "./screens/ScreenHeader";
import Logout from "./components/Logout";



//Stack
const HomeStack = createNativeStackNavigator();

function HomeStackGroup() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="TabsGroup" component={TabGroups} />
    </HomeStack.Navigator>
  );
}

//Drawer
const Drawer = createDrawerNavigator();

function DrawerGroup(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name ="Profile" component={HomeStackGroup} options={{
                headerShown: false
            }}/>
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="Leagues" component={Leagues}/>
            <Drawer.Screen name="ReSearch" component={ReSearch}/>
            <Drawer.Screen name="LeaderBoard" component={LeaderBoard}/>
        </Drawer.Navigator>
    )
  
}

//Bottom Tabs
const Tabs = createBottomTabNavigator();


function TabGroups(){
    const navigation = useNavigation();
    return(
        <Tabs.Navigator
        screenOptions={({route, navigation}) => ({
            tabBarIcon : ({color, focused, size}) =>{
                let iconName;
                  if (route.name === 'Home'){
                    iconName = focused? "home" : "home-outline"
                }
                else if(route.name === "Leagues") {
                    iconName = focused? "trophy" : "trophy-outline"
                }
                else if(route.name === "ReSearch"){
                    iconName = focused? "search-sharp" : "search-outline"
            }
            else if(route.name === "LeaderBoard") {
                iconName = focused? "bar-chart": "bar-chart"
                color = focused? "#9244c9" : "#b7a7c2"
            }
            else if(route.name === "Profile") {
                iconName = focused? "person" : "person-outline"
                }
                return <Ionicons name={iconName} size={24} color={color}/>
                  
            },
            tabBarActiveTintColor: "#9244c9",
            tabBarInactiveTintColor: "#b7a7c2",
        })}>
            <Tabs.Screen name="Home" component={Home} options={{
                headerTitle: "",
                headerShown: false
            }}/>
            <Tabs.Screen name="Leagues" component={Leagues} options={{
                headerTitle: "",
                headerShown: false
            }}/>
            <Tabs.Screen name="ReSearch" component={ReSearch} options={{
                headerTitle: "",
                headerShown: false
            }}/>
            <Tabs.Screen name="LeaderBoard" component={LeaderBoard} options={{
                headerTitle: "",
                headerShown: false
            }}/>
            <Tabs.Screen name="Profile" component={Profile} options={{
                headerTitle: "Profile",
                headerLeft : () =>(
                    <TouchableOpacity style={{paddingLeft: 10}} onPress={() =>{navigation.openDrawer()}}>
                    <Entypo name="menu" size={26} color="black"/>
                    </TouchableOpacity>
                ),
                headerRight : ()=>(
                    <TouchableOpacity style={{paddingRight: 15}}>
                        <Entypo name="message" size={24} color="black" />
                        <Text style={{position:"absolute", top: -5, right: 15, backgroundColor: "red",width:10,alignItems: "center", justifyContent:"center", borderRadius: 50}}>1</Text>
                    </TouchableOpacity>
                ),
                headerTitleStyle : {
                    paddingLeft: 120
                }
            }}/>
        </Tabs.Navigator>
    )
}


const Navigation = () => {
    return(
        <NavigationContainer>
            <DrawerGroup/>
        </NavigationContainer>

    )

}


export default Navigation;