import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native"



const ReSearch = () =>{
    const [inputText, setInputText] = useState('');

  const handleInputChange = (text) => {
    setInputText(text);
  };
    return(
        <SafeAreaView>
        <View style={{padding : 50}}>
            <Text>
            ReSearch Here
            </Text>
            <TextInput
            style={styles.input}
            placeholder="Type here..."
            onChangeText={handleInputChange}
            value={inputText}
      />
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
        marginTop: 10,
        height: 45,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 10
    },
  });
  

export default ReSearch;