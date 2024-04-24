export default defineAppConfig({
    title: 'Premier Art',
    description: 'Site en construction',
    ui: {
        primary: 'purple',
        // primary: 'yellow',
        gray: 'neutral',
        variables: {
            light: {
                background: '255 255 255',
                foreground: 'var(--color-gray-700)'
            },
            dark: {
                background: '17 15 17',
                foreground: 'var(--color-gray-200)'
            },
            header: {
                height: '4rem'
            }
        },
        icons:{
            dynamic: true
        },
    },
})
