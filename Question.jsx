import React from 'react';

class Question extends React.Component {
   render() {
      return (
         <div className={this.props.questionClass}>
           {this.props.headerQuestion[this.props.questionCounter]}
         </div>
      );
   }
}

export default Question;
