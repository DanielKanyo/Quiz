import React from 'react';

class Score extends React.Component {
   render() {
      return (
         <div className={this.props.scoreClass}>
           Correct answer:<br />{this.props.score}/5
         </div>
      );
   }
}

export default Score;
