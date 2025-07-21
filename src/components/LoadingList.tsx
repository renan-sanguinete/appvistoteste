import { ActivityIndicator, View, Text } from "react-native";

/**
 * Componente que exibe icone de loading na tela com a informação de texto `Carregando fotos` 
 *
 * @component
 */
export default function LoadingList () {
    return (
        <View className="flex-1 justify-center items-center bg-slate-300">
            <ActivityIndicator size="large" />
            <Text className="text-xl font-semibold text-gray-600 mt-4">Carregando fotos</Text>      
        </View>
    );
}