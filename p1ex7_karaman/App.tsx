import {StyleSheet, View} from 'react-native';

const Flex = () => {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          
        },
      ]}>
      <View style = {styles.flag}>
      <View style={{flex: 1, backgroundColor: '#000091'}} />
      <View style={{flex: 1, backgroundColor: '#FFFFFF'}} />
      <View style={{flex: 1, backgroundColor: '#E1000F'}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  flag:{
    aspectRatio: 2,
    flexDirection: 'row',
     borderWidth: 2, 
    borderColor : 'black',
  }
});

export default Flex;
