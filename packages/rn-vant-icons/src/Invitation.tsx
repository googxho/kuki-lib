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

let Invitation: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M398.3872 312.109056c0 6.656 1.649664 13.995008 4.835328 21.846016 0.113664 0.284672 0.227328 0.56832 0.342016 0.739328 20.195328 48.185344 97.961984 103.537664 101.261312 106.097664 2.048 1.593344 4.49536 2.332672 6.940672 2.332672 2.50368 0 5.00736-0.796672 7.05536-2.388992 2.843648-2.162688 69.17632-49.60768 95.515648-94.492672 0.966656-1.536 1.763328-3.01568 2.446336-4.267008 0.227328-0.398336 0.398336-0.796672 0.62464-1.195008l0.114688-0.169984c0.057344-0.171008 0.113664-0.342016 0.227328-0.45568 1.593344-3.072 2.844672-5.859328 3.868672-8.646656 2.731008-7.11168 4.038656-13.483008 4.038656-19.342336v-1.251328c0-0.739328 0.114688-1.820672 0.114688-3.01568 0-37.716992-29.753344-68.323328-66.332672-68.323328-17.977344 0-35.100672 7.68-47.446016 20.878336-12.40064-13.198336-29.467648-20.878336-47.444992-20.878336-36.523008 0-66.332672 30.606336-66.332672 68.323328 0 1.252352 0.113664 2.390016 0.228352 3.243008 0 0.340992-0.057344 0.625664-0.057344 0.966656"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M739.555328 422.889472L532.651008 547.0208A39.932928 39.932928 0 0 1 512 552.766464a39.932928 39.932928 0 0 1-20.651008-5.745664L284.444672 422.889472V170.643456h455.110656v252.246016z m113.777664-138.467328h-56.88832V170.643456c0-31.401984-25.430016-56.88832-56.889344-56.88832H284.444672c-31.459328 0-56.889344 25.486336-56.889344 56.88832v113.778688h-56.88832c-31.460352 0-56.889344 25.485312-56.889344 56.88832v512c0 31.459328 25.428992 56.889344 56.889344 56.889344h682.665984c31.460352 0 56.889344-25.430016 56.889344-56.889344v-512c0-31.403008-25.428992-56.88832-56.889344-56.88832z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

Invitation.defaultProps = {
  size: 18,
};

Invitation = React.memo ? React.memo(Invitation) : Invitation;

export default Invitation;
