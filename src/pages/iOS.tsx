import {
  Download,
  Settings,
  FolderOpen,
  Puzzle,
  CheckCircle,
  AlertTriangle,
  FileArchive,
  ChevronRight,
  Apple,
} from 'lucide-react';

export default function iOS() {
  const steps = [
    {
      number: 1,
      title: 'Install the Orion Browser',
      description: 'Download and install the Orion browser on your iOS device from the App Store.',
      icon: Download,
      details: [
        'Open the App Store on your iPhone or iPad',
        'Search for "Orion Browser by Kagi"',
        'Download and install the app',
      ],
      tip: 'Orion is a free browser that supports Firefox extensions on iOS.',
    },
    {
      number: 2,
      title: 'Enable Firefox Extension Support',
      description: 'Enable the critical setting that allows Firefox extensions to run in Orion.',
      icon: Settings,
      details: [
        'Open the Orion app',
        'Tap the "..." menu (bottom right corner)',
        'Go to Settings',
        'Tap Advanced',
        'Turn ON "Firefox Extensions Support"',
      ],
      tip: 'This step is essential — without it, extensions will not work!',
      important: true,
    },
    {
      number: 3,
      title: 'Prepare the Extension',
      description: 'Download and extract the extension files to prepare them for installation.',
      icon: FileArchive,
      details: [
        'Download the extension .zip file',
        'Unzip the file so you have a normal folder with extension contents',
      ],
      tip: 'Use the Files app or a third-party unzip tool to extract the archive.',
    },
    {
      number: 4,
      title: 'Move the Extension Folder',
      description: 'Place the extracted extension folder into the correct Orion directory.',
      icon: FolderOpen,
      details: [
        'Open the Files app on your iOS device',
        'Navigate to your unzipped extension folder',
        'Move the folder into: On My iPhone/iPad → Orion → Extensions',
      ],
      tip: 'If the Extensions folder does not exist, you may need to create it.',
    },
    {
      number: 5,
      title: 'Install the Extension in Orion',
      description: 'Use Orion\'s extension installer to load the extension from the folder.',
      icon: Puzzle,
      details: [
        'Open the Orion browser',
        'Tap the "..." menu (bottom right)',
        'Tap Extensions',
        'Tap "Install from File"',
        'Navigate to: Orion → Extensions folder',
        'Select the extension folder you moved earlier',
        'Select / install the manifest.json file',
      ],
      tip: 'Make sure to select the manifest.json file to complete installation.',
    },
    {
      number: 6,
      title: 'Done!',
      description: 'The extension should now be installed and active in your Orion browser.',
      icon: CheckCircle,
      details: [
        'Your extension is now ready to use',
        'You can manage it via the Extensions menu in Orion',
      ],
      tip: 'If the extension does not appear, try restarting the Orion browser.',
      success: true,
    },
  ];

  return (
    <div className="min-h-screen pb-16 md:pb-24">
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden">
        <div className="bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 glass-badge px-4 py-2 mb-5">
                <Apple className="w-4 h-4 text-gray-700" />
                <span className="text-sm font-medium text-gray-700">iOS & iPadOS</span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-3">
                iOS Extension Tutorial
              </h1>
              <p className="text-base sm:text-lg text-white/70 max-w-xl mx-auto">
                Install browser extensions on your iPhone or iPad using the Orion Browser
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STEPS ─── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 md:-mt-10 relative z-10">
        {/* Important Notice Card */}
        <div className="clay-card p-5 md:p-6 mb-8 border-l-4 border-amber-400">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-gray-800 text-sm md:text-base mb-1">
                Important: Requires Orion Browser
              </h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                iOS does not natively support browser extensions. This tutorial uses the
                Orion Browser which has a unique feature to enable Firefox extension support.
              </p>
            </div>
          </div>
        </div>

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
                        ? 'bg-gradient-to-br from-amber-400 to-amber-600'
                        : 'bg-gradient-to-br from-blue-400 to-indigo-600'
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
                            <ChevronRight className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tip */}
                    <div className="mt-4 flex items-start gap-2.5 bg-blue-50/60 rounded-xl px-4 py-3">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-blue-600 text-xs font-bold">i</span>
                      </div>
                      <p className="text-xs md:text-sm text-blue-700">{step.tip}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
            Your extension is now installed and ready to use in Orion Browser.
            If you need help with other platforms, check out our other tutorials.
          </p>
        </div>
      </section>
    </div>
  );
}
