import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView} from 'react-native';
import { NavigateBtn } from '../../../Components/Buttons';

export default function Signup({navigation}) {
    const [email, setEmail] = useState(null)
    const [fname, setFname] = useState(null)
    const [lname, setLname] = useState(null)
    const [pass, setPass] = useState(null)

    const user = {
        email: email,
        fname: fname,
        lname: lname,
        pass: pass,
    }
    
    const condittion = email !== null && fname !== null && lname !== null && pass !== null && pass.length > 4

    const Submit = async () => {
        try {
            await AsyncStorage.setItem('user', JSON.stringify(user))
            console.log("User info is Stored");
            navigation.navigate('goal')
        } catch (e) {
            console.log("User info isn't stored");
        }
    }

  return (
    <ScrollView vertical={true} style={styles.container}>
        <View style={{alignItems:"center"}}>
            <Image source={require("../../../assets/logoPng.png")} style={{marginBottom: 30, width: 120, height: 120}} />
        </View>
        <Text style={styles.welcome}> Create your Account </Text>
        <View style={styles.info}>
            <Text style={styles.label}> Email Adress </Text>
            <TextInput 
                autoComplete='email'
                style={styles.textInput} 
                placeholderTextColor='white'
                onChangeText={e => setEmail(e)}
            />
        </View>
        <View style={styles.info}>
            <Text style={styles.label}> First Name </Text>
            <TextInput 
                autoComplete="name"
                style={styles.textInput} 
                placeholderTextColor='white'
                onChangeText={e => setFname(e)}
            />
        </View>
        <View style={styles.info}>
            <Text style={styles.label}> Last Name </Text>
            <TextInput 
                autoComplete='name-family'
                style={styles.textInput} 
                placeholderTextColor='white'
                onChangeText={e => setLname(e)}
            />
        </View>
        <View style={styles.info}>
            <Text style={styles.label}> Password </Text>
            <TextInput 
                autoComplete='password'
                secureTextEntry={true}
                style={styles.textInput} 
                placeholderTextColor='white'
                textContentType='password'
                onChangeText={e => setPass(e)}
            />
        </View>
        <View style={[styles.info, {marginBottom: 160}]}>
            {NavigateBtn("Create", Submit, condittion )}
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        padding: 20,
        paddingVertical: 40,
        paddingBottom: 100,
    },
    welcome: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 10,
    },
    info: {
        justifyContent: 'center',
        marginTop: 20,
    },
    label: {
        marginBottom: 6,
        fontSize: 16,
    },
    textInput: {
        borderWidth: 1,  
        borderColor: '#3FC495',
        fontSize: 16,
        borderRadius: 16,
        padding: 10,
        paddingHorizontal: 20,
    },
})