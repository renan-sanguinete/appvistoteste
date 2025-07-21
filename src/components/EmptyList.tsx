import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

/**
 * Componente de galeria vazia (sem fotos adicionadas).
 *
 * Exibe texto infomativo de que não foi encontrado nenhuma foto para ser exibida na galeria.
 *
 * @component
 * @returns {JSX.Element} Tela vazia.
 */
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