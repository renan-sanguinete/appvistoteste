import { ActivityIndicator, View } from "react-native";

export default function LoadingList () {
    return (
        <View className="flex-1 justify-center items-center bg-white">
            <ActivityIndicator size="large" />
        </View>
    );
}