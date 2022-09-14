import { StyleSheet, View ,Image} from 'react-native';

const styles = StyleSheet.create({


    headerContainer: {
        justifyContent: "center",
        alignContent: "center",
        flex: 1
    },
    tinyLogo: {
        width: 200,
        height: 75  
      }

})



export default function TopHeader(){
    

    return(

        <View style={styles.headerContainer}>
              <Image
        style={styles.tinyLogo}
        source={require("./E-Bets2.png")}/>
        </View>


    )
}