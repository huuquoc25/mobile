import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { LandingScreen } from './Screen/LandingScreen';
import { LoginScreen } from './Screen/LoginScreen';
import { SignUpScreen } from './Screen/SignUpScreen';
const Stack= createNativeStackNavigator();
const App = () => {
  // const [showRealApp, setShowRealApp] = useState(false);

  // const onDone = () => {
  //   setShowRealApp(true);
  // };

  // const onSkip = () => {
  //   setShowRealApp(true);
  // };

  // const slides = [
  //   {
  //     key: 's1',
  //     text: 'Welcome to our restaurant app! Log in and check out our delicious food',
  //     title: 'Browser Food',
  //     image: {
  //       uri:
  //         'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_mobile_recharge.png',
  //     },
  //     backgroundColor: '#5ea33a',
  //   },
  //   {
  //     key: 's2',
  //     title: 'Order Food',
  //     text: 'Hungry? Order food in just a few clicks and well take care of you',
  //     image: {
  //       uri:
  //         'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_flight_ticket_booking.png',
  //     },
  //     backgroundColor: '#5ea33a',
  //   },
  //   {
  //     key: 's3',
  //     title: 'Make Reservations',
  //     text: 'Book a table in advance to avoid waiting in line',
  //     image: {
  //       uri:
  //         'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_discount.png',
  //     },
  //     backgroundColor: '#5ea33a',
  //   },
  //   {
  //     key: 's4',
  //     title: 'Quick Search',
  //     text: ' Quickly find food items you like the most',
  //     image: {
  //       uri:
  //         'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_best_deals.png',
  //     },
  //     backgroundColor: '#5ea33a',
  //   },
  //   {
  //     key: 's5',
  //     title: 'Bus Booking',
  //     text: 'Enjoy Travelling on Bus with flat 100% off',
  //     image: {
  //       uri:
  //         'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_bus_ticket_booking.png',
  //     },
  //     backgroundColor: '#5ea33a',
  //   },
  //   // Add more slides as needed
  // ];

  // return (
  //   <>
  //     {showRealApp ? (
  //       <SafeAreaView style={styles.container}>
  //         <View style={styles.container}>
  //           <Text style={styles.titleStyle}>
  //             React Native App Intro Slider using AppIntroSlider
  //           </Text>
  //           <Text style={styles.paragraphStyle}>
  //             This will be your screen when you click Skip from any slide or
  //             Done button at last
  //           </Text>
  //           <Button
  //             title="Show Intro Slider again"
  //             onPress={() => setShowRealApp(false)}
  //           />
  //         </View>
  //       </SafeAreaView>
  //     ) : (
  //       <AppIntroSlider
  //         data={slides}
  //         renderItem={({ item }) => (
  //           <View
  //             style={{
  //               flex: 1,
  //               backgroundColor: item.backgroundColor,
  //               alignItems: 'center',
  //               justifyContent: 'space-around',
  //               paddingBottom: 100,
  //             }}>
  //             <Text style={styles.introTitleStyle}>{item.title}</Text>
  //             <Image style={styles.introImageStyle} source={item.image} />
  //             <Text style={styles.introTextStyle}>{item.text}</Text>
  //           </View>
  //         )}
  //         onDone={onDone}
  //         showSkipButton={true}
  //         onSkip={onSkip}
  //       />
  //     )}
  //   </>
  // );
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name ='Home' component={LandingScreen}/>
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='SignUp' component={SignUpScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    paddingBottom: 100,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 200,
    height: 200,
  },
  introTextStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
    marginBottom: 16,
  },
})