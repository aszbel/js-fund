W jaki sposób używać skryptów JS'a? 
- poprzez import zewnętrznego pliku z kodem źródłowym 
- poprzez użycie tagu script w dokumencie html

Trudniejsze/bardziej skomplikowane skrypty są umieszczane w zewnętrznych plikach 
Resztę można umieszczać bezpośrednio w HTML
Jednym z benefitów wykorzystywania skryptów w plikach zewnętrznych jest to, że przeglądarka pobiera a następnie zapisuje go w cache 
Inne podstrony, które wykorzystują ten sam skrypt, będzie korzystał z niego za pomocą cache (bez ponownego pobierania go). To znacznie przyspiesza działanie strony

'use strict' - > specjalna dyrektywa umieszczona na górze skryptu, która sprawia, że kod JS działa w oparciu o nowe standardy ecmascript.


deklarowanie zmiennych var, let oraz const: 
let dla zwykłych zmiennych, const dla stałych 
var to starszy sposób deklarowania zmiennych.

There are 8 basic data types in JavaScript.

Seven primitive data types:
number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
bigint for integer numbers of arbitrary length.
string for strings. A string may have zero or more characters, there’s no separate single-character type.
boolean for true/false.
null for unknown values – a standalone type that has a single value null.
undefined for unassigned values – a standalone type that has a single value undefined.
symbol for unique identifiers.
And one non-primitive data type:
object for more complex data structures.
The typeof operator allows us to see which type is stored in a variable.

Usually used as typeof x, but typeof(x) is also possible.
Returns a string with the name of the type, like "string".
For null returns "object" – this is an error in the language, it’s not actually an object.

modale: 
- alert -> wyświetla napis i oczekuje na interakcje użytkownika w postaci kliknięcia 'ok' 
- prompt -> przyjmuje dwa argumenty - treść oraz drugi opcjonalny w przypadku gdy użytkownik nic nie wprowadzi
- confirm -> modal z zapytaniem który umożliwia kliknięcie OK lub cancel 

konwersja typów 

String conversion 
- alert z góry konwertuje wartość na string 
- String(value) funkcja konwertująca 

Numeric conversion 
- w przypadku działan matematycznych np "6" / "2" -> z góry zostaje nałożona konwersja na typ numeryczny = 6 
- Number(value) funkcja konwertująca
- użycie przedrostka + przed wartością np. let x = '55' => x = +x; => konwersja na numeric

Value	Becomes…
undefined	NaN
null	0
true and false	1 and 0
string	Whitespaces (includes spaces, tabs \t, newlines \n etc.) from the start and end are removed. If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.

Boolean conversion 
- działa automatycznie; każdy element posiadający jakąś wartośc będzie true - w przeciwnym razie false 
- Boolean(value) funkcja konwertująca


Terms: “unary”, “binary”, “operand”

Operand -> to do czego jest przypisany operator np. 5 * 2 (operandy to 5 oraz 2). Często nazywane argumentami 
unary -> jeżeli operator jest przypisany do jednego operanda np. x = -5; 
binary -> jeżeli operator składa się z dwóch operandów (5 * 2)


Comparision -> "2" > "12" → true
Bo to string
\
Any string except an empty one (and "0" is not empty) becomes true

nullish coalescing ?? 
result = (a !== null && a !== undefined) ? a : b; => let result = a ?? b;