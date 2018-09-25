import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../containers/Home';
import { shallow } from 'enzyme';
import '../setupTests';

describe("Test de bon fonctionnement", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Home />)
  });

  it("Render le composant sans erreur", () => {
    expect(wrapper.find('.main').length).toEqual(1); 
  })
  it("Render le composant sans erreur", () => {
    expect(wrapper.find('.title').length).toEqual(1); 
  })
  it("Render le composant sans erreur", () => {
    expect(wrapper.find('.content').length).toEqual(1); 
  })
})
