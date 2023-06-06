import React, { useState, useEffect } from 'react';
import { View, Text, Switch, CheckBox, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from "./styles";

export function Settings() {
    const [darkMode, setDarkMode] = useState(false);
    const [notifications, setNotifications] = useState(false);
    const [emailUpdates, setEmailUpdates] = useState(false);

    useEffect(() => {
        loadSettings();
    }, []);

    const loadSettings = async () => {
        try {
            const darkModeValue = await AsyncStorage.getItem('darkMode');
            const notificationsValue = await AsyncStorage.getItem('notifications');
            const emailUpdatesValue = await AsyncStorage.getItem('emailUpdates');

            setDarkMode(darkModeValue === 'true');
            setNotifications(notificationsValue === 'true');
            setEmailUpdates(emailUpdatesValue === 'true');
        } catch (error) {
            console.log(error);
        }
    };

    const saveSettings = async () => {
        try {
            await AsyncStorage.setItem('darkMode', darkMode.toString());
            await AsyncStorage.setItem('notifications', notifications.toString());
            await AsyncStorage.setItem('emailUpdates', emailUpdates.toString());
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Configurações de Usuário</Text>
            <View style={styles.option}>
                <Switch
                    value={darkMode}
                    onValueChange={setDarkMode}
                />
                <Text style={styles.optionText}>Modo Escuro</Text>
            </View>
            <View style={styles.option}>
                <CheckBox
                    value={notifications}
                    onValueChange={setNotifications}
                />
                <Text style={styles.optionText}>Habilitar Notificações de Usuário</Text>
            </View>
            <View style={styles.option}>
                <CheckBox
                    value={emailUpdates}
                    onValueChange={setEmailUpdates}
                />
                <Text style={styles.optionText}>Habilitar Atualizações de Novos Filmes por E-mail</Text>
            </View>
            <Button title="Salvar Configuração" onPress={saveSettings} />
        </View>
    );
}
