import {View, Image, Text, StyleSheet} from 'react-native';
import {Icon} from '@rneui/base';

export default function AppCardItem() {
    <View style={styles.adsSuggestedForYouGridContainer}>
          <Image source={{ uri: 'https://play-lh.googleusercontent.com/ResrWBDXfRegdQDSA2MP6bxiYlyfucHymWBW4yy2M7YetU3SCCZuLmFhwpeVFMFGQA' }} style={styles.adsSuggestedForYouGridImage} />
          <View style={styles.adsSuggestedForYouGridTextContainer}>
            <Text style={styles.adsSuggestedForYouGridText}>Samsung Galaxy S23 Ultra</Text>
            <View style={styles.adsSuggestedForYouStarContainer}>
              <Text style={styles.adsSuggestedForYouGridText2}>4.6</Text>
              <Icon name='star' type='font-awesome' size={15} color='#86939e' />
            </View>
          </View>
    </View>
}

const styles = StyleSheet.create({
    adsSuggestedForYouGridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 15,
    },
    adsSuggestedForYouGridTextContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    adsSuggestedForYouGridImage: {
        width: 100,
        height: '100%',
        borderRadius: 20,
        margin: 10,
    },
    adsSuggestedForYouGridText: {
        fontSize: 18,
        color: '#86939e',
        marginLeft: 10,
        lineHeight: 20,
    }, 
    adsSuggestedForYouStarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 5,
        marginTop: 5,
    }, 
    adsSuggestedForYouGridText2: {
        fontSize: 19,
        color: '#86939e',
        marginLeft: 5,
        lineHeight: 20,
    }

})