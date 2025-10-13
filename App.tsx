import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Input, Avatar } from '@rneui/themed';
import { Icon } from '@rneui/base';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.inputContainer}>
        <Input 
          placeholder='Search apps & Games'
          leftIcon={
            <Icon
              name='search'
              type='font-awesome'
              size={20}
              color='#86939e'
            />
          }
          inputContainerStyle={styles.searchInput}
          inputStyle={styles.inputText}
        />
        <Icon 
          name='notifications-none'
          type='material'
          size={40}
          color='#86939e'
          style={styles.notificationIcon}
        />
        <Avatar
          rounded={true}
          size={40}
          source={{ uri: 'https://cdn.pixabay.com/photo/2018/10/14/18/00/dog-3747022_1280.jpg' }}
          containerStyle={styles.avatar}
        />
      </View>
      {/* Menu Section */}
      
      {/* Menu Section */}
      <View style={styles.menuContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.menuScroll}
        >
          <Text style={styles.menuText}>For You</Text>
          <Text style={styles.menuText}>Top Charts</Text>
          <Text style={styles.menuText}>Children</Text>
          <Text style={styles.menuText}>Other Devices</Text>
          <Text style={styles.menuText}>Premium</Text>
          <Text style={styles.menuText}>Categories</Text>
        </ScrollView>
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
    fontSize: 20,
  },
  inputText: {
    fontSize: 24.8,
  },
  notificationIcon: {
    color: '#86939e',
    marginLeft: 10,
    marginTop: 5,
  },
  avatar: {
    marginLeft: 10,
    marginTop: 5,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: -30,
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
  },
  menuText: {
    fontSize: 20,
    color: '#86939e',
    marginLeft: 10,
    marginRight: 30,
    marginTop: 10,
    fontWeight: 'bold',
  },
  menuScroll: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  }
});
