module.exports = {
    apps: [
        {
            name: 'orders',
            script: 'ts-node ../apps/orders/src/main.ts',
            watch: true,
            watch_delay: 1000,
            kill_timeout: 3,
            // source_map_support: true,
            // error_file: '../log/orders.error.log',
            // out_file: '../log/orders.out.log',
            env: {
                NODE_ENV: 'development',
                PORT: 3000,
                DATABASE_URL: "mysql://satafood:SyTtW5eE.*_Fj(D[@78.46.76.133:3306/satafood?pgbouncer=true",
                TOKEN_SECRET: "153f730922cf5839cdef1923d269faa8afd46339013ec7cc4369e798f5571007dcc446e199e1838558f339ee217caa2dbb909cb8695df0a29c2ca4b9f2cafcbb8e5341837d53486c74786838978fa8cd1e5bed9ca1f05eb786838978fa8cd1e5be799646591913b93f5",
                JWT_KEY: "153f730922cf5839cdef1923d269faa8afd46339013ec7cc4369e798f5571007dcc446e199e1838558f339ee217caa2dbb909cb8695df0a29c2ca4b9f2cafcbb8e5341837d53486c74786838978fa8cd1e5bed9ca1f05eb786838978fa8cd1e5be799646591913b93f5",
                TOKEN_EXPIRATION: "hour || minutes || 48h",
                MYSQL_PASSWORD: "f9rOqrj)wf0h",
                MYSQL_USER: "fastmicroservice_v1",
                HOST:"162.0.210.160",
                MYSQL_DB: "fastmicroservice_v1",
                MAIL_SENDER_EMAIL_ADDRESS: "infos@satatechnologygroup.com",
                MAIL_SENDER_EMAIL_PASSWORD: "!fD;SBx)t~-9",
            },

        },
        {
            name: 'auth',
            script: 'ts-node ../apps/auth/src/main.ts',
            watch: true,
            // instances: "1",
            // exec_mode: "cluster",
            // Delay between restart
            // watch_delay: 1000,
            // ignore_watch: ["node_modules", "dist"],

            kill_timeout: 3,
            error_file: '../log/auth.error.log',
            out_file: '../log/auth.out.log',
            env: {
                NODE_ENV: 'development',
                PORT: 3001,
            },
        },

        // {
        //     name: 'microservice_bills',
        //     script: 'ts-node ../apps/billing/src/main.ts',
        //     watch: true,
        //     // Delay between restart
        //     watch_delay: 1000,
        //     ignore_watch: ["node_modules", "dist"],

        //     kill_timeout: 3000,
        //     error_file: '../log/bills.error.log',
        //     out_file: '../log/bills.out.log',
        //     env: {
        //         NODE_ENV: 'development',
        //         PORT: 4002,
        //     },

        //     //     // exec_mode: 'cluster',
        // },
    ],
};
