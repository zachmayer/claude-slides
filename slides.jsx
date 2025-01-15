import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle, Palette, Rocket, Share, Wand2, Download } from 'lucide-react';

const Deck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      type: "title",
      title: "Creating Beautiful Presentations with Claude",
      subtitle: "The Simple Way to Build Modern Decks",
      icon: <Rocket className="w-16 h-16 text-blue-500 mb-6" />
    },
    {
      type: "statement",
      content: "Stop wrestling with traditional presentation software.",
      subcontent: "Just tell Claude what you want, and watch the magic happen.",
      icon: <Wand2 className="w-12 h-12 text-purple-500 mb-4" />
    },
    {
      title: "Why Create Decks with Claude?",
      bullets: [
        "🎯 Focus on your content, not the formatting",
        "✨ Professional designs handled automatically",
        "🔄 Easy to revise and refine",
        "📱 Looks great on any device"
      ],
      type: "feature"
    },
    {
      type: "prompt",
      title: "Getting Started is Simple",
      content: "Just tell Claude:",
      prompt: '"Create a React presentation deck about [your topic]"',
      subcontent: "That's it! Claude will create your initial deck structure.",
      icon: <MessageCircle className="w-8 h-8 text-green-500" />
    },
    {
      type: "conversation",
      title: "The Perfect Workflow",
      exchanges: [
        {
          you: "Create a deck about team building",
          claude: "I'll create an interactive presentation. Would you prefer a professional or casual style?"
        },
        {
          you: "Professional please",
          claude: "Here's your deck! Let me know if you'd like to adjust any slides."
        },
        {
          you: "Make the third slide more impactful",
          claude: "I'll enhance that slide with stronger visuals and bolder statements."
        }
      ]
    },
    {
      type: "style-example",
      title: "Choose Your Style",
      examples: [
        {
          name: "Professional",
          desc: "Clean, corporate look",
          className: "bg-white border-2 border-gray-200 shadow-lg"
        },
        {
          name: "Bold & Modern",
          desc: "High impact, great for pitches",
          className: "bg-gradient-to-br from-blue-500 to-purple-600 text-white"
        },
        {
          name: "Casual",
          desc: "Perfect for team meetings",
          className: "bg-yellow-50 border-2 border-yellow-200"
        }
      ],
      icon: <Palette className="w-8 h-8 text-indigo-500" />
    },
    {
      type: "tips",
      title: "Pro Tips for Great Results",
      tips: [
        {
          title: "Be Specific",
          content: "Tell Claude your audience and purpose"
        },
        {
          title: "Iterate",
          content: "Ask for changes slide by slide"
        },
        {
          title: "Experiment",
          content: "Try different styles and tones"
        }
      ]
    },
    {
      type: "artifact-export",
      title: "Publishing Your Deck",
      content: "Share your deck in seconds:",
      steps: [
        "Click the 'Publish' button in the bottom right",
        "Get your shareable presentation link"
      ],
      note: "That's it - your deck is ready to share!",
      icon: <Share className="w-8 h-8 text-orange-500" />
    },
    {
      type: "hosting",
      title: "Share Your Deck on GitHub Pages",
      content: "Free hosting for your presentation in 3 easy steps:",
      steps: [
        "1. Push your deck to a GitHub repository",
        "2. Go to repository Settings → Pages",
        "3. Enable GitHub Pages from main branch"
      ],
      note: "Your deck will be live at: username.github.io/repo-name",
      icon: <Share className="w-8 h-8 text-green-500" />
    },
    {
      type: "end",
      title: "Ready to Create Your First Deck?",
      content: 'Start with: "Claude, help me create a React presentation about..."',
      subcontent: "Then refine it until it's perfect!"
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  const renderSlide = (slide) => {
    switch (slide.type) {
      case "title":
        return (
          <div className="flex flex-col items-center justify-center h-full text-center">
            {slide.icon}
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              {slide.title}
            </h1>
            <h2 className="text-2xl text-gray-600">{slide.subtitle}</h2>
          </div>
        );

      case "statement":
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-8">
            {slide.icon}
            <p className="text-4xl font-bold mb-6">{slide.content}</p>
            <p className="text-xl text-gray-600">{slide.subcontent}</p>
          </div>
        );

      case "feature":
        return (
          <div className="h-full">
            <h2 className="text-3xl font-bold mb-8">{slide.title}</h2>
            <ul className="space-y-6">
              {slide.bullets.map((bullet, index) => (
                <li key={index} className="text-xl flex items-center">
                  <span className="mr-4">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        );

      case "prompt":
        return (
          <div className="flex flex-col items-center justify-center h-full text-center">
            {slide.icon}
            <h2 className="text-3xl font-bold mb-6">{slide.title}</h2>
            <p className="text-xl mb-4">{slide.content}</p>
            <div className="bg-gray-100 p-6 rounded-lg text-2xl font-mono text-blue-600 mb-4">
              {slide.prompt}
            </div>
            <p className="text-lg text-gray-600">{slide.subcontent}</p>
          </div>
        );

      case "conversation":
        return (
          <div className="h-full">
            <h2 className="text-3xl font-bold mb-4">{slide.title}</h2>
            <div className="space-y-3">
              {slide.exchanges.map((exchange, index) => (
                <div key={index} className="space-y-1.5">
                  <div className="bg-blue-50 p-2.5 rounded-lg">
                    <span className="font-bold text-blue-700 text-sm">You: </span>
                    <span className="text-gray-800 text-sm">{exchange.you}</span>
                  </div>
                  <div className="bg-purple-50 p-2.5 rounded-lg">
                    <span className="font-bold text-purple-700 text-sm">Claude: </span>
                    <span className="text-gray-800 text-sm">{exchange.claude}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "style-example":
        return (
          <div className="h-full">
            <div className="flex items-center gap-3 mb-6">
              {slide.icon}
              <h2 className="text-3xl font-bold">{slide.title}</h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {slide.examples.map((example, index) => (
                <div key={index} className={`p-4 rounded-lg ${example.className}`}>
                  <h3 className="font-bold text-lg mb-1">{example.name}</h3>
                  <p className="text-sm">{example.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case "tips":
        return (
          <div className="h-full">
            <h2 className="text-3xl font-bold mb-8">{slide.title}</h2>
            <div className="grid grid-cols-1 gap-6">
              {slide.tips.map((tip, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded-lg">
                  <h3 className="font-bold text-lg mb-1">{tip.title}</h3>
                  <p className="text-gray-700 text-sm">{tip.content}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case "artifact-export":
        return (
          <div className="flex flex-col items-center h-full text-center">
            <div className="flex items-center gap-3 mb-6">
              {slide.icon}
              <h2 className="text-3xl font-bold">{slide.title}</h2>
            </div>
            <p className="text-xl mb-6">{slide.content}</p>
            <div className="bg-orange-50 p-6 rounded-lg w-full max-w-md border-2 border-orange-100">
              {slide.steps.map((step, index) => (
                <div key={index} className="text-left mb-4 text-lg">
                  {step}
                </div>
              ))}
            </div>
            <p className="text-gray-600 mt-4 text-sm">{slide.note}</p>
          </div>
        );

      case "hosting":
        return (
          <div className="flex flex-col items-center h-full text-center">
            <div className="flex items-center gap-3 mb-6">
              {slide.icon}
              <h2 className="text-3xl font-bold">{slide.title}</h2>
            </div>
            <p className="text-xl mb-6">{slide.content}</p>
            <div className="bg-gray-50 p-6 rounded-lg w-full max-w-md">
              {slide.steps.map((step, index) => (
                <div key={index} className="text-left mb-4 text-lg">
                  {step}
                </div>
              ))}
            </div>
            <p className="text-gray-600 mt-4 font-mono text-sm">{slide.note}</p>
          </div>
        );

      case "quit":
        return (
          <div className="flex flex-col items-center justify-center h-full text-center">
            {slide.icon}
            <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
            <p className="text-2xl mb-3 text-gradient bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">{slide.content}</p>
            <p className="text-xl text-gray-600">{slide.subcontent}</p>
          </div>
        );

      case "end":
        return (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <h2 className="text-4xl font-bold mb-6">{slide.title}</h2>
            <p className="text-xl mb-4">{slide.content}</p>
            <p className="text-lg text-gray-600">{slide.subcontent}</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gray-50 p-4 border-b flex justify-between items-center">
        <span className="text-sm font-medium text-gray-600">
          Slide {currentSlide + 1} of {slides.length}
        </span>
        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-2 rounded-lg hover:bg-gray-200 disabled:opacity-50 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="p-2 rounded-lg hover:bg-gray-200 disabled:opacity-50 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      {/* Slide content */}
      <div className="p-8 h-96">
        {renderSlide(slides[currentSlide])}
      </div>
      
      {/* Navigation dots */}
      <div className="flex justify-center gap-2 p-4 bg-gray-50">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Deck;
