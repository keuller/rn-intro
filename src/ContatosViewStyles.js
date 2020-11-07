import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    contatoCard: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#ebf4ff',
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
        color: '#434190',
        fontSize: 14,
    },
    textoEmail: {
        color: '#7f9cf5',
        fontSize: 12,
    },
    icon: {
        width: 42,
        height: 42,
        borderRadius: 50,
    },
    btnAdd: {
        backgroundColor: '#6495ed',
        padding: 5,
        borderRadius: 5,
        marginLeft: 2,
        marginRight: 2,
    },
    btnAddText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default Styles;
