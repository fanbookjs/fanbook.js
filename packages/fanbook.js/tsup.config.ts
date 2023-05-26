import { createTsupConfig } from '../../tsup.config';

export default createTsupConfig({
	entry: ['src/**/*.ts', '!src/**/*.d.ts'],
});
