import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function ContactFormView({ saveAction, cancelAction }) {
    return (
        <View>
            <Text> Adicionar Contato </Text>

            <View>
                <TouchableOpacity onPress={saveAction}>
                    <Text>Salvar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={cancelAction}>
                    <Text>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
