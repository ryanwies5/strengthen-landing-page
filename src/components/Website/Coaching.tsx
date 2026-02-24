import { CheckCircle2, Users } from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ShadUI/card'
import { Badge } from '@/components/ShadUI/badge'
import { Button } from '@/components/ShadUI/button'
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
    variant: 'outline' as const,
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
    variant: 'default' as const,
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
    variant: 'outline' as const,
    highlight: false,
  },
]

export function Coaching() {
  return (
    <section id="coaching" className="py-24 bg-muted/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Users className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400 uppercase tracking-widest">
              Coaching
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Work With Me</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Choose the level of support that fits where you are. Every plan
            includes access to the full Strengthen ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={
                tier.highlight ? 'ring-2 ring-primary relative' : 'relative'
              }
            >
              {tier.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <Badge className="px-4 py-1">Most Popular</Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-lg">{tier.name}</CardTitle>
                <div className="flex items-baseline gap-0.5 mt-1 mb-1">
                  <span className="text-3xl font-bold">{tier.price}</span>
                  {tier.period && (
                    <span className="text-muted-foreground text-sm">
                      {tier.period}
                    </span>
                  )}
                </div>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <Separator />
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {tier.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-2">
                <Button variant={tier.variant} className="w-full">
                  {tier.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
