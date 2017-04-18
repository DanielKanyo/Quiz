import React from 'react';

class Answer extends React.Component {

  handleIncrease(e) {
    //The target event property returns the element that triggered the event.
    var value = e.target.value;
    this.props.increaseQuestionCounter();
    this.props.increaseScore(value);
  }

   render() {
      return (
         <div>
          <ul className='answers'>
            <li>
              <button className={this.props.answerClass} value={this.props.answers[this.props.questionCounter][0]} onClick={this.handleIncrease.bind(this)}>
                {this.props.answers[this.props.questionCounter][0]}
              </button>
            </li>
            <li>
              <button className={this.props.answerClass} value={this.props.answers[this.props.questionCounter][1]} onClick={this.handleIncrease.bind(this)}>
                {this.props.answers[this.props.questionCounter][1]}
              </button>
            </li>
            <li>
              <button className={this.props.answerClass} value={this.props.answers[this.props.questionCounter][2]} onClick={this.handleIncrease.bind(this)}>
                {this.props.answers[this.props.questionCounter][2]}
              </button>
            </li>
            <li>
              <button className={this.props.answerClass} value={this.props.answers[this.props.questionCounter][3]} onClick={this.handleIncrease.bind(this)}>
                {this.props.answers[this.props.questionCounter][3]}
              </button>
            </li>
          </ul>
         </div>
      );
   }
}

export default Answer;
