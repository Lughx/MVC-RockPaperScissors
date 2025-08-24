import { StyleSheet, View } from 'react-native';
import { Button, Stack as MaterialStack, Text, TextInput } from "@react-native-material/core";
import { useOptionHook } from '../hooks/useOption.hook.js';

export function Playground() {
    const { useOption, result } = useOptionHook()
    return (
        <MaterialStack>
            <View style={styles.allContainer}>
                <Text style={styles.textInstruction}>Select a option to play:</Text>
                <View style={styles.buttonContainer}>
                    <Button title="ROCK" style={styles.button} onPress={() => useOption(1)} />
                    <Button title="PAPER" style={styles.button} onPress={() => useOption(2)} />
                    <Button title="SCISSORS" style={styles.button} onPress={() => useOption(3)} />
                </View>
                <Text style={styles.textResult}>{result}</Text>
            </View>
        </MaterialStack>
    )
}

const styles = StyleSheet.create({
    allContainer: {
        justifyContent: "center",
        marginTop: "40px",
        verticalAlign: "middle"
    },
    textInstruction: {
        textAlign: "center",
        fontSize: "22.5px",
        fontWeight: "500"
    },
    textResult: {
        marginTop: "20px",
        textAlign: "center",
        fontSize: "22.5px",
        fontWeight: "500"
    },
    buttonContainer: {
        flex: 1,
        marginTop: "20px",
        justifyContent: "center",
        flexDirection: "row",
        width: "100%",
    },
    button: {
        marginLeft: "20px",
        backgroundColor: "#57d1b7ff",
        width: "100px"
    }
});