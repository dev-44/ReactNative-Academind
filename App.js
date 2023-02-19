import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {

  const [goals, setGoals] = useState([])

  function addGoalHandler (text) {
    setGoals(prevState => [...prevState, {text, key: Math.random().toString()}])
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />

      <View style={styles.goalsContainer}>
        <FlatList data={goals} renderItem={itemData => {
          return <GoalItem text={itemData.item.text}/>
        }}>

        </FlatList>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
  },
  goalsContainer: {
    flex: 5
  },

});
