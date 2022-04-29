import React from 'react';

import { Text, TextInput, View, TouchableOpacity,StyleSheet } from 'react-native';

const Profile = ({navigation, route }) => {
    return (
        <View>
            <Text>Hello {route.params.name}, welcome to Trung</Text>
            <Text> your name: {route.params.name} </Text>
            <Text> your email: {route.params.email} </Text>
        </View>
    );
};

export default Profile;