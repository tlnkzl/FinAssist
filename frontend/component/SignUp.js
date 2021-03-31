import React from "react";
import { Text, View, TextInput, TouchableOpacity, Alert, StyleSheet, Image } from "react-native";
import { useForm, Controller } from "react-hook-form";

//TODO: After Signed Up navigate user to the either login our directly to the app??

const SignUp = ({navigation}) => {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data) => { 
    navigation.replace('Login')
    console.log(data);
  }

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/fin.png")}
      style={{ width: 50, height: 50, marginBottom: 20, }} />
      <Text style={styles.paragraph}>
        Ready for the experience register now
      </Text>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder='First Name'
            secureTextEntry={false}
            autoCapitalize="none"
            placeholderTextColor='white'
          />
        )}
        name="firstName"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.firstName && <Text>This is required.</Text>}

      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder='Last Name'
            secureTextEntry={false}
            autoCapitalize="none"
            placeholderTextColor='white'
          />
        )}
        name="lastName"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.lastName && <Text>This is required.</Text>}

      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder='Email'
            secureTextEntry={false}
            autoCapitalize="none"
            placeholderTextColor='white'
          />
        )}
        name="email"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.email && <Text>This is required.</Text>}

      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder='Password'
            secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor='white'
          />
        )}
        name="password"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.password && <Text>This is required.</Text>}

      <TouchableOpacity activeOpacity={0.8} style={styles.buttonContainer} onPress={() => {navigation.popToTop()}}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#466077'
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#657c94',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 5,
    fontSize: 18,
    fontWeight: '500',
  },
  logo: {
    height: 128,
    width: 128,
  },
  buttonContainer: {
    margin: 10,
    borderRadius: 5,
    elevation: 8,
    alignItems: "center",
    backgroundColor: '#37bec9',
    paddingVertical: 10,
    paddingHorizontal: 35
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    alignSelf: "center",
    textTransform: "uppercase"
  }
})

export default SignUp;
