import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'reactstrap';


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
            <label className="labelForm">Article</label>
            <div>
              <Field
                name="article"
                component="input"
                type="text"
                placeholder="Article"
                className="form-control" 
              />
            </div>
          </div>
          <div>
            <label className="labelForm">Position</label>
            <div>
              <Field
                name="position"
                component="input"
                type="text"
                placeholder="Position"
                className="form-control" 
              />
            </div>
          </div>
          <div>
            <label className="labelForm">Prix</label>
            <div>
              <Field
                name="prix"
                component="input"
                type="text"
                placeholder="Prix"
                className="form-control" 
              />
            </div>
          </div>
          <div>
            <Button type="submit" disabled={pristine || submitting}>Envoyer</Button>
          </div>
        </form>
      </div>
    )
  }
}
FormAddArticle = reduxForm({
  form: 'newArticle'
})(FormAddArticle)

export default FormAddArticle;