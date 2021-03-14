import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, ActivityIndicator, TextInput, Alert } from 'react-native';
import { MaterialIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';


export default class Cart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectAll: false,
			cartItemsIsLoading: false,
			cartItems: [
				{ itemId: "801099131", name: "Chum churum Soju", Image: require('../img/1.png'), qty: 1, salePrice: "135.00", checked: 1 },
				{ itemId: "801099131", name: "Korean Banana Milk", Image: require('../img/2.png'), qty: 1, salePrice: "55.00", checked: 1 },
				{ itemId: "801099131", name: "Tofu Kimchi Rice", Image: require('../img/3.png'), qty: 1, salePrice: "200.00", checked: 1 },
				{ itemId: "801099131", name: "Kimchi Rice w/egg", Image: require('../img/4.png'), qty: 1, salePrice: "150.00", checked: 1 },
				{ itemId: "801099131", name: "Pork Meat", Image: require('../img/5.png'), qty: 1, salePrice: "200.00", checked: 1 },
				{ itemId: "801099131", name: "Chicken Meat", Image: require('../img/6.png'), qty: 1, salePrice: "380.00", checked: 1 },
			]
		}
	}

	selectHandler = (index, value) => {
		const newItems = [...this.state.cartItems]; // clone the array 
		newItems[index]['checked'] = value == 1 ? 0 : 1; // set the new value 
		this.setState({ cartItems: newItems }); // set new state
	}

	selectHandlerAll = (value) => {
		const newItems = [...this.state.cartItems]; // clone the array 
		newItems.map((item, index) => {
			newItems[index]['checked'] = value == true ? 0 : 1; // set the new value 
		});
		this.setState({ cartItems: newItems, selectAll: (value == true ? false : true) }); // set new state
	}

	deleteHandler = (index) => {
		Alert.alert(
			'Are you sure you want to delete this item from your cart?',
			'',
			[
				{ text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
				{
					text: 'Delete', onPress: () => {
						let updatedCart = this.state.cartItems; /* Clone it first */
						updatedCart.splice(index, 1); /* Remove item from the cloned cart state */
						this.setState(updatedCart); /* Update the state */
					}
				},
			],
			{ cancelable: false }
		);
	}

	quantityHandler = (action, index) => {
		const newItems = [...this.state.cartItems]; // clone the array 

		let currentQty = newItems[index]['qty'];

		if (action == 'more') {
			newItems[index]['qty'] = currentQty + 1;
		} else if (action == 'less') {
			newItems[index]['qty'] = currentQty > 1 ? currentQty - 1 : 1;
		}

		this.setState({ cartItems: newItems }); // set new state
	}

	subtotalPrice = () => {
		const { cartItems } = this.state;
		if (cartItems) {
			return cartItems.reduce((sum, item) => sum + (item.checked == 1 ? item.qty * item.salePrice : 0), 0);
		}
		return 0;
	}



	render() {
		const { navigate } = this.props.navigation;

		const { cartItems, cartItemsIsLoading, selectAll } = this.state;

		return (
			<View style={{ flex: 1, backgroundColor: '#ffff' }}>
				<SafeAreaView style={{ flex: 0 }} />
				<View style={styles.headerContainer}>
					<TouchableOpacity style={{ marginTop: 2 }} onPress={() => navigate('Home')}>
						<Ionicons name='arrow-back-outline' size={30} />
					</TouchableOpacity>
					<Text style={styles.headerTitle}>Shopping Cart</Text>
				</View>

				{cartItemsIsLoading ? (
					<View style={[styles.centerElement, { height: 300 }]}>
						<ActivityIndicator size="large" color="#ef5739" />
					</View>
				) : (
					<ScrollView>
						{cartItems && cartItems.map((item, i) => (
							<View key={i} style={{ flexDirection: 'row', backgroundColor: '#e7a133', marginBottom: 2, marginTop: 5, height: 120 }}>
								<View style={[styles.centerElement, { width: 60 }]}>
									<TouchableOpacity style={[styles.centerElement, { width: 32, height: 32 }]} onPress={() => this.selectHandler(i, item.checked)}>
										<Ionicons name={item.checked == 1 ? "ios-checkmark-circle" : "ios-checkmark-circle-outline"} size={25} color={item.checked == 1 ? "#000000" : "#000000"} />
									</TouchableOpacity>
								</View>
								<View style={{ flexDirection: 'row', flexGrow: 1, flexShrink: 1, alignSelf: 'center' }}>
									<TouchableOpacity onPress={() => {/*this.props.navigation.navigate('ProductDetails', {productDetails: item})*/ }} style={{ paddingRight: 10 }}>
										<Image source={item.Image} style={[styles.centerElement, { height: 60, width: 60, backgroundColor: '#ffff' }]} />
									</TouchableOpacity>
									<View style={{ flexGrow: 1, flexShrink: 1, alignSelf: 'center' }}>
										<Text numberOfLines={1} style={{ fontSize: 15 }}>{item.name}</Text>
										<Text numberOfLines={1} style={{ color: '#333333', marginBottom: 10 }}>₱{item.qty * item.salePrice}</Text>
										<View style={{ flexDirection: 'row' }}>
											<TouchableOpacity onPress={() => this.quantityHandler('less', i)} style={{ borderWidth: 1, borderColor: '#000000' }}>
												<MaterialIcons name="remove" size={22} color="#000000" />
											</TouchableOpacity>
											<Text style={{ borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#000000', paddingHorizontal: 7, paddingTop: 3, color: '#000000', fontSize: 13 }}>{item.qty}</Text>
											<TouchableOpacity onPress={() => this.quantityHandler('more', i)} style={{ borderWidth: 1, borderColor: '#000000' }}>
												<MaterialIcons name="add" size={22} color="#000000" />
											</TouchableOpacity>
										</View>
									</View>

								</View>
								<View style={[styles.centerElement, { width: 60 }]}>
									<TouchableOpacity style={[styles.centerElement, { width: 32, height: 32 }]} onPress={() => this.deleteHandler(i)}>
										<Ionicons name="md-trash" size={25} color="#ee4d2d" />
									</TouchableOpacity>
								</View>
							</View>
						))}
					</ScrollView>
				)}

				{!cartItemsIsLoading &&
					<View style={{ backgroundColor: '#fff', borderTopWidth: 2, borderColor: '#f6f6f6', paddingVertical: 5 }}>
						<View style={{ flexDirection: 'row' }}>
							<View style={[styles.centerElement, { width: 60 }]}>
								<View style={[styles.centerElement, { width: 32, height: 32 }]}>
									<MaterialCommunityIcons name="ticket" size={25} color="#f0ac12" />
								</View>
							</View>
							<View style={{ flexDirection: 'row', flexGrow: 1, flexShrink: 1, justifyContent: 'space-between', alignItems: 'center' }}>
								<Text>Voucher</Text>
								<View style={{ paddingRight: 20 }}>
									<TextInput
										style={{ paddingHorizontal: 10, backgroundColor: '#f0f0f0', height: 25, borderRadius: 4 }}
										placeholder="Enter voucher code"
										value={''}
										onChangeText={(searchKeyword) => {

										}}
									/>
								</View>
							</View>
						</View>
						<View style={{ flexDirection: 'row' }}>
							<View style={[styles.centerElement, { width: 60 }]}>
								<TouchableOpacity style={[styles.centerElement, { width: 32, height: 32 }]} onPress={() => this.selectHandlerAll(selectAll)}>
									<Ionicons name={selectAll == true ? "ios-checkmark-circle" : "ios-checkmark-circle-outline"} size={25} color={selectAll == true ? "#0faf9a" : "#aaaaaa"} />
								</TouchableOpacity>
							</View>
							<View style={{ flexDirection: 'row', flexGrow: 1, flexShrink: 1, justifyContent: 'space-between', alignItems: 'center' }}>
								<Text>Select All</Text>
								<View style={{ flexDirection: 'row', paddingRight: 20, alignItems: 'center' }}>
									<Text style={{ color: '#8f8f8f' }}>SubTotal: </Text>
									<Text>₱{this.subtotalPrice().toFixed(2)}</Text>
								</View>
							</View>
						</View>
						<View style={{ flexDirection: 'row', justifyContent: 'flex-end', height: 32, paddingRight: 20, alignItems: 'center' }}>
							<TouchableOpacity style={[styles.centerElement, { backgroundColor: '#ee4d2d', width: 100, height: 25, borderRadius: 5 }]} onPress={() => console.log('test')}>
								<TouchableOpacity
									style={styles.SubmitButtonStyle}
									activeOpacity={.5}
									onPress={() => Alert.alert('Thank You for purchasing!')}
								>
									<Text style={styles.SubmitButtonText}>Click Here</Text>
								</TouchableOpacity>
							</TouchableOpacity>
						</View>
					</View>
				}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	headerContainer: {
		flexDirection: 'row',
		paddingHorizontal: 10,
		paddingTop: 10,
		paddingBottom: 15
	},
	headerTitle: {
		textAlign: 'center',
		fontSize: 30,
		paddingHorizontal: 10,
		fontWeight: 'bold'
	},
	centerElement: { justifyContent: 'center', alignItems: 'center' }
})