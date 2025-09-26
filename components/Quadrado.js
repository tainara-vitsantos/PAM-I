import { View, StyleSheet } from 'react-native'

const Quadrado = (props) => {
    return (
        <View style={{
            width: props.lado || 50,
            height: props.lado || 50,
            backgroundColor: props.cor || "black"
        }}>
        </View>
    )
}

export default Quadrado