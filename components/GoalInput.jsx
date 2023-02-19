import { View, Button, StyleSheet, TextInput } from 'react-native'
import { useState } from 'react'

const GoalInput = ({ onAddGoal }) => {

    const [text, setText] = useState('')

    function goalInputHandler (text) {
        setText(text)
      }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                value={text}
                style={styles.textInput} 
                placeholder='Your course goal!' 
                onChangeText={goalInputHandler}
            />
            <Button 
                title='Add Goal' 
                onPress={() => {
                    onAddGoal(text)
                    setText('')
                }} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '80%',
        marginRight: 8,
        padding: 8
    },
})

export default GoalInput