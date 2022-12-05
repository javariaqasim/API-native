import {View, Text, TextInput,TouchableOpacity} from 'react-native';
import styles from './styling';
function Login() {
  return (
    <>
      <View style={[styles.bgdark, styles.h100, styles.flexCenter,styles.p3]}>
        <View style={[styles.w100, styles.my2]}>
          <Text style={[styles.textPrimary, styles.fs1,styles.textCenter]}>Login</Text>
        </View>
        <View style={[styles.w100, styles.my2]}>
          <TextInput placeholder="Email" style={styles.input} />
        </View>
        <View style={[styles.w100, styles.my2]}>
          <TextInput placeholder="Password" style={styles.input} />
        </View>
        <View style={[styles.w100, styles.my2]}>
            <TouchableOpacity style={styles.btn}>
                <Text style={[styles.textWhite,styles.textCenter]}>Login</Text>
            </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
export default Login;
