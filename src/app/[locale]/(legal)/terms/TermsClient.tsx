// src/app/[locale]/(legal)/terms/TermsClient.tsx
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

/* ══════════════════════════════════════════════
   REGULAMIN — POLSKI (pełna treść 1:1)
   ══════════════════════════════════════════════ */
function TermsContentPL() {
  return (
    <div className="text-slate-300 space-y-6 text-sm leading-relaxed max-h-[65vh] overflow-y-auto pr-2">
      <h3 className="text-base font-bold text-white text-center uppercase tracking-wide">Regulamin Platformy Inflee.app</h3>
      <p className="text-xs text-slate-500 text-center">z dnia 01.03.2026 r.</p>

      <div className="space-y-3">
        <p>Niniejszy Regulamin Platformy określa korzystanie z platformy internetowej: Inflee.app znajdującej się pod adresami inflee.app oraz app.inflee.app oraz usług online dostępnych lub udostępnianych za pośrednictwem Platformy.</p>
        <p>Warunki Regulaminu Platformy dotyczą korzystania z Usług i mają zastosowanie do wszystkich Użytkowników odwiedzających Platformę, a także do Odbiorców e-booków tworzonych przez Użytkowników i zamieszczonych na Platformie.</p>
        <p>Przy rejestracji konta oświadczasz, że:</p>
        <ol className="list-decimal list-inside pl-2 space-y-1">
          <li>przeczytałeś, zrozumiałeś i zgadzasz się na przestrzeganie warunków Regulaminu;</li>
          <li>posiadasz zdolność do zawarcia z nami wiążącej umowy;</li>
        </ol>
        <p>Jeśli nie zgadzasz się warunkami Regulaminu, nie możesz korzystać z Platformy i naszych Usług.</p>
      </div>

      {/* §1 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">§ 1 Definicje</h2>
        <ol className="list-decimal list-inside space-y-3 pl-2">
          <li><strong className="text-slate-200">Abonament</strong> – opłata należna Dostawcy za dostęp do usług Platformy, uiszczana z góry przez Użytkownika w formie:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a) subskrypcji cyklicznej realizowanej za pośrednictwem zewnętrznego systemu płatności lub</li>
              <li>b) płatności jednorazowej za wybrany okres, przy użyciu dostępnych metod płatności.</li>
            </ol>
            <p className="mt-1">Wysokość Abonamentu zależna jest od wybranego przez Użytkownika wariantu określonego w Cenniku.</p>
          </li>
          <li><strong className="text-slate-200">Cennik</strong> – dokument określający wysokość opłat pobieranych przez Dostawcę od Użytkownika za Usługi świadczone w ramach Umowy. Cennik jest dostępny dla Użytkowników na Platformie.</li>
          <li><strong className="text-slate-200">Dostawca</strong> – AQUATREK SOLUTIONS PROSTA SPÓŁKA AKCYJNA z siedzibą w Łodzi, ul. Romana 20A, 93-370 Łódź, zarejestrowana w rejestrze przedsiębiorców KRS przez Sąd Rejonowy dla Łodzi Śródmieścia w Łodzi, XX Wydział Gospodarczy KRS pod numerem 0001044483, NIP: 7292750466, REGON: 525692626, o kapitale akcyjnym w wysokości 10.000,00 zł.</li>
          <li><strong className="text-slate-200">Konsument</strong> – osoba fizyczna o której mowa w art. 22¹ Kodeksu Cywilnego lub przedsiębiorca będący osobą fizyczną zawierający umowę bezpośrednio w związku z jego działalnością gospodarczą, jeżeli z treści umowy wynika, że nie posiada ona dla niego charakteru zawodowego.</li>
          <li><strong className="text-slate-200">Konto lub Konto Użytkownika</strong> – indywidualny panel administracyjny przydzielany Użytkownikowi w ramach Platformy, umożliwiający korzystanie z jej funkcjonalności, identyfikowalny za pomocą adresu e-mail i hasła oraz utrzymywany zgodnie z postanowieniami niniejszego Regulaminu.</li>
          <li><strong className="text-slate-200">Odbiorca e-booka</strong> – podmiot, który za pośrednictwem strony zapisu utworzonej przez Użytkownika przekazuje swoje dane osobowe w celu uzyskania dostępu do e-booka udostępnionego przez tego Użytkownika. Odbiorca e-booka nie jest Użytkownikiem Platformy w rozumieniu Regulaminu i nie jest zobowiązany do posiadania konta na Platformie.</li>
          <li><strong className="text-slate-200">Platforma</strong> – serwis internetowy dostępny pod adresami inflee.app oraz app.inflee.app umożliwiający Użytkownikom korzystanie z funkcjonalności Platformy, w tym tych opartych na sztucznej inteligencji.</li>
          <li><strong className="text-slate-200">Rejestracja</strong> – procedura zakładania Konta na Platformie przez Użytkownika.</li>
          <li><strong className="text-slate-200">Regulamin</strong> – niniejszy regulamin świadczenia usług drogą elektroniczną w ramach Platformy znajdującej się pod adresami inflee.app oraz app.inflee.app.</li>
          <li><strong className="text-slate-200">Rozporządzenie lub RODO</strong> – Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych) (Dz. U. UE. L. z 2016 r. Nr 119, str. 1 z późn. zm.).</li>
          <li><strong className="text-slate-200">System AI</strong> – system maszynowy, który został zaprojektowany do działania z różnym poziomem autonomii po jego wdrożeniu oraz który może wykazywać zdolność adaptacji po jego wdrożeniu, a także który – na potrzeby wyraźnych lub dorozumianych celów – wnioskuje, jak generować na podstawie otrzymanych danych wejściowych wyniki, takie jak predykcje, treści, zalecenia lub decyzje, które mogą wpływać na środowisko fizyczne lub wirtualne.</li>
          <li><strong className="text-slate-200">Świadczenie usługi drogą elektroniczną</strong> – wykonanie usługi świadczonej bez jednoczesnej obecności stron (na odległość), poprzez przekaz danych na indywidualne żądanie usługobiorcy, przesyłanej i otrzymywanej za pomocą urządzeń do elektronicznego przetwarzania, włącznie z kompresją cyfrową, i przechowywania danych, która jest w całości nadawana, odbierana lub transmitowana za pomocą sieci telekomunikacyjnej w rozumieniu ustawy z dnia 12 lipca 2024 r. – Prawo komunikacji elektronicznej (Dz. U. poz. 1221 z późn. zm.).</li>
          <li><strong className="text-slate-200">Usługa</strong> – usługi świadczone przez Dostawcę za pośrednictwem Platformy, zgodnie z funkcjonalnościami udostępnionymi w jej ramach oraz w oparciu o postanowienia niniejszego Regulaminu.</li>
          <li><strong className="text-slate-200">Użytkownik</strong> – użytkownik korzystający z Platformy w ramach uzyskanego dostępu do Usługi oferowanej poprzez Platformę.</li>
        </ol>
      </section>

      {/* §2 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">§ 2 Postanowienia ogólne</h2>
        <ol className="list-decimal list-inside space-y-2 pl-2">
          <li>Regulamin określa:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a. rodzaje, warunki i zakres Usług świadczonych drogą elektroniczną za pośrednictwem Platformy,</li>
              <li>b. prawa i obowiązki Dostawcy oraz Użytkowników,</li>
              <li>c. warunki i zasady korzystania z Platformy,</li>
              <li>d. warunki zawierania i rozwiązywania umów o świadczenie usług drogą elektroniczną,</li>
              <li>e. zakres korzystania z praw własności intelektualnej.</li>
            </ol>
          </li>
          <li>W sprawach nieuregulowanych w Regulaminie do świadczenia usług drogą elektroniczną, w szczególności do składania oświadczeń woli w postaci elektronicznej, stosuje się przepisy Kodeksu Cywilnego oraz innych powszechnie obowiązujących przepisów prawa.</li>
          <li>Użytkownik zobowiązany jest do zapoznania się z treścią Regulaminu przed rozpoczęciem korzystania z Serwisu.</li>
          <li>Regulamin udostępniony jest Użytkownikowi nieodpłatnie za pośrednictwem Platformy przed zawarciem umowy drogą elektroniczną w sposób, który umożliwia pozyskanie, odtwarzanie i utrwalanie jego treści za pomocą systemu teleinformatycznego, którym posługuje się Użytkownik.</li>
          <li>Z momentem akceptacji Regulaminu i założenia Konta dochodzi między Dostawcą a Użytkownikiem do zawarcia umowy świadczenia usług.</li>
          <li>Dostawca, z uwzględnieniem innych postanowień Regulaminu, nie ponosi odpowiedzialności za skutki korzystania przez Użytkownika z Platformy w sposób sprzeczny z Regulaminem.</li>
          <li>Częścią umowy są również Załączniki.</li>
        </ol>
      </section>

      {/* §3 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">§ 3 Rejestracja</h2>
        <ol className="list-decimal list-inside space-y-2 pl-2">
          <li>Rejestracja na Platformie jest dobrowolna i nieodpłatna. Świadczenie usług przez Dostawcę w ramach Platformy może być odpłatne na zasadach określonych w niniejszym Regulaminie. Użytkownik może nieodpłatnie korzystać z Platformy w sposób określony w Regulaminie.</li>
          <li>Warunkiem uzyskania statusu Użytkownika jest prawidłowe ukończenie procesu Rejestracji, w trakcie którego przyszły Użytkownik podaje dane osobowe wymagane w procesie Rejestracji Konta (imię, nazwisko, adres e-mail, hasło) oraz akceptuje treść Regulaminu i Polityki prywatności.</li>
          <li>Akceptując Regulamin Użytkownik oświadcza, że:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a. zapoznał się z Regulaminem, zrozumiał jego treść i ją akceptuje, a także zobowiązuje się do przestrzegania Regulaminu,</li>
              <li>b. posiada zdolność do zawarcia z Dostawcą wiążącej umowy;</li>
              <li>c. zobowiązuje się do podawania prawdziwych danych i informacji zgodnie ze stanem faktycznym i prawnym.</li>
            </ol>
          </li>
          <li>Z chwilą prawidłowego ukończeniu procesu Rejestracji następuje utworzenie Konta Użytkownika.</li>
          <li>Po Rejestracji Użytkownik otrzymuje na adres e-mail podany przy Rejestracji wiadomość zawierającą link weryfikacyjny. Aktywacja konta następuje po potwierdzeniu adresu e-mail.</li>
          <li>Użytkownikami Platformy mogą być zarówno osoby prawne, pełnoletnie osoby fizyczne oraz przedsiębiorcy na prawach konsumenta.</li>
        </ol>
      </section>

      {/* §4 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">§ 4 Obowiązki, prawa i oświadczenia Dostawcy</h2>
        <ol className="list-decimal list-inside space-y-2 pl-2">
          <li>Na warunkach określonych w Regulaminie Platforma zobowiązuje się do świadczenia Usług określonych w Regulaminie na rzecz Użytkownika przy zachowaniu należytej staranności.</li>
          <li>Dostawca umożliwia Użytkownikom za pomocą Platformy:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a) przeprowadzenie analizy profilu Użytkownika w celu wskazania jego najmocniejszych stron;</li>
              <li>b) zbadanie potrzeb, oczekiwań oraz problemów odbiorców treści tworzonych przez Użytkownika;</li>
              <li>c) uzyskanie propozycji tematów treści dostosowanych do specyfiki odbiorców oraz celów komunikacyjnych;</li>
              <li>d) stworzenie elektronicznej publikacji (e-booka) w sposób zautomatyzowany, w krótkim czasie, w tym bezpłatną dystrybucję za pomocą specjalnych stron zapisu;</li>
              <li>e) wygenerowanie i opublikowanie strony zapisu (landing page) dedykowanej dla stworzonego e-booka, wraz z możliwością zbierania danych kontaktowych osób pobierających treść;</li>
              <li>f) gromadzenie, przechowywanie i wykorzystywanie bazy kontaktów do prowadzenia bieżącej komunikacji z odbiorcami;</li>
              <li>g) zwiększanie zasięgów w mediach społecznościowych za pomocą automatycznych kampanii marketingowych, w tym kampanii typu „Skomentuj, a wyślę Ci…";</li>
              <li>h) integrację z zewnętrzną platformą buycoffee.to w celu umożliwienia monetyzacji działalności prowadzonej przez Użytkownika w Internecie.</li>
            </ol>
          </li>
          <li>Dostawca ma prawo:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a. udoskonalania Platformy w tym do jego upraszczania, rozszerzania, modyfikowania, a także zmiany jej funkcjonalności, w szczególności w celu dostosowania jej do obowiązujących przepisów prawa;</li>
              <li>b. prowadzenia testów nowych usług, procesów lub funkcjonalności na Platformie lub testów dotyczących zmian obecnych usług, procesów lub funkcjonalności na Platformie. Testy mogą mieć wpływ na korzystanie z Platformy przez Użytkowników i mogą być prowadzone wyłącznie przez czas i w zakresie niezbędnym i proporcjonalnym do osiągnięcia celu testu. Dostawca prowadzi testy w celu rozwoju Platformy, dostosowywania się do zmian rynkowych, dostosowania się do zmian w przepisach prawa lub ulepszania świadczonych usług;</li>
              <li>c. udostępniania aktualizacji i nowych wersji Platformy, z zastrzeżeniem, że aktualizacja może być konieczna w celu dalszego sprawnego i bezpiecznego korzystania z Platformy;</li>
              <li>d. wprowadzania przerwy działaniu Platformy na czas niezbędny do wykonania czynności administracyjnych konserwacyjnych, zabezpieczających, archiwizacyjnych lub aktualizacyjnych, ochrony danych i baz danych, a także do utrzymania infrastruktury technicznej wykorzystywanej do jej obsługi;</li>
              <li>e. czasowego zablokowania dostępu do Konta Użytkownika, w przypadkach przewidzianych w Regulaminie, w szczególności w celu wyjaśnienia wątpliwości związanych z prowadzeniem Konta przez Użytkownika, zgodnie z obowiązkami Dostawcy wynikającymi z art. 14 ustawy o świadczeniu usług drogą elektroniczną;</li>
              <li>f. usunięcia Konta Użytkownika na zasadach określonych w Regulaminie;</li>
              <li>g. do zarządzania Platformą i jej procesami oraz zmiany Platformy według własnego uznania;</li>
              <li>h. zmiany Regulaminu na warunkach określonych w § 14.</li>
            </ol>
          </li>
          <li>Dostawca nie ponosi odpowiedzialności za:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a. niezawinione przez siebie ingerencje w Konto Użytkownika, w szczególności na skutek siły wyższej, ataki hackerskie lub wejście w posiadanie danych do logowania przez osoby nieuprawnione niezwiązane z Dostawcą,</li>
              <li>b. problemy techniczne bądź ograniczenia techniczne w sprzęcie komputerowym, z którego korzysta Użytkownik, a które uniemożliwiają Użytkownikowi korzystanie z Usług,</li>
              <li>c. dane wejściowe wprowadzane do Platformy przez Użytkownika, co do których Użytkownik powinien posiadać wszelkie prawa, licencje i zezwolenia wymagane do przekazania danych wejściowych do Usług na Platformie,</li>
              <li>d. dane wyjściowe i treści, wygenerowane za pośrednictwem Platformy przez Użytkownika, na podstawie treści udostępnionych przez Użytkownika,</li>
              <li>e. roszczenia osób trzecich, w szczególności w zakresie praw autorskich co do danych wejściowych wprowadzanych do Platformy przez Użytkownika, jak i Danych wyjściowych z niej pobieranych.</li>
            </ol>
          </li>
          <li>Dostawca wyłącza uprawnienia Użytkownika nie będącego konsumentem wobec Dostawcy z tytułu rękojmi o których mowa w art. 556 i następnych Kodeksu Cywilnego.</li>
          <li>Spółka nie gwarantuje, że:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a. Platforma będzie spełniała oczekiwania i wymagania Użytkownika,</li>
              <li>b. dostęp do Platformy będzie dostępny nieprzerwanie, szybko i bez jakichkolwiek zakłóceń czy błędów.</li>
            </ol>
          </li>
        </ol>
      </section>

      {/* §5 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">§ 5 Prawa i Obowiązki Użytkownika</h2>
        <ol className="list-decimal list-inside space-y-2 pl-2">
          <li>Użytkownik ponosi pełną odpowiedzialność za swoje działania i zaniechania związane z korzystaniem z Platformy.</li>
          <li>Użytkownik oświadcza i gwarantuje, że:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a) posiada wszelkie prawa, licencje, zgody i zezwolenia niezbędne do przekazywania, zamieszczania i przetwarzania danych wejściowych w ramach Usług świadczonych przez Platformę;</li>
              <li>b) jest uprawniony do korzystania ze znaków towarowych, logotypów oraz innych oznaczeń, które umieszcza w Panelu Użytkownika lub w innych częściach Platformy;</li>
              <li>c) korzystanie przez Dostawcę z ww. danych i oznaczeń w zakresie wynikającym z funkcjonowania Platformy nie narusza praw osób trzecich.</li>
            </ol>
          </li>
          <li>Użytkownik ponosi pełną odpowiedzialność za wszelkie szkody poniesione przez Dostawcę w związku z naruszeniem praw osób trzecich, przepisów prawa lub postanowień Regulaminu w wyniku przekazania lub wykorzystania takich danych. W przypadku wystąpienia przez osobę trzecią z roszczeniem wobec Dostawcy, Użytkownik zobowiązuje się do podjęcia wszelkich działań zmierzających do ochrony Dostawcy przed takimi roszczeniami, w tym do przystąpienia do sporu po stronie Dostawcy, zwolnienia go z odpowiedzialności oraz pokrycia wszelkich związanych z tym kosztów, w tym kosztów zastępstwa procesowego.</li>
          <li>Użytkownik zobowiązuje się do:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a. korzystania z Platformy w sposób zgodny z Regulaminem, dobrymi obyczajami, prawem powszechnie obowiązującym, w szczególności prawem własności intelektualnej, RODO oraz obejmującym między innymi poszanowanie praw osób trzecich takich jak dobra osobiste. Użytkownik ponosi pełną odpowiedzialność za zapewnienie zgodności korzystania z Platformy z przepisami prawa obowiązującymi w jurysdykcji, której podlega, w tym za wszelkie skutki wynikające z naruszenia tych przepisów,</li>
              <li>b. podania prawdziwych, prawidłowych, dokładnych, kompletnych i nie wprowadzających w błąd danych osobowych, a jeżeli będzie to niezbędne również danych niezbędnych do wystawienia dokumentów księgowych tj. numer rachunku bankowego, numer NIP, adres, numer telefonu oraz nazwa firmy,</li>
              <li>c. dokonywania płatności zgodnie z wybranym Abonamentem,</li>
              <li>d. niedokonywania jakichkolwiek działań zagrażających bezpieczeństwu Platformy,</li>
              <li>e. zabezpieczenia hasła i adres e-mail do Platformy przed nieuprawnionym dostępem osób trzecich.</li>
            </ol>
          </li>
        </ol>
      </section>

      {/* §6 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">§ 6 Okres zawarcia umowy o świadczenie usług drogą elektroniczną</h2>
        <ol className="list-decimal list-inside space-y-2 pl-2">
          <li>Umowa zostaje zawarta na czas nieokreślony.</li>
          <li>Użytkownik może w każdym czasie rozwiązać umowę poprzez wejście w zakładkę Ustawienia, a następnie kliknięcie opcji „Usuń konto".</li>
          <li>Usunięcie Konta oznacza rozwiązanie umowy o świadczenie usług drogą elektroniczną.</li>
          <li>Dostawca może wypowiedzieć Użytkownikowi umowę ze skutkiem natychmiastowym z ważnych przyczyn, w szczególności w przypadku:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a. naruszania przez Użytkownika postanowień Regulaminu lub przepisów prawa,</li>
              <li>b. podejmowania przez Użytkownika działań, które zagrażają bezpieczeństwu Platformy;</li>
              <li>c. podejmowania przez Użytkownika prób nieuprawnionego dostępu do Platformy;</li>
              <li>d. popełnienia lub uzasadnionego podejrzenia popełnienia przez Użytkownika przestępstwa z wykorzystaniem Platformy;</li>
              <li>e. działania Użytkownika na szkodę Dostawcy,</li>
              <li>f. braku aktywności na Platformie przez okres powyżej 12 miesięcy.</li>
            </ol>
          </li>
          <li>Dostawca może wypowiedzieć Użytkownikowi umowę z zachowaniem 30-dniowego okresu wypowiedzenia z powodu:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a. podjęcia decyzji o zaprzestaniu świadczenia Usług;</li>
              <li>b. podania przez Użytkownika podczas Rejestracji nieprawdziwych danych;</li>
              <li>c. wydania wobec Dostawcy prawomocnej decyzji lub orzeczenia zakazującego prowadzenia działalności w zakresie Usług, chyba że ta decyzja lub orzeczenie przewiduje krótszy okres;</li>
              <li>d. wejścia w życie przepisów prawa, których skutkiem jest konieczność zaprzestania prowadzonej przez Dostawcę działalności w zakresie Usług lub istotnej zmiany warunków prowadzenia takiej działalności;</li>
              <li>e. wejścia w życie przepisów wprowadzających konieczność wypowiedzenia przez Dostawcę umowy.</li>
            </ol>
          </li>
          <li>W przypadku wypowiedzenia umowy przez Dostawcę, Użytkownik otrzyma powiadomienie o wypowiedzeniu za pośrednictwem adresu e-mail podanego przy Rejestracji.</li>
          <li>Usunięcie konta przez Użytkownika lub wypowiedzenie umowy przez Dostawcę powoduje automatyczne i bezpowrotne usunięcie wszystkich treści stworzonych przez Użytkownika.</li>
          <li>Po rozwiązaniu umowy Dostawca może przechowywać informacje o koncie Użytkownika w swojej bazie danych do celów realizacji zobowiązań prawnych, w tym dochodzenia należności, obrony przed roszczeniami i w innych przypadkach przewidzianych przez prawo.</li>
          <li>Działając na podstawie art. 38 § 1 ust 13 ustawy z dnia 30 maja 2014 r. o prawach konsumenta Dostawca informuje, że w związku z dostarczaniem treści cyfrowych Użytkownikowi będący osobą fizyczną oraz przedsiębiorcy na prawach konsumenta nie przysługuje prawo do odstąpienia od umowy na wykonanie Usługi.</li>
        </ol>
      </section>

      {/* §7 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">§ 7 Warunki i zasady korzystania z Platformy</h2>
        <ol className="list-decimal list-inside space-y-2 pl-2">
          <li>Użytkownik zobowiązuje się do niewykorzystywania Usług do tworzenia, odbierania, przekazywania ani w inny sposób przetwarzania chronionych informacji zdrowotnych podlegających ochronie zgodnie z przepisami amerykańskiej ustawy o przenośności i odpowiedzialności w ubezpieczeniach zdrowotnych (Health Insurance Portability and Accountability Act – HIPAA), w tym danych medycznych (Protected Health Information – PHI). Dostawca nie ponosi odpowiedzialności za naruszenia wynikające z nieuprawnionego wprowadzenia takich danych przez Użytkownika do Platformy.</li>
          <li>Dostęp Użytkownika do Platformy możliwy jest w następujących modelach:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a. bezpłatna wersja Konta na 21 dni kalendarzowych od dnia Rejestracji, umożliwiająca ograniczone możliwości korzystania z Platformy, m.in. poprzez przeglądanie leadów oraz tworzenie e-booków bez użycia AI,</li>
              <li>b. płatna wersja Konta (subskrypcja) umożliwia pełne korzystanie z funkcji Platformy, w zamian za zapłatę Abonamentu.</li>
            </ol>
          </li>
          <li>Brak dokonania płatności Abonamentu za kolejny okres, upoważnia Dostawcę do odmowy świadczenia Usługi płatnej oraz blokady części lub całości płatnych funkcjonalności Platformy do czasu dokonania zapłaty.</li>
          <li>Wszystkie treści (w tym e-booki) wygenerowane lub dostarczone przez Użytkownika są przechowywane w centralnej bazie danych Platformy.</li>
          <li>Do treści wygenerowanych przez Użytkownika dostęp ma wyłącznie ten Użytkownik, przy czym po opublikowaniu przez Użytkownika treści na stronie zapisu, strona ta staje się publiczna i dostępna dla każdego, kto posiada do niej link.</li>
          <li>Treści stworzone przez Użytkownika (w tym e-booki) mogą być pobrane przez inne osoby wyłącznie za pośrednictwem strony zapisu, po przekazaniu wymaganych danych.</li>
          <li>Platforma nie umożliwia współdzielenia treści między Użytkownikami, z wyjątkiem publicznych stron zapisu dostępnych poprzez udostępniony link.</li>
          <li>Dostawca nie jest odpowiedzialny wobec osób trzecich za szkodę powstałą w wyniku korzystania z Platformy przez Użytkownika. W przypadku wystąpienia przez osoby trzecie z roszczeniami wobec Dostawcy, Dostawca niezwłocznie poinformuje o tym fakcie Użytkownika. W przedmiotowym przypadku Użytkownik zobowiązuje się zwolnić Dostawcę od odpowiedzialności, zwrócić poniesione z tego tytułu koszty, w tym zapłacone przez Dostawcę kary oraz zaspokoić roszczenia osób trzecich w sposób przewidziany przepisami prawa.</li>
          <li>Platforma wykorzystuje zaawansowane narzędzia AI dostarczane przez zewnętrznych dostawców usług IT, których szczegółowy wykaz znajduje się w Polityce Prywatności.</li>
          <li>Użytkownik przyjmuje do wiadomości, że w ramach korzystania z Platformy generowane treści – w tym teksty, obrazy lub inne materiały – mogą być tworzone lub wspomagane przez technologie dostarczane przez podmioty trzecie, w szczególności przez zewnętrzne Systemy AI. Dostawca nie odpowiada za działanie, poprawność, dostępność ani treść wyników generowanych przez zintegrowane Systemy AI, w zakresie, w jakim nie ma wpływu na ich funkcjonowanie. Użytkownik zobowiązany jest do przestrzegania postanowień regulaminów, polityk i warunków świadczenia usług obowiązujących u dostawców zintegrowanych Systemów AI, a także do korzystania z Platformy w sposób zgodny z tymi regulacjami.</li>
          <li>Wszelkie treści, dane i informacje wygenerowane za pośrednictwem Platformy mają wyłącznie charakter ogólnoinformacyjny i nie stanowią porady, konsultacji ani rekomendacji – w szczególności o charakterze medycznym, prawnym, finansowym, diagnostycznym czy terapeutycznym. Dostawca nie ponosi odpowiedzialności za jakiekolwiek skutki ich wykorzystania przez Użytkownika lub podmiot, któremu Użytkownik udostępnił te treści.</li>
          <li>Zakazane jest wykorzystywanie Platformy lub Usług w sposób sprzeczny z prawem, postanowieniami Regulaminu, dobrymi obyczajami lub zasadami współżycia społecznego.</li>
          <li>W szczególności zabronione jest:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a. używanie jakiegokolwiek oprogramowania lub narzędzi informatycznych (w tym m.in. exploitów, botów, „pająków", skryptów, automatów, programów szpiegujących, narzędzi ekstrakcyjnych, trainerów lub innych programów), które wchodzą w interakcję z Platformą lub Usługami w sposób mogący zakłócać ich prawidłowe działanie, wpływać na bezpieczeństwo lub integralność danych, bądź powodować ponadprzeciętne obciążenie systemów informatycznych;</li>
              <li>b. wykorzystywanie botów lub innych narzędzi automatyzujących w celu generowania lub multiplikowania ruchu na Platformie, gromadzenia lub ekstrakcji danych, lub przeprowadzania jakichkolwiek cyberataków, w tym ataków typu DDoS;</li>
              <li>c. używanie jakichkolwiek plików, programów lub kodów zawierających lub mogących zawierać złośliwe oprogramowanie (w tym wirusy, konie trojańskie, robaki, oprogramowanie szpiegujące, „bomby czasowe" lub inne szkodliwe komponenty), które mogą uszkodzić, ograniczyć lub zakłócić działanie Platformy, infrastruktury technicznej lub urządzeń innych Użytkowników;</li>
              <li>d. podejmowanie działań mających na celu uzyskanie nieautoryzowanego dostępu do systemów informatycznych Platformy, Kont innych Użytkowników, danych lub zasobów Dostawcy (w tym działań o charakterze „hackingu");</li>
              <li>e. podejmowanie jakichkolwiek działań, które mogłyby ograniczyć dostępność Platformy lub utrudnić innym Użytkownikom korzystanie z niej;</li>
              <li>f. podejmowanie działań naruszających prawa osób trzecich, w tym prawa autorskie, prawa pokrewne, prawa własności przemysłowej, znaki towarowe, patenty, tajemnice przedsiębiorstwa, dobra osobiste lub prawo do prywatności;</li>
              <li>g. generowanie za pomocą Platformy treści sprzecznych z prawem, dobrymi obyczajami, naruszających prawa osób trzecich lub mogących obrażać uczucia i godność innych osób, w tym w szczególności treści: wulgarnych, obscenicznych, pornograficznych, rasistowskich, seksistowskich, ksenofobicznych, dyskryminujących, nawołujących do przemocy, nienawiści, nietolerancji, propagujących systemy totalitarne, organizacje przestępcze lub ich symbole, dezinformujących lub w inny sposób naruszających normy moralne i społeczne;</li>
              <li>h. podejmowanie jakichkolwiek działań na szkodę Dostawcy, w tym działań mających na celu zakłócenie funkcjonowania Platformy lub naruszenie jej bezpieczeństwa.</li>
            </ol>
          </li>
          <li>W przypadku naruszenia zasad korzystania z Platformy zawartych w niniejszym Regulaminie jak i innych dokumentach regulujących zasady Platformy, naruszenia prawa Dostawca jest uprawniony w szczególności do:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a. wysłania Użytkownikowi ostrzeżenia, na podany przez niego przy Rejestracji adres e-mail,</li>
              <li>b. zablokowania, zawieszenia lub ograniczenia Użytkownikowi dostępu do jednej lub wielu części Platformy lub do jednego lub wszystkich Kont tego Użytkownika na czas określony. W takim przypadku Dostawca powiadomi Użytkownika za pośrednictwem adresu e-mail podanego przy Rejestracji o przyczynach zawieszenia lub ograniczenia dostępu do Konta,</li>
              <li>c. usunięcia konta Użytkownika,</li>
              <li>d. odmowy świadczenia usług na rzecz Użytkownika w przyszłości,</li>
              <li>e. w przypadkach uzasadnionych – zawiadomienie odpowiednich organów ścigania.</li>
            </ol>
          </li>
          <li>Użytkownik może odwołać się od decyzji Dostawcy, o której mowa w ust 14 pkt a-d powyżej, w terminie 14 dni kalendarzowych od dokonania tej czynności.</li>
          <li>Po ustaniu przyczyny blokady, zawieszenia lub ograniczenia Użytkownikowi Dostawca może odblokować dostęp do Konta, lub w przypadku dalszego występowania naruszenia – w uzasadnionych wypadkach wypowiedzieć umowę i usunąć konto Użytkownika.</li>
          <li>Użytkownik, którego Konto zostało zawieszone lub na które zostały nałożone ograniczenia funkcjonalności, o których mowa powyżej, nie może zarówno zarejestrować nowego, jak i korzystać z innego Konta bez uprzedniej zgody Dostawcy.</li>
          <li>Użytkownik jest zobowiązany do zachowania w poufności swoich danych dostępowych do Konta, takich jak hasło i adres e-mail, oraz o nieudostępnianie ich osobom trzecim. Użytkownik powinien zastosować silne hasło i odpowiednie środki ostrożności, które pomogą chronić Konto przed nieuprawnionym dostępem. Dostawca nie ponosi odpowiedzialności za skutki utraty przez Użytkownika danych niezbędnych do korzystania z Platformy.</li>
        </ol>
      </section>

      {/* §8-§15 - kontynuacja */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">§ 8 Odbiorcy e-booków</h2>
        <ol className="list-decimal list-inside space-y-2 pl-2">
          <li>Administratorem danych osobowych Odbiorców e-booków jest Użytkownik, który udostępnia formularz zapisu i e-booka za pośrednictwem Platformy. Użytkownik ponosi pełną odpowiedzialność za ich prawidłowe przetwarzanie zgodnie z obowiązującymi przepisami prawa, w tym Rozporządzeniem RODO.</li>
          <li>Użytkownik ma możliwość zamieszczenia na swojej stronie zapisu klauzuli informacyjnej w zakresie przetwarzania przez siebie danych osobowych Odbiorców e-booków.</li>
          <li>Pobranie e-booka przez Odbiorcę e-booków wymaga podania danych osobowych w formularzu zapisu, w szczególności:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a) imienia,</li>
              <li>b) adresu e-mail,</li>
              <li>c) numeru telefonu (opcjonalnie).</li>
            </ol>
          </li>
          <li>Dane przekazane przez Odbiorcę e-booków za pośrednictwem formularza zapisu są odpowiednio zabezpieczone przy użyciu mechanizmów szyfrowania. Platforma stosuje adekwatne środki techniczne i organizacyjne mające na celu zapewnienie bezpieczeństwa danych osobowych, w szczególności ochrony przed ich nieuprawnionym dostępem, utratą, zmianą lub bezprawnym przetwarzaniem.</li>
          <li>W wyjątkowych sytuacjach – w szczególności w związku z koniecznością zapewnienia bezpieczeństwa systemów informatycznych, wsparcia technicznego, realizacji obowiązków prawnych lub reagowania na incydenty – Dostawca może uzyskać dostęp do danych osobowych Odbiorców e-booków w zakresie niezbędnym do wykonania tych czynności. Dostęp ten jest ograniczony czasowo i przedmiotowo, a dane nie są w żaden sposób wykorzystywane przez Dostawcę do własnych celów.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-lg font-bold text-white mb-2">§ 9 Płatności</h2>
        <ol className="list-decimal list-inside space-y-2 pl-2">
          <li>Dokonanie płatności następuje za pośrednictwem udostępnionych na Platformie systemów płatności zewnętrznych dostawców. Użytkownik, dokonując płatności, akceptuje Regulamin i warunki korzystania z usług zewnętrznych dostawców usług płatniczych.</li>
          <li>Faktury VAT za dokonane płatności są generowane i przesyłane Użytkownikowi na adres e-mail podany podczas Rejestracji lub dostępne w koncie użytkownika na Platformie.</li>
          <li>W przypadku braku płatności za kolejny okres rozliczeniowy:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a) Użytkownik zachowuje dostęp do Platformy w wersji darmowej,</li>
              <li>b) Użytkownik traci dostęp do funkcji generowania treści za pomocą systemów AI dostępnych na Platformie,</li>
              <li>c) Strony zapisu utworzone przez Użytkownika przechodzą w tryb szkicu, o ile nie są publiczne,</li>
              <li>d) Użytkownik zachowuje dostęp do wcześniej wygenerowanych na Platformie e-booków.</li>
            </ol>
          </li>
          <li>Użytkownik może w każdej chwili zrezygnować z wybranego Abonamentu za pośrednictwem ustawień swojego konta na Platformie. Rezygnacja z wybranego Abonamentu skutkuje brakiem naliczenia kolejnej płatności, przy czym dostęp do Usługi utrzymywany jest do końca opłaconego okresu rozliczeniowego.</li>
          <li>W przypadku niepowodzenia w realizacji płatności (np. z powodu braku środków na koncie lub błędu transakcji), system może ponowić próbę obciążenia konta zgodnie z polityką zewnętrznych systemów płatności. Brak skutecznej płatności może skutkować zawieszeniem lub ograniczeniem dostępu do funkcjonalności Platformy do czasu uregulowania należności.</li>
          <li>W relacjach z Użytkownikami, niebędącymi konsumentami w rozumieniu kodeksu cywilnego, Dostawca zastrzega sobie prawo do zmiany wysokości opłat określonych w umowie (w tym w Cenniku) na podstawie, których wyliczane są opłaty lub do wprowadzenia nowych opłat, w każdym momencie.</li>
          <li>Dostawca może zmienić wysokość opłat Abonamentu dla Użytkowników będących Konsumentem tylko z ważnych powodów, za który Strony uważają co najmniej jeden z poniższych powodów:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a. zmiana któregokolwiek wskaźnika cen towarów i usług konsumpcyjnych ogłaszanego przez Główny Urząd Statystyczny o co najmniej 1 punkt procentowy w stosunku do wskaźnika ogłoszonego przez Główny Urząd Statystyczny za analogiczny okres roku poprzedniego, jeżeli zmiana ta miała miejsce nie później niż 6 miesięcy przed zmianą przez Dostawcę wysokości danej opłaty. Podwyższenie opłaty na tej podstawie może nastąpić tylko raz w roku kalendarzowym,</li>
              <li>b. zmiana przeciętnego wynagrodzenia w sektorze przedsiębiorstw ogłaszanego przez Główny Urząd Statystyczny o co najmniej 1 punkt procentowy, jeżeli ta zmiana miała miejsce nie później niż 6 miesięcy przed zmianą przez Dostawcę wysokości danej opłaty lub progu. Podwyższenie opłaty lub progów procentowych na tej podstawie może nastąpić tylko raz w roku kalendarzowym,</li>
              <li>c. wprowadzenie nowych usług lub produktów, z tym że zmiana wysokości Abonamentu będzie dotyczyła jedynie tych nowych usług lub produktów, korzystanie z nich nie będzie dla Użytkownika obowiązkowe, a niekorzystanie nie będzie wiązało się dla Użytkownika z kosztami,</li>
              <li>d. zmiana zakresu świadczenia dotychczasowych Usług lub produktów, która powoduje zmianę kosztów świadczenia tych usług lub produktów o co najmniej 5%, z tym że zmiana wysokości opłaty lub progu procentowego będzie dotyczyła jedynie tych zmienionych usług lub produktów, a kierunek zmian wysokości opłat lub progu procentowego będzie zgodny z kierunkiem zmian kosztów, nie przekroczy jednokrotności tej zmiany i nastąpi nie później niż w ciągu 6 miesięcy od zmiany zakresu świadczenia dotychczasowych usług lub produktów.</li>
            </ol>
          </li>
          <li>O zmianie opłat w ramach Abonamentu Dostawca informuje każdego Użytkownika w wiadomości elektronicznej, wysłanej na adres e-mail podany przy Rejestracji, na co najmniej 14 dni przed wprowadzeniem planowanej zmiany.</li>
          <li>Zmienione opłaty obowiązują Użytkownika od daty określonej przez Dostawcę, nie wcześniej jednak niż od następnego okresu rozliczeniowego. W przypadku braku zgody Użytkownika na zmienione opłaty w ramach Abonamentu, Użytkownik może zrezygnować z odpłatnego korzystania z Usług, z konsekwencjami wymienionymi w ust. 4 powyżej. Brak rezygnacji z odpłatnego korzystania z Usług przed wskazanym terminem oznacza akceptację nowej wysokości opłat i kontynuację korzystania z Platformy na zmienionych warunkach.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-lg font-bold text-white mb-2">§ 10 Prawa własności intelektualnej</h2>
        <ol className="list-decimal list-inside space-y-2 pl-2">
          <li>Platforma oraz Usługi, w tym ich struktura, kod źródłowy, interfejs Użytkownika, oprogramowanie, grafika, znaki towarowe i logotypy Dostawcy oraz inne elementy dostępne na Platformie (nie na stronie zapisu) stanowią własność Dostawcy lub jego podwykonawców i są chronione prawem autorskim oraz innymi prawami własności intelektualnej.</li>
          <li>Użytkownik otrzymuje ograniczoną, niewyłączną, nieprzenoszalną i niepodlegającą sublicencjonowaniu licencję na dostęp do Platformy oraz korzystanie z Usług wyłącznie zgodnie z ich przeznaczeniem, w zakresie dozwolonym Regulaminem i wyłącznie na własny użytek osobisty lub zawodowy, z wyłączeniem celów komercyjnego rozpowszechniania Platformy.</li>
          <li>Zabronione jest: tłumaczenie, dekompilacja, inżynieria wsteczna lub inne próby uzyskania kodu źródłowego Platformy, modyfikowanie Platformy lub Usług, tworzenie utworów pochodnych na podstawie Platformy.</li>
          <li>Platforma umożliwia Użytkownikom generowanie treści (np. e-booków) przy pomocy narzędzi opartych na Systemach AI. Treści generowane z wykorzystaniem Systemów AI nie podlegają ochronie prawnoautorskiej. Dostawca nie rości sobie praw własności intelektualnej do takich treści.</li>
          <li>Z zastrzeżeniem postanowień Regulaminu oraz obowiązujących przepisów prawa, Użytkownik może wykorzystywać treści stworzone z udziałem Systemów AI wygenerowane za pomocą Platformy do własnych celów, w tym do dalszego opracowania, publikacji lub komercyjnego wykorzystania, o ile nie narusza to praw osób trzecich ani warunków licencji wykorzystywanych komponentów.</li>
          <li>Użytkownik ponosi pełną, wyłączną i nieograniczoną odpowiedzialność za wszelkie dane, informacje, treści lub materiały tj. dane wejściowe wprowadzone, przesłane lub w jakikolwiek inny sposób udostępnione Platformie lub Usługom AI.</li>
          <li>Użytkownik niniejszym zapewnia i oświadcza, że:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a. posiada pełny i nieograniczony tytuł prawny, w tym wszelkie niezbędne prawa własności intelektualnej (prawa autorskie, prawa pokrewne, prawa do znaków towarowych, etc.), do danych wejściowych, a także do ich wykorzystywania w ramach Usług AI w celu generowania Treści AI,</li>
              <li>b. wykorzystanie danych wejściowych w ramach Usług nie narusza w żaden sposób praw osób trzecich, w tym praw własności intelektualnej, tajemnic handlowych, praw do prywatności czy dóbr osobistych,</li>
              <li>c. dane wejściowe są zgodne z obowiązującymi przepisami prawa, w tym nie zawierają treści o charakterze bezprawnym, zniesławiającym, dyskryminującym, pornograficznym, ani naruszających zasady współżycia społecznego.</li>
            </ol>
          </li>
          <li>Użytkownik zobowiązuje się zwolnić Dostawcę z wszelkiej odpowiedzialności oraz pokryć wszelkie szkody, koszty (w tym koszty obsługi prawnej) i straty wynikające z wszelkich roszczeń lub działań osób trzecich, które zostały wszczęte przeciwko Dostawcy w związku z naruszeniem przez Użytkownika którejkolwiek z powyższych gwarancji dotyczących danych wejściowych.</li>
          <li>Użytkownikowi zabrania się usuwania, zmieniania, ukrywania, wyłączania lub obchodzenia praw autorskich, znaków towarowych, informacji o autorach, pochodzeniu, uwag lub etykiet, które są umieszczone na Platformie, w Usługach lub w kodzie Platformy.</li>
          <li>Użytkownik może korzystając z Usług wprowadzać do Platformy własne zdjęcia i inne treści stanowiące przedmiot ochrony prawa autorskiego, w szczególności znaki, logotypy, wizerunek. Z chwilą wprowadzenia tych treści Użytkownika do Platformy, Użytkownik, zezwala Dostawcy na nieodpłatne, niewyłączne, nieograniczone czasowo i terytorialnie licencji na korzystanie z tych treści w następującym zakresie:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a. utrwalania i zwielokrotniania utworu – wytwarzanie wszelkimi technikami, egzemplarzy utworu, w tym techniką drukarską, reprograficzną, zapisu magnetycznego oraz techniką cyfrową,</li>
              <li>b. rozpowszechniania za pośrednictwem sieci telekomunikacyjnych (w tym Internet i sieci GSM) w jakikolwiek sposób i przy użyciu jakiejkolwiek technologii, w szczególności poprzez: rozpowszechnianie w taki sposób, aby każdy mógł mieć dostęp do tych treści w miejscu i czasie przez siebie wybranym oraz inne sposoby eksploatacji w sieciach telekomunikacyjnych bez względu na możliwe do zastosowania sposoby ograniczania dostępu; publiczne wyświetlenie oraz odtworzenie, w tym również poprzez mechanizmy automatycznego odtwarzania Treści na stronach internetowych;</li>
              <li>c. łącznie z innymi utworami,</li>
              <li>d. publicznego wykonania, wystawiania, wyświetlania, odtwarzania oraz nadawania i reemisji,</li>
              <li>e. użyczania i wprowadzania do obrotu.</li>
            </ol>
          </li>
          <li>Użytkownik zezwala Dostawcy na wykonywanie praw zależnych i tworzenie opracowań utworów opartych na treściach Użytkownika.</li>
          <li>Użytkownikowi nie wolno omijać systemu zabezpieczeń ani w jakikolwiek sposób ingerować w Usługi lub Platformę ani także podejmować prób wprowadzania jakichkolwiek zmian w Oprogramowaniu lub jakichkolwiek funkcjach lub składnikach Usługi lub Platformy.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-lg font-bold text-white mb-2">§ 11 Reklamacje</h2>
        <ol className="list-decimal list-inside space-y-2 pl-2">
          <li>Użytkownik może złożyć reklamację, jeżeli Usługa przewidziana w niniejszym Regulaminie nie jest realizowana przez Dostawcę lub jest realizowana nienależycie, wbrew postanowieniom Regulaminu. Użytkownik może złożyć również reklamację z tytułu nieprawidłowego naliczenia opłat Użytkownika bezpośrednio Dostawcy.</li>
          <li>Jakiekolwiek reklamacje oraz zastrzeżenia związane z funkcjonowaniem Platformy, należy kierować w formie:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a. pisemnej na adres: ul. Romana 20A, 93-370 Łódź,</li>
              <li>b. w formie elektronicznej na adres: <a href="mailto:contact@inflee.app" className="text-purple-400 hover:text-purple-300">contact@inflee.app</a>.</li>
            </ol>
          </li>
          <li>Reklamacja powinna zawierać opis problemu będącego podstawą złożenia reklamacji oraz uzasadnienie.</li>
          <li>Reklamacja związana z brakiem zapłaty następującej za pośrednictwem operatora płatności elektronicznych winna zawierać dane Użytkownika, jego adres elektroniczny, informacje o dacie i godzinie dokonania płatności a także metodzie i rodzaju tej płatności.</li>
          <li>Odpowiedź w sprawie reklamacji wysyłana jest na adres e-mailowy Użytkownika podany przy Rejestracji.</li>
          <li>Reklamacje będą rozpatrywane niezwłocznie, według kolejności wpływania, jednak nie później niż w terminie 14 dni od ich otrzymania.</li>
          <li>W przypadku gdy reklamacja nie zawiera informacji koniecznych do jej rozpatrzenia, Dostawca zwróci się do Użytkownika składającego reklamację o jej uzupełnienie w niezbędnym zakresie, a termin 14 dni biegnie wówczas od dnia doręczenia uzupełnionej reklamacji.</li>
          <li>Użytkownik będący osobą fizyczną ma prawo do skorzystania z pozasądowych sposobów rozstrzygania sporów, m.in. poprzez:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a. zwrócenie się do Stałego Polubownego Sądu Konsumenckiego z wnioskiem o rozstrzygnięcie sporu wynikłego z zawartej umowy,</li>
              <li>b. skorzystanie z pomocy Powiatowego (miejskiego) Rzecznika Praw Konsumenta lub organizacji społecznej, do której statutowych zadań należy ochrona konsumentów,</li>
              <li>c. skorzystanie z innych sposobów rozpatrywania reklamacji i dochodzenia roszczeń – informacje dostępne na stronie <a href="https://www.uokik.gov.pl" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">www.uokik.gov.pl</a>.</li>
            </ol>
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-lg font-bold text-white mb-2">§ 12 Informacje o szczególnych zagrożeniach związanych z korzystaniem z usług świadczonych drogą elektroniczną</h2>
        <ol className="list-decimal list-inside space-y-2 pl-2">
          <li>Dostawca informuje, że korzystanie z usług świadczonych drogą elektroniczną może wiązać się z potencjalnymi zagrożeniami. Do podstawowych zagrożeń należą m.in.:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a. spam – otrzymanie niezamówionej informacji handlowej w drodze elektronicznej;</li>
              <li>b. złośliwe oprogramowanie (ang. Malware) – różnego rodzaju aplikacje lub skrypty mające szkodliwe, przestępcze lub złośliwe działanie w stosunku do systemu teleinformatycznego użytkownika sieci, takie jak wirusy, robaki, trojany;</li>
              <li>c. programy szpiegujące (ang. Spyware) – programy śledzące działania Użytkownika, które gromadzą informacje o użytkowniku i wysyłają je – zazwyczaj bez jego wiedzy i zgody – autorowi programu;</li>
              <li>d. wyłudzanie poufnych informacji osobistych, np. haseł (ang. Phishing);</li>
              <li>e. niedozwolony podsłuch (ang. Sniffing) – wykorzystanie programu komputerowego, którego zadaniem jest przechwytywanie i ewentualne analizowanie danych przepływających w sieci;</li>
              <li>f. włamania do systemu teleinformatycznego użytkownika z użyciem narzędzi hakerskich;</li>
              <li>g. czynności kryptoanalizy tj. odnalezienie słabości systemu kryptograficznego i umożliwienie jego obejścia lub złamania.</li>
            </ol>
          </li>
          <li>Dostawca podejmuje niezbędne działania mające na celu minimalizację ryzyka wystąpienia zagrożeń wskazanych w ust. 1 powyżej, a także podnoszące bezpieczeństwo korzystania z Platformy.</li>
          <li>Niezależnie od działań podejmowanych przez Dostawcę wskazanych w ust. 2 powyżej, Użytkownik, aby znacząco ograniczyć ryzyko wystąpienia zagrożeń wskazanych w ust. 1 powyżej, powinien posiadać silne hasło do Platformy oraz zaopatrzyć swój komputer i inne urządzenia elektroniczne, które wykorzystuje podłączając się do Internetu, w program antywirusowy i zaporę sieciową (firewall), a także stale je aktualizować.</li>
          <li>W przypadku wykrycia jakichkolwiek nadużyć, błędów lub nieprawidłowości w działaniu Platformy lub dostępnych na niej narzędzi zewnętrznych Użytkownik ma możliwość ich zgłoszenia do weryfikacji Dostawcy poprzez funkcjonalności Platformy.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-lg font-bold text-white mb-2">§ 13 Dane osobowe</h2>
        <ol className="list-decimal list-inside space-y-2 pl-2">
          <li>AQUATREK SOLUTIONS PROSTA SPÓŁKA AKCYJNA z siedzibą w Łodzi, ul. Romana 20A, 93-370 Łódź, zarejestrowana w rejestrze przedsiębiorców KRS przez Sąd Rejonowy dla Łodzi Śródmieścia w Łodzi, XX Wydział Gospodarczy KRS pod numerem 0001044483, NIP: 7292750466, REGON: 525692626, o kapitale akcyjnym w wysokości 10.000,00 zł jest administratorem danych osobowych Użytkowników. Szczegółowe informacje na temat przetwarzania danych osobowych znajdziesz w dokumencie Polityka Prywatności.</li>
          <li>Podanie danych rejestracyjnych jest dobrowolne, aczkolwiek niezbędne do prawidłowej Rejestracji i założenia Konta.</li>
          <li>Użytkownik ma obowiązek podawania prawdziwych danych tam, gdzie są one wymagane oraz aktualizowania danych podanych w formularzu rejestracyjnym niezwłocznie po każdej zmianie tych danych.</li>
          <li>W przypadku gdy Użytkownik za pośrednictwem Platformy udostępnia osobom fizycznym treści wytworzone za pomocą Platformy, w tym e-booki, pomiędzy Platformą a Użytkownikiem zawierana jest umowa powierzenia przetwarzania, która stanowi Załącznik nr 3 do niniejszego Regulaminu.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-lg font-bold text-white mb-2">§ 14 Zmiany regulaminu</h2>
        <ol className="list-decimal list-inside space-y-2 pl-2">
          <li>Dostawca zastrzega sobie prawo do zmiany niniejszego Regulaminu z ważnych przyczyn, w szczególności tj.:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a. zmiana warunków technicznych świadczenia usług drogą elektroniczną przez Usługodawcę, w tym wprowadzenie nowych usług, rozbudowa lub zmiana funkcjonalności Platformy,</li>
              <li>b. zmiana warunków lub procesu zawierania umowy o świadczenie usług drogą elektroniczną przez Dostawcę,</li>
              <li>c. zmiana przepisów powszechnie obowiązującego prawa mającego wpływ na treść Regulaminu lub ze względu na uznanie postanowienia Regulaminu za niedozwolone – odpowiednio w tym zakresie,</li>
              <li>d. poprawa obsługi Użytkowników, w tym przeciwdziałanie nadużyciom oraz ochrona prywatności Użytkowników,</li>
              <li>e. względy bezpieczeństwa,</li>
              <li>f. zmiany technologiczne i funkcjonalne,</li>
              <li>g. potrzeba usunięcia z treści Regulaminu ewentualnych błędów, omyłek pisarskich lub niejasności,</li>
              <li>h. zmiany Cennika,</li>
              <li>i. zmiany w Polityce prywatności,</li>
              <li>j. zmiana danych Dostawcy, w szczególności nazw, numerów identyfikacyjnych, adresów elektronicznych, zamieszczonych linków lub danych teleadresowych wskazanych w Regulaminie,</li>
              <li>k. w celu realizacji obowiązku wynikającego z prawomocnego orzeczenia sądu lub decyzji organów administracji,</li>
              <li>l. jeżeli zmiana jest konieczna z uwagi na zmianę w sposobie świadczenia Usług.</li>
            </ol>
          </li>
          <li>O każdej zmianie Regulaminu Dostawca powiadomi Użytkownika poprzez wysłanie wiadomości na adres e-mail podany przy Rejestracji lub też innymi środkami komunikacji przewidzianymi w Platformie. Dostawca poinformuje Użytkownika o prawie do rozwiązania przez Użytkownika umowy w terminie 14 dni, przy zachowaniu procedury rozwiązania umowy wskazanej w Regulaminie. Zmiany Regulaminu wchodzą w życie z upływem terminu do rozwiązania umowy. Niezaakceptowanie przez Użytkownika nowego Regulaminu jest jednoznaczne z rezygnacją Użytkownika z Usług i rozwiązaniem umowy, co wiąże się z usunięciem konta w Platformie.</li>
          <li>Regulamin obowiązuje od dnia 01.03.2026 r.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-lg font-bold text-white mb-2">§ 15 Postanowienia końcowe</h2>
        <ol className="list-decimal list-inside space-y-2 pl-2">
          <li>Użytkownik ponosi wyłączną odpowiedzialność za korzystanie z Platformy i Usług zgodne z przepisami prawa obowiązującymi na terytorium jego miejsca zamieszkania, siedziby, miejsca prowadzenia działalności lub miejsca, w którym faktycznie korzysta z Usług.</li>
          <li>Niniejszy Regulamin oraz wszelkie stosunki prawne wynikające lub związane z korzystaniem z Platformy i Usług podlegają i będą interpretowane zgodnie z prawem Rzeczypospolitej Polskiej.</li>
          <li>Wszelkie spory pomiędzy Dostawcą i Użytkownikiem niebędącym konsumentem, dotyczące Spółki, w tym związane z usługami świadczonymi przez Dostawcę w ramach Platformy będą rozstrzygane przez polskie sądy powszechne właściwe według siedziby Dostawcy.</li>
          <li>W przypadku Użytkowników będących konsumentami, powyższy wybór prawa nie wyłącza ochrony przyznanej Użytkownikom na podstawie bezwzględnie obowiązujących przepisów prawa państwa, w którym Użytkownik ma miejsce zwykłego pobytu.</li>
          <li>Jeżeli którekolwiek postanowienie Regulaminu zostanie uznane prawomocnym orzeczeniem sądu za nieważne, pozostałe postanowienia pozostają w mocy, chyba że właściwe przepisy prawa przewidują inny skutek.</li>
          <li>Regulamin jest sporządzony w dwóch wersjach językowych, tj. w języku polskim oraz języku angielskim, przy czym w razie sporu lub rozbieżności rozstrzygające znaczenie ma wersja w języku polskim.</li>
          <li>Integralną częścią Regulaminu są Załączniki a mianowicie:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a. Załącznik nr 1 – Cennik</li>
              <li>b. Załącznik nr 2 – Polityka prywatności</li>
              <li>c. Załącznik nr 3 – Umowa powierzenia przetwarzania</li>
            </ol>
          </li>
        </ol>
      </section>
    </div>
  );
}

/* ══════════════════════════════════════════════
   TERMS OF SERVICE — ENGLISH (full translation 1:1)
   ══════════════════════════════════════════════ */
function TermsContentEN() {
  return (
    <div className="text-slate-300 space-y-6 text-sm leading-relaxed max-h-[65vh] overflow-y-auto pr-2">
      <h3 className="text-base font-bold text-white text-center uppercase tracking-wide">Terms of Service of the Inflee.app Platform</h3>
      <p className="text-xs text-slate-500 text-center">dated March 1, 2026</p>
      <p className="text-xs text-slate-400 italic text-center">In case of any dispute or discrepancy, the Polish version shall prevail.</p>

      <div className="space-y-3">
        <p>These Terms of Service of the Platform define the use of the internet platform: Inflee.app located at the addresses inflee.app and app.inflee.app and the online services available or made available through the Platform.</p>
        <p>The conditions of the Terms of Service of the Platform apply to the use of the Services and apply to all Users visiting the Platform, as well as to Recipients of e-books created by Users and published on the Platform.</p>
        <p>By registering an account, you declare that:</p>
        <ol className="list-decimal list-inside pl-2 space-y-1">
          <li>you have read, understood and agree to comply with the Terms of Service;</li>
          <li>you have the capacity to enter into a binding agreement with us;</li>
        </ol>
        <p>If you do not agree to the Terms of Service, you may not use the Platform and our Services.</p>
      </div>

      {/* §1 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">§ 1 Definitions</h2>
        <ol className="list-decimal list-inside space-y-3 pl-2">
          <li><strong className="text-slate-200">Subscription</strong> – a fee payable to the Provider for access to the Platform&apos;s services, paid in advance by the User in the form of:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a) a recurring subscription carried out via an external payment system, or</li>
              <li>b) a one-time payment for a selected period, using available payment methods.</li>
            </ol>
            <p className="mt-1">The amount of the Subscription depends on the variant selected by the User as specified in the Price List.</p>
          </li>
          <li><strong className="text-slate-200">Price List</strong> – a document specifying the amounts of fees charged by the Provider from the User for Services provided under the Agreement. The Price List is available to Users on the Platform.</li>
          <li><strong className="text-slate-200">Provider</strong> – AQUATREK SOLUTIONS PROSTA SPÓŁKA AKCYJNA with its registered office in Łódź, ul. Romana 20A, 93-370 Łódź, registered in the register of entrepreneurs of the National Court Register by the District Court for Łódź-Śródmieście in Łódź, 20th Commercial Division of the National Court Register under number 0001044483, NIP (Tax ID): 7292750466, REGON: 525692626, with a share capital of PLN 10,000.00.</li>
          <li><strong className="text-slate-200">Consumer</strong> – a natural person referred to in Art. 22¹ of the Civil Code, or an entrepreneur who is a natural person concluding an agreement directly related to their business activity, if the content of the agreement indicates that it does not have a professional character for them.</li>
          <li><strong className="text-slate-200">Account or User Account</strong> – an individual administrative panel assigned to the User within the Platform, enabling the use of its functionalities, identifiable by an e-mail address and password, and maintained in accordance with the provisions of these Terms of Service.</li>
          <li><strong className="text-slate-200">E-book Recipient</strong> – an entity that, through a sign-up page created by the User, provides their personal data in order to gain access to an e-book made available by that User. The E-book Recipient is not a User of the Platform within the meaning of the Terms of Service and is not required to have an account on the Platform.</li>
          <li><strong className="text-slate-200">Platform</strong> – an internet service available at the addresses inflee.app and app.inflee.app enabling Users to use the functionalities of the Platform, including those based on artificial intelligence.</li>
          <li><strong className="text-slate-200">Registration</strong> – the procedure for creating an Account on the Platform by the User.</li>
          <li><strong className="text-slate-200">Terms of Service</strong> – these terms of providing services by electronic means within the Platform located at the addresses inflee.app and app.inflee.app.</li>
          <li><strong className="text-slate-200">Regulation or GDPR</strong> – Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation) (OJ EU L 119, 4.5.2016, p. 1, as amended).</li>
          <li><strong className="text-slate-200">AI System</strong> – a machine-based system designed to operate with varying levels of autonomy after its deployment, which may exhibit adaptability after deployment, and which – for explicit or implicit purposes – infers how to generate, based on received input data, outputs such as predictions, content, recommendations or decisions that may affect physical or virtual environments.</li>
          <li><strong className="text-slate-200">Provision of services by electronic means</strong> – the performance of a service provided without the simultaneous presence of the parties (at a distance), by means of data transmission at the individual request of the service recipient, sent and received by means of electronic processing devices, including digital compression, and data storage, which is entirely transmitted, received or relayed via a telecommunications network within the meaning of the Act of 12 July 2024 – Electronic Communications Law (Journal of Laws, item 1221, as amended).</li>
          <li><strong className="text-slate-200">Service</strong> – services provided by the Provider via the Platform, in accordance with the functionalities made available within it and based on the provisions of these Terms of Service.</li>
          <li><strong className="text-slate-200">User</strong> – a user using the Platform within the scope of access obtained to the Service offered through the Platform.</li>
        </ol>
      </section>

      {/* §2 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">§ 2 General Provisions</h2>
        <ol className="list-decimal list-inside space-y-2 pl-2">
          <li>The Terms of Service define:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a. the types, conditions and scope of Services provided by electronic means via the Platform,</li>
              <li>b. the rights and obligations of the Provider and Users,</li>
              <li>c. the conditions and rules for using the Platform,</li>
              <li>d. the conditions for concluding and terminating agreements for the provision of services by electronic means,</li>
              <li>e. the scope of use of intellectual property rights.</li>
            </ol>
          </li>
          <li>In matters not regulated by the Terms of Service regarding the provision of services by electronic means, in particular the submission of declarations of will in electronic form, the provisions of the Civil Code and other generally applicable legal provisions shall apply.</li>
          <li>The User is obliged to familiarize themselves with the content of the Terms of Service before commencing use of the Platform.</li>
          <li>The Terms of Service are made available to the User free of charge via the Platform before concluding the agreement by electronic means in a manner that enables obtaining, reproducing and recording its content using the IT system used by the User.</li>
          <li>Upon acceptance of the Terms of Service and creation of an Account, an agreement for the provision of services is concluded between the Provider and the User.</li>
          <li>The Provider, taking into account other provisions of the Terms of Service, shall not be liable for the consequences of the User using the Platform in a manner inconsistent with the Terms of Service.</li>
          <li>The Appendices also form part of the agreement.</li>
        </ol>
      </section>

      {/* §3 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">§ 3 Registration</h2>
        <ol className="list-decimal list-inside space-y-2 pl-2">
          <li>Registration on the Platform is voluntary and free of charge. The provision of services by the Provider within the Platform may be subject to a fee on the terms specified in these Terms of Service. The User may use the Platform free of charge in the manner specified in the Terms of Service.</li>
          <li>The condition for obtaining User status is the correct completion of the Registration process, during which the prospective User provides the personal data required in the Account Registration process (first name, last name, e-mail address, password) and accepts the content of the Terms of Service and the Privacy Policy.</li>
          <li>By accepting the Terms of Service, the User declares that:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a. they have read, understood and accept the Terms of Service, and also undertake to comply with the Terms of Service,</li>
              <li>b. they have the capacity to enter into a binding agreement with the Provider;</li>
              <li>c. they undertake to provide truthful data and information in accordance with the actual and legal state of affairs.</li>
            </ol>
          </li>
          <li>Upon correct completion of the Registration process, the User Account is created.</li>
          <li>After Registration, the User receives a message containing a verification link at the e-mail address provided during Registration. Account activation occurs after confirmation of the e-mail address.</li>
          <li>Users of the Platform may be legal entities, adult natural persons and entrepreneurs with consumer rights.</li>
        </ol>
      </section>

      {/* §4 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">§ 4 Obligations, Rights and Representations of the Provider</h2>
        <ol className="list-decimal list-inside space-y-2 pl-2">
          <li>On the terms specified in the Terms of Service, the Platform undertakes to provide the Services specified in the Terms of Service for the User with due diligence.</li>
          <li>The Provider enables Users through the Platform to:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a) conduct an analysis of the User&apos;s profile in order to identify their greatest strengths;</li>
              <li>b) examine the needs, expectations and problems of the audience of content created by the User;</li>
              <li>c) obtain suggestions for content topics tailored to the specifics of the audience and communication goals;</li>
              <li>d) create an electronic publication (e-book) in an automated manner, in a short time, including free distribution via special sign-up pages;</li>
              <li>e) generate and publish a sign-up page (landing page) dedicated to the created e-book, along with the ability to collect contact data of persons downloading the content;</li>
              <li>f) collect, store and use a contact database for conducting ongoing communication with recipients;</li>
              <li>g) increase reach on social media through automated marketing campaigns, including campaigns of the &quot;Comment and I&apos;ll send you...&quot; type;</li>
              <li>h) integrate with the external platform buycoffee.to to enable monetization of activities conducted by the User on the Internet.</li>
            </ol>
          </li>
          <li>The Provider has the right to:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a. improve the Platform, including simplifying, expanding, modifying, and changing its functionalities, in particular to adapt it to applicable legal provisions;</li>
              <li>b. conduct tests of new services, processes or functionalities on the Platform, or tests concerning changes to existing services, processes or functionalities on the Platform. Tests may affect the use of the Platform by Users and may be conducted only for the time and to the extent necessary and proportionate to achieve the purpose of the test. The Provider conducts tests for the purpose of developing the Platform, adapting to market changes, adapting to changes in legal regulations, or improving the services provided;</li>
              <li>c. make updates and new versions of the Platform available, provided that an update may be necessary for continued efficient and secure use of the Platform;</li>
              <li>d. introduce interruptions in the operation of the Platform for the time necessary to perform administrative, maintenance, security, archiving or update activities, data and database protection, as well as to maintain the technical infrastructure used for its operation;</li>
              <li>e. temporarily block access to the User&apos;s Account in cases provided for in the Terms of Service, in particular to clarify doubts related to the operation of the Account by the User, in accordance with the Provider&apos;s obligations arising from Art. 14 of the Act on Provision of Services by Electronic Means;</li>
              <li>f. delete a User Account on the terms specified in the Terms of Service;</li>
              <li>g. manage the Platform and its processes and change the Platform at its own discretion;</li>
              <li>h. amend the Terms of Service on the conditions specified in § 14.</li>
            </ol>
          </li>
          <li>The Provider shall not be liable for:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a. interference with the User Account not caused by the Provider, in particular as a result of force majeure, hacker attacks or obtaining login data by unauthorized persons unrelated to the Provider,</li>
              <li>b. technical problems or technical limitations in the computer equipment used by the User that prevent the User from using the Services,</li>
              <li>c. input data entered into the Platform by the User, for which the User should possess all rights, licenses and permits required to submit input data to the Services on the Platform,</li>
              <li>d. output data and content generated through the Platform by the User, based on content provided by the User,</li>
              <li>e. claims of third parties, in particular regarding copyrights to input data entered into the Platform by the User, as well as output data downloaded from it.</li>
            </ol>
          </li>
          <li>The Provider excludes the rights of Users who are not consumers against the Provider under the warranty provisions referred to in Art. 556 et seq. of the Civil Code.</li>
          <li>The Company does not guarantee that:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a. the Platform will meet the User&apos;s expectations and requirements,</li>
              <li>b. access to the Platform will be available continuously, quickly and without any interruptions or errors.</li>
            </ol>
          </li>
        </ol>
      </section>

      {/* §5 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">§ 5 Rights and Obligations of the User</h2>
        <ol className="list-decimal list-inside space-y-2 pl-2">
          <li>The User bears full responsibility for their actions and omissions related to the use of the Platform.</li>
          <li>The User represents and warrants that:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a) they possess all rights, licenses, consents and permits necessary for transferring, posting and processing input data within the Services provided by the Platform;</li>
              <li>b) they are authorized to use the trademarks, logos and other designations that they place in the User Panel or in other parts of the Platform;</li>
              <li>c) the Provider&apos;s use of the aforementioned data and designations within the scope resulting from the functioning of the Platform does not infringe the rights of third parties.</li>
            </ol>
          </li>
          <li>The User bears full responsibility for any damages incurred by the Provider in connection with the infringement of the rights of third parties, legal provisions or the provisions of the Terms of Service as a result of transferring or using such data. In the event of a third party bringing a claim against the Provider, the User undertakes to take all actions aimed at protecting the Provider from such claims, including joining the dispute on the Provider&apos;s side, releasing the Provider from liability and covering all related costs, including the costs of legal representation.</li>
          <li>The User undertakes to:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a. use the Platform in a manner consistent with the Terms of Service, good practices, generally applicable law, in particular intellectual property law, GDPR, and including, among others, respect for the rights of third parties such as personal rights. The User bears full responsibility for ensuring that the use of the Platform complies with the legal provisions applicable in the jurisdiction to which they are subject, including for any consequences arising from the violation of such provisions,</li>
              <li>b. provide truthful, correct, accurate, complete and non-misleading personal data, and if necessary, also data required for the issuance of accounting documents, i.e. bank account number, NIP (Tax ID) number, address, telephone number and company name,</li>
              <li>c. make payments in accordance with the selected Subscription,</li>
              <li>d. refrain from any actions that threaten the security of the Platform,</li>
              <li>e. secure the password and e-mail address for the Platform against unauthorized access by third parties.</li>
            </ol>
          </li>
        </ol>
      </section>

      {/* §6 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">§ 6 Duration of the Agreement for the Provision of Services by Electronic Means</h2>
        <ol className="list-decimal list-inside space-y-2 pl-2">
          <li>The agreement is concluded for an indefinite period.</li>
          <li>The User may terminate the agreement at any time by going to the Settings tab and then clicking the &quot;Delete account&quot; option.</li>
          <li>Deletion of the Account means termination of the agreement for the provision of services by electronic means.</li>
          <li>The Provider may terminate the agreement with the User with immediate effect for important reasons, in particular in the case of:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a. violation by the User of the provisions of the Terms of Service or legal provisions,</li>
              <li>b. actions taken by the User that threaten the security of the Platform;</li>
              <li>c. attempts by the User to gain unauthorized access to the Platform;</li>
              <li>d. the commission or reasonable suspicion of the commission by the User of a crime using the Platform;</li>
              <li>e. actions by the User to the detriment of the Provider,</li>
              <li>f. lack of activity on the Platform for a period exceeding 12 months.</li>
            </ol>
          </li>
          <li>The Provider may terminate the agreement with the User with a 30-day notice period due to:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a. a decision to cease providing Services;</li>
              <li>b. provision by the User of false data during Registration;</li>
              <li>c. issuance of a final decision or ruling against the Provider prohibiting the conduct of business in the scope of Services, unless that decision or ruling provides for a shorter period;</li>
              <li>d. entry into force of legal provisions the effect of which is the necessity to cease the Provider&apos;s activities in the scope of Services or to significantly change the conditions of conducting such activities;</li>
              <li>e. entry into force of regulations introducing the necessity for the Provider to terminate the agreement.</li>
            </ol>
          </li>
          <li>In the event of termination of the agreement by the Provider, the User will receive a notification of termination via the e-mail address provided during Registration.</li>
          <li>Deletion of the account by the User or termination of the agreement by the Provider results in automatic and irreversible deletion of all content created by the User.</li>
          <li>After termination of the agreement, the Provider may store information about the User&apos;s account in its database for the purpose of fulfilling legal obligations, including debt collection, defense against claims and in other cases provided for by law.</li>
          <li>Acting on the basis of Art. 38 § 1 point 13 of the Act of 30 May 2014 on Consumer Rights, the Provider informs that in connection with the provision of digital content, Users who are natural persons and entrepreneurs with consumer rights are not entitled to withdraw from the agreement for the performance of the Service.</li>
        </ol>
      </section>

      {/* §7 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">§ 7 Conditions and Rules for Using the Platform</h2>
        <ol className="list-decimal list-inside space-y-2 pl-2">
          <li>The User undertakes not to use the Services to create, receive, transmit or otherwise process protected health information subject to protection under the provisions of the U.S. Health Insurance Portability and Accountability Act (HIPAA), including Protected Health Information (PHI). The Provider shall not be liable for violations resulting from the unauthorized entry of such data by the User into the Platform.</li>
          <li>User access to the Platform is available in the following models:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a. a free version of the Account for 21 calendar days from the date of Registration, enabling limited use of the Platform, including browsing leads and creating e-books without the use of AI,</li>
              <li>b. a paid version of the Account (subscription) enables full use of the Platform&apos;s features, in exchange for payment of the Subscription.</li>
            </ol>
          </li>
          <li>Failure to make the Subscription payment for the next period entitles the Provider to refuse to provide the paid Service and to block part or all of the paid functionalities of the Platform until payment is made.</li>
          <li>All content (including e-books) generated or provided by the User is stored in the Platform&apos;s central database.</li>
          <li>Only the User has access to the content generated by the User, provided that after the User publishes content on a sign-up page, that page becomes public and accessible to anyone who has a link to it.</li>
          <li>Content created by the User (including e-books) may be downloaded by other persons exclusively via the sign-up page, after providing the required data.</li>
          <li>The Platform does not allow sharing of content between Users, except for public sign-up pages accessible through a shared link.</li>
          <li>The Provider shall not be liable to third parties for damage resulting from the User&apos;s use of the Platform. In the event of third parties bringing claims against the Provider, the Provider shall promptly inform the User of this fact. In such a case, the User undertakes to release the Provider from liability, reimburse costs incurred in this regard, including penalties paid by the Provider, and satisfy the claims of third parties in the manner provided for by legal provisions.</li>
          <li>The Platform uses advanced AI tools provided by external IT service providers, the detailed list of which can be found in the Privacy Policy.</li>
          <li>The User acknowledges that in the course of using the Platform, generated content – including texts, images or other materials – may be created or assisted by technologies provided by third parties, in particular by external AI Systems. The Provider shall not be liable for the operation, correctness, availability or content of results generated by integrated AI Systems, to the extent that it has no influence on their functioning. The User is obliged to comply with the terms, policies and conditions of service applicable to the providers of integrated AI Systems, as well as to use the Platform in a manner consistent with those regulations.</li>
          <li>All content, data and information generated through the Platform is of a general informational nature only and does not constitute advice, consultation or recommendation – in particular of a medical, legal, financial, diagnostic or therapeutic nature. The Provider shall not be liable for any consequences of their use by the User or an entity to whom the User has made such content available.</li>
          <li>It is prohibited to use the Platform or Services in a manner contrary to law, the provisions of the Terms of Service, good practices or principles of social coexistence.</li>
          <li>In particular, the following are prohibited:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a. using any software or IT tools (including, among others, exploits, bots, &quot;spiders&quot;, scripts, automata, spyware, extraction tools, trainers or other programs) that interact with the Platform or Services in a manner that may disrupt their proper functioning, affect the security or integrity of data, or cause excessive load on IT systems;</li>
              <li>b. using bots or other automation tools to generate or multiply traffic on the Platform, collect or extract data, or carry out any cyberattacks, including DDoS attacks;</li>
              <li>c. using any files, programs or codes containing or potentially containing malicious software (including viruses, Trojans, worms, spyware, &quot;time bombs&quot; or other harmful components) that may damage, limit or disrupt the operation of the Platform, technical infrastructure or devices of other Users;</li>
              <li>d. taking actions aimed at obtaining unauthorized access to the Platform&apos;s IT systems, Accounts of other Users, data or resources of the Provider (including &quot;hacking&quot; activities);</li>
              <li>e. taking any actions that could limit the availability of the Platform or hinder other Users from using it;</li>
              <li>f. taking actions that infringe the rights of third parties, including copyrights, related rights, industrial property rights, trademarks, patents, trade secrets, personal rights or the right to privacy;</li>
              <li>g. generating content through the Platform that is contrary to law, good practices, that infringes the rights of third parties or that may offend the feelings and dignity of other persons, including in particular content that is: vulgar, obscene, pornographic, racist, sexist, xenophobic, discriminatory, inciting violence, hatred, intolerance, propagating totalitarian systems, criminal organizations or their symbols, disinforming or otherwise violating moral and social norms;</li>
              <li>h. taking any actions to the detriment of the Provider, including actions aimed at disrupting the functioning of the Platform or violating its security.</li>
            </ol>
          </li>
          <li>In the event of violation of the rules for using the Platform contained in these Terms of Service as well as other documents governing the rules of the Platform, or violation of law, the Provider is entitled in particular to:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a. send a warning to the User at the e-mail address provided during Registration,</li>
              <li>b. block, suspend or restrict the User&apos;s access to one or more parts of the Platform or to one or all of that User&apos;s Accounts for a specified period. In such a case, the Provider shall notify the User via the e-mail address provided during Registration of the reasons for the suspension or restriction of access to the Account,</li>
              <li>c. delete the User&apos;s account,</li>
              <li>d. refuse to provide services to the User in the future,</li>
              <li>e. in justified cases – notify the appropriate law enforcement authorities.</li>
            </ol>
          </li>
          <li>The User may appeal the Provider&apos;s decision referred to in section 14 points a-d above within 14 calendar days from the date of that action.</li>
          <li>After the cause of the block, suspension or restriction has ceased, the Provider may unblock access to the Account, or in the case of a continuing violation – in justified cases terminate the agreement and delete the User&apos;s account.</li>
          <li>A User whose Account has been suspended or on which functionality restrictions have been imposed as referred to above may not register a new Account or use another Account without the prior consent of the Provider.</li>
          <li>The User is obliged to keep their Account access data, such as password and e-mail address, confidential and not to disclose them to third parties. The User should use a strong password and appropriate precautionary measures to help protect the Account against unauthorized access. The Provider shall not be liable for the consequences of the User losing the data necessary to use the Platform.</li>
        </ol>
      </section>

      {/* §8 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">§ 8 E-book Recipients</h2>
        <ol className="list-decimal list-inside space-y-2 pl-2">
          <li>The controller of the personal data of E-book Recipients is the User who makes the sign-up form and e-book available through the Platform. The User bears full responsibility for their correct processing in accordance with applicable legal provisions, including the GDPR Regulation.</li>
          <li>The User has the option of placing an information clause on their sign-up page regarding the processing of E-book Recipients&apos; personal data.</li>
          <li>Downloading an e-book by an E-book Recipient requires providing personal data in the sign-up form, in particular:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a) first name,</li>
              <li>b) e-mail address,</li>
              <li>c) telephone number (optional).</li>
            </ol>
          </li>
          <li>Data provided by the E-book Recipient via the sign-up form is appropriately secured using encryption mechanisms. The Platform applies adequate technical and organizational measures aimed at ensuring the security of personal data, in particular protection against unauthorized access, loss, alteration or unlawful processing.</li>
          <li>In exceptional situations – in particular in connection with the need to ensure the security of IT systems, technical support, fulfillment of legal obligations or incident response – the Provider may gain access to the personal data of E-book Recipients to the extent necessary to perform these activities. This access is limited in time and scope, and the data is not used by the Provider for its own purposes in any way.</li>
        </ol>
      </section>

      {/* §9 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">§ 9 Payments</h2>
        <ol className="list-decimal list-inside space-y-2 pl-2">
          <li>Payment is made through external payment systems made available on the Platform. By making a payment, the User accepts the Terms of Service and conditions of use of the services of external payment service providers.</li>
          <li>VAT invoices for payments made are generated and sent to the User at the e-mail address provided during Registration or are available in the User&apos;s account on the Platform.</li>
          <li>In the event of non-payment for the next billing period:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a) the User retains access to the Platform in its free version,</li>
              <li>b) the User loses access to AI content generation features available on the Platform,</li>
              <li>c) sign-up pages created by the User switch to draft mode, unless they are public,</li>
              <li>d) the User retains access to e-books previously generated on the Platform.</li>
            </ol>
          </li>
          <li>The User may cancel the selected Subscription at any time through the settings of their account on the Platform. Cancellation of the selected Subscription results in no further payments being charged, while access to the Service is maintained until the end of the paid billing period.</li>
          <li>In the event of a payment failure (e.g. due to insufficient funds or a transaction error), the system may retry charging the account in accordance with the policies of external payment systems. A failure of effective payment may result in the suspension or restriction of access to the Platform&apos;s functionalities until the outstanding amount is settled.</li>
          <li>In relations with Users who are not consumers within the meaning of the Civil Code, the Provider reserves the right to change the amount of fees specified in the agreement (including in the Price List) on the basis of which fees are calculated or to introduce new fees at any time.</li>
          <li>The Provider may change the amount of Subscription fees for Users who are Consumers only for important reasons, which the Parties consider to be at least one of the following reasons:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a. a change in any consumer goods and services price index published by the Central Statistical Office by at least 1 percentage point compared to the index published by the Central Statistical Office for the same period of the previous year, if such change occurred no later than 6 months before the Provider changed the amount of the given fee. An increase in the fee on this basis may occur only once per calendar year,</li>
              <li>b. a change in the average remuneration in the enterprise sector published by the Central Statistical Office by at least 1 percentage point, if such change occurred no later than 6 months before the Provider changed the amount of the given fee or threshold. An increase in fees or percentage thresholds on this basis may occur only once per calendar year,</li>
              <li>c. introduction of new services or products, provided that the change in the amount of the Subscription will apply only to those new services or products, their use will not be mandatory for the User, and non-use will not entail costs for the User,</li>
              <li>d. a change in the scope of provision of existing Services or products that causes a change in the costs of providing those services or products by at least 5%, provided that the change in the amount of the fee or percentage threshold will apply only to those changed services or products, and the direction of changes in the amount of fees or percentage threshold will be consistent with the direction of cost changes, will not exceed the magnitude of that change, and will occur no later than within 6 months from the change in the scope of provision of existing services or products.</li>
            </ol>
          </li>
          <li>The Provider shall inform each User of a change in Subscription fees by electronic message sent to the e-mail address provided during Registration at least 14 days before the introduction of the planned change.</li>
          <li>Changed fees shall apply to the User from the date specified by the Provider, but not earlier than from the next billing period. In the event that the User does not agree to the changed Subscription fees, the User may resign from paid use of the Services, with the consequences listed in section 4 above. Failure to resign from paid use of the Services before the indicated deadline means acceptance of the new fee amounts and continuation of use of the Platform on the changed terms.</li>
        </ol>
      </section>

      {/* §10 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">§ 10 Intellectual Property Rights</h2>
        <ol className="list-decimal list-inside space-y-2 pl-2">
          <li>The Platform and Services, including their structure, source code, User interface, software, graphics, trademarks and logos of the Provider and other elements available on the Platform (not on the sign-up page) are the property of the Provider or its subcontractors and are protected by copyright and other intellectual property rights.</li>
          <li>The User receives a limited, non-exclusive, non-transferable and non-sublicensable license to access the Platform and use the Services solely in accordance with their intended purpose, within the scope permitted by the Terms of Service, and exclusively for personal or professional use, excluding the purposes of commercial distribution of the Platform.</li>
          <li>The following are prohibited: translation, decompilation, reverse engineering or other attempts to obtain the source code of the Platform, modifying the Platform or Services, creating derivative works based on the Platform.</li>
          <li>The Platform enables Users to generate content (e.g. e-books) using tools based on AI Systems. Content generated using AI Systems is not subject to copyright protection. The Provider does not claim intellectual property rights to such content.</li>
          <li>Subject to the provisions of the Terms of Service and applicable legal provisions, the User may use content created with the participation of AI Systems generated through the Platform for their own purposes, including for further development, publication or commercial use, provided that this does not infringe the rights of third parties or the license terms of the components used.</li>
          <li>The User bears full, sole and unlimited responsibility for all data, information, content or materials, i.e. input data entered, sent or in any other way made available to the Platform or AI Services.</li>
          <li>The User hereby represents and warrants that:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a. they possess full and unrestricted legal title, including all necessary intellectual property rights (copyrights, related rights, trademark rights, etc.), to the input data, as well as to their use within AI Services for the purpose of generating AI Content,</li>
              <li>b. the use of input data within the Services does not in any way infringe the rights of third parties, including intellectual property rights, trade secrets, privacy rights or personal rights,</li>
              <li>c. the input data complies with applicable legal provisions, including that it does not contain content of an unlawful, defamatory, discriminatory, pornographic nature, or content that violates the principles of social coexistence.</li>
            </ol>
          </li>
          <li>The User undertakes to release the Provider from all liability and to cover all damages, costs (including legal service costs) and losses arising from any claims or actions of third parties that have been brought against the Provider in connection with the User&apos;s breach of any of the above warranties regarding input data.</li>
          <li>The User is prohibited from removing, altering, hiding, disabling or circumventing copyrights, trademarks, author information, origin information, notices or labels that are placed on the Platform, in the Services or in the Platform&apos;s code.</li>
          <li>The User, when using the Services, may enter into the Platform their own photos and other content constituting the subject of copyright protection, in particular signs, logos, likeness. Upon entering such User content into the Platform, the User grants the Provider a free, non-exclusive, unlimited in time and territory license to use such content in the following scope:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a. recording and reproducing the work – producing copies of the work by all techniques, including printing, reprographic, magnetic recording and digital techniques,</li>
              <li>b. distribution via telecommunications networks (including the Internet and GSM networks) in any manner and using any technology, in particular by: making available in such a way that everyone can access the content at a place and time of their choosing, and other methods of exploitation in telecommunications networks regardless of possible methods of restricting access; public display and playback, including through mechanisms for automatic playback of Content on websites;</li>
              <li>c. in combination with other works,</li>
              <li>d. public performance, exhibition, display, playback and broadcasting and rebroadcasting,</li>
              <li>e. lending and placing on the market.</li>
            </ol>
          </li>
          <li>The User grants the Provider permission to exercise derivative rights and create adaptations of works based on the User&apos;s content.</li>
          <li>The User is not permitted to circumvent the security system or in any way interfere with the Services or the Platform or to attempt to make any changes to the Software or any features or components of the Service or the Platform.</li>
        </ol>
      </section>

      {/* §11 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">§ 11 Complaints</h2>
        <ol className="list-decimal list-inside space-y-2 pl-2">
          <li>The User may file a complaint if the Service provided for in these Terms of Service is not being performed by the Provider or is being performed improperly, contrary to the provisions of the Terms of Service. The User may also file a complaint regarding incorrect calculation of the User&apos;s fees directly to the Provider.</li>
          <li>Any complaints and objections related to the functioning of the Platform should be submitted in the form of:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a. a written letter to the address: ul. Romana 20A, 93-370 Łódź,</li>
              <li>b. electronically to the address: <a href="mailto:contact@inflee.app" className="text-purple-400 hover:text-purple-300">contact@inflee.app</a>.</li>
            </ol>
          </li>
          <li>A complaint should contain a description of the problem constituting the basis for the complaint and a justification.</li>
          <li>A complaint related to a failed payment made through an electronic payment operator should contain the User&apos;s data, their electronic address, information about the date and time of the payment, as well as the method and type of that payment.</li>
          <li>A response to a complaint is sent to the User&apos;s e-mail address provided during Registration.</li>
          <li>Complaints will be processed promptly, in the order of receipt, but no later than within 14 days from their receipt.</li>
          <li>In the event that a complaint does not contain information necessary for its processing, the Provider will request the User filing the complaint to supplement it to the necessary extent, and the 14-day period will then run from the date of receipt of the supplemented complaint.</li>
          <li>Users who are natural persons have the right to use out-of-court dispute resolution methods, including:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a. applying to the Permanent Consumer Arbitration Court with a request to resolve a dispute arising from the concluded agreement,</li>
              <li>b. using the assistance of the County (Municipal) Consumer Rights Ombudsman or a social organization whose statutory tasks include consumer protection,</li>
              <li>c. using other methods of complaint resolution and pursuing claims – information is available at the website <a href="https://www.uokik.gov.pl" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">www.uokik.gov.pl</a>.</li>
            </ol>
          </li>
        </ol>
      </section>

      {/* §12 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">§ 12 Information on Special Risks Associated with the Use of Services Provided by Electronic Means</h2>
        <ol className="list-decimal list-inside space-y-2 pl-2">
          <li>The Provider informs that the use of services provided by electronic means may involve potential risks. The main risks include, among others:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a. spam – receipt of unsolicited commercial information by electronic means;</li>
              <li>b. malicious software (Malware) – various types of applications or scripts with harmful, criminal or malicious effects on the network user&apos;s IT system, such as viruses, worms, Trojans;</li>
              <li>c. spyware – programs tracking the User&apos;s activities that collect information about the user and send it – usually without their knowledge and consent – to the program&apos;s author;</li>
              <li>d. phishing – obtaining confidential personal information, e.g. passwords;</li>
              <li>e. unauthorized eavesdropping (Sniffing) – the use of a computer program whose task is to intercept and possibly analyze data flowing through the network;</li>
              <li>f. break-ins into the user&apos;s IT system using hacking tools;</li>
              <li>g. cryptanalysis activities, i.e. finding weaknesses in a cryptographic system and enabling its circumvention or breach.</li>
            </ol>
          </li>
          <li>The Provider takes necessary actions aimed at minimizing the risk of the threats indicated in section 1 above, as well as improving the security of using the Platform.</li>
          <li>Regardless of the actions taken by the Provider indicated in section 2 above, the User, in order to significantly reduce the risk of the threats indicated in section 1 above, should have a strong password for the Platform and equip their computer and other electronic devices used to connect to the Internet with antivirus software and a firewall, and regularly update them.</li>
          <li>In the event of detecting any abuses, errors or irregularities in the operation of the Platform or external tools available on it, the User has the option of reporting them for verification by the Provider through the Platform&apos;s functionalities.</li>
        </ol>
      </section>

      {/* §13 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">§ 13 Personal Data</h2>
        <ol className="list-decimal list-inside space-y-2 pl-2">
          <li>AQUATREK SOLUTIONS PROSTA SPÓŁKA AKCYJNA with its registered office in Łódź, ul. Romana 20A, 93-370 Łódź, registered in the register of entrepreneurs of the National Court Register by the District Court for Łódź-Śródmieście in Łódź, 20th Commercial Division of the National Court Register under number 0001044483, NIP: 7292750466, REGON: 525692626, with a share capital of PLN 10,000.00, is the controller of Users&apos; personal data. Detailed information on the processing of personal data can be found in the Privacy Policy document.</li>
          <li>Provision of registration data is voluntary, but necessary for proper Registration and creation of an Account.</li>
          <li>The User is obliged to provide truthful data where it is required and to update the data provided in the registration form immediately after each change of such data.</li>
          <li>In the event that the User, through the Platform, makes content produced using the Platform, including e-books, available to natural persons, a data processing agreement is concluded between the Platform and the User, which constitutes Appendix No. 3 to these Terms of Service.</li>
        </ol>
      </section>

      {/* §14 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">§ 14 Amendments to the Terms of Service</h2>
        <ol className="list-decimal list-inside space-y-2 pl-2">
          <li>The Provider reserves the right to amend these Terms of Service for important reasons, in particular:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a. change in the technical conditions for the provision of services by electronic means by the Provider, including the introduction of new services, expansion or change of the Platform&apos;s functionalities,</li>
              <li>b. change in the conditions or process of concluding an agreement for the provision of services by electronic means by the Provider,</li>
              <li>c. change in generally applicable legal provisions affecting the content of the Terms of Service or due to the recognition of a provision of the Terms of Service as prohibited – respectively in that scope,</li>
              <li>d. improvement of User service, including counteracting abuses and protecting User privacy,</li>
              <li>e. security considerations,</li>
              <li>f. technological and functional changes,</li>
              <li>g. the need to remove from the content of the Terms of Service any errors, typographical mistakes or ambiguities,</li>
              <li>h. changes to the Price List,</li>
              <li>i. changes to the Privacy Policy,</li>
              <li>j. change of the Provider&apos;s data, in particular names, identification numbers, electronic addresses, links posted or contact details indicated in the Terms of Service,</li>
              <li>k. for the purpose of fulfilling an obligation arising from a final court ruling or a decision of administrative authorities,</li>
              <li>l. if the change is necessary due to a change in the manner of providing the Services.</li>
            </ol>
          </li>
          <li>The Provider shall notify the User of each amendment to the Terms of Service by sending a message to the e-mail address provided during Registration or by other means of communication provided for in the Platform. The Provider shall inform the User of the right to terminate the agreement within 14 days, while maintaining the agreement termination procedure indicated in the Terms of Service. Amendments to the Terms of Service shall enter into force upon expiry of the deadline for terminating the agreement. Non-acceptance of the new Terms of Service by the User shall be equivalent to the User&apos;s resignation from the Services and termination of the agreement, which entails the deletion of the account on the Platform.</li>
          <li>The Terms of Service shall be effective from March 1, 2026.</li>
        </ol>
      </section>

      {/* §15 */}
      <section>
        <h2 className="text-lg font-bold text-white mb-2">§ 15 Final Provisions</h2>
        <ol className="list-decimal list-inside space-y-2 pl-2">
          <li>The User bears sole responsibility for the use of the Platform and Services in compliance with the legal provisions applicable in the territory of their place of residence, registered office, place of business or place where they actually use the Services.</li>
          <li>These Terms of Service and all legal relationships arising from or related to the use of the Platform and Services shall be governed by and interpreted in accordance with the law of the Republic of Poland.</li>
          <li>Any disputes between the Provider and a User who is not a consumer, concerning the Company, including those related to services provided by the Provider within the Platform, shall be resolved by Polish common courts having jurisdiction over the Provider&apos;s registered office.</li>
          <li>In the case of Users who are consumers, the above choice of law does not exclude the protection granted to Users on the basis of mandatory provisions of the law of the state in which the User has their habitual residence.</li>
          <li>If any provision of the Terms of Service is declared invalid by a final court ruling, the remaining provisions shall remain in force, unless the applicable legal provisions provide for a different effect.</li>
          <li>The Terms of Service are drawn up in two language versions, i.e. in Polish and English, and in the event of a dispute or discrepancy, the Polish language version shall prevail.</li>
          <li>The following Appendices form an integral part of the Terms of Service:
            <ol className="list-none pl-4 mt-1 space-y-1">
              <li>a. Appendix No. 1 – Price List</li>
              <li>b. Appendix No. 2 – Privacy Policy</li>
              <li>c. Appendix No. 3 – Data Processing Agreement</li>
            </ol>
          </li>
        </ol>
      </section>
    </div>
  );
}

/* ══════════════════════════════════════════════
   GŁÓWNY KOMPONENT
   ══════════════════════════════════════════════ */
export default function TermsClient() {
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
                {isEn ? 'Terms of Service' : 'Regulamin'}
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
                {isEn ? 'of inflee.app' : 'platformy inflee.app'}
              </span>
            </h1>
          </motion.div>

          <motion.div variants={heroItemVariants}>
            <p className="text-slate-400 text-sm mt-4 leading-relaxed max-w-md">
              {isEn
                ? 'Please read these Terms carefully before using the Platform. By registering, you agree to be bound by these Terms.'
                : 'Prosimy o zapoznanie się z Regulaminem przed korzystaniem z Platformy. Rejestrując się, akceptujesz poniższe warunki.'}
            </p>
          </motion.div>

          <motion.div variants={heroItemVariants}>
            <div className="mt-6 flex items-center gap-3 text-xs text-slate-500">
              <span>{isEn ? 'Effective: March 1, 2026' : 'Obowiązuje od: 01.03.2026'}</span>
              <span className="text-slate-700">|</span>
              <span>{isEn ? '15 sections' : '15 paragrafów'}</span>
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
            {isEn ? <TermsContentEN /> : <TermsContentPL />}
          </div>
        </motion.div>
      </div>
    </>
  );
}