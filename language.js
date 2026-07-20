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
    "עמותת תורה ברורה": "Torah Brura Organization",
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
    "תרומה": "Donate",
    "המשך לתרומה": "Donate",
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

  function applyInlineTranslations(lang) {
    document.querySelectorAll("[data-en]").forEach(function (element) {
      if (element.__heInlineText === undefined) {
        element.__heInlineText = element.textContent;
      }
      element.textContent = lang === "en" ? element.getAttribute("data-en") : element.__heInlineText;
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

  function categoryForAmount(amount) {
    var categories = {
      "180": "kollelim",
      "900": "settlements",
      "3600": "books",
      "7200": "aliyah"
    };
    return categories[amount] || "";
  }

  function checkoutHref(amount, category) {
    var url = new URL("./checkout.html", window.location.href);
    if (category) url.searchParams.set("category", category);
    if (amount) url.searchParams.set("amount", amount);
    if (document.documentElement.lang === "en") url.searchParams.set("lang", "en");
    return url.pathname.split("/").pop() + url.search;
  }

  function donationAmountsHref(category) {
    var url = new URL("./donation.html", window.location.href);
    if (category) url.searchParams.set("category", category);
    if (document.documentElement.lang === "en") url.searchParams.set("lang", "en");
    url.hash = "amounts";
    return url.pathname.split("/").pop() + url.search + url.hash;
  }

  function redirectDonationAmountLinks() {
    var categories = ["kollelim", "settlements", "books", "aliyah"];
    document.querySelectorAll(".donation-choice-section .donation-link").forEach(function (link, index) {
      link.setAttribute("href", donationAmountsHref(categories[index] || "kollelim"));
    });

    document.querySelectorAll(".donation-amounts a.amount-card").forEach(function (link) {
      var url = new URL(link.getAttribute("href"), window.location.href);
      var amount = url.searchParams.get("amount");
      var pageCategory = new URLSearchParams(window.location.search).get("category");
      var category = pageCategory || url.searchParams.get("category") || categoryForAmount(amount);
      link.setAttribute("href", checkoutHref(amount, category));
    });
  }

  function initDonationCheckoutRouting() {
    if (document.__donationCheckoutRouting) return;
    document.__donationCheckoutRouting = true;

    document.addEventListener("click", function (event) {
      var link = event.target.closest ? event.target.closest(".donation-amounts a.amount-card") : null;
      if (!link) return;
      var url = new URL(link.getAttribute("href"), window.location.href);
      var amount = url.searchParams.get("amount");
      if (!amount) return;
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
    applyInlineTranslations(lang);
    document.querySelectorAll("[placeholder], [aria-label], [title]").forEach(function (element) {
      ["placeholder", "aria-label", "title"].forEach(function (attr) {
        translateAttribute(element, attr, lang);
      });
    });
    var button = ensureButton();
    button.textContent = isEnglish ? "HE" : "EN";
    button.setAttribute("aria-label", isEnglish ? "Switch site to Hebrew" : "Switch site to English");
    updateInternalLinks(lang);
    redirectDonationAmountLinks();
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
    initDonationCheckoutRouting();
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


(function () {
  var COPY = {
    "Join Us in the Torah of the Land of Israel": "Become a partner in Torah rooted in the Land of Israel",
    "Together we strengthen Torah learners, kollelim, classes, and the publication of sacred books in the Land of Israel.": "Together, we strengthen Torah learning, kollelim, classes, and sacred publishing across the Land of Israel.",
    "The Vision": "Our Vision",
    "A home page presenting the path, vision, and activity, leading onward to the partnership page.": "Discover the vision, the roots, and the work of Torah Brura, then continue to become a partner.",
    "Our Vision: Building the Future of the People of Israel in Their Land": "Our Vision: Building the next chapter of Am Yisrael in its land",
    "The Torah Brura organization acts from a deep belief that the future and flourishing of the People of Israel are bound to the eternal connection between Torah, settlement, and aliyah.": "Torah Brura is built on a deep belief: the future of Am Yisrael is bound to the living bond between Torah, settlement, and aliyah.",
    "We seek to grow creative spiritual leadership through Torah Brura's network of kollelim: a complete Torah world rooted in a worldview that connects the depth of Torah with the needs of the generation and practical life. From the strength of this Torah, we go out into the field to build and expand the borders of our land through new and vibrant communities. At the same time, we extend a warm and guiding hand to our brothers and sisters in the Diaspora and help them come home to the Land of Israel.": "Through Torah Brura's network of kollelim, we are growing creative spiritual leadership: a living Torah world that connects the depth of study with the needs of this generation and the realities of life. From that Torah, we move into the field to build new, vibrant communities across the Land of Israel. At the same time, we extend a warm hand to Jews in the Diaspora and help them make their way home to Israel.",
    "Together, we fulfill the Torah-Zionist vision and connect Torah, pioneering spirit, and the ingathering of exiles to build the People of Israel in the Land of Israel.": "Together, we are bringing the Torah-Zionist vision to life: Torah, pioneering spirit, and the ingathering of exiles, all joined in building Am Yisrael in Eretz Yisrael.",
    "Torah Brura: A World of Kollelim": "Torah Brura: A living world of kollelim",
    "Torah is the spiritual engine and moral compass of the organization. We establish and operate a network of kollelim that creates a deep and complete Torah world. Our kollelim are not only places of study, but also a greenhouse for Torah scholars and spiritual leadership connected to the needs of the generation, practical life, and the values of the People of Israel.": "Torah is the spiritual engine and moral compass of the organization. We establish and operate a network of kollelim that creates a deep, serious Torah world. These kollelim are more than places of learning. They are a home for growing Torah scholars and spiritual leadership that is connected to the needs of the generation, to real life, and to the values of Am Yisrael.",
    "Settlement: Building and Deepening Roots": "Settlement: Building roots on the land",
    "From the strength of Torah and the connection to the land, we go out into the field to create blessed facts on the ground. The organization seeks to establish and develop new, vibrant communities throughout the country, with a pioneering vision of expanding settlement, strengthening our hold on the land, and bringing growth and life to every part of our land.": "From the strength of Torah and our bond with the land, we move from vision to action. Torah Brura works to establish and develop new, vibrant communities throughout Israel, with a pioneering spirit that expands settlement, strengthens our hold on the land, and brings life and growth to every part of our country.",
    "Aliyah: Gathering Exiles and Bringing Them Home": "Aliyah: Bringing our people home",
    "The return to Zion and the ingathering of Israel are among the central missions of our generation. Torah Brura sees the aliyah of Jews from the Diaspora as a supreme value, and works actively to open doors, offer a warm guiding hand, and help every oleh through the process of aliyah and absorption, so that together we can build our shared future in the Land of Israel.": "The return to Zion and the ingathering of Israel are central missions of our generation. Torah Brura sees aliyah from the Diaspora as a sacred calling. We work to open doors, offer a warm hand, and accompany every oleh through aliyah and absorption, so that together we can build our shared future in Israel.",
    "Torah Brura grows from the world of Torah, which is the foundation and compass for all our work. From the strength of Torah, we are connected to the merit of our forefathers and to our eternal right to the land, understanding that Torah study is the root from which we are called to go out and make an impact in the practical arenas of our generation.": "Torah Brura grows from the world of Torah. Torah is the foundation and compass of everything we do. Through Torah, we connect to the merit of our fathers and to our eternal right to the land. We believe Torah study is the root from which we are called to step into the practical challenges of our generation.",
    "The fruits of Torah Brura are the living result of combining Torah study with action in the field. They are visible wherever we work: in the network of kollelim that grows Torah scholars and spiritual leadership for the community, in new homes and families settling the communities we establish, and in new immigrants who receive warm absorption and now put down deep roots in the Land of Israel.": "The fruits of Torah Brura can be seen wherever Torah meets action: in kollelim that grow Torah scholars and community leadership, in new homes and families settling the communities we help establish, and in olim who are welcomed warmly and begin putting down deep roots in the Land of Israel.",
    "The Strength: Torah, Pioneering Spirit, and Ingathering of Exiles": "Our Strength: Torah, pioneering spirit, and the ingathering of exiles",
    "The unique strength of Torah Brura lies in the ability to act at full force in three critical areas at once, with Torah always at the center and the source of all our strength. From the depth of Torah and the great spirit of our kollelim, we go into the field to build new communities, while also leading meaningful efforts in the ingathering of exiles and aliyah absorption.": "Torah Brura's unique strength is the ability to work with full force in three essential areas at once, while Torah remains the center and source of our strength. From the depth and spirit of our kollelim, we move outward to build new communities and lead meaningful efforts in aliyah and absorption.",
    "This practical combination, in which Torah gives spirit to the communities, the communities welcome and embrace new immigrants, and the immigrants join in building the land and its spirit, turns Torah Brura's vision into a living, complete reality that changes reality every day.": "This living combination gives the vision its power: Torah gives spirit to the communities, the communities welcome and embrace new olim, and the olim become part of building the land and its spirit. That is how Torah Brura turns vision into a living reality, day by day.",
    "Action: Building the Land in Spirit and Deed": "Our Work: Building the land in spirit and action",
    "The activity of Torah Brura translates the spiritual vision into concrete action in the field. From the beating heart of the beit midrash, we act through three central paths that change reality in our generation:": "Torah Brura turns spiritual vision into real action on the ground. From the living heart of the beit midrash, we work through three central paths that are shaping our generation:",
    "Establishing a Network of Kollelim and Study Halls": "Building a network of kollelim and batei midrash",
    "We found and operate kollelim that serve as spiritual and communal lighthouses. Our study halls combine deep, serious Torah learning with social involvement, growing Torah leadership connected to the field and to the needs of the hour.": "We establish and operate kollelim that serve as spiritual and communal anchors. Our batei midrash combine deep, serious Torah learning with social responsibility, growing Torah leadership that is connected to the field and to the needs of the hour.",
    "Developing and Expanding Settlement": "Developing and expanding Jewish settlement",
    "We actively work to establish new points of settlement and strengthen existing communities. The organization accompanies groups and families from planning through settling the land, with the aim of expanding settlement and strengthening our hold on the land.": "We actively work to establish new communities and strengthen settlement. Torah Brura accompanies groups and families from planning through going up to the land, with the goal of expanding settlement and strengthening our bond with the Land of Israel.",
    "Absorbing and Accompanying New Immigrants": "Welcoming and accompanying new olim",
    "We lead accompaniment programs for families from the Diaspora during their aliyah and integration in Israel. Our work includes material and spiritual support, warm communities, and help through every stage of acclimation, enabling immigrants to put down real roots in their new home.": "We lead support programs for families from the Diaspora as they make aliyah and build their lives in Israel. Our work includes practical and spiritual support, warm communities, and guidance through each stage of acclimation, so new olim can put down true roots in their new home.",
    "On the Map": "On the Map",
    "Kollelim, classes, and books of Torah Brura": "Torah Brura's kollelim, classes, and sacred books",
    "Want to be part of the Torah of the Land of Israel?": "Ready to take part in Torah rooted in the Land of Israel?",
    "Choose Your Donation": "Choose your donation",
    "Your merit in Torah study in the Land of Israel": "Your partnership in Torah learning in the Land of Israel",
    "Choose Your Partnership": "Choose your partnership",
    "Donation to Kollelim": "Support the kollelim",
    "Donation for Settling the Land": "Support settling the land",
    "Publishing Sacred Books": "Publish sacred Torah books",
    "Strengthening Aliyah to Israel": "Strengthen aliyah to Israel",
    "Donate": "Donate",
    "Hour of Study": "An hour of Torah learning",
    "Study Session": "A full study session",
    "Day of Study": "A day of Torah learning",
    "Monthly Partnership": "Monthly partnership",
    "Custom Amount": "Choose your own amount",
    "Choose": "Select",
    "Personal Details": "Personal details",
    "First Name": "First name",
    "Last Name": "Last name",
    "Phone": "Phone",
    "Email": "Email",
    "Dedication": "Dedication",
    "Dedication Type": "Dedication type",
    "In Honor Of": "In honor of",
    "In Memory Of": "In memory of",
    "For Healing": "For a full recovery",
    "For Success": "For success",
    "Dedication Name": "Name for dedication",
    "Payment": "Payment",
    "Donation Amount": "Donation amount",
    "Continue to Donation": "Donate",
    "Donation Refund Cancellation File": "Donation refund cancellation document",
    "Enter amount": "Enter an amount",
    "Custom donation amount": "Custom donation amount",
    "Choose donation category": "Choose a donation category",
    "Choose donation amount": "Choose a donation amount",
    "Donation Details": "Donation details",
    "Complete Your Donation": "Complete your donation",
    "Fill in your details and continue to donation": "Fill in your details and continue securely",
    "Donation Category": "Donation category",
    "Additional Notes": "Additional notes",
    "You may add a request or note for the donation": "You may add a request, dedication, or note",
    "Credit Card Details": "Credit card details",
    "This area is ready to connect to the payment terminal. During integration we will replace these fields or connect them to the secure token/payment terminal of the clearing company, without storing card details on the site.": "Payment is handled through secure fields. Credit card details are not stored on the site and are not sent to Google Sheets.",
    "Card Number": "Card number",
    "Cardholder Name": "Cardholder name",
    "Expiry": "Expiration date",
    "CVV": "CVV",
    "After Google Sheets is connected, the details will be saved automatically in the sheet. Credit card details are not saved in the sheet.": "Donation details are saved for follow-up and records. Credit card details are never saved in the sheet.",
    "Summary": "Summary",
    "Category": "Category",
    "Amount": "Amount",
    "After receiving the terminal details, we will connect this button to real payment processing.": "The payment will be processed securely through the connected clearing terminal.",
    "Main navigation": "Main navigation",
    "Secure payment fields are loading...": "Loading secure payment fields...",
    "Secure fields are ready for payment.": "Secure payment fields are ready.",
    "Creating a secure approval with Tranzila...": "Creating a secure payment session...",
    "Sending to the clearing company...": "Sending payment securely...",
    "The donation was received successfully. Thank you very much!": "Your donation was received successfully. Thank you very much!",
    "We could not complete the payment. Please check the details or try again.": "We could not complete the payment. Please check the details and try again.",

    "בואו להיות שותפים בתורת ארץ ישראל": "Become a partner in Torah rooted in the Land of Israel",
    "יחד מחזקים לומדי תורה, כוללים, שיעורים והפצת ספרים בארץ ישראל.": "Together, we strengthen Torah learning, kollelim, classes, and sacred publishing across the Land of Israel.",
    "עמותת תורה ברורה": "Torah Brura Organization",
    "הישיבה": "Our Vision",
    "מוקדי תורה": "Torah centers",
    "לומדים ושומעי שיעורים": "learners and class participants",
    "קול תורה בארץ ישראל": "A living voice of Torah in Israel",
    "שותפות שמחזיקה עולם": "A partnership that sustains a Torah world",
    "החזון": "Vision",
    "החזון שלנו: בונים את קומת העתיד של עם ישראל בארצו": "Our Vision: Building the next chapter of Am Yisrael in its land",
    "היסודות": "Foundations",
    "השורשים": "Roots",
    "הפירות": "Fruits",
    "העוצמה": "Strength",
    "העשייה": "Action",
    "תרומה לכוללים": "Support the kollelim",
    "תרומה ליישוב הארץ": "Support settling the land",
    "הוצאת ספרי קודש": "Publish sacred Torah books",
    "חיזוק העלייה לארץ": "Strengthen aliyah to Israel",
    "פרטי אשראי": "Credit card details",
    "תרומה": "Donate",
    "המשך לתרומה": "Donate",
    "מבצע תשלום מאובטח...": "Processing secure payment...",
    "טוען שדות סליקה מאובטחים...": "Loading secure payment fields...",
    "השדות המאובטחים מוכנים לתשלום.": "Secure payment fields are ready.",
    "יוצר אישור מאובטח מול Tranzila...": "Creating a secure payment session...",
    "שולח לחברת הסליקה...": "Sending payment securely...",
    "התרומה נקלטה בהצלחה. תודה רבה!": "Your donation was received successfully. Thank you very much!",
    "לא הצלחנו להשלים את התשלום. בדקו את הפרטים או נסו שוב.": "We could not complete the payment. Please check the details and try again."
  };

  function trim(value) {
    return (value || "").replace(/\s+/g, " ").trim();
  }

  function isEnglish() {
    return document.documentElement.lang === "en" || document.body.getAttribute("data-lang") === "en";
  }

  function replaceValue(value) {
    var clean = trim(value);
    return COPY[clean] || value;
  }

  function polishTextNode(node) {
    var next = replaceValue(node.nodeValue);
    if (next !== node.nodeValue) {
      var leading = (node.nodeValue.match(/^\s*/) || [""])[0];
      var trailing = (node.nodeValue.match(/\s*$/) || [""])[0];
      node.nodeValue = leading + next + trailing;
    }
  }

  function polishAttributes(element) {
    ["placeholder", "aria-label", "title", "value"].forEach(function (attr) {
      if (!element.hasAttribute || !element.hasAttribute(attr)) return;
      var current = element.getAttribute(attr);
      var next = replaceValue(current);
      if (next !== current) element.setAttribute(attr, next);
    });
    if ((element.tagName === "INPUT" || element.tagName === "TEXTAREA") && element.value) {
      if (!element.dataset.heValue && /[\u0590-\u05ff]/.test(element.value)) {
        element.dataset.heValue = element.value;
      }
      var valueNext = replaceValue(element.value);
      if (valueNext !== element.value) element.value = valueNext;
    }
  }

  function polishEnglish() {
    if (!isEnglish() || !document.body) return;
    document.documentElement.dir = "ltr";
    document.body.setAttribute("dir", "ltr");
    if (!document.getElementById("torabrura-polished-english-style")) {
      var style = document.createElement("style");
      style.id = "torabrura-polished-english-style";
      style.textContent = [
        "html[lang='en'] body{direction:ltr;text-align:left}",
        "html[lang='en'] .top-nav,html[lang='en'] .site-header,html[lang='en'] .vision-actions{direction:ltr}",
        "html[lang='en'] .checkout-form label,html[lang='en'] .checkout-note,html[lang='en'] .summary-row{direction:ltr;text-align:left}",
        "html[lang='en'] input,html[lang='en'] textarea,html[lang='en'] select{direction:ltr;text-align:left}",
        "html[lang='en'] .logo{direction:ltr}"
      ].join("\n");
      document.head.appendChild(style);
    }

    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        var parent = node.parentElement;
        if (!parent || ["SCRIPT", "STYLE", "NOSCRIPT"].indexOf(parent.tagName) !== -1) {
          return NodeFilter.FILTER_REJECT;
        }
        return trim(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(polishTextNode);
    document.querySelectorAll("[placeholder], [aria-label], [title], [value], input, textarea, option, button").forEach(polishAttributes);

    var title = replaceValue(document.title);
    if (title !== document.title) document.title = title;
  }

  function schedulePolish() {
    window.clearTimeout(window.__torabruraPolishTimer);
    window.__torabruraPolishTimer = window.setTimeout(polishEnglish, 25);
  }

  document.addEventListener("click", function (event) {
    if (event.target.closest && event.target.closest("[data-language-toggle], .language-toggle")) {
      window.setTimeout(schedulePolish, 40);
    }
  }, true);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", schedulePolish);
  } else {
    schedulePolish();
  }

  new MutationObserver(schedulePolish).observe(document.documentElement, {
    childList: true,
    subtree: true,
    characterData: true,
    attributes: true,
    attributeFilter: ["lang", "data-lang", "value", "placeholder", "aria-label", "title"]
  });
})();
