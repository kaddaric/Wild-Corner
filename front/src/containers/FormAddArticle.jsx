import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'


class FormAddArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {

    const { handleSubmit, pristine, submitting } = this.props;

    return (
      <div className="FormAddArticle">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Article</label>
            <div>
              <Field
                name="article"
                component="input"
                type="text"
                placeholder="Article"
              />
            </div>
          </div>
          <div>
            <label>Position</label>
            <div>
              <Field
                name="position"
                component="input"
                type="text"
                placeholder="Position"
              />
            </div>
          </div>
          <div>
            <label>Prix</label>
            <div>
              <Field
                name="prix"
                component="input"
                type="text"
                placeholder="Prix"
              />
            </div>
          </div>
          <div>
            <label>Identification</label>
            <div>
              <Field
                name="id_propriétaire"
                component="input"
                type="text"
                placeholder="Id"
              />
            </div>
          </div>
          <div>
            <button type="submit" disabled={pristine || submitting}>Envoyer</button>
          </div>
        </form>
      </div>
    )
  }
}
FormAddArticle = reduxForm({
  // a unique name for the form
  form: 'newArticle'
})(FormAddArticle)

export default FormAddArticle;