import { StyleSheet } from 'react-native';
export default styles = StyleSheet.create({
  container: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    flexDirection: 'row'
},
image: {
    width: 70,
    height: 70,
    borderRadius: 10
},
titleContainer: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center'
},
title: {
    flexWrap: 'wrap',
    marginHorizontal: 8,
    marginRight:50,
}
    
  });