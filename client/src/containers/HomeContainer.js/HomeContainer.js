import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import axios from 'axios';

import '../../static/scss/main.scss';

import lyricsFile from '../../store/lyrics.json';

/* The container serves as the home for the app. */
class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lyrics: lyricsFile.lyrics,
      tagInput: '',
      showInputCard: true,
      showLyricsCard: false,
      showQuizCard: false,
      showCorrectAnswerCard: false,
      showWrongAnswerCard: false
    };
  }

  /* This will handle tag submission. */
  handleTagSubmit = (e) => {
    e.preventDefault();
    this.setState({
      showInputCard: false,
      showLyricsCard: true
    });
    /*
    axios ({
      method: 'post',
      url: `http://api.localhost/account/login`,
      data: {
          email: this.state.loginEmail,
          password: this.state.loginPassword
      },
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
        console.log(res);
        if(res.data.success === 1) {
            this.setState({
                loggedIn: true,
                loginErrorMessage: ''
            });
        } else {
            console.log(res);
            this.setState({
                loginErrorMessage: res.data.message
            });
        }
    })
    .catch(error => {
        console.log('Error fetching and parsing data', error);
    })
    */
  }
  /* This will handle transitioning a user to the quiz card. */
  handleGoToQuiz = () => {
    this.setState({
      showInputCard: false,
      showLyricsCard: false,
      showQuizCard: true,
      showCorrectAnswerCard: false,
      showWrongAnswerCard: false
    });
  }

  /* This will handle transitioning a user back to the input card. */
  handleGoToInput = () => {
    this.setState({
      showInputCard: true,
      showLyricsCard: false,
      showQuizCard: false,
      showCorrectAnswerCard: false,
      showWrongAnswerCard: false
    });
  }

  /* This will handle seletion of lyric 1. */
  handleSelectLyric1 = () => {
    this.setState({
      showInputCard: false,
      showLyricsCard: false,
      showQuizCard: false,
      showCorrectAnswerCard: true,
      showWrongAnswerCard: false
    });
  }

  /* This will handle seletion of lyric 2. */
  handleSelectLyric2 = () => {
    this.setState({
      showInputCard: false,
      showLyricsCard: false,
      showQuizCard: false,
      showCorrectAnswerCard: false,
      showWrongAnswerCard: true
    });
  }

  render() {
    return (
      <div className="home">
        <Header />
        {(this.state.showInputCard)
          ? <div className="row">
              <div className="home-card">
                <h2 className="home-card-header">Throw us a word to write your own song.</h2>
                <form onSubmit={this.handleTagSubmit}>
                  <input className="home-card-input" type="email" name="email" placeholder="Enter a tag" onChange={e => this.setState({ tagInput: e.target.value })} />
                  <div className="home-card-buttons">
                    <button className="home-card-button" type="submit" value="Submit">Generate a Song</button>
                    <button className="home-card-button" onClick={this.handleGoToQuiz}>Can You Spot the Fake?</button>
                  </div>
                </form>
              </div>
            </div>
          : null
        }
        {(this.state.showLyricsCard)
          ? <div className="home-lyrics">
              <h3 className="home-lyrics-text">
              {this.state.lyrics.split("\\n").map((i,key) => {
                return <div key={key}>{i}</div>;
              })}
              </h3>
              <div className="home-lyrics-footer">
                <div className="row">
                <button className="home-lyrics-footer-button" onClick={this.handleGoToInput}>Create New Song</button>
                </div>
              </div>
            </div>
          : null
        }
        {(this.state.showQuizCard)
          ? <div className="home-quiz">
              <div className="row">
                <h2 className="home-quiz-header">Which is Weird AL and which is Weird A.I.?</h2>
                <div className="col-1-of-2">
                  <div className="home-quiz-card">
                    <h2 className="home-quiz-card-header">Lyric 1</h2>
                    <h3 className="home-quiz-card-lyric">As I walk through the valley where I harvest my grain</h3>
                    <h3 className="home-quiz-card-lyric">I take a look at my wife and realize she's very plain</h3>
                    <button className="home-quiz-card-button" onClick={this.handleSelectLyric1}>Weird A.I.</button>
                  </div>
                </div>
                <div className="col-1-of-2">
                  <div className="home-quiz-card">
                    <h2 className="home-quiz-card-header">Lyric 2</h2>
                    <h3 className="home-quiz-card-lyric">As I walk through the valley where I harvest my grain</h3>
                    <h3 className="home-quiz-card-lyric">I take a look at my wife and realize she's very plain</h3>
                    <button className="home-quiz-card-button" onClick={this.handleSelectLyric2}>Weird A.I.</button>
                  </div>
                </div>
              </div>
            </div>
          : null
        }
        {(this.state.showCorrectAnswerCard)
          ? <div className="home-answer-correct" style={{backgroundImage: 'url(' + require('../../static/img/al-yankovic.jpg') + ')'}}>
              <h2 className="home-answer-correct-text">Correct! You successfully detected the Weird A.I. robot.</h2>
              <div className="home-lyrics-footer">
                <div className="row">
                  <div className="home-card-buttons">
                    <button className="home-lyrics-footer-button" onClick={this.handleGoToQuiz}>Try Another Quote</button>
                    <button className="home-lyrics-footer-button" onClick={this.handleGoToInput}>Return Home</button>
                  </div>
                </div>
              </div>
            </div>
          : null
        }
        {(this.state.showWrongAnswerCard)
          ? <div className="home-answer-correct" style={{backgroundImage: 'url(' + require('../../static/img/al-yankovic.jpg') + ')'}}>
              <h2 className="home-answer-correct-text">Wrong! The Weird A.I. robot defeated you.</h2>
              <div className="home-lyrics-footer">
                <div className="row">
                  <div className="home-card-buttons">
                    <button className="home-lyrics-footer-button" onClick={this.handleGoToQuiz}>Try Another Quote</button>
                    <button className="home-lyrics-footer-button" onClick={this.handleGoToInput}>Return Home</button>
                  </div>
                </div>
              </div>
            </div>
          : null
        }
      </div>
    );
  }
}

export default HomeContainer;
