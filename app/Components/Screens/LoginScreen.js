import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import { auth } from "../../../firebase";


const Loginscreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(
            user => {
                if (user) {
                    navigation.navigate("Home")
                }
            }
        )

        return unsubscribe
    }, []);

    const clear = () => {
        setEmail('');
        setPassword('');
    }
    const handleSignUp = () => {
        auth.createUserWithEmailAndPassword(email.trim(), password.trim())
            .then(
                userCredentials => {
                    const user = userCredentials.user;
                    console.log(user.email);
                    clear();
                    alert('Data entered Successfully');
                }
            ).catch(error => alert(error.message))
    }

    const handleLogin = () => {
        auth.signInWithEmailAndPassword(email.trim(), password.trim())
            .then(
                userCredentials => {
                    const user = userCredentials.user;
                    console.log(user.email);
                    clear();
                    alert('Login Successfully');
                }
            ).catch(error => alert(error.message))
    }


    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <Text style={{ fontSize: 50 }}> Login </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Email'
                    style={{
                        backgroundColor: 'white',
                        width: 350,
                        height: 40,
                        borderRadius: 10,
                        marginBottom: 10,
                        paddingLeft: 10
                    }}
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    placeholder='Password'
                    style={{
                        backgroundColor: 'white',
                        width: 350,
                        height: 40,
                        borderRadius: 10,
                        paddingLeft: 10,
                        marginBottom: 10,
                    }}
                    value={password}
                    onChangeText={text => setPassword(text)}

                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={{
                        marginBottom: 10,
                        backgroundColor: 'black',
                        width: 200,
                        height: 50,
                        borderRadius: 50,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Text style={{ color: 'white' }}>Login</Text>

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handleSignUp}
                    style={{
                        marginBottom: 10,
                        backgroundColor: 'black',
                        width: 200,
                        height: 50,
                        borderRadius: 50,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Text style={{ color: 'white' }}>Register</Text>

                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
        marginTop: 20
    },
    inputContainer: {
        marginTop: 50
    }
})

export default Loginscreen;
