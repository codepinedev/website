import type { NextConfig } from "next";

import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [
      "remark-gfm",
    ],
    rehypePlugins: [
      "rehype-slug",
      ["rehype-pretty-code", {
        theme: "catppuccin-mocha",
        lineOptions: {
          lineNumbers: true,
        },
        transformers: [{ visibility: "always" }],
      }],
    ],
  },
});

export default withMDX(nextConfig);
