import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {fonts} from '../../utils/fonts';
import {MyInput, MyGap, MyButton} from '../../components';
import {colors} from '../../utils/colors';
import axios from 'axios';
import {showMessage} from 'react-native-flash-message';
import LottieView from 'lottie-react-native';

export default function Edit({navigation, route}) {
  //   console.log();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(route.params);

  const simpan = () => {
    setLoading(true);
    console.log(data);
    axios.post('https://zavalabs.com/api/beton_edit.php', data).then(res => {
      console.log(res);
      setTimeout(() => {
        setLoading(false);
        navigation.navigate('Success2', {
          messege: 'Data berhasil diedit',
        });
        setData({
          nama: null,
          tc: null,
          ta: null,
          r: null,
          v: null,
        });
      }, 1000);
    });
  };
  return (
    <ImageBackground
      source={require('../../assets/back-beton.png')}
      style={{
        flex: 1,
        padding: 10,
      }}>
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: fonts.secondary[600],
            }}>
            PLASTIC SHRINKAGE CRACKING
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: fonts.secondary[400],
            }}>
            Bleed Water Evaporation Nomogradph Formula
          </Text>
        </View>

        <MyGap jarak={10} />
        <MyInput
          label="Air Temperature (deg C)"
          keyboardType="number"
          iconname="thermometer"
          value={data.tc}
          onChangeText={value =>
            setData({
              ...data,
              tc: value,
            })
          }
        />

        <MyGap jarak={10} />
        <MyInput
          label="Concrete Temperature (deg C)"
          keyboardType="number"
          iconname="thermometer-outline"
          value={data.ta}
          onChangeText={value =>
            setData({
              ...data,
              ta: value,
            })
          }
        />
        <MyGap jarak={10} />
        <MyInput
          label="Relative Humidity (%)"
          keyboardType="number"
          iconname="cloudy-outline"
          value={data.r}
          onChangeText={value =>
            setData({
              ...data,
              r: value,
            })
          }
        />
        <MyGap jarak={10} />
        <MyInput
          label="Wind Velocity (kph)"
          keyboardType="number"
          iconname="pulse"
          value={data.v}
          onChangeText={value =>
            setData({
              ...data,
              v: value,
            })
          }
        />
        <MyGap jarak={10} />
        <MyInput
          label="Keterangan"
          iconname="newspaper-outline"
          value={data.nama}
          onChangeText={value =>
            setData({
              ...data,
              nama: value,
            })
          }
        />
        <MyGap jarak={10} />
        <MyButton
          warna={colors.primary}
          title="SIMPAN PERUBAHAN"
          Icons="log-in"
          onPress={simpan}
        />
      </ScrollView>
      {loading && (
        <LottieView
          source={require('../../assets/animation.json')}
          autoPlay
          loop
          style={{
            flex: 1,
            backgroundColor: colors.white,
          }}
        />
      )}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});
