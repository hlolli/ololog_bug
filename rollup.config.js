import nodejsResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
export default [
  {
    input: "./index.ejs",
    output: {
      file: "index.js",
      format: "iife",
      name: "index",
      sourcemap: false,
    },
    plugins: [
      nodejsResolve({ preferBuiltins: false }),
      commonjs({ transformMixedEsModules: false, ignoreGlobal: false }),
    ],
  },
];
