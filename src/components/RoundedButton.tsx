import { Ionicons } from "@expo/vector-icons";
import { 
    StyleProp,
    StyleSheet,
    Text,
    TouchableOpacity,
    ViewStyle,
 } from "react-native";
 import { Colors } from "../constants/Colors";
import { ComponentProps } from "react";

 interface RoundedButtonProps {
    onPress: () => void;
    title?: string;
    iconName?: ComponentProps<typeof Ionicons>["name"];
    containerStyle?: StyleProp<ViewStyle>;
    iconSize?: number;
 }

 export default function RoundedButton ({
   onPress,
   iconName,
   title,
   containerStyle,
   iconSize,
 }: RoundedButtonProps) {
   return (
      <TouchableOpacity
         onPress={onPress}
         style={[
            styles.container,
            {
               backgroundColor: Colors.dark.background,
               borderRadius: title ? 6 : 40,
               alignSelf: "flex-start", 
            },
            containerStyle,
         ]}
      >
         {iconName && (
            <Ionicons name={iconName} size={iconSize ?? 28} color={"white"} />
         )}
         {title ? (
            <Text
               style={{
                  fontSize: 14,
                  fontWeight: "600",
                  color: "white",
               }}
            >
               {title}
            </Text>
         ) : null}
      </TouchableOpacity>
   )
 }

 const styles =  StyleSheet.create({
   container: {
      padding: 7,
      borderRadius: 40,
      flexDirection: "row",
      alignItems: "center",
      gap: 7,
   },
 });