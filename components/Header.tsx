import { View, Text, StyleSheet } from 'react-native'
import { Input, Avatar } from '@rneui/themed';
import { Icon } from '@rneui/base';

export function Header() {
    return (
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
    )
}

const styles = StyleSheet.create({
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
})