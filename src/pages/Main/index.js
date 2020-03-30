import React, {useState, useEffect, useRef} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Keyboard, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';

import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';

import {
  Container,
  HeaderText,
  Form,
  FormGroup,
  Input,
  TextError,
  SubmitButton,
  List,
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
} from './styles';

export default function Main({navigation}) {
  const [users, setUsers] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({flag: false, msg: ''});

  // para carregar os dados já existentes no Storage.
  useEffect(() => {
    async function loadData() {
      const value = await AsyncStorage.getItem('users');

      if (value) {
        setUsers(JSON.parse(value));
      }
    }

    loadData();
  }, []);

  // Salvar os dados no Storage caso tenha algum novo usuário
  useEffect(() => {
    async function saveData() {
      await AsyncStorage.setItem('users', JSON.stringify(users));
    }

    saveData();
  }, [users]);

  const handleOnChangeText = (text) => {
    if (error) {
      setError(false);
    }

    setUserInput(text);
  };

  const handleAddUser = async () => {
    setLoading(true);

    try {
      const hasUser = users.find((user) => user.login === userInput);
      if (hasUser) {
        // mas não imprimo nada por enquanto... só aviso que há algo errado...
        throw new Error('Usuário já existe!');
      }

      const {data} = await api.get(`/users/${userInput}`);

      const user = {
        name: data.name,
        login: data.login,
        bio: data.bio,
        avatar: data.avatar_url,
      };

      setUsers([...users, user]);
      setUserInput('');
    } catch (error) {
      console.tron.log('Erro!');
      if (error.response) {
        setError({flag: true, msg: 'Usuário não encontrado'});
      } else {
        setError({flag: true, msg: error.message});
      }
    }

    setLoading(false);
    Keyboard.dismiss();
  };

  const handleNavigate = (user) => {
    navigation.navigate('user', {user});
  };

  return (
    <Container>
      <HeaderText>Salve os seus perfis favoritos do GitHub</HeaderText>
      <Form>
        <FormGroup>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite o nickname do usuário"
            onChangeText={handleOnChangeText}
            returnKeyType="send"
            onSubmitEditing={handleAddUser}
            value={userInput}
            error={error.flag}
          />

          <SubmitButton loading={loading} onPress={handleAddUser}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Icon name="add" size={20} color="#FFF"></Icon>
            )}
          </SubmitButton>
        </FormGroup>
        {error.flag && <TextError>{error.msg}</TextError>}
      </Form>

      <List
        data={users}
        keyExtractor={(user) => user.login}
        renderItem={({item}) => (
          <User>
            <Avatar source={{uri: item.avatar}} />
            <Name>{item.name || 'Usuário sem nome'}</Name>
            <Bio>{item.bio || 'Usuário sem biografia'}</Bio>

            <ProfileButton onPress={() => handleNavigate(item)}>
              <ProfileButtonText>Ver perfil</ProfileButtonText>
            </ProfileButton>
          </User>
        )}></List>
    </Container>
  );
}

Main.propTypes = {
  navigation: PropTypes.shape({navigate: PropTypes.func}).isRequired,
};
