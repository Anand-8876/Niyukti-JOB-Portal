import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Question {
  id: string;
  text: string;
  type: 'technical' | 'behavioral' | 'hr';
  difficulty: 'easy' | 'medium' | 'hard';
  expectedAnswer?: string;
}

interface InterviewData {
  id: string;
  type: 'technical' | 'hr' | 'behavioral';
  duration: number;
  questions: Question[];
  currentQuestionIndex: number;
  answers: { questionId: string; answer: string; timestamp: number }[];
  score?: number;
  feedback?: string;
  startTime?: number;
  endTime?: number;
}

interface InterviewContextType {
  currentInterview: InterviewData | null;
  startInterview: (type: 'technical' | 'hr' | 'behavioral', duration: number) => string;
  submitAnswer: (answer: string) => void;
  nextQuestion: () => void;
  finishInterview: () => void;
  getInterviewResults: (id: string) => InterviewData | null;
}

const InterviewContext = createContext<InterviewContextType | undefined>(undefined);

const mockQuestions = {
  technical: [
    {
      id: '1',
      text: 'Explain the difference between let, const, and var in JavaScript.',
      type: 'technical' as const,
      difficulty: 'easy' as const,
    },
    {
      id: '2',
      text: 'How would you optimize a React application for better performance?',
      type: 'technical' as const,
      difficulty: 'medium' as const,
    },
    {
      id: '3',
      text: 'Design a scalable system architecture for a social media platform.',
      type: 'technical' as const,
      difficulty: 'hard' as const,
    },
  ],
  behavioral: [
    {
      id: '4',
      text: 'Tell me about a time when you had to work with a difficult team member.',
      type: 'behavioral' as const,
      difficulty: 'medium' as const,
    },
    {
      id: '5',
      text: 'Describe a situation where you had to learn something new quickly.',
      type: 'behavioral' as const,
      difficulty: 'easy' as const,
    },
  ],
  hr: [
    {
      id: '6',
      text: 'Why are you interested in this position?',
      type: 'hr' as const,
      difficulty: 'easy' as const,
    },
    {
      id: '7',
      text: 'Where do you see yourself in 5 years?',
      type: 'hr' as const,
      difficulty: 'medium' as const,
    },
  ],
};

export function InterviewProvider({ children }: { children: ReactNode }) {
  const [currentInterview, setCurrentInterview] = useState<InterviewData | null>(null);

  const startInterview = (type: 'technical' | 'hr' | 'behavioral', duration: number): string => {
    const id = `interview_${Date.now()}`;
    const questions = mockQuestions[type];
    
    const newInterview: InterviewData = {
      id,
      type,
      duration,
      questions,
      currentQuestionIndex: 0,
      answers: [],
      startTime: Date.now(),
    };

    setCurrentInterview(newInterview);
    localStorage.setItem(`interview_${id}`, JSON.stringify(newInterview));
    
    return id;
  };

  const submitAnswer = (answer: string) => {
    if (!currentInterview) return;

    const currentQuestion = currentInterview.questions[currentInterview.currentQuestionIndex];
    const newAnswer = {
      questionId: currentQuestion.id,
      answer,
      timestamp: Date.now(),
    };

    const updatedInterview = {
      ...currentInterview,
      answers: [...currentInterview.answers, newAnswer],
    };

    setCurrentInterview(updatedInterview);
    localStorage.setItem(`interview_${updatedInterview.id}`, JSON.stringify(updatedInterview));
  };

  const nextQuestion = () => {
    if (!currentInterview) return;

    const updatedInterview = {
      ...currentInterview,
      currentQuestionIndex: currentInterview.currentQuestionIndex + 1,
    };

    setCurrentInterview(updatedInterview);
    localStorage.setItem(`interview_${updatedInterview.id}`, JSON.stringify(updatedInterview));
  };

  const finishInterview = () => {
    if (!currentInterview) return;

    // Calculate mock score based on answers
    const score = Math.floor(Math.random() * 30) + 70; // Random score between 70-100
    const feedback = `You demonstrated ${score > 85 ? 'excellent' : score > 75 ? 'good' : 'fair'} knowledge and communication skills. ${
      score > 85 ? 'Great job on technical depth!' : 'Consider expanding on your examples.'
    }`;

    const completedInterview = {
      ...currentInterview,
      score,
      feedback,
      endTime: Date.now(),
    };

    setCurrentInterview(completedInterview);
    localStorage.setItem(`interview_${completedInterview.id}`, JSON.stringify(completedInterview));
  };

  const getInterviewResults = (id: string): InterviewData | null => {
    const stored = localStorage.getItem(`interview_${id}`);
    return stored ? JSON.parse(stored) : null;
  };

  return (
    <InterviewContext.Provider value={{
      currentInterview,
      startInterview,
      submitAnswer,
      nextQuestion,
      finishInterview,
      getInterviewResults,
    }}>
      {children}
    </InterviewContext.Provider>
  );
}

export function useInterview() {
  const context = useContext(InterviewContext);
  if (context === undefined) {
    throw new Error('useInterview must be used within an InterviewProvider');
  }
  return context;
}