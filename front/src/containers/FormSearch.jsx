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
            <label>Par mot clé</label>
            <div>
              <Field
                name="article"
                component="input"
                type="text"
                placeholder="Rechercher un article"
              />
            </div>
          </div>
          <div>
            <label>Par localisation</label>
            <div>
              <Field
                name="position"
                component="input"
                type="text"
                placeholder="Rechercher une localisation"
              />
            </div>
          </div>
          <Row>
            <Col sm="6">
              <label>Par prix</label>
              <div>
                <Col sm="12">
                  <label>
                    <Field
                      name="prix"
                      component="input"
                      type="radio"
                      value="1"
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
                      value="2"
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
                      value="3"
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
                      value="4"
                    />{' '}
                    plus de 200 €
                  </label>
                </Col>
              </div>
            </Col>
            <Col sm="6">
              <label>Par catégorie</label>
              <div>
                <Col sm="12">
                  <label>
                    <Field
                      name="catégorie"
                      component="input"
                      type="radio"
                      value="Immobilier"
                    />{' '}
                    Immobilier
                  </label>
                </Col>
                <Col sm="12">
                  <label>
                    <Field
                      name="catégorie"
                      component="input"
                      type="radio"
                      value="Vetement"
                    />{' '}
                    Vetement
                  </label>
                </Col>
                <Col sm="12">
                  <label>
                    <Field
                      name="catégorie"
                      component="input"
                      type="radio"
                      value="Briolage"
                    />{' '}
                    Briolage
                  </label>
                </Col>
                <Col sm="12">
                  <label>
                    <Field
                      name="catégorie"
                      component="input"
                      type="radio"
                      value="Jeu - Jouet"
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
  form: 'serachArticle'
})(FormSearch)

export default FormSearch;