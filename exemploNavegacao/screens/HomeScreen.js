import { View, Text, StyleSheet, Button } from 'react-native'

export default function HomeScreen({navigation}) {
    return (
        <View style={estilos.container}>
            <Text>Tela Inicial</Text>
            <View style={estilos.botao}>
                <Button 
                title='Ir para details'
                onPress={() => navigation.navigate('Details')}
                />
            </View>

            <View style={estilos.botao}>
                <Button 
                title='Ir para Sobre'
                onPress={() => navigation.navigate('About')}
                />
            </View>

            <View style={estilos.botao}>
                <Button 
                title='Ir para Produto'
                onPress={() => navigation.navigate('Produto')}
                />
            </View>
        </View>
    )
}


const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e5e5',
        alignItems: 'center',
        justifyContent: 'center'
    },
    botao: {
        width: '60%',
        marginVertical: 20,

    }
})