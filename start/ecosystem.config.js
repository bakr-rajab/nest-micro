module.exports = {
    apps: [
        {
            name: 'microservice_orders',
            script: 'ts-node ../apps/orders/src/main.ts',
        // script: '../dist/apps/orders/main.js',
            watch: true,
            // Delay between restart
            // interpreter: '../node_modules/.bin/ts-node',
            watch_delay: 1000,
            // ignore_watch: ["node_modules", "dist"],
            node_args: '-r ../apps/orders/tsconfig.app.json',
            kill_timeout: 3,
            // source_map_support: true,
            error_file: '../log/orders.error.log',
            out_file: '../log/orders.out.log',
            env: {


                NODE_ENV: 'development',
                PORT: 4000,
            },

        },
        {
            name: 'microservice_auth',
            script: 'ts-node ../apps/auth/src/main.ts',
            watch: true,
            // Delay between restart
            watch_delay: 1000,
            ignore_watch: ["node_modules", "dist"],

            kill_timeout: 3000,
            error_file: '../log/auth.error.log',
            out_file: '../log/auth.out.log',
            env: {
                NODE_ENV: 'development',
                PORT: 4001,
            },

            // exec_mode: 'cluster',
        },

        {
            name: 'microservice_bills',
            script: 'ts-node ../apps/billing/src/main.ts',
            watch: true,
            // Delay between restart
            watch_delay: 1000,
            ignore_watch: ["node_modules","dist"],

            kill_timeout: 3000,
            error_file: '../log/bills.error.log',
            out_file: '../log/bills.out.log',
            env: {
                NODE_ENV: 'development',
                PORT: 4002,
            },

        //     // exec_mode: 'cluster',
        },
    ],
};
