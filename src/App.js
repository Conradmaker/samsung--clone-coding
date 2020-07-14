import React, { useState } from "react";
import "./App.scss";
import "./App_small.scss";
import { MdShoppingCart, MdPerson, MdReorder } from "react-icons/md";

function App() {
  const [open, setOpen] = useState(false);
  const onToggle = () => {
    setOpen(!open);
  };
  return (
    <div className="container">
      <header className="section section--nav">
        <div className="inner">
          <ul className="left-menu">
            <a href="#" className="logo">
              samsung
            </a>
            <li className="menu-list1">모바일</li>
            <li className="menu-list1">TV</li>
            <li className="menu-list1">가전</li>
            <li className="menu-list1">IT</li>
            <li className="menu-list1">오디오</li>
            <li className="menu-list1">소모품</li>
          </ul>
          <div className="right-menu-wrapper">
            <ul className="right-menu">
              <li className="menu-list1">스토리</li>
              <li className="menu-list1">멤버십</li>
              <li className="menu-list1">고객지원</li>
              <li className="menu-list1">비즈니스</li>
            </ul>{" "}
            <ul className="icon-group">
              <li className="menu-list1 icons1">
                <MdPerson />
              </li>
              <li className="menu-list1 icons1">
                <MdShoppingCart />
              </li>
              <li className="menu-list1 icons1 icons2" onclick={onToggle}>
                <MdReorder />
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* VISUAL */}
      <section className="section--visual">
        <div className="inner">
          <div className="summary">
            <h1 className="summary-title">Galaxy S20</h1>
            <p className="summary-description">
              밝고 우아한 골드로 더욱 완벽해지다
            </p>
            <div className="btn-group">
              <a href="" className="bonus">
                더 알아보기
              </a>
              <button className="btn-more-info">상품 구매 혜택</button>
            </div>
          </div>
        </div>
      </section>
      <section className="section--feature">
        <div className="inner">
          <ul className="feature-title">
            <li className="title-content">으뜸효율가전</li>
            <li className="title-content">새로운 갤럭시</li>
            <li className="title-content">우리집 맑음샵</li>
            <li className="title-content">특별한 혜택</li>
            <li className="title-content">대한민국 혁신대상 수상</li>
          </ul>
          <ul className="tiles">
            <li className="tile">
              <img
                src="https://lh3.googleusercontent.com/proxy/ghWcXQLVUTlKTyqNSPWntjVDoqMWEl0jXCDSTjqXVPkKxhSlj1yicaeEdPhJJ-MUzS5Y95dPJnNhqVpZVY6h-GxcpHZxx8yNb4b-_XjFGj1rIw2WdLS5b13SvRJtorJ6ftS_NZU0P6mAbt6r6WJR"
                alt="1"
              />{" "}
              <span>혜택가 1920000</span>
              <p>냉장고</p>
            </li>
            <li className="tile">
              <img
                src="https://m.rentalcommerce.co.kr/web/product/extra/big/201909/ff470c170e0f09faeb18cfe10bcb8851.png"
                alt=""
              />{" "}
              <span>혜택가 1920000</span>
              <p>김치 냉장고</p>
            </li>
            <li className="tile">
              <img
                src="https://m.1544-0756.net/web/product/extra/big/201903/3930802e73e3a3fab3f172dfee7a03c3.png"
                alt=""
              />{" "}
              <span>혜택가 1920000</span>
              <p>에어컨</p>
            </li>
            <li className="tile">
              <img
                src="https://lh3.googleusercontent.com/proxy/pL4EJeiiOz16p5Z128SJpilrx0p4pxhk2f6BIk_kzjcBAG1cQpdzZnLvuzbAGxDdCxQCkU8ZJTgiEx-HjHxDiYVIzgog"
                alt=""
              />{" "}
              <span>혜택가 1920000</span>
              <p>티비</p>
            </li>
            <li className="tile">
              <img
                src="https://t1.daumcdn.net/cfile/tistory/99779C4D5A3FCD200A"
                alt="3"
              />{" "}
              <span>혜택가 1920000</span>
              <p>아이폰</p>
            </li>
            <li className="tile">
              <img
                src="https://lh3.googleusercontent.com/proxy/EkBFyIVgdew4Zv6vhOIm7uE45sXqaiYXuL083kz4cs8K806p8PaQntj3Sb-vEEM59LR3dC4ghFTTm11CPK-o26DMJYVub4u3ViDi4ek8JaPOHh7sxBxc1sYOmE0_eRCCLdTg_kM"
                alt=""
              />{" "}
              <span>혜택가 1920000</span>
              <p>갤럭시</p>
            </li>
            <li className="tile">
              <img
                src="https://img.fse.intershop.de/object/miele?T=BgScale&P_L=W%2CH%2CF%2CQ&P_I_Q=99&P_I_W=500&P_I_H=500&P_I_F=PNG&A_L=SRC%2CBG&A_I_SRC_NAME=132312&A_I_BG_O=adAKcWnJ9m4AAAFfuDplu6BE"
                alt=""
              />{" "}
              <span>혜택가 1920000</span>
              <p>세탁기</p>
            </li>
            <li className="tile">
              <img
                src="https://m.rentalshopping.co.kr/web/product/big/201911/66f2348372d34faac85151c2e616a42b.png"
                alt=""
              />{" "}
              <span>혜택가 1920000</span>
              <p>건조기</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="section--mobile">
        <div className="inner">
          <div className="summary">
            <div className="summary-title">모바일 & IT</div>
            <ul className="summary-list">
              <li>Galaxy Book S</li>
              <li>Galaxy S20 Ultra 5G</li>
              <li>Galaxy A51 5G</li>
              <li>샬롱 데 포토그라프</li>
              <li>갤럭시 스튜디오</li>
            </ul>
          </div>
          <div className="summary2">
            <h1 className="summary-title">Galaxy&nbsp;Book&nbsp;S 런칭</h1>
            <button className="btn-more-info">상품 구매 혜택</button>
          </div>
        </div>
      </section>
      <section className="section--catagory">
        <div className="inner">
          <div className="catagory--container">
            <ul className="product">
              <h5>제품</h5>
              <MdReorder className="catagory-toggle" />
              <li>스마트폰</li>
              <li>태블릿</li>
              <li>웨어러블</li>
              <li>모바일 액세서리</li>
              <li>TV</li>
              <li>Lifestyle TV</li>
              <li>BESPOKE</li> <li>삼성 오디오</li>
            </ul>

            <ul className="product2">
              <h5>ㅁㄴㅇ</h5>
              <li>냉장고</li>
              <li>에어컨</li>
              <li>세탁기</li>
              <li>건조기</li>
              <li>에어드레서</li>
              <li>청소기</li>
              <li>노트북</li>
              <li>데스크탑</li>
            </ul>

            <ul className="customer">
              <h5>고객문의</h5> <MdReorder className="catagory-toggle" />
              <li>FAQ</li>
              <li>이메일 상담</li>
              <li>매장 찾기</li>
              <li>서비스센터 찾기</li>
              <li>디지털 프라자 아카데미</li>
              <li>비즈니스 협력제안</li>
              <li>MD비즈니스 협력제안</li>
              <li>삼성멤버스 커뮤니티</li>
            </ul>
            <ul className="information">
              <h5>부가정보</h5> <MdReorder className="catagory-toggle" />
              <li>삼성 디지털 프라자</li>
              <li>데이코</li>
              <li>뉴스룸</li>
              <li>디자인 삼성</li>
              <li>삼성전자 사회공헌</li>
              <li>구매안전서비스</li>
              <li>폐카트리지 회수신청</li>
            </ul>
            <ul className="company">
              <h5>기업정보</h5>
              <MdReorder className="catagory-toggle" />
              <li>회사소개</li>
              <li>투자자 정보</li>
              <li>공지사항</li>
              <li>제품 접근성</li>
            </ul>
          </div>
        </div>
      </section>
      <footer>
        <div className="inner">
          <p>Copyright © 1995-2020 SAMSUNG All Rights Reserved.</p>
          <p>
            경기도 수원시 영통구 삼성로 129 (매탄동) 삼성전자주식회사 대표이사
            김기남 사업자등록번호 124-81-00998 사업자 정보확인 통신판매업 신고:
            2000-경기수원-0515 호스팅서비스사업자 : 삼성에스디에스(주)
          </p>
          <p>
            대표번호: 02-2255-0114 제품/서비스/멤버십: 1588-3366 구매문의:
            1588-6084
          </p>
          <p>
            삼성전자주식회사는 통신판매중개자로서 통신판매의 당사자가 아니며,
            개별 판매자가 등록한 거래정보 및 거래에 대하여 책임을 지지 않습니다.
            본 사이트의 콘텐츠는 저작권법의 보호를 받는바, 무단 전재, 복사, 배포
            등을 금합니다.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
