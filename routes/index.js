var express = require("express");
var router = express.Router();

/* 
메인 페이지 요청 라우팅 메소드

- 클라이언트 요청 방식 : Get방식 

- 호출주소체계 : http://localhost:3000

- 응답결과: view\index.ejs 뷰파일의 내용을 클라이언트에 전달

*/
router.get("/", function (req, res, next) {
	res.render("index", { title: "Express", subject: "nodejs" });
});

/**
 * 샘플 웹페이지 요청하는 라우팅 메소드
 * 요청 방식: get
 * 호출주소체계: http://localhost:3000/sample
 * 응답결과: views\sample.ejs 라는 뷰파일안의 html을 클라이언트로 전송(응답)합니다.
 **/

router.get("/sample", function (req, res, next) {
	res.render("sample", { title: "sample page 입니다." });
});

module.exports = router;
