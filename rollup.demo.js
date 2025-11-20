import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

export default
    {
        preserveEntrySignatures: false,
        input: 'docs/index.ts',
        plugins: [
            nodeResolve({
                browser: true,
                preferBuiltins: false,
            }),
            commonjs(),
            typescript({
                'esModuleInterop': true,
                'skipLibCheck': true,
            })
        ],
        output: {
            file: 'docs/index.js',
            format: 'iife',
            sourcemap: true,
            inlineDynamicImports: true,
        }
    }