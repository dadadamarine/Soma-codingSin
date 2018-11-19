import React ,{Component} from "react";
import style from "./noticeWrite.css";

export default class notice extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className={style.wrap}>
                <div className={style.wrapper}>
                    <div className={style.banner}>
                        <div className={style.banner__description}>
                            <p>
                            코딩의 신은 온라인 코딩 과외 플랫폼입니다.<br/>
                                코딩의 신은 온라인 코딩 과외 플랫폼입니다.코딩의 신은 온라인 코딩 과외 플랫폼입니다.
                            </p>
                        </div>
                        <div className={style.banner__category}>
                            <div>
                                <a href="/">Home</a>
                                <a href="/community">커뮤니티</a>
                                <a href="/community/notice">공지사항</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.wrapper}>
                    <div className={style["wrapper__section"]}>
                        <div className={style.flex}>
                            <div className={style["title"]}>
                                <div>
                                    <h2>코딩의 신</h2>
                                    <p className={style["sub-title"]}>공지사항</p>
                                </div>
                            </div>
                            <div className={style.right_cont}>
                                <div className={style.title_area2}>

                                    <div className={style["table-title"]}>
                                    글쓰기
                                    </div>
                                    
                                </div>

			                    <div className={style["write-form"]}>
				                <form name="regForm" id="regForm" action="/class_center/helper_insert" method="post">
                                <table>
                                <tbody>
                                    <tr>
                                        <td class={style.title}>아이디</td>
                                        <td>아이디</td>
                                        <td className={style.title}>닉네임</td>
                                        <td>닉네임</td>
                                    </tr>
                                    <tr className={style.mail}>
                                        <td className={style.title}>이메일</td>
                                        <td colspan="3">
                                            <input type="text" name="email1" value="dadadamarine" id="email1" title="이메일주소를 넣어주세요." size="15" className={style.input} />
                                            &nbsp;@&nbsp;
                                            <input type="text" name="email2" value="naver.com" id="email2" title="이메일계정을 넣어주세요." size="18" className={style.input} />
                                            <select title="메일주소 선택하기" name="email3" className={style.select} onchange="selEmail(this.value);" >
                                                <option value="">직접입력</option>
                                                <option value="naver.com">naver.com</option>
                                                <option value="daum.net">daum.net</option>
                                                <option value="nate.com">nate.com</option>
                                                <option value="gmail.com">gmail.com</option>
                                                <option value="hanmail.net">hanmail.net</option>
                                                <option value="hotmail.com">hotmail.com</option>
                                                <option value="yahoo.co.kr">yahoo.co.kr</option>
                                                <option value="empal.com">empal.com</option>
                                                <option value="korea.com">korea.com</option>
                                                <option value="hanmir.com">hanmir.com</option>
                                                <option value="dreamwiz.com">dreamwiz.com</option>
                                                <option value="orgio.net">orgio.net</option>
                                                <option value="korea.com">korea.com</option>
                                                <option value="chol.com">chol.com</option>
                                                <option value="hitel.net">hitel.net</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr className={style.category}>
                                        <td className={style.title}>분류</td>
                                        <td colspan="3">
                                            <select name="categoryList" id="categoryList">
                                                <option value="">게시 분류를 선택해 주세요.</option>
                                                <option value="1">공지사항</option>
                                                <option value="2">리뷰페이지</option>
                                                <option value="3">문의사항</option>
                                                <option value="4">묻고 답하기</option>
                                                <option value="6">제안 게시판</option>
                                                <option value="5">자유게시판</option>
                                                <option value="7">기타</option>
                                                </select>
                                        </td>
                                    </tr>
                                    <tr className={style.subject}>
                                        <td className={style.title}>제목</td>
                                        <td colspan="3">
                                            <input type="text" name="title" id="title" title="제목을 넣어주세요."  maxlength="500" className={style.input} />
                                        </td>
                                    </tr>
                                    <tr className={style.write}>
                                        <td className={style.title}>내용</td>
                                        <td colspan="3">
                                            <div className={style.wrap} >
                                                <textarea id="content" name="content"></textarea>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className={style.attach}>
                                        <td className={style.title}>첨부파일</td>
                                        <td colspan="3">
                                            <input type="text" name="" id="" className={style.input}  title="첨부파일" />&nbsp;
                                            <img src={require("../resources/img/board/search.jpg")} />
                                        </td>
                                    </tr>
					            </tbody>
                                </table>
				                </form>
                                <div className={style.btns}>
                                    <a href=""><img src={require("../resources/img/board/admit.jpg")}/></a>
                                    <a href="/class_center/qna_list/"><img src={require("../resources/img/board/cancle.jpg")} /></a>
                                </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}