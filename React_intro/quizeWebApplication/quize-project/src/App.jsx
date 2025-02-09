import  { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, Brain, Calculator, Code, Database, Book } from 'lucide-react';

// Quiz data remains the same as previous version...
const quizData = {
  // ... (previous quiz data remains unchanged)
};

const QuizApp = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const categories = Object.keys(quizData);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'numerical':
        return <Calculator className="w-6 h-6 mb-2" />;
      case 'logical':
        return <Brain className="w-6 h-6 mb-2" />;
      case 'verbal':
        return <Book className="w-6 h-6 mb-2" />;
      case 'cpp':
        return <Code className="w-6 h-6 mb-2" />;
      case 'dsa':
        return <Database className="w-6 h-6 mb-2" />;
      default:
        return null;
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setShowFeedback(false);
  };

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    setShowFeedback(true);

    if (answer === quizData[selectedCategory][currentQuestion].correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < quizData[selectedCategory].length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowScore(true);
      }
      setSelectedAnswer(null);
      setShowFeedback(false);
    }, 1000);
  };

  const resetQuiz = () => {
    setSelectedCategory(null);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setShowFeedback(false);
  };

  const getProgressPercentage = () => {
    return ((currentQuestion + 1) / quizData[selectedCategory].length) * 100;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 p-8">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-xl border-t-4 border-t-blue-500">
          <CardHeader className="bg-white rounded-t-lg">
            <CardTitle className="text-3xl text-center text-gray-800 font-bold">
              Interactive Quiz Application
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            {!selectedCategory ? (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-center mb-8 text-gray-700">
                  Choose Your Challenge
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      onClick={() => handleCategorySelect(category)}
                      className="flex flex-col items-center justify-center h-32 text-lg capitalize bg-white hover:bg-blue-50 text-gray-800 border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 rounded-xl shadow-md hover:shadow-lg"
                    >
                      {getCategoryIcon(category)}
                      <span>{category}</span>
                    </Button>
                  ))}
                </div>
              </div>
            ) : showScore ? (
              <div className="text-center space-y-8 py-8">
                <div className="mb-8">
                  <div className="inline-block p-4 rounded-full bg-blue-100">
                    {score >= quizData[selectedCategory].length * 0.7 ? (
                      <CheckCircle className="w-16 h-16 text-green-500" />
                    ) : (
                      <XCircle className="w-16 h-16 text-red-500" />
                    )}
                  </div>
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">Quiz Completed!</h2>
                <div className="space-y-4">
                  <p className="text-4xl font-bold text-blue-600">
                    {Math.round((score / quizData[selectedCategory].length) * 100)}%
                  </p>
                  <p className="text-lg text-gray-600">
                    You scored {score} out of {quizData[selectedCategory].length}
                  </p>
                </div>
                <Button 
                  onClick={resetQuiz}
                  className="mt-8 bg-blue-500 hover:bg-blue-600 text-lg px-8 py-4 rounded-lg"
                >
                  Try Another Category
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>Question {currentQuestion + 1} of {quizData[selectedCategory].length}</span>
                    <span>Score: {score}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-500 h-2.5 rounded-full transition-all duration-300"
                      style={{ width: `${getProgressPercentage()}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-medium text-gray-800 mb-6">
                    {quizData[selectedCategory][currentQuestion].question}
                  </h3>
                  <div className="space-y-3">
                    {quizData[selectedCategory][currentQuestion].options.map(
                      (option, index) => (
                        <Button
                          key={index}
                          onClick={() => handleAnswerSelect(option)}
                          className={`w-full justify-between px-6 py-4 text-left text-lg ${
                            showFeedback
                              ? option === quizData[selectedCategory][currentQuestion].correct
                                ? "bg-green-500 hover:bg-green-600 text-white"
                                : option === selectedAnswer
                                ? "bg-red-500 hover:bg-red-600 text-white"
                                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                              : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                          } transition-all duration-300`}
                          disabled={showFeedback}
                        >
                          <span>{option}</span>
                          {showFeedback && (
                            option === quizData[selectedCategory][currentQuestion].correct ? (
                              <CheckCircle className="h-5 w-5" />
                            ) : option === selectedAnswer ? (
                              <XCircle className="h-5 w-5" />
                            ) : null
                          )}
                        </Button>
                      )
                    )}
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuizApp;