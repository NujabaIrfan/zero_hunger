import { StyleSheet } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateOrganization from './src/screens/CreateOrganization';
import Home from './src/screens/Home';
import Signup from './src/screens/Signup';
import RestaurantList from './src/screens/RestaurantList';
import Organizations from './src/screens/Organizations';
import Organization from './src/screens/Organization';
import DonorSignUp from './src/screens/DonorSignUp';
import Toast from 'react-native-toast-message';
import CreateEvent from './src/screens/CreateEvent';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'home',
  screens: {
    home: Home,
    createOrganization: CreateOrganization,
    signup: Signup,
    restaurantList: RestaurantList,
    organizations: Organizations,
    organization: Organization,
    createEvent: CreateEvent,
    donorSignUp: DonorSignUp,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return (
    <>
      <Navigation />
      <Toast />
    </>
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
