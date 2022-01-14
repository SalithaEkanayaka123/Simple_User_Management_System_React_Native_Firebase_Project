import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { auth } from "../../../firebase";


const Homescreen = () => {

    const navigation = useNavigation();

    const handleSignUp = () => {
        auth.signOut()
            .then(
                () => {
                    navigation.replace("Login");
                }
            )
            .catch(error => alert(error.message))
    }

    return (
        <View style={{ alignItems: 'center', }}>
            <Text style={{ fontSize: 50, marginTop: 20 }}> Home </Text>
            <View style={{ marginTop: 300 }}>
                <Text style={{ fontSize: 20, marginBottom: 20 }}> Email: {auth?.currentUser?.email}</Text>
                <TouchableOpacity
                    style={{ backgroundColor: 'blue', width: 300, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 20, alignSelf: 'center' }}
                    onPress={handleSignUp}
                >
                    <Text style={{ color: 'white', fontSize: 20 }}> Sign Out </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({})

export default Homescreen;
