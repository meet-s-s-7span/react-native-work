import * as React from 'react';
import { Text, View, StyleSheet, SectionList, Image } from 'react-native';

interface SectionLIstHistoryProps { }

const SectionLIstHistory = (props: SectionLIstHistoryProps) => {
    const Day1 = [
        {
            title: 'Today, 27 Aug 2021',
            data: [
                {
                    cid: 1,
                    companyShortName: 'TWTR',
                    companyFullName: 'Twitter Inc.',
                    companyLogo: require('../assets/images/SectionList/x.png'),
                    companyPrice: '$63.98',
                    companyGrowsRate: '0.23%',
                    comapanyprogressLogo :  require('../assets/images/SectionList/tdown.png'),
                },
                {
                    cid: 2,
                    companyShortName: 'GOOGL',
                    companyFullName: 'Alphabet Inc.',
                    companyLogo: require('../assets/images/SectionList/google.png'),
                    companyPrice: '$2.84k',
                    companyGrowsRate: '0.58%',
                    comapanyprogressLogo :  require('../assets/images/SectionList/tup.png'),
                },
                {
                    cid: 3,
                    companyShortName: 'MSFT',
                    companyFullName: 'Microsoft',
                    companyLogo: require('../assets/images/SectionList/Microsoft.png'),
                    companyPrice: '$302.1',
                    companyGrowsRate: '0.23%',
                    comapanyprogressLogo :  require('../assets/images/SectionList/tup.png'),
                },
                {
                    cid: 4,
                    companyShortName: 'NIKE',
                    companyFullName: 'Nike, Inc.',
                    companyLogo: require('../assets/images/SectionList/Nike.png'),
                    companyPrice: '$169.8',
                    companyGrowsRate: '0,082%',
                    comapanyprogressLogo :  require('../assets/images/SectionList/tdown.png'),
                },
                {
                    cid: 5,
                    companyShortName: 'SPOT',
                    companyFullName: 'Spotify',
                    companyLogo: require('../assets/images/SectionList/Spotify.png'),
                    companyPrice: '$226,9',
                    companyGrowsRate: '0,90%',
                    comapanyprogressLogo :  require('../assets/images/SectionList/tup.png'),
                },
            
            ]
        }
    ]
    const Day2 = [
        {
            title: 'Yesterday, 26 Aug 2021',
            data: [
                {
                    cid: 1,
                    companyShortName: 'TWTR',
                    companyFullName: 'Twitter Inc.',
                    companyLogo: require('../assets/images/SectionList/x.png'),
                    companyPrice: '$70.98',
                    companyGrowsRate: '0.79%',
                    comapanyprogressLogo :  require('../assets/images/SectionList/tdown.png'),
                },
                {
                    cid: 2,
                    companyShortName: 'GOOGL',
                    companyFullName: 'Alphabet Inc.',
                    companyLogo: require('../assets/images/SectionList/google.png'),
                    companyPrice: '$7.84k',
                    companyGrowsRate: '0.11%',
                    comapanyprogressLogo :  require('../assets/images/SectionList/tup.png'),
                },
                {
                    cid: 3,
                    companyShortName: 'MSFT',
                    companyFullName: 'Microsoft',
                    companyLogo: require('../assets/images/SectionList/Microsoft.png'),
                    companyPrice: '$302.1',
                    companyGrowsRate: '0.23%',
                    comapanyprogressLogo :  require('../assets/images/SectionList/tup.png'),
                },
                {
                    cid: 4,
                    companyShortName: 'NIKE',
                    companyFullName: 'Nike, Inc.',
                    companyLogo: require('../assets/images/SectionList/Nike.png'),
                    companyPrice: '$669.8',
                    companyGrowsRate: '1.82%',
                    comapanyprogressLogo :  require('../assets/images/SectionList/tdown.png'),
                },
            ]
        }
    ]
    const Day3 = [
        {
            title: '25 Aug 2021',
            data: [
                {
                    cid: 1,
                    companyShortName: 'TWTR',
                    companyFullName: 'Twitter Inc.',
                    companyLogo: require('../assets/images/SectionList/x.png'),
                    companyPrice: '$63.98',
                    companyGrowsRate: '0.23%',
                    comapanyprogressLogo :  require('../assets/images/SectionList/tdown.png'),
                },
                {
                    cid: 2,
                    companyShortName: 'GOOGL',
                    companyFullName: 'Alphabet Inc.',
                    companyLogo: require('../assets/images/SectionList/google.png'),
                    companyPrice: '$2.84k',
                    companyGrowsRate: '0.58%',
                    comapanyprogressLogo :  require('../assets/images/SectionList/tup.png'),
                },
                {
                    cid: 3,
                    companyShortName: 'MSFT',
                    companyFullName: 'Microsoft',
                    companyLogo: require('../assets/images/SectionList/Microsoft.png'),
                    companyPrice: '$302.1',
                    companyGrowsRate: '0.23%',
                    comapanyprogressLogo :  require('../assets/images/SectionList/tup.png'),
                },
            ]
        }
    ]
    const Day4 = [
        {
            title: '24 Aug 2021',
            data: [
                {
                    cid: 1,
                    companyShortName: 'TWTR',
                    companyFullName: 'Twitter Inc.',
                    companyLogo: require('../assets/images/SectionList/x.png'),
                    companyPrice: '$93.98',
                    companyGrowsRate: '0.59%',
                    comapanyprogressLogo :  require('../assets/images/SectionList/tdown.png'),
                },
                {
                    cid: 2,
                    companyShortName: 'GOOGL',
                    companyFullName: 'Alphabet Inc.',
                    companyLogo: require('../assets/images/SectionList/google.png'),
                    companyPrice: '$9.84k',
                    companyGrowsRate: '0.99%',
                    comapanyprogressLogo :  require('../assets/images/SectionList/tdown.png'),
                },
            ]
        }
    ]
    const Day5 = [
        {
            title: '23 Aug 2021',
            data: [
                {
                    cid: 1,
                    companyShortName: 'TWTR',
                    companyFullName: 'Twitter Inc.',
                    companyLogo: require('../assets/images/SectionList/x.png'),
                    companyPrice: '$63.98',
                    companyGrowsRate: '0.23%',
                    comapanyprogressLogo :  require('../assets/images/SectionList/tdown.png'),
                },
            
            ]
        }
    ]
    
    return (
        <View style={styles.container}>
            <SectionList sections={[...Day1,...Day2,...Day3,...Day4,...Day5]} 
            renderItem={({item})=>(
                <View style={styles.orderListView}>
                    <Image source={item.companyLogo} resizeMode='contain' style={styles.logoImage}/>
                    <View style={styles.listNameView}> 
                    <View>
                    <Text style={styles.shortNameText}>{item.companyShortName}</Text>
                    <Text style={styles.fullNameText}>{item.companyFullName}</Text>
                    </View>
                    <View style={styles.priceView}>
                        <Text style={styles.priceText}>{item.companyPrice}</Text>
                        <View style={styles.progressView}>
                            <Image source={item.comapanyprogressLogo} resizeMode='contain' style={styles.progressImage}/>
                            <Text style={styles.progressionText}>{item.companyGrowsRate}</Text>
                        </View>
                        
                    </View>
                    </View>
                     
                </View>
               
            )}
            
            renderSectionHeader={({section})=>(
                <Text style={styles.sectionTitle}>{section.title}</Text>
              )}
            />
        </View>
    );
};

export default SectionLIstHistory;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#FFFFFF'
        // backgroundColor:'#fffff',
    },
    logoImage:{
        // height:40,
        // width:40,
        flex: 0.4,
        // alignItems:'flex-start'
    },
    orderListView: {
        flex:1,
        flexDirection:'row',
        marginBottom:32,
        
    },
    progressView:{
        flexDirection:'row',
        justifyContent:'flex-end'
        
    },
    progressImage:{
        alignSelf: 'center',
    },
    listNameView:{
        flex: 1,
        // backgroundColor:'red',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    shortNameText:{
        fontSize: 18,
        fontWeight: '700',
        color: '#03314B' 
    },
    fullNameText:{
        fontSize: 12,
        fontWeight: '700',
        color: '#03314B'
    },
    priceText:{
        fontSize: 18,
        fontWeight: '700',
        color: '#03314B'
    },
    progressionText:{
        fontSize: 12,
        fontWeight: '700',
        color: '#03314B'
    },
    priceView:{
        paddingRight: 24,
        justifyContent:'flex-end'
    },
    sectionTitle:{
        color:'#6C727F',
        paddingLeft:24,
        fontSize:12,
        fontWeight:'700',
        marginBottom:24
    }

});
