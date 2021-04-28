import React from 'react'
import {
    StyleSheet,
    Image,
    View,
    Text,
    SafeAreaView,
    ScrollView,
    ProgressBarAndroid,
    TouchableOpacity,
    ImageBackground,
    StatusBar
} from 'react-native'


const TitleComponent = () => {
    return (
        <View style={styles.titleViewStyle}>
            <View style={styles.titleBackView}>
                <Image style={styles.titleBackImage}
                    source={require("../../assets/icon_arrow_back.png")} />
            </View>

            <Text style={styles.titleStyle}>Partager</Text>
            <View style={{ flex: 1 }}>
            </View>
        </View>
    )
}

/*
*/
const CommentSection = () => {
    return (
        <View>
            <View style={styles.commentHeaderViewStyle}>
                <View style={{ flex: 2 }}>
                    <Image
                        style={{ height: 45, width: 45 }}
                        source={require('../../assets/avatar-second.png')}>
                    </Image>
                </View>
                <View style={[{ flex: 8 }, styles.commentTitleView]}>
                    <Text style={styles.commentTitleStyle}>Albane</Text>
                    <Text style={styles.commentSubTitleStyle}>a partagé un NOX</Text>
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={styles.commentDateStyle}>07:07</Text>
                </View>
            </View>
            <View style={styles.commentDetailsStyle}>
                <Text style={styles.commentTextStyle}>
                    Pour une fois que c’est quelqu’un d’autre que mes chats qui me réveillent ce matin, et qui de mieux qu’Angèle pour faire cela !
                </Text>
            </View>

        </View>
    )
}

const CommentTags = () => {
    return (
        <View style={styles.commentTagsView}>
            <TouchableOpacity style={styles.commentTagStyle}>
                <Text style={styles.commentTagTextStyle}>Angèle</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.commentTagStyle}>
                <Text style={styles.commentTagTextStyle}>Live</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.commentTagStyle}>
                <Text style={styles.commentTagTextStyle}>Matin</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.commentTagStyle}>
                <Text style={styles.commentTagTextStyle}>Cat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.commentTagStyle}>
                <Text style={styles.commentTagTextStyle}>BestNox</Text>
            </TouchableOpacity>
        </View>

    )
}

const PostComponent = () => {
    return (
        <ImageBackground style={{ width: '100%', height: 363 }}
            source={require('../../assets/album-photo.jpeg')}>
            <View style={{ flexDirection: 'row', marginTop: 10, paddingHorizontal: 16 }}>
                <Image
                    style={{ height: 45, width: 45 }}
                    source={require('../../assets/avatar-main.png')}></Image>
                <View style={{ flexDirection: 'column', paddingLeft: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.profileTitleStyle}>
                            Angèle
                        </Text>
                        <View style={{ backgroundColor: '#009eff', height: 10, width: 10, borderRadius: 5, marginTop: 10, marginLeft: 5, alignItems: 'center', justifyContent: 'center' }}>
                            <Image style={{ height: 8, width: 8 }} source={require('../../assets/icon_check.png')}></Image>

                        </View>
                    </View>
                    <Text style={styles.profileSubTitleStyle}>
                        Bruxelle, BELGIQUE
                    </Text>

                </View>
            </View>
            <View style={{ position: 'absolute', alignSelf: 'center', top: 0, bottom: 0, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity style={{ height: 82, width: 82, borderRadius: 41, backgroundColor: 'rgba(255, 255, 255, 0.5)', alignItems: 'center', justifyContent: 'center' }} >
                    <Image source={require('../../assets/path.png')} />
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'column', position: 'absolute', bottom: 10, right: 0, paddingRight: 16, alignItems: 'flex-end' }}>
                <TouchableOpacity style={{ height: 48, width: 48, borderRadius: 24, backgroundColor: 'rgba(255, 255, 255, 0.5)', alignItems: 'center', justifyContent: 'center' }} >
                    <Image source={require('../../assets/icons-share-white.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ height: 48, width: 48, borderRadius: 24, backgroundColor: 'rgba(255, 255, 255, 0.5)', alignItems: 'center', justifyContent: 'center', marginVertical: 16 }} >
                    <Image source={require('../../assets/icons-comments-alt.png')} />
                </TouchableOpacity>

                <Text style={styles.timerStyle}>
                    - 01 : 06 : 22
                </Text>
            </View>
        </ImageBackground>
    )
}

const MainScreen = () => {

    React.useEffect(() => {
        StatusBar.setHidden(true);
    }, [])

    return (
        <ScrollView>
            <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
                <TitleComponent />
                <ProgressBarAndroid
                    style={{ color: '#009eff', width: '60%', marginTop: 36, paddingHorizontal: 16 }}
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={0.1} />

                <CommentSection />
                <CommentTags />
                <PostComponent />
                <View style={{ alignItems: 'flex-end', width: '100%', paddingHorizontal: 16 }}>
                    <TouchableOpacity style={styles.publishBtnStyle}>
                        <Text style={styles.publishTextStyle}>Publier</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView >
        </ScrollView>
    )
}

export default MainScreen
const styles = StyleSheet.create({
    titleStyle: {
        flex: 5,
        color: '#111619',
        fontFamily: "Raleway-SemiBold",
        fontWeight: '600',
        fontStyle: 'normal',
        letterSpacing: 0.39,
        lineHeight: 26.1, // 0.9 * 29
        fontSize: 29,
        textAlign: 'center'
    },
    commentTitleStyle: {
        textAlign: 'left',
        color: 'black',
        fontFamily: "TwCenMT-Bold",
        fontWeight: 'bold',
        fontSize: 22,
        letterSpacing: -1.05
    },
    commentSubTitleStyle: {
        textAlign: 'left',
        color: '#7f8387',
        fontFamily: 'TwCenMT-Regular',
        fontWeight: 'normal',
        fontSize: 14,
        letterSpacing: -0.44
    },
    commentDateStyle: {
        textAlign: 'right',
        color: '#7f8387',
        fontFamily: 'ProximaNova-Regular',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 19,
        letterSpacing: 0
    },
    commentTextStyle: {
        color: '#111619',
        fontFamily: 'ProximaNova-Regular',
        fontWeight: 'normal',
        fontSize: 16,
        letterSpacing: -0.5
    },
    commentTagStyle: {
        height: 30,
        paddingHorizontal: 12,
        borderColor: '#009eff',
        borderWidth: 1,
        borderRadius: 15,
        justifyContent: 'center'
    },
    commentTagTextStyle: {
        color: '#009eff',
        fontFamily: 'Raleway-SemiBold',
        fontWeight: '600',
        fontSize: 14,
        letterSpacing: -0.44,
        textAlignVertical: 'center'
    },
    commentTagsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 40,
        width: '100%',
        marginTop: 10,
        paddingHorizontal: 16
    },
    publishBtnStyle: {
        height: 48,
        marginTop: 36,
        marginBottom: 30,
        paddingHorizontal: 12,
        backgroundColor: '#009eff',
        borderRadius: 24,
        justifyContent: 'center',
        paddingHorizontal: 37,

    },

    publishTextStyle: {
        color: '#ffffff',
        fontFamily: 'Raleway-Bold',
        fontWeight: '600',
        fontSize: 14,
        letterSpacing: 0,
        textAlignVertical: 'center'
    },
    profileTitleStyle: {
        color: '#ffffff',
        fontFamily: 'TwCenMT-Bold',
        fontWeight: 'bold',
        fontSize: 24,
        letterSpacing: -1.41,
        textAlignVertical: 'center',
        textShadowColor: 'rgba(25, 25, 25, 0.5)',
        textShadowRadius: 5,
    },
    profileSubTitleStyle: {
        color: '#ffffff',
        fontFamily: 'TwCenMT-Regular',
        fontWeight: 'bold',
        fontSize: 16,
        letterSpacing: -0.5,
        textAlignVertical: 'center',
        textShadowColor: 'rgba(25, 25, 25, 0.5)',
        textShadowRadius: 5,
    },
    timerStyle: {
        color: '#ffffff',
        fontFamily: 'TwCenMT-Bold',
        fontWeight: 'bold',
        fontSize: 14,
        letterSpacing: -0.44,
        textAlignVertical: 'center',
        textShadowColor: 'rgba(25, 25, 25, 0.5)',
        textShadowRadius: 5,
    },
    titleViewStyle: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 28,
        marginTop: 40,
        paddingHorizontal: 16
    },
    titleBackView: {
        width: 16,
        height: '100%',
        flex: 1,
        paddingLeft: 4,
    },
    titleBackImage: {
        width: 16,
        height: 16
    },
    commentHeaderViewStyle: {
        flexDirection: 'row',
        width: '100%',
        height: 48,
        marginTop: 30,
        paddingHorizontal: 16
    },
    commentTitleView: {
        flexDirection: 'column',
        paddingLeft: 1,
        justifyContent: 'space-between'
    },
    commentDetailsStyle: {
        width: '100%',
        height: 60,
        marginTop: 12,
        paddingHorizontal: 16
    },

})
