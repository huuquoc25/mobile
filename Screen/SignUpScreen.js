import { TextInput,StyleSheet, View, Button, Text } from "react-native";

export function SignUpScreen ({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.text0}>
                CREATE NEW ACCOUNT
            </Text>
            <TextInput style={styles.input} value="" placeholder="Full Name"/>
            <TextInput style={styles.input} value="" placeholder="Phone Number"/>
            <TextInput style={styles.input} value="" placeholder="Email Address"/>
            <TextInput style={styles.input} value="" placeholder="Password" secureTextEntry={true}/>
            <View style={styles.btn}>
                <Button title="Sign Up" color={"#344D91"} />
            </View>
            
        </View>
    );};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        backgroundColor: "#E5E5E5",

    },
    text0:{
        fontSize:20,
        color:"#5EA33A",
        marginBottom:50,
        paddingLeft:20
    },
    text1:{
        fontSize:17,
        color:"#4A4A4A",
        marginBottom:10,
        textAlign:'center'
    },
    input:{
        backgroundColor: "white",
        width:323,
        height:53,
        paddingLeft:30,
        marginTop:30,
        borderRadius: 999,
        marginHorizontal:40 
    },
    btn:{
        
        marginTop: 50,
        marginHorizontal: 80,
        borderRadius: 80,
        overflow: "hidden",
        marginBottom:50
        
    },
    
});