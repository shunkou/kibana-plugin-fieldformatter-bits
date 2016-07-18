import exampleRoute from './server/routes/example';

export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],

    uiExports: {
      app: {
        title: 'Kibana Plugin Fieldformatter Bits',
        description: 'kibana plugin to add fieldformatter type Bits',
        main: 'plugins/kibana_plugin_fieldformatter_bits/app'
      },
      hacks: [
        'plugins/kibana_plugin_fieldformatter_bits/hack'
      ]
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },

    init(server, options) {
      // Add server routes and initalize the plugin here
      exampleRoute(server);
    }

  });
};
