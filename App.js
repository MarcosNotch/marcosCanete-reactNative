
import { useState, useRef } from 'react';
import { StyleSheet, Text, View , TextInput, Image,Button, FlatList, TouchableOpacity, Modal, Keyboard} from 'react-native';
import InputList from './components/input';
import TopHeader from './components/header';
import Tarea from './components/tarea';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181a20',
    justifyContent: "center",
    alignItems: "center"
  },

  itemContainer:{
    flex: 1,
    backgroundColor: 'red',
    justifyContent: "space-around",
    alignItems: "center"
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  arriba:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  itemList: {
    flex: 1,
    marginVertical:20,
    marginHorizontal: 20 
  },


  flatListContainer: {
    flex:3,
    width: "100%",
    flexDirection: "row",
  },

  modalContainer: {
   backgroundColor: '#181a20',
   flex: 1,
   justifyContent: "center",
   alignItems: "center"
  },

  questionText: {
    color: "#FFFF"
  },

  valueText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFFF",
    alignSelf: 'center',
    marginTop: 10
  }
  ,botonContainer: {
    flexDirection: "row",
    marginTop: 10
  } ,
     appButtonContainer: {
    backgroundColor: "#003049",
    borderRadius: 10,
    width: "40%",
    height: 40,
    justifyContent:"center",
    alignItems: "center",
    marginLeft: 10,
  },      appButtonText: {
    fontSize: 12,
    color: "#fdf0d5",
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center"
  }

});




export default function App() {

  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedTask, setSelectedTask] = useState(null)

  let referencia = useRef(null)

  const handleChangeText = (text) => {
    setTask(text)
  }


  const limpiarTexto = () => {
    setTasks((prevTasks) => [...prevTasks, {id: Date.now(), value: task}])
    setTask("")
    Keyboard.dismiss()
  }

  const showModal = (id) => {

    setModalVisible(true)
    setSelectedTask(tasks.find(e => e.id === id))

  } 

  const closeModal = () => {

    setModalVisible(false)

  } 

  const eliminarTarea = () =>{
    setTasks(tasks.filter(e => e.id !== selectedTask.id))
    closeModal()
  }


  const renderItem = ({item}) =>
  {
    return(
     <Tarea id={item.id} showModal={showModal} valor={item.value}/>
     )
  }
  
  return (
    <View style={styles.container}>
      <TopHeader />
        <InputList handleChangeText={handleChangeText} task={task} limpiarTexto={limpiarTexto}/>
      <View style={styles.flatListContainer}>
        <FlatList style={styles.itemList} data={tasks} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
      </View>
      <Modal visible={modalVisible} animationType='slide' >
        <View style={styles.modalContainer}>
        <View onPress={closeModal}>
          <Text style={styles.questionText}>Estas seguro de que quieres eliminar</Text>
          <Text style={styles.valueText}>{selectedTask?.value}</Text>
       </View>
       <View style={styles.botonContainer}>
         <TouchableOpacity style={styles.appButtonContainer} onPress={eliminarTarea}>
            <Text style={styles.appButtonText}>Eliminar</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.appButtonContainer} onPress={closeModal}>
            <Text style={styles.appButtonText}>Cancelar</Text>
         </TouchableOpacity>
       </View>
        </View>
      </Modal>
    </View>
  );
}