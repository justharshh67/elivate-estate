/* ------------------------------------------------------------------------
 * LEAD FORM INTEGRATION
 * ---------------------------------------------------------------------
 * Set FORM_ENDPOINT to a URL that accepts a JSON POST to deliver real
 * leads. Works as-is with Formspree, Basin, Getform, a Zapier/Make
 * webhook, or your own API route.
 *
 *   FORM_ENDPOINT = 'https://formspree.io/f/xxxxxxxx'
 *
 * While it is empty the form validates fully and shows a success state
 * without sending anything, so the site is safe to deploy as a preview.
 * --------------------------------------------------------------------- */

export const FORM_ENDPOINT = ''

export type LeadPayload = {
  name: string
  email: string
  phone: string
  company: string
  website: string
  subject: string
  volume: string
  services: string[]
  message: string
}

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim())
}

export async function submitLead(payload: LeadPayload): Promise<void> {
  if (!FORM_ENDPOINT) {
    await new Promise((resolve) => setTimeout(resolve, 900))
    return
  }

  const response = await fetch(FORM_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error(`Lead form failed with status ${response.status}`)
  }
}
