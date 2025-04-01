import { useState } from 'react';
import { Send, RotateCcw, Terminal, Cpu, Award } from 'lucide-react';
import colors from './types/colors';

function App() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [rating, setRating] = useState<number>(0);
  const [justification, setJustification] = useState('');
  const [isEvaluating, setIsEvaluating] = useState(false);

  const handleEvaluate = async () => {
    if (!question.trim() || !answer.trim()) return;
    
    setIsEvaluating(true);
    
    // Simulate evaluation with loading state
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setRating(6);
    setJustification(
      'The student has a basic understanding of the concept but could provide more detail. ' +
      'The answer covers the main points but lacks depth in explaining key features and functionalities. ' +
      'Consider expanding on specific capabilities and use cases.'
    );
    
    setIsEvaluating(false);
  };

  const handleClear = () => {
    setQuestion('');
    setAnswer('');
    setRating(0);
    setJustification('');
  };

  return (
    <div 
      className="min-h-screen w-full flex relative overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full"
          style={{ 
            background: `radial-gradient(circle, ${colors.accent1}15, transparent 70%)`,
            filter: 'blur(40px)'
          }}
        />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full"
          style={{ 
            background: `radial-gradient(circle, ${colors.accent2}15, transparent 70%)`,
            filter: 'blur(60px)'
          }}
        />
      </div>

      <div className="w-full grid lg:grid-cols-2 grid-cols-1 relative z-10">
        {/* Input Section */}
        <div 
          className="min-h-screen p-4 sm:p-6 border-b lg:border-b-0 lg:border-r"
          style={{ 
            backgroundColor: `${colors.panel}95`,
            borderColor: colors.uGray,
            backdropFilter: 'blur(10px)'
          }}
        >
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <Terminal className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: colors.primary }} />
            <h1 className="text-lg sm:text-xl font-bold" style={{ color: colors.textPrimary }}>
              Input Console
            </h1>
          </div>

          <div className="space-y-4">
            <div>
              <h2 
                className="text-base sm:text-lg font-semibold mb-2 flex items-center gap-2"
                style={{ color: colors.textPrimary }}
              >
                <span>Question</span>
                <div className="h-px flex-1" style={{ backgroundColor: colors.uGray }} />
              </h2>
              <input
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="w-full p-2 sm:p-3 rounded-lg transition-all duration-200 focus:ring-2"
                placeholder="Enter your question..."
                style={{
                  backgroundColor: colors.uBlack,
                  color: colors.textPrimary,
                  border: `1px solid ${colors.uGray}`,
                  outline: 'none',
                }}
              />
            </div>

            <div>
              <h2 
                className="text-base sm:text-lg font-semibold mb-2 flex items-center gap-2"
                style={{ color: colors.textPrimary }}
              >
                <span>Answer</span>
                <div className="h-px flex-1" style={{ backgroundColor: colors.uGray }} />
              </h2>
              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="w-full p-2 sm:p-3 rounded-lg resize-none transition-all duration-200 focus:ring-2"
                style={{
                  backgroundColor: colors.uBlack,
                  color: colors.textPrimary,
                  border: `1px solid ${colors.uGray}`,
                  outline: 'none',
                  height: 'calc(min(60vh, 400px))',
                }}
              />
            </div>

            <div className="flex space-x-3">
              <button
                onClick={handleEvaluate}
                disabled={isEvaluating}
                className="flex-1 py-2 px-3 sm:px-4 rounded-lg flex items-center justify-center space-x-2 transition-all duration-200 hover:scale-[1.02] text-sm sm:text-base"
                style={{
                  backgroundColor: isEvaluating ? colors.disabled : colors.primary,
                  color: colors.uBlack,
                }}
              >
                {isEvaluating ? (
                  <>
                    <Cpu className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Evaluate</span>
                  </>
                )}
              </button>

              <button
                onClick={handleClear}
                disabled={isEvaluating}
                className="py-2 px-3 sm:px-4 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-[1.02]"
                style={{
                  backgroundColor: colors.secondary,
                  color: colors.textPrimary,
                  opacity: isEvaluating ? 0.5 : 1,
                }}
              >
                <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Output Section */}
        <div 
          className="min-h-screen p-4 sm:p-6"
          style={{ 
            backgroundColor: `${colors.panel}95`,
            backdropFilter: 'blur(10px)'
          }}
        >
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <Award className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: colors.primary }} />
            <h1 className="text-lg sm:text-xl font-bold" style={{ color: colors.textPrimary }}>
              Evaluation Results
            </h1>
          </div>

          <div className="space-y-4">
            <div>
              <h2 
                className="text-base sm:text-lg font-semibold mb-2 flex items-center gap-2"
                style={{ color: colors.textPrimary }}
              >
                <span>Rating</span>
                <div className="h-px flex-1" style={{ backgroundColor: colors.uGray }} />
              </h2>
              <div 
                className="p-3 sm:p-4 rounded-lg flex items-center gap-3 transition-all duration-300"
                style={{ 
                  backgroundColor: colors.uBlack,
                  color: colors.textPrimary,
                  border: `1px solid ${colors.uGray}`,
                  opacity: rating ? 1 : 0.7,
                }}
              >
                {rating ? (
                  <>
                    <div 
                      className="text-2xl sm:text-3xl font-bold"
                      style={{ color: colors.primary }}
                    >
                      {rating}
                    </div>
                    <div className="text-lg sm:text-xl">/</div>
                    <div className="text-lg sm:text-xl">10</div>
                  </>
                ) : 'Not evaluated'}
              </div>
            </div>

            <div>
              <h2 
                className="text-base sm:text-lg font-semibold mb-2 flex items-center gap-2"
                style={{ color: colors.textPrimary }}
              >
                <span>Justification</span>
                <div className="h-px flex-1" style={{ backgroundColor: colors.uGray }} />
              </h2>
              <div 
                className="p-3 sm:p-4 rounded-lg overflow-y-auto transition-all duration-300"
                style={{ 
                  backgroundColor: colors.uBlack,
                  color: colors.textPrimary,
                  border: `1px solid ${colors.uGray}`,
                  opacity: justification ? 1 : 0.7,
                  height: 'calc(min(60vh, 400px))',
                }}
              >
                {justification || 'No justification provided'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;