import React, { Component } from 'react';
import Card from './card.js';


class Game extends Component {

  constructor(props) {
    super(props);
    this.state = {
        cards: this.setupCards(),
        count: 0,
        currentCard: undefined,
    }
  };

  setupCardUrls = () => {
    return [
      'https://yt3.ggpht.com/a-/AN66SAwDoOF_JchDxBDjM1-TBRxjMfyH1PvG97L0UQ=s900-mo-c-c0xffffffff-rj-k-no',
      'https://upload.wikimedia.org/wikipedia/en/b/bf/CD_Projekt_Logo.png',
      'https://akibapress.com/wp-content/uploads/2017/06/Bethesda-Logo.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Rockstar_Games_Logo.svg/2000px-Rockstar_Games_Logo.svg.png',
      'https://ih1.redbubble.net/image.37514286.0124/pp,550x550.u2.jpg',
      'https://res.cloudinary.com/teepublic/image/private/s--ZXqEzJub--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1464817760/production/designs/530516_1.jpg',
      'https://www.ghoststorygames.com/site/themes/campfire2016/images/irrational-games-logo.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Edmund_McMillen_cropped.jpg/250px-Edmund_McMillen_cropped.jpg'];
  }

  setupCards = () => {
    const imgUrls = this.setupCardUrls();
    let cards = [];
    let arrayCounters = [0,0,0,0,0,0,0,0]

    for (var i = 0; i < 16; i++) {
      let x = Math.floor(Math.random() *8);
      while (arrayCounters[x] > 1)
        x = Math.floor(Math.random() *8);
      cards.push(<Card key={i} imgUrl={imgUrls[x]} id={x} handleClick={this.handleCardClick} />);
      arrayCounters[x] += 1;
    }
    return cards;
  };

  handleCardClick = (card) => {
    const { currentCard } = this.state;
      if (currentCard) {
        const { count } = this.state;
        if (card.id == currentCard.id) {
          this.setState({ currentCard: undefined, count: count + 1 }, () => {
            card.callback(true);
            currentCard.callback(true);
          });
          if (count === 7) {
            setTimeout(() => {
              alert("HA GANADO");
            }, 1000);
          }
        } else {
          this.setState({ currentCard: undefined }, () => setTimeout(() => {
            card.callback(false);
            currentCard.callback(false);
          }, 1500));
        }
      } else {
        this.setState({ currentCard: card})
      }
      
  };

  render() {
    console.log('entro');
    return(
      <div className="memory-table">
        {
          this.state.cards
        }
      </div>
    );
  }
}

export default Game;