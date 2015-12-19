Package.describe({
  name: "clinical:autoform",
  summary: "Easily create forms with automatic insert and update, and automatic reactive validation.",
  git: "https://github.com/clinical-meteor/clinical-autoform.git",
  version: "6.8.4"
});

Package.onUse(function (api) {
  // Dependencies
  api.versionsFrom('1.1.0.3');

  // common
  api.use('aldeed:simple-schema@1.1.0');
  api.use('check');

  // client
  api.use(['livedata', 'underscore', 'deps', 'templating', 'ui', 'blaze', 'ejson', 'reactive-var', 'reactive-dict', 'random', 'jquery'], 'client');
  api.use('momentjs:moment@2.10.6', 'client');
  api.use('mrt:moment-timezone@0.2.1', 'client', {weak: true});
  api.use('aldeed:moment-timezone@0.4.0', 'client', {weak: true});
  api.use(['aldeed:collection2@2.0.0', 'reload'], 'client', {weak: true});

  // Imply SS to make sure SimpleSchema object is available to app
  api.imply('aldeed:simple-schema');

  // Exports
  api.export('AutoForm', 'client');
  api.export('Utility', 'client', {testOnly: true});

  // Common Files
  api.addFiles(['lib/autoform-common.js']);

  // Client Files
  api.addFiles([
    // utilities and general init
    'client/utility.js',
    'client/form-preserve.js',
    'client/autoform-hooks.js',
    'client/autoform-formdata.js',
    'client/autoform-arrays.js',
    'client/autoform.js',
    // global helpers
    'client/autoform-helpers.js',
    // validation
    'client/autoform-validation.js',
    // inputs
    'client/autoform-inputs.js',
    // public API
    'client/autoform-api.js',
    // form types
    'client/formTypes/insert.js',
    'client/formTypes/update.js',
    'client/formTypes/update-pushArray.js',
    'client/formTypes/method.js',
    'client/formTypes/method-update.js',
    'client/formTypes/normal.js',
    'client/formTypes/readonly.js',
    'client/formTypes/disabled.js',
    // input types
    'client/inputTypes/value-converters.js',
    'client/inputTypes/boolean-checkbox/boolean-checkbox.html',
    'client/inputTypes/boolean-checkbox/boolean-checkbox.js',
    'client/inputTypes/boolean-radios/boolean-radios.html',
    'client/inputTypes/boolean-radios/boolean-radios.js',
    'client/inputTypes/boolean-select/boolean-select.html',
    'client/inputTypes/boolean-select/boolean-select.js',
    'client/inputTypes/button/button.html',
    'client/inputTypes/button/button.js',
    'client/inputTypes/color/color.html',
    'client/inputTypes/color/color.js',
    'client/inputTypes/contenteditable/contenteditable.html',
    'client/inputTypes/contenteditable/contenteditable.js',
    'client/inputTypes/date/date.html',
    'client/inputTypes/date/date.js',
    'client/inputTypes/datetime/datetime.html',
    'client/inputTypes/datetime/datetime.js',
    'client/inputTypes/datetime-local/datetime-local.html',
    'client/inputTypes/datetime-local/datetime-local.js',
    'client/inputTypes/email/email.html',
    'client/inputTypes/email/email.js',
    'client/inputTypes/file/file.html',
    'client/inputTypes/file/file.js',
    'client/inputTypes/hidden/hidden.html',
    'client/inputTypes/hidden/hidden.js',
    'client/inputTypes/image/image.html',
    'client/inputTypes/image/image.js',
    'client/inputTypes/month/month.html',
    'client/inputTypes/month/month.js',
    'client/inputTypes/number/number.html',
    'client/inputTypes/number/number.js',
    'client/inputTypes/password/password.html',
    'client/inputTypes/password/password.js',
    'client/inputTypes/radio/radio.html',
    'client/inputTypes/radio/radio.js',
    'client/inputTypes/range/range.html',
    'client/inputTypes/range/range.js',
    'client/inputTypes/reset/reset.html',
    'client/inputTypes/reset/reset.js',
    'client/inputTypes/search/search.html',
    'client/inputTypes/search/search.js',
    'client/inputTypes/select/select.html',
    'client/inputTypes/select/select.js',
    'client/inputTypes/select-checkbox/select-checkbox.html',
    'client/inputTypes/select-checkbox/select-checkbox.js',
    'client/inputTypes/select-checkbox-inline/select-checkbox-inline.html',
    'client/inputTypes/select-checkbox-inline/select-checkbox-inline.js',
    'client/inputTypes/select-multiple/select-multiple.html',
    'client/inputTypes/select-multiple/select-multiple.js',
    'client/inputTypes/select-radio/select-radio.html',
    'client/inputTypes/select-radio/select-radio.js',
    'client/inputTypes/select-radio-inline/select-radio-inline.html',
    'client/inputTypes/select-radio-inline/select-radio-inline.js',
    'client/inputTypes/submit/submit.html',
    'client/inputTypes/submit/submit.js',
    'client/inputTypes/tel/tel.html',
    'client/inputTypes/tel/tel.js',
    'client/inputTypes/text/text.html',
    'client/inputTypes/text/text.js',
    'client/inputTypes/textarea/textarea.html',
    'client/inputTypes/textarea/textarea.js',
    'client/inputTypes/time/time.html',
    'client/inputTypes/time/time.js',
    'client/inputTypes/url/url.html',
    'client/inputTypes/url/url.js',
    'client/inputTypes/week/week.html',
    'client/inputTypes/week/week.js',
    // components that render a form
    'client/components/autoForm/autoForm.html',
    'client/components/autoForm/autoForm.js',
    'client/components/quickForm/quickForm.html',
    'client/components/quickForm/quickForm.js',
    // client/components that render controls within a form
    'client/components/afArrayField/afArrayField.html',
    'client/components/afArrayField/afArrayField.js',
    'client/components/afEachArrayItem/afEachArrayItem.html',
    'client/components/afEachArrayItem/afEachArrayItem.js',
    'client/components/afFieldInput/afFieldInput.html',
    'client/components/afFieldInput/afFieldInput.js',
    'client/components/afFormGroup/afFormGroup.html',
    'client/components/afFormGroup/afFormGroup.js',
    'client/components/afObjectField/afObjectField.html',
    'client/components/afObjectField/afObjectField.js',
    'client/components/afQuickField/afQuickField.html',
    'client/components/afQuickField/afQuickField.js',
    'client/components/afQuickFields/afQuickFields.html',
    'client/components/afQuickFields/afQuickFields.js',
    // event handling
    'client/autoform-events.js',
    // bootstrap3 Template - General
    'client/templates/bootstrap3/bootstrap3.js',
    // bootstrap3 Template - Components
    'client/templates/bootstrap3/components/quickForm/quickForm.html',
    'client/templates/bootstrap3/components/quickForm/quickForm.js',
    'client/templates/bootstrap3/components/afArrayField/afArrayField.html',
    'client/templates/bootstrap3/components/afArrayField/afArrayField.css',
    'client/templates/bootstrap3/components/afFormGroup/afFormGroup.html',
    'client/templates/bootstrap3/components/afFormGroup/afFormGroup.js',
    'client/templates/bootstrap3/components/afObjectField/afObjectField.html',
    'client/templates/bootstrap3/components/afObjectField/afObjectField.js',
    // bootstrap3 Template - Input Types
    'client/templates/bootstrap3/inputTypes/boolean-checkbox/boolean-checkbox.html',
    'client/templates/bootstrap3/inputTypes/boolean-radios/boolean-radios.html',
    'client/templates/bootstrap3/inputTypes/boolean-radios/boolean-radios.js',
    'client/templates/bootstrap3/inputTypes/boolean-select/boolean-select.html',
    'client/templates/bootstrap3/inputTypes/button/button.html',
    'client/templates/bootstrap3/inputTypes/color/color.html',
    'client/templates/bootstrap3/inputTypes/date/date.html',
    'client/templates/bootstrap3/inputTypes/datetime/datetime.html',
    'client/templates/bootstrap3/inputTypes/datetime-local/datetime-local.html',
    'client/templates/bootstrap3/inputTypes/email/email.html',
    'client/templates/bootstrap3/inputTypes/month/month.html',
    'client/templates/bootstrap3/inputTypes/number/number.html',
    'client/templates/bootstrap3/inputTypes/password/password.html',
    'client/templates/bootstrap3/inputTypes/radio/radio.html',
    'client/templates/bootstrap3/inputTypes/radio/radio.js',
    'client/templates/bootstrap3/inputTypes/range/range.html',
    'client/templates/bootstrap3/inputTypes/reset/reset.html',
    'client/templates/bootstrap3/inputTypes/search/search.html',
    'client/templates/bootstrap3/inputTypes/select/select.html',
    'client/templates/bootstrap3/inputTypes/select-checkbox/select-checkbox.html',
    'client/templates/bootstrap3/inputTypes/select-checkbox/select-checkbox.js',
    'client/templates/bootstrap3/inputTypes/select-checkbox-inline/select-checkbox-inline.html',
    'client/templates/bootstrap3/inputTypes/select-checkbox-inline/select-checkbox-inline.js',
    'client/templates/bootstrap3/inputTypes/select-checkbox-inline/select-checkbox-inline.css',
    'client/templates/bootstrap3/inputTypes/select-multiple/select-multiple.html',
    'client/templates/bootstrap3/inputTypes/select-radio/select-radio.html',
    'client/templates/bootstrap3/inputTypes/select-radio/select-radio.js',
    'client/templates/bootstrap3/inputTypes/select-radio-inline/select-radio-inline.html',
    'client/templates/bootstrap3/inputTypes/select-radio-inline/select-radio-inline.js',
    'client/templates/bootstrap3/inputTypes/select-radio-inline/select-radio-inline.css',
    'client/templates/bootstrap3/inputTypes/submit/submit.html',
    'client/templates/bootstrap3/inputTypes/tel/tel.html',
    'client/templates/bootstrap3/inputTypes/text/text.html',
    'client/templates/bootstrap3/inputTypes/textarea/textarea.html',
    'client/templates/bootstrap3/inputTypes/time/time.html',
    'client/templates/bootstrap3/inputTypes/url/url.html',
    'client/templates/bootstrap3/inputTypes/week/week.html',
    // bootstrap3-horizontal Template - General
    'client/templates/bootstrap3-horizontal/bootstrap3-horizontal.css',
    // bootstrap3-horizontal Template - Components
    'client/templates/bootstrap3-horizontal/components/quickForm/quickForm.html',
    'client/templates/bootstrap3-horizontal/components/quickForm/quickForm.js',
    'client/templates/bootstrap3-horizontal/components/afArrayField/afArrayField.html',
    'client/templates/bootstrap3-horizontal/components/afArrayField/afArrayField.js',
    'client/templates/bootstrap3-horizontal/components/afFormGroup/afFormGroup.html',
    'client/templates/bootstrap3-horizontal/components/afFormGroup/afFormGroup.js',
    'client/templates/bootstrap3-horizontal/components/afObjectField/afObjectField.html',
    'client/templates/bootstrap3-horizontal/components/afObjectField/afObjectField.js',
    // bootstrap3-horizontal Template - Input Types
    'client/templates/bootstrap3-horizontal/inputTypes/boolean-checkbox/boolean-checkbox.html',
    'client/templates/bootstrap3-horizontal/inputTypes/boolean-checkbox/boolean-checkbox.js',
    // bootstrap3-inline Template
    'client/templates/bootstrap3-inline/bootstrap3-inline.html',
    'client/templates/bootstrap3-inline/bootstrap3-inline.js',
    'client/templates/bootstrap3-inline/bootstrap3-inline.css',
    // plain Template
    'client/templates/plain/components/quickForm/quickForm.html',
    'client/templates/plain/components/quickForm/quickForm.js',
    'client/templates/plain/components/afArrayField/afArrayField.html',
    'client/templates/plain/components/afFormGroup/afFormGroup.html',
    'client/templates/plain/components/afObjectField/afObjectField.html',
    'client/templates/plain/components/afObjectField/afObjectField.js',
    // plain-fieldset Template
    'client/templates/plain-fieldset/plain-fieldset.html',
    'client/templates/plain-fieldset/plain-fieldset.js',
  ], 'client');

});

Package.onTest(function (api) {
  api.use(['aldeed:autoform', 'tinytest', 'underscore', 'mongo']);
  api.use('momentjs:moment', 'client');
  api.addFiles(['tests/utility-tests.js', 'tests/autoform-tests.js']);
});
