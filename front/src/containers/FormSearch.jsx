import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Row, Col } from 'reactstrap';
 

class FormSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {

    const { handleSubmit, pristine, submitting } = this.props;

    return (
      <div className="FormSearch">
        <form onSubmit={handleSubmit}>
          <div>
            <label className="labelForm">Par mot clé</label>
            <div>
              <Field
                name="article"
                component="input"
                type="text"
                placeholder="Rechercher un article"
                className="form-control" 
              />
            </div>
          </div>
          <div>
            <label className="labelForm">Par localisation</label>
            <div>
              <Field
                name="position"
                component="input"
                type="text"
                placeholder="Rechercher une localisation"
                className="form-control" 
              />
            </div>
          </div>
          <Row>
            <Col sm="6">
              <label className="labelForm">Par prix</label>
              <div>
                <Col sm="12">
                  <label>
                    <Field
                      name="prix"
                      component="input"
                      type="radio"
                      value="1,50"
                    />{' '}
                    de 0 à 50 €
                  </label>
                </Col>
                <Col sm="12">
                  <label>
                    <Field
                      name="prix"
                      component="input"
                      type="radio"
                      value="51,100"
                    />{' '}
                    de 50 à 100 €
                  </label>
                </Col>
                <Col sm="12">
                  <label>
                    <Field
                      name="prix"
                      component="input"
                      type="radio"
                      value="101,150"
                    />{' '}
                    de 100 à 150 €
                  </label>
                </Col>
                <Col sm="12">
                  <label>
                    <Field
                      name="prix"
                      component="input"
                      type="radio"
                      value="151,9999999999"
                    />{' '}
                    plus de 150 €
                  </label>
                </Col>
              </div>
            </Col>
            <Col sm="6">
              <label className="labelForm">Par catégorie</label>
              <div>
                <Col sm="12">
                  <label htmlFor="Immobilier">
                    <Field
                      name="Immobilier"
                      id="Immobilier"
                      component="input"
                      type="checkbox"
                    />{' '}
                    Immobilier
                  </label>
                </Col>
                <Col sm="12">
                  <label htmlFor="Vetement">
                    <Field
                      name="Vetement"
                      id="Vetement"
                      component="input"
                      type="checkbox"
                    />{' '}
                    Vêtement
                  </label>
                </Col>
                <Col sm="12">
                  <label htmlFor="Bricolage">
                    <Field
                      name="Bricolage"
                      id="Bricolage"
                      component="input"
                      type="checkbox"
                    />{' '}
                    Bricolage
                  </label>
                </Col>
                <Col sm="12">
                  <label htmlFor="Jeu">
                    <Field
                      name="Jeu"
                      id="Jeu"
                      component="input"
                      type="checkbox"
                    />{' '}
                    Jeu - Jouet
                  </label>
                </Col>
              </div>
            </Col>
          </Row>

          <div>
            <button type="submit" disabled={pristine || submitting}>Rechercher</button>
          </div>
        </form>
      </div>
    )
  }
}
FormSearch = reduxForm({
  form: 'searchArticle'
})(FormSearch)

export default FormSearch;