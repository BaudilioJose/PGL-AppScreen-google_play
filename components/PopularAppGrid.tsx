import { View, StyleSheet, ScrollView } from "react-native";
import { PopularAppItem } from "./PopularAppItem";

export function PopularAppGrid({popularAppsData}: {popularAppsData: any[]}) {
    return (
        
            <View style={styles.appsImageContainer}>
                {popularAppsData.map((app) => (
                    <PopularAppItem key={app.id} {...app} />
                ))}
            </View>
    )
}

const styles = StyleSheet.create({
    appsImageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
})