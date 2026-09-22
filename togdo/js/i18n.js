(function () {
  "use strict";

  var STORAGE_KEY = "togdo-lang";

  var LANGS = {
    ko: { label: "한국어", flag: "assets/flags/kr.svg", code: "KO" },
    en: { label: "English", flag: "assets/flags/gb.svg", code: "EN" },
    de: { label: "Deutsch", flag: "assets/flags/de.svg", code: "DE" }
  };

  var STRINGS = {
    ko: {
      "meta.title": "Togdo — 친구와 함께 끝내는 루틴 앱",
      "meta.description": "혼자서는 작심삼일인 루틴도 친구와 함께라면 끝까지. 잠금화면에서 친구를 응원하는 소셜 루틴 앱, Togdo.",
      "nav.features": "기능",
      "nav.how": "사용법",
      "nav.pricing": "요금",
      "lang.button": "언어 선택",
      "hero.title": "혼자선 작심삼일,<br>친구와 함께면 끝까지.",
      "hero.subtitle": "Togdo는 할 일을 '잘'하는 것보다 '끝내는' 데 집중하는 소셜 루틴 앱이에요. 친구의 진행 상황을 잠금화면에서 보고, 한 번의 탭으로 응원하세요.",
      "hero.cta": "출시 알림 받기",
      "hero.appstore": "App Store · 곧 출시",
      "hero.playstore": "Google Play · 곧 출시",
      "mock.today": "오늘",
      "mock.task1": "물 2L 마시기",
      "mock.task2": "영어 단어 20개",
      "mock.task3": "출근길 절망하지 않기",
      "mock.progressLabel": "오늘의 루틴",
      "mock.progressCount": "3개 중 2개 완료",
      "mock.progressHint": "하나만 더 하면 오늘 끝!",
      "mock.reactionText": "민지가 응원했어요",
      "mock.reactionCta": "응원 보내기",
      "mock.friendsTitle": "친구들의 오늘",
      "mock.friendsViewAll": "모두 보기",
      "mock.friendsInvite": "초대",
      "mock.friend1Label": "민지 80%",
      "mock.friend2Label": "준호 40%",
      "mock.friend3Label": "Lena 완료",
      "mock.navToday": "오늘",
      "mock.navProjects": "프로젝트",
      "mock.navFriends": "친구",
      "mock.navReports": "리포트",
      "mock.watchProgress": "오늘 2/3",
      "mock.watchRemaining": "하나 남음",
      "mock.watchAction": "출근길 절망하지 않기",
      "problem.title": "생산성 앱은 많은데, 왜 늘 흐지부지될까요?",
      "problem.body": "기능이 부족해서가 아니에요. 혼자라서 그래요. 목표를 누군가와 나누면 끝까지 해낼 가능성이 훨씬 높아집니다.",
      "features.title": "끝까지 가게 만드는 기능들",
      "f1.title": "오늘의 루틴",
      "f1.body": "매일 반복하는 할 일을 간단하게. 복잡한 설정 없이 바로 시작해요.",
      "f2.title": "한눈에 보는 달성률",
      "f2.body": "오늘의 진행 상황과 프로젝트별 달성 현황을 한 화면에서 확인해요.",
      "f3.title": "잠금화면에서 바로 응원",
      "f3.body": "앱을 열 필요 없이 위젯에서 친구에게 리액션을 보내요.",
      "f4.title": "살짝 등 떠미는 알림",
      "f4.body": "잊을 만하면 찾아오는 알림이 오늘의 루틴을 끝까지 챙겨줘요.",
      "f5.title": "친구와 챌린지",
      "f5.body": "친구들과 함께 30일 챌린지를 시작해 보세요.",
      "f6.title": "나만의 패턴 분석",
      "f6.body": "언제, 얼마나 해내는지 분석해 나에게 맞는 루틴 배치를 제안해요.",
      "how.title": "시작은 세 단계면 충분해요",
      "s1.title": "루틴 만들기",
      "s1.body": "오늘 하고 싶은 일을 몇 개만 적어보세요.",
      "s2.title": "친구 초대하기",
      "s2.body": "함께할 친구를 초대하세요.",
      "s3.title": "함께 끝내기",
      "s3.body": "서로의 진행 상황을 보며 응원하고, 끝까지 가요.",
      "pricing.title": "무료로 시작하세요",
      "free.name": "Free",
      "free.price": "€0",
      "free.f1": "프로젝트 3개",
      "free.f2": "하루 할 일 10개",
      "free.f3": "친구 3명 연결",
      "free.f4": "기본 달성 통계",
      "premium.name": "Premium",
      "premium.price": "월 €3.49",
      "premium.yearly": "또는 연 €26.99 (약 36% 할인)",
      "premium.f1": "프로젝트·할 일 무제한",
      "premium.f2": "주간·월간 상세 리포트",
      "premium.f3": "AI 루틴 코칭",
      "premium.f4": "위젯 테마 커스터마이징",
      "premium.f5": "친구 무제한 & 그룹 챌린지",
      "pricing.note": "출시 예정 가격이며 변경될 수 있어요.",
      "cta.title": "곧 만나요.",
      "cta.body": "iOS와 Android 출시를 준비하고 있어요. 출시 소식을 가장 먼저 받아보세요.",
      "cta.button": "출시 알림 받기",
      "footer.imprint": "Impressum (법적 고지)",
      "footer.privacy": "개인정보처리방침"
    },
    en: {
      "meta.title": "Togdo — Finish your routines, together",
      "meta.description": "A social routine app that helps you actually finish what you start — with friends cheering you on right from your lock screen.",
      "nav.features": "Features",
      "nav.how": "How it works",
      "nav.pricing": "Pricing",
      "lang.button": "Choose language",
      "hero.title": "Finish what you start —<br>together.",
      "hero.subtitle": "Togdo is a social routine app that cares less about doing things perfectly and more about getting them done. See your friends' progress on your lock screen and cheer them on with a single tap.",
      "hero.cta": "Get notified at launch",
      "hero.appstore": "App Store · Coming soon",
      "hero.playstore": "Google Play · Coming soon",
      "mock.today": "Today",
      "mock.task1": "Drink 2 L of water",
      "mock.task2": "Learn 20 new words",
      "mock.task3": "Not to Despair on the Way to Work",
      "mock.progressLabel": "Today's routines",
      "mock.progressCount": "2 of 3 done",
      "mock.progressHint": "One more to finish today!",
      "mock.reactionText": "Mia cheered you on",
      "mock.reactionCta": "Send cheer",
      "mock.friendsTitle": "Friends today",
      "mock.friendsViewAll": "View all",
      "mock.friendsInvite": "Invite",
      "mock.friend1Label": "Mia 80%",
      "mock.friend2Label": "Alex 40%",
      "mock.friend3Label": "Lena done",
      "mock.navToday": "Today",
      "mock.navProjects": "Projects",
      "mock.navFriends": "Friends",
      "mock.navReports": "Reports",
      "mock.watchProgress": "Today 2/3",
      "mock.watchRemaining": "One left",
      "mock.watchAction": "Not to Despair on the Way to Work",
      "problem.title": "So many productivity apps. Why do routines still fizzle out?",
      "problem.body": "It's not a lack of features — it's doing it alone. Share your goals with someone, and you're far more likely to follow through.",
      "features.title": "Built to get you over the finish line",
      "f1.title": "Daily routines",
      "f1.body": "Simple, repeating to-dos. No complicated setup — just start.",
      "f2.title": "Progress at a glance",
      "f2.body": "See today's progress and every project's completion on one screen.",
      "f3.title": "Cheer from your lock screen",
      "f3.body": "React to your friends right from the widget — no need to open the app.",
      "f4.title": "Friendly nudges",
      "f4.body": "Well-timed reminders that keep you going until the last task is done.",
      "f5.title": "Challenges with friends",
      "f5.body": "Kick off a 30-day challenge with your friends.",
      "f6.title": "Personal insights",
      "f6.body": "Togdo learns when you get things done and suggests a routine that fits you.",
      "how.title": "Three steps. That's it.",
      "s1.title": "Set your routine",
      "s1.body": "Add a few things you want to get done today.",
      "s2.title": "Invite friends",
      "s2.body": "Bring in the people who'll keep you honest.",
      "s3.title": "Finish together",
      "s3.body": "Follow each other's progress and cheer each other on.",
      "pricing.title": "Start for free",
      "free.name": "Free",
      "free.price": "€0",
      "free.f1": "Up to 3 projects",
      "free.f2": "Up to 10 daily tasks",
      "free.f3": "Connect with up to 3 friends",
      "free.f4": "Basic progress stats",
      "premium.name": "Premium",
      "premium.price": "€3.49 / month",
      "premium.yearly": "or €26.99 / year (save ~36%)",
      "premium.f1": "Unlimited projects & tasks",
      "premium.f2": "Detailed weekly & monthly reports",
      "premium.f3": "AI routine coaching",
      "premium.f4": "Custom widget themes",
      "premium.f5": "Unlimited friends & group challenges",
      "pricing.note": "Planned pricing — subject to change.",
      "cta.title": "Coming soon.",
      "cta.body": "Togdo is launching on iOS and Android. Be the first to know.",
      "cta.button": "Get notified at launch",
      "footer.imprint": "Imprint",
      "footer.privacy": "Privacy policy"
    },
    de: {
      "meta.title": "Togdo – Routinen gemeinsam durchziehen",
      "meta.description": "Die soziale Routine-App, mit der du Vorhaben wirklich durchziehst – und deine Freunde dich direkt vom Sperrbildschirm aus anfeuern.",
      "nav.features": "Funktionen",
      "nav.how": "So funktioniert's",
      "nav.pricing": "Preise",
      "lang.button": "Sprache wählen",
      "hero.title": "Dranbleiben ist leichter –<br>gemeinsam.",
      "hero.subtitle": "Bei Togdo geht es nicht um Perfektion, sondern ums Erledigen. Sieh den Fortschritt deiner Freunde direkt auf dem Sperrbildschirm und feuere sie mit einem Tipp an.",
      "hero.cta": "Zum Start benachrichtigen",
      "hero.appstore": "App Store · Bald verfügbar",
      "hero.playstore": "Google Play · Bald verfügbar",
      "mock.today": "Heute",
      "mock.task1": "2 L Wasser trinken",
      "mock.task2": "20 Vokabeln lernen",
      "mock.task3": "Nicht verzweifeln auf dem Weg zur Arbeit",
      "mock.progressLabel": "Deine Routinen heute",
      "mock.progressCount": "2 von 3 erledigt",
      "mock.progressHint": "Nur noch eine – dann geschafft!",
      "mock.reactionText": "Mia hat dich angefeuert",
      "mock.reactionCta": "Anfeuern senden",
      "mock.friendsTitle": "Freunde heute",
      "mock.friendsViewAll": "Alle ansehen",
      "mock.friendsInvite": "Einladen",
      "mock.friend1Label": "Mia 80%",
      "mock.friend2Label": "Alex 40%",
      "mock.friend3Label": "Lena fertig",
      "mock.navToday": "Heute",
      "mock.navProjects": "Projekte",
      "mock.navFriends": "Freunde",
      "mock.navReports": "Berichte",
      "mock.watchProgress": "Heute 2/3",
      "mock.watchRemaining": "Eine übrig",
      "mock.watchAction": "Nicht verzweifeln auf dem Weg zur Arbeit",
      "problem.title": "So viele Produktivitäts-Apps. Warum schlafen Routinen trotzdem ein?",
      "problem.body": "Nicht wegen fehlender Funktionen, sondern weil man es allein versucht. Wer seine Ziele mit anderen teilt, zieht sie deutlich eher durch.",
      "features.title": "Gemacht, damit du dranbleibst",
      "f1.title": "Tägliche Routinen",
      "f1.body": "Wiederkehrende Aufgaben, ganz einfach. Ohne komplizierte Einrichtung.",
      "f2.title": "Fortschritt auf einen Blick",
      "f2.body": "Tagesfortschritt und Projektstand auf einem Bildschirm.",
      "f3.title": "Anfeuern vom Sperrbildschirm",
      "f3.body": "Reagiere direkt im Widget auf deine Freunde – ohne die App zu öffnen.",
      "f4.title": "Freundliche Schubser",
      "f4.body": "Gut getimte Erinnerungen, die dich bis zur letzten Aufgabe begleiten.",
      "f5.title": "Challenges mit Freunden",
      "f5.body": "Starte mit deinen Freunden eine 30-Tage-Challenge.",
      "f6.title": "Persönliche Einblicke",
      "f6.body": "Togdo erkennt, wann du am produktivsten bist, und schlägt dir eine passende Routine vor.",
      "how.title": "Drei Schritte. Mehr nicht.",
      "s1.title": "Routine anlegen",
      "s1.body": "Trag ein paar Dinge ein, die du heute erledigen willst.",
      "s2.title": "Freunde einladen",
      "s2.body": "Lade die Leute ein, die dich bei der Stange halten.",
      "s3.title": "Gemeinsam durchziehen",
      "s3.body": "Verfolgt gegenseitig euren Fortschritt und feuert euch an.",
      "pricing.title": "Kostenlos starten",
      "free.name": "Free",
      "free.price": "0 €",
      "free.f1": "Bis zu 3 Projekte",
      "free.f2": "Bis zu 10 Aufgaben pro Tag",
      "free.f3": "Bis zu 3 Freunde",
      "free.f4": "Einfache Statistiken",
      "premium.name": "Premium",
      "premium.price": "3,49 € / Monat",
      "premium.yearly": "oder 26,99 € / Jahr (ca. 36 % günstiger)",
      "premium.f1": "Unbegrenzte Projekte & Aufgaben",
      "premium.f2": "Ausführliche Wochen- & Monatsberichte",
      "premium.f3": "KI-Routine-Coaching",
      "premium.f4": "Eigene Widget-Designs",
      "premium.f5": "Unbegrenzt Freunde & Gruppen-Challenges",
      "pricing.note": "Geplante Preise – Änderungen vorbehalten.",
      "cta.title": "Bald verfügbar.",
      "cta.body": "Togdo erscheint bald für iOS und Android. Sei unter den Ersten, die davon erfahren.",
      "cta.button": "Zum Start benachrichtigen",
      "footer.imprint": "Impressum",
      "footer.privacy": "Datenschutz"
    }
  };

  var SUPPORTED = Object.keys(LANGS);

  function getString(lang, key) {
    var table = STRINGS[lang];
    if (table && Object.prototype.hasOwnProperty.call(table, key)) {
      return table[key];
    }
    console.warn("[i18n] Missing key \"" + key + "\" for lang \"" + lang + "\", falling back to English.");
    var fallback = STRINGS.en;
    if (fallback && Object.prototype.hasOwnProperty.call(fallback, key)) {
      return fallback[key];
    }
    return "";
  }

  function detectInitialLang() {
    try {
      var params = new URLSearchParams(window.location.search);
      var urlLang = params.get("lang");
      if (urlLang && SUPPORTED.indexOf(urlLang) !== -1) {
        return urlLang;
      }
    } catch (e) {
      /* ignore */
    }

    try {
      var stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored && SUPPORTED.indexOf(stored) !== -1) {
        return stored;
      }
    } catch (e) {
      /* localStorage unavailable */
    }

    var navLangs = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || ""];
    for (var i = 0; i < navLangs.length; i++) {
      var code = (navLangs[i] || "").toLowerCase();
      if (code.indexOf("ko") === 0) {
        return "ko";
      }
      if (code.indexOf("de") === 0) {
        return "de";
      }
    }

    return "ko";
  }

  function applyLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) {
      lang = "en";
    }

    document.documentElement.lang = lang;

    var textNodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < textNodes.length; i++) {
      var key = textNodes[i].getAttribute("data-i18n");
      textNodes[i].textContent = getString(lang, key);
    }

    var htmlNodes = document.querySelectorAll("[data-i18n-html]");
    for (var j = 0; j < htmlNodes.length; j++) {
      var htmlKey = htmlNodes[j].getAttribute("data-i18n-html");
      htmlNodes[j].innerHTML = getString(lang, htmlKey);
    }

    var attrNodes = document.querySelectorAll("[data-i18n-attr]");
    for (var k = 0; k < attrNodes.length; k++) {
      var spec = attrNodes[k].getAttribute("data-i18n-attr");
      var parts = spec.split(",");
      for (var p = 0; p < parts.length; p++) {
        var pair = parts[p].split(":");
        if (pair.length !== 2) {
          continue;
        }
        var attrName = pair[0].trim();
        var attrKey = pair[1].trim();
        attrNodes[k].setAttribute(attrName, getString(lang, attrKey));
      }
    }

    document.title = getString(lang, "meta.title");

    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", getString(lang, "meta.description"));
    }

    updateLangSwitcherUI(lang);
  }

  function updateLangSwitcherUI(lang) {
    var toggleFlag = document.getElementById("lang-toggle-flag");
    var toggleCode = document.getElementById("lang-toggle-code");
    if (toggleFlag) {
      toggleFlag.setAttribute("src", LANGS[lang].flag);
    }
    if (toggleCode) {
      toggleCode.textContent = LANGS[lang].code;
    }

    var options = document.querySelectorAll(".lang-option");
    for (var i = 0; i < options.length; i++) {
      var isSelected = options[i].getAttribute("data-lang") === lang;
      options[i].setAttribute("aria-selected", isSelected ? "true" : "false");
    }
  }

  function updateUrlLang(lang) {
    try {
      var url = new URL(window.location.href);
      url.searchParams.set("lang", lang);
      window.history.replaceState(window.history.state, "", url);
    } catch (e) {
      /* URL API unavailable */
    }
  }

  function initLangSwitcher() {
    var toggle = document.getElementById("lang-toggle");
    var menu = document.getElementById("lang-menu");
    if (!toggle || !menu) {
      return;
    }

    var options = menu.querySelectorAll(".lang-option");

    function openMenu() {
      menu.hidden = false;
      toggle.setAttribute("aria-expanded", "true");
    }

    function closeMenu(focusToggle) {
      menu.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
      if (focusToggle) {
        toggle.focus();
      }
    }

    toggle.addEventListener("click", function () {
      if (menu.hidden) {
        openMenu();
        if (options.length) {
          options[0].focus();
        }
      } else {
        closeMenu(false);
      }
    });

    options.forEach(function (option) {
      option.addEventListener("click", function () {
        var lang = option.getAttribute("data-lang");
        try {
          window.localStorage.setItem(STORAGE_KEY, lang);
        } catch (e) {
          /* localStorage unavailable */
        }
        applyLang(lang);
        updateUrlLang(lang);
        closeMenu(true);
      });

      option.addEventListener("keydown", function (event) {
        var optionsArr = Array.prototype.slice.call(options);
        var idx = optionsArr.indexOf(event.currentTarget);
        if (event.key === "ArrowDown") {
          event.preventDefault();
          var next = optionsArr[idx + 1] || optionsArr[0];
          next.focus();
        } else if (event.key === "ArrowUp") {
          event.preventDefault();
          var prev = optionsArr[idx - 1] || optionsArr[optionsArr.length - 1];
          prev.focus();
        } else if (event.key === "Escape") {
          event.preventDefault();
          closeMenu(true);
        } else if (event.key === "Tab") {
          closeMenu(false);
        }
      });
    });

    document.addEventListener("click", function (event) {
      if (!menu.hidden && !menu.contains(event.target) && event.target !== toggle) {
        closeMenu(false);
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !menu.hidden) {
        closeMenu(true);
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initLangSwitcher();
    applyLang(detectInitialLang());
  });
})();
