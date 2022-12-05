import {View,Text} from 'react-native'

function Product ({navigation,route}){

    console.log(route.params)

    return <>
    <View>
        <Text>Product</Text>
    </View>
    </>
}
export default Product