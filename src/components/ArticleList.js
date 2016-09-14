import React, { Component, PropTypes } from 'react';
import Article from './Article';
import toggleOpenArticle from '../decorators/toggleOpenArticle';
import CSSTransition from 'react-addons-css-transition-group';
import './articleList.css';
class ArticleList extends Component {

	render() {
		

		const { openArticleId, articles, toggleOpenArticle } = this.props;

		const articleItems = articles.map(
			articleObject => (
				<li key = {articleObject.id}>
					<Article 
						comments = {articleObject.comments ? articleObject.comments : []} 
						article = {articleObject} 
						isOpen = {openArticleId === articleObject.id}
						toggleOpen = {toggleOpenArticle(articleObject.id)}
					/> 
				</li>));

		return (
	        <CSSTransition transitionName = 'article' transitionLeaveTimeout = {1000} transitionEnterTimeout = {500}>
	            {articleItems}
	        </CSSTransition>
	    );
	}   
}


/*
 * при указании openArticleId isRequired - ругается
 * это изз того, что эти свойства образуются после декоратора?
 */
 //ты инициализируешь openArticleId: null. И оно ругаеться, что обязаетльно должна быть строка, а не приходит

ArticleList.propTypes = {
	articles: PropTypes.array,
	toggleOpenArticle: PropTypes.func.isRequired,
	openArticleId: PropTypes.string
};



export default toggleOpenArticle(ArticleList);
