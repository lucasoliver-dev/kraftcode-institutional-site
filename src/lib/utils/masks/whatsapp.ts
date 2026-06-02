const BRAZIL_COUNTRY_CODE = "55";
const MAX_WHATSAPP_DIGITS = 13;

export function getPhoneDigits(value: string) {
  return value.replace(/\D/g, "").slice(0, MAX_WHATSAPP_DIGITS);
}

export function formatWhatsapp(value: string) {
  const rawDigits = getPhoneDigits(value);

  if (!rawDigits) {
    return "";
  }

  const digits = rawDigits.startsWith(BRAZIL_COUNTRY_CODE)
    ? rawDigits
    : `${BRAZIL_COUNTRY_CODE}${rawDigits}`.slice(0, MAX_WHATSAPP_DIGITS);

  const countryCode = digits.slice(0, 2);
  const areaCode = digits.slice(2, 4);
  const phone = digits.slice(4);
  const firstPart = phone.length > 8 ? phone.slice(0, 5) : phone.slice(0, 4);
  const secondPart = phone.length > 8 ? phone.slice(5, 9) : phone.slice(4, 8);

  if (digits.length <= 2) {
    return countryCode ? `+${countryCode}` : "";
  }

  if (digits.length <= 4) {
    return `+${countryCode} (${areaCode}`;
  }

  if (!secondPart) {
    return `+${countryCode} (${areaCode}) ${firstPart}`;
  }

  return `+${countryCode} (${areaCode}) ${firstPart}-${secondPart}`;
}
