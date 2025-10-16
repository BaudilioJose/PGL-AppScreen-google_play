import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from '@rneui/base';

export function Menu() {
    return (
        <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.menuItem}>
                <Icon name='gamepad' type='font-awesome' size={24} color='#86939e' />
                <Text style={styles.menuText}>Games</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
                <Icon name='th-large' type='font-awesome' size={24} color='#86939e' />
                <Text style={styles.menuText}>Apps</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
                <Icon name='book' type='font-awesome' size={24} color='#86939e' />
                <Text style={styles.menuText}>Books</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#1e1e1e',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#2A2A2A',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    menuItem: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuText: {
        fontSize: 12,
        color: '#86939e',
        marginTop: 5,
    },
});