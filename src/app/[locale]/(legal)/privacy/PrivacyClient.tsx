// src/app/[locale]/(legal)/privacy/PrivacyClient.tsx
'use client';

import { useLocale } from 'next-intl';
import { m as motion } from 'framer-motion';

const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 5 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] as const },
  },
};

/* ──────────────────────────────────────────────
   TREŚĆ POLITYKI PRYWATNOŚCI — POLSKI
   ────────────────────────────────────────────── */
function PrivacyContentPL() {
  return (
    <div className="text-slate-300 space-y-6 text-sm leading-relaxed max-h-[65vh] overflow-y-auto pr-2">
      <p className="text-xs text-slate-500 italic">Załącznik nr 2 do Regulaminu świadczenia usług drogą elektroniczną</p>
      <h3 className="text-base font-bold text-white text-center uppercase tracking-wide">Polityka Prywatności Serwisu Internetowego Inflee.app</h3>

      {/* 1 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">1. Informacje ogólne</h2>
        <p>
          Niniejsza Polityka Prywatności określa zasady przetwarzania danych osobowych użytkowników korzystających
          z serwisu internetowego Inflee.app, dostępnego pod adresami inflee.app oraz app.inflee.app (dalej: „Serwis")
          zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r.
          w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego
          przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych)
          (Dz. U. UE. L. z 2016 r. Nr 119, str. 1 z późn. zm.).
        </p>
      </section>

      {/* 2 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">2. Administrator danych osobowych</h2>
        <p>
          Administratorem danych osobowych jest <strong className="text-white">AQUATREK SOLUTIONS PROSTA SPÓŁKA AKCYJNA</strong> z
          siedzibą w Łodzi, ul.&nbsp;Romana&nbsp;20A, 93-370&nbsp;Łódź, zarejestrowana w rejestrze przedsiębiorców KRS
          przez Sąd Rejonowy dla Łodzi Śródmieścia w Łodzi, XX&nbsp;Wydział Gospodarczy KRS pod numerem 0001044483,
          NIP:&nbsp;7292750466, REGON:&nbsp;525692626, o kapitale akcyjnym w wysokości 10&nbsp;000,00&nbsp;zł.
        </p>
        <p className="mt-2">
          Kontakt: e-mail: <a href="mailto:contact@inflee.app" className="text-purple-400 hover:text-purple-300">contact@inflee.app</a>,
          nr tel.: <a href="tel:+48534874104" className="text-purple-400 hover:text-purple-300">+48 534 874 104</a>.
        </p>
      </section>

      {/* 3 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">3. Do kogo kierujemy naszą Politykę prywatności?</h2>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>osób odwiedzających Serwis i nasze profile społecznościowe,</li>
          <li>użytkowników kupujących oferowane przez nas w Serwisie produkty i usługi,</li>
          <li>subskrybentów Newslettera,</li>
          <li>osób kontaktujących się z nami.</li>
        </ul>
      </section>

      {/* 4 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">4. Pozyskiwanie danych</h2>
        <p>Pozyskujemy dane użytkowników w związku z:</p>
        <ul className="list-disc list-inside space-y-1 pl-2 mt-1">
          <li>odwiedzeniem przez użytkowników naszego Serwisu,</li>
          <li>odwiedzaniem naszych profili społecznościowych,</li>
          <li>założeniem konta w Serwisie,</li>
          <li>kupieniem produktu lub usługi,</li>
          <li>korzystaniem z produktu lub usługi,</li>
          <li>dobrowolnym nawiązaniem z nami kontaktu,</li>
          <li>subskrypcją newslettera,</li>
          <li>wykorzystywaniem plików cookies lub podobnych technologii internetowych.</li>
        </ul>
      </section>

      {/* 5 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">5. Zakres przetwarzanych danych</h2>
        <p>W ramach korzystania z Serwisu możemy przetwarzać następujące dane:</p>
        <ul className="list-disc list-inside space-y-2 pl-2 mt-2">
          <li>Dane podawane dobrowolnie przy rejestracji konta: imię, nazwisko, adres e-mail, numer telefonu, hasło;</li>
          <li>Dane zbierane podczas transakcji zakupu: imię, nazwisko, firma (opcjonalnie) – NIP, dane rejestrowe firmy, adres (ulica, numer domu, numer lokalu, kod pocztowy, miasto, kraj), dane kontaktowe (adres e-mail, numer telefonu), dane dotyczące formy płatności, numer rachunku bankowego użytkownika, dane posiadacza rachunku;</li>
          <li>Dane wprowadzane przez użytkownika dobrowolnie w celu stworzenia e-booka („Dane Wejściowe");</li>
          <li>Dane podane przez użytkownika dobrowolnie podczas kontaktu z nami;</li>
          <li>Dane zbierane podczas rozpatrywania reklamacji: imię, nazwisko, adres e-mail, numer telefonu, adres (ulica, numer domu, numer lokalu, kod pocztowy, miasto, kraj), informacje o reklamowanym produkcie/usłudze, numer zamówienia, inne informacje podane przez użytkownika dobrowolnie;</li>
          <li>Dane zbierane podczas wizyty użytkownika na naszych portalach społecznościowych: imię, nazwisko, pseudonim, adres e-mail, zdjęcie lub awatar, inne informacje o użytkowniku zapisane w jego profilu społecznościowym, treść korespondencji skierowanej do nas, treść wpisów dokonywanych przez użytkowników, pliki cookies i inne dane statystyczne gromadzone w serwisie społecznościowym;</li>
          <li>Dane zbierane automatycznie: adres IP, dane techniczne dotyczące urządzenia i przeglądarki, pliki cookies, dane statystyczne z narzędzi analitycznych (np. Google Analytics).</li>
        </ul>
      </section>

      {/* 6 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">6. Cele i podstawy prawne przetwarzania danych</h2>
        <p>Twoje dane mogą być przetwarzane w następujących celach:</p>
        <ul className="list-disc list-inside space-y-2 pl-2 mt-2">
          <li>zawarcia i wykonywania umowy o świadczenie usług drogą elektroniczną w zakresie realizacji sprzedaży za pośrednictwem Serwisu oraz świadczenia usług związanych z prowadzeniem i obsługą konta użytkownika – podstawą prawną jest niezbędność przetwarzania do wykonania łączącej strony umowy (art. 6 ust. 1 lit. b RODO);</li>
          <li>analitycznym i statystycznym – podstawą prawną jest nasz uzasadniony interes, polegający na prowadzeniu analiz aktywności użytkowników w Serwisie i ich sposobu korzystania z konta, a także ich preferencji w celu poprawy stosowanych funkcjonalności (art. 6 ust. 1 lit. f RODO);</li>
          <li>ewentualnego ustalenia i dochodzenia roszczeń lub obrony przed nimi – podstawą prawną jest uzasadniony interes Administratora, polegający na ochronie jego praw (art. 6 ust. 1 lit. f RODO);</li>
          <li>składania ofert marketingowych – podstawą prawną jest udzielona przez użytkownika zgoda (art. 6 ust. 1 lit. a lub f RODO);</li>
          <li>rozpatrywania reklamacji, na podstawie prawnie uzasadnionego interesu Administratora (art. 6 ust. 1 lit. f RODO);</li>
          <li>realizacji obowiązków wynikających z przepisów prawa (art. 6 ust. 1 lit. c RODO).</li>
        </ul>
      </section>

      {/* 7 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">7. Odbiorcy danych</h2>
        <p>W celu realizacji usług korzystamy z podmiotów zewnętrznych, którym w razie potrzeby, ujawniamy dane osobowe Użytkowników. Do najważniejszych podmiotów, z usług których korzystamy, zaliczają się:</p>
        <ul className="list-disc list-inside space-y-1 pl-2 mt-2">
          <li>Dostawcy usług IT i cloud (hosting, administracja serwisem, dostawcy konfiguratora),</li>
          <li>Dostawcy systemów płatności elektronicznych, m.in.:
            <ul className="list-none pl-6 mt-1 space-y-1">
              <li>a) STRIPE – system płatniczy,</li>
              <li>b) INFAKT – system księgowości online.</li>
            </ul>
          </li>
          <li>Dostawcy systemów AI, w tym m.in.:
            <ul className="list-none pl-6 mt-1 space-y-1">
              <li>a) Text Generation API – usługi generowania tekstu,</li>
              <li>b) Claude Haiku 3.5 oraz Claude 4 – modele językowe firmy Anthropic,</li>
              <li>c) Image Generation Provider – zewnętrzny system do generowania obrazów z opisu,</li>
              <li>d) Google AI Studio – w tym: Imagen 3, Imagen 4 oraz Imagen 4 Ultra – narzędzia do generowania grafik i treści wizualnych.</li>
            </ul>
          </li>
          <li>Banki, w których posiadamy rachunki, systemy płatności elektronicznych,</li>
          <li>Operatorzy narzędzi analitycznych, np. Google Analytics (dane zagregowane, bez identyfikacji konkretnej osoby),</li>
          <li>Dostawcy systemu newsletterowego,</li>
          <li>Firmy doradcze i prawne w zakresie niezbędnym do realizacji obowiązków prawnych.</li>
        </ul>
        <p className="mt-3">
          Jeśli jest to wymagane przez prawo, ujawnimy dane osobowe innym podmiotom, głównie publicznym, w tym w odpowiedzi na nakaz sądowy, wezwanie lub inne żądanie lub zapytanie prawne realizowane w ramach sprawowania władzy publicznej i jedynie, jeżeli to żądanie oparte jest na właściwej podstawie prawnej.
        </p>
        <p className="mt-2">
          Poza opisanymi powyżej sytuacjami, nie sprzedajemy ani nie transferujemy danych osobowych do podmiotów trzecich.
        </p>
        <p className="mt-2">
          Dane użytkownika nie będą przekazywane do organizacji międzynarodowej. Twoje dane osobowe mogą być w niektórych przypadkach przekazywane poza EOG (Europejski Obszar Gospodarczy), jednakże tylko do miejsc, w których Twoje prawa są chronione zgodnie z zasadami określonymi w RODO. Jest to związane na przykład z korzystaniem z systemów IT dostarczanych przez podmiot spoza EOG, znajdujący się na liście organizacji zapewniających zgodność z „Ramami ochrony danych UE – USA", opublikowanej przez Departament Handlu USA.
        </p>
      </section>

      {/* 8 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">8. Czas przechowywania danych</h2>
        <p>Czas, przez który zbieramy dane osobowe użytkowników, uzależniony jest od podstawy prawnej na której opiera się przetwarzanie.</p>
        <ul className="list-disc list-inside space-y-2 pl-2 mt-2">
          <li>W przypadku zgody użytkownika, dane przetwarzamy aż do czasu jej wycofania lub osiągnięcia celów przetwarzania (gdy nie będą już potrzebne).</li>
          <li>W przypadku wykonywania umowy, dane przetwarzamy przez czas związany z wypełnieniem warunków umowy, wykonaniem zlecenia czy usługi oraz po jej upływie przez okres przedawnienia roszczeń.</li>
          <li>W przypadku realizacji obowiązku prawnego, dane przetwarzamy przez okres wymagany od nas przez przepisy prawa nakładającego taki obowiązek.</li>
          <li>W przypadku naszego prawnie uzasadnionego interesu, dane przetwarzamy przez okres istnienia takiego uzasadnionego interesu np. potrzeby komunikowania się z użytkownikiem, przedstawiania ofert naszych produktów i usług, przedawnienia roszczeń jak i przez czas, w którym musimy rozliczyć się z prawidłowego przetwarzania danych.</li>
        </ul>
        <p className="mt-2">
          Użytkownik może w każdym momencie zgłosić sprzeciw wobec przetwarzania przez nas danych na podstawie zgody bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem. Użytkownik może zgłosić sprzeciw, jeśli przetwarzamy dane osobowe na podstawie naszego prawnie uzasadnionego interesu, ale uważa, że nadrzędny charakter wobec tych interesów mają jego prawa i wolności.
        </p>
      </section>

      {/* 9 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">9. Twoje prawa</h2>
        <p>Użytkownik ma prawo do:</p>
        <ul className="list-disc list-inside space-y-2 pl-2 mt-1">
          <li>dostępu do swoich danych – użytkownik ma prawo do uzyskania informacji o tym, jakie dane osobowe przetwarzamy;</li>
          <li>sprostowania danych – użytkownik może wysłać do nas oświadczenie o niepoprawności swoich danych osobowych;</li>
          <li>żądania ich usunięcia – jeżeli zdaniem użytkownika nie ma podstaw, abyśmy przetwarzali jego dane, użytkownik może żądać od nas tego, abyśmy je usunęli;</li>
          <li>ograniczenia przetwarzania – użytkownik może żądać od nas ograniczenia przetwarzania swoich danych osobowych, jeśli uważa, że są nieprawidłowe lub przetwarzamy je bez podstawy prawnej, ale nie chce, abyśmy je usunęli, bo są mu potrzebne do ochrony lub ustalenia roszczeń lub na czas wniesionego przez niego sprzeciwu względem przetwarzania danych. Ograniczenie przetwarzania polega na tym, że dane użytkownika będą wyłącznie przechowywane lub będziemy dokonywali na nich wyłącznie uwzględnionych przez użytkownika działań;</li>
          <li>przeniesienia danych – użytkownik może od nas żądać, abyśmy przekazali mu jego dane osobowe, które przetwarzamy w systemach elektronicznych, za zgodą użytkownika lub w celu realizacji umowy, w powszechnie stosowanym formacie nadającym się do odczytu maszynowego, lub przesłali dane osobowe użytkownika do innego Administratora;</li>
          <li>wniesienia sprzeciwu wobec przetwarzania – (jeżeli przetwarzanie odbywało się na podstawie zgody) w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem. Użytkownik może zgłosić sprzeciw, jeśli przetwarzamy dane osobowe na podstawie naszego prawnie uzasadnionego interesu, ale użytkownik uważa, że nadrzędny charakter wobec tych interesów mają jego prawa i wolności;</li>
          <li>cofnięcia zgody w dowolnym momencie – wycofanie zgody nie wpływa na zgodność z prawem przetwarzania danych osobowych użytkownika, którego dokonano na podstawie udzielonej zgody przed jej cofnięciem;</li>
          <li>wniesienia skargi do Prezesa UODO – dane do wniesienia skargi znajdują się w pkt 12 poniżej.</li>
        </ul>
      </section>

      {/* 10 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">10. Pliki cookies i technologie śledzące</h2>
        <ol className="list-decimal list-inside space-y-2 pl-2">
          <li>Serwis korzysta z plików cookies.</li>
          <li>Pliki cookies (tzw. „ciasteczka") są to niewielkie pliki tekstowe wysyłane przez serwer www i przechowywane przez oprogramowanie przeglądarki. Kiedy przeglądarka ponownie połączy się ze stroną, witryna rozpoznaje rodzaj urządzenia, z którego łączy się użytkownik. Parametry pozwalają na odczytanie informacji w nich zawartych jedynie serwerowi, który je utworzył. Cookies ułatwiają więc korzystanie z wcześniej odwiedzonych witryn. Gromadzone informacje dotyczą adresu IP, typu wykorzystywanej przeglądarki, języka, rodzaju systemu operacyjnego, dostawcy usług internetowych, informacji o czasie i dacie, lokalizacji, informacji przesyłanych do witryny za pośrednictwem formularza kontaktowego itp.</li>
          <li>Podmiotem zamieszczającym na urządzeniu końcowym użytkownika Serwisu pliki cookies oraz uzyskującym do nich dostęp jest Administrator.</li>
          <li>Pliki cookies wykorzystywane są w następujących celach:
            <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
              <li>tworzenia statystyk, które pomagają zrozumieć, w jaki sposób użytkownicy Serwisu korzystają ze stron internetowych, co umożliwia ulepszanie ich struktury i zawartości;</li>
              <li>utrzymania sesji użytkownika Serwisu (po zalogowaniu), dzięki której Użytkownik nie musi na każdej podstronie Serwisu ponownie wpisywać loginu i hasła;</li>
              <li>określania profilu użytkownika w celu wyświetlania mu dopasowanych materiałów w sieciach reklamowych, w szczególności sieci Google.</li>
            </ul>
          </li>
          <li>W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies: „sesyjne" (session cookies) oraz „stałe" (persistent cookies). Cookies „sesyjne" są plikami tymczasowymi, które przechowywane są w urządzeniu końcowym Użytkownika do czasu wylogowania, opuszczenia strony internetowej lub wyłączenia oprogramowania (przeglądarki internetowej). „Stałe" pliki cookies przechowywane są w urządzeniu końcowym Użytkownika przez czas określony w parametrach plików cookies lub do czasu ich usunięcia przez Użytkownika.</li>
          <li>Oprogramowanie do przeglądania stron internetowych (przeglądarka internetowa) zazwyczaj domyślnie dopuszcza przechowywanie plików cookies w urządzeniu końcowym Użytkownika. Użytkownicy Serwisu mogą dokonać zmiany ustawień w tym zakresie. Przeglądarka internetowa umożliwia usunięcie plików cookies. Możliwe jest także automatyczne blokowanie plików cookies. Szczegółowe informacje na ten temat zawiera pomoc lub dokumentacja przeglądarki internetowej.</li>
          <li>Ograniczenia stosowania plików cookies mogą wpłynąć na niektóre funkcjonalności dostępne na stronach internetowych Serwisu.</li>
          <li>Pliki cookies zamieszczane w urządzeniu końcowym użytkownika Serwisu i wykorzystywane mogą być również przez współpracujących z operatorem Serwisu reklamodawców oraz partnerów.</li>
          <li>Zalecamy przeczytanie polityki ochrony prywatności tych firm, aby poznać zasady korzystania z plików cookie wykorzystywane w statystykach: Polityka ochrony prywatności Google Analytics. Pliki cookie mogą być wykorzystane przez sieci reklamowe, w szczególności sieć Google, do wyświetlenia reklam dopasowanych do sposobu, w jaki użytkownik korzysta z Serwisu. W tym celu mogą zachować informację o ścieżce nawigacji użytkownika lub czasie pozostawania na danej stronie.</li>
          <li>W zakresie informacji o preferencjach użytkownika gromadzonych przez sieć reklamową Google użytkownik może przeglądać i edytować informacje wynikające z plików cookies przy pomocy narzędzia: <a href="https://www.google.com/ads/preferences/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 break-all">https://www.google.com/ads/preferences/</a></li>
        </ol>
      </section>

      {/* 11 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">11. Logi Serwera</h2>
        <ol className="list-decimal list-inside space-y-2 pl-2">
          <li>Korzystanie z Serwisu wiąże się z przesyłaniem zapytań do serwera, na którym przechowywana jest strona i zapisywaniem ich w logach serwera. Logi są zapisywane i przechowywane na serwerze. Dane te są wykorzystywane wyłącznie w celu administrowania Serwisem oraz w celu zapewnienia jak najbardziej sprawnej obsługi świadczonych usług hostingowych. Przeglądane zasoby identyfikowane są poprzez adresy URL. Ponadto zapisowi mogą podlegać:
            <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
              <li>czas nadejścia zapytania,</li>
              <li>czas wysłania odpowiedzi,</li>
              <li>nazwa stacji klienta – identyfikacja realizowana przez protokół HTTP,</li>
              <li>informacje o błędach jakie nastąpiły przy realizacji transakcji HTTP,</li>
              <li>adres URL strony poprzednio odwiedzanej przez użytkownika (referer link) – w przypadku gdy przejście do Serwisu nastąpiło przez odnośnik,</li>
              <li>informacje o przeglądarce użytkownika,</li>
              <li>informacje o adresie IP.</li>
            </ul>
          </li>
          <li>Dane powyższe nie są kojarzone z konkretnymi osobami przeglądającymi strony.</li>
          <li>Dane powyższe są wykorzystywane jedynie dla celów administrowania serwerem.</li>
        </ol>
      </section>

      {/* 12 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">12. Organ nadzorczy</h2>
        <p>
          Jeżeli stwierdzisz, że przetwarzanie Twoich danych osobowych przez Administratora następuje niezgodnie
          z przepisami o ochronie danych osobowych, masz prawo do wniesienia skargi do Prezesa Urzędu Ochrony
          Danych Osobowych – ul.&nbsp;Moniuszki&nbsp;1A, 00-014&nbsp;Warszawa. Szczegółowe informacje jak wnieść
          skargę możesz znaleźć tutaj: <a href="https://uodo.gov.pl/pl/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">https://uodo.gov.pl/pl/</a>
        </p>
        <p className="mt-2">
          Wszelkie uwagi lub zastrzeżenia co do sposobu przetwarzania Twoich danych, prosimy wysyłać pocztą
          tradycyjną na adres Administratora lub za pośrednictwem poczty e-mail: <a href="mailto:contact@inflee.app" className="text-purple-400 hover:text-purple-300">contact@inflee.app</a>.
        </p>
      </section>

      {/* 13 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">13. Zmiany Polityki</h2>
        <p>
          Na zakończenie chcielibyśmy poinformować Cię, że zastrzegamy sobie prawo do zmiany powyższej polityki
          prywatności. Zmiany te mogą się odbyć poprzez opublikowanie nowej polityki prywatności na naszej stronie
          internetowej. Po dokonaniu zmiany, Polityka Prywatności ukaże się na stronie z nową datą.
        </p>
        <p className="mt-2 text-slate-500 text-xs">Ta wersja Polityki Prywatności obowiązuje od 01.03.2026 r.</p>
      </section>
    </div>
  );
}

/* ──────────────────────────────────────────────
   TREŚĆ POLITYKI PRYWATNOŚCI — ENGLISH
   ────────────────────────────────────────────── */
function PrivacyContentEN() {
  return (
    <div className="text-slate-300 space-y-6 text-sm leading-relaxed max-h-[65vh] overflow-y-auto pr-2">
      <p className="text-xs text-slate-500 italic">Appendix No. 2 to the Terms of Service for Electronic Services</p>
      <h3 className="text-base font-bold text-white text-center uppercase tracking-wide">Privacy Policy of the Inflee.app Website</h3>

      {/* 1 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">1. General Information</h2>
        <p>
          This Privacy Policy sets out the rules for processing personal data of users of the Inflee.app website,
          available at inflee.app and app.inflee.app (hereinafter: the &quot;Service&quot;), in accordance with
          Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection
          of natural persons with regard to the processing of personal data and on the free movement of such data,
          and repealing Directive 95/46/EC (General Data Protection Regulation) (OJ EU L 119, 4.5.2016, p. 1, as amended).
        </p>
      </section>

      {/* 2 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">2. Data Controller</h2>
        <p>
          The controller of personal data is <strong className="text-white">AQUATREK SOLUTIONS PROSTA SPÓŁKA AKCYJNA</strong>,
          with its registered office in Łódź, ul.&nbsp;Romana&nbsp;20A, 93-370&nbsp;Łódź, Poland, entered in the
          National Court Register (KRS) by the District Court for Łódź-Śródmieście in Łódź, 20th Commercial Division
          of the KRS under number 0001044483, NIP (Tax ID):&nbsp;7292750466, REGON:&nbsp;525692626, with share capital
          of PLN&nbsp;10,000.00.
        </p>
        <p className="mt-2">
          Contact: e-mail: <a href="mailto:contact@inflee.app" className="text-purple-400 hover:text-purple-300">contact@inflee.app</a>,
          phone: <a href="tel:+48534874104" className="text-purple-400 hover:text-purple-300">+48 534 874 104</a>.
        </p>
      </section>

      {/* 3 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">3. Who Is This Privacy Policy Addressed To?</h2>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>persons visiting the Service and our social media profiles,</li>
          <li>users purchasing products and services offered by us through the Service,</li>
          <li>Newsletter subscribers,</li>
          <li>persons contacting us.</li>
        </ul>
      </section>

      {/* 4 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">4. Data Collection</h2>
        <p>We collect user data in connection with:</p>
        <ul className="list-disc list-inside space-y-1 pl-2 mt-1">
          <li>users visiting our Service,</li>
          <li>visiting our social media profiles,</li>
          <li>creating an account in the Service,</li>
          <li>purchasing a product or service,</li>
          <li>using a product or service,</li>
          <li>voluntarily contacting us,</li>
          <li>subscribing to the newsletter,</li>
          <li>use of cookies or similar internet technologies.</li>
        </ul>
      </section>

      {/* 5 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">5. Scope of Processed Data</h2>
        <p>When using the Service, we may process the following data:</p>
        <ul className="list-disc list-inside space-y-2 pl-2 mt-2">
          <li>Data voluntarily provided during account registration: first name, last name, e-mail address, phone number, password;</li>
          <li>Data collected during purchase transactions: first name, last name, company (optional) – tax ID (NIP), company registration data, address (street, house number, apartment number, postal code, city, country), contact details (e-mail address, phone number), payment method data, user&apos;s bank account number, account holder data;</li>
          <li>Data voluntarily entered by the user for the purpose of creating an e-book (&quot;Input Data&quot;);</li>
          <li>Data voluntarily provided by the user when contacting us;</li>
          <li>Data collected during complaint processing: first name, last name, e-mail address, phone number, address (street, house number, apartment number, postal code, city, country), information about the product/service being complained about, order number, other information voluntarily provided by the user;</li>
          <li>Data collected during user visits to our social media platforms: first name, last name, username, e-mail address, photo or avatar, other user information stored in their social media profile, content of correspondence directed to us, content of posts made by users, cookies and other statistical data collected in the social media platform;</li>
          <li>Data collected automatically: IP address, technical data regarding the device and browser, cookies, statistical data from analytical tools (e.g., Google Analytics).</li>
        </ul>
      </section>

      {/* 6 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">6. Purposes and Legal Bases for Data Processing</h2>
        <p>Your data may be processed for the following purposes:</p>
        <ul className="list-disc list-inside space-y-2 pl-2 mt-2">
          <li>conclusion and performance of a contract for the provision of electronic services regarding the execution of sales through the Service and the provision of services related to the operation and maintenance of the user account – the legal basis is the necessity of processing for the performance of the contract binding the parties (Art. 6(1)(b) GDPR);</li>
          <li>analytical and statistical purposes – the legal basis is our legitimate interest, consisting of conducting analyses of user activity in the Service and their manner of using the account, as well as their preferences in order to improve the functionalities used (Art. 6(1)(f) GDPR);</li>
          <li>possible establishment and pursuit of claims or defense against them – the legal basis is the legitimate interest of the Controller, consisting of protecting its rights (Art. 6(1)(f) GDPR);</li>
          <li>making marketing offers – the legal basis is consent given by the user (Art. 6(1)(a) or (f) GDPR);</li>
          <li>processing complaints, on the basis of the Controller&apos;s legitimate interest (Art. 6(1)(f) GDPR);</li>
          <li>fulfillment of obligations arising from legal provisions (Art. 6(1)(c) GDPR).</li>
        </ul>
      </section>

      {/* 7 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">7. Data Recipients</h2>
        <p>In order to provide services, we use external entities to whom, if necessary, we disclose Users&apos; personal data. The most important entities whose services we use include:</p>
        <ul className="list-disc list-inside space-y-1 pl-2 mt-2">
          <li>IT and cloud service providers (hosting, site administration, configurator providers),</li>
          <li>Electronic payment system providers, including:
            <ul className="list-none pl-6 mt-1 space-y-1">
              <li>a) STRIPE – payment system,</li>
              <li>b) INFAKT – online accounting system.</li>
            </ul>
          </li>
          <li>AI system providers, including:
            <ul className="list-none pl-6 mt-1 space-y-1">
              <li>a) Text Generation API – text generation services,</li>
              <li>b) Claude Haiku 3.5 and Claude 4 – language models by Anthropic,</li>
              <li>c) Image Generation Provider – external system for generating images from descriptions,</li>
              <li>d) Google AI Studio – including: Imagen 3, Imagen 4 and Imagen 4 Ultra – tools for generating graphics and visual content.</li>
            </ul>
          </li>
          <li>Banks where we hold accounts, electronic payment systems,</li>
          <li>Analytical tool operators, e.g., Google Analytics (aggregated data, without identification of specific persons),</li>
          <li>Newsletter system providers,</li>
          <li>Advisory and legal firms to the extent necessary for the fulfillment of legal obligations.</li>
        </ul>
        <p className="mt-3">
          If required by law, we will disclose personal data to other entities, mainly public ones, including in response to a court order, subpoena or other legal request or inquiry carried out in the exercise of public authority, and only if such a request is based on a proper legal basis.
        </p>
        <p className="mt-2">
          Apart from the situations described above, we do not sell or transfer personal data to third parties.
        </p>
        <p className="mt-2">
          User data will not be transferred to an international organization. Your personal data may in some cases be transferred outside the EEA (European Economic Area), however only to locations where your rights are protected in accordance with the principles set out in the GDPR. This is related, for example, to the use of IT systems provided by an entity outside the EEA that is on the list of organizations ensuring compliance with the &quot;EU–US Data Privacy Framework&quot; published by the U.S. Department of Commerce.
        </p>
      </section>

      {/* 8 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">8. Data Retention Period</h2>
        <p>The period for which we collect users&apos; personal data depends on the legal basis on which the processing is based.</p>
        <ul className="list-disc list-inside space-y-2 pl-2 mt-2">
          <li>In the case of user consent, we process data until it is withdrawn or the processing purposes are achieved (when the data is no longer needed).</li>
          <li>In the case of contract performance, we process data for the period related to the fulfillment of the contract terms, execution of the order or service, and after its expiry for the limitation period for claims.</li>
          <li>In the case of fulfilling a legal obligation, we process data for the period required by the legal provisions imposing such an obligation.</li>
          <li>In the case of our legitimate interest, we process data for the period of existence of such legitimate interest, e.g., the need to communicate with the user, present offers of our products and services, limitation of claims, as well as for the time during which we must account for the proper processing of data.</li>
        </ul>
        <p className="mt-2">
          The user may at any time object to the processing of data by us on the basis of consent without affecting the lawfulness of the processing carried out on the basis of consent before its withdrawal. The user may object if we process personal data on the basis of our legitimate interest, but considers that their rights and freedoms override such interests.
        </p>
      </section>

      {/* 9 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">9. Your Rights</h2>
        <p>The user has the right to:</p>
        <ul className="list-disc list-inside space-y-2 pl-2 mt-1">
          <li>access their data – the user has the right to obtain information about what personal data we process;</li>
          <li>rectification of data – the user may send us a statement regarding the incorrectness of their personal data;</li>
          <li>request their erasure – if the user believes there are no grounds for us to process their data, the user may request that we delete them;</li>
          <li>restriction of processing – the user may request that we restrict the processing of their personal data if they believe the data is incorrect or we process it without a legal basis, but they do not want us to delete it because they need it to protect or establish claims, or for the duration of their objection to data processing. Restriction of processing means that the user&apos;s data will only be stored or we will only carry out actions agreed upon by the user;</li>
          <li>data portability – the user may request that we transfer their personal data that we process in electronic systems, with the user&apos;s consent or for the purpose of contract performance, in a commonly used machine-readable format, or send the user&apos;s personal data to another Controller;</li>
          <li>object to processing – (if processing was based on consent) at any time without affecting the lawfulness of the processing carried out on the basis of consent before its withdrawal. The user may object if we process personal data on the basis of our legitimate interest, but the user considers that their rights and freedoms override such interests;</li>
          <li>withdraw consent at any time – withdrawal of consent does not affect the lawfulness of personal data processing carried out on the basis of consent given before its withdrawal;</li>
          <li>lodge a complaint with the President of UODO – details for filing a complaint can be found in point 12 below.</li>
        </ul>
      </section>

      {/* 10 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">10. Cookies and Tracking Technologies</h2>
        <ol className="list-decimal list-inside space-y-2 pl-2">
          <li>The Service uses cookies.</li>
          <li>Cookies are small text files sent by the web server and stored by the browser software. When the browser reconnects with the website, the site recognizes the type of device the user is connecting from. The parameters allow the information contained in them to be read only by the server that created them. Cookies thus facilitate the use of previously visited websites. The information collected relates to the IP address, type of browser used, language, type of operating system, internet service provider, time and date information, location, information sent to the website via the contact form, etc.</li>
          <li>The entity placing cookies on the Service user&apos;s end device and accessing them is the Controller.</li>
          <li>Cookies are used for the following purposes:
            <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
              <li>creating statistics that help understand how Service users use web pages, which enables improving their structure and content;</li>
              <li>maintaining the Service user&apos;s session (after logging in), so that the User does not have to re-enter the login and password on each subpage of the Service;</li>
              <li>determining the user&apos;s profile in order to display matching materials in advertising networks, in particular the Google network.</li>
            </ul>
          </li>
          <li>Within the Service, two basic types of cookies are used: &quot;session&quot; cookies and &quot;persistent&quot; cookies. Session cookies are temporary files that are stored on the User&apos;s end device until logging out, leaving the website or shutting down the software (web browser). Persistent cookies are stored on the User&apos;s end device for the time specified in the cookie parameters or until they are deleted by the User.</li>
          <li>Web browsing software (web browser) usually allows cookies to be stored on the User&apos;s end device by default. Service Users may change settings in this regard. The web browser allows cookies to be deleted. It is also possible to automatically block cookies. Detailed information on this subject can be found in the help or documentation of the web browser.</li>
          <li>Restrictions on the use of cookies may affect some of the functionalities available on the Service&apos;s web pages.</li>
          <li>Cookies placed on the Service user&apos;s end device may also be used by advertisers and partners cooperating with the Service operator.</li>
          <li>We recommend reading the privacy policies of these companies to learn about the rules for using cookies used in statistics: Google Analytics Privacy Policy. Cookies may be used by advertising networks, in particular the Google network, to display advertisements tailored to the way the user uses the Service. For this purpose, they may retain information about the user&apos;s navigation path or time spent on a given page.</li>
          <li>Regarding information about user preferences collected by the Google advertising network, the user can view and edit information resulting from cookies using the tool: <a href="https://www.google.com/ads/preferences/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 break-all">https://www.google.com/ads/preferences/</a></li>
        </ol>
      </section>

      {/* 11 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">11. Server Logs</h2>
        <ol className="list-decimal list-inside space-y-2 pl-2">
          <li>Using the Service involves sending requests to the server on which the website is stored and recording them in server logs. Logs are saved and stored on the server. This data is used solely for the purpose of administering the Service and to ensure the most efficient operation of the hosting services provided. Browsed resources are identified by URL addresses. In addition, the following may be recorded:
            <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
              <li>time of request arrival,</li>
              <li>time of response sent,</li>
              <li>client station name – identification performed by the HTTP protocol,</li>
              <li>information about errors that occurred during HTTP transaction processing,</li>
              <li>URL address of the page previously visited by the user (referrer link) – in case the transition to the Service was through a link,</li>
              <li>information about the user&apos;s browser,</li>
              <li>information about the IP address.</li>
            </ul>
          </li>
          <li>The above data is not associated with specific persons browsing the pages.</li>
          <li>The above data is used solely for server administration purposes.</li>
        </ol>
      </section>

      {/* 12 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">12. Supervisory Authority</h2>
        <p>
          If you find that the processing of your personal data by the Controller is not in compliance with
          data protection regulations, you have the right to lodge a complaint with the President of the
          Personal Data Protection Office (UODO) – ul.&nbsp;Moniuszki&nbsp;1A, 00-014&nbsp;Warsaw, Poland.
          Detailed information on how to file a complaint can be found here: <a href="https://uodo.gov.pl/pl/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">https://uodo.gov.pl/pl/</a>
        </p>
        <p className="mt-2">
          Any comments or objections regarding the manner of processing your data should be sent by traditional
          mail to the Controller&apos;s address or via e-mail: <a href="mailto:contact@inflee.app" className="text-purple-400 hover:text-purple-300">contact@inflee.app</a>.
        </p>
      </section>

      {/* 13 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">13. Policy Changes</h2>
        <p>
          In conclusion, we would like to inform you that we reserve the right to change this privacy policy.
          These changes may be made by publishing a new privacy policy on our website. After a change is made,
          the Privacy Policy will appear on the page with a new date.
        </p>
        <p className="mt-2 text-slate-500 text-xs">This version of the Privacy Policy is effective from March 1, 2026.</p>
      </section>
    </div>
  );
}

/* ──────────────────────────────────────────────
   GŁÓWNY KOMPONENT
   ────────────────────────────────────────────── */
export default function PrivacyClient() {
  const locale = useLocale();
  const isEn = locale === 'en';

  return (
    <>
      {/* Lewa kolumna — Hero */}
      <div className="lg:col-span-5 flex flex-col justify-center items-start text-left pr-0 lg:pr-10 pt-12 pb-6 lg:py-0">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroContainerVariants}
          className="w-full lg:px-0"
        >
          <motion.div variants={heroItemVariants}>
            <h1 className="font-extrabold text-white leading-tight font-sans">
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                {isEn ? 'Privacy Policy' : 'Polityka Prywatności'}
              </span>
            </h1>
          </motion.div>

          <motion.div variants={heroItemVariants}>
            <div className="w-40 sm:w-48 lg:w-full lg:max-w-md h-px bg-gradient-to-r from-purple-500 to-pink-500 mt-2.5 mb-1.5 lg:mt-6 lg:mb-2" />
          </motion.div>

          <motion.div variants={heroItemVariants}>
            <h1 className="font-extrabold text-white pb-0 leading-snug font-sans">
              <span
                className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl pb-3"
                style={{
                  background: 'linear-gradient(135deg, #A855F7, #6366F1)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {isEn ? 'of inflee.app' : 'serwisu inflee.app'}
              </span>
            </h1>
          </motion.div>

          <motion.div variants={heroItemVariants}>
            <p className="text-slate-400 text-sm mt-4 leading-relaxed max-w-md">
              {isEn
                ? 'Your privacy matters to us. Below you will find detailed information about how we process and protect your personal data in accordance with the GDPR.'
                : 'Twoja prywatność jest dla nas ważna. Poniżej znajdziesz szczegółowe informacje o tym, jak przetwarzamy i chronimy Twoje dane osobowe zgodnie z RODO.'}
            </p>
          </motion.div>

          <motion.div variants={heroItemVariants}>
            <div className="mt-6 flex items-center gap-3 text-xs text-slate-500">
              <span>{isEn ? 'Effective: March 1, 2026' : 'Obowiązuje od: 01.03.2026'}</span>
              <span className="text-slate-700">|</span>
              <span>{isEn ? 'GDPR Compliant' : 'Zgodne z RODO'}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Prawa kolumna — Treść */}
      <div className="lg:col-span-7 flex flex-col justify-center items-start pt-6 pb-12 lg:py-0">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full"
        >
          <div className="bg-black/40 border border-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 w-full">
            {isEn ? <PrivacyContentEN /> : <PrivacyContentPL />}
          </div>
        </motion.div>
      </div>
    </>
  );
}