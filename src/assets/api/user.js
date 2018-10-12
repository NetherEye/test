//let url = process.env.TOKENAPI;
let url = "/proxy";
//*********************上线时候打开注释打包发给后台*******************************

let allApi = {
	'login': url + '/api/login', // 登录
	'logout': url + '/logout',
	"jihua": url + '/api/plan/count',
}


export default allApi;

