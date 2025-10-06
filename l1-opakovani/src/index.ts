import promptSync from 'prompt-sync';

const prompt = promptSync();


// ULOHA O1: 
// Napiste program, ktery
// - se zepta uzivatele postupne na 3 cisla; kazde cislo uzivatel potvrdi odeslanim ENTER
// - program vypise:
// 1. Soucet vsech zadanych cisel
// 2. Soucin vsech zadanych cisel
// 3. Aritmeticky prumer vsech zadanych cisel
// 4. Rozdil mezi nejvetsim a nejmensim zadanym cislem
// 5. Pro kazde zadane cislo vetsi nez 100 vypise program hvezdicku. 
// -  BONUS: hvezdicky vypise nakonec a na jeden radek, ne po kazdem cisle zvlast.
// Program potom uzavrete do funkce "cislaO1"


// ULOHA O2:
// Napiste program, ktery
// - se zepta uzivatele na 3 texty; kazdy text uzivatel potvrdi odeslanim ENTER
// - program vypise:
// 1. Zadane texty v OPACNEM poradi, nez jak byly zadany, vsechny na jeden radek
// 2. Souhrnnou delku vsech textu, ktere uzivatel zadal. Bonus: nezapocitavejte pripadne uvodni, nebo koncove mezery v zadanych textech.
// 3. Celkovy pocet PISMEN (zakladni US abecedy) je v zadanych textech, a celkovy pocet SAMOHLASEK.
// 4. Urci, kolik PROCENT samohlasek je v zadanych textech. Mezery vubec nepocitame.
// 5. Vypise nejvetsi text v LEXIKOGRAFICKEM usporadani.
// Program potom uzavrete do funkce "textyO2"

// ULOHA O3:
// Zadani je totozne, jako u ulohy O1, ALE
// - program se nepta na 3 cisla, ale nechava uzivatele zapisovat cisla, kazde potvrdi ENTERem
// - zadavani cisel se ukonci zadanim cisla 0, nebo zaporneho cisla
// - BONUS: pri zadani neciselneho udaje se vypise zprava o chybnem vstupu a vyzva k opetovnemu zadani cisla
// - PO zadani vsech cisel (tzn. po zadani 0 nebo zaporneho cisla) program vypocita a vypise vsechny udaje O1-1 .. O1-5.
// Pro reseni teto ulohy NEPOUZIVEJTE pole.
// Program potom uzavrete do funkce "cislaO3"

// ULOHA O4:
// Zadani je totozne, jako u ulohy O2, ALE
// - program se nepta na 3 texty, ale nechava uzivatele zapisovat texty, kazdy potvrdi ENTERem
// - zadavani se ukonci zadanim PRAZDNEHO textu
// PO zadani vsech textu program vypocita a vypise vsechny udaje O2-1 .. O2-5
// Pro reseni teto ulohy NEPOUZIVEJTE pole.
// Program potom uzavrete do funkce "cislaO4"

// ULOHA O5 - bonusova:
// V predchozich ulohach se MOHLY vyskytnout opakujici se kusy kodu. Pokuste se tato opakovani nahradit funkcemi, a v puvodnich
// mistech tyto funkce jen vyvolat. Teziste ukolu je najit duplikovana mista, vymyslet, jake bude funkce dostavat parametry, a jaky
// bude vydavat vysledek (a samozrejme spravne napsat implementaci)
