import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import styles from './styling';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

function Home({navigation}) {
  const [productList, setProductList] = useState([]);
  let getData = () => {
    let api = 'https://fakestoreapi.com/products';
    axios
      .get(api)
      .then(res => {
        console.log(res.data);
        setProductList(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  let move = (e)=>{
    navigation.navigate('Product',e)
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <View style={[styles.bgLight, styles.h100]}>
        <View
          style={[
            styles.bgWhite,
            styles.p2,
            styles.py3,
            {borderBottomRightRadius: 15, flex: 1},
          ]}>
          <View>
            <Text style={[styles.textPrimary, styles.fs2]}>
             API PRODUCTS:
            </Text>
            <View style={[styles.flexRow, styles.py2]}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.textWhite}>See More</Text>
              </TouchableOpacity>
              {/* <Icon color={styles._dark} size={30} name="calendar-today" /> */}
            </View>
          </View>
        </View>
        <View style={[{flex: 6}]}>
          <ScrollView>
            <View
              style={[
                styles.w100,
                {height: '100%'},
                styles.flexRow,
                styles.flexWrap,
                styles.justifyContentBetween,
              ]}>
              {productList &&
                productList.map((e, i) => (
                  <TouchableOpacity
                  onPress={()=>move(e)}
                    style={[
                      styles.bgWhite,
                      styles.m1,
                      styles.rounded,
                      {width: '28%'},
                    ]}
                    key={i}>
                    <Image
                      resizeMode="cover"
                      style={[{width: '100%', height: 100}, styles.rounded]}
                      source={{uri: e.image}}
                    />
                    <View style={styles.p1}>
                      <Text numberOfLines={1}>{e.title}</Text>
                      <Text style={[styles.textDanger]}>
                        Rs:{e.price}/-
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
}
export default Home;
