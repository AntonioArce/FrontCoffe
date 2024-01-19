import { StyleSheet } from "react-native";

const RegisterStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3E5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    width: '100%',
    height: '100%',
  },
  login: {
    backgroundColor: 'white',
    width: '85%',
    height: '78%',
    position: 'absolute',
    padding: 45,
    justifyContent: 'center',
    /*       borderWidth: 1 */
  },
  loginTitle: {
    fontWeight: 'bold',
    fontSize: 28,
    /* paddingBottom: 20, */
  },
  loginForm: {
    flex: 1,
    flexDirection: 'column',
  },
  loginFormTitles: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 5,
    paddingTop: 10,
  },
  loginFormInputs: {
    paddingBottom: 1,
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  eye: {
    width: 20,
    height: 20,
    marginLeft: 235
  },
  register: {
    flexDirection: 'row'
  }
});

export default RegisterStyles