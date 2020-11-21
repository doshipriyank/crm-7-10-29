$(document).ready(function(){const e="Select Product Type",t="Horizontal Centrifugal Pump",i="Vertical Centrifugal Pump",o="AODD",n="Dosing Plunger Pump",a="Dosing Hydraulic Diaphragm Pump",c="Magnetic Drive Pump",r="Domestic",l="International",s="Select Terms";var P={PUMPSPECS_CP:"Pump Specification Centrifugal Pump",MOC_CP:"Material of Construction Centrifugal Pump"},u={PRODUCT_TYPE:"Product Type",OVERVIEW:"Overview",ACCOUNT_COMPANY:"Account / Company",PROC_DETAILS:"Process Details",PUMP_DETAILS:"Pump Details",LINE_ITEMS:"Line Items",MOTOR:"MOTOR",T_C:"TERMS & CONDITIONS"},d={PUMPSPEC_AODD:"Pump Specification AODD Pump",MOC_AODD:"Material of Construction AODD Pump"},m={PUMPSPEC_DOSING:"Pump Specification Dosing / Metering",MOC_DOSING:"MOC Dosing / Metering"},S={PUMPSPECS_CP:"Pump Specification Centrifugal Pump",MOC_MDP:"Material Of Construction - MDP"},p={WORM_WHEEL:"Worm Wheel",GEAR_HOUSING:"Gear Housing",COUPLING_GUARD:"Coupling Guard",PUMP_MOUNTING:"Pump Drive Mounting Base"},E={STRAINER:"Strainer",STUFFBOX:"Stuffing Box",COL_PIPE:"Column Pipe",DEL_PIPE:"Delivery Pipe",MOUNT_PLATE:"Mounting Plate",MOTOR_STOOL:"Motor Stool"},C={INCOTERMS:"Incoterms",SHIPMENT:"Shipment"},g={INCOTERMS:"Incoterms",SHIPMENT:"Shipment",DELIVERY:"Delivery:",FREIGHT_INS:"Freight & Ins",PF_CHARGES:"P&F Charges",GST:"GST",PAYMENT:"Payment",VALIDITY:"Validity"},h={PAYMENT:"Payment",VALIDITY:"Validity"},T={DELIVERY:"Delivery:",FREIGHT_INS:"Freight & Ins",PF_CHARGES:"P&F Charges",GST:"GST"};const f="  Please Select One of the following Product Type.",M="  Please select One of the following International or Domestic T&Cs.";var O=0,_=0;function D(r,l){switch(r){case e:0===O&&N(f),O++,R(!0);break;case t:console.log("Product Selected - "+t),y(),I(u,g,!0),I(P,E,!0);break;case i:console.log("Product Selected - "+i),y(),I(u,g,!0),I(P,E,!1);break;case o:console.log("Product Selected - "+a),y(),I(u,g,!0),I(d);break;case a:console.log("Product Selected - "+a),y(),I(u,g,!0),I(m,p,!0);break;case n:console.log("Product Selected - "+n),y(),I(u,g,!0),I(m,p,!1);break;case c:console.log("Product Selected - "+c),y(),I(u,g,!0),I(S,!1);break;default:console.log("Product Not Available - "+r)}}function I(e,t,i){$(".panel-heading").each(function(){var o=$(this).children().last().text().trim();for(var n in e)o===e[n]&&($(this).parent("div.panel").show(),$("div.label").each(function(){var e=$(this).text().trim();for(var o in t)e.match(t[o])&&i&&$(this).parent().hide(),e.match(t[o])&&!i&&$(this).parent().show()}))})}function A(e){switch(e){case s:0==_&&N(M),_++,R(!0);break;case r:console.log("TERMS SELECTED - "+r),v(h,!0),v(T,!0),v(C,!1);break;case l:console.log("TERMS SELECTED - "+l),v(h,!0),v(C,!0),v(T,!1)}}function v(e,t){$("div.label").each(function(){var i=$(this).text().trim();if(t)for(var o in e)i.match(e[o])&&$(this).parent().show();if(!t)for(var o in e)i.match(e[o])&&$(this).parent().hide()})}function N(e){$("#EditView_tabs").prepend('<div  class="errMsg alert alert-danger fade in"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Error!</strong>'+e+"</div>")}function R(e){$("[id=SAVE]").attr("disabled",e),$("[id=CANCEL]").attr("disabled",e)}function y(){$(".panel-heading").each(function(){$(this).parent("div.panel").hide()})}("CREATE"===$(".module-title-text").text().trim()&&$("#SAVE").length&&$("#CANCEL").length&&y(),$("select#product_type_c").on("change",function(){$("#product_type_c :selected").text().trim();D($("#product_type_c :selected").text().trim())}),$("select#select_terms_c").on("change",function(){A($("#select_terms_c :selected").text().trim())}),$(document).on("click","a.close",function(){console.log("Product Type - "+O+"; T&C Count - "+_),$(this).parent("div.errMsg").text().trim().match(f.trim())?O--:_--,0==O&&0==_&&R(!1)}),"Quotes"!==$(".module-title-text").text().trim()&&"Quotes"!==$(".module-title-text").text().trim()&&"ACTIONS"==$("#tab-actions > a.dropdown-toggle").text())&&(D($("div[field='product_type_c']").text().trim()),A($("div[field='select_terms_c']").text().trim()))});