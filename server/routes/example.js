export default function (server) {

  server.route({
    path: '/api/kibana_plugin_fieldformatter_bits/example',
    method: 'GET',
    handler(req, reply) {
      reply({ time: (new Date()).toISOString() });
    }
  });

};
