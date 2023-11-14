import { Text, View } from "react-native"


import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";


const LeaderBoard = () =>{
    return(
        <SafeAreaView>
            <View style={{padding: 50}}>
                <Text>Leader Board Table</Text>
            </View>
        </SafeAreaView>
    );
}

export default LeaderBoard;