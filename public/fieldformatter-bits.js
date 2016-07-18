define(function (require) {

  require('ui/registry/field_formats').register(BitsFormatProvider);

  function BitsFormatProvider(Private) {

    var _ = require('lodash');
    var numeral = require('numeral')();
    var BoundToConfigObj = Private(require('ui/bound_to_config_obj'));
    var Numeral = Private(require('ui/stringify/types/_Numeral'));

    return Numeral.factory({
      id: 'bits',
      title: 'Bits',
      paramDefaults: new BoundToConfigObj({
        pattern: '=format:bytes:defaultPattern',
        bits: true
      }),
      sampleInputs: [1024, 5150000, 1990000000],
      prototype: {
        _convert: _.compose(
          function (valstr) {
            return valstr.replace('B', '');
          },
          _.compose(Numeral.prototype._convert, function (val) {
            return this.param('bits') ? val * 8 : val;
          })
        )
      }
    });
  }

  return BitsFormatProvider;
});
