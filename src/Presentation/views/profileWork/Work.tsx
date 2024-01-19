import { View, Text, Button, Image, Pressable} from 'react-native'
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../navigator/MainStackNavigator'
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import useViewModel from './ViewModel'
import styles from './Styles'
import { RoundedButton } from '../../components/RoundedButton'


export const WorkScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
  const { removeUserSession, user } = useViewModel()
  useEffect(() => {
    if(user.idUsuario === ''){
      navigation.navigate('HomeScreen');
    }
  }, [user])
  return (
    <View style = { styles.container }>
        <Image
            source={ require('../../../../assets/cafe-backg.jpg') } 
            style={ styles.imageBackground }
        />
        <Pressable 
            style={ styles.logout }
            onPress={() => {
              removeUserSession();
            }}>
            <Image
                  source={ require('../../../../assets/apagado.png') } 
                  style={ styles.logoutImage }
            />
        </Pressable>
        <View style = {styles.form}>
            <View style={ styles.formInfo }>
                <Image
                  source={ require('../../../../assets/clienteu.png')}
                  style={ styles.formImage }
                />
                <View style={ styles.formContent }>
                  <Text>{ user?.nombre }</Text>
                  <Text style={ styles.formTextDescription }>Nombre del usuario</Text>
                </View>
            </View>
            <View style={ {...styles.formInfo, marginTop: 25} }>
                <Image
                  source={ require('../../../../assets/email.png')}
                  style={ styles.formImage }
                />
                <View style={ styles.formContent }>
                  <Text>{ user?.correo }</Text>
                  <Text style={ styles.formTextDescription }>Correo electronico</Text>
                </View>
            </View>
            <View style={ {...styles.formInfo, marginTop: 25, marginBottom: 70} }>
                <Image
                  source={ require('../../../../assets/phone.png')}
                  style={ styles.formImage }
                />
                <View style={ styles.formContent }>
                  <Text>{ user?.num_telefono }</Text>
                  <Text style={ styles.formTextDescription }>Telefono</Text>
                </View>
            </View>
            {/* <RoundedButton
              onPress={() => {
                navigation.navigate('ProfileUpdateScreen', { user: user! })
              }}
              text='ACTUALIZAR INFORMACION' /> */}
        </View>
    </View>
  )
} 