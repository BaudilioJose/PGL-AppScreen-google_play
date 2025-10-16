import {Text, StyleSheet} from 'react-native';
import { Icon } from '@rneui/base';

export function PopularSection() {
    return (
        <>
            <Text style={styles.popularAppsText}>Popular Apps</Text>
            <Icon style={styles.popularAppsIcon} name='arrow-right' type='font-awesome' size={20} color='#86939e' />
        </>
    )
}

const styles = StyleSheet.create({
    popularAppsText: {
        fontSize: 20,
        color: '#86939e',
        marginLeft: 10,
        marginRight: 10,
      },
      popularAppsIcon: {
        marginRight: 15
      },
})