import React from 'react';
import FormSignIn from '../containers/FormSignIn';
import { shallow, mount } from 'enzyme';
import '../setupTests';
import RootTest from './RootTest';

describe("Test de bon fonctionnement", () => {
  
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <RootTest>
        <FormSignIn />
      </RootTest>
    )
  });

  it("Contient un élément de classe 'Menu'", () => {
    expect(wrapper.find('.FormSignIn').length).toEqual(1); 
  })

  it("Contient un élément 2 input", () => {
    expect(wrapper.find('input').length).toEqual(2); 
  })
})
