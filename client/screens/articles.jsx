import { useEffect, useState } from "react";
import {
	FlatList,
	SafeAreaView,
	ScrollView,
	TouchableOpacity,
	View,
} from "react-native";
import { renderArticle } from "../components/atoms/article";
import Text from "../components/theme/text";
import { Screen } from "../layouts/screen";
import { get } from "../utils/http";

import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "../utils/constants";

export function Articles({ navigation }) {
	const [articles, setArticles] = useState([]);
	const [isFetching, setIsFetching] = useState(false);

	async function getArticles() {
		setIsFetching(true);
		let data = await get("api/articles");

		setArticles(data.data.reverse(0));
		setIsFetching(false);
	}

	useEffect(() => {
		getArticles();
	}, []);

	return (
		<Screen>
			<View
				style={{
					flex: 1,
					flexGrow: 1,
				}}
			>
				<View
					style={{
						flex: 1,
					}}
				>
					<FlatList
						refreshing={isFetching}
						style={{ height: 40 }}
						showsVerticalScrollIndicator={false}
						data={articles}
						renderItem={renderArticle(navigation)}
						onRefresh={getArticles}
						ListFooterComponent={() => (
							<View
								style={{
									height: 70,
									justifyContent: "center",
								}}
							>
								<Text align="center">No more articles</Text>
							</View>
						)}
					/>
				</View>
			</View>
			<View
				style={{
					backgroundColor: Colors.primary,
					width: 50,
					height: 50,
					borderRadius: 25,
					position: "absolute",
					bottom: 20,
					right: 0,
					zIndex: 1,
				}}
			>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate("NewArticle");
					}}
					style={{
						flex: 1,
						justifyContent: "center",
						alignItems: "center",
						elevation: 10,
					}}
				>
					<MaterialIcons name="add" size={30} color="white" />
				</TouchableOpacity>
			</View>
		</Screen>
	);
}
