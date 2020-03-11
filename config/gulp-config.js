var package = require('../package.json');
// var util = require('gulp-util');
// util.log(util.colors.green(pack.name), ':', util.colors.yellow(pack.version));

module.exports = {
	name: package.name,
	version: package.version,
	author: package.author,
	sonerScannerMirror: 'http://172.22.24.51:8081/nexus/content/sites/gs-assets/sonar-scanner/',
	sonarOptions: {
		host: {
			url: 'http://172.22.3.61:10083' // http://172.22.24.25:9000
		},
		token: 'd21a54051303158055518f1eb5ee81bca3774120',
		options: {
			'sonar.projectKey': package.name,
			'sonar.projectName': package.name,
			'sonar.sources': 'src',
			'sonar.sourceEncoding': 'UTF-8',
			'sonar.exclusions': 'node_modules/**,tests/**,lib-cov/**,public/pms-user-manual/**,public/themes/**,public/tinymce/**,src/assets/**,src/themes/**,src/typings/**'
		}
	},
	dockerOptions: {
		imageDomain: '172.22.3.4/pms',
		dockerHost: 'http://172.22.24.179',
		dockerPort: 2375,
		auth: {
			username: 'Pms',
			// 一个月后密码会过期，需要重新创建机器人账号
			password: 'Pms123456',
			email: 'admin@example.com',
			serveraddress: 'http://172.22.3.4'
		}
	}
};
