import { CheckCircle2, Users } from 'lucide-react'
import { Separator } from '@/components/ShadUI/separator'

const tiers = [
  {
    name: 'Community',
    price: 'Free',
    period: '',
    description:
      'Join the Strengthen community. Get access to the newsletter, free resources, and the full podcast archive.',
    features: [
      'Weekly newsletter',
      'Full podcast archive',
      'Free templates & guides',
      'Community Discord',
    ],
    cta: 'Join Free',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$149',
    period: '/mo',
    description:
      'For creators serious about growth. Monthly deep-dive sessions, accountability, and priority feedback on your work.',
    features: [
      'Everything in Community',
      '2× group coaching calls/mo',
      'Monthly strategy review',
      'Full course library access',
      'Direct message support',
    ],
    cta: 'Start Pro',
    highlight: true,
  },
  {
    name: 'Elite',
    price: '$499',
    period: '/mo',
    description:
      'Full 1:1 partnership. Weekly sessions, a personalised roadmap, and direct access whenever you need it.',
    features: [
      'Everything in Pro',
      'Weekly 1:1 coaching calls',
      'Personal growth roadmap',
      'Content & brand reviews',
      'Async voice note access',
      'Priority response SLA',
    ],
    cta: 'Apply for Elite',
    highlight: false,
  },
]

export function Coaching() {
  return (
    <section id="coaching" className="py-24 px-6 md:px-12 bg-[#eceef0]">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Users className="h-4 w-4 text-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Coaching</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-headline font-extrabold text-[#191c1e] mb-4">
            Work With Me
          </h2>
          <p className="text-[#41484e] max-w-xl mx-auto text-lg">
            Choose the level of support that fits where you are. Every plan
            includes access to the full Strengthen ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-[1.25rem] p-7 flex flex-col gap-5 ${
                tier.highlight
                  ? 'neomorph-primary-btn'
                  : 'neomorph-extruded bg-white'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="neomorph-extruded bg-white px-4 py-1 rounded-full text-xs font-bold text-primary whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}
              <div>
                <h3 className={`font-headline font-bold text-lg mb-1 ${tier.highlight ? 'text-white' : 'text-[#191c1e]'}`}>
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-0.5 mb-2">
                  <span className={`text-3xl font-headline font-extrabold ${tier.highlight ? 'text-white' : 'text-[#191c1e]'}`}>
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className={`text-sm ${tier.highlight ? 'text-white/70' : 'text-[#41484e]'}`}>
                      {tier.period}
                    </span>
                  )}
                </div>
                <p className={`text-sm leading-relaxed ${tier.highlight ? 'text-white/80' : 'text-[#41484e]'}`}>
                  {tier.description}
                </p>
              </div>

              <Separator className={tier.highlight ? 'bg-white/20' : ''} />

              <ul className="space-y-3 flex-1">
                {tier.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className={`h-4 w-4 shrink-0 mt-0.5 ${tier.highlight ? 'text-white/70' : 'text-primary'}`} />
                    <span className={tier.highlight ? 'text-white/90' : 'text-[#41484e]'}>{feat}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3.5 rounded-full font-bold text-sm transition-all active:scale-95 ${
                  tier.highlight
                    ? 'bg-white text-primary hover:bg-white/90'
                    : 'neomorph-primary-btn text-white'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
