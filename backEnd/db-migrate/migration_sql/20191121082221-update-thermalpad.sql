update formula.parameter_value set value = 175 where parameter_id = (select id from formula.thermal_pad where heat_transfer=3 and hardness=42 and thickness=1);
update formula.parameter_value set value = 180 where parameter_id = (select id from formula.thermal_pad where heat_transfer=1.3 and hardness=24 and thickness=1.5);
update formula.parameter_value set value = 125 where parameter_id =  (select id from formula.thermal_pad where heat_transfer=3 and hardness=42 and thickness=0.5);
update formula.parameter_value set value = 230 where parameter_id =  (select id from formula.thermal_pad where heat_transfer=3 and hardness=42 and thickness=1.5);
update formula.parameter_value set value = 340 where parameter_id =  (select id from formula.thermal_pad where heat_transfer=3 and hardness=42 and thickness=2.5);