function createLotto() {
  // Set 자료구조
  const lotto = new Set();
  for (;;) {
    lotto.add(generateRandomCode(1));
    // 숫자 0예외 처리
    if (lotto.has("0")) {
      console.log("0은 로또번호가 될 수 없습니다.");
      lotto.delete("0");
      continue;
    }
    if (lotto.size < 6) {
      continue;
    } else {
      return lotto;
    }
  }
}

function createBonus(resultLotto) {
  resultLotto.add(generateRandomCode(1));
  if (resultLotto.has("0")) {
    console.log("보너스는 0이 될 수 없습니다.");
    resultLotto.delete("0");
    createBonus(resultLotto);
  } else if (resultLotto.size === 7) {
    return resultLotto;
  } else {
    createBonus(resultLotto);
  }
  return resultLotto;
}

// 시컨스 만들기
function genSeq() {
  let i = 1;
  return function* () {
    for (;;) {
      yield i++;
    }
  };
}

function consoleRender(gen) {
  // 비동기 함수
  setInterval(() => {
    console.log(
      ` ${gen().next().value}회차 당첨자 : `,
      createBonus(createLotto()) ?? "당첨자가 없습니다. "
    );
  }, 1000);
}

function htmlRender(gen) {
  console.log(createBonus(createLotto()));
  const array = Array.from(createBonus(createLotto()));
  setTimeout(() => {
    const li = document.createElement("li");
    li.innerHTML = `${gen().next().value}회차 당첨자 : ${
      array.join(",") ?? "당첨자가 없습니다. "
    }`;
    document.querySelector("#lottoList").appendChild(li);
  }, 1000);
}

// 호이스팅
function generateRandomCode(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    str += Math.floor(Math.random() * 45);
  }
  return str;
}

function app() {
  const gen = genSeq();
  // render(gen);
  document
    .querySelector("#lottoHandler")
    .addEventListener("click", function () {
      htmlRender(gen);
    });
}

app();
