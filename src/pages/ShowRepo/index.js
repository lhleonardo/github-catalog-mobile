import React, {useState} from 'react';

import {View} from './styles';
import {ActivityIndicator} from 'react-native';

export default function ShowRepo({route, navigation}) {
  const {repo} = route.params;

  const [loading, setLoading] = useState(true);

  navigation.setOptions({title: repo.name});

  return (
    <>
      <View source={{uri: repo.url}} onLoad={() => setLoading(false)} />
      {loading && (
        <ActivityIndicator
          color="#5960c1"
          size={50}
          style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}
        />
      )}
    </>
  );
}
