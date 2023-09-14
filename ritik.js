document.addEventListener('DOMContentLoaded', function(event) {
      window.cookieChoices && cookieChoices.showCookieConsentBar && cookieChoices.showCookieConsentBar(
          (window.cookieOptions && cookieOptions.msg) || 'Diese Website verwendet Cookies von Google, um Dienste anzubieten und Zugriffe zu analysieren. Deine IP-Adresse und dein User-Agent werden zusammen mit Messwerten zur Leistung und Sicherheit f\xfcr Google freigegeben. So k\xf6nnen Nutzungsstatistiken generiert, Missbrauchsf\xe4lle erkannt und behoben und die Qualit\xe4t des Dienstes gew\xe4hrleistet werden.',
          (window.cookieOptions && cookieOptions.close) || 'Ok',
          (window.cookieOptions && cookieOptions.learn) || 'Weitere Informationen',
          (window.cookieOptions && cookieOptions.link) || 'https://www.blogger.com/go/blogspot-cookies');
    });
