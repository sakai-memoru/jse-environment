(function(){
var CLS_ = {};

CLS_.Version = "0.0.1";
CLS_.MODULE_NAME = "Program";
/**
 * doMain
 * @param {string} str
 * @return {int} ret
 */
CLS_.doMain = function(str){
  // --------------------- begin.
  console.info("// ------------------ begin.");
  var ret = 0;
  var _ = exports._
  var DateUtil = exports.DateUtil;
  // --------------------- process.
  var dtm = new Date();
  var format = 'yyyy/MM/dd(ddd)hh:mm';
  var formatted = DateUtil.format_date(dtm, format);  
  console.log(CLS_.MODULE_NAME);
  console.log(formatted + " - " + str);
  // --------------------- end...
  console.info("// ------------------ end...");
  return ret;

}

exports.Program = CLS_;

}())
