import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteMyArticle } from '../actions/objets';
import { Badge } from 'reactstrap'

class ArticlesList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }    
  

  render() {

    const { articles, myaccount, deleteMyArticle } = this.props
    return (
      <div className="ArticlesList">
        <ul>
          {
            articles.map(objet => {
              return (
                <div key={objet.id}>
                  <li >
                    <div className="row">
                      <div className="col-2">
                        <img src="" alt="img_article"></img>
                      </div>
                      <div className="col-8">
                        <h4 className="col-12">{objet.article}</h4>
                        <h6 className="col-12">{objet.position}</h6>
                      </div>
                      <div className="col-2">
                        {
                          myaccount ? (
                            <div>
                              <Badge color="danger" onClick={() => deleteMyArticle(objet.id)}>X</Badge> 
                              <Badge color="secondary">I</Badge>
                            </div>
                          ) : null
                        }
                        <div>
                          {objet.prix} €
                        </div>
                      </div>
                    </div>
                  </li>
                </div>
              )
            })
          }
        </ul>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ deleteMyArticle }, dispatch)
}
export default connect(null, mapDispatchToProps)(ArticlesList);