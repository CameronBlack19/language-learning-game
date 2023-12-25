import React, { useState, useEffect } from 'react';
import './LanguageLearningGame.css';
import Leaderboard from './LeaderBoard/Leaderboard';
import UserProfile from './UserProfile/UserProfile';
import Settings from './Settings/Settings';
import Logout from './Logout/Logout';

const difficultyLevels = {
  1: {
    english: [
      {
        question: 'Translate "Hello" to Spanish:',
        options: ['Hola', 'Bonjour', 'Ciao', 'Hallo'],
        correctAnswer: 'Hola',
      },
      {
        question: 'Translate "Goodbye" to Spanish:',
        options: ['Adiós', 'Au revoir', 'Arrivederci', 'Auf Wiedersehen'],
        correctAnswer: 'Adiós',
      },
      {
        question: 'Translate "Yes" to Spanish:',
        options: ['Sí', 'No', 'Por favor', 'Gracias'],
        correctAnswer: 'Sí',
      },
      {
        question: 'Translate "Thank you" to Spanish:',
        options: ['Hola', 'Adiós', 'Gracias', 'Por favor'],
        correctAnswer: 'Gracias',
      },
      {
        question: 'Translate "How are you?" to Spanish:',
        options: ['¿Cómo estás?', '¿Qué tal?', 'Buenos días', 'Hasta luego'],
        correctAnswer: '¿Cómo estás?',
      },
    ],
    spanish: [
      {
        question: 'Translate "Hola" to English:',
        options: ['Hello', 'Bonjour', 'Ciao', 'Hallo'],
        correctAnswer: 'Hello',
      },
      {
        question: 'Translate "Adiós" to English:',
        options: ['Goodbye', 'Au revoir', 'Arrivederci', 'Auf Wiedersehen'],
        correctAnswer: 'Goodbye',
      },
      {
        question: 'Translate "Sí" to English:',
        options: ['Yes', 'No', 'Please', 'Thank you'],
        correctAnswer: 'Yes',
      },
      {
        question: 'Translate "Gracias" to English:',
        options: ['Hello', 'Goodbye', 'Thanks', 'Please'],
        correctAnswer: 'Thanks',
      },
      {
        question: 'Translate "¿Cómo estás?" to English:',
        options: ['How are you?', 'What\'s up?', 'Good morning', 'See you later'],
        correctAnswer: 'How are you?',
      },
    ],
  },
  // Add more difficulty levels as needed
};

const LanguageLearningGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [completedExercises, setCompletedExercises] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [difficultyLevel, setDifficultyLevel] = useState(1);
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [quizData, setQuizData] = useState([]);

  const handleLogoutClick = () => {
    // Perform logout actions
    console.log('Logout clicked'); // Add your logout logic here
  };

  useEffect(() => {
    const selectedDifficultyData =
      difficultyLevels[difficultyLevel]?.[selectedLanguage] || [];
    if (selectedDifficultyData.length > 0) {
      setQuizData(selectedDifficultyData);
    }
  }, [score, difficultyLevel, selectedLanguage]);

  useEffect(() => {
    if (score >= 3 && difficultyLevel < 3) {
      setDifficultyLevel((prevDifficulty) => prevDifficulty + 1);
    }
  }, [score, difficultyLevel]);

  useEffect(() => {
    const sampleLeaderboardData = [
      { name: 'User1', score: 10, language: 'english' },
      { name: 'User2', score: 8, language: 'spanish' },
      // Add more users and languages as needed
    ];

    setLeaderboardData(sampleLeaderboardData);
  }, [selectedLanguage, score]);

  const handleOptionClick = (selectedOption) => {
    if (!quizData[currentQuestion]) {
      console.error('Error: quizData for the current question is undefined');
      return;
    }

    if (selectedOption === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
      setCompletedExercises([...completedExercises, selectedLanguage]);
    }
  };

  const resetGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  const handleUserProfileClick = () => {
    setShowUserProfile(!showUserProfile);
    setShowSettings(false);
  };

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setSelectedLanguage(selectedLanguage);
    resetGame();
  };

  const handleSettingsClick = () => {
    setShowSettings(!showSettings);
    setShowUserProfile(false);
  };

  const handleResetProgress = () => {
    setCompletedExercises([]);
    setScore(0);
    setShowResult(false);
  };

  const handleDifficultyChange = (difficulty) => {
    setDifficultyLevel(difficulty);
    resetGame();
  };

  const getProgressMessage = () => {
    if (completedExercises.length === 0) {
      return 'Start learning to track your progress!';
    } else {
      const proficiencyLevel = calculateProficiencyLevel(
        completedExercises.length
      );
      return `You've completed ${completedExercises.length} exercises. Proficiency Level: ${proficiencyLevel}`;
    }
  };

  const calculateProficiencyLevel = (completedExercisesCount) => {
    if (completedExercisesCount < 3) {
      return 'Beginner';
    } else if (completedExercisesCount < 6) {
      return 'Intermediate';
    } else {
      return 'Advanced';
    }
  };

  // Unused function, can be removed
  // const unusedFunction = () => {
  //   console.log('Unused function');
  // };

  return (
    <div className="center-container">
      <div className="language-learning-game">
        <h1>Language Learning Game</h1>

        <div className="button-container">
          <button className="button" onClick={handleUserProfileClick}>
            User Profile
          </button>
          <button
            className="button"
            style={{ marginLeft: '20px' }}
            onClick={handleSettingsClick}
          >
            Settings
          </button>
          <Logout onClick={handleLogoutClick} />
        </div>

        {showUserProfile && (
          <UserProfile
            completedExercises={completedExercises}
            selectedLanguage={selectedLanguage}
            onResetProgress={handleResetProgress}
          />
        )}

        {showSettings && (
          <Settings
            selectedLanguage={selectedLanguage}
            onLanguageChange={handleLanguageChange}
            onDifficultyChange={handleDifficultyChange}
          />
        )}

        {showResult ? (
          <div className="result-container">
            <h2>Your Score: {score} / {quizData.length}</h2>
            <p>{getProgressMessage()}</p>
            <button onClick={resetGame}>Play Again</button>
          </div>
        ) : (
          <div className="quiz-container">
            {currentQuestion < quizData.length ? (
              <>
                <h2>Question {currentQuestion + 1}</h2>
                <p>{quizData[currentQuestion].question}</p>
                <div className="options-container">
                  {quizData[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleOptionClick(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </>
            ) : null}
          </div>
        )}

        <Leaderboard
          leaderboardData={leaderboardData}
          selectedLanguage={selectedLanguage}
        />

        <footer>
          <p>&copy; 2023 Pavan Mahesh. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default LanguageLearningGame;
