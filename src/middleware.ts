import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

import { NextRequest, NextResponse } from "next/server";
import {
  ACCEPTED_LANGUAGES,
  DEFAULT_LANGUAGE,
} from "./packages/constants/locale";

const getLanguage = (request: NextRequest) => {
  const headers = { "accept-language": "en-US,en;q=0.5" };
  let languages = new Negotiator({ headers }).languages();

  return match(languages, ACCEPTED_LANGUAGES, DEFAULT_LANGUAGE);
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLanguage = ACCEPTED_LANGUAGES.some(
    (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  );

  if (pathnameHasLanguage) return;

  const lang = getLanguage(request);
  request.nextUrl.pathname = `/${lang}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
