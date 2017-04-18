import React from 'react';
import Title from './Title.jsx';
import Question from './Question.jsx';
import Answer from './Answer.jsx';
import Footer from './Footer.jsx';
import Score from './Score.jsx';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      questionCounter: 0,
      score: 0,
      questions: [
        '1. Inside which HTML element do we put the JavaScript?',
        '2. How do you write "Hello World" in an alert box?',
        '3. Which event occurs when the user clicks on an HTML element?',
        '4. How do you declare a JavaScript variable?',
        '5. Which operator is used to assign a value to a variable?'
      ],
      answers: [
        ['<javascript>','<js>','<script>','<scripting>'],
        ['alert("Hello World");','msgBox("Hello World");','msg("Hello World");','alertBox("Hello World");'],
        ['onmouseclick','onclick','onchange','onmouseover'],
        ['v carName;','variable carName;','var carName;','war carName;'],
        ['*','-','x','=']
      ],
      questionClass: 'questions',
      answerClass: 'answer',
      scoreClass: 'score'
    };
    this.increaseQuestionCounter = this.increaseQuestionCounter.bind(this);
    this.increaseScore = this.increaseScore.bind(this);
  }

  increaseQuestionCounter() {
    var counter = this.state.questionCounter;
    if (counter < this.state.questions.length - 1) {
      this.setState({questionCounter: ++counter});
    } else {
      this.setState({questionClass: 'hideElement', answerClass:'hideElement', scoreClass:'showElement'})
    }
  }

  increaseScore(value) {
    var counter = this.state.score;
    switch (value) {
      case '<script>':
          this.setState({score: ++counter});
        break;
      case 'alert("Hello World");':
          this.setState({score: ++counter});
        break;
      case 'onclick':
          this.setState({score: ++counter});
        break;
      case 'var carName;':
          this.setState({score: ++counter});
        break;
      case '=':
          this.setState({score: ++counter});
        break;
      default:
        console.log('bad choice!');
    }
  }

   render() {
      return (
         <div className="content">
            <Title />
            <Question
              headerQuestion={this.state.questions}
              questionCounter={this.state.questionCounter}
              questionClass={this.state.questionClass}
            />
            <Answer
              answers={this.state.answers}
              answerClass={this.state.answerClass}
              increaseQuestionCounter={this.increaseQuestionCounter.bind(this)}
              questionCounter={this.state.questionCounter}
              increaseScore={this.increaseScore.bind(this)}
            />
            <Score score={this.state.score} scoreClass={this.state.scoreClass}/>
            <Footer />
         </div>
      );
   }
}

export default App;
