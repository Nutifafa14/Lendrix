// App.js
import * as React from 'react';
// filepath: c:\Users\Windows\MyProject\App.js

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './app/screens/LoginScreen'; // Make sure this import matches your file
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
import DoneScreen from './app/screens/DoneScreen'; // Adjust the path if necessary
import PasscodeScreen from './app/screens/PasscodeScreen';
import HomeScreen from './app/screens/HomeScreen';
import ResetPasswordScreen from './app/screens/ResetPasswordScreen';
import ResetPasswordEmailScreen from './app/screens/ResetPasswordEmailScreen';
import TransactionsScreen from './app/screens/TransactionsScreen';
import Insights from './app/screens/Insights';
import NotificationAlert from './app/screens/NotificationAlert';
import SendScreen from './app/screens/SendScreen';
import UserAccountScreen from './app/screens/UserAccountScreen';
import ReceiveScreen from './app/screens/ReceiveScreen';
import StatAndReportScreen from './app/screens/Stat&ReportScreen';
import StatementOfFeesScreen from './app/screens/StatementOfFeesScreen';
import SecurityAndPrivacyScreen from './app/screens/SecurityAndPrivacyScreen';
import ChangePasscodeScreen from './app/screens/ChangePasscodeScreen';
import ChangePasswordScreen from './app/screens/ChangePasswordScreen';
import SocialLoginOptionsScreen from './app/screens/SocialLoginOptionsScreen';
import HelpScreen from './app/screens/HelpScreen';
import HelpSendingMoneyScreen from './app/screens/HelpSendingMoneyScreen';
import HelpManageAccountScreen from './app/screens/HelpManageAccountScreen';
import HelpVirtualCardScreen from './app/screens/HelpVirtualCardScreen';
import HelpReceiveMoneyScreen from './app/screens/HelpReceiveMoneyScreen';
import HelpArticleScreen from './app/screens/HelpArticleScreen';
import DevicesScreen from './app/screens/DevicesScreen';
import LogOutEverywhereScreen from './app/screens/LogOutEverywhereScreen';
import LanguageAndAppearanceScreen from './app/screens/LanguageAndAppearanceScreen';
import PersonalDetailsScreen from './app/screens/PersonalDetailsScreen';
import PersonalInformationScreen from './app/screens/PersonalInformationScreen';
import CloseAccountScreen from './app/screens/CloseAccountScreen';
import CloseAccountReasonScreen from './app/screens/CloseAccountReasonScreen';
import CloseAccountFinalScreen from './app/screens/CloseAccountFinalScreen';
import TwoFactorAuthScreen from './app/screens/two-factorAuth';
import LendrixAppMethodScreen from './app/screens/LendrixAppMethodScreen';

import TextMessageVerificationScreen from './app/screens/TextMessageVerificationScreen';
import { ThemeProvider } from './app/components/ThemeContext';
import BottomTabs from './app/components/BottomTabs';
// import CreateAlertScreen from './app/screens/CreateAlertScreen'; // Uncomment and adjust if you have this screen
const Stack = createStackNavigator();

 function App() {
  return (
    <ThemeProvider>
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
            name="ResetPasswordEmailScreen"
            component={ResetPasswordEmailScreen}
         />
          <Stack.Screen 
            name="ForgottenPasswordScreen"
             component={ForgottenPasswordScreen} 
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
           name="PasscodeScreen" 
           component={PasscodeScreen}
         />
         <Stack.Screen 
           name="LoadingScreen" 
           component={LoadingScreen}
         />
         <Stack.Screen 
           name="Login"  
           component={LoginScreen}
         />
         <Stack.Screen 
           name="MyRegisterScreen"  
           component={MyRegisterScreen}
         />
         <Stack.Screen 
           name="TransactionsScreen"  
           component={TransactionsScreen}
         />
         <Stack.Screen 
           name="HomeScreen"  
           component={HomeScreen}
         />
         <Stack.Screen 
           name="DoneScreen"  
           component={DoneScreen}
         />
         <Stack.Screen 
           name="Insights"  
           component={Insights}
         />
         <Stack.Screen 
           name="NotificationAlert"  
           component={NotificationAlert}
         />
         <Stack.Screen 
           name="Main"  
           component={BottomTabs}
           options={{ headerShown: false }}
         />
         <Stack.Screen 
           name="TwoFactorAuthScreen"  
           component={TwoFactorAuthScreen}
         />
         <Stack.Screen 
           name="LendrixAppMethodScreen"  
           component={LendrixAppMethodScreen}
         />
         <Stack.Screen 
           name="TextMessageVerificationScreen"  
           component={TextMessageVerificationScreen}
         />
         <Stack.Screen 
           name="StatAndReportScreen"  
           component={StatAndReportScreen}
         />
         <Stack.Screen 
           name="StatementOfFeesScreen"  
           component={StatementOfFeesScreen}
         />
         <Stack.Screen 
           name="SecurityAndPrivacyScreen"  
           component={SecurityAndPrivacyScreen}
         />
         <Stack.Screen 
           name="ChangePasscodeScreen"  
           component={ChangePasscodeScreen}
         />
         <Stack.Screen 
           name="ChangePasswordScreen"  
           component={ChangePasswordScreen}
         />
         <Stack.Screen 
           name="SocialLoginOptionsScreen"  
           component={SocialLoginOptionsScreen}
         />
         <Stack.Screen 
           name="HelpScreen"  
           component={HelpScreen}
         />
         <Stack.Screen 
           name="HelpSendingMoneyScreen"  
           component={HelpSendingMoneyScreen}
         />
         <Stack.Screen 
           name="HelpManageAccountScreen"  
           component={HelpManageAccountScreen}
         />
         <Stack.Screen 
           name="HelpVirtualCardScreen"  
           component={HelpVirtualCardScreen}
         />
         <Stack.Screen 
           name="HelpReceiveMoneyScreen"  
           component={HelpReceiveMoneyScreen}
         />
         <Stack.Screen 
           name="HelpArticleScreen"  
           component={HelpArticleScreen}
         />
         <Stack.Screen 
           name="DevicesScreen"  
           component={DevicesScreen}
         />
         <Stack.Screen 
           name="LogOutEverywhereScreen"  
           component={LogOutEverywhereScreen}
         />
         <Stack.Screen 
           name="LanguageAndAppearanceScreen"  
           component={LanguageAndAppearanceScreen}
         />
         <Stack.Screen 
           name="PersonalDetailsScreen"  
           component={PersonalDetailsScreen}
         />
         <Stack.Screen 
           name="PersonalInformationScreen"  
           component={PersonalInformationScreen}
         />
         <Stack.Screen 
           name="CloseAccountScreen"  
           component={CloseAccountScreen}
         />
         <Stack.Screen 
           name="CloseAccountReasonScreen"  
           component={CloseAccountReasonScreen}
         />
         <Stack.Screen 
           name="CloseAccountFinalScreen"  
           component={CloseAccountFinalScreen}
         />
         <Stack.Screen 
           name="SendScreen"  
           component={SendScreen}
         />
         <Stack.Screen 
           name="ReceiveScreen"  
           component={ReceiveScreen}
         />
         <Stack.Screen 
           name="UserAccountScreen"  
           component={UserAccountScreen}
         />
       </Stack.Navigator>
     </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;


