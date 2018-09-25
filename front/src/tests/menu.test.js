import React from 'react';
import Menu from '../containers/Menu';
import { shallow, mount } from 'enzyme';
import '../setupTests';
import RootTest from './RootTest';

describe("Test de bon fonctionnement", () => {
  
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <RootTest>
        <Menu />
      </RootTest>
    )
  });

  it("Contient un élémen de class 'Menu'", () => {
    expect(wrapper.find('.Menu').length).toEqual(2); 
  })
})
