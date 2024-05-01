/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import HomeView from './src/screens/Home';
import InputTextFiled from './src/screens/InputTextFiled';
import SafeAreaExample from './src/screens/SafeAreaExample';
import FigmaDesign from './src/screens/ImageBackgroung/FigmaDesign';
import SignInScreen from './src/screens/SignInScreen';
import Flex from './src/screens/FlexScreens/Flex1';
import Flex1 from './src/screens/FlexScreens/Flex1';
import Flex2 from './src/screens/FlexScreens/Flex2';
import Flex3 from './src/screens/FlexScreens/Flex3';
import Flex4 from './src/screens/FlexScreens/Flex4';
import Flex5 from './src/screens/FlexScreens/Flex5';
import Flex6 from './src/screens/FlexScreens/Flex6';
import Flex7 from './src/screens/FlexScreens/Flex7';
import Flex8 from './src/screens/FlexScreens/Flex8';
import Flex9 from './src/screens/FlexScreens/Flex9';
import Flex10 from './src/screens/FlexScreens/Flex10';
import Flex11 from './src/screens/FlexScreens/Flex11';
import Flex12 from './src/screens/FlexScreens/Flex12';
import Flex13 from './src/screens/FlexScreens/Flex13';
import Flex14 from './src/screens/FlexScreens/Flex14';
import ImageBackground2 from './src/screens/ImageBackgroung/ImageBackground2';
import ImageTask3 from './src/screens/ImageBackgroung/ImageTask3';
import Pressable1 from './src/screens/Pressable';
import FlatListExample from './src/screens/FlatListExample';
import FlatList1 from './src/screens/FlatList1';
import FlatList2 from './src/screens/FlatList2';
import DoneTaskFile from './src/screens/DoneTaskFile';
import FlatList2WithMap from './src/screens/FlatList2WithMap';
import CommingSoon from './src/screens/CommingSoon';
import FlatList4 from './src/screens/FlatLIst4';
import FlatList5 from './src/screens/FlatList5';
import NavigationExample from './src/screens/NavigationExample';
import TabNavigationBottomBar from './src/screens/TabNavigationBottomBar';
import Nav0 from './src/screens/NavigationExamples/Nav0';
import HomeNAV from './src/screens/NavigationExamples/HomeNAV';
import MainStack from './src/screens/NavigationExamples/MainStack';
import DrawerNavExample from './src/screens/NavigationExamples/DrawerNavExample';
import CustomNav from './src/screens/CustomNavigationTask/CustomNav';
import SectionList from './src/screens/section_list';
import SectionListExample from './src/screens/section_list';
import SectionLIstHistory from './src/screens/section_list';
import WhatsAppChat from './src/screens/NavigationExamples/whatsapp_chat';
import CustomComaponantExample from './src/screens/Custom_Componant/custom_componant_example';
import WhatsAppMain from './src/screens/Custom_Componant/whatsapp_main';
import CustomTextInputField from './src/screens/Custom_Componant/custom_text_input_filed';
import ImputTextFieldTask2 from './src/screens/NavigationExamples/InputTextFieldTask2';
import OtpInput from './src/screens/otp_input';
import LinearGradientExample from './src/screens/linear_gradient';
import HooksExample from './src/screens/hooks_example';
import HooksNavigation from './src/screens/hooks_navigation';
import ReduxExample from './src/componants/redux_example';
import { Provider } from 'react-redux';
import store from './src/componants/redux/store';
import BookingInfo from './src/screens/Booking_Info';
import BookingNavigation from './src/screens/NavigationExamples/Booking_Navigation';
import ApiCallExample from './src/screens/API_EXAMPLES/Api_Call_Example';
import BusInfo from './src/screens/API_EXAMPLES/Bus_Info';
import AxiosExample from './AxiosExample';
import AsyncStorageExample from './AsyncStorageExample';
import NativeModuleExample from './NativeModuleExample';
import PermissionsExamples from './Permissions_Example';
import CameraDesign from './CameraDesign';


type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex:1 ,
  };

  return (
    <View style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView> */}
      {/* <InputTextFiled/> */}
      {/* <SafeAreaExample/> */}
      {/* <FigmaDesign/> */}
      {/* <SignInScreen/> */}
      {/* <Flex1/> */}
      {/* <Flex2/> */}
      {/* <Flex3/> */}
      {/* <Flex4/> */}
      {/* <Flex5/> */}
      {/* <Flex6/> */}
      {/* <Flex7/> */}
      {/* <Flex8/> */}
      {/* <Flex9/> */}
      {/* <Flex10/> */}
      {/* <Flex11/> */}
      {/* <Flex12/> */}
      {/* <Flex13/> */}
      {/* <Flex14/> */}
      {/* <ImageBackground2/> */}
      {/* <ImageTask3/> */}
      {/* <Pressable1/> */}
      {/* <FlatListExample/> */}
      {/* <FlatList1/> */}
      {/* <FlatList2/> */}
      {/* <FlatList2WithMap/> */}
      {/* <DoneTaskFile/> */}
      {/* <CommingSoon/> */}
      {/* <FlatList4/> */}
      {/* <FlatList5/>  */}
      {/* <NavigationExample/> */}
      {/* <TabNavigationBottomBar/> */}
      {/* <Nav0/> */}
      {/* <MainStack/> */}
      {/* <HomeNAV/> */}
      {/* <DrawerNavExample/> */}
      {/* <CustomNav/> */}
      {/* <SectionListExample/> */}
      {/* <SectionLIstHistory/> */}
      {/* <WhatsAppChat/> */}
      {/* <CustomComaponantExample/> */}
      {/* <WhatsAppMain/> */}
      {/* <CustomTextInputField/> */}
      {/* <ImputTextFieldTask2/> */}
      {/* <OtpInput/> */}
      {/* <LinearGradientExample/> */}
      {/* <HooksExample/> */}
      {/* <MountingExample/> */}
      {/* <HooksNavigation/>  */}
{/*       
    <Provider store={store}>
       <ReduxExample/>  
      </Provider>  
      */}
      {/* <BookingNavigation/> */}
      {/* <BookingInfo/> */}
      {/* <ApiCallExample/> */}
      {/* <BusInfo/> */}
      {/* <AxiosExample/> */}
      {/* <AsyncStorageExample/> */}
      {/* <NativeModuleExample/> */}
      {/* <PermissionsExamples/> */}
      <CameraDesign/>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
