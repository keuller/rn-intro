import React from 'react';
import styles from './AppStyles';
import { ScrollView, Text } from 'react-native';
import { ImcView } from './ImcView'

const App = () => (
    <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.titulo}>Ola Turma P&oacute;s-Univem!</Text>
        <ImcView />
    </ScrollView>
);

export default App;
