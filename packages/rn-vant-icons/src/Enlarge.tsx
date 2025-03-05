/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let Enlarge: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M156.331008 625.665024c23.564288 0 42.667008 19.10272 42.667008 42.667008l-0.001024 156.443648 156.445696 0.001024c23.564288 0 42.667008 19.10272 42.667008 42.667008s-19.10272 42.667008-42.667008 42.667008h-184.87296C139.14112 910.11072 113.664 884.6336 113.664 853.206016v-184.87296C113.664 644.76672 132.76672 625.664 156.331008 625.664z m711.112704 0c23.564288 0 42.667008 19.10272 42.667008 42.667008v184.87296c0 31.428608-25.47712 56.905728-56.904704 56.905728h-184.87296c-23.565312 0-42.668032-19.10272-42.668032-42.667008s19.10272-42.667008 42.667008-42.667008l156.443648 0.001024 0.001024-156.445696c0-23.564288 19.10272-42.667008 42.667008-42.667008zM355.442688 113.664c23.564288 0 42.667008 19.10272 42.667008 42.667008s-19.10272 42.667008-42.667008 42.667008H198.998016v156.444672c0 23.564288-19.10272 42.667008-42.667008 42.667008S113.664 379.006976 113.664 355.442688v-184.87296C113.664 139.14112 139.14112 113.664 170.568704 113.664h184.87296z m497.763328 0c31.42656 0 56.904704 25.47712 56.904704 56.904704v184.87296c0 23.565312-19.10272 42.668032-42.667008 42.668032s-42.667008-19.10272-42.667008-42.667008V198.998016H668.332032c-23.564288 0-42.667008-19.10272-42.667008-42.667008S644.767744 113.664 668.332032 113.664h184.87296z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Enlarge.defaultProps = {
  size: 18,
};

Enlarge = React.memo ? React.memo(Enlarge) : Enlarge;

export default Enlarge;
