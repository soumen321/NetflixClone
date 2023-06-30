import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    image:{
        width:'100%',
        aspectRatio:16/9,
        resizeMode:'cover'
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:'#fff',
    },
    match:{
        color:'#59d467',
        fontWeight:'bold',
        marginRight:5
    },
    year:{
        color:'#757575',
        marginRight:5
    },
    ageContainer:{
        backgroundColor:'#e6e229',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:2,
        paddingHorizontal:5,
        marginRight:5
    },
    age:{
        color:'black',
        fontWeight:'bold'
    },
    playButton:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        borderRadius:3,
        padding:5,
        marginVertical:5
     },
     playButtonText:{       
        fontWeight:'bold',
        fontSize:16,
        color:'black'
     },
     downloadButton:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#2b2b2b',
        borderRadius:3,
        padding:5,
        marginVertical:5
     },
     downloadButtonText:{
        fontWeight:'bold',
        fontSize:16,
        color:'white'
     }

})
export default styles;