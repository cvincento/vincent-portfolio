"use client";

import React, { useState } from 'react';

const content = {
  en: {
    badge: "Available for Routing",
    name: "Vincent Lam",
    phone: "6026 0593",
    whatsappBtn: "WhatsApp Me",
    title1: "Senior Terrestrial Mobility Routing Engineer",
    title2: "& Chief Operator of Ground-Level Mesh Networks",
    heroDesc: "I used to optimize 5G network speeds and manage hardware deployments. Now, I optimize dynamic cross-harbor routes and manage biological packet routing.",
    transitionTitle: "The Transition",
    transitionP1: "For over a decade, I worked as a Field Design Engineer for a certain fruit-themed tech giant. My days were spent managing hardware deployments, evaluating network slicing, launching flagship retail spaces, and ensuring massive systems ran without a hitch.",
    transitionP2: "Recently, I decided to swap RF signal propagation for street-level navigation in Hong Kong. I trade high-latency cellular environments for the ultimate high-latency environment: the Cross-Harbour Tunnel at 6 PM.",
    appTitle: "The Next.js Driver Platform",
    appP1: "After getting my taxi license, I quickly realized that tracking daily earnings, fuel, and operating expenses on the road was unnecessarily manual.",
    appP2: "So, I did what any engineer would do: I built a solution. I am currently developing a custom Next.js and Supabase progressive web application specifically for Hong Kong drivers. It handles the math and the data tracking so I can keep my eyes on the road. Managing a transport business shouldn't be harder than configuring a dynamic network architecture.",
    icebreakerTitle: "Rearview Mirror Icebreakers",
    ice1: "\"I spent years working for the company that probably made the phone in your pocket. If it freezes back there I can probably fix it, but right now my bandwidth is strictly allocated to physical transport.\"",
    ice2: "\"Don't worry if the GPS gets confused between the skyscrapers in Central. I used to process raw satellite ground-truth logs—I am the backup navigation system.\"",
    ice3: "\"My last job was ensuring seamless handovers between cell towers. Getting you to the curbside without spilling your coffee is a very similar protocol.\"",
    ice4: "\"If we hit a jam on the Island Eastern Corridor, just consider it bandwidth throttling. I'm actively pinging alternate routes.\"",
    footer: "Built with Next.js. Engineered for 99.9% uptime (traffic permitting).",
    copyright: "© 2026 Vincent Lam"
  },
  zh: {
    badge: "路由就緒 (可接載)",
    name: "啊徽 | Vincent",
    phone: "6026 0593",
    whatsappBtn: "WhatsApp 聯絡我",
    title1: "資深地面移動路由工程師",
    title2: "& 地面網狀網絡首席營運官",
    heroDesc: "以前我負責優化 5G 網絡速度和管理硬件部署；現在，我負責優化動態過海路線，並管理生物數據包的傳輸。",
    transitionTitle: "轉換跑道",
    transitionP1: "過去十多年，我一直在某間以水果為主題的科技巨頭擔任前線設計工程師。我的日常工作是管理硬件部署、評估網絡切片 (Network Slicing)、協助開設旗艦店，並確保龐大的系統順暢運行。",
    transitionP2: "最近，我決定將「射頻信號傳播」換成「香港街道導航」。我把高延遲的通訊環境，換成了終極的高延遲環境：傍晚 6 點的紅磡海底隧道。",
    appTitle: "Next.js 司機平台",
    appP1: "考獲的士牌後，我很快就發現，在路上手動記錄每日收入、燃料費和營運開支，實在是太痛苦了。",
    appP2: "所以，我做了一個工程師會做的事：自己動手寫一個解決方案。我目前正在開發一個專為香港司機而設的 Next.js 和 Supabase 漸進式網絡應用程式 (PWA)。它會自動處理繁瑣的計算和數據，讓我能專心留意路面情況。管理客運業務，總不應該難過配置動態網絡架構吧。",
    icebreakerTitle: "車內後視鏡破冰金句",
    ice1: "「我曾在生產你口袋裡那部手機的公司工作了幾年。如果你在後座遇到手機死機，我大概可以幫你修好，但目前我的頻寬已全數分配給物理傳輸了。」",
    ice2: "「如果 GPS 在中環的摩天大廈之間迷路，請不用擔心。我以前處理過原始衛星定位數據，我基本上就是備用的導航系統。」",
    ice3: "「我上一份工作是確保基站之間的無縫切換。把你連人帶咖啡平穩地送到路邊，基本上是同一套通訊協定。」",
    ice4: "「如果我們在東區走廊遇到塞車，請把它當作頻寬限制 (Bandwidth throttling)。我正在積極 Ping 尋找替代路線。」",
    footer: "以 Next.js 構建。專為 99.9% 正常運行時間而設計（視乎交通情況）。",
    copyright: "© 2026 啊徽"
  }
};

export default function Portfolio() {
  const [lang, setLang] = useState<'en' | 'zh'>('en');
  const t = content[lang];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 font-sans selection:bg-red-600 selection:text-white relative">
      
      {/* Language Toggle */}
      <div className="absolute top-6 right-6 z-10 flex space-x-2 bg-gray-900 border border-gray-800 rounded-lg p-1">
        <button 
          onClick={() => setLang('en')}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${lang === 'en' ? 'bg-red-700 text-white' : 'text-gray-400 hover:text-white'}`}
        >
          EN
        </button>
        <button 
          onClick={() => setLang('zh')}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${lang === 'zh' ? 'bg-red-700 text-white' : 'text-gray-400 hover:text-white'}`}
        >
          繁體
        </button>
      </div>

      {/* Hero Section */}
      <header className="px-6 py-24 md:py-32 max-w-5xl mx-auto flex flex-col justify-center border-b border-gray-800">
        <div className="inline-block mb-4">
          <span className="bg-red-700 text-white px-3 py-1 text-sm font-bold tracking-widest uppercase rounded-sm">
            {t.badge}
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-4">
          {t.name}
        </h1>
        
        {/* Contact Actions: Phone & WhatsApp */}
        <div className="mb-8 flex flex-wrap items-center gap-4">
          {/* Direct Phone Link */}
          <a href={`tel:+852${t.phone.replace(/\s+/g, '')}`} className="text-xl md:text-2xl font-medium text-red-500 hover:text-red-400 transition-colors tracking-wide">
            📞 +852 {t.phone}
          </a>
          
          {/* WhatsApp Action Button */}
          <a 
            href={`https://wa.me/852${t.phone.replace(/\s+/g, '')}?text=${encodeURIComponent("Hi Vincent! I'm viewing your TaxiYield profile.")}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center px-5 py-2 bg-[#25D366] hover:bg-[#1EBE57] text-white text-sm md:text-base font-bold rounded-full transition-colors shadow-lg shadow-[#25D366]/20"
          >
            <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            {t.whatsappBtn}
          </a>
        </div>

        <h2 className="text-2xl md:text-3xl font-medium text-gray-400 mb-8">
          {t.title1} <br className="hidden md:block"/> 
          <span className="text-red-500 font-normal italic">{t.title2}</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
          {t.heroDesc}
        </p>
      </header>

      {/* Main Content Grid */}
      <main className="px-6 py-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* About Column */}
        <div className="md:col-span-7 space-y-12">
          
          <section>
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-1 bg-red-600 mr-4 rounded"></span> {t.transitionTitle}
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
              <p>{t.transitionP1}</p>
              <p>{t.transitionP2}</p>
            </div>
          </section>

          <section>
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-1 bg-red-600 mr-4 rounded"></span> {t.appTitle}
            </h3>
            <div className="bg-gray-900 border border-gray-800 p-8 rounded-xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600 opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
              <p className="text-gray-300 leading-relaxed mb-4">{t.appP1}</p>
              <p className="text-gray-300 leading-relaxed">{t.appP2}</p>
            </div>
          </section>

        </div>

        {/* Icebreakers / Side Column */}
        <div className="md:col-span-5 space-y-8">
          <h3 className="text-2xl font-bold text-white mb-6">{t.icebreakerTitle}</h3>
          
          <div className="space-y-4">
            {[t.ice1, t.ice2, t.ice3, t.ice4].map((icebreaker, index) => (
              <div key={index} className="p-6 bg-gray-900/50 border border-gray-800 hover:border-red-900 transition-colors rounded-lg">
                <p className="text-gray-300 italic">{icebreaker}</p>
              </div>
            ))}
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-gray-900 py-12 text-center text-gray-500 text-sm mt-12">
        <p>{t.footer}</p>
        <p className="mt-2">{t.copyright}</p>
      </footer>
    </div>
  );
}
