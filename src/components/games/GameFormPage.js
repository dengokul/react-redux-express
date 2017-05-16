import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { saveGame, fetchGame, updateGame, fetchGames } from '../../actions/gameActions';
import GameForm from './GameForm';

class GameFormPage extends React.Component {

  state = {
    redirect: false
  }
  componentDidMount() {
    this.props.fetchGames();
  }
 /* componentDidMount = () => {
    if (this.props.params.id) {
      this.props.fetchGame(this.props.params.id);
    }
  }
*/
 
saveGame = ({id, title, cover }) => {
  if (id) {
    return this.props.updateGame({ id, title, cover }).then(
      () => { this.setState({ redirect: true })},
    );
  } else {
    return this.props.saveGame({ title, cover }).then(
      () => { this.setState({ redirect: true })},
    );
  }
}

render() {
  return (
    <div>
      {
        this.state.redirect ?
        browserHistory.push('/games') :
        <GameForm
          game={this.props.game}
          saveGame={this.saveGame}
        />
      }
        
    </div>
      );
  }
}

function getGameById(games, id) {
  let game = games.find(game => game.id === Number(id))
  return game
}

function mapStateToProps(state, props) {  
  console.log(state)
  let game = {id: '', title: '', cover: ''}
  if (state.games.length > 0) { 
    game = getGameById(state.games, props.params.id);
    //game = Object.assign({}, state.games.find(item => item.id == props.params.id))
    //game = state.games.find(item => item.id == props.params.id)
  }
  return {game: game}
};

export default connect(mapStateToProps, { saveGame, fetchGame, updateGame, fetchGames })(GameFormPage);
