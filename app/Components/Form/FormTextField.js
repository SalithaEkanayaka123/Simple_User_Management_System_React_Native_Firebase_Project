import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Formtextfield = ({ icon, width = "100%", ...otherProps }) => {
    return (
        <View style={[styles.constainer, { width }]}>
            {icon && <MaterialCommunityIcons name={icon} size={30} color='#000' />}
            <TextInput
                placeholderTextColor="#EA5C2B"
                style={defultStyles.text1} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Formtextfield;
