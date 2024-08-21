import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import url from "@rollup/plugin-url";
import dts from "rollup-plugin-dts";
import packageJson from "./package.json" assert { type: "json" };

export default [
  {
    input: "types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts(
      {
        tsconfig: "./src/tsconfig.client.json",
        respectExternal: true,
        compilerOptions: {
          declaration: true,
          declarationDir: "types",
          emitDeclarationOnly: true,
        },
      }
    )],
  },
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve({
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      }),
      commonjs(),
      typescript({ tsconfig: "./src/tsconfig.client.json" , jsx: "react-jsx", 
        compilerOptions: { outDir: "../dist", 
                           declaration: false, declarationMap: false,
                           noEmit: false, emitDeclarationOnly: false,
                           composite: false, declarationDir: undefined,
                           allowImportingTsExtensions: false
        } }),
      postcss({
        extract: true,
        minimize: true,
      }),
      url({
        include: ["**/*.svg", "**/*.png", "**/*.jpg"],
        limit: 8192,
        publicPath: "/dist/",
        emitFiles: true,
      }),
    ],
    onwarn: (warning, warn) => {
      // Ignore "use client" directive warnings
      if (warning.code === "MODULE_LEVEL_DIRECTIVE") return;
      warn(warning);
    }
  }
];
