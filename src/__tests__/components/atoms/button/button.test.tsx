import * as React from 'react';
import { shallow, mount } from 'enzyme';

import Button from '../../../../components/atoms/button/button';

const wrapper = shallow(<Button text="hello" />);
expect(wrapper.text()).toEqual('important');
