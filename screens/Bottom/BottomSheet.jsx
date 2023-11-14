
import "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { useRef } from "react";

export default function BottomSheet() {
  const bottomSheetModalRef = useRef(null);

  const snapPoints = ["48%"];

  function handlePresentModal() {
    bottomSheetModalRef.current?.present();

  }

  return (
    <GestureHandlerRootView  style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <View style={styles.container}>
        {/* <Button title="Present Modal" onPress={handlePresentModal} />  */}
        <StatusBar style="auto" />
        <BottomSheetModal
        ref={bottomSheetModalRef}
        snapPoints={snapPoints}
        index={0}
        backgroundStyle={{borderRadius: 50, backgroundColor: "grey"}}>
          <View>
            <Text>Open up App.js to start working on your app!</Text>
          </View>
        </BottomSheetModal>
          
      </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
