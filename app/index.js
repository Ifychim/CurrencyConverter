import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Navigator from './config/routes';

import {AlertProvider} from './components/Alert';

EStyleSheet.build({

  //Theme Colors
  $primaryBlue: '#4F6D7A',
  $primaryOrange: '#d57a66',
  $primaryGreen: '#00bd9d',
  $primaryPurple: '#9e768f',

  $white: '#FFFFFF',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $lightGray:  '#F0F0F0',
  $darkText: '#343434'


});

export default () => <AlertProvider><Navigator/></AlertProvider>;
