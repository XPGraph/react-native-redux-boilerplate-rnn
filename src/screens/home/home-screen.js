import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';

export class HomeScreen extends React.Component {

  goToSecond = () => {
    Navigation.showModal({
      stack: {
        children: [{
          component: {
            name: 'app.second',
            options: {
              topBar: {
                title: {
                  text: 'Modal',
                },
              },
            },
          },
        }],
      },
    });
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button title={'Second Screen'} onPress={this.goToSecond}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
