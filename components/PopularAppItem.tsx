import { View, StyleSheet, Image, Text } from "react-native";
import { Icon } from "@rneui/base";

type PopularAppItemProps = {

    image: string;
    title: string;
    rating: number;
}
export function PopularAppItem({image, title, rating}: PopularAppItemProps) {
        return(
            <View style={styles.appImageContainer}>
                <Image source={{ uri: image }} style={styles.appImage} />
                <Text 
                    style={styles.appImageText}
                    numberOfLines={2}
                    ellipsizeMode='tail'
                >{title}</Text>
                <View style={styles.appImageStarContainer}>
                <Text style={styles.appImageStarText}>{rating}</Text>
                <Icon style={styles.appIconStar} name='star' type='font-awesome' size={20} color='#86939e' />
                </View>
            </View>
        )
}

const styles = StyleSheet.create({
    appImageContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: 132,
      },
    appImage: {
      width: 100,
      height: 100,
      borderRadius: 30,
      margin: 10,
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
    appImageStarText: {
        fontSize: 19,
        color: '#86939e',
        marginLeft: 5,
        lineHeight: 20,
    },
    appIconStar: {
        paddingLeft: 5,
    },
})