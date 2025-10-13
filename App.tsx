import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Input } from '@rneui/themed';
import { Icon } from '@rneui/base';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Input 
          placeholder='Search apps & games'
          leftIcon={
            <Icon
              name='search'
              type='font-awesome'
              size={20}
              color='#86939e'
            />
          }
          inputContainerStyle={styles.searchInput}
        />
        <Icon 
          name='notifications-none'
          type='material'
          size={40}
          color='#86939e'
          style={styles.notificationIcon}
        />
        <Icon
          name='account-circle'
          type='material'
          size={40}
          color='#86939e'
          style={styles.avatarIcon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  inputContainer: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 10,
    marginTop: 50,
  },
  searchInput: {
    borderRadius: 20,
    borderWidth: 0,
    borderBottomWidth: 0,
    backgroundColor: '#2A2A2A',
    paddingHorizontal: 10,
  },
  notificationIcon: {
    color: '#86939e',
    marginLeft: 10,
    marginTop: 5,
  },
  avatarIcon: {
    marginLeft: 10,
    marginTop: 5,
  }
});
