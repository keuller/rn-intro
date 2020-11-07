import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    contatoCard: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#c3dafe',
        marginTop: 2,
        borderColor: '#5a67d8',
        borderWidth: 1,
        borderRadius: 3,
        paddingTop: 5,
        paddingLeft:6,
        paddingBottom: 5,
        width: '100%'
    },
    infoBlock: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 10
    },
    texto: {
        color: '#4c51bf',
        fontSize: 14,
    },
    icon: {
        width: 42,
        height: 42,
        borderRadius: 50,
    }
})

export default Styles;
