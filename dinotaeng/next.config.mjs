/** @type {import('next').NextConfig} */
const nextConfig = {
    // 애플리케이션의 잠재적인 문제를 알아내기 위한 도구
    reactStrictMode: true,
    compiler: {
        // styled-components 사용시 새로고침할때 스타일이 사라지는 이슈 해결
        styledComponents: true
    }
}

export default nextConfig;