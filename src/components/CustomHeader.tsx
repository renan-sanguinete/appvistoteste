import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { View, Text, StyleSheet, Platform, StatusBar, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { checkCameraPermissonAndNavigate } from "../utils/checkPermissionAndNavigate";

type Props = NativeStackHeaderProps;

/**
 * Componente Header customizado.
 *
 * Permite que o Header seja informado se é necessário a exibição do botão goBack().
 * Permite também que seja possível definir botões adicionais ao Header.
 *
 * @component
 * @param {NativeStackHeaderProps} props - Propriedades do NativeStackHeaderProps, incluindo route, navigation e options.
 *
 * @returns {JSX.Element} Header customizado.
 */
export default function CustomHeader ({ route, navigation, options }: Props) {
    const canGoBack = navigation.canGoBack();
    const goBack = () => {
        navigation.goBack()
    }
    const title = options?.title || '';
    const hasRightButton = route?.name === 'Gallery'
    const headerHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0

    return (
        <SafeAreaView className="bg-white">
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
            <View 
                className="flex-row bg-white p-4 items-center justify-between"
                style={{ marginTop: headerHeight }}
            >
                <View className="flex-row">
                {canGoBack ? (
                    <MaterialIcons name="arrow-back-ios" size={24} color="black" onPress={goBack} />
                ) : null}
                <Text className="text-lg">{title}</Text>
                </View>
                {hasRightButton && (
                    <TouchableOpacity
                    onPress={() => checkCameraPermissonAndNavigate(navigation)}
                    className="pl-4"
                    >
                        <MaterialCommunityIcons name="camera-plus-outline" size={24} color="black" />
                    </TouchableOpacity>
                )}
            </View>
        </SafeAreaView>
    )
}