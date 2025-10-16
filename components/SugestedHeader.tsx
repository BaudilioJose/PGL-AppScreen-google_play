import { Text, View, StyleSheet } from 'react-native';
import { Icon } from '@rneui/base';

export function SugestedHeader() {
    return (
        <>
            <Text style={styles.adsSuggestedForYouText}>Ads</Text>
            <Text style={styles.adsSuggestedForYouText2}>Suggested for you</Text>
            <Icon name='more-vert' type='material' size={24} color='#86939e' />
        </>
    )
}

const styles = StyleSheet.create({
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
})