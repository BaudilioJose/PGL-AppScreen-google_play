import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Input, Avatar } from '@rneui/themed';
import { Icon } from '@rneui/base';
import {AppCardItem} from './components/AppCardItem';
import { Menu } from './components/Menu';

export default function App() {
  return (
    <View style={styles.mainContainer}>
    <ScrollView
     
     contentContainerStyle={styles.container}>
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

      {/* Populars Apps Section */}
       
       <View style={styles.popularAppsContainer}>
          <Text style={styles.popularAppsText}>Popular Apps</Text>
          <Icon style={styles.popularAppsIcon} name='arrow-right' type='font-awesome' size={20} color='#86939e' />
       </View>

      {/* Popular Apps Grid Section */}
      <ScrollView 
        horizontal
        showsVerticalScrollIndicator={false}>
      <View style={styles.appsGridContainer}>

          <View style={styles.appImageContainer}>
            <Image source={{ uri: 'https://img.pixers.pics/pho(s3:700/PI/54/88/85/48/91/700_PI5488854891_fd892e1ebe755b56602e9f6421f22762_5f9fed4c9f302_.,700,700,jpg)/vinilos-tiktok-vector-logo.jpg.jpg' }} style={styles.appImage} />
            <Text 
            style={styles.appImageText}
            numberOfLines={2}
            ellipsizeMode='tail'
            >TikTok: Retos, Vídeos & Música</Text>
            <View style={styles.appImageStarContainer}>
              <Text style={styles.appImageStarText}>4.8</Text>
              <Icon style={styles.appIconStar} name='star' type='font-awesome' size={20} color='#86939e' />
            </View>
          </View>

          <View style={styles.appImageContainer}>
            <Image source={{ uri: 'data:image/png;base64,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' }} style={styles.appImage} />
            <Text 
            style={styles.appImageText}
            numberOfLines={2}
            ellipsizeMode='tail'
            >Temu: Shop Like a Billionaire</Text>
            <View style={styles.appImageStarContainer}>
              <Text style={styles.appImageStarText}>4.3</Text>
              <Icon style={styles.appIconStar} name='star' type='font-awesome' size={20} color='#86939e' />
            </View>
          </View>

          <View style={styles.appImageContainer}>
            <Image source={{ uri: 'https://play-lh.googleusercontent.com/ResrWBDXfRegdQDSA2MP6bxiYlyfucHymWBW4yy2M7YetU3SCCZuLmFhwpeVFMFGQA' }} style={styles.appImage} />
            <Text 
            style={styles.appImageText}
            numberOfLines={2}
            ellipsizeMode='tail'
            >Shein-Shopping Online</Text>
            <View style={styles.appImageStarContainer}>
              <Text style={styles.appImageStarText}>4.6</Text>
              <Icon style={styles.appIconStar} name='star' type='font-awesome' size={20} color='#86939e' />
            </View>
          </View>

          <View style={styles.appImageContainer}>
            <Image source={{ uri: 'https://play-lh.googleusercontent.com/uykj6t0svCeUYDUEG1osUlslAhb3aFQNzPrbKibBv5cZDH_ZdjiwVWsrQFt_pXUdbYw' }} style={styles.appImage} />
            <Text 
            style={styles.appImageText}
            numberOfLines={2}
            ellipsizeMode='tail'
            >Wallapop - Compra y vende con Wallapop</Text>
            <View style={styles.appImageStarContainer}>
              <Text style={styles.appImageStarText}>4.8</Text>
              <Icon style={styles.appIconStar} name='star' type='font-awesome' size={20} color='#86939e' />
            </View>
          </View>

          
      </View>
      </ScrollView>

      {/** Ads Suggested for you Section */}
      <View style={styles.adsSuggestedForYouContainer}>
        <Text style={styles.adsSuggestedForYouText}>Ads</Text>
        <Text style={styles.adsSuggestedForYouText2}>Suggested for you</Text>
        <Icon name='more-vert' type='material' size={24} color='#86939e' />
      </View>
      {/** Ads Suggested for you Grid Section */}
      <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}>
        <View style={styles.adsSuggestedForYouGridContainer}>
          <View style={styles.adsSuggestedForYouColumn}>
            <AppCardItem />
            <AppCardItem />
            <AppCardItem />
          </View>
          <View style={styles.adsSuggestedForYouColumn}>
            <AppCardItem />
            <AppCardItem />
            <AppCardItem />
          </View>

          <View style={styles.adsSuggestedForYouColumn}>
            <AppCardItem />
            <AppCardItem />
            <AppCardItem />
          </View>
        </View>
      </ScrollView>

    </ScrollView>
    <Menu />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#121212',
  },
  container: {
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
  },
  popularAppsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  popularAppsText: {
    fontSize: 20,
    color: '#86939e',
    marginLeft: 10,
    marginRight: 10,
  },
  popularAppsIcon: {
    marginRight: 15
  },
  appsGridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  appImage: {
    width: 100,
    height: 100,
    borderRadius: 30,
    margin: 10,
  },
  appImageContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: 132,
  },
  appImageText: {
    fontSize: 18,
    color: '#86939e',
    marginLeft: 10,
    lineHeight: 20,
  },
  appImageStarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 10,
    paddingTop: 5,
  },
  appIconStar: {
    paddingLeft: 5,
  },
  appImageStarText: {
    fontSize: 19,
    color: '#86939e',
    marginLeft: 5,
    lineHeight: 20,
  },
  adsSuggestedForYouContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    paddingTop: 35,
  },
  adsSuggestedForYouText: {
    fontSize: 15,
    color: '#86939e',
    marginLeft: 10,
  },
  adsSuggestedForYouText2: {
    fontSize: 20,
    color: '#86939e',
    marginLeft: -90,
  },
  adsSuggestedForYouGridContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 15,
  },
  adsSuggestedForYouColumn: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginRight: 10,
    gap: 30,
    paddingHorizontal: 20,
    marginTop: 10,
  },
});
