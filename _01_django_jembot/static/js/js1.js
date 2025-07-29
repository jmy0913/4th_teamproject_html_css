 // 모든 레벨 버튼 선택
 const levelButtons = document.querySelectorAll('.level-button');

  levelButtons.forEach(button => {
    button.addEventListener('click', () => {
      // 모든 버튼에서 active 제거
      levelButtons.forEach(btn => btn.classList.remove('active'));
      // 클릭한 버튼에 active 추가
      button.classList.add('active');
    });
  });


   const tabButtons = document.querySelectorAll('.tab-button');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // 모든 버튼에서 active 제거
      tabButtons.forEach(btn => btn.classList.remove('active'));
      // 클릭한 버튼에 active 추가
      button.classList.add('active');
    });
  });