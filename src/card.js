import React, { Component } from 'react';



class Card extends Component {
	
	constructor(props) {
		super(props);
    this.state = {
      canFlip: true,
      flipped: false
    }
    this.handleOnClick = this.handleOnClick.bind(this);
    this.callback = this.callback.bind(this);
	}

  handleOnClick() {
    const { flipped } = this.state;
    if (this.state.canFlip) {      
      this.setState({ flipped: !flipped });
      if (!flipped) {
        this.props.handleClick({id: this.props.id, callback: this.callback});
      }
    }
  }

  callback(bool) {
    if (bool) {
      this.setState({ canFlip: false });
    } else {
      this.handleOnClick();
    }
  }

	render() {
    return (
      <div className="flip-card" onClick={this.handleOnClick}>
        <div className={`flip-card-new ${this.state.flipped? 'flipped': ''}`}>
          <img className="front" src="https://i.pinimg.com/originals/38/63/b3/3863b3b0eef1d377a59adfbf3918346e.png" />
          <img className="back" src={this.props.imgUrl} />
        </div>
      </div>
    );
  }
}

// "https://www.ganeshawebtech.com/images/react-web-business-logo.png"
export default Card;