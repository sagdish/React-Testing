import React from 'react';
import ReactDOM from 'react-dom';
//import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  const component = shallow(<App />);
  
  it('should have two children siblings', () => {
    expect(component.find('div').children()).toHaveLength(2);
  });
  
  it('should have 3 properties in state', () => {
    expect(component.state('total')).toEqual('0');
    expect(component.state('next')).toEqual(null);
    expect(component.state('operation')).toEqual(null);
  });
  
});
