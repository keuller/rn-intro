import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 2,
        paddingRight: 2,
        justifyContent: 'flex-start',
        flexDirection: 'column',
        width: '100%'
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 4,
        paddingBottom: 4,
    },
    input: {
        height: 40,
        fontSize: 28,
        width: '50%',
        backgroundColor: '#bee3f8',
        paddingTop: 2,
        paddingLeft: 4,
        paddingBottom: 2,
        textAlign: 'center',
        borderColor: '#3182ce',
        borderRadius: 3,
        borderWidth: 1
    },
    btnCalc: {
        backgroundColor: '#3182ce',
        paddingTop: 6,
        paddingBottom: 6,
        width: '100%',
        height: 38,
        borderRadius: 6
    },
    btnLabel: {
        fontSize: 18,
        color: '#fefefe',
        textAlign: 'center'
    },
    label: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#3182ce',
        textAlign: 'center',
        paddingTop: 20
    }
})

export default Styles;
