import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';


const styles = StyleSheet.create({


    detalle: {
        flex:1,
        flexDirection: "row",
        marginTop: 20,
        justifyContent: "center"
      },
      textDetail: {
        color: "#a2d2ff",
        marginRight: 20,
      },

      deleteButton: {
        width: 30,
        height: 30,
        backgroundColor: "#be32f5",
        borderRadius: 5,
        justifyContent: "center",
      },

      deleteText: {
        color: "#ffff",
        textAlign: "center"
      },
      
})



export default function Tarea({valor, id, showModal}){


    return(
        <View style={styles.detalle}>
          <Text style={styles.textDetail}>{valor}</Text>
          <TouchableOpacity onPress={() =>showModal(id)} style={styles.deleteButton}>
             <Text style={styles.deleteText}>X</Text>
          </TouchableOpacity>
        </View>
        )
}