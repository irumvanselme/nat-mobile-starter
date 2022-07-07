import { TouchableOpacity, View } from "react-native";
import { Colors } from "../../utils/constants";
import Text from "../theme/text";

export function renderArticle(navigation) {
	return function ({ item, index, separators }) {
		return (
			<TouchableOpacity
				onPress={() => {
					navigation.navigate("ArticleDetails", {
						item,
					});
				}}
			>
				<View
					style={{
						borderBottomColor: "#eee",
						borderBottomWidth: 1,
						paddingVertical: 20,
					}}
				>
					<Text bold>{item.title}</Text>
					<Text
						styles={{
							marginTop: 20,
						}}
					>
						{item.summary}
					</Text>
					<Text
						size={15}
						medium
						color={Colors.primary}
						style={{
							marginTop: 20,
						}}
					>
						By {item._id}
					</Text>
				</View>
			</TouchableOpacity>
		);
	};
}
