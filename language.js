(function () {
  var STORAGE_KEY = "torabrura-language";
  var EN = {
    "תורה ברורה": "Torah Brura",
    "מה חדש": "What's New",
    "גלריה": "Gallery",
    "מהנעשה בשטח": "In the Field",
    "אירועים": "Events",
    "שיעורים": "Classes",
    "ספרים": "Books",
    "להיות שותף": "Partner With Us",
    "חזרה לעמוד הראשי": "Back to Home",
    "חזרה לבחירת תרומה": "Back to Donation Selection",
    "בואו להיות שותפים בתורת ארץ ישראל": "Join Us in the Torah of the Land of Israel",
    "יחד מחזקים לומדי תורה, כוללים, שיעורים והפצת ספרים בארץ ישראל.": "Together we strengthen Torah learners, kollelim, classes, and the publication of sacred books in the Land of Israel.",
    "הישיבה": "The Vision",
    "עמוד ראשוני שמציג את הדרך, החזון והפעילות, וממנו ממשיכים לעמוד השותפות.": "A home page presenting the path, vision, and activity, leading onward to the partnership page.",
    "החזון": "Vision",
    "החזון שלנו: בונים את קומת העתיד של עם ישראל בארצו": "Our Vision: Building the Future of the People of Israel in Their Land",
    "עמותת \"תורה ברורה\" פועלת מתוך אמונה עמוקה, כי עתידו ופריחתו של עם ישראל שזורים בחיבור הנצחי שבין תורה, התיישבות ועלייה.": "The Torah Brura organization acts from a deep belief that the future and flourishing of the People of Israel are bound to the eternal connection between Torah, settlement, and aliyah.",
    "אנו שואפים להצמיח מנהיגות רוחנית יוצרת דרך רשת הכוללים של \"תורה ברורה\" - עולם תורני שלם, הנובע מתוך תפיסת עולם ומחבר בין עומקה של התורה לצרכי הדור וחיי המעשה. מתוך כוחה של תורה זו, אנו יוצאים אל השטח כדי לבנות ולהרחיב את גבולות ארצנו בהקמת יישובים חדשים ותוססים. בעת ובעונה אחת, אנו מושיטים יד חמה ומלווה לאחינו ואחיותינו בתפוצות, ומסייעים להם בעלייתם הביתה, אל ארץ ישראל.": "We seek to grow creative spiritual leadership through Torah Brura's network of kollelim: a complete Torah world rooted in a worldview that connects the depth of Torah with the needs of the generation and practical life. From the strength of this Torah, we go out into the field to build and expand the borders of our land through new and vibrant communities. At the same time, we extend a warm and guiding hand to our brothers and sisters in the Diaspora and help them come home to the Land of Israel.",
    "יחד, אנו מגשימים את החזון הציוני-תורני, ומחברים תורה חלוציות וקיבוץ גלויות לבניין עם ישראל בארץ ישראל.": "Together, we fulfill the Torah-Zionist vision and connect Torah, pioneering spirit, and the ingathering of exiles to build the People of Israel in the Land of Israel.",
    "היסודות": "Foundations",
    "תורה ברורה - עולם של כוללים": "Torah Brura: A World of Kollelim",
    "התורה היא המנוע הרוחני והמצפן הערכי של העמותה. אנו מקימים ומתפעלים רשת של כוללים, המייצרת עולם תורני שלם ומעמיק. הכוללים שלנו אינם רק מקום לימוד, אלא חממה לצמיחת תלמידי חכמים ומנהיגות רוחנית, הפועלת מתוך חיבור עמוק לצרכי הדור, לחיי המעשה ולערכי עם ישראל.": "Torah is the spiritual engine and moral compass of the organization. We establish and operate a network of kollelim that creates a deep and complete Torah world. Our kollelim are not only places of study, but also a greenhouse for Torah scholars and spiritual leadership connected to the needs of the generation, practical life, and the values of the People of Israel.",
    "התיישבות - בונים ומעמיקים שורשים": "Settlement: Building and Deepening Roots",
    "מתוך כוחה של התורה והחיבור לארץ, אנו יוצאים אל השטח כדי לקבוע עובדות קיימות וברוכות במעשה. העמותה שואפת להקים ולפתח יישובים חדשים ותוססים ברחבי הארץ, מתוך תפיסה חלוצית המבקשת להרחיב את גבולות ההתיישבות, לחזק את האחיזה בקרקע ולהביא פריחה וחיים לכל מרחבי ארצנו.": "From the strength of Torah and the connection to the land, we go out into the field to create blessed facts on the ground. The organization seeks to establish and develop new, vibrant communities throughout the country, with a pioneering vision of expanding settlement, strengthening our hold on the land, and bringing growth and life to every part of our land.",
    "עלייה - מקבצים גלויות ומחזירים הביתה": "Aliyah: Gathering Exiles and Bringing Them Home",
    "שיבת ציון וקיבוץ נדחי ישראל הם מהיעדים המרכזיים של דורנו. עמותת \"תורה ברורה\" רואה בעליית יהודי התפוצות ערך עליון, ופועלת באופן אקטיבי כדי לפתוח שערים, להושיט יד חמה ומלווה, ולסייע לכל עולה בתהליך העלייה והקליטה - כדי שיחד נבנה את עתידנו המשותף בארץ ישראל.": "The return to Zion and the ingathering of Israel are among the central missions of our generation. Torah Brura sees the aliyah of Jews from the Diaspora as a supreme value, and works actively to open doors, offer a warm guiding hand, and help every oleh through the process of aliyah and absorption, so that together we can build our shared future in the Land of Israel.",
    "השורשים": "Roots",
    "עמותת \"תורה ברורה\" צומחת מתוך עולמה של התורה, שהיא היסוד והמצפן לכל פועלנו. מתוך כוחה של התורה, אנו מחוברים לזכות האבות ולזכותנו הנצחית על הארץ, ומבינים כי לימוד התורה הוא השורש שמתוכו אנו נקראים לצאת ולהשפיע במישורי המעשה השונים בדורנו.": "Torah Brura grows from the world of Torah, which is the foundation and compass for all our work. From the strength of Torah, we are connected to the merit of our forefathers and to our eternal right to the land, understanding that Torah study is the root from which we are called to go out and make an impact in the practical arenas of our generation.",
    "הפירות": "Fruits",
    "הפירות של עמותת \"תורה ברורה\" הם התוצאה החיה של השילוב בין לימוד התורה לעשייה בשטח, והם ניכרים בכל מקום שבו אנו פועלים. אנו זוכים לראות את הפירות הללו צומחים בדורנו, ומביטים קדימה אל הפוטנציאל העצום שעוד עתיד להתפתח: ברשת הכוללים שמצמיחה תלמידי חכמים ומנהיגות רוחנית המשפיעה על הקהילה, בבתים החדשים שנבנים ובמשפחות שקובעות את מושבן בנקודות ההתיישבות שהקמנו, ובעולים החדשים שזוכים לקליטה חמה ומחבקת ומכים כעת שורשים עמוקים בארץ ישראל.": "The fruits of Torah Brura are the living result of combining Torah study with action in the field. They are visible wherever we work: in the network of kollelim that grows Torah scholars and spiritual leadership for the community, in new homes and families settling the communities we establish, and in new immigrants who receive warm absorption and now put down deep roots in the Land of Israel.",
    "העוצמה": "Strength",
    "העוצמה: תורה חלוציות וקיבוץ גלויות": "The Strength: Torah, Pioneering Spirit, and Ingathering of Exiles",
    "העוצמה הייחודית של עמותת \"תורה ברורה\" טמונה ביכולת לפעול בו-זמנית ובמלוא המרץ בשלושה מישורי עשייה קריטיים, כאשר התורה ניצבת תמיד במרכז וממנה שואבים את כל הכוח. מתוך עומקה של התורה והרוח הגדולה של הכוללים שלנו, אנו יוצאים אל השטח לבנות ולהקים יישובים חדשים, ובה בעת מובילים מהלכים משמעותיים של קיבוץ גלויות וקליטת עלייה.": "The unique strength of Torah Brura lies in the ability to act at full force in three critical areas at once, with Torah always at the center and the source of all our strength. From the depth of Torah and the great spirit of our kollelim, we go into the field to build new communities, while also leading meaningful efforts in the ingathering of exiles and aliyah absorption.",
    "השילוב המעשי הזה - שבו התורה מפיחה רוח ביישובים, היישובים קולטים ומחבקים את העולים החדשים, והעולים משתלבים בבניין הארץ והרוח - הופך את החזון של \"תורה ברורה\" למציאות חיה, שלמה ומשנה מציאות בכל יום מחדש.": "This practical combination, in which Torah gives spirit to the communities, the communities welcome and embrace new immigrants, and the immigrants join in building the land and its spirit, turns Torah Brura's vision into a living, complete reality that changes reality every day.",
    "העשייה": "Action",
    "העשייה: בונים את הארץ ברוח ובמעשה": "Action: Building the Land in Spirit and Deed",
    "העשייה של עמותת \"תורה ברורה\" מתרגמת את החזון הרוחני לפעולות ממשיות בשטח. מתוך הלב הפועם של בית המדרש, אנו יוצאים לפעול בשלושה צירים מרכזיים המשנים את המציאות בדורנו:": "The activity of Torah Brura translates the spiritual vision into concrete action in the field. From the beating heart of the beit midrash, we act through three central paths that change reality in our generation:",
    "הקמת רשת כוללים ובתי מדרש": "Establishing a Network of Kollelim and Study Halls",
    "אנו מייסדים ומפעילים כוללים המהווים מגדלור רוחני וקהילתי. בתי המדרש שלנו משלבים לימוד תורה מעמיק ורציני יחד עם מעורבות חברתית, ומצמיחים מנהיגות תורנית שמחוברת לשטח ולצרכי השעה.": "We found and operate kollelim that serve as spiritual and communal lighthouses. Our study halls combine deep, serious Torah learning with social involvement, growing Torah leadership connected to the field and to the needs of the hour.",
    "פיתוח והרחבת ההתיישבות": "Developing and Expanding Settlement",
    "אנו פועלים באופן אקטיבי להקמת נקודות יישוב חדשות ולחיזוק ההתיישבות. העמותה מלווה את הקבוצות והמשפחות משלבי התכנון ועד לעלייה לקרקע, מתוך שאיפה להרחיב את גבולות ההתיישבות ולחזק את האחיזה בארץ.": "We actively work to establish new points of settlement and strengthen existing communities. The organization accompanies groups and families from planning through settling the land, with the aim of expanding settlement and strengthening our hold on the land.",
    "קליטה וליווי עולים חדשים": "Absorbing and Accompanying New Immigrants",
    "אנו מובילים תוכניות ליווי למשפחות מהתפוצות בתהליך העלייה וההשתלבות שלהן בארץ. העשייה שלנו כוללת מענה גשמי ורוחני, יצירת קהילות מחבקות וסיוע בכל שלבי ההתאקלמות, כדי לאפשר לעולים להכות שורש אמיתי בביתם החדש.": "We lead accompaniment programs for families from the Diaspora during their aliyah and integration in Israel. Our work includes material and spiritual support, warm communities, and help through every stage of acclimation, enabling immigrants to put down real roots in their new home.",
    "על המפה": "On the Map",
    "כוללים, שיעורים וספרים של תורה ברורה": "Kollelim, classes, and books of Torah Brura",
    "יענקי הגמד": "",
    "עץ חיים היא למחזיקים בה": "It is a tree of life to those who hold fast to it",
    "רוצים להיות חלק מתורת ארץ ישראל?": "Want to be part of the Torah of the Land of Israel?",
    "בחרו את התרומה שלכם": "Choose Your Donation",
    "הזכות שלכם בלימוד תורה בארץ ישראל": "Your merit in Torah study in the Land of Israel",
    "בחרו את השותפות שלכם": "Choose Your Partnership",
    "שותפות בלימוד": "Partnership in Torah Study",
    "תרומה לכוללים": "Donation to Kollelim",
    "בניין וחיזוק": "Building and Strengthening",
    "תרומה ליישוב הארץ": "Donation for Settling the Land",
    "הפצת תורה": "Spreading Torah",
    "הוצאת ספרים": "Publishing Sacred Books",
    "הוצאת ספרי קודש": "Publishing Sacred Books",
    "תורה בארץ": "Torah in the Land",
    "חיזוק העלייה לארץ": "Strengthening Aliyah to Israel",
    "לתרומה": "Donate",
    "שעת לימוד": "Hour of Study",
    "סדר לימוד": "Study Session",
    "יום לימוד": "Day of Study",
    "שותפות חודשית": "Monthly Partnership",
    "סכום לבחירה": "Custom Amount",
    "בחר": "Choose",
    "פרטים אישיים": "Personal Details",
    "שם פרטי": "First Name",
    "שם משפחה": "Last Name",
    "טלפון": "Phone",
    "אימייל": "Email",
    "הקדשה": "Dedication",
    "סוג הקדשה": "Dedication Type",
    "לזכות": "In Honor Of",
    "לעילוי נשמת": "In Memory Of",
    "לרפואת": "For Healing",
    "להצלחה": "For Success",
    "שם להקדשה": "Dedication Name",
    "תשלום": "Payment",
    "סכום לתרומה": "Donation Amount",
    "המשך לתרומה": "Continue to Donation",
    "קובץ ביטול החזרים לתרומות": "Donation Refund Cancellation File",
    "הקלידו סכום": "Enter amount",
    "סכום תרומה ידני": "Custom donation amount",
    "בחירת תחום תרומה": "Choose donation category",
    "בחירת סכום תרומה": "Choose donation amount",
    "פרטי התרומה": "Donation details",
    "פרטי תרומה": "Donation Details",
    "השלמת התרומה": "Complete Your Donation",
    "מלאו פרטים והמשיכו לתרומה": "Fill in your details and continue to donation",
    "תחום התרומה": "Donation Category",
    "סכום התרומה": "Donation Amount",
    "הערות נוספות": "Additional Notes",
    "אפשר להוסיף בקשה או הערה לתרומה": "You may add a request or note for the donation",
    "פרטי אשראי": "Credit Card Details",
    "האזור הזה מוכן לחיבור למסוף הסליקה. בשלב החיבור נחליף את השדות או נחבר אותם לטוקן/מסוף המאובטח של חברת הסליקה, בלי לשמור פרטי כרטיס באתר.": "This area is ready to connect to the payment terminal. During integration we will replace these fields or connect them to the secure token/payment terminal of the clearing company, without storing card details on the site.",
    "מספר כרטיס": "Card Number",
    "שם בעל הכרטיס": "Cardholder Name",
    "תוקף": "Expiry",
    "שלוש ספרות בגב הכרטיס": "CVV",
    "לאחר חיבור Google Sheets, הפרטים יישמרו אוטומטית בגיליון. פרטי אשראי לא נשמרים בגיליון.": "After Google Sheets is connected, the details will be saved automatically in the sheet. Credit card details are not saved in the sheet.",
    "סיכום": "Summary",
    "תחום": "Category",
    "סכום": "Amount",
    "לאחר קבלת פרטי המסוף נחבר את הכפתור הזה לסליקה בפועל.": "After receiving the terminal details, we will connect this button to real payment processing.",
    "ניווט ראשי": "Main navigation"
  };

  function trimText(value) {
    return (value || "").replace(/\s+/g, " ").trim();
  }

  function translateTextNode(node, lang) {
    if (!node.__heText) node.__heText = node.nodeValue;
    if (lang === "he") {
      node.nodeValue = node.__heText;
      return;
    }

    var original = trimText(node.__heText);
    if (!original || !EN[original]) return;
    var leading = (node.__heText.match(/^\s*/) || [""])[0];
    var trailing = (node.__heText.match(/\s*$/) || [""])[0];
    node.nodeValue = leading + EN[original] + trailing;
  }

  function translateAttribute(element, attr, lang) {
    var key = "__heAttr_" + attr;
    if (!element[key] && element.hasAttribute(attr)) element[key] = element.getAttribute(attr);
    if (!element[key]) return;
    if (lang === "he") {
      element.setAttribute(attr, element[key]);
      return;
    }
    var original = trimText(element[key]);
    if (EN[original]) element.setAttribute(attr, EN[original]);
  }

  function walkText(root, lang) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        var parent = node.parentElement;
        if (!parent || ["SCRIPT", "STYLE", "NOSCRIPT"].indexOf(parent.tagName) !== -1) {
          return NodeFilter.FILTER_REJECT;
        }
        return trimText(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (node) {
      translateTextNode(node, lang);
    });
  }

  function ensureButton() {
    var header = document.querySelector(".site-header");
    var button = document.querySelector("[data-language-toggle], .language-toggle");
    if (!button) {
      button = document.createElement("a");
      button.className = "language-toggle";
      button.href = "#";
      button.textContent = "EN";
      button.setAttribute("aria-label", "Switch site language");
      if (header) header.appendChild(button);
      else document.body.insertBefore(button, document.body.firstChild);
    }
    button.classList.add("language-toggle");
    button.setAttribute("data-language-toggle", "");
    button.removeAttribute("target");
    button.removeAttribute("rel");
    button.href = "#";
    return button;
  }

  function updateInternalLinks(lang) {
    document.querySelectorAll("a[href]").forEach(function (link) {
      var href = link.getAttribute("href");
      if (!href || href.charAt(0) === "#" || href.indexOf("data:") === 0 || /^https?:\/\//.test(href)) return;
      var url = new URL(href, window.location.href);
      if (lang === "en") url.searchParams.set("lang", "en");
      else url.searchParams.delete("lang");
      link.setAttribute("href", url.pathname.split("/").pop() + url.search + url.hash);
    });
  }

  function removeUnusedDonationButton() {
    document.querySelectorAll(".vision-actions .secondary-action").forEach(function (link) {
      link.remove();
    });
  }

  function setLanguage(lang) {
    var isEnglish = lang === "en";
    removeUnusedDonationButton();
    document.documentElement.lang = isEnglish ? "en" : "he";
    document.documentElement.dir = isEnglish ? "ltr" : "rtl";
    document.body.setAttribute("data-lang", lang);
    walkText(document.body, lang);
    document.querySelectorAll("[placeholder], [aria-label], [title]").forEach(function (element) {
      ["placeholder", "aria-label", "title"].forEach(function (attr) {
        translateAttribute(element, attr, lang);
      });
    });
    var button = ensureButton();
    button.textContent = isEnglish ? "HE" : "EN";
    button.setAttribute("aria-label", isEnglish ? "Switch site to Hebrew" : "Switch site to English");
    updateInternalLinks(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {}
  }

  function initialLanguage() {
    var params = new URLSearchParams(window.location.search);
    if (params.get("lang") === "en") return "en";
    try {
      return localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "he";
    } catch (error) {
      return "he";
    }
  }

  function initLanguage() {
    var button = ensureButton();
    button.addEventListener("click", function (event) {
      event.preventDefault();
      setLanguage(document.documentElement.lang === "en" ? "he" : "en");
    });
    setLanguage(initialLanguage());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLanguage);
  } else {
    initLanguage();
  }
})();

    document.querySelectorAll(".vision-actions .secondary-action").forEach(function (link) { link.remove(); });


(function () {
  function categoryForAmount(amount) {
    var categories = { "180": "kollelim", "900": "settlements", "3600": "books", "7200": "aliyah" };
    return categories[amount] || "";
  }

  function checkoutHref(amount, category) {
    var url = new URL("./checkout.html", window.location.href);
    if (category) url.searchParams.set("category", category);
    if (amount) url.searchParams.set("amount", amount);
    if (document.documentElement.lang === "en") url.searchParams.set("lang", "en");
    return url.pathname.split("/").pop() + url.search;
  }

  function rewriteDonationLinks() {
    document.querySelectorAll('a[href*="donation.html?amount="]').forEach(function (link) {
      var url = new URL(link.getAttribute("href"), window.location.href);
      var amount = url.searchParams.get("amount");
      link.setAttribute("href", checkoutHref(amount, url.searchParams.get("category") || categoryForAmount(amount)));
    });
  }

  document.addEventListener("click", function (event) {
    var link = event.target.closest ? event.target.closest('a[href*="donation.html?amount="]') : null;
    if (!link) return;
    var url = new URL(link.getAttribute("href"), window.location.href);
    var amount = url.searchParams.get("amount");
    event.preventDefault();
    window.location.href = checkoutHref(amount, url.searchParams.get("category") || categoryForAmount(amount));
  }, true);

  document.addEventListener("submit", function (event) {
    var form = event.target;
    if (!form || !form.matches || !form.matches("[data-custom-amount]")) return;
    var input = form.querySelector('input[name="custom-amount"]');
    var amount = input ? input.value : "";
    event.preventDefault();
    event.stopImmediatePropagation();
    if (!amount) {
      if (input) input.focus();
      return;
    }
    window.location.href = checkoutHref(amount, new URLSearchParams(window.location.search).get("category"));
  }, true);

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", rewriteDonationLinks);
  else rewriteDonationLinks();
})();



(function () {
  var cardCategories = ["kollelim", "settlements", "books", "aliyah"];
  var amountCategories = { "180": "kollelim", "900": "settlements", "3600": "books", "7200": "aliyah" };

  function pageName(pathname) {
    return (pathname || "").split("/").pop() || "index.html";
  }

  function isDonationPage() {
    var page = pageName(window.location.pathname);
    return page === "donation" || page === "donation.html";
  }

  function withLang(url) {
    if (document.documentElement.lang === "en") url.searchParams.set("lang", "en");
    return url.pathname.split("/").pop() + url.search + url.hash;
  }

  function checkoutHref(amount, category) {
    var url = new URL("./checkout.html", window.location.href);
    if (category) url.searchParams.set("category", category);
    if (amount) url.searchParams.set("amount", amount);
    return withLang(url);
  }

  function donationAmountsHref(category) {
    var url = new URL("./donation.html", window.location.href);
    if (category) url.searchParams.set("category", category);
    url.hash = "amounts";
    return withLang(url);
  }

  function selectedCategory() {
    return new URLSearchParams(window.location.search).get("category") || "";
  }

  function restoreDonationCategoryButtons() {
    document.querySelectorAll(".donation-choice-section .donation-link").forEach(function (link, index) {
      link.setAttribute("href", donationAmountsHref(cardCategories[index] || "kollelim"));
    });
  }

  function routeAmountCardsToCheckout() {
    var category = selectedCategory();
    document.querySelectorAll(".donation-amounts a.amount-card").forEach(function (link) {
      var original = new URL(link.getAttribute("href"), window.location.href);
      var amount = original.searchParams.get("amount");
      link.setAttribute("href", checkoutHref(amount, category || amountCategories[amount] || ""));
    });
  }

  function showAmountsForCategory() {
    if (!isDonationPage() || !selectedCategory()) return;
    document.querySelectorAll(".donation-flow").forEach(function (section) {
      section.hidden = false;
    });
    var choiceSection = document.querySelector(".donation-choice-section");
    if (choiceSection) choiceSection.hidden = true;
    document.body.classList.add("amount-selected");
  }

  function initDonationFlowRestore() {
    restoreDonationCategoryButtons();
    routeAmountCardsToCheckout();
    showAmountsForCategory();
  }

  document.addEventListener("submit", function (event) {
    var form = event.target;
    if (!form || !form.matches || !form.matches("[data-custom-amount]")) return;
    var input = form.querySelector('input[name="custom-amount"]');
    var amount = input ? input.value : "";
    event.preventDefault();
    event.stopImmediatePropagation();
    if (!amount) {
      if (input) input.focus();
      return;
    }
    window.location.href = checkoutHref(amount, selectedCategory());
  }, true);

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initDonationFlowRestore);
  else initDonationFlowRestore();
})();



(function () {
  var HOSTED_FIELDS_SCRIPT = "https://hf.tranzila.com/assets/js/thostedf.js";
  var HANDSHAKE_ENDPOINT = window.TORA_BRURA_TRANZILA_HANDSHAKE_URL || "/api/tranzila-handshake";
  var DEFAULT_TERMINAL = window.TORA_BRURA_TRANZILA_TERMINAL || "TRANZILA_TERMINAL_NAME";
  var hostedFields = null;
  var hostedFieldsReady = false;

  function isCheckoutPage() {
    var page = (window.location.pathname || "").split("/").pop();
    return page === "checkout" || page === "checkout.html";
  }

  function addHostedFieldsStyles() {
    if (document.getElementById("tranzila-hosted-fields-style")) return;
    var style = document.createElement("style");
    style.id = "tranzila-hosted-fields-style";
    style.textContent = "
.tranzila-hosted-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
.tranzila-hosted-grid label{display:grid;gap:8px;color:var(--ink-deep);font-weight:800}
.tranzila-hosted-field{width:100%;min-height:52px;padding:12px 14px;background:var(--stone-light);border:1px solid rgba(67,83,108,.24);border-radius:3px;display:flex;align-items:center}
.tranzila-hosted-field.hosted-fields-valid{border-color:#2e7d32;background:#f4fbf4}
.tranzila-hosted-field.hosted-fields-invalid{border-color:#b3261e;background:#fff6f5}
.tranzila-hosted-error{min-height:18px;color:#b3261e;font-size:13px;font-weight:700}
.tranzila-secure-note{margin:0;color:var(--ink-soft);font-size:15px;line-height:1.6;font-weight:700}
.tranzila-status{margin:0;color:var(--gold-dark);font-weight:900}
@media(max-width:860px){.tranzila-hosted-grid{grid-template-columns:1fr}}
";
    document.head.appendChild(style);
  }

  function loadHostedFieldsScript() {
    if (window.TzlaHostedFields) return Promise.resolve();
    var existing = document.querySelector('script[src="' + HOSTED_FIELDS_SCRIPT + '"]');
    if (existing) {
      return new Promise(function (resolve, reject) {
        existing.addEventListener("load", resolve, { once: true });
        existing.addEventListener("error", reject, { once: true });
      });
    }
    return new Promise(function (resolve, reject) {
      var script = document.createElement("script");
      script.src = HOSTED_FIELDS_SCRIPT;
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  function replaceCreditCardInputs() {
    var paymentGroup = document.querySelector('.checkout-group[aria-label="פרטי אשראי"], .checkout-group[aria-label="Credit Card Details"]');
    if (!paymentGroup || paymentGroup.dataset.tranzilaHosted === "ready") return paymentGroup;
    paymentGroup.dataset.tranzilaHosted = "ready";
    paymentGroup.innerHTML = [
      '<h2>פרטי אשראי</h2>',
      '<p class="tranzila-secure-note">שדות האשראי נטענים ישירות מחברת הסליקה Tranzila. מספר הכרטיס, התוקף וה-CVV לא נשמרים באתר ולא נשלחים ל-Google Sheets.</p>',
      '<div class="tranzila-hosted-grid">',
        '<label for="tranzila-card-number">מספר כרטיס<div class="tranzila-hosted-field" id="tranzila-card-number"></div><span class="tranzila-hosted-error" id="errors_for_credit_card_number"></span></label>',
        '<label>שם בעל הכרטיס<input type="text" name="card-holder-name" autocomplete="cc-name" required></label>',
        '<label for="tranzila-card-expiry">תוקף<div class="tranzila-hosted-field" id="tranzila-card-expiry"></div><span class="tranzila-hosted-error" id="errors_for_expiry"></span></label>',
        '<label for="tranzila-card-cvv">שלוש ספרות בגב הכרטיס<div class="tranzila-hosted-field" id="tranzila-card-cvv"></div><span class="tranzila-hosted-error" id="errors_for_cvv"></span></label>',
      '</div>',
      '<p class="tranzila-status" data-tranzila-status>טוען שדות סליקה מאובטחים...</p>'
    ].join("");
    return paymentGroup;
  }

  function setStatus(message) {
    var status = document.querySelector("[data-tranzila-status]");
    if (status) status.textContent = message || "";
  }

  function setFieldError(param, message) {
    var id = param === "number" ? "credit_card_number" : param;
    var target = document.getElementById("errors_for_" + id);
    if (target) target.textContent = message || "";
  }

  function clearErrors() {
    document.querySelectorAll(".tranzila-hosted-error").forEach(function (node) {
      node.textContent = "";
    });
  }

  function initHostedFields() {
    if (!window.TzlaHostedFields || hostedFields) return;
    hostedFields = window.TzlaHostedFields.create({
      sandbox: false,
      fields: {
        credit_card_number: {
          selector: "#tranzila-card-number",
          placeholder: "4580 4580 4580 4580",
          tabindex: 10
        },
        expiry: {
          selector: "#tranzila-card-expiry",
          placeholder: "MM/YY",
          version: "1",
          tabindex: 11
        },
        cvv: {
          selector: "#tranzila-card-cvv",
          placeholder: "123",
          tabindex: 12
        }
      },
      styles: {
        input: {
          height: "auto",
          width: "100%",
          color: "#09182b",
          "font-size": "18px",
          "font-family": "Heebo, Arial, sans-serif"
        },
        select: {
          height: "auto",
          width: "100%",
          color: "#09182b",
          "font-size": "18px",
          "font-family": "Heebo, Arial, sans-serif"
        }
      }
    });

    if (hostedFields.onEvent) {
      hostedFields.onEvent("ready", function () {
        hostedFieldsReady = true;
        setStatus("השדות המאובטחים מוכנים לתשלום.");
      });
      hostedFields.onEvent("validityChange", function (event) {
        if (!event || !event.field) return;
        setFieldError(event.field, event.isValid ? "" : "נא לבדוק את השדה");
      });
      hostedFields.onEvent("submit", function () {
        var form = document.querySelector("[data-checkout-form]");
        if (form) requestTranzilaCharge(form);
      });
    } else {
      hostedFieldsReady = true;
      setStatus("השדות המאובטחים מוכנים לתשלום.");
    }
  }

  function donationDataFromForm(form) {
    var params = new URLSearchParams(window.location.search);
    var amount = form.elements.amount ? form.elements.amount.value : params.get("amount") || "";
    var firstName = form.elements["first-name"] ? form.elements["first-name"].value.trim() : "";
    var lastName = form.elements["last-name"] ? form.elements["last-name"].value.trim() : "";
    var phone = form.elements.phone ? form.elements.phone.value.trim() : "";
    var email = form.elements.email ? form.elements.email.value.trim() : "";
    return {
      submittedAt: new Date().toLocaleString("he-IL"),
      category: form.elements["category-label"] ? form.elements["category-label"].value : "תרומה",
      categoryKey: params.get("category") || "kollelim",
      amount: amount,
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      dedicationType: form.elements["dedication-type"] ? form.elements["dedication-type"].value : "",
      dedicationName: form.elements["dedication-name"] ? form.elements["dedication-name"].value : "",
      notes: form.elements.notes ? form.elements.notes.value : "",
      cardHolderName: form.elements["card-holder-name"] ? form.elements["card-holder-name"].value.trim() : (firstName + " " + lastName).trim(),
      source: "torabrura.vercel.app"
    };
  }

  function saveDonationToSheets(data, tranzilaResponse) {
    var sheetsUrl = window.TORA_BRURA_GOOGLE_SHEETS_URL || "";
    if (!sheetsUrl) return Promise.resolve();
    var payload = Object.assign({}, data, {
      paymentStatus: "paid",
      tranzilaTransactionId: tranzilaResponse && tranzilaResponse.transaction_response ? tranzilaResponse.transaction_response.transaction_id || "" : "",
      cardLast4: tranzilaResponse && tranzilaResponse.transaction_response ? tranzilaResponse.transaction_response.credit_card_last_4_digits || "" : ""
    });
    return fetch(sheetsUrl, {
      method: "POST",
      mode: "no-cors",
      body: new URLSearchParams(payload)
    }).catch(function () {});
  }

  function createHandshake(data) {
    return fetch(HANDSHAKE_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: data.amount,
        category: data.categoryKey,
        contact: (data.firstName + " " + data.lastName).trim(),
        email: data.email,
        phone: data.phone
      })
    }).then(function (response) {
      return response.json().then(function (body) {
        if (!response.ok || !body.thtk) throw new Error(body.error || "חסר token מאובטח של Tranzila");
        return body;
      });
    });
  }

  function chargeWithTranzila(data, handshake) {
    return new Promise(function (resolve, reject) {
      hostedFields.charge({
        terminal_name: handshake.terminal_name || DEFAULT_TERMINAL,
        amount: data.amount,
        currency_code: "ILS",
        tran_mode: "A",
        response_language: document.documentElement.lang === "en" ? "english" : "hebrew",
        thtk: handshake.thtk,
        contact: (data.firstName + " " + data.lastName).trim(),
        email: data.email,
        phone: data.phone,
        card_holder_name: data.cardHolderName,
        card_holder_email: data.email,
        phone_country_code: "+972",
        phone_number: data.phone,
        pdesc: data.category + (data.dedicationName ? " - " + data.dedicationName : "")
      }, function (err, response) {
        if (err) return reject(err);
        resolve(response);
      });
    });
  }

  async function requestTranzilaCharge(form) {
    clearErrors();
    if (!hostedFields || !hostedFieldsReady) {
      alert("שדות הסליקה עדיין נטענים. נסו שוב בעוד רגע.");
      return;
    }
    if (!form.reportValidity()) return;

    var button = form.querySelector(".checkout-submit");
    var originalText = button ? button.textContent : "";
    var data = donationDataFromForm(form);
    if (button) {
      button.disabled = true;
      button.textContent = "מבצע תשלום מאובטח...";
    }
    setStatus("יוצר אישור מאובטח מול Tranzila...");

    try {
      var handshake = await createHandshake(data);
      setStatus("שולח לחברת הסליקה...");
      var tranzilaResponse = await chargeWithTranzila(data, handshake);
      await saveDonationToSheets(data, tranzilaResponse);
      setStatus("התרומה נקלטה בהצלחה. תודה רבה!");
      alert("התרומה נקלטה בהצלחה. תודה רבה!");
    } catch (error) {
      if (error && error.messages) {
        error.messages.forEach(function (message) {
          setFieldError(message.param, message.message);
        });
      }
      setStatus("לא הצלחנו להשלים את התשלום. בדקו את הפרטים או נסו שוב.");
      alert((error && error.message) || "לא הצלחנו להשלים את התשלום כרגע.");
    } finally {
      if (button) {
        button.disabled = false;
        button.textContent = originalText;
      }
    }
  }

  function wireCheckoutSubmit() {
    var form = document.querySelector("[data-checkout-form]");
    if (!form || form.dataset.tranzilaSubmit === "ready") return;
    form.dataset.tranzilaSubmit = "ready";
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      event.stopImmediatePropagation();
      requestTranzilaCharge(form);
    }, true);
  }

  async function initTranzilaHostedFields() {
    if (!isCheckoutPage()) return;
    addHostedFieldsStyles();
    replaceCreditCardInputs();
    wireCheckoutSubmit();
    try {
      await loadHostedFieldsScript();
      initHostedFields();
    } catch (error) {
      setStatus("לא הצלחנו לטעון את שדות הסליקה המאובטחים של Tranzila.");
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initTranzilaHostedFields);
  else initTranzilaHostedFields();
})();
