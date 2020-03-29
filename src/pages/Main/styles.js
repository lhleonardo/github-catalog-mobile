import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const HeaderText = styled.Text`
  margin: 5px 0px;
  padding: 5px 0px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 40px;
  background: #e8e6e6;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #e8e6e6;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;

  background-color: #5960c1;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;

  opacity: ${(props) => (props.loading ? 0.7 : 1)};
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const User = styled.View`
  align-items: center;
  margin: 5px 0;

  border: 1px solid #dbd9d9;

  padding: 10px;

  border-radius: 6px;
`;

export const Avatar = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background: #eee;
  border: 1px #eee;
`;

export const Name = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-top: 5px;
  text-align: center;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 13px;
  line-height: 18px;
  margin-top: 5px;
  text-align: center;
`;

export const ProfileButton = styled(RectButton)`
  margin-top: 10px;
  align-self: stretch;
  border-radius: 4px;
  background: #5960c1;

  align-items: center;
  justify-content: center;

  padding: 10px 0;
  height: 36px;
`;

export const ProfileButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
