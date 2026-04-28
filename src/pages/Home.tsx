import { Link } from 'react-router';
import {
  Smartphone,
  Tablet,
  Monitor,
  Puzzle,
  ArrowRight,
  Shield,
  Zap,
  Layers,
} from 'lucide-react';

export default function Home() {
  const tutorials = [
    {
      path: '/ios',
      title: 'iOS Tutorial',
      description: 'Install extensions on iPhone & iPad using the Orion Browser with Firefox extension support.',
      icon: Smartphone,
      color: 'from-blue-500 to-indigo-600',
      bgGlow: 'bg-blue-500/10',
      steps: 6,
    },
    {
      path: '/android',
      title: 'Android Tutorial',
      description: 'Install extensions on Android using the Lemur Browser with simple zip loading.',
      icon: Tablet,
      color: 'from-emerald-500 to-teal-600',
      bgGlow: 'bg-emerald-500/10',
      steps: 3,
    },
    {
      path: '/pc',
      title: 'PC Tutorial',
      description: 'Install Chrome extensions on Windows, Mac & Linux via developer mode.',
      icon: Monitor,
      color: 'from-amber-500 to-orange-600',
      bgGlow: 'bg-amber-500/10',
      steps: 7,
    },
  ];

  const features = [
    { icon: Shield, title: 'Secure', desc: 'Safe extension installation guides' },
    { icon: Zap, title: 'Fast', desc: 'Quick and easy setup process' },
    { icon: Layers, title: 'Cross-Platform', desc: 'Works on all major platforms' },
  ];

  return (
    <div className="min-h-screen">
      {/* ─── HERO SECTION ─── */}
      <section className="relative overflow-hidden">
        <div className="hero-gradient">
          {/* Floating Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-[10%] w-20 h-20 rounded-full bg-white/10 animate-float" />
            <div className="absolute top-32 right-[15%] w-14 h-14 rounded-full bg-white/10 animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-20 left-[20%] w-10 h-10 rounded-full bg-white/10 animate-float" style={{ animationDelay: '4s' }} />
            <div className="absolute top-20 right-[30%] w-6 h-6 rounded-full bg-white/15 animate-float" style={{ animationDelay: '1s' }} />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 glass-badge px-4 py-2 mb-6 animate-fade-in">
                <Puzzle className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Extension Installation Guide</span>
              </div>

              {/* Title */}
              <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-4 animate-slide-up">
                <span className="text-gradient-hero">VortixWorld</span>
              </h1>
              <p className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-white/80 mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                Extension Tutorial
              </p>

              {/* Description */}
              <p className="text-base sm:text-lg text-white/70 max-w-xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Step-by-step guides to install browser extensions on iOS, Android, and PC.
                Follow our simple tutorials to get started in minutes.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <Link to="/ios" className="neu-button-primary px-8 py-3.5 rounded-xl text-white font-semibold text-sm flex items-center gap-2">
                  <Smartphone className="w-4 h-4" />
                  Start with iOS
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/pc" className="glass-panel px-8 py-3.5 rounded-xl text-white font-semibold text-sm flex items-center gap-2 hover:bg-white/45 transition-all">
                  <Monitor className="w-4 h-4" />
                  PC Tutorial
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path
              d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,30 1440,20 L1440,60 L0,60 Z"
              fill="#eef1f5"
            />
          </svg>
        </div>
      </section>

      {/* ─── TUTORIAL CARDS ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Choose Your <span className="text-gradient">Platform</span>
          </h2>
          <p className="text-gray-500 max-w-md mx-auto text-sm sm:text-base">
            Select your device to view the installation tutorial
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {tutorials.map((tutorial, index) => {
            const Icon = tutorial.icon;
            return (
              <Link
                key={tutorial.path}
                to={tutorial.path}
                className="clay-card p-6 md:p-8 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${tutorial.color} flex items-center justify-center mb-5 shadow-lg`}>
                  <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl md:text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {tutorial.title}
                </h3>
                <p className="text-gray-500 text-sm md:text-base mb-4 leading-relaxed">
                  {tutorial.description}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-400 bg-gray-100/80 px-3 py-1.5 rounded-lg">
                    {tutorial.steps} Steps
                  </span>
                  <div className="w-8 h-8 rounded-full neu-raised flex items-center justify-center group-hover:bg-blue-50 transition-all">
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ─── FEATURES SECTION ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="glass-panel p-6 sm:p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="clay-card w-14 h-14 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-gray-800 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Puzzle className="w-5 h-5 text-blue-500" />
              <span className="font-display font-semibold text-gray-700">
                Vortix<span className="text-gradient">World</span>
              </span>
            </div>
            <p className="text-xs text-gray-400">
              Extension Tutorial Guide &middot; All Platforms Supported
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
