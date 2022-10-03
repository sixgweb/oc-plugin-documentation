export default {
    base: '/oc-plugin-documentation',
    title: 'Sixgweb Documenation',
    themeConfig: {
        siteTitle: false,
        nav: [
            { text: 'Attributize', link: '/attributize/', activeMatch: '/attributize/' },
            { text: 'Conditions', link: '/conditions/', activeMatch: '/conditions/' },
        ],
        sidebar: {
            '/attributize/': [
                {
                    text: 'Getting Started',
                    items: [
                        { text: 'Introduction', link: '/attributize/' },
                        { text: 'Installation', link: '/attributize/installation' },
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
                                    text: 'Configuration Tab',
                                    link: '/attributize/usage/editor/tabs/configuration'
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
                            ],
                        },
                        { text: 'Field Component', link: '/attributize/usage/component' },
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
                        { text: 'RainLab User', link: '/attributize/integrations/rainlab-user' },
                        { text: 'RainLab Location', link: '/attributize/integrations/rainlab-location' },
                        { text: 'RainLab Translate', link: '/attributize/integrations/rainlab-translate' },
                        {
                            text: 'Build Your Own',
                            link: '/attributize/integrations/build-your-own',
                            items: [
                                {
                                    text: 'Methodology',
                                    link: '/attributize/integrations/build-your-own/methodology',
                                },
                                {
                                    text: 'Behaviors',
                                    link: '/attributize/integrations/build-your-own/behaviors',
                                },
                                {
                                    text: 'Events',
                                    link: '/attributize/integrations/build-your-own/events',
                                }
                            ]
                        },
                    ]
                },
            ],
            '/conditions/': [
                {
                    text: 'Getting Started',
                    items: [
                        { text: 'Introduction', link: '/conditions/' },
                        { text: 'Installation', link: '/conditions/installation' },
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
                    text: 'Integrations',
                    items: [
                        { text: 'Sixgweb.Attrbituzize', link: '/conditions/integrations/sixgweb-attributize' },
                        { text: 'RainLab.User', link: '/conditions/integrations/rainlab-user' },
                        {
                            text: 'Build Your Own',
                            link: '/conditions/integrations/build-your-own',
                            items: [
                                {
                                    text: 'Methodology',
                                    link: '/conditions/integrations/build-your-own/methodology',
                                },
                                {
                                    text: 'Behaviors',
                                    link: '/conditions/integrations/build-your-own/behaviors',
                                }
                            ]
                        },
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
