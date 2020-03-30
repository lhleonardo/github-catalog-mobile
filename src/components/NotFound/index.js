import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

import {Empty, Info} from './styles';

export default function NotFound({text}) {
  return (
    <>
      <Empty>
        <Info>{text}</Info>
        <Icon name="emoticon-sad-outline" size={40} color="#5960c1" />
      </Empty>
    </>
  );
}

NotFound.propTypes = {
  text: PropTypes.string.isRequired,
};
