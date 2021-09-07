$(function () {
  $("form[name='questions']").validate({
    rules: {
      f: "required",
      s: "required",
      t: "required",
      fo: "required",
      fi: "required",
      si: "required",
      se: "required",
    },
    messages: {},

    submitHandler: function (form) {
      form.submit();
    },
  });
});
