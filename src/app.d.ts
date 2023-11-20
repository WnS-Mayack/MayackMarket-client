// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: {
				userId: string;
				nickname: string;
				location: string;
				img: string;
			};
		}
		// interface PageData {}
		// interface Platform {}
	}
}

interface Comment {
	userId: string;
	userProfileImg: string;
	content: string;
	date: Date;
}

interface Post {
	title: string;
	content: string;
	writer: string;
	price: number;
	images: string[];
	view: number;
	like: number;
	comments: Comment[];
}

export { Post, Comment };
