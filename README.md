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
<img src="https://s3-us-west-2.amazonaws.com/secure.notion-static.com/77910b82-18d7-479f-8d50-e24a7786f803/Untitled.png"  width="1000" align="center" />

**`판매 페이지 화면 및 구현기능`**

- **위치 기반 조회** : geolocation, kakao 맵 api 사용해 위치를  Redux에 저장해 내 지역 상품 보기
- **카테고리 필터 :**  Redux 사용 ⇒ 버튼 활성화,  state에 필터함수 써서 맞는 데이터 필터링
- **검색 기능 :** Sequlize 의 Op 사용
    
    ⇒ Op.or 로 제목, 내용에 서치워드가 있는지와 Op.like 로 서치워드가 포함된 데이터 조회
    
- **페이지네이션** : react-paginate 라이브러리 사용 ⇒ 필요에 맞게 state 값들을 커스텀해서 사용 함
- **좋아요 기능** :  로그인시 Redux ID 저장 ⇒ 좋아요 데이터가 아이디와 일치시 개인이 찜한 상품이 보임, 찜하기와 해제 가능
- **카드** : 카드를 누르면, useNavigater로 라우터에 데이터를 보내서 디테일 페이지 출력
