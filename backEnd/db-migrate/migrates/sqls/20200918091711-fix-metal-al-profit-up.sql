update formula.parameter_value set value = '0.1' where parameter_id in (select id from formula.common_parameter where label = 'al_management_and_profit');
update formula.parameter_value set value = '0.15' where parameter_id in (select id from formula.common_parameter where label = 'metal_management_and_profit');