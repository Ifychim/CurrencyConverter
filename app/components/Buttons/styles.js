import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        alignItems: 'center'
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        marginRight: 11,
        width: 20,
    },
    text : {
        color: '$white',
        fontSize: 13,
        fontWeight: '300',
        paddingVertical: 20
    }
});