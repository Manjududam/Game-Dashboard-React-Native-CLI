
import "react-native-gesture-handler";
import Navigation from "./Navigation";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";



export default function App() {
  return (
    <GestureHandlerRootView  style={{ flex: 1 }}>
    <BottomSheetModalProvider>

      <Navigation/>
    </BottomSheetModalProvider>
    </GestureHandlerRootView>

    
  );
}
