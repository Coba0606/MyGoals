import { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const[enteredGoalText, setEnteredGoalText]= useState('')
  const [goals, setGoals] = useState([])


  
  function handleInputGoals(enteredText){
    console.log(enteredText)
    setEnteredGoalsText(enteredText)
  }
  function handleAddGoals(){
    console.log(enteredGoalsText)
    setGoals(() => [ goals, {text: enteredGoalsText,Key: Math.random().toString()}])
  }
  return (
    <View style={styles.container}>
       <View style={styles.inputcontainer}>
        <TextInput
        style={styles.textInput}
        placeholder='Your Goals'
        onChangeText={handleInputGoals}
        />
        <Button
        title='Add Goals'
        color={'#A3FFD6'}
        onPress={handleAddGoals}
        />
       </View>
       <View style={styles.goalsContainer}>
        <FlatList
        data={goals}
        renderItem={ (itemData)=>{
          <View style ={styles.goalsItem}>
          <Text style={styles.goalsText}>
            {itemData.item.text}
          </Text>
          </View>
        }}
        >
          </FlatList>

        
       </View>


       </View>

  );
 }


 const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#7BC9FF',
  },
  textinput: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    width: '80%',
    marginRight: 3,
    padding: 8,
    borderRadius: 5,
  },
  goalsItem: {
    margin: 0,
    padding: 0,
    borderRadius: 6,G,
    backgroundColor: '#8576FF',
    color: 'white',
  },
  goalText: {
    color: 'white',
  },
});


