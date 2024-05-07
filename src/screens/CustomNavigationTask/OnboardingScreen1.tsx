import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
// import AppIntroSlider from 'react-native-app-intro-slider';
//  git push --set-upstream origin master  
// git commit -m "redux example"
//git remote add origin https://github.com/meetsaradva1307/redux-example.git



interface Slide {
  key: string;
  title: string;
  text: string;
}

const slides: Slide[] = [
  {
    key: '1',
    title: 'Welcome!',
    text: 'This is the first intro screen.',
  },
  {
    key: '2',
    title: 'Introduction',
    text: 'This is the second intro screen.',
  },
  {
    key: '3',
    title: 'Getting Started',
    text: 'This is the third intro screen.',
  },
];

const OnboardingScreen1 = () => {
  const renderItem = ({ item }: { item: Slide }) => (
    <View style={styles.slide}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  // Custom renderNextButton and renderDoneButton to hide them
  const renderNextButton = () => null;
  const renderDoneButton = () => null;

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      onDone={() => console.log('Done')}
      renderNextButton={renderNextButton}
      renderDoneButton={renderDoneButton}
    />
  );
};

export default OnboardingScreen1;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
});
