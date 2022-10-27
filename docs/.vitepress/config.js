export default {
    base: '/oc-plugin-documentation/',
    title: 'Sixgweb Documenation',
    appearance: true,
    themeConfig: {
        siteTitle: false,
        logo: 'https://raw.githubusercontent.com/sixgweb/oc-plugin-documentation/main/docs/.vitepress/dist/assets/logo-v5.png',
        footer: {
            message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
            copyright: 'Copyright © 2022 <a href="https://github.com/sixgweb">Sixgweb</a>'
        },
        nav: [
            {
                text: 'Attributize',
                activeMatch: '/attributize/',
                items: [
                    {
                        text: 'Documentation',
                        link: '/attributize/',
                    },
                    {
                        text: 'Integrations',
                        items: [
                            {
                                text: 'RainLab.User',
                                link: '/attributizeusers/',
                            },
                            {
                                text: 'RainLab.Location',
                                link: '/attributizelocation/',
                            }
                        ],
                    },
                ]
            },
            {
                text: 'Conditions',
                activeMatch: '/conditions/',
                items: [
                    {
                        text: 'Documentation',
                        link: '/conditions/',
                    },
                    {
                        text: 'Integrations',
                        items: [
                            {
                                text: 'Sixgweb.Attributize',
                                link: '/conditionsattributize/',
                                activeMatch: '/conditionsattributize/',
                            },
                            {
                                text: 'October.Tailor',
                                link: '/conditionstailor/',
                                activeMatch: '/conditionstailor/',
                            },
                            {
                                text: 'RainLab.User',
                                link: '/conditionsusers/',
                                activeMatch: '/conditionsusers/',
                            }
                        ],
                    },
                ]

            },
        ],
        sidebar: {
            '/attributize/': [
                {
                    text: 'Attributize',
                    items: [
                        { text: 'Introduction', link: '/attributize/' },
                        { text: 'Installation', link: '/attributize/installation' },
                        { text: 'Settings', link: '/attributize/settings' },
                        { text: 'Import/Export', link: '/attributize/import-export' },
                        { text: 'FAQ', link: '/attributize/faq' },
                    ]
                },
                {
                    text: 'Usage',
                    items: [
                        { text: 'Field List', link: '/attributize/usage/list' },
                        {
                            text: 'Field Editor',
                            link: '/attributize/usage/editor',
                            items: [
                                {
                                    text: 'Field Tab',
                                    link: '/attributize/usage/editor/tabs/field'
                                },
                                {
                                    text: 'Validation Tab',
                                    link: '/attributize/usage/editor/tabs/validation'
                                },
                                {
                                    text: 'Visibility Tab',
                                    link: '/attributize/usage/editor/tabs/visibility'
                                },
                                {
                                    text: 'Dependency Tab',
                                    link: '/attributize/usage/editor/tabs/dependency'
                                },
                                {
                                    text: 'Settings Tab',
                                    link: '/attributize/usage/editor/tabs/settings'
                                },
                            ],
                        },
                        { text: 'Fields Component', link: '/attributize/usage/component' },
                        { text: 'Twig Filter', link: '/attributize/usage/twigfilter' },
                    ]
                },
                {
                    text: 'Field Types',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        { text: 'Checkbox', link: '/attributize/fields/checkbox' },
                        { text: 'Checkbox List', link: '/attributize/fields/checkboxlist' },
                        { text: 'Color Picker', link: '/attributize/fields/colorpicker' },
                        { text: 'Date Picker', link: '/attributize/fields/datepicker' },
                        { text: 'Dropdown', link: '/attributize/fields/dropdown' },
                        { text: 'Email', link: '/attributize/fields/email' },
                        { text: 'File Upload', link: '/attributize/fields/fileupload' },
                        { text: 'Number', link: '/attributize/fields/number' },
                        { text: 'Radio', link: '/attributize/fields/radio' },
                        { text: 'Repeater', link: '/attributize/fields/repeater' },
                        { text: 'Section', link: '/attributize/fields/section' },
                        { text: 'Switch', link: '/attributize/fields/switch' },
                        { text: 'Text', link: '/attributize/fields/text' },
                        { text: 'Text Area', link: '/attributize/fields/textarea' },
                    ]
                },
                {
                    text: 'Integrations',
                    items: [
                        { text: 'RainLab User', link: '/attributizeusers/' },
                        { text: 'RainLab Location', link: '/attributizelocation/' },
                        {
                            text: 'Build Your Own',
                            link: '/attributize/integrations/build-your-own',
                        },
                    ]
                },
                {
                    text: 'API',
                    items: [
                        {
                            text: 'Behaviors',
                            link: '/attributize/api/behaviors',
                        },
                        {
                            text: 'Events',
                            link: '/attributize/api/events',
                        },
                        {
                            text: 'Event Handler',
                            link: '/attributize/api/eventhandler',
                        },
                    ]
                },
            ],
            '/conditions/': [
                {
                    text: 'Conditions',
                    items: [
                        { text: 'Introduction', link: '/conditions/' },
                        { text: 'Installation', link: '/conditions/installation' },
                        { text: 'FAQ', link: '/conditions/faq' },
                    ]
                },
                {
                    text: 'Usage',
                    items: [
                        { text: 'Editor', link: '/conditions/usage/editor' },
                        { text: 'Filter', link: '/conditions/usage/filter' },
                        { text: 'Column', link: '/conditions/usage/column' },
                    ]
                },
                {
                    text: 'Use Cases',
                    items: [
                        {
                            text: 'User Group Based Fields',
                            link: '/conditions/use-cases/user-group-based-fields',
                        },
                        {
                            text: 'User Group Based Tailor Content',
                            link: '/conditions/use-cases/user-group-based-tailor-content',
                        }
                    ],
                },
                {
                    text: 'Integrations',
                    items: [
                        { text: 'Sixgweb.Attributize', link: '/conditionsattributize/' },
                        { text: 'October.Tailor', link: '/conditionstailor/' },
                        { text: 'RainLab.User', link: '/conditionsusers/' },
                        {
                            text: 'Build Your Own',
                            link: '/conditions/integrations/build-your-own',
                        },
                    ]
                },
                {
                    text: 'API',
                    items: [
                        {
                            text: 'Behaviors',
                            link: '/conditions/api/behaviors',
                        },
                        {
                            text: 'Conditioners Manager',
                            link: '/conditions/api/conditionsmanager',
                        },
                        {
                            text: 'Event Handlers',
                            items: [
                                {
                                    text: 'Conditionable',
                                    link: '/conditions/api/conditionableeventhandler',
                                },
                                {
                                    text: 'Conditioner',
                                    link: '/conditions/api/conditionereventhandler',
                                },
                            ]
                        },
                    ]
                },

            ],
            '/attributizeusers/': [
                {
                    text: 'Attributize Users',
                    items: [
                        { text: 'Introduction', link: '/attributizeusers/' },
                        { text: 'Installation', link: '/attributizeusers/installation' },
                        { text: 'Settings', link: '/attributizeusers/settings' },
                    ]
                },
            ],
            '/attributizelocation/': [
                {
                    text: 'Attributize Location',
                    items: [
                        { text: 'Introduction', link: '/attributizelocation/' },
                        { text: 'Installation', link: '/attributizelocation/installation' },
                    ]
                },
            ],
            '/conditionsattributize/': [
                {
                    text: 'Conditions Attributize',
                    items: [
                        { text: 'Introduction', link: '/conditionsattributize/' },
                        { text: 'Installation', link: '/conditionsattributize/installation' },
                    ]
                },
            ],
            '/conditionstailor/': [
                {
                    text: 'Conditions Tailor',
                    items: [
                        { text: 'Introduction', link: '/conditionstailor/' },
                        { text: 'Installation', link: '/conditionstailor/installation' },
                    ]
                },
            ],
            '/conditionsusers/': [
                {
                    text: 'Conditions Users',
                    items: [
                        { text: 'Introduction', link: '/conditionsusers/' },
                        { text: 'Installation', link: '/conditionsusers/installation' },
                    ]
                },
            ],
            '/': [
                {
                    text: 'Plugins',
                    items: [
                        { text: 'Attributize', link: '/attributize/' },
                        { text: 'Conditions', link: '/conditions/' },
                    ]
                }
            ],
        }
    }
}
