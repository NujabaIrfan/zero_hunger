import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';

export default function Home({}) {
  const navigator = useNavigation();

  return (
    <View>
      <Text>Home page</Text>
      <Button
        title="Create account"
        onPress={() => navigator.navigate('signup')}
      />
      <Button
        title="Create organization"
        onPress={() => navigator.navigate('createOrganization')}
      />
      <Button
        title="View Restaurants"
        onPress={() => navigator.navigate('restaurantList')}
      />
    </View>
  );
}
