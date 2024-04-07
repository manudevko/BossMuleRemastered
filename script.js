// ============= GLOBAL VARIABLES ============= //

const global = {
  DOM: {
    popUps: {
      createCharacterPopup: document.querySelector('#create-characters-popup'),
      createCharacterForm: {
        characterForm: document.querySelector('#character-form'),
        ignInput: document.querySelector('#name'),
        submitCharBtn: document.querySelector('#submit-char'),
      },
      bossesPopup: document.querySelector('#bossesPopup'),
      bossFromPopup: document.querySelectorAll('#bossesPopup .boss'),
      bossPopupDifficultyTags: document.querySelectorAll('#bossesPopup p'),
      editCharacterSection: document.querySelector('#characters-popup'),
    },
    buttons: {
      createCharacterBtn: document.querySelector('#create-character'),
      deleteCharacterButtons: null,
      editCharacterButtons: null,
    },
    mainContent: document.querySelector('#content'),
    charactersSection: document.querySelector('#characters'),
    totalMesosWeb: document.querySelector('#total-mesos'),
    totalCrystals: document.querySelector('#total-crystals'),
  },
  editing: false,
  charBosses: [],
  charIGN: '',
  availableCrystals: 180,
  bosses: {
    CygnusE: {
      Name: 'Cygnus',
      Price: 45562500,
      IMG: './assets/cygnus.webp',
      Difficulty: 'Easy',
    },
    Hilla: {
      Name: 'Hilla',
      Price: 56250000,
      IMG: './assets/hilla.webp',
      Difficulty: 'Hard',
    },
    Pinkbean: {
      Name: 'PinkBean',
      Price: 64000000,
      IMG: './assets/pb.webp',
      Difficulty: 'Chaos',
    },
    CygnusN: {
      Name: 'Cygnus',
      Price: 72250000,
      IMG: './assets/cygnus.webp',
      Difficulty: 'Normal',
    },
    Zakum: {
      Name: 'Zakum',
      Price: 81000000,
      IMG: './assets/zakum.webp',
      Difficulty: 'Chaos',
    },
    Queen: {
      Name: 'Queen',
      Price: 81000000,
      IMG: './assets/queen.webp',
      Difficulty: 'Chaos',
    },
    Pierre: {
      Name: 'Pierre',
      Price: 81000000,
      IMG: './assets/pierre.webp',
      Difficulty: 'Chaos',
    },
    Vonbon: {
      Name: 'Vonbon',
      Price: 81000000,
      IMG: './assets/vonbon.webp',
      Difficulty: 'Chaos',
    },
    Pno: {
      Name: 'PNO',
      Price: 81000000,
      IMG: './assets/pno.webp',
      Difficulty: 'Normal',
    },
    Magnus: {
      Name: 'Magnus',
      Price: 95062500,
      IMG: './assets/magnus.webp',
      Difficulty: 'Hard',
    },
    Vellum: {
      Name: 'Vellum',
      Price: 105062500,
      IMG: './assets/vellum.webp',
      Difficulty: 'Chaos',
    },
    Papulatus: {
      Name: 'Papulatus',
      Price: 132250000,
      IMG: './assets/pap.webp',
      Difficulty: 'Chaos',
    },
    Akechi: {
      Name: 'Akechi',
      Price: 144000000,
      IMG: './assets/akechi.webp',
      Difficulty: 'Normal',
    },
    LotusN: {
      Name: 'Lotus',
      Price: 162562500,
      IMG: './assets/lotus.webp',
      Difficulty: 'Normal',
    },
    DamienN: {
      Name: 'Damien',
      Price: 169000000,
      IMG: './assets/damien.webp',
      Difficulty: 'Normal',
    },
    SlimeN: {
      Name: 'Slime',
      Price: 171610000,
      IMG: './assets/slime.webp',
      Difficulty: 'Normal',
    },
    LucidE: {
      Name: 'Lucid',
      Price: 175562500,
      IMG: './assets/lucid.webp',
      Difficulty: 'Easy',
    },
    WillE: {
      Name: 'Will',
      Price: 191275000,
      IMG: './assets/will.webp',
      Difficulty: 'Easy',
    },
    LucidN: {
      Name: 'Lucid',
      Price: 203062500,
      IMG: './assets/lucid.webp',
      Difficulty: 'Normal',
    },
    WillN: {
      Name: 'Will',
      Price: 232562500,
      IMG: './assets/will.webp',
      Difficulty: 'Normal',
    },
    GloomN: {
      Name: 'Gloom',
      Price: 248062500,
      IMG: './assets/gloom.webp',
      Difficulty: 'Normal',
    },
    DarknellN: {
      Name: 'Darknell',
      Price: 264062500,
      IMG: './assets/darknell.webp',
      Difficulty: 'Normal',
    },
    DamienH: {
      Name: 'Damien',
      Price: 351562500,
      IMG: './assets/damien.webp',
      Difficulty: 'Hard',
    },
    LotusH: {
      Name: 'Lotus',
      Price: 370562500,
      IMG: './assets/lotus.webp',
      Difficulty: 'Hard',
    },
    LucidH: {
      Name: 'Lucid',
      Price: 400000000,
      IMG: './assets/lucid.webp',
      Difficulty: 'Hard',
    },
    WillH: {
      Name: 'Will',
      Price: 441000000,
      IMG: './assets/will.webp',
      Difficulty: 'Easy',
    },
    VhillaN: {
      Name: 'VHilla',
      Price: 447600000,
      IMG: './assets/vhilla.webp',
      Difficulty: 'Normal',
    },
    SlimeC: {
      Name: 'Slime',
      Price: 451562500,
      IMG: './assets/slime.webp',
      Difficulty: 'Chaos',
    },
    GloomC: {
      Name: 'Gloom',
      Price: 462250000,
      IMG: './assets/gloom.webp',
      Difficulty: 'Chaos',
    },
    DarkenllH: {
      Name: 'Darknell',
      Price: 484000000,
      IMG: './assets/darknell.webp',
      Difficulty: 'Hard',
    },
    VhillaH: {
      Name: 'VHilla',
      Price: 552250000,
      IMG: './assets/vhilla.webp',
      Difficulty: 'Hard',
    },
    SerenN: {
      Name: 'Seren',
      Price: 668437500,
      IMG: './assets/seren.webp',
      Difficulty: 'Normal',
    },
    KalosE: {
      Name: 'Kalos',
      Price: 750000000,
      IMG: './assets/kalos.webp',
      Difficulty: 'Easy',
    },
    SerenH: {
      Name: 'Seren',
      Price: 756250000,
      IMG: './assets/seren.webp',
      Difficulty: 'Hard',
    },
    KalingE: {
      Name: 'Kaling',
      Price: 825000000,
      IMG: './assets/kaling.webp',
      Difficulty: 'Easy',
    },
    KalosN: {
      Name: 'Kalos',
      Price: 1000000000,
      IMG: './assets/kalos.webp',
      Difficulty: 'Normal',
    },
    KalingN: {
      Name: 'Kaling',
      Price: 1150000000,
      IMG: './assets/kaling.webp',
      Difficulty: 'Normal',
    },
    KalosC: {
      Name: 'Kalos',
      Price: 2000000000,
      IMG: './assets/kalos.webp',
      Difficulty: 'Chaos',
    },
    KalingH: {
      Name: 'Kaling',
      Price: 2300000000,
      IMG: './assets/kaling.webp',
      Difficulty: 'Hard',
    },
    BlackmageH: {
      Name: 'BlackMage',
      Price: 2500000000,
      IMG: './assets/blackmage.webp',
      Difficulty: 'Hard',
    },
    SerenEx: {
      Name: 'Seren',
      Price: 3025000000,
      IMG: './assets/seren.webp',
      Difficulty: 'Extreme',
    },
    KalosEx: {
      Name: 'Kalos',
      Price: 4000000000,
      IMG: './assets/kalos.webp',
      Difficulty: 'Extreme',
    },
    KalingEx: {
      Name: 'Kaling',
      Price: 4600000000,
      IMG: './assets/kaling.webp',
      Difficulty: 'Extreme',
    },
    BlackmageEx: {
      Name: 'BlackMage',
      Price: 10000000000,
      IMG: './assets/blackmage.webp',
      Difficulty: 'Extreme',
    },
  },
};

// ============= FUNCTIONS ============= //

//Function used to create a new character including the bossesDefeated that week.
const createChar = (charName, bossesDefeated) => {
  const charWrapper = document.createElement('div');
  const charInfoWrapper = document.createElement('div');
  const charImg = document.createElement('img');
  const charIGN = document.createElement('p');
  const charHr = document.createElement('hr');
  const charMesosGenerated = document.createElement('p');
  const bossTable = document.createElement('table');
  const bTableHead = document.createElement('thead');
  const bTHeadTr = document.createElement('tr');
  const bTHeadBossName = document.createElement('th');
  const bTHeadDifficulty = document.createElement('th');
  const bTheadParty = document.createElement('th');
  const bTHeadMesos = document.createElement('th');
  const headThs = [bTHeadBossName, bTHeadDifficulty, bTheadParty, bTHeadMesos];
  const bossTBody = document.createElement('tbody');
  const charFinishedLabel = document.createElement('label');
  const charFinishedButton = document.createElement('div');
  const charFinishedText = document.createElement('span');
  const charManageButtons = document.createElement('div');
  const editCharacterButton = document.createElement('div');
  const editCharacterButtonIcon = document.createElement('img');
  const editCharacterButtonText = document.createElement('p');
  const deleteCharacterButton = document.createElement('img');
  let totalCharMesosGenerated = 0;
  let borderBottom = true;
  const charInfo = {
    charHTML: '',
    charIGN: charName,
    bossesDefeated: [],
  };

  //Adding all tailwind classes & attributes if needed

  charWrapper.classList.add('flex', 'flex-col', 'gap-y-3', 'text-white');

  charInfoWrapper.classList.add(
    'character',
    'flex',
    'flex-col',
    'justify-center',
    'items-center',
    'gap-y-3'
  );

  charMesosGenerated.classList.add('char-mesos');

  charImg.classList.add('h-16', 'ms-avatar');

  charIGN.classList.add('text-md');

  bossTable.classList.add(
    'text-center',
    'block',
    'bg-custom-gray',
    'border-2',
    'overflow-x-scroll',
    'border-gray-600',
    'rounded'
  );

  bTableHead.classList.add(
    'block',
    'uppercase',
    'w-max',
    'bg-gray-600',
    'text-xs',
    'border-b',
    'border-gray-600'
  );

  headThs.forEach((Th) => {
    Th.classList.add('px-6', 'py-3');
    bTHeadTr.appendChild(Th);
  });

  bossTBody.classList.add(
    'flex',
    'flex-col',
    'text-xs',
    'w-max',
    'xl:text-sm',
    'tbodychar',
    'bg-gray-800'
  );

  charFinishedLabel.classList.add(
    'char-finished',
    'inline-flex',
    'items-center',
    'cursor-pointer'
  );

  charFinishedButton.classList.add(
    'relative',
    'w-11',
    'h-6',
    'rounded-full',
    'bg-gray-700',
    'border-gray-600',
    "after:content-['']",
    'after:absolute',
    'after:top-[2px]',
    'after:start-[2px]',
    'after:bg-white',
    'after:border-gray-300',
    'after:border',
    'after:rounded-full',
    'after:h-5',
    'after:w-5',
    'after:transition-all'
  );

  charFinishedText.classList.add(
    'ms-3',
    'text-md',
    'font-bold',
    'text-gray-500'
  );

  charManageButtons.classList.add(
    'flex',
    'gap-2',
    'justify-center',
    'items-center'
  );

  editCharacterButton.classList.add(
    'flex',
    'justify-center',
    'items-center',
    'text-sm',
    'bg-blue-500',
    'cursor-pointer',
    'px-4',
    'py-2',
    'rounded',
    'gap-2',
    'edit-char'
  );

  editCharacterButtonIcon.classList.add('h-3.5');

  deleteCharacterButton.classList.add('h-5', 'cursor-pointer', 'delete-char');

  //Retreiving data and adding onto the character and boss table.

  charIGN.innerText = `IGN: ${charName}`;
  bTHeadBossName.innerText = 'Boss';
  bTHeadDifficulty.innerText = 'Difficulty';
  bTheadParty.innerText = 'Party';
  bTHeadMesos.innerText = 'Mesos';
  charFinishedText.innerText = 'Unfinished';
  editCharacterButtonText.innerText = 'Edit character';
  editCharacterButtonIcon.src = 'assets/icons/settingsw.webp';
  deleteCharacterButton.src = 'assets/icons/delete.png';

  //Counting for figuring out if it's the last boss, if so the Tr SHOULDN'T have a border bottom.
  const bossCount = Object.keys(bossesDefeated).length;
  let cont = 0;

  for (const boss in bossesDefeated) {
    cont++;
    if (global.availableCrystals > 0) {
      totalCharMesosGenerated += bossesDefeated[boss]['Price'];
      //Updating crystals
      global.availableCrystals--;
      if (cont === bossCount) {
        borderBottom = false;
      }
      createBoss(
        boss,
        bossesDefeated[boss]['Difficulty'],
        bossTBody,
        borderBottom
      );
    }
    charInfo.bossesDefeated.push({
      name: bossesDefeated[boss]['Name'],
      difficulty: bossesDefeated[boss]['Difficulty'],
      soloMeso: bossesDefeated[boss]['Price'],
      actualMeso: bossesDefeated[boss]['Price'],
      IMG: bossesDefeated[boss]['IMG'],
    });
  }

  //If there's more than 3 bosses the table will be scrollable
  if (bossTBody.childElementCount > 3) {
    bossTable.classList.add('overflow-y-scroll');
  }

  charMesosGenerated.innerText = `Mesos generated: ${parseInt(
    totalCharMesosGenerated
  ).toLocaleString('en-US')}`;

  //Appending everything together
  //Character finished button
  charFinishedLabel.appendChild(charFinishedButton);
  charFinishedLabel.appendChild(charFinishedText);
  //Character edit button
  editCharacterButton.appendChild(editCharacterButtonIcon);
  editCharacterButton.appendChild(editCharacterButtonText);
  //Manage char buttons div
  charManageButtons.appendChild(charIGN);
  charManageButtons.appendChild(deleteCharacterButton);
  //Charinfo
  charInfoWrapper.appendChild(charImg);
  charInfoWrapper.appendChild(charManageButtons);
  charInfoWrapper.appendChild(editCharacterButton);
  charInfoWrapper.appendChild(charHr);
  charInfoWrapper.appendChild(charMesosGenerated);
  charInfoWrapper.appendChild(charFinishedLabel);
  //Table head
  bTableHead.appendChild(bTHeadTr);
  bossTable.appendChild(bTableHead);
  //TableBody
  bossTable.appendChild(bossTBody);
  //Adding everything onto the main wrapper
  charWrapper.appendChild(charInfoWrapper);
  charWrapper.appendChild(bossTable);
  //Adding the new character to the HTML section
  global.DOM.charactersSection.appendChild(charWrapper);

  charInfo.charHTML = charWrapper.outerHTML;

  return charInfo;
};

//Function to create each boss.
const createBoss = (boss, difficulty, bossesTBody, borderBottom) => {
  const bossTableTr = document.createElement('tr');
  const sameWidthDivImg = document.createElement('div');
  const sameWidthDivDifficulty = document.createElement('div');
  const sameWidthDivMesos = document.createElement('div');
  const sameWidthDivParty = document.createElement('div');
  const inputParty = document.createElement('input');
  const bossImg = document.createElement('img');
  const bossTdImg = document.createElement('td');
  const bossTdDifficulty = document.createElement('td');
  const bossTdParty = document.createElement('td');
  const bossTdMesos = document.createElement('td');
  const bossDivs = [
    sameWidthDivImg,
    sameWidthDivDifficulty,
    sameWidthDivParty,
    sameWidthDivMesos,
  ];
  const bossTds = [bossTdImg, bossTdDifficulty, bossTdParty, bossTdMesos];

  //Adding data to each element &&  Adding tailwind classes.

  sameWidthDivDifficulty.innerText = difficulty;
  addBossBadge(sameWidthDivDifficulty);
  sameWidthDivMesos.innerText = `${parseInt(
    global.bosses[boss]['Price']
  ).toLocaleString('en-US')}`;
  inputParty.classList.add(
    'party-input',
    'w-1/2',
    'bg-gray-700',
    'text-center',
    'text-white',
    'font-bold',
    'rounded'
  );
  inputParty.setAttribute('type', 'number');
  inputParty.setAttribute('min', '1');
  inputParty.setAttribute('max', '6');
  inputParty.setAttribute('value', '1');
  sameWidthDivParty.appendChild(inputParty);

  bossTableTr.classList.add(
    'bg-custom-gray',
    'py-8',
    'flex',
    'justify-between',
    'items-center',
    'font-medium'
  );

  if (borderBottom) {
    bossTableTr.classList.add('border-b', 'border-gray-600');
  }

  bossDivs.forEach((Div) => {
    Div.classList.add('w-100px');
  });

  bossImg.src = `${global.bosses[boss]['IMG']}`;
  bossImg.alt = `${global.bosses[boss]['Name']}`;
  sameWidthDivImg.appendChild(bossImg);
  bossTdImg.appendChild(sameWidthDivImg);
  bossTdDifficulty.appendChild(sameWidthDivDifficulty);
  bossTdParty.appendChild(sameWidthDivParty);
  bossTdMesos.appendChild(sameWidthDivMesos);

  bossTds.forEach((Td) => {
    bossTableTr.appendChild(Td);
  });

  bossImg.classList.add(
    'h-12',
    'border',
    'rounded',
    'border-gray-500',
    'mx-auto'
  );

  bossesTBody.appendChild(bossTableTr);
};

//Function that gets the character IMGs and updates if neccesary
const getCharIMGs = async () => {
  //Getting all char IMG HTML tags
  const charIMGs = document.querySelectorAll('.ms-avatar');
  //Looping through localstorage to update the IMG on localstorage after changing it on the DOM element
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    //Making sure we don't do it for the crystals since it's not a character.
    if (key !== 'Crystals') {
      const charStorage = JSON.parse(localStorage.getItem(key));
      //Looping through all IMG HTML tags so we can match the IGNs and update the correct localstorage character.
      for (const char of charIMGs) {
        const charIGN = char.nextElementSibling.textContent.split('IGN: ')[1];
        if (charStorage.charIGN === charIGN) {
          //Gets the char IMG from Nexon's website
          const response = await fetch(
            `https://api.allorigins.win/get?url=${encodeURIComponent(
              `https://maplestory.nexon.net/api/ranking?id=overall&character_name=${charIGN}`
            )}`
          );
          const data = await response.json();
          //If the response isn't empty we proceed to do something with the data
          if (data.contents) {
            const charIMGURL = JSON.parse(data.contents)[0].CharacterImgUrl;
            char.src = charIMGURL;
            const updatedHTML = char.parentElement.parentElement.outerHTML;
            //We proceed to replace the updatedHTML with the HTML from the localstorage character and save it onto localstorage
            charStorage.charHTML = updatedHTML;
            localStorage.setItem(charIGN, JSON.stringify(charStorage));
          }
        }
      }
    }
  }

  //
};

//Function to add boss-badge styles depending on difficulty

const addBossBadge = (bossTag, type) => {
  const bossTagText = bossTag.innerText;
  switch (bossTagText.toUpperCase()) {
    case 'EASY':
      bossTag.classList.add(
        'bg-gray-500',
        'py-1',
        'px-3',
        `${type === 'form' ? 'rounded-b' : 'rounded'}`
      );
      break;
    case 'NORMAL':
      bossTag.classList.add(
        'bg-cyan-500',
        'py-1',
        'px-3',
        `${type === 'form' ? 'rounded-b' : 'rounded'}`
      );
      break;
    case 'HARD':
      bossTag.classList.add(
        'bg-pink-600',
        'py-1',
        'px-3',
        `${type === 'form' ? 'rounded-b' : 'rounded'}`
      );
      break;
    case 'CHAOS':
      bossTag.classList.add(
        'bg-gray-900',
        'py-1',
        'px-3',
        `${type === 'form' ? 'rounded-b' : 'rounded'}`,
        'text-yellow-100'
      );
      break;
    case 'EXTREME':
      bossTag.classList.add(
        'bg-gray-900',
        'py-1',
        'px-3',
        `${type === 'form' ? 'rounded-b' : 'rounded'}`,
        'text-red-500'
      );
      break;
    default:
  }
};

//Function to update the currency (crystals and mesos)

const updateCurrency = () => {
  let totalMesos = 0;
  const allMesosFrosmChar = document.getElementsByClassName('char-mesos');
  for (const meso of allMesosFrosmChar) {
    const mesoGenerated = meso.innerText
      .split('Mesos generated: ')[1]
      .replace(/[^0-9-.]/g, '');
    totalMesos += parseInt(mesoGenerated);
  }
  global.DOM.totalMesosWeb.innerText = `${parseInt(totalMesos).toLocaleString(
    'en-US'
  )}`;

  global.DOM.totalCrystals.innerText = `${global.availableCrystals}`;
};

//Function that adds event listeners to unfinished buttons and updates the text for finished character checkbox as well as adds a checkbox emoji for every boss image
const characterFinished = () => {
  const finishedButtons = document.querySelectorAll('.char-finished');
  finishedButtons.forEach((finishedButton) => {
    finishedButton.addEventListener('click', function (e) {
      const currentCharIGN =
        e.currentTarget.parentElement.children[1].innerText.split('IGN: ')[1];
      const charLocalStorage = JSON.parse(localStorage.getItem(currentCharIGN));
      const currentState = e.currentTarget.children[1];
      const finishedBtn = e.currentTarget.children[0];
      const bossTrs =
        e.currentTarget.parentElement.parentElement.children[1].children[1]
          .children;
      switch (currentState.innerText) {
        case 'Unfinished':
          finishedBtn.classList.remove('bg-gray-700');
          finishedBtn.classList.add('bg-green-500');
          finishedBtn.classList.add('after:translate-x-full');
          currentState.classList.remove('text-gray-500');
          currentState.classList.add('text-green-500');
          currentState.innerText = 'Finished';
          for (const boss of bossTrs) {
            const bossImg = boss.children[0].children[0].children[0];
            const bossTr = bossImg.parentElement.parentElement.parentElement;
            const bossInput =
              bossImg.parentElement.parentElement.nextElementSibling
                .nextElementSibling.children[0].children[0];
            bossInput.setAttribute('disabled', 'true');
            bossTr.classList.add('grayscale');
          }
          break;
        case 'Finished':
          finishedBtn.classList.add('bg-gray-700');
          finishedBtn.classList.remove('bg-green-500');
          finishedBtn.classList.remove('after:translate-x-full');
          currentState.classList.add('text-gray-500');
          currentState.classList.remove('text-green-500');
          currentState.innerText = 'Unfinished';
          for (const boss of bossTrs) {
            const bossImg = boss.children[0].children[0].children[0];
            const bossTr = bossImg.parentElement.parentElement.parentElement;
            const bossInput =
              bossImg.parentElement.parentElement.nextElementSibling
                .nextElementSibling.children[0].children[0];
            bossInput.removeAttribute('disabled');
            bossTr.classList.remove('grayscale');
          }
          break;
      }
      charLocalStorage.charHTML =
        e.currentTarget.parentElement.parentElement.outerHTML;
      localStorage.setItem(currentCharIGN, JSON.stringify(charLocalStorage));
    });
  });
};

//Function that adds event listeners to party inputs that updates mesos depending on party size

const updatePartyMesos = () => {
  const partyInput = document.querySelectorAll('.party-input');
  partyInput.forEach((input) => {
    input.addEventListener('change', function (e) {
      const mainHTML =
        e.target.parentElement.parentElement.parentElement.parentElement
          .parentElement.parentElement;
      const charIGN =
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].children[1].innerText.split(
          'IGN: '
        )[1];
      const currentCharInfo = JSON.parse(localStorage.getItem(charIGN));
      const charMesosGenerated =
        e.target.parentElement.parentElement.parentElement.parentElement
          .parentElement.parentElement.children[0].children[3];
      const partyValue = e.target.value;
      const partyValueAttribute = e.target.attributes.value;
      partyValueAttribute.value = partyValue;
      const bossMesos = e.target.parentElement.parentElement.nextSibling;
      const bossDifficulty =
        e.target.parentElement.parentElement.previousSibling.innerText;
      const bossName =
        e.target.parentElement.parentElement.previousSibling.previousSibling
          .children[0].children[0].alt;

      for (const boss of currentCharInfo.bossesDefeated) {
        if (
          bossName.toLowerCase() === boss.name.toLowerCase() &&
          bossDifficulty.toLowerCase() === boss.difficulty.toLowerCase()
        ) {
          const newMeso = boss.soloMeso / partyValue;
          boss.actualMeso = newMeso;
          let newTotalCharMeso = 0;
          for (const boss of currentCharInfo.bossesDefeated) {
            newTotalCharMeso += boss.actualMeso;
          }
          //Updates the DOM with the new meso
          bossMesos.innerText = `${parseInt(newMeso).toLocaleString('en-US')}`;
          charMesosGenerated.innerText = `Mesos generated: ${parseInt(
            newTotalCharMeso
          ).toLocaleString('en-US')}`;
          updateCurrency();
          //Updates localstorage as well
          currentCharInfo.charHTML = mainHTML.outerHTML;
          localStorage.setItem(charIGN, JSON.stringify(currentCharInfo));
        }
      }
    });
  });
};

//Function that handles char deletion

const deleteCharacter = (target) => {
  const confirmation = confirm(
    'Are you sure you want to delete the character?'
  );

  if (confirmation) {
    //Gets char IGN from current target, adds back the crystals used by the character, deletes the character from localstorage and updates the DOM.
    const charIGN =
      target.currentTarget.parentElement.children[0].textContent.split(
        'IGN: '
      )[1];
    const charLocalStorage = JSON.parse(localStorage.getItem(charIGN));
    let crystalsLocalStorage = parseInt(localStorage.getItem('Crystals'));
    crystalsLocalStorage += charLocalStorage.bossesDefeated.length;
    localStorage.setItem('Crystals', JSON.stringify(crystalsLocalStorage));
    localStorage.removeItem(charIGN);
    global.DOM.charactersSection.innerHTML = '';
    getLocalStorage();
    appRender();
  }
};

//Function that handles char edition

const editCharacter = (target) => {
  const targetButton = target.currentTarget;
  const charIGN =
    target.currentTarget.parentElement.children[1].children[0].textContent.split(
      'IGN: '
    )[1];
  const charLocalStorage = JSON.parse(localStorage.getItem(charIGN));
  const charLocalStorageHTML = document.createElement('div');
  charLocalStorageHTML.innerHTML = charLocalStorage.charHTML;
  const charDOMHTML = target.currentTarget.parentElement.parentElement;
  const charLocalBosses = charLocalStorage.bossesDefeated;
  const editBossTrs = [];

  charLocalBosses.forEach((charboss) => {
    const bossName = charboss.name;
    const bossDifficulty = charboss.difficulty;
    const bossIMG = charboss.IMG;
    const trHTML = document.createElement('tr');
    trHTML.innerHTML = `<tr class="bg-custom-gray py-8 flex justify-between items-center font-medium border-gray-600">
    <td>
       <div class="w-100px"><img src=${bossIMG} alt=${bossName} class="h-12 border rounded border-gray-500 mx-auto"></div>
    </td>
    <td>
       <div class="bg-gray-500 py-1 px-3 rounded w-100px">${bossDifficulty}</div>
    </td>
    <td>
     <div class="bg-red-500 py-1 px-3 rounded w-100px cursor-pointer delete-boss">Delete</div>
    </td>
 </tr>`;
    editBossTrs.push(trHTML);
  });

  if (!global.editing) {
    //Edit mode
    targetButton.children[1].textContent = 'Done';
    targetButton.children[0].classList.add('hidden');
    targetButton.classList.remove('bg-blue-500');
    targetButton.classList.add('bg-green-500');
    global.editing = true;

    //Edit logic and UI changes

    charDOMHTML.children[1].innerHTML = `
    <table class="text-center block bg-custom-gray border-2 overflow-x-scroll border-gray-600 rounded overflow-y-scroll">
     <tbody class="flex flex-col text-xs w-max xl:text-sm tbodychar bg-gray-800 p-4">
     </tbody>
  </table>`;
    editBossTrs.forEach((bossTr) => {
      const bossDeleteButton = bossTr.children[2].children[0];
      bossDeleteButton.addEventListener('click', function (e) {
        const bossName =
          e.currentTarget.parentElement.parentElement.children[0].children[0]
            .children[0].alt;
        const bossDifficulty =
          e.currentTarget.parentElement.parentElement.children[1].children[0]
            .innerText;

        charLocalStorage.bossesDefeated.forEach((boss, i) => {
          if (
            bossName.toUpperCase() === boss.name.toUpperCase() &&
            bossDifficulty.toUpperCase() === boss.difficulty.toUpperCase()
          ) {
            charLocalStorage.bossesDefeated.splice(i, 1);
          }
        });
        charLocalStorageHTML.children[0].children[1].children[1].childNodes.forEach(
          (children) => {
            const bossNameLocalStorageHTML =
              children.children[0].children[0].children[0].alt;
            const bossDifficultyLocalStorageHTML =
              children.children[1].innerText;
            if (
              bossName.toUpperCase() ===
                bossNameLocalStorageHTML.toUpperCase() &&
              bossDifficulty.toUpperCase() ==
                bossDifficultyLocalStorageHTML.toUpperCase()
            ) {
              children.remove();
              charLocalStorage.charHTML =
                charLocalStorageHTML.children[0].outerHTML;
            }
          }
        );
        console.log(charLocalStorage);
        localStorage.setItem(charIGN, JSON.stringify(charLocalStorage));
      });
      addBossBadge(bossTr.children[1].children[0], 'boss');
      bossTr.classList.add('py-2');
      charDOMHTML.children[1].children[0].appendChild(bossTr);
    });
  } else {
    //Exits edit mode
    const confirmation = confirm('Are you done editing?');
    if (confirmation) {
      targetButton.children[1].textContent = 'Edit character';
      targetButton.children[0].classList.remove('hidden');
      targetButton.classList.remove('bg-green-500');
      targetButton.classList.add('bg-blue-500');
      global.editing = false;

      //Go back to before
      global.DOM.charactersSection.innerHTML = '';
      getLocalStorage();
    }
  }
};

//To be able to get/update the delete/edit buttons from characters whenever neccesary and adds event listeners.

const getCharButtons = () => {
  global.DOM.buttons.deleteCharacterButtons =
    document.querySelectorAll('.delete-char');
  global.DOM.buttons.editCharacterButtons =
    document.querySelectorAll('.edit-char');

  //Deletes char

  global.DOM.buttons.deleteCharacterButtons.forEach((deleteCharacterButton) => {
    //Adds listener if there's no listener already
    if (deleteCharacterButton.getAttribute('listener') !== 'true') {
      deleteCharacterButton.addEventListener('click', deleteCharacter);
    }
  });

  //Edits char bosses

  global.DOM.buttons.editCharacterButtons.forEach((editCharacterButton) => {
    //Adds listener if there's no listener already
    if (editCharacterButton.getAttribute('listener') !== 'true') {
      editCharacterButton.addEventListener('click', editCharacter);
    }
  });
};

//Gets data from localstorage if available at the beginning of the webapp.

const getLocalStorage = () => {
  //Retrieves all characters in localstorage and adds to DOM
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key !== 'Crystals') {
      const localChar = document.createElement('div');
      const char = JSON.parse(localStorage.getItem(key));
      localChar.innerHTML = char.charHTML;
      global.DOM.charactersSection.appendChild(localChar);
    }
  }

  //Updates the character buttons selectors

  getCharButtons();

  //Updates the available crystals

  if (localStorage.getItem('Crystals')) {
    global.availableCrystals = `${parseFloat(
      localStorage.getItem('Crystals')
    )}`;
  }
};

getLocalStorage();

//Initializing the app with the functions that are needed to be run at the beginning of the webapp.

const appRender = () => {
  updateCurrency();
  updatePartyMesos();
  characterFinished();
  getCharButtons();
  getCharIMGs();
};

appRender();

// ================== EVENT LISTENERS ================== //

//Shows create character popup and blurs the background

global.DOM.buttons.createCharacterBtn.addEventListener('click', function () {
  global.DOM.mainContent.classList.add('bg-gray-950', 'blur-sm', 'h-screen');
  global.DOM.popUps.createCharacterPopup.classList.remove('hidden');
  global.DOM.popUps.bossPopupDifficultyTags.forEach((bossTag) => {
    addBossBadge(bossTag, 'form');
  });
});

//Closes create character popup and unblurs the background

global.DOM.mainContent.addEventListener('click', function (e) {
  if (e.target.innerText !== 'Create Character') {
    global.DOM.mainContent.classList.remove(
      'bg-gray-950',
      'blur-sm',
      'h-screen'
    );
    global.DOM.popUps.createCharacterPopup.classList.add('hidden');
  }
});

//Stores which bosses are selected in an array

global.DOM.popUps.bossFromPopup.forEach((bossSelected) => {
  bossSelected.addEventListener('click', function (e) {
    //Making sure we're selecting the correct element
    if (e.target.parentElement.classList.contains('boss')) {
      //Toggles grayscale to color to simulate selection of the boss
      e.target.parentElement.classList.toggle('grayscale');
      //Moves the boss selected to the charBosses array or removes it if unselected
      const bossValue = e.target.parentElement.attributes.value.value;
      if (!e.target.parentElement.classList.contains('grayscale')) {
        global.charBosses.push(bossValue);
      } else {
        const index = global.charBosses.indexOf(bossValue);
        global.charBosses.splice(index, 1);
      }
    }
  });
});

//Storing the IGN of the character

global.DOM.popUps.createCharacterForm.ignInput.addEventListener(
  'keyup',
  function (e) {
    global.charIGN = e.target.value;
  }
);

//Submits char with the create btn
global.DOM.popUps.createCharacterForm.submitCharBtn.addEventListener(
  'click',
  function (e) {
    e.preventDefault();
    const bossArray = Object.entries(global.bosses);
    const filteredBosses = [];
    global.charBosses.forEach((boss) => {
      bossArray.forEach(([key, value]) => {
        if (key === boss) {
          filteredBosses.push([key, value]);
        }
      });
    });
    if (global.charIGN.length > 0) {
      const char = createChar(
        global.charIGN,
        Object.fromEntries(filteredBosses)
      );
      localStorage.setItem(global.charIGN, JSON.stringify(char));
      localStorage.setItem('Crystals', global.availableCrystals);
      appRender();
      global.charBosses.length = 0;
      global.charIGN = '';
      filteredBosses.length = 0;
      global.DOM.popUps.createCharacterForm.characterForm.reset();
      global.DOM.popUps.bossesPopup.scrollTop = 0;
      global.DOM.mainContent.classList.remove(
        'bg-gray-950',
        'blur-sm',
        'h-screen'
      );
      global.DOM.popUps.createCharacterPopup.classList.add('hidden');
      global.DOM.popUps.bossFromPopup.forEach((boss) => {
        if (!boss.classList.contains('grayscale')) {
          boss.classList.add('grayscale');
        }
      });
    }
  }
);
