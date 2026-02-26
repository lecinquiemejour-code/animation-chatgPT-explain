import React, { useState, useEffect } from 'react';
import { User, Monitor, Wifi, Server } from 'lucide-react';

const NeuralNetwork = ({ isActive }) => {
  return (
    <div className="relative w-12 h-12">
      {/* Layer 1 */}
      <div className="absolute left-0 top-1 space-y-1">
        <div className={`w-2 h-2 rounded-full border-2 ${isActive ? 'border-purple-400 bg-purple-400 shadow-lg shadow-purple-400 animate-pulse' : 'border-purple-400 bg-transparent'} transition-all`} />
        <div className={`w-2 h-2 rounded-full border-2 ${isActive ? 'border-purple-400 bg-purple-400 shadow-lg shadow-purple-400 animate-pulse' : 'border-purple-400 bg-transparent'} transition-all`} />
        <div className={`w-2 h-2 rounded-full border-2 ${isActive ? 'border-purple-400 bg-purple-400 shadow-lg shadow-purple-400 animate-pulse' : 'border-purple-400 bg-transparent'} transition-all`} />
        <div className={`w-2 h-2 rounded-full border-2 ${isActive ? 'border-purple-400 bg-purple-400 shadow-lg shadow-purple-400 animate-pulse' : 'border-purple-400 bg-transparent'} transition-all`} />
      </div>
      
      {/* Layer 2 */}
      <div className="absolute left-4 top-2 space-y-2">
        <div className={`w-2 h-2 rounded-full border-2 ${isActive ? 'border-purple-400 bg-purple-400 shadow-lg shadow-purple-400 animate-pulse' : 'border-purple-400 bg-transparent'} transition-all`} />
        <div className={`w-2 h-2 rounded-full border-2 ${isActive ? 'border-purple-400 bg-purple-400 shadow-lg shadow-purple-400 animate-pulse' : 'border-purple-400 bg-transparent'} transition-all`} />
        <div className={`w-2 h-2 rounded-full border-2 ${isActive ? 'border-purple-400 bg-purple-400 shadow-lg shadow-purple-400 animate-pulse' : 'border-purple-400 bg-transparent'} transition-all`} />
      </div>
      
      {/* Layer 3 */}
      <div className="absolute right-0 top-3">
        <div className={`w-2 h-2 rounded-full border-2 ${isActive ? 'border-purple-400 bg-purple-400 shadow-lg shadow-purple-400 animate-pulse' : 'border-purple-400 bg-transparent'} transition-all`} />
        <div className={`w-2 h-2 rounded-full border-2 ${isActive ? 'border-purple-400 bg-purple-400 shadow-lg shadow-purple-400 animate-pulse' : 'border-purple-400 bg-transparent'} transition-all mt-2`} />
      </div>
      
      {/* Connections */}
      {isActive && (
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
          <line x1="8" y1="6" x2="16" y2="10" stroke="#a855f7" strokeWidth="2" opacity="0.8" className="animate-pulse" />
          <line x1="8" y1="10" x2="16" y2="10" stroke="#a855f7" strokeWidth="2" opacity="0.8" className="animate-pulse" />
          <line x1="8" y1="14" x2="16" y2="14" stroke="#a855f7" strokeWidth="2" opacity="0.8" className="animate-pulse" />
          <line x1="20" y1="10" x2="40" y2="16" stroke="#a855f7" strokeWidth="2" opacity="0.8" className="animate-pulse" />
          <line x1="20" y1="14" x2="40" y2="20" stroke="#a855f7" strokeWidth="2" opacity="0.8" className="animate-pulse" />
        </svg>
      )}
    </div>
  );
};

const Prompto = ({ currentStep }) => {
  const getPosition = () => {
    switch(currentStep) {
      case 0: return { left: '15%', top: '45%', transform: 'scale(1)' };
      case 1: return { left: '47%', top: '40%', transform: 'scale(0.8)' };
      case 2: return { left: '68%', top: '35%', transform: 'scale(0.9)' };
      case 3: return { left: '75%', top: '45%', transform: 'scale(1)' };
      case 4: return { left: '75%', top: '45%', transform: 'scale(1)' };
      case 5: return { left: '50%', top: '40%', transform: 'scale(0.8)' };
      case 6: return { left: '15%', top: '65%', transform: 'scale(1)' };
      default: return { left: '15%', top: '45%', transform: 'scale(1)' };
    }
  };

  const getBubblePosition = () => {
    switch(currentStep) {
      case 0: return { left: '25%', top: '35%' }; // Décalée à droite de Prompto
      case 1: return { left: '55%', top: '25%' }; // Au-dessus d'Internet  
      case 2: return { left: '85%', top: '25%' }; // À droite du serveur
      case 3: return { left: '85%', top: '60%' }; // À droite et en bas de l'IA  
      case 4: return { left: '85%', top: '75%' }; // Encore plus en bas à droite
      case 5: return { left: '35%', top: '25%' }; // Au-dessus d'Internet, côté gauche
      case 6: return { left: '5%', top: '80%' }; // En bas à gauche
      default: return { left: '25%', top: '35%' };
    }
  };

  const position = getPosition();
  const bubblePosition = getBubblePosition();

  return (
    <>
      {/* Robot */}
      <div 
        className="absolute transition-all duration-1500 ease-in-out"
        style={{
          left: position.left,
          top: position.top,
          transform: `translate(-50%, -50%) ${position.transform}`,
          zIndex: 20
        }}
      >
        <div className={`relative ${currentStep >= 1 && currentStep <= 5 ? 'animate-bounce' : ''}`}>
          {/* Corps du robot - tête ovale plus large que haute */}
          <div className="w-10 h-8 bg-gradient-to-b from-teal-400 to-teal-600 rounded-full border-2 border-teal-300 relative shadow-lg">
            {/* Antenne */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              <div className="w-0.5 h-2 bg-teal-300"></div>
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full border border-yellow-300 animate-pulse"></div>
            </div>
            
            {/* Petites oreilles */}
            <div className="absolute top-2 -left-1 w-1.5 h-2 bg-teal-500 rounded-full border border-teal-300"></div>
            <div className="absolute top-2 -right-1 w-1.5 h-2 bg-teal-500 rounded-full border border-teal-300"></div>
            
            {/* Yeux - bien écartés pour la forme large */}
            <div className="absolute top-2.5 left-1.5 w-1.5 h-1 bg-white rounded-full"></div>
            <div className="absolute top-2.5 right-1.5 w-1.5 h-1 bg-white rounded-full"></div>
            
            {/* Bouche/écran - petite ligne quand il traite */}
            {currentStep === 3 && (
              <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-2 h-0.5 bg-green-400 rounded animate-pulse"></div>
            )}
          </div>
          
          {/* Effet de déplacement */}
          {(currentStep === 1 || currentStep === 2 || currentStep === 5 || currentStep === 6) && (
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-0.5">
                <div className="w-0.5 h-0.5 bg-cyan-400 rounded animate-ping"></div>
                <div className="w-0.5 h-0.5 bg-cyan-400 rounded animate-ping" style={{animationDelay: '100ms'}}></div>
                <div className="w-0.5 h-0.5 bg-cyan-400 rounded animate-ping" style={{animationDelay: '200ms'}}></div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Bulles de dialogue - positionnées indépendamment */}
      {currentStep === 0 && (
        <div 
          className="absolute transition-all duration-1500 ease-in-out bg-white text-gray-800 text-xs px-2 py-1 rounded-lg shadow-lg whitespace-nowrap z-30"
          style={{
            left: bubblePosition.left,
            top: bubblePosition.top,
            transform: 'translate(-50%, -50%)'
          }}
        >
          Prêt ! 🚀
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-white transform rotate-45"></div>
        </div>
      )}
      
      {currentStep === 1 && (
        <div 
          className="absolute transition-all duration-1500 ease-in-out bg-blue-500 text-white text-xs px-2 py-1 rounded-lg shadow-lg whitespace-nowrap z-30"
          style={{
            left: bubblePosition.left,
            top: bubblePosition.top,
            transform: 'translate(-50%, -50%)'
          }}
        >
          Vers l'IA ! 🧠
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-500 transform rotate-45 -mt-1"></div>
        </div>
      )}
      
      {currentStep === 2 && (
        <div 
          className="absolute transition-all duration-1500 ease-in-out bg-purple-500 text-white text-xs px-2 py-1 rounded-lg shadow-lg whitespace-nowrap z-30"
          style={{
            left: bubblePosition.left,
            top: bubblePosition.top,
            transform: 'translate(-50%, -50%)'
          }}
        >
          Analyse... 🔍
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-purple-500 transform rotate-45"></div>
        </div>
      )}
      
      {currentStep === 3 && (
        <div 
          className="absolute transition-all duration-1500 ease-in-out bg-purple-500 text-white text-xs px-2 py-1 rounded-lg shadow-lg whitespace-nowrap z-30"
          style={{
            left: bubblePosition.left,
            top: bubblePosition.top,
            transform: 'translate(-50%, -50%)'
          }}
        >
          Traitement en cours... 🔍
          <div className="absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-purple-500 transform rotate-45"></div>
        </div>
      )}
      
      {currentStep === 4 && (
        <div 
          className="absolute transition-all duration-1500 ease-in-out bg-orange-500 text-white text-xs px-2 py-1 rounded-lg shadow-lg whitespace-nowrap z-30"
          style={{
            left: bubblePosition.left,
            top: bubblePosition.top,
            transform: 'translate(-50%, -50%)'
          }}
        >
          Génération terminée ! ⚡
          <div className="absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-orange-500 transform rotate-45"></div>
        </div>
      )}
      
      {currentStep === 5 && (
        <div 
          className="absolute transition-all duration-1500 ease-in-out bg-cyan-500 text-white text-xs px-2 py-1 rounded-lg shadow-lg whitespace-nowrap z-30"
          style={{
            left: bubblePosition.left,
            top: bubblePosition.top,
            transform: 'translate(-50%, -50%)'
          }}
        >
          En route vers l'utilisateur ! 🚀
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cyan-500 transform rotate-45 -mt-1"></div>
        </div>
      )}
      
      {currentStep === 6 && (
        <div 
          className="absolute transition-all duration-1500 ease-in-out bg-green-500 text-white text-xs px-2 py-1 rounded-lg shadow-lg z-30"
          style={{
            left: bubblePosition.left,
            top: bubblePosition.top,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div className="text-center">
            <div>Mission</div>
            <div>accomplie ! ✅</div>
          </div>
          <div className="absolute top-0 right-1/2 transform -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-green-500 transform rotate-45"></div>
        </div>
      )}
    </>
  );
};


const AnimatedArrow = ({ direction, show, delay = 0 }) => {
  if (!show) return null;
  
  return (
    <div 
      className={`absolute top-1/2 transform -translate-y-1/2 transition-all duration-1000 ease-in-out ${
        direction === 'right' ? 'animate-bounce' : 'animate-bounce'
      }`}
      style={{
        left: direction === 'right' ? '33%' : '67%',
        animationDelay: `${delay}ms`,
        zIndex: 15
      }}
    >
      <div className={`flex items-center space-x-1 ${direction === 'left' ? 'flex-row-reverse space-x-reverse' : ''}`}>
        <div className="w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-400"></div>
        <div className={`w-0 h-0 border-l-2 border-r-2 border-b-2 border-transparent ${
          direction === 'right' ? 'border-l-cyan-400' : 'border-r-cyan-400'
        } drop-shadow-lg`}></div>
      </div>
    </div>
  );
};

const DataPacket = ({ show, direction = 'right', color = '#3B82F6' }) => {
  if (!show) return null;
  
  return (
    <div 
      className={`absolute top-1/2 w-3 h-3 rounded-full transform -translate-y-1/2 transition-all duration-2000 ease-in-out ${
        direction === 'right' ? 'animate-pulse' : ''
      }`}
      style={{
        background: `linear-gradient(45deg, ${color}, ${color}88)`,
        left: direction === 'right' ? '28%' : '72%',
        boxShadow: `0 0 15px ${color}`,
        zIndex: 15
      }}
    />
  );
};

const ChatGPTAnimation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const steps = [
    {
      title: "L'utilisateur tape sa question",
      description: "Dans son navigateur web (côté client)"
    },
    {
      title: "Le prompt quitte l'appareil",
      description: "Voyage à travers Internet vers les serveurs"
    },
    {
      title: "Arrivée sur les serveurs OpenAI",
      description: "Le prompt atteint les serveurs distants"
    },
    {
      title: "L'IA traite la demande",
      description: "Le modèle ChatGPT analyse et génère la réponse"
    },
    {
      title: "La réponse est créée",
      description: "ChatGPT termine la génération de la réponse"
    },
    {
      title: "La réponse quitte le serveur",
      description: "La réponse repart des serveurs OpenAI"
    },
    {
      title: "Retour à l'utilisateur",
      description: "La réponse s'affiche dans le navigateur"
    }
  ];

  // Animation automatique
  useEffect(() => {
    let timer;
    if (isAutoPlaying) {
      timer = setTimeout(() => {
        if (currentStep < steps.length - 1) {
          setCurrentStep(currentStep + 1);
        } else {
          setIsAutoPlaying(false);
        }
      }, 2000); // Délai de 2 secondes entre chaque étape
    }
    return () => clearTimeout(timer);
  }, [currentStep, isAutoPlaying, steps.length]);

  const toggleAutoPlay = () => {
    if (isAutoPlaying) {
      setIsAutoPlaying(false);
    } else {
      if (currentStep === steps.length - 1) {
        setCurrentStep(0);
      }
      setIsAutoPlaying(true);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl">
      {/* En-tête */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-white mb-2">Comment fonctionne ChatGPT ?</h1>
        <p className="text-gray-300">Découvrez le parcours d'une question de votre navigateur jusqu'à l'IA</p>
      </div>

      {/* Barre de progression */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4 gap-2">
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              disabled={isAutoPlaying}
              className={`flex-1 p-2 rounded-lg transition-all duration-300 text-xs font-medium ${
                index === currentStep
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg scale-105'
                  : index < currentStep
                  ? 'bg-green-900 text-green-300 hover:bg-green-800 border border-green-500'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 border border-gray-600'
              } ${isAutoPlaying ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <div className="flex items-center justify-center mb-1">
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                  index === currentStep ? 'bg-white text-purple-500' : ''
                }`}>
                  {index + 1}
                </span>
              </div>
              <div className="text-xs leading-tight">{step.title}</div>
            </button>
          ))}
        </div>
        
        {/* Description de l'étape courante */}
        <div className="text-center p-4 bg-gray-800 rounded-lg shadow-sm border-l-4 border-purple-500">
          <h3 className="font-bold text-white mb-1">{steps[currentStep].title}</h3>
          <p className="text-gray-300 text-sm">{steps[currentStep].description}</p>
        </div>
      </div>

      {/* Contenu principal : Animation + Boutons côte à côte */}
      <div className="flex gap-6">
        
        {/* Diagramme principal - plus large, moins haut */}
        <div className="flex-1 relative bg-gray-900 rounded-xl shadow-lg p-4 overflow-hidden border border-gray-700">
          
          {/* Labels des zones */}
          <div className="absolute top-2 left-4 z-10">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              CÔTÉ CLIENT
            </div>
          </div>
          <div className="absolute top-2 right-4 z-10">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              CÔTÉ SERVEUR
            </div>
          </div>

          {/* Ligne de séparation en pointillés */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 border-l-4 border-dashed border-purple-400 transform -translate-x-1/2 z-5" />
          
          {/* Nuage Internet */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className={`transition-all duration-500 ${
              (currentStep >= 1 && currentStep <= 2) || (currentStep >= 5 && currentStep <= 6) ? 'scale-110 opacity-100' : 'scale-100 opacity-50'
            }`}>
              <div className={`transition-all duration-500 ${
                (currentStep >= 1 && currentStep <= 2) || (currentStep >= 5 && currentStep <= 6) ? 'animate-pulse' : ''
              }`}>
                <Wifi className={`w-10 h-10 transition-all duration-500 ${
                  (currentStep >= 1 && currentStep <= 2) || (currentStep >= 5 && currentStep <= 6)
                    ? 'text-blue-400 drop-shadow-2xl filter brightness-125' 
                    : 'text-blue-400'
                }`} />
              </div>
              <div className={`text-xs font-medium mt-1 text-center transition-all duration-500 ${
                (currentStep >= 1 && currentStep <= 2) || (currentStep >= 5 && currentStep <= 6)
                  ? 'text-blue-400 font-bold animate-pulse' 
                  : 'text-blue-400'
              }`}>Internet</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 h-64 mt-6">
            
            {/* Côté Client */}
            <div className="flex flex-col items-center justify-center space-y-6">
              
              {/* Utilisateur */}
              <div className={`transition-all duration-500 ${
                currentStep === 0 || currentStep === 6 ? 'scale-110 ring-4 ring-green-400 shadow-2xl shadow-green-400' : 'scale-100'
              }`}>
                <div className={`border-4 p-3 rounded-full shadow-xl bg-transparent transition-all duration-500 ${
                  currentStep === 0 || currentStep === 6 
                    ? 'border-green-400 shadow-green-400 shadow-2xl animate-pulse' 
                    : 'border-green-400'
                }`}>
                  <User className={`w-8 h-8 transition-all duration-500 ${
                    currentStep === 0 || currentStep === 6 ? 'text-green-400 drop-shadow-lg' : 'text-green-400'
                  }`} />
                </div>
                <div className={`text-center mt-2 font-medium text-xs transition-all duration-500 ${
                  currentStep === 0 || currentStep === 6 ? 'text-green-400 font-bold' : 'text-gray-300'
                }`}>Utilisateur</div>
              </div>

              {/* Ordinateur/Navigateur */}
              <div className={`transition-all duration-500 ${
                currentStep === 0 || currentStep === 6 ? 'scale-110 ring-4 ring-blue-400 shadow-2xl shadow-blue-400' : 'scale-100'
              }`}>
                <div className={`border-4 p-3 rounded-xl shadow-xl bg-transparent transition-all duration-500 ${
                  currentStep === 0 || currentStep === 6 
                    ? 'border-blue-400 shadow-blue-400 shadow-2xl animate-pulse' 
                    : 'border-blue-400'
                }`}>
                  <Monitor className={`w-8 h-8 transition-all duration-500 ${
                    currentStep === 0 || currentStep === 6 ? 'text-blue-400 drop-shadow-lg' : 'text-blue-400'
                  }`} />
                </div>
                <div className={`text-center mt-2 font-medium text-xs transition-all duration-500 ${
                  currentStep === 0 || currentStep === 6 ? 'text-blue-400 font-bold' : 'text-gray-300'
                }`}>Navigateur Web</div>
                
                {/* Label "prompt" */}
                <div className={`text-center mt-2 text-xs font-medium transition-all duration-500 ${
                  currentStep === 0 ? 'text-purple-400 animate-pulse font-bold' : 'text-purple-400'
                }`}>
                  Prompt
                </div>
                
                {/* Zone de chat simulée */}
                <div className={`mt-1 border rounded-lg p-1.5 w-32 shadow-inner transition-all duration-500 ${
                  currentStep === 0 || currentStep === 6 
                    ? 'bg-gray-800 border-blue-400 shadow-blue-400 shadow-lg' 
                    : 'bg-gray-800 border-gray-600'
                }`}>
                  <div className={`text-xs transition-all duration-500 ${
                    currentStep === 0 ? 'opacity-100 scale-105' : 'opacity-70'
                  }`}>
                    <div className={`border p-1 rounded text-right transition-all duration-500 ${
                      currentStep === 0 
                        ? 'bg-transparent border-blue-400 text-blue-400 shadow-blue-400 shadow-lg animate-pulse' 
                        : 'bg-transparent border-blue-400 text-blue-400'
                    }`}>
                      "Explique-moi l'IA"
                    </div>
                    {currentStep === 6 && (
                      <div className="bg-transparent border border-green-400 text-green-400 p-1 rounded animate-pulse shadow-green-400 shadow-lg text-xs mt-1">
                        "L'IA est une technologie..."
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Côté Serveur */}
            <div className="flex flex-col items-center justify-center space-y-6">
              
              {/* Serveurs OpenAI */}
              <div className={`transition-all duration-500 ${
                currentStep >= 2 && currentStep <= 5 ? 'scale-110 ring-4 ring-orange-400 shadow-2xl shadow-orange-400' : 'scale-100'
              }`}>
                <div className={`border-4 p-3 rounded-xl shadow-xl bg-transparent transition-all duration-500 ${
                  currentStep >= 2 && currentStep <= 5 
                    ? 'border-orange-400 shadow-orange-400 shadow-2xl animate-pulse' 
                    : 'border-orange-400'
                }`}>
                  <Server className={`w-8 h-8 transition-all duration-500 ${
                    currentStep >= 2 && currentStep <= 5 ? 'text-orange-400 drop-shadow-lg' : 'text-orange-400'
                  }`} />
                </div>
                <div className={`text-center mt-2 font-medium text-xs transition-all duration-500 ${
                  currentStep >= 2 && currentStep <= 5 ? 'text-orange-400 font-bold' : 'text-gray-300'
                }`}>Serveurs OpenAI</div>
              </div>

              {/* Modèle IA */}
              <div className={`transition-all duration-500 ${
                currentStep === 3 || currentStep === 4 ? 'scale-110 ring-4 ring-purple-400 shadow-2xl shadow-purple-400' : 'scale-100'
              }`}>
                <div className={`border-4 p-3 rounded-full shadow-xl relative bg-transparent transition-all duration-500 ${
                  currentStep === 3 || currentStep === 4 
                    ? 'border-purple-400 shadow-purple-400 shadow-2xl' 
                    : 'border-purple-400'
                }`}>
                  <NeuralNetwork isActive={currentStep === 3 || currentStep === 4} />
                  {(currentStep === 3 || currentStep === 4) && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 border-2 border-yellow-400 bg-yellow-400 rounded-full animate-ping shadow-yellow-400 shadow-lg" />
                  )}
                </div>
                <div className={`text-center mt-2 font-medium text-xs transition-all duration-500 ${
                  currentStep === 3 || currentStep === 4 ? 'text-purple-400 font-bold' : 'text-gray-300'
                }`}>ChatGPT IA</div>
                
                {/* Indicateur de traitement */}
                {(currentStep === 3 || currentStep === 4) && (
                  <div className="mt-1 text-xs text-purple-400 font-medium animate-pulse">
                    🧠 Traitement...
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Particules de données, flèches et Prompto */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Prompto - le petit robot qui voyage */}
            <Prompto currentStep={currentStep} />
            
            {/* Flèches et flux aller (Client → Serveur) */}
            <AnimatedArrow 
              show={currentStep >= 1 && currentStep <= 2} 
              direction="right"
              delay={0}
            />
            
            {/* Particules aller */}
            <DataPacket 
              show={currentStep >= 1 && currentStep <= 2} 
              direction="right"
              color="#3B82F6"
            />
            
            {/* Flèches et flux retour (Serveur → Client) */}
            <AnimatedArrow 
              show={currentStep >= 5 && currentStep <= 6} 
              direction="left"
              delay={200}
            />
            
            {/* Particules retour */}
            <DataPacket 
              show={currentStep >= 5 && currentStep <= 6} 
              direction="left"
              color="#10B981"
            />
          </div>
        </div>

        {/* Boutons de navigation - à droite */}
        <div className="flex flex-col justify-center space-y-4 w-48">
          <button
            onClick={toggleAutoPlay}
            className={`px-4 py-3 border-2 rounded-lg transition-colors text-sm font-medium ${
              isAutoPlaying 
                ? 'bg-red-500 border-red-500 text-white hover:bg-red-600' 
                : 'bg-gradient-to-r from-purple-500 to-blue-500 border-transparent text-white hover:from-purple-600 hover:to-blue-600'
            }`}
          >
            {isAutoPlaying ? '⏸️ Arrêter l\'animation' : '▶️ Animation automatique'}
          </button>
          
          <div className="border-t border-gray-600 my-2"></div>
          
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0 || isAutoPlaying}
            className="px-4 py-3 bg-gray-700 text-white border border-gray-500 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors text-sm"
          >
            ← Précédent
          </button>
          
          <button
            onClick={() => setCurrentStep(0)}
            disabled={isAutoPlaying}
            className="px-4 py-3 bg-transparent border-2 border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500 hover:text-white transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            🔄 Recommencer
          </button>
          
          <button
            onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
            disabled={currentStep === steps.length - 1 || isAutoPlaying}
            className="px-4 py-3 bg-gray-700 text-white border border-gray-500 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors text-sm"
          >
            Suivant →
          </button>
        </div>
      </div>

      {/* Pied de page */}
      <div className="mt-6 text-center">
        <p className="text-gray-400 text-sm">
          Animation interactive • Cliquez sur les étapes ou utilisez l'animation automatique
        </p>
      </div>
    </div>
  );
};

export default ChatGPTAnimation;
