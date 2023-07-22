// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: string,
			formData: Record<string, unknown>
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
