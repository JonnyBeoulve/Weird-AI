import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import axios from 'axios';

import '../../static/scss/main.scss';

import lyricsFile from '../../store/lyrics.json';
import lyricsQuizFile from '../../store/quiz-lyrics.json';

/* The container serves as the home for the app. */
class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lyrics: null,
      lyricsQuizReal: lyricsQuizFile.realLyrics,
      lyricsQuizFake: lyricsQuizFile.weirdAILyrics,
      lyricsQuizAnswer: null,
      lyricsQuizQuestion1: '',
      lyricsQuizQuestion2: '',
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

    var tag = this.state.tagInput.toLowerCase();
    if (tag === 'kitchen') {
      this.setState({
        lyrics: lyricsFile[tag],
        showInputCard: false,
        showLyricsCard: true
      });
    } else if (tag === 'tech') {
      this.setState({
        lyrics: lyricsFile[tag],
        showInputCard: false,
        showLyricsCard: true
      });
    } else if (tag === 'globant') {
      this.setState({
        lyrics: lyricsFile[tag],
        showInputCard: false,
        showLyricsCard: true
      });
    } else if (tag === 'coffee') {
      this.setState({
        lyrics: lyricsFile[tag],
        showInputCard: false,
        showLyricsCard: true
      });
    } else if (tag === 'paisley') {
      this.setState({
        lyrics: lyricsFile[tag],
        showInputCard: false,
        showLyricsCard: true
      });
    } else if (tag === 'albatross') {
      this.setState({
        lyrics: lyricsFile[tag],
        showInputCard: false,
        showLyricsCard: true
      });
    } else if (tag === 'eat') {
      this.setState({
        lyrics: lyricsFile[tag],
        showInputCard: false,
        showLyricsCard: true
      });
    } else if (tag === 'artificial intelligence revolution') {
      this.setState({
        lyrics: lyricsFile[tag],
        showInputCard: false,
        showLyricsCard: true
      });
    } else if (tag === 'hackathon blues') {
      this.setState({
        lyrics: lyricsFile[9],
        showInputCard: false,
        showLyricsCard: true
      });
    } else {
      this.setState({
        lyrics: lyricsFile[" "],
        showInputCard: false,
        showLyricsCard: true
      });
    }
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

  /* This will handle transitioning a user to the quiz card. It will
  randomize questions from a JSON file to be displayed. */
  handleGoToQuiz = () => {
    let realLyricIndex = Math.floor(Math.random() * 6);
    let fakeLyricIndex = Math.floor(Math.random() * 10);
    let correctAnswerIndex = Math.round(Math.random());

    if (correctAnswerIndex === 0) {
      this.setState({
        lyricsQuizAnswer: 0,
        lyricsQuizQuestion1: this.state.lyricsQuizReal[realLyricIndex],
        lyricsQuizQuestion2: this.state.lyricsQuizFake[fakeLyricIndex],
        showInputCard: false,
        showLyricsCard: false,
        showQuizCard: true,
        showCorrectAnswerCard: false,
        showWrongAnswerCard: false
      });
    } else {
      this.setState({
        lyricsQuizAnswer: 1,
        lyricsQuizQuestion1: this.state.lyricsQuizFake[fakeLyricIndex],
        lyricsQuizQuestion2: this.state.lyricsQuizReal[realLyricIndex],
        showInputCard: false,
        showLyricsCard: false,
        showQuizCard: true,
        showCorrectAnswerCard: false,
        showWrongAnswerCard: false
      });
    }
  }

  /* This will handle seletion of lyric 1. */
  handleSelectLyric0 = () => {
    if (this.state.lyricsQuizAnswer === 0) {
      this.setState({
        showInputCard: false,
        showLyricsCard: false,
        showQuizCard: false,
        showCorrectAnswerCard: true,
        showWrongAnswerCard: false
      });
    } else {
      this.setState({
        showInputCard: false,
        showLyricsCard: false,
        showQuizCard: false,
        showCorrectAnswerCard: false,
        showWrongAnswerCard: true
      });
    }
  }

  /* This will handle seletion of lyric 1. */
  handleSelectLyric1 = () => {
    if (this.state.lyricsQuizAnswer === 1) {
      this.setState({
        showInputCard: false,
        showLyricsCard: false,
        showQuizCard: false,
        showCorrectAnswerCard: true,
        showWrongAnswerCard: false
      });
    } else {
      this.setState({
        showInputCard: false,
        showLyricsCard: false,
        showQuizCard: false,
        showCorrectAnswerCard: false,
        showWrongAnswerCard: true
      });
    }
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
                  <input className="home-card-input" type="text" placeholder="Enter a word" onChange={e => this.setState({ tagInput: e.target.value })} />
                  <div className="home-card-buttons">
                    <button className="home-card-button" type="submit" value="Submit">Generate a Song</button>
                    <button className="home-card-button-2" onClick={this.handleGoToQuiz}>Can You Spot the Fake?</button>
                  </div>
                </form>
              </div>
            </div>
          : null
        }
        {(this.state.showLyricsCard)
          ? <div className="home-lyrics">
              <h3 className="home-lyrics-text">
              {this.state.lyrics.split("\n").map((i,key) => {
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
                    {this.state.lyricsQuizQuestion1.split("\n").map((i,key) => {
                      return <h3 className="home-quiz-card-lyric" key={key}>{i}</h3>;
                    })}
                    <button className="home-quiz-card-button" onClick={this.handleSelectLyric0}>Weird A.I.</button>
                  </div>
                </div>
                <div className="col-1-of-2">
                  <div className="home-quiz-card">
                    <h2 className="home-quiz-card-header">Lyric 2</h2>
                    {this.state.lyricsQuizQuestion2.split("\n").map((i,key) => {
                      return <h3 className="home-quiz-card-lyric" key={key}>{i}</h3>;
                    })}
                    <button className="home-quiz-card-button-2" onClick={this.handleSelectLyric1}>Weird A.I.</button>
                  </div>
                </div>
              </div>
            </div>
          : null
        }
        {(this.state.showCorrectAnswerCard)
          ? <div className="home-answer" style={{backgroundImage: 'url(' + require('../../static/img/al-yankovic.jpg') + ')'}}>
              <h2 className="home-answer-text">Correct! You successfully detected the A.I.</h2>
              <div className="home-lyrics-footer">
                <div className="row">
                  <div className="home-card-buttons">
                    <button className="home-lyrics-footer-button" onClick={this.handleGoToQuiz}>Try Another Quote</button>
                    <button className="home-lyrics-footer-button-2" onClick={this.handleGoToInput}>Return Home</button>
                  </div>
                </div>
              </div>
            </div>
          : null
        }
        {(this.state.showWrongAnswerCard)
          ? <div className="home-answer" style={{backgroundImage: 'url(' + require('../../static/img/al-yankovic.jpg') + ')'}}>
              <h2 className="home-answer-text">Wrong! The A.I. has defeated you.</h2>
              <div className="home-lyrics-footer">
                <div className="row">
                  <div className="home-card-buttons">
                    <button className="home-lyrics-footer-button" onClick={this.handleGoToQuiz}>Try Another Quote</button>
                    <button className="home-lyrics-footer-button-2" onClick={this.handleGoToInput}>Return Home</button>
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
