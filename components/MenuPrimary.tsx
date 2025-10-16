import {Text, View, StyleSheet} from 'react-native';

const menuItems = ["For You", "Top Charts", "Children", "Other Devices", "Premium", "Categories"];

export function MenuPrimary() {
    return (
        <>
            {menuItems.map((item, index) => (
                <Text key={index} style={styles.menuText}>{item}</Text>
            ))}
        </>
    )
}

const styles = StyleSheet.create({
    menuText: {
        fontSize: 20,
        color: '#86939e',
        marginLeft: 10,
        marginRight: 30,
        marginTop: 10,
        fontWeight: 'bold',
      },
})
