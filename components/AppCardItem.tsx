import {View, Image, Text, StyleSheet} from 'react-native';
import {Icon} from '@rneui/base';

export function AppCardItem() {
    return (
        <View style={styles.appContainer}>
            <Image source={{ uri: 'https://play-lh.googleusercontent.com/ResrWBDXfRegdQDSA2MP6bxiYlyfucHymWBW4yy2M7YetU3SCCZuLmFhwpeVFMFGQA' }} style={styles.appImage} />
            <View style={styles.textContainer}>
                <Text 
                    style={styles.appText}
                    numberOfLines={1}
                    ellipsizeMode='tail'>
                    Samsung S23 Ultra
                </Text>
                <View style={styles.starContainer}>
                    <Text style={styles.starText}>4.6</Text>
                    <Icon name='star' type='font-awesome' size={13} color='#86939e' />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    appContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        marginBottom: 15,
    },
    appImage: {
        width: 80,
        height: 80,
        borderRadius: 20,
        marginRight: 10,
    },
    textContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flex: 1,
    },
    appText: {
        fontSize: 14,
        color: '#86939e',
        textAlign: 'left',
        lineHeight: 18,
        marginBottom: 5,
    }, 
    starContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }, 
    starText: {
        fontSize: 13,
        color: '#86939e',
        marginRight: 3,
        lineHeight: 16,
    }

})