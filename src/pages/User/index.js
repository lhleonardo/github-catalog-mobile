import React, {useState, useEffect} from 'react';
import {ActivityIndicator, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  StarsInfo,
  Label,
  Loading,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles';

export default function User({navigation, route}) {
  const {user} = route.params;
  navigation.setOptions({title: user.name});

  const [stars, setStars] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadingUserData() {
      setLoading(true);
      const response = await api.get(`/users/${user.login}/starred`);

      setStars(response.data);
      setLoading(false);
    }

    loadingUserData();
  }, []);

  return (
    <Container>
      <Header>
        <Avatar source={{uri: user.avatar}} />
        <Name>{user.name}</Name>
        <Bio>{user.bio}</Bio>
      </Header>

      <StarsInfo>
        <Icon name="stars" size={30} color="#5960c1" />
        <Label>Repositórios favoritos</Label>
      </StarsInfo>
      {loading ? (
        <Loading>
          <ActivityIndicator size={50} color="#999" />
        </Loading>
      ) : (
        <Stars
          data={stars}
          keyExtractor={(star) => String(star.id)}
          renderItem={({item}) => (
            <Starred
              onPress={() =>
                navigation.navigate('show_repo', {
                  repo: {name: item.name, url: item.html_url},
                })
              }>
              <OwnerAvatar source={{uri: item.owner.avatar_url}} />
              <Info>
                <Title>{item.name}</Title>
                <Author>{item.owner.login}</Author>
              </Info>
            </Starred>
          )}></Stars>
      )}
    </Container>
  );
}
