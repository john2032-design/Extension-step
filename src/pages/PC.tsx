import {
  Monitor,
  FileArchive,
  Puzzle,
  FolderOpen,
  MousePointerClick,
  CheckCircle,
  Folder,
  User,
} from 'lucide-react';

export default function PC() {
  const steps = [
    {
      number: 1,
      title: 'Extract the Extension Zip',
      description: 'Unzip the VortixWorldBypasserExtention.zip file to get the extension folder.',
      icon: FileArchive,
      details: [
        'Right-click on the "VortixWorldBypasserExtention.zip" file',
        'Select "Extract All..." (Windows) or double-click to extract (Mac)',
        'Choose a destination folder and extract the contents',
        'You should now have a folder named "VortixBypassExtention"',
      ],
    },
    {
      number: 2,
      title: 'Open Chrome Extensions Page',
      description: 'Navigate to Chrome\'s extension management page to enable developer mode.',
      icon: Puzzle,
      details: [
        'Open Google Chrome',
        'Type chrome://extensions/ in the address bar and press Enter',
        'Alternatively, click the menu (three dots) → More tools → Extensions',
      ],
    },
    {
      number: 3,
      title: 'Enable Developer Mode',
      description: 'Turn on Developer Mode to unlock the "Load Unpacked" option.',
      icon: Monitor,
      details: [
        'Look for the "Developer mode" toggle in the top-right corner',
        'Turn ON Developer Mode',
        'You will see new buttons appear: "Load unpacked", "Pack extension", etc.',
      ],
      important: true,
    },
    {
      number: 4,
      title: 'Click "Load Unpacked"',
      description: 'Use the Load Unpacked button to select your extracted extension folder.',
      icon: FolderOpen,
      details: [
        'Click the "Load unpacked" button that appeared',
        'A file picker dialog will open',
        'Navigate to where you extracted the zip file',
      ],
    },
    {
      number: 5,
      title: 'Select the Extension Folder',
      description: 'Find and select the extracted VortixBypassExtention folder.',
      icon: Folder,
      details: [
        'Find the "VortixBypassExtention" folder',
        'Click on it to open/select it',
        'Click the "Select Folder" button in the file picker',
      ],
    },
    {
      number: 6,
      title: 'Install the Extension',
      description: 'Chrome will load and install the extension automatically.',
      icon: MousePointerClick,
      details: [
        'The extension will appear in your Chrome extensions list',
        'Click on "VortixBypassExtention" in the list',
        'Click on "Vortix bypass" details',
        'Select the extension folder if prompted',
      ],
    },
    {
      number: 7,
      title: 'Done!',
      description: 'The extension has been added to Chrome and is ready to use.',
      icon: CheckCircle,
      details: [
        'The extension will be added after you select the folder',
        'You can pin it to your toolbar for easy access',
        'The extension is now active in Chrome!',
      ],
      success: true,
    },
  ];

  return (
    <div className="min-h-screen pb-16 md:pb-24">
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden">
        <div className="bg-gradient-to-br from-amber-500 via-orange-500 to-red-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 glass-badge px-4 py-2 mb-5">
                <Monitor className="w-4 h-4 text-gray-700" />
                <span className="text-sm font-medium text-gray-700">Windows / Mac / Linux</span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-3">
                PC Extension Tutorial
              </h1>
              <p className="text-base sm:text-lg text-white/70 max-w-xl mx-auto">
                Install Chrome extensions on your computer using Developer Mode
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
                      : step.important
                        ? 'bg-gradient-to-br from-amber-400 to-orange-500'
                        : 'bg-gradient-to-br from-amber-400 to-orange-500'
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
                            <MousePointerClick className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Important Note */}
                    {step.important && (
                      <div className="mt-4 flex items-start gap-2.5 bg-amber-50/60 rounded-xl px-4 py-3">
                        <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-amber-600 text-xs font-bold">!</span>
                        </div>
                        <p className="text-xs md:text-sm text-amber-700">
                          Developer Mode is required — without it, you won&apos;t see the &quot;Load unpacked&quot; button.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
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
            Your extension is now installed in Chrome and ready to use.
            You can manage it anytime at chrome://extensions/
          </p>
        </div>
      </section>
    </div>
  );
}
