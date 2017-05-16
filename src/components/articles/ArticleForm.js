import React from 'react';
import classnames from 'classnames';
import { findDOMNode } from 'react-dom'

class ArticleForm extends React.Component {
  state = {
    id: '',
    article_name: '',
    article_type: '',
    article_image: '',
    errors: {},
    loading: false
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      id: nextProps.article ? nextProps.article.id : '',
      article_name: nextProps.article ? nextProps.article.article_name : '',
      article_type: nextProps.article ? nextProps.article.article_type : '',
      article_image: nextProps.article ? nextProps.article.article_image : ''
    });
  }

  handleChange = (e) => {
    if (!!this.state.errors[e.target.name]) {
      let errors = Object.assign({}, this.state.errors);
      delete errors[e.target.name];
      this.setState({
        [e.target.name]: e.target.value,
        errors
      });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // validation
    let errors = {};
    if (this.state.article_name === '') errors.article_name = "Can't be empty";
    if (this.state.article_type === '') errors.article_type = "Can't be empty";
    if (findDOMNode(this.refs.myFile).files[0] === undefined && this.props.params.id === undefined) errors.article_image = "Can't be empty";
    this.setState({ errors });
    const isValid = Object.keys(errors).length === 0

    if (isValid) {
       let upload_file = ''; let upload_file_name = '';
      if(findDOMNode(this.refs.myFile).files[0]) {
        upload_file = findDOMNode(this.refs.myFile).files[0];
        upload_file_name = findDOMNode(this.refs.myFile).files[0].name;
      }
      const { id, article_name, article_type } = this.state;
      this.setState({ loading: true });
      let data = {id:id, article_name:article_name, article_type:article_type, file_name:upload_file_name}
      this.props.saveArticle({ data, upload_file })
        .catch((err) => err.response.json().then(({errors}) => this.setState({ errors, loading: false })));
    }
  }

  render() {
    const img_url = require('location').origin+'/files/';

    const form = (
      <form className={classnames('ui', 'form', { loading: this.state.loading })} onSubmit={this.handleSubmit}>
        <h1>Add new article</h1>

        {!!this.state.errors.global && <div className="ui negative message"><p>{this.state.errors.global}</p></div>}

        <div className={classnames('field', { error: !!this.state.errors.article_name})}>
          <label htmlFor="article_name">Article Name</label>
          <input
            name="article_name"
            value={this.state.article_name}
            onChange={this.handleChange}
            id="article_name"
          />
          <span>{this.state.errors.article_name}</span>
        </div>

        <div className={classnames('field', { error: !!this.state.errors.article_type})}>
          <label htmlFor="article_type">Article Type</label>
          <input
            name="article_type"
            value={this.state.article_type}
            onChange={this.handleChange}
            id="article_type"
          />
          <span>{this.state.errors.article_type}</span>
        </div>
        <div className={classnames('field', { error: !!this.state.errors.article_image})}>
          <input
            type='file'
            ref='myFile'
            name="article_image"
            className='form-control' />
            <span>{this.state.errors.article_image}</span>
        </div>
        <div className="field">
          {this.state.article_image !== '' && <img src={img_url+this.state.article_image} alt="cover" className="ui small bordered image"/>}
        
        </div>

        <div className="field">
          <button className="ui primary button">Save</button>
        </div>
      </form>
    );
    return (
      <div>
        { form }
      </div>
    );
  }
}


export default ArticleForm;
