import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function EmptyList () {
    return (
        <View className="flex-1 justify-center items-center bg-slate-300">
            <MaterialCommunityIcons name="camera-off-outline" size={60} color="gray" />
            <Text className="text-xl font-semibold text-gray-600 mt-4">Nenhuma foto encontrada</Text>      
            <Text className="text-base text-gray-500 text-center mt-2">
                Clique no botão abaixo para começar.
            </Text>
        </View>
    );
}