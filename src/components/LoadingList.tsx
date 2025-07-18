import { ActivityIndicator, View, Text } from "react-native";

export default function LoadingList () {
    return (
        <View className="flex-1 justify-center items-center bg-slate-300">
            <ActivityIndicator size="large" />
            <Text className="text-xl font-semibold text-gray-600 mt-4">Carregando fotos</Text>      
        </View>
    );
}