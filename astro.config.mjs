import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Raon Dev',
			description: '프론트엔드 개발자 Raon의 개발 블로그입니다. 주로 Front-end 관련 글을 작성합니다.',
			social: {
				github: 'https://github.com/dydfuf/raon-dev-astro',
				youtube: 'https://www.youtube.com/channel/UC_9Nh2Xrh6C9u2e_zlIdEYA',
				linkedin: 'https://www.linkedin.com/in/%EC%B5%9C%EC%9A%A9%EC%97%B4/'
			},
			sidebar: [
				{
					label: 'Posts',
					autogenerate: { directory: 'posts' },
				}
			],
		}),
	],
});
