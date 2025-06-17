// App.js
import * as React from 'react';
// filepath: c:\Users\Windows\MyProject\App.js

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './app/screens/LoginScreen'; // Make sure this import matches your file
import RegisterScreen from './app/screens/MyRegisterScreen'; // And this one
import OnBoarding from './app/screens/OnBoarding'; // Adjust the path if necessary
import SplashScreen from './app/screens/SplashScreen';
import AccountScreen from './app/screens/AccountScreen';
import LoadingScreen from './app/screens/LoadingScreen';
import CountryScreen from './app/screens/CountryScreen';
import NumberVeriScreen from './app/screens/NumberVeriScreen';
import SmsScreen from './app/screens/SmsScreen';
import PasswordScreen from './app/screens/PasswordScreen';
import EmailVeriScreen from './app/screens/EmailVeriScreen';
import CommScreen from './app/screens/CommScreen';
import AdTrackingScreen from './app/screens/AdTrackingScreen';
import OnBoardingIllustration from './app/screens/OnBoardingIllustration';
import MyRegisterScreen from './app/screens/MyRegisterScreen';
import TwoStepVeriScreen from './app/screens/TwoStepVeriScreen';
import CodeByTextScreen from './app/screens/CodeByTextScreen';
import ForgottenPasswordScreen from './app/screens/ForgottenPaswordScreen'; // Adjust the path if necessary
import VerifyDeviceScreen from './app/screens/VerifyDeviceScreen'; // Adjust the path if necessary
import ConfirmIdentityScreen from './app/screens/ConfirmIdentityScreen';
import ChangeNumberScreen from './app/screens/ChangeNumberScreen'; // Adjust the path if necessary
import HelpChangeNumberScreen from './app/screens/HelpChangeNumberScreen';
import TalkToTeam1Screen from './app/screens/TalkToTeam1Screen';
import NeedHelpPhoneScreen from './app/screens/NeedHelpPhoneScreen';
import ResetPasswordScreen from './app/screens/ResetPasswordScreen';
import ResetPasswordEmailScreen from './app/screens/ResetPasswordEmailScreen';
const Stack = createStackNavigator();

function App() {
  return (

   

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown:false}}>
        <Stack.Screen
        name="Splash" 
        component={SplashScreen}

        />
        <Stack.Screen 
          name="SmsScreen" 
           component={SmsScreen}
       />
       <Stack.Screen 
          name="OnBoardingIllustration" 
           component={OnBoardingIllustration}
       />
         <Stack.Screen 
          name="TalkToTeam1Screen"
           component={TalkToTeam1Screen}
       />
        <Stack.Screen
          name="ResetPasswordEmailScreen"
          component={ResetPasswordEmailScreen}
       />
       <Stack.Screen 
          name="ForgottenPasswordScreen"
           component={ForgottenPasswordScreen} 
       />
       <Stack.Screen 
          name="NeedHelpPhoneScreen"
           component={NeedHelpPhoneScreen}
       />
       <Stack.Screen
          name="ResetPasswordScreen"
           component={ResetPasswordScreen}
       />
       <Stack.Screen 
          name="VerifyDeviceScreen"
           component={VerifyDeviceScreen}
       />
       <Stack.Screen 
          name="TwoStepVeriScreen" 
           component={TwoStepVeriScreen}
       />
       <Stack.Screen 
          name="HelpChangeNumberScreen" 
           component={HelpChangeNumberScreen}
       />
       <Stack.Screen 
          name="ChangeNumberScreen" 
           component={ChangeNumberScreen}
       />
       <Stack.Screen 
          name="CodeByTextScreen" 
           component={CodeByTextScreen}
       />
       
       <Stack.Screen 
          name="ConfirmIdentityScreen" 
           component={ConfirmIdentityScreen}
       />
       <Stack.Screen 
          name="CommScreen" 
           component={CommScreen}
       />
       <Stack.Screen
    name="AdTrackingScreen"
    component={AdTrackingScreen}
    options={{ headerShown: false }} // or true if you want a header
  />
         <Stack.Screen 
         name="PasswordScreen" 
         component={PasswordScreen}
      />
      <Stack.Screen 
         name="EmailVeriScreen" 
         component={EmailVeriScreen}
      />
        <Stack.Screen 
          name="OnBoarding" 
          component={OnBoarding}
        />

        <Stack.Screen 
          name="NumberVeriScreen" 
          component={NumberVeriScreen}
        />
        <Stack.Screen 
          name="CountryScreen" 
          component={CountryScreen}
        />
        <Stack.Screen 
          name="AccountScreen" 
          component={AccountScreen}
        />
        <Stack.Screen 
          name="LoadingScreen" 
          component={LoadingScreen}
        />
        <Stack.Screen 
          name="Login"  // Must match exactly what you use in navigation.navigate()
          component={LoginScreen}
        />
        <Stack.Screen 
          name="MyRegisterScreen"  // Must match exactly
          component={MyRegisterScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


