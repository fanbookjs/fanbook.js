import { defineConfig, type UserConfig } from 'vitest/config';

export const createVitestConfig = (options: UserConfig = {}) =>
	defineConfig({
		...options,
		test: {
			globals: true,
			coverage: {
				enabled: true,
				reporter: ['text', 'lcov', 'clover'],
				provider: 'c8',
			},
			...options.test,
		},
		esbuild: {
			target: 'esnext',
		},
	});
