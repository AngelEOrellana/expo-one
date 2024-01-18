import { StyleSheet, View, Pressable, Text } from "react-native";

export default function Button ({ label }) {
    return (
        <View style={StyleSheet.buttonContainer}>
           <Pressable style={styles.button} onPress={() => alert ('You pressed a button.')}>
            <Text style={StyleSheet.buttonLabel}>{label}</Text>
           </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer:{
        with:320,
        height: 68,
        marginHorozontal:20,
        alignItems:'center',
        justifyContent:'center',
        padding:3,
    },

    button:{
        borderRadius:10,
        with:100,
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
    },
    buttonIcon:{
        paddingRight:8,
    },
    buttonLabel:{
        color:'#fff',
        fontSize:16,
    },
});



