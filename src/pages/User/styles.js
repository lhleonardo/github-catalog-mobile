import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Header = styled.View`
  align-items: center;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Avatar = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  /* cor que demonstra carregamento */
  border-color: #eee;
`;

export const Name = styled.Text`
  font-size: 25px;
  margin-top: 10px;

  color: #333;
  text-align: center;
  font-weight: bold;
`;

export const Bio = styled.Text`
  font-size: 14px;
  line-height: 18px;

  color: #999;
  margin-top: 5px;

  text-align: center;
`;

export const StarsInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const EmptyStarsInfo = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  flex-direction: column;
`;

export const TextInfo = styled.Text`
  font-size: 20px;
  color: #999;

  margin: 10px 0;
`;

export const Label = styled.Text`
  color: #333;
  font-size: 16px;
  font-weight: bold;

  justify-content: center;

  margin-left: 10px;
`;

export const Loading = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Stars = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;
export const Starred = styled(RectButton)`
  background: #e8e8e8;
  border-radius: 4px;
  padding: 10px 15px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
`;
export const OwnerAvatar = styled.Image`
  width: 50px;
  height: 50px;

  border-radius: 25px;

  background: #eee;
`;
export const Info = styled.View`
  margin-left: 10px;
  flex: 1;
`;
export const Title = styled.Text.attrs({numberOfLines: 1})`
  font-size: 15px;
  font-weight: bold;
  color: #333;
`;
export const Author = styled.Text``;
