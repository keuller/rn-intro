import React from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import Styles from './ContatosViewStyles'
import contatos from './data/contatos'

function ContactCard(props) {
    return (
        <View style={Styles.contatoCard}>
            <Image source={require("./img/abdoral.jpg")} style={Styles.icon} />
            <View style={Styles.infoBlock}>
                <Text style={Styles.texto}>{props.data.nome}</Text>
                <Text style={Styles.texto}>{props.data.email}</Text>
            </View>
        </View>
    )
}

export function ContatosView() {
    return (
        <View>
            <FlatList data={contatos} 
                renderItem={({ item }) => <ContactCard data={item} />}
            />
        </View>
    )
}
