import React, {useState, useEffect} from 'react';
import {ActivityIndicator, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
  EmptyStarsInfo,
  TextInfo,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles';

export default function User({navigation, route}) {
  const {user} = route.params;
  navigation.setOptions({title: user.name || 'Usuário sem nome'});

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
        <Name>{user.name || 'Usuário sem nome'}</Name>
        <Bio>{user.bio || 'Usuário sem biografia'}</Bio>
      </Header>

      <StarsInfo>
        <Icon name="star-face" size={30} color="#5960c1" />
        <Label>Repositórios favoritos</Label>
      </StarsInfo>
      {loading ? (
        <Loading>
          <ActivityIndicator size={50} color="#999" />
        </Loading>
      ) : (
        <>
          {!stars.length && (
            <>
              <EmptyStarsInfo>
                <TextInfo>Nada foi favoritado ainda </TextInfo>
                <Icon name="emoticon-sad-outline" size={40} color="#5960c1" />
              </EmptyStarsInfo>
            </>
          )}
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
        </>
      )}
    </Container>
  );
}
