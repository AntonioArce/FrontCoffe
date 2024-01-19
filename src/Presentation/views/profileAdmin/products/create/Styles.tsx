import { StyleSheet } from "react-native";

const RegisterProduct = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'gray',
  },
  form: {
    width: '100%',
    height: '65%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,

  },
  logoContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: '5%',
    alignItems: 'center',
  },
  logoImage: {
    width: 150,
    height: 150,
  },
  logoText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
})

export default RegisterProduct;