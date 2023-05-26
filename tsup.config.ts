import { relative, resolve } from 'node:path';
import process from 'node:process';

import { defineConfig, type Options } from 'tsup';

export const createTsupConfig = (options: Options = {}) =>
	defineConfig({
		clean: true,
		dts: true,
		entry: ['src/**/*.ts', '!src/**/*.d.ts'],
		format: ['esm', 'cjs'],
		minify: false,
		skipNodeModulesBundle: true,
		sourcemap: true,
		target: 'esnext',
		tsconfig: relative(__dirname, resolve(process.cwd(), 'tsconfig.json')),
		bundle: false,
		shims: false,
		keepNames: true,
		splitting: false,
		...options,
	});
