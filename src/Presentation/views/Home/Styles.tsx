import { StyleSheet } from "react-native";

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    width: '100%',
    height: '100%',
  },
  login: {
    backgroundColor: 'white',
    width: '82%',
    height: 400,
    position: 'absolute',
    padding: 40,
    justifyContent: 'center',
  },
  loginTitle: {
    fontWeight: 'bold',
    fontSize: 25,
    paddingBottom: 5,
  },
  loginForm: {
    flex: 1,
    flexDirection: 'column',
  },
  loginFormTitles: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 0,
  },
  loginFormInputs: {
    paddingBottom: 0,
    fontSize: 15
  },
  loginFormLinks: {
    top: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 0
  },
  loginFormLinks1: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25
  },
  loginFormLinkIn: {
    paddingRight: 10,
    fontSize: 18
  },
  loginFormRegister: {
    fontStyle: 'italic',
    color: 'blue',
    /*       borderBottomWidth: 1, */
    borderBottomColor: 'blue',
    fontWeight: 'bold',
    fontSize: 15
  },
  eye: {
    width: 25,
    height: 25,
    marginLeft: 230
  },
});

export default HomeStyles