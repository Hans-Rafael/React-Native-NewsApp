import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  image: {    
    width: 315,
    height: 200,
    borderRadius: 15,
    borderColor: "#F3D403", //yellow
    borderWidth: 5,
    objectFit: 'cover',
    marginLeft:2,
    objectPosition:' bottom',
  },
  container: {
    flex: 1,
    backgroundColor: "#353936",
    //alignItems: "center",
    //justifyContent: "center",
    backgroundColor:"black",
    
  },
  title: {
    color: "#850707", //color rojo
    fontWeight: "bold",
    fontSize: 20,
    fontStyle: "normal",
    backgroundColor: "orange",
    textAlign: "center",
    marginBottom: 25,
    marginTop:10,
    borderRadius: 10,
  },
  link:{
    color: '#0000EE',
    fontWeight: "bold",
    fontSize: 20,
    fontStyle: "normal",
    backgroundColor: "orange",
    textAlign: "center",
    marginBottom: 25,
    borderRadius: 10,
  }
});
