import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: "#353936",
        alignItems: "center",
        justifyContent: "center",
      },
      
      title: {
        color: "#850707", //color rojo
        fontWeight: "bold",
        fontSize: 25,
        fontStyle:'normal',
        backgroundColor:"orange",
        textAlign: 'center',
        width:300,
        borderRadius:10,

      },
      description:{
        fontSize:20,
        textAlign: 'center',
        fontStyle:'italic',
        color:'#EDF4F4'
      }
})