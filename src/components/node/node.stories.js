import React from 'react';
import { storiesOf } from '@storybook/react';

import {Node} from './node';
import NodeMocks from './node.mocks';

storiesOf('Components/Node', module)
  .add(
    'default', () => (
      <Node {...NodeMocks.default.item} />
    )
  )