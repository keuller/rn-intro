import React from 'react';
import styles from './AppStyles';
import { View, Text } from 'react-native';
import { ContatosView } from './ContatosView'

const App = () => (
    <View contentContainerStyle={styles.scrollView}>
        <Text style={styles.titulo}>Ol&aacute; Turma P&oacute;s-Univem!</Text>
        <ContatosView />
    </View>
);

export default App;
