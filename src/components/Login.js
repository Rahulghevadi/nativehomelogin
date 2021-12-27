import React from 'react'
import { View, TextInput, SafeAreaView, StyleSheet, Button } from 'react-native'


export default function Login(navigation) {
    return (
        <SafeAreaView>
            <View>
                <TextInput
                    style={styles.input}
                    textContentType="emailAddress"
                    placeholder="enter email"
                />
            </View>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="enter password"
                />
            </View>
            <View >
                <Button mode='outlined' onPress={() => navigation.navigate('Signup')}>
                    Login
                </Button>
            </View>
        </SafeAreaView>
    )

}
const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 300,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 20,
        marginBottom: 20,
    },
    container: {
        paddingTop: 30,
    },
    row2: {
        borderRadius: 20,
    },
});



