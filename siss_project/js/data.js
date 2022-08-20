const qnaList = [
  {
    q: '1. 입학하기 전, 당신의 파트너를 선택할 수 있다.',
    a: [
      { answer: 'a. 작고 귀여운 똑똑한 파트너', type: ['hufflepuff', 'revenclaw']},
      { answer: 'b. 크고 멋진 용맹한 파트너', type: ['griffindor', 'slytherin']}
    ]
  },
  {
    q: '2. 새학기에 친구를 사귈 때, 당신이 좋아하는 친구의 유형은 ?',
    a: [
      { answer: 'a. 책임감있고 성실한 친구', type: ['slytherin', 'revenclaw']},
      { answer: 'b. 친절하고 따뜻한 친구', type: ['hufflepuff', 'grffindor']}
    ]
  },
  {
    q: '3. 새학기 전 수강신청 날 ! 당신이 듣고 싶은 과목은 ?',
    a: [
      { answer: 'a. 다른 사람에게 도움이 될 수 있는 머글학과 약초학', type: ['slytherin', 'revenclaw']},
      { answer: 'b. 나 자신을 지킬 수 있는 어둠의 마법 방어법', type: ['hufflepuff', 'grffindor']}
    ]
  },
  {
    q: '4. 두 개의 분반이 있다. 당신이 선택할 교수님은 ?',
    a: [
      { answer: 'a. 조금은 힘들지만 강의력이 짱짱한 교수님', type: ['slytherin', 'revenclaw', 'grffindor']},
      { answer: 'b. 거의 독학이지만 친해지고 싶은 교수님', type: ['hufflepuff']}
    ]
  },
  {
    q: '5. 당신의 단짝친구가 시험 중에 컨닝을 한다 !',
    a: [
      { answer: 'a. "너 지금 뭐하는거야?" 교수님에게 바로 말씀드린다.', type: ['slytherin', 'grffindor', 'hufflepuff']},
      { answer: 'b. 어떤 사정이 있겠지.. 마음속에 묻어둔다.', type: ['revenclaw']}
    ]
  },
  {
    q: '6. 지금은 물약 시험 시간 ! 당신의 선택은 ? (단, 실패 시 C+)',
    a: [
      { answer: 'a. 100% 성공 확률의 B+ 물약 제조', type: ['grffindor']},
      { answer: 'b. 30% 성공 확률의 A+ 물약 제조', type: ['slytherin', 'hufflepuff', 'revenclaw']}
    ]
  },
  {
    q: '7. 기숙사에 몬스터가 나타났다 ! 당신의 선택은 ?',
    a: [
      { answer: 'a. 당장 몬스터에게로 가서 오늘 배운 마법 기술을 사용한다.', type: ['grffindor', 'hufflepuff']},
      { answer: 'b. 친구들이 다치지 않게 보호하고 교수님의 지시를 따른다.', type: ['slytherin', 'revenclaw']}
    ]
  },
  {
    q: '8. 론의 집에서 밥을 먹게 된 당신 그런데 밥에서 머리카락이..!',
    a: [
      { answer: 'a. 어머니께서 해주신 음식 꾹 참고 그냥 먹는다.', type: ['grffindor', 'hufflepuff', 'revenclaw']},
      { answer: 'b. "밥에서 머리카락이 나왔네요 ?" 태연하게 말씀드린다.', type: ['slytherin']}
    ]
  },
  {
    q: '9. 말포이가 당신에게 와서 말한다. "너는 부모님 빽 말고는 아무것도 아니구나"',
    a: [
      { answer: 'a. 어머니께서 해주신 음식 꾹 참고 그냥 먹는다.', type: ['grffindor', 'revenclaw']},
      { answer: 'b. "밥에서 머리카락이 나왔네요 ?" 태연하게 말씀드린다.', type: ['slytherin', 'hufflepuff']}
    ]
  },
  {
    q: '10. 학교에 어느 정도 적응한 당신 들어가고 싶은 클럽은 ?',
    a: [
      { answer: 'a. 겉모습을 바꿀 수 있는 힘', type: ['revenclaw']},
      { answer: 'b. 동물과 이야기할 수 있는 힘', type: ['grffindor', 'hufflepuff']}
    ]
  },
  {
    q: '11. 한 가지 능력을 가질 수 있다. 당신의 선택은 ?',
    a: [
      { answer: 'a. 겉모습을 바꿀 수 있는 힘', type: ['revenclaw']},
      { answer: 'b. 동물과 이야기할 수 있는 힘', type: ['hufflepuff']}
    ]
  },
  {
    q: '12. 한 가지 능력을 가질 수 있다. 당신의 선택은 ?',
    a: [
      { answer: 'a. 과거로 돌아갈 수 있는 힘', type: ['grffindor']},
      { answer: 'b. 상대방의 마음을 읽을 수 있는 힘', type: ['slytherin']}
    ]
  },
  {
    q: '13. 경연대회에 기숙사 대표로 참여한 당신 우승할 수 있는 기회가 코앞인데..!',
    a: [
      { answer: 'a. 위험에 빠진 친구를 애써 외면하고 우승한다.', type: ['slytherin','revenclaw']},
      { answer: 'b. 위험에 빠진 친구를 구하고 아쉽게 우승은 놓친다.', type: ['grffindor', 'hufflepuff']}
    ]
  },
  {
    q: '14. 오늘은 당신의 생일 ! "선물로 뭐 받고 싶어 ?"',
    a: [
      { answer: 'a. 친구들과 부모님의 정성 가득한 생일파티(선물은 편지)', type: ['slytherin', 'hufflepuff']},
      { answer: 'b. 생일파티 보다는 돈이지 ~ 70갈레온(약 50만원)', type: ['grffindor', 'revenclaw']}
    ]
  },
  {
    q: '15. 퀴디치 월드컵의 선수로 뽑힌 당신 희망하는 포지션은 ?',
    a: [
      { answer: 'a. "상대방 따위는 무섭지 않아" 공을 골대에 넣는 추격꾼', type: ['hufflepuff', 'grffindor']},
      { answer: 'b. "나만큼 날렵한 사람은 또 없지" 스니치를 쫓아 게임을 끝내는 수색꾼', type: ['slytherin']}
    ]
  },
  {
    q: '16. 벌써 호그와트 막학기 .. 당신의 미래는 ?',
    a: [
      { answer: 'a. 나쁜 애들에 맞서 싸우는 불사조 기사단에 들어간다.', type: ['hufflepuff', 'grffindor']},
      { answer: 'b. 마법이 난 천직이다. 호그와트 교수가 된다.', type: ['revenclaw']}
    ]
  }
]

const infoList = [
  {
    name: '그리핀도르',
    desc: ''
  },
  {
    name: '슬리데린',
    desc: ''
  },
  {
    name: '후플푸프',
    desc: ''
  },
  {
    name: '래번클로',
    desc:
  }
]
