import { View, Text } from "react-native";

export default function EmptyList () {
    return (
        <View className="flex-1 justify-center items-center bg-white">
            <Text className="text-gray-500 text-lg">Galeria vazia.</Text>
        </View>
    );
}