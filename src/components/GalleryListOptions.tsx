import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

/**
 * Componente que exibe View informando que a foi foi selecionada e contendo os botões de acesso as funções onDelete e onCancel.
 *
 *
 * @component
 * @param {{onDelete: () => void,  onCancel: () => void}} Funções para chamada de deletar foto ou cancelar seleção
 */
export default function GalleryListOptions({ onDelete, onCancel }: { onDelete: () => void, onCancel: () => void }) {
  return (
    <View className="flex-row items-center justify-between p-4 bg-white rounded-lg mb-4 shadow">
      <Text className="text-base font-semibold text-black">Foto selecionada</Text>

      <View className="flex-row space-x-4">
        <TouchableOpacity className="mx-10" onPress={onDelete}>
          <MaterialIcons name="delete" size={28} color="red" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onCancel}>
          <MaterialIcons name="cancel" size={28} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
