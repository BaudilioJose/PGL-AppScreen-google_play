import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#121212',
      },
      container: {
        backgroundColor: '#121212',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
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
      appsGridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
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
})