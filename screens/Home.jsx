

import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Button, ScrollView, Pressable } from "react-native";
import * as Progress from "react-native-progress"
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModal,BottomSheetScrollView } from "@gorhom/bottom-sheet";


import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import BottomSheet from "./Bottom/BottomSheet";
import styles from "./Menu/Home/Home.style";
import styleBottomSheet from "./Bottom/BottomSheet.style";



const Home = ({handlePresentModal}) =>{
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000); 
      return () => clearInterval(intervalId);
    }, []);

    const bottomSheetModalRef = useRef(null);
    const bottomSheetModalRef2 = useRef(null);

  const snapPoints = ["50%"];
  const snapPoints1 = ["55%"];

  function handleOverModal() {
    bottomSheetModalRef.current?.present();
    
  }
  function handleUnderModal() {
    bottomSheetModalRef.current?.present();
    
  }

  //Array Nums
  const nums = Array.from({ length: 50 }, (_, index) => index + 1);


    return(
        <SafeAreaView>
            <StatusBar style="auto"/>
            <View style={styles.container}>
                <Text style={{fontSize: 20}}>
                    Today's Games
                </Text>
            </View>
            <View style={{marginHorizontal:5}}>
            <View style={styles.card} >
                <View style={styles.innerCard}>
                    <View style={styles.cardTitle}>
                        <Text style={{opacity: 0.8}}>UNDER OR UNDER</Text>
                        <Ionicons name="information-circle-outline" size={14} color="white" />
                    </View>
                    <View style={styles.cardTitle}>
                        <Text style={{opacity: 0.8, fontSize: 12}}>Starting in</Text>
                        <AntDesign name="clockcircle" size={12} color="white" />
                        <Text>{currentTime.toLocaleTimeString()}</Text>
                    </View>
                <View>
            </View>
            </View>
            <View style={{marginTop:10}}>
            <Text style={{opacity: 0.8}}>Bitcoin price will be under</Text>
            <Text style={{fontWeight:"900"}}>$24,524 at 7 a ET on 22nd Jan'21</Text>
            </View>
            </View>

            <View style={styles.midCard}>
            <View style={styles.innerMidCard}>
                <View style={styles.innerMidCardText}>
                    <Text style={styles.innerMidCardText2}>PRIZE POLL</Text>
                    <Text>$13,000</Text>
                </View>
                <View style={styles.innerMidCardText}>
                    <Text style={styles.innerMidCardText2}>UNDER</Text>
                    <Text>3.25x</Text>
                </View>
                <View style={styles.innerMidCardText}>
                    <Text style={styles.innerMidCardText2}>OVER</Text>
                    <Text>1.25x</Text>
                </View>
                <View style={styles.innerMidCardText}>
                    <Text style={styles.innerMidCardText2}>ENTRY FEES</Text>
                    <Text>5</Text>
                </View>
            </View>

            <View style={{gap: 10}}>
                <Text style={{paddingLeft: 10}}>What's your prediction?</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={handleUnderModal} style={[styles.buttons, {backgroundColor: "#eb6f42"}]}>
                        <Entypo name="arrow-down" size={24} color="black" />
                        <Text style={{fontWeight: "700"}}>Under</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleOverModal} style={[styles.buttons, {backgroundColor: "#c125e8"}]}>
                        <Entypo name="arrow-up" size={24} color="black" />
                        <Text style={{fontWeight: "700"}}>Over</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.bottomCard}>
                <View style={styles.bottomCardInner}>
                    <TouchableOpacity style={{flexDirection: "row", gap:5}}>
                        <Ionicons name="person-sharp" size={15} color="black" />
                        <Text>355 Players</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", gap:5}}>
                        <FontAwesome5 name="chart-area" size={15} color="black" />
                        <Text>View Chart</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.example}>
                    <Progress.Bar progress={0.8} width={300} height={10} color="#e85048"/>
                </View>
                <View style={styles.bottomCardEnd}>
                    <Text>232 predicted under</Text>
                    <Text>123 predicted over</Text>
                </View>
            </View>
            </View>
            </View>
            
            <View>
                <View style={styles.BottomContainer}>
                <StatusBar style="auto" />
                <BottomSheetModal
                ref={bottomSheetModalRef}
                snapPoints={snapPoints}
                index={0}
                backgroundStyle={styleBottomSheet.bottomSheetModal}>
                    <View style={{padding: 20}}>
                        <Text style={{fontWeight: "500", fontSize: 15, color: "black",marginBottom: 10}}>Your Prediction is Under</Text>
                        <Text style={{opacity:0.85}}>ENTRY TICKETS</Text>
                        </View>
                    <View style={styleBottomSheet.bottomSheetModalCard}>
                    <FlatList style={styleBottomSheet.flatList} showsVerticalScrollIndicator={false}
                    data={nums}
                    renderItem={({item}) => (
                        <ScrollView>
                            <TouchableOpacity style={{height:40, paddingHorizontal:150}} onPress={()=>{console.log(item);}}>
                            <Text style={{fontSize: 20, color: "#646366",backfaceVisibility : "visible"}}>{item}</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    )}/>
                    </View>
                    <View style={{marginVertical: 50, marginHorizontal: 20}}>
                    <View style={styleBottomSheet.bottomSheetModalCardInner}>
                        <View>
                        <Text>You can win</Text>
                        <Text style={{color:"green"}}>$2000</Text>
                        </View>
                        <View>
                            <Text>Total 5$</Text>
                        </View>
                    </View>
                        <View>
                        <TouchableOpacity style={styleBottomSheet.submitButton}>
                            <Text>Submit my prediction</Text>
                        </TouchableOpacity>
                        </View>
                                    
                    </View>
                
                </BottomSheetModal>
                <View>
                <BottomSheetModal
                ref={bottomSheetModalRef2}
                snapPoints={snapPoints1}
                index={0}
                backgroundStyle={styleBottomSheet.bottomSheetModal}>
                    <View style={{padding: 20}}>
                        <Text style={{fontWeight: "500", fontSize: 15, color: "black",marginBottom: 10}}>Your Prediction is Over</Text>
                        <Text style={{opacity:0.85}}>ENTRY TICKETS</Text>
                        </View>
                    <View style={styleBottomSheet.bottomSheetModalCard}>
                    <FlatList showsVerticalScrollIndicator={false}
                    data={nums}
                    renderItem={({item}) => (
                        <ScrollView>
                            <TouchableOpacity style={{height:40, paddingHorizontal:150}} onPress={()=>{console.log(item);}}>
                            <Text style={{fontSize: 20, color: "#646366",backfaceVisibility : "visible"}}>{item}</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    )}/>
                    </View>
                    <View style={{marginVertical: 50, marginHorizontal: 20}}>
                    <View style={styleBottomSheet.bottomSheetModalCardInner}>
                        <View>
                        <Text>You can loose</Text>
                        <Text style={{color:"green"}}>$2000</Text>
                        </View>
                        <View>
                            <Text>Total 10$</Text>
                        </View>
                    </View>
                        <View>
                        <TouchableOpacity style={{height:30,backgroundColor: "#654cf5", borderRadius: 25,marginHorizontal: 10, justifyContent: "center", alignItems: "center"}}>
                            <Text>Submit my prediction</Text>
                        </TouchableOpacity>
                        </View>
                                    
                    </View>
                
                </BottomSheetModal>
                </View>
            </View>


            </View>
        
        </SafeAreaView>
       
    
    );
}



export default Home;