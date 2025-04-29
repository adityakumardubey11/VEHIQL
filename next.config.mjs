/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsHmrCache: false, //default to true
    },
    
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "peoutgqwghxgoimcmypz.supabase.co"
            },
        ],
    },
    async headers(){
        return [
           {
            source:"/embeded",
            headers:[
                {
                key:"Content-Security-Policy",
                value: "frame-src 'self' https://vehiqle.created.app;",
                },
            ],
           },
        ]
    }
};

export default nextConfig;
