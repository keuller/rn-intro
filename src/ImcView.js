import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import Styles from './ImcViewStyles'

function calculaImc(peso, altura) {
    let imc = (peso / (altura * altura))
    return imc.toFixed(2)
}

export function ImcView() {
    const [state, setState] = useState({
        peso: 0,
        altura: 0,
        valorImc: '0.00',
        statusImc: 'N/A'
    })

    const update = (field, value) => {
        setState({ ...state, [field]: value })
    }

    const onCalc = () => {
        let result = calculaImc(state.peso, state.altura)
        update('valorImc', result)
    }

    return (
        <View style={Styles.container}>
            <View style={Styles.inputContainer}>
                <TextInput placeholder="Peso" 
                    style={Styles.input} 
                    keyboardType="numeric" 
                    onChangeText={(v) => update('peso', v)} />
                    
                <TextInput placeholder="Altura" 
                    style={Styles.input} 
                    keyboardType="numeric"
                    onChangeText={(v) => update('altura', v)} />
            </View>
            
            <TouchableOpacity onPress={onCalc} style={Styles.btnCalc}>
                <Text style={Styles.btnLabel}>Calcular</Text>
            </TouchableOpacity>

            <View>
                <Text style={Styles.label}>{state.valorImc}</Text>
                <Text style={Styles.label}>{state.statusImc}</Text>
            </View>
        </View>
    )
}
