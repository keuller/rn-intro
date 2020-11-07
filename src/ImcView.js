import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import Styles from './ImcViewStyles'
import tabelaImc from './imc'

function calculaImc(peso, altura) {
    let imc = (peso / (altura * altura))
    return imc.toFixed(2)
}

function statusImc(valor) {
    let items = tabelaImc.filter(item => item.intervalo.minimo <= valor && item.intervalo.maximo >= valor)
    if (items.length == 1) {
        return items[0].status
    }
    return 'Status invalido.'
}

function isValid(peso, altura) {
    let pesoValido = (peso > 40 && peso != '')
    let alturaValida = (altura > 1 && altura != '')
    return (pesoValido && alturaValida)
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
        if (isValid(state.peso, state.altura)) {
            let result = calculaImc(state.peso, state.altura)        
            let status = statusImc(result)
            setState({ ...state, valorImc: result, statusImc: status })
            return
        }

        Alert.alert("IMC", "Valores incorretos.", [
            { text: 'OK', onPress: () => {}}
        ], { cancelable: false })
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
            
            <View style={Styles.container}>
                <TouchableOpacity onPress={onCalc} style={Styles.btnCalc}>
                    <Text style={Styles.btnLabel}>Calcular</Text>
                </TouchableOpacity>

                <Text style={Styles.label}>{state.valorImc}</Text>
                <Text style={Styles.label}>{state.statusImc}</Text>
            </View>
        </View>
    )
}
