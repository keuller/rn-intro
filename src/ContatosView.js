import React, { useState } from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import Styles from './ContatosViewStyles'
import contatos from './data/contatos'
import ContactFormView from './ContactFormView'

function ContactCard(props) {
    return (
        <View style={Styles.contatoCard}>
            <Image source={require("./img/john.jpg")} style={Styles.icon} />
            <View style={Styles.infoBlock}>
                <Text style={Styles.texto}>{props.data.nome}</Text>
                <Text style={Styles.textoEmail}>{props.data.email}</Text>
            </View>
        </View>
    )
}

function ContactListView({ addAction }) {
    return (
        <View>
            <TouchableOpacity style={Styles.btnAdd} onPress={addAction}>
                <Text style={Styles.btnAddText}>Adicionar</Text>
            </TouchableOpacity>

            <FlatList data={contatos} 
                style={{ paddingLeft: 2, paddingRight: 2 }}
                renderItem={({ item }) => <ContactCard data={item} />}
            />
        </View>
    )
}

export function ContatosView() {
    const [create, setCreate] = useState(false)

    const onCreate = () => setCreate(true);
    const onCancel = () => setCreate(false);

    if (create) return (<ContactFormView cancelAction={onCancel} />)
    return (<ContactListView addAction={onCreate} />)
}
