import React, { useRef, useState } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    ListRenderItem,
    NativeSyntheticEvent,
    NativeScrollEvent,

} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigations/RootNavigator';
const { width } = Dimensions.get('window');
const onboardingData = [
    {
        id: '1',
        image: require('../../assets/images/oone.png'),
        title: '8-4-4 Curriculum',
        description:
            'We offer this curriculum to students in a modern setting with a relevant and updated outlook to the known.',
    },
    {
        id: '2',
        image: require('../../assets/images/otwo.png'),
        title: 'Hands-on Learning',
        description:
            'Engage with tools and labs that bring your education to life.',
    },
    {
        id: '3',
        image: require('../../assets/images/othree.png'),
        title: 'Future Ready',
        description:
            'Prepare yourself for a fast-changing world with the right knowledge.',
    },
];
type OnboardingItem = {
    id: string;
    image: any;
    title: string;
    description: string;
};


type OnboardingScreenProps = NativeStackScreenProps<RootStackParamList>;

export default function OnboardingScreenOne({route,navigation}:OnboardingScreenProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef<FlatList<OnboardingItem>>(null);

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const index = Math.round(event.nativeEvent.contentOffset.x / width);
        setCurrentIndex(index);
    };

    const renderItem: ListRenderItem<OnboardingItem> = ({ item }) => (
        <View style={styles.slide}>
            <Image source={item.image} style={styles.image} resizeMode="cover" />
            <Text style={styles.title}>
                <Text style={styles.highlight}>{item.title}</Text>
            </Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={onboardingData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                ref={flatListRef}
            />

            <View style={styles.dotsContainer}>
                {onboardingData.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            currentIndex === index && styles.dotActive,
                        ]}
                    />
                ))}
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    if (currentIndex < onboardingData.length - 1) {
                        flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
                    } else {
                      navigation.navigate("Login");
                    }
                }}
            >
                <Text style={styles.buttonText}>
                    {currentIndex === onboardingData.length - 1 ? 'Get Started' : 'Next'}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 24,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    slide: {
        width,
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: width - 80,
        height: 240,
        borderRadius: 20,
        marginBottom: 24,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 12,
    },
    highlight: {
        color: '#00C853',
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        color: '#444',
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 16,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#ccc',
        marginHorizontal: 6,
    },
    dotActive: {
        backgroundColor: '#00C853',
    },
    button: {
        backgroundColor: '#00C853',
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: 'center',
        width: width - 48,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
