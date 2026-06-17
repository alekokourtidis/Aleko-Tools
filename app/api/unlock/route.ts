import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const password = String(form.get('password') || '');
  const expected = process.env.SITE_PASSWORD || '';
  const token = process.env.UNLOCK_TOKEN || '';

  if (expected.length > 0 && password === expected) {
    const res = NextResponse.redirect(new URL('/', req.url), 303);
    res.cookies.set('site_unlock', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
    });
    return res;
  }

  return NextResponse.redirect(new URL('/locked?e=1', req.url), 303);
}
