import React from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity, StatusBar, ScrollView, Alert, Dimensions, Image, TouchableHighlight } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons'



const { width } = Dimensions.get("screen");
const cardWidth = width / 2 - 20;



const LIST = [
  {
    id: '1',
    title: 'Chum churum Soju',
    price: 'Php 135.00',
    image: require('../img/drinks/1.png')
  },
  {
    id: '2',
    title: 'Korean Banana Milk',
    price: 'Php 55.00',
    image: require('../img/drinks/2.png')
  },
  {
    id: '3',
    title: 'Strawberry Milk',
    price: 'Php 55.00',
    image: require('../img/drinks/3.png')
  },
  {
    id: '4',
    title: 'Milkis Yogurt Drink',
    price: 'Php 60.00',
    image: require('../img/drinks/4.png')
  },
  {
    id: '5',
    title: 'Red Ginseng Extract',
    price: 'Php 40.00',
    image: require('../img/drinks/5.png')
  },
  {
    id: '6',
    title: 'Maxim Coffee',
    price: 'Php 35.00',
    image: require('../img/drinks/6.png')
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Products2 = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  const Card = ({ LIST }) => {
    return (
      <TouchableHighlight underlayColor='#ffffff' activeOpacity={0.9} onPress={() => navigation.navigate('Details')}>
        <View style={styles.card}>
          <View style={{ alignItems: 'center', top: 25 }}>
            <Image source={LIST.image} style={{ height: 130, width: 130 }} />

            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{LIST.title}</Text>
          </View>

          <View style={{
            marginTop: 50,
            marginVertical: 30,
            marginHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{LIST.price}</Text>
            <View style={styles.addToCartBtn}>
              <AntDesign name="plus" size={20} color='white'></AntDesign>
            </View>
          </View>

        </View>
      </TouchableHighlight>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 0, backgroundColor: '#e7a133' }} />
      <View style={styles.headerContainer}>
        <TouchableOpacity style={{ marginTop: 2 }} onPress={() => navigation.navigate('Home')}>
          <Ionicons name='arrow-back-outline' size={30} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Products</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={{ fontSize: 32, fontWeight: 'bold', color: 'black' }}>Drinks</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
          <View style={{ width: 120, height: 50, marginTop: 10, padding: 2 }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('CookedFood')}
            >
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Ready To Eat</Text>
            </TouchableOpacity>
          </View>

          <View style={{ width: 120, height: 50, marginTop: 10 }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('FrozenFood')}
            >
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Frozen Foods</Text>
            </TouchableOpacity>

          </View>
          <View style={{ width: 120, height: 50, marginTop: 10 }}>
            <TouchableOpacity
              style={styles.button}
            >
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Drinks</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: 120, height: 50, marginTop: 10 }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Noodles')}
            >
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Noodles</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: 120, height: 50, marginTop: 10 }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Snacks')}
            >
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Snacks</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <FlatList

          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={LIST}
          renderItem={({ item }) => <Card LIST={item} />}
        />
      </View>
    </View>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    marginTop: StatusBar.currentheight || 0,
  },
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: '#e7a133',
    paddingTop: 10,
    paddingBottom: 15
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: 30,
    paddingHorizontal: 10,
    fontWeight: 'bold'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {

    height: 250,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 15,
    elevation: 10,
    backgroundColor: '#e7a133'

  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: '#ca423f',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    alignItems: "center",
    backgroundColor: '#e7a133',
    padding: 10,
    borderRadius: 25
  },

});

export default Products2;