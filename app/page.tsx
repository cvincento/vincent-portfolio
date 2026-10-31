import React from 'react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 font-sans selection:bg-red-600 selection:text-white">
      {/* Hero Section */}
      <header className="px-6 py-24 md:py-32 max-w-5xl mx-auto flex flex-col justify-center border-b border-gray-800">
        <div className="inline-block mb-4">
          <span className="bg-red-700 text-white px-3 py-1 text-sm font-bold tracking-widest uppercase rounded-sm">
            Available for Routing
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
          Vincent Lam
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-gray-400 mb-8">
          Senior Terrestrial Mobility Routing Engineer <br className="hidden md:block"/> 
          <span className="text-red-500 font-normal italic">& Chief Operator of Ground-Level Mesh Networks</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
          I used to optimize 5G network speeds and manage hardware deployments. Now, I optimize dynamic cross-harbor routes and manage biological packet routing. 
        </p>
      </header>

      {/* Main Content Grid */}
      <main className="px-6 py-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* About Column */}
        <div className="md:col-span-7 space-y-12">
          
          <section>
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-1 bg-red-600 mr-4 rounded"></span> The Transition
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
              <p>
                For over a decade, I worked as a Field Design Engineer for a certain fruit-themed tech giant. My days were spent managing hardware deployments, evaluating network slicing, launching flagship retail spaces, and ensuring massive systems ran without a hitch.
              </p>
              <p>
                Recently, I decided to swap RF signal propagation for street-level navigation in Hong Kong. I trade high-latency cellular environments for the ultimate high-latency environment: the Cross-Harbour Tunnel at 6 PM.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-1 bg-red-600 mr-4 rounded"></span> The Next.js Driver Platform
            </h3>
            <div className="bg-gray-900 border border-gray-800 p-8 rounded-xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600 opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
              <p className="text-gray-300 leading-relaxed mb-4">
                After getting my taxi license, I quickly realized that tracking daily earnings, fuel, and operating expenses on the road was unnecessarily manual.
              </p>
              <p className="text-gray-300 leading-relaxed">
                So, I did what any engineer would do: I built a solution. I am currently developing a custom Next.js and Supabase progressive web application specifically for Hong Kong drivers. It handles the math and the data tracking so I can keep my eyes on the road. Managing a transport business shouldn't be harder than configuring a dynamic network architecture.
              </p>
            </div>
          </section>

        </div>

        {/* Icebreakers / Side Column */}
        <div className="md:col-span-5 space-y-8">
          <h3 className="text-2xl font-bold text-white mb-6">Rearview Mirror Icebreakers</h3>
          
          <div className="space-y-4">
            <div className="p-6 bg-gray-900/50 border border-gray-800 hover:border-red-900 transition-colors rounded-lg">
              <p className="text-gray-300 italic">
                "I spent years working for the company that probably made the phone in your pocket. If it freezes back there I can probably fix it, but right now my bandwidth is strictly allocated to physical transport."
              </p>
            </div>

            <div className="p-6 bg-gray-900/50 border border-gray-800 hover:border-red-900 transition-colors rounded-lg">
              <p className="text-gray-300 italic">
                "Don't worry if the GPS gets confused between the skyscrapers in Central. I used to process raw satellite ground-truth logs—I am the backup navigation system."
              </p>
            </div>

            <div className="p-6 bg-gray-900/50 border border-gray-800 hover:border-red-900 transition-colors rounded-lg">
              <p className="text-gray-300 italic">
                "My last job was ensuring seamless handovers between cell towers. Getting you to the curbside without spilling your coffee is a very similar protocol."
              </p>
            </div>
            
            <div className="p-6 bg-gray-900/50 border border-gray-800 hover:border-red-900 transition-colors rounded-lg">
              <p className="text-gray-300 italic">
                "If we hit a jam on the Island Eastern Corridor, just consider it bandwidth throttling. I'm actively pinging alternate routes."
              </p>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-gray-900 py-12 text-center text-gray-500 text-sm mt-12">
        <p>Built with Next.js. Engineered for 99.9% uptime (traffic permitting).</p>
        <p className="mt-2">© 2026 Vincent Lam</p>
      </footer>
    </div>
  );
}
