import React from 'react';
import styles from './AppStyles';
import { ScrollView, View, Text } from 'react-native';

const App = () => (
    <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.titulo}>Ola Turma P&oacute;s-Univem!</Text>
    </ScrollView>
);

export default App;
