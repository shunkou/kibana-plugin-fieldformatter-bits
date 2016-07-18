module.exports = function (kibana) {
  return new kibana.Plugin({
    id: 'fieldformatter-bits',
    name: 'fieldformatter-bits',
    uiExports: {
      // fieldFormat is not working as of Kibana 4.5.1
      visTypes: ['plugins/fieldformatter-bits/fieldformatter-bits']
    }
  });
};
