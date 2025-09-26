import { StyleSheet, View } from 'react-native';
import Quadrado from './components/Quadrado';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Quadrado cor="#490a3d" lado={50} />
        <Quadrado cor="#bd1550" lado={50} />
        <Quadrado cor="#e97f02" lado={50} />
        <Quadrado cor="#f8ca00" lado={50} />
        <Quadrado cor="#8a9b0f" lado={50} />
      </View>

      <View style={styles.principal}>
        <Quadrado cor="#490a3d" lado={20} />
        <Quadrado cor="#bd1550" lado={40} />
        <Quadrado cor="#e97f02" lado={60} />
        <Quadrado cor="#f8ca00" lado={80} />
        <Quadrado cor="#8a9b0f" lado={100} />
      </View>

      <View style={styles.rodape}>
        <Quadrado cor="#490a3d" lado={20} />
        <Quadrado cor="#bd1550" lado={40} />
        <Quadrado cor="#e97f02" lado={60} />
        <Quadrado cor="#f8ca00" lado={80} />
        <Quadrado cor="#8a9b0f" lado={100} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'baseline',
    justifyContent: 'flex-start',
  },
  cabecalho: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    backgroundColor: 'green'
  },
  principal: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'red',
  },
  rodape: {
    flex: 1,
    width: '100%',
    backgroundColor: 'yellow',
  },
});
