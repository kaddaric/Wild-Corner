import React from 'react';
import SignIn from '../containers/SignIn';
import { shallow, mount } from 'enzyme';
import '../setupTests';
import RootTest from './RootTest';
import { signIn } from '../reducers/signIn'

describe("Test de bon fonctionnement", () => {
  
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <RootTest>
        <SignIn />
      </RootTest>
    )
  });

  it("Contient un élémen de class 'SignIn'", () => {
    expect(wrapper.find('.SignIn').length).toEqual(1); 
  });

  it("Test le reducer signIn", () => {
    const initialState = {
      isLogged: false
    }
    const action = {
      type: "CHECK_SIGN_IN",
      data: {isLogged: true}
    }
    expect(signIn(initialState, action).isLogged).toEqual(true);
  });
});
