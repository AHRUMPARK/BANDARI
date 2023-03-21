# bandari(반달이)
반려동물 용품 중고 거래 플랫폼
<img src="https://user-images.githubusercontent.com/116782319/226551906-83f18a81-1479-4216-a392-4d926dfea8d6.jpg"  width="1000" align="center" />
<h4>🔗demo https://bandari.store/</h4>
   
   <br/>
<h3>😃 안녕하세요 저희 반다리는 🐾</h3>
<h4>" 당신의 반려동물을 위한 다리 반다리입니다." </h4>
<p>반려동물 양육 인구 약 1500만명 추산되며, 계속 증가하고 있다고합니다.
그에 따른 반려동물 시장도 계속 커지고있습니다.</p>

<p>매번 사놓으면 반려동물이 쓰지 않아서 버리는 물건이 많았습니다.
이러한 상황을 개선하기 위해  합리적인 가격에 사고 팔거나 좋은 의도로 
무료 나눔하는 서비스를 기획하게 되었습니다 ❤</p>

   <br/>
<h3>🛠️ 사용 기술 & 라이브러리</h3>

**`Frontend`**
• html / css / js 
• React / React Router / Redux


**`Backend`**
• node / Express
• Sequelize / Socket.io / Mysql

**`Communication`**
• Slack / kakaotalk / Notion / Figma


   <br/>
<h3>✒ 구현 기능</h3>

**`프로젝트 기획`**
<h4>판매 페이지, 디테일 페이지 ( 상품, 펫 ) UI & CRUD</h4>

<img src="https://user-images.githubusercontent.com/116782319/226569068-78023f04-599a-477d-9e03-ad51ca8d1b17.png"  width="1000" align="center" />

**`판매 페이지 화면 및 구현기능`**

- **위치 기반 조회** : geolocation, kakao 맵 api 사용해 위치를  Redux에 저장해 내 지역 상품 보기
- **카테고리 필터 :**  Redux 사용 ⇒ 버튼 활성화,  state에 필터함수 써서 맞는 데이터 필터링
- **검색 기능 :** Sequlize 의 Op 사용
    
    ⇒ Op.or 로 제목, 내용에 서치워드가 있는지와 Op.like 로 서치워드가 포함된 데이터 조회
    
- **페이지네이션** : react-paginate 라이브러리 사용 ⇒ 필요에 맞게 state 값들을 커스텀해서 사용 함
- **좋아요 기능** :  로그인시 Redux ID 저장 ⇒ 좋아요 데이터가 아이디와 일치시 개인이 찜한 상품이 보임, 찜하기와 해제 가능
- **카드** : 카드를 누르면, useNavigater로 라우터에 데이터를 보내서 디테일 페이지 출력


**`판매 디테일 페이지`**

- **사진 미리보기** : 업로드 사진 미리보기 기능
- **사진 업로드** : 최대 4개까지 제한, 슬라이드 사용
- **본인 위치 자동 저장 :**  Redux 사용 ⇒ 본인 위치값을 글 등록시 자동 저장됨
- **가격** :  숫자 입력만 가능하게 함
- **사용한 반려동물** : Redux에 저장된 유저의 펫 데이터 사용
- **본인 글** : 아이디가 일치시 수정, 삭제 가능
- **다른사람 글** : 수정, 삭제 대신 연락하기 ⇒ 채팅방으로 넘어가는 기능


**`펫 등록 페이지`**

- **사진 업로드** : 사진 미리보기, 업로드 기능
- **사진 업로드** : 사진 미리보기, 업로드 기능
- **나이 :**  jQuery로 현재 날짜로부터 20년 계산
- **등록** :  등록하면서 펫 Redux에도 데이터 저장




   <br/>
<h3>💡 느낀 점</h3>


**일에 대한 우선 순위** 😂

혼자 할 때는 하나의 오류에 계속 매달려서 해결될 때까지 하게 됬고, 경중을 별로 따지지 않았던 것 같은데 협업에는 시간이 한정적이다 보니 일의 우선순위에 따라 하게되었다.

할 목록들을 리스트업하고 하나씩 해결하다보니 목표가 확고하게 보여 좋은 것 같다.

 **git과 충돌** 😂

git을 다룰 때 계속 비슷한 오류가 났었고, 급하다 보니 오류 해결법을 찾은대로 하다가 문제가 생겨서 곤란해진 적이 있었다…

깃관련 오류 : [https://codingnewbie.tistory.com/92](https://codingnewbie.tistory.com/92) 

메인 브렌치에서 git add, commit은 금기인것을 알고 있었는데도 실수를 하게 되어서 곤란했다

팀원들에게 상담을하니 자료를 보여주며, 천천히 알려주고 도와줘서 너무 고마웠었다. 

모든 페이지를 여러명이 같이 건드린적은 처음이였는데, 덕분에 충돌은 어찌 해결해야하는지도 많이 배웠으며 네이버 웨일로 화면공유를 해서 원격으로 서로 상의하는 것도 좋았다.

**아는것이 많은만큼 보인다** 😂

그말에 전적으로 동감하게 되는 계기였습니다.

다른분들은 전공자거나 공부를 많이 하신분들이여서 하시는 말에 많이 이해를 못했던 부분에서 부끄러웠습니다.

누군가에게 설득을 하거나 설명을 하려면, 기술에 대한 이해도가 많이 필요하다는 것을 느꼇다.

결론은 공부가 필요하다 !!!!

**설계도를 그리자** 😂

마인드맵처럼 로직을 어찌 짤 것인지 글 + 그림으로 그리는 것도 좋은 방법인 것 같습니다.

기능의 순서와 잘못 된 점들을 파악할 수 있다.

**리덕스 ☺️**

리덕스는 여전히 많이 어렵게 느껴지는데, 별 기능은 없이 해당 버튼을 누르면 해당 버튼 이름 값을 전달하여 useSelector로 현재 값이 ‘사료’면 사료관련 데이터만 필터링 하거나, state 값에 따라 css 값도 다르게 줄 수 있다는 것을 배워 신기했습니다.

다음에는 좀더 심화된 리덕스 & css 를 써보고 싶습니다.

**css 라이브러리도 좋지만, 순수하게 구현해보니** ☺️

css 도 라이브러리 없이 해보려니 flex에 많이 약했었는데, 개념을 제대로 잡고 갈 수 있는 좋은 기회가 되었습니다.  정렬에 대한 두려움이 사라졌네요!

