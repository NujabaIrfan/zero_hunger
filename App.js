import { StyleSheet } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateOrganization from './src/screens/CreateOrganization';
import Home from './src/screens/Home';
import Signup from './src/screens/Signup';
import RestaurantList from './src/screens/RestaurantList';
import Organizations from './src/screens/Organizations';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'home',
  screens: {
    home: Home,
    createOrganization: CreateOrganization,
    signup: Signup,
    restaurantList: RestaurantList,
    organizations: Organizations,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
