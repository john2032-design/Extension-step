import {
  Tablet,
  FileArchive,
  Search,
  MousePointerClick,
  CheckCircle,
  Video,
  User,
} from 'lucide-react';

export default function Android() {
  const steps = [
    {
      number: 1,
      title: 'Load the Extension',
      description: 'In the Lemur Browser, initiate the extension loading process.',
      icon: FileArchive,
      details: [
        'Open the Lemur Browser on your Android device',
        'Click on the extension menu',
        'Select "Load *.zip" option',
        'This will open your file manager',
      ],
    },
    {
      number: 2,
      title: 'Find the Zip File',
      description: 'Browse your device to locate the extension zip file.',
      icon: Search,
      details: [
        'Navigate to your Downloads folder',
        'Find the VortixWorldBypasserExtention.zip file',
        'Tap on the zip file to select it',
      ],
    },
    {
      number: 3,
      title: 'Done!',
      description: 'Click the zip file and the extension will be installed automatically.',
      icon: CheckCircle,
      details: [
        'Tap the zip file in the file picker',
        'Lemur Browser will automatically extract and install it',
        'The extension is now ready to use!',
      ],
      success: true,
    },
  ];

  return (
    <div className="min-h-screen pb-16 md:pb-24">
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden">
        <div className="bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 glass-badge px-4 py-2 mb-5">
                <Tablet className="w-4 h-4 text-gray-700" />
                <span className="text-sm font-medium text-gray-700">Android</span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-3">
                Android Extension Tutorial
              </h1>
              <p className="text-base sm:text-lg text-white/70 max-w-xl mx-auto">
                Install browser extensions on Android using the Lemur Browser
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STEPS ─── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 md:-mt-10 relative z-10">
        {/* Steps */}
        <div className="space-y-6 md:space-y-8">
          {steps.map((step, index) => {
            return (
              <div
                key={step.number}
                className="clay-card p-5 sm:p-6 md:p-8 animate-slide-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="flex items-start gap-4 md:gap-5">
                  {/* Step Number */}
                  <div className={`
                    flex-shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center
                    ${step.success
                      ? 'bg-gradient-to-br from-emerald-400 to-emerald-600'
                      : 'bg-gradient-to-br from-emerald-400 to-teal-600'
                    }
                    shadow-lg
                  `}>
                    {step.success ? (
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    ) : (
                      <span className="text-white font-bold text-sm md:text-base">{step.number}</span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg md:text-xl font-bold text-gray-800 mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm md:text-base mb-4">
                      {step.description}
                    </p>

                    {/* Details List */}
                    <div className="neu-pressed p-4 md:p-5 rounded-xl">
                      <ul className="space-y-2">
                        {step.details.map((detail, dIndex) => (
                          <li key={dIndex} className="flex items-start gap-2.5 text-sm text-gray-600">
                            <MousePointerClick className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ─── VIDEO SECTION ─── */}
        <div className="clay-card p-5 sm:p-6 md:p-8 mt-8">
          <div className="flex items-center gap-3 mb-4 md:mb-5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-md">
              <Video className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-display text-lg md:text-xl font-bold text-gray-800">
                Video Tutorial
              </h3>
              <p className="text-gray-500 text-xs md:text-sm">
                Watch the installation process step by step
              </p>
            </div>
          </div>

          {/* Video Embed Container */}
          <div className="video-clay-container overflow-hidden rounded-2xl">
            <div style={{ position: 'relative', width: '100%', height: '0px', paddingBottom: '56.25%' }}>
              <iframe
                allow="fullscreen;autoplay"
                allowFullScreen
                height="100%"
                src="https://streamable.com/e/74qwpy?autoplay=1&muted=1&nocontrols=1"
                width="100%"
                style={{ border: 'none', width: '100%', height: '100%', position: 'absolute', left: '0px', top: '0px', overflow: 'hidden' }}
                title="Android Extension Installation Tutorial"
              />
            </div>
          </div>
        </div>

        {/* Credits Card */}
        <div className="clay-card p-5 md:p-6 mt-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
              <User className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">
                Tutorial by <span className="font-semibold text-gray-800">camper</span>
              </p>
              <p className="text-xs text-gray-400 mt-0.5">
                Credits: camper
              </p>
            </div>
          </div>
        </div>

        {/* Completion Card */}
        <div className="clay-card p-6 md:p-8 mt-8 text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-display text-xl md:text-2xl font-bold text-gray-800 mb-2">
            All Set!
          </h3>
          <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto">
            Your extension is now installed and ready to use in Lemur Browser.
            Enjoy your enhanced browsing experience!
          </p>
        </div>
      </section>
    </div>
  );
}
