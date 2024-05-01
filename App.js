import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';

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
  paddingHorizontal:20,
},
inputcontainer:{
  flex:1,
  flexDirection:'row',
  justifyContent:'center',
  alignitems:'center',
  marginbotton:20,
  borderbottonwidth:1,
  borderbottonColor:'#7BC9FF',
   },
   btnGoals:{
    borderRadius:20,
    backgroundcolor: #CCCCCC
   },
   textinput: {
    borderwidth:1,
    bordercolor:'#CCCCCC',
    width:'80%',
    marginRight:3,
    padding:3,
    borderRadius:5,

   }


   }

}

const styles = StyleSheet.create({
});



