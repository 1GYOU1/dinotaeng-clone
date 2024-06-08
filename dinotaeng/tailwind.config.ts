import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'custom-gray': '#ddd', // 사용자 정의 색상 추가
      },
      spacing: {
        '60px': '60px', // 사용자 정의 간격 추가
        '50px': '50px',
        '56px': '56px',
      },
      borderRadius: {
        '10px': '10px', // 사용자 정의 둥근 모서리 추가
      },
      rotate: {
        '-45deg': '-45deg', // 사용자 정의 회전 각도 추가
        '45deg': '45deg',
      }
    },
  },
  plugins: [],
};
export default config;
