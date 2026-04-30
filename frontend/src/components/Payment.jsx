import { useState } from 'react';

const METHODS = [
  {
    id: 'paypal',
    name: 'PayPal',
    label: 'USD · PayPal',
    address: 'imagejayce@gmail.com',
    network: 'Send money · PayPal.com',
    badge: 'USD',
    badgeColor: 'bg-blue-100 text-blue-700',
    border: 'border-blue-200 hover:border-blue-400',
    iconBg: 'bg-blue-600',
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
        <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 2.79A.78.78 0 0 1 5.717 2h7.05c2.523 0 4.36.596 5.456 1.77.495.537.82 1.105.994 1.736.185.672.186 1.388.006 2.188l-.008.04v.37l.29.162c.25.138.476.302.674.49.34.323.584.72.726 1.18.147.475.196 1.04.147 1.683-.06.77-.244 1.47-.545 2.08a5.19 5.19 0 0 1-1.16 1.558 4.97 4.97 0 0 1-1.67.955c-.626.21-1.34.316-2.12.316H14.25a.78.78 0 0 0-.77.66l-.052.28-.624 3.953-.028.15a.78.78 0 0 1-.77.655H7.076zm9.396-13.63c-.022.14-.048.283-.078.428-.98 5.03-4.337 6.77-8.623 6.77H5.64a.96.96 0 0 0-.948.813L3.42 22h3.656l.63-3.997h2.045c3.657 0 6.52-1.486 7.354-5.784.35-1.792.175-3.291-.633-4.512z"/>
      </svg>
    ),
  },
  {
    id: 'usdt',
    name: 'USDT',
    label: 'Tether · TRC20',
    address: 'TYourUSDT_TRC20_WalletAddress',
    network: 'Network: TRON (TRC20)',
    badge: 'TRC20',
    badgeColor: 'bg-green-100 text-green-700',
    border: 'border-green-200 hover:border-green-400',
    iconBg: 'bg-[#26A17B]',
    icon: (
      <svg viewBox="0 0 32 32" fill="white" className="w-6 h-6">
        <path d="M17.922 17.383v-.002c-.11.008-.677.042-1.942.042-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658 0-.809 2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061 1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658 0 .81-2.895 1.485-6.775 1.657m0-3.59v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.126 0 1.053 3.309 1.924 7.709 2.126v7.608h3.913v-7.61c4.393-.202 7.694-1.073 7.694-2.124 0-1.051-3.301-1.923-7.694-2.125"/>
      </svg>
    ),
  },
  {
    id: 'usdc',
    name: 'USDC',
    label: 'USD Coin · ERC20',
    address: '0xYourUSDC_ERC20_WalletAddress',
    network: 'Network: Ethereum (ERC20)',
    badge: 'ERC20',
    badgeColor: 'bg-indigo-100 text-indigo-700',
    border: 'border-indigo-200 hover:border-indigo-400',
    iconBg: 'bg-[#2775CA]',
    icon: (
      <svg viewBox="0 0 32 32" fill="white" className="w-6 h-6">
        <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm1.328-24.338c-3.763-.376-7.01 1.88-7.948 5.266-.092.33.128.663.47.74a.625.625 0 0 0 .749-.434c.78-2.815 3.44-4.701 6.573-4.386 3.36.34 5.827 3.295 5.827 6.688 0 3.393-2.467 6.348-5.827 6.688-3.133.315-5.793-1.571-6.573-4.386a.625.625 0 0 0-.749-.434c-.342.077-.562.41-.47.74.938 3.386 4.185 5.642 7.948 5.266 4.041-.406 7.072-3.849 7.072-7.874 0-4.025-3.031-7.468-7.072-7.874zm-.578 2.25v1.014a3.752 3.752 0 0 0-2.625 3.575c0 1.66 1.079 3.13 2.625 3.575v2.262c0 .345.28.625.625.625s.625-.28.625-.625v-2.262a3.752 3.752 0 0 0 2.625-3.575 3.752 3.752 0 0 0-2.625-3.575v-1.014a.625.625 0 0 0-1.25 0zm.625 2.275c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z"/>
      </svg>
    ),
  },
];

export default function Payment() {
  const [copied, setCopied] = useState(null);

  function copy(id, text) {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    });
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Worldwide Accepted
          </span>
          <h2 className="section-title mt-2">Payment Methods</h2>
          <p className="section-subtitle">
            We accept multiple currencies for your convenience — pay securely from anywhere in the world.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {METHODS.map(m => (
            <div
              key={m.id}
              className={`bg-white rounded-2xl border-2 ${m.border} p-6 flex flex-col gap-4 transition-all duration-300 shadow-sm hover:shadow-md`}
            >
              {/* Top */}
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 ${m.iconBg} rounded-xl flex items-center justify-center shadow-md flex-shrink-0`}>
                  {m.icon}
                </div>
                <div>
                  <div className="font-display font-bold text-gray-900 text-lg leading-tight">{m.name}</div>
                  <div className="text-xs text-gray-500">{m.label}</div>
                </div>
                <span className={`ml-auto text-xs font-semibold px-2.5 py-1 rounded-full ${m.badgeColor}`}>
                  {m.badge}
                </span>
              </div>
              {copied === m.id && (
                <p className="text-xs text-green-600 font-medium text-center -mt-2">Copied to clipboard!</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
