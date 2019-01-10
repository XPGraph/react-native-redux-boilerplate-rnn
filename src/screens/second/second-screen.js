import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { ExampleComponent } from 'components';
import {connect} from 'react-redux';
import { setToken } from 'redux/actions';

class SecondScreen extends React.Component {
    _onPress = () => {
      this.props.testDispatch(Math.random().toString());
    }
    render () {
      return (
        <View style={styles.container}>
          <Text>Second Screen: {this.props.token}</Text>
          <ExampleComponent/>
          <Button title={'Test Redux'} onPress={this._onPress}/>
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

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    testDispatch: (text) => {
      dispatch(setToken(text));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SecondScreen);
