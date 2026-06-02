import { NextRequest, NextResponse } from 'next/server'
import { stripe, pricingPlans } from '@/lib/stripe'

export async function POST(req: NextRequest) {
  try {
    const { planId } = await req.json()

    const plan = pricingPlans.find((p) => p.id === planId)
    if (!plan) {
      return NextResponse.json({ error: 'Invalid plan' }, { status: 400 })
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `PerfectEdge Digitals — ${plan.name} Plan`,
              description: plan.features.slice(0, 3).join(' • '),
            },
            unit_amount: plan.price * 100,
            recurring: { interval: plan.interval },
          },
          quantity: 1,
        },
      ],
      success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}&plan=${plan.id}`,
      cancel_url: `${siteUrl}/#pricing`,
      metadata: { planId: plan.id },
      allow_promotion_codes: true,
      billing_address_collection: 'required',
    })

    return NextResponse.json({ url: session.url })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Internal server error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
