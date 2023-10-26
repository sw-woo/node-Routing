var express = require("express");
var router = express.Router();

/**
 * 회원가입 페이지 요청 라우팅 메소드
 * 호출방식: get-url을 통해 웹페에지를 제공함
 * 호출주소: http://localhost:3000/member/entry
 */

router.get("/entry", function (req, res, next) {
	res.render("member/entry");
});

/**
 * 회원가입 입력폼 메세지 받는 주소 체계
 * 호출방식: Post
 * 호출주소: http://localhost:3000/member/entry
 */

router.post("/entry", function (req, res, next) {
	//step1: 사용자 입력폼에서 사용자 입력데이터를 추출한다.
	//폼테그내의 사용자가 입력한 요소의 값을 추출하려면 req.body 요소의 name속성명으로 추출 된다.
	var userID = req.body.memberID;
	var userPwd = req.body.memberPassword;
	var userEmail = req.body.email;
	var userName = req.body.name;

	//STEP2 : DB에 회원테이블에 저장하기 위한 JSON 객체 데이터를 정의합니다.
	const member = {
		memberID: userID,
		memberPassword: userPwd,
		email: userEmail,
		name: userName,
	};
	//STEP3 : SQL/ORM을 이용해 DB에 회원테이블에 member 데이터 객체를 영구 저장 시킨다.

	//URL주소를 기반으로 사용자브라우저의 웹페이지를 특정 주소로 바로 이동시킨다.
	res.redirect("/");
});

/**
 * 회원로그인 웹페이지 요청 라우팅 메소드
 * 호출방식: GET(링크주소/URL을 직접입력해서 서버 리소스 호출하는 방식)
 * 호출주소: http://localhost:3000/member/login
 */

router.get("/login", function (req, res) {
	res.render("member/login");
});

//라우터 객체를 노드 어플리케이션에서 사용 할 수 있도록 노출한다.
module.exports = router;
