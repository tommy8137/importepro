drop table if exists formula.tmp_part_category_2_product_type;
CREATE TABLE if not exists formula.tmp_part_category_2_product_type (
  part_category_1_name varchar(200),
	part_category_2_name varchar(200),
	product_type varchar(200),
  CONSTRAINT type_1_2_producttype_un UNIQUE (part_category_1_name, part_category_2_name, product_type)
);

-- no product_type for emdm
insert into formula.tmp_part_category_2_product_type(part_category_1_name, part_category_2_name)values
('Cable','FFC'),
('Cable','FPC'),
('Cable','Wire_Harness'),
('Cable','DC_in_cable'),
('Cable','Power_Cord'),
('Cable','Panel_Cable'),
('Cable','Dongle'),
('Cable','External_Cable'),
('Cable','RF_Cable'),
('Cable','Fiper'),
('Cable','FIO'),
('Cable','SATA'),
('Cable','Flat_Cable'),
('Cable','Others'),
('Cable','SAS_Mini_SAS'),
('Cable','Lan_cable'),
('Cable','Handset_cord'),
('Housing',	'Plastic'),
('Housing',	'Painting'),
('Housing',	'IMR'),
('Housing',	'Double_Injection'),
('Housing',	'RHCM_Process'),
('Housing',	'Insert_Molding'),
('Housing',	'Metal'),
('Housing',	'Aluminum鋁皮外觀件單件or組立'),
('Housing',	'Die_Casting'),
('Housing',	'C_GPU_BKT'),
('Housing',	'HDD_SSD_BKT'),
('Housing',	'Hinge'),
('Housing',	'NIL_process'),
('Housing',	'CNC_Process'),
('Housing',	'Forging'),
('Housing',	'AL_Extrusion'),
('Housing',	'Others'),
('Housing',	'Stand'),
('Housing',	'Small_Parts'),
('Housing',	'Glass'),
('Housing',	'Chemical'),
('Housing',	'Module'),
('Housing',	'Keypad'),
('Housing',	'Slide'),
('Housing',	'Metal_and_Plastic'),
('Housing',	'NCT'),
('Housing',	'MIM'),
('Packing',	'Bag'),
('Packing',	'Carton'),
('Packing',	'Carton_Unfolded'),
('Packing',	'BOX'),
('Packing',	'BOX_Unfolded'),
('Packing',	'Label'),
('Packing',	'Manual'),
('Packing',	'EPE'),
('Packing',	'EPS'),
('Packing',	'Pallet'),
('Packing',	'Others'),
('Packing',	'Others_Paper'),
('Packing',	'Others_Plastic'),
('Packing',	'Others_Non_woven'),
('Packing',	'Others_Clean_Clothes'),
('Electro_Mechanical','Mic'),
('Electro_Mechanical','Speaker'),
('Electro_Mechanical','Vibrator'),
('Electro_Mechanical','Buzzer'),
('Electro_Mechanical','Headset'),
('Electro_Mechanical','Soundbar'),
('Thermal',	'Fan'),
('Thermal',	'Module'),
('Thermal',	'Pad'),
('Thermal',	'Graphite_Sheet'),
('Thermal',	'Heatsink'),
('Thermal',	'Cu_Foil'),
('Thermal',	'Cooler'),
('RACK','RACK'),
('ME_others','Bond_Detach_Adhesive'),
('ME_others','Standoff'),
('ME_others','Screw'),
('ME_others','Nut'),
('ME_others','Waterproof_film'),
('ME_others','Rubber'),
('ME_others','Mesh'),
('ME_others','Metal_Dome'),
('ME_others','Glue'),
('ME_others','Spring'),
('ME_others','Lens'),
('ME_others','Busbar'),
('ME_others','Handset'),
('ME_others','Name_Plate'),
('ME_others','Protection_Film_of_Mylar_Sponge_Poron'),
('ME_others','Adhesive_of_Mylar_Sponge_Poron'),
('ME_others','Sponge_of_Mylar_Sponge_Poron'),
('ME_others','Mylar_of_Mylar_Sponge_Poron'),
('ME_others','Acetate_Tape_of_Mylar_Sponge_Poron'),
('ME_others','Non_Woven_of_Mylar_Sponge_Poron'),
('ME_others','Miscellaneous'),
('EMC',	'Absorber'),
('EMC',	'EMI_Spring'),
('EMC',	'Shielding_Can'),
('EMC',	'Conductive_Tape'),
('EMC',	'Gasket'),
('EMC',	'Magnet'),
('EMC',	'Al_Cu_Foil')
on conflict do nothing;

-- NB
insert into formula.tmp_part_category_2_product_type(part_category_1_name, part_category_2_name, product_type) values
('Cable','FFC', 'NB'),
('Cable','FPC', 'NB'),
('Cable','Wire_Harness', 'NB'),
('Cable','DC_in_cable', 'NB'),
('Cable','Panel_Cable', 'NB'),
('Cable','Dongle', 'NB'),
('Cable','Others', 'NB'),
('Housing',	'Plastic', 'NB'),
('Housing',	'Painting', 'NB'),
('Housing',	'IMR', 'NB'),
('Housing',	'Double_Injection', 'NB'),
('Housing',	'RHCM_Process', 'NB'),
('Housing',	'Insert_Molding', 'NB'),
('Housing',	'Metal', 'NB'),
('Housing',	'Aluminum鋁皮外觀件單件or組立', 'NB'),
('Housing',	'Die_Casting', 'NB'),
('Housing',	'C_GPU_BKT', 'NB'),
('Housing',	'HDD_SSD_BKT', 'NB'),
('Housing',	'Hinge', 'NB'),
('Housing',	'NIL_process', 'NB'),
('Housing',	'CNC_Process', 'NB'),
('Housing',	'AL_Extrusion', 'NB'),
('Housing',	'Others', 'NB'),
('Housing',	'Small_Parts', 'NB'),
('Housing',	'Glass', 'NB'),
('Housing',	'MIM', 'NB'),
('Electro_Mechanical','Mic', 'NB'),
('Electro_Mechanical','Speaker', 'NB'),
('Thermal',	'Fan', 'NB'),
('Thermal',	'Module', 'NB'),
('Thermal',	'Pad', 'NB'),
('Thermal',	'Graphite_Sheet', 'NB'),
('Thermal',	'Cu_Foil', 'NB'),
('ME_others','Bond_Detach_Adhesive', 'NB'),
('ME_others','Standoff', 'NB'),
('ME_others','Screw', 'NB'),
('ME_others','Nut', 'NB'),
('ME_others','Waterproof_film', 'NB'),
('ME_others','Rubber', 'NB'),
('ME_others','Mesh', 'NB'),
('ME_others','Metal_Dome', 'NB'),
('ME_others','Glue', 'NB'),
('ME_others','Spring', 'NB'),
('ME_others','Lens', 'NB'),
('ME_others','Name_Plate', 'NB'),
('ME_others','Protection_Film_of_Mylar_Sponge_Poron', 'NB'),
('ME_others','Adhesive_of_Mylar_Sponge_Poron', 'NB'),
('ME_others','Sponge_of_Mylar_Sponge_Poron', 'NB'),
('ME_others','Mylar_of_Mylar_Sponge_Poron', 'NB'),
('ME_others','Acetate_Tape_of_Mylar_Sponge_Poron', 'NB'),
('ME_others','Non_Woven_of_Mylar_Sponge_Poron', 'NB'),
('ME_others','Mylar/Sponge/Poron', 'NB'),
('ME_others','Miscellaneous', 'NB'),
('EMC',	'Absorber', 'NB'),
('EMC',	'EMI_Spring', 'NB'),
('EMC',	'Shielding_Can', 'NB'),
('EMC',	'Conductive_Tape', 'NB'),
('EMC',	'Gasket', 'NB'),
('EMC',	'Magnet', 'NB'),
('EMC',	'Al_Cu_Foil', 'NB')
on conflict do nothing;

-- DT
insert into formula.tmp_part_category_2_product_type(part_category_1_name, part_category_2_name, product_type)values
('Cable',	'FFC', 'DT'),
('Cable',	'FPC', 'DT'),
('Cable',	'Wire_Harness', 'DT'),
('Cable',	'Power_Cord', 'DT'),
('Cable',	'External_Cable', 'DT'),
('Cable',	'RF_Cable', 'DT'),
('Cable',	'FIO', 'DT'),
('Cable',	'SATA', 'DT'),
('Cable',	'Others', 'DT'),
('Housing',	'Plastic', 'DT'),
('Housing',	'Metal', 'DT'),
('Housing',	'Others', 'DT'),
('Housing',	'Small_Parts', 'DT'),
('Housing',	'Glass', 'DT'),
('Housing',	'Metal_and_Plastic', 'DT'),
('Packing',	'Bag', 'DT'),
('Packing',	'Carton', 'DT'),
('Packing',	'Carton_Unfolded', 'DT'),
('Packing',	'Label', 'DT'),
('Packing',	'Manual', 'DT'),
('Packing',	'EPE', 'DT'),
('Packing',	'EPS', 'DT'),
('Packing',	'Pallet', 'DT'),
('Packing',	'Others', 'DT'),
('Packing',	'Others_Paper', 'DT'),
('Packing',	'Others_Plastic', 'DT'),
('Electro_Mechanical',	'Mic', 'DT'),
('Electro_Mechanical',	'Speaker', 'DT'),
('Electro_Mechanical',	'Buzzer', 'DT'),
('Thermal',	'Fan', 'DT'),
('Thermal',	'Module', 'DT'),
('Thermal',	'Pad', 'DT'),
('Thermal',	'Heatsink', 'DT'),
('Thermal',	'Cooler', 'DT'),
('ME_others',	'Standoff', 'DT'),
('ME_others',	'Screw', 'DT'),
('ME_others',	'Nut', 'DT'),
('ME_others',	'Rubber', 'DT'),
('ME_others',	'Mesh', 'DT'),
('ME_others',	'Glue', 'DT'),
('ME_others',	'Spring', 'DT'),
('ME_others',	'Lens', 'DT'),
('ME_others',	'Busbar', 'DT'),
('ME_others',	'Name_Plate', 'DT'),
('ME_others',	'Protection_Film_of_Mylar_Sponge_Poron', 'DT'),
('ME_others',	'Adhesive_of_Mylar_Sponge_Poron', 'DT'),
('ME_others',	'Sponge_of_Mylar_Sponge_Poron', 'DT'),
('ME_others',	'Mylar_of_Mylar_Sponge_Poron', 'DT'),
('ME_others',	'Acetate_Tape_of_Mylar_Sponge_Poron', 'DT'),
('ME_others',	'Non_Woven_of_Mylar_Sponge_Poron', 'DT'),
('ME_others',	'Miscellaneous', 'DT'),
('EMC',	'Absorber', 'DT'),
('EMC',	'EMI_Spring', 'DT'),
('EMC',	'Conductive_Tape', 'DT'),
('EMC',	'Gasket', 'DT'),
('EMC',	'Magnet', 'DT'),
('EMC',	'Al_Cu_Foil', 'DT')
on conflict do nothing;

-- AIO
insert into formula.tmp_part_category_2_product_type(part_category_1_name, part_category_2_name, product_type)values
('Cable',	'FFC', 'AIO'),
('Cable',	'FPC', 'AIO'),
('Cable',	'Wire_Harness', 'AIO'),
('Cable',	'Power_Cord', 'AIO'),
('Cable',	'External_Cable', 'AIO'),
('Cable',	'RF_Cable', 'AIO'),
('Cable',	'SATA', 'AIO'),
('Cable',	'Others', 'AIO'),
('Housing',	'Plastic', 'AIO'),
('Housing',	'Metal', 'AIO'),
('Housing',	'Die_Casting', 'AIO'),
('Housing',	'Hinge', 'AIO'),
('Housing',	'Others', 'AIO'),
('Housing',	'Stand', 'AIO'),
('Housing',	'Small_Parts', 'AIO'),
('Housing',	'Glass', 'AIO'),
('Packing',	'Bag', 'AIO'),
('Packing',	'Carton', 'AIO'),
('Packing',	'Carton_Unfolded', 'AIO'),
('Packing',	'Label', 'AIO'),
('Packing',	'Manual', 'AIO'),
('Packing',	'EPE', 'AIO'),
('Packing',	'EPS', 'AIO'),
('Packing',	'Pallet', 'AIO'),
('Packing',	'Others', 'AIO'),
('Packing',	'Others_Paper', 'AIO'),
('Packing',	'Others_Plastic', 'AIO'),
('Electro_Mechanical',	'Mic', 'AIO'),
('Electro_Mechanical',	'Speaker', 'AIO'),
('Electro_Mechanical',	'Buzzer', 'AIO'),
('Thermal',	'Fan', 'AIO'),
('Thermal',	'Module', 'AIO'),
('Thermal',	'Pad', 'AIO'),
('Thermal',	'Heatsink', 'AIO'),
('Thermal',	'Cooler', 'AIO'),
('ME_others',	'Standoff', 'AIO'),
('ME_others',	'Screw', 'AIO'),
('ME_others',	'Nut', 'AIO'),
('ME_others',	'Rubber', 'AIO'),
('ME_others',	'Mesh', 'AIO'),
('ME_others',	'Glue', 'AIO'),
('ME_others',	'Spring', 'AIO'),
('ME_others',	'Lens', 'AIO'),
('ME_others',	'Busbar', 'AIO'),
('ME_others',	'Name_Plate', 'AIO'),
('ME_others',	'Protection_Film_of_Mylar_Sponge_Poron', 'AIO'),
('ME_others',	'Adhesive_of_Mylar_Sponge_Poron', 'AIO'),
('ME_others',	'Sponge_of_Mylar_Sponge_Poron', 'AIO'),
('ME_others',	'Mylar_of_Mylar_Sponge_Poron', 'AIO'),
('ME_others',	'Acetate_Tape_of_Mylar_Sponge_Poron', 'AIO'),
('ME_others',	'Non_Woven_of_Mylar_Sponge_Poron', 'AIO'),
('ME_others',	'Miscellaneous', 'AIO'),
('EMC',	'Absorber', 'AIO'),
('EMC',	'EMI_Spring', 'AIO'),
('EMC',	'Conductive_Tape', 'AIO'),
('EMC',	'Gasket', 'AIO'),
('EMC',	'Magnet', 'AIO'),
('EMC',	'Al_Cu_Foil', 'AIO')
on conflict do nothing;

-- VoIP
insert into formula.tmp_part_category_2_product_type(part_category_1_name, part_category_2_name, product_type)values
('Cable',	'FFC', 'VoIP'),
('Cable',	'FPC', 'VoIP'),
('Cable',	'Wire_Harness', 'VoIP'),
('Cable',	'Power_Cord', 'VoIP'),
('Cable',	'External_Cable', 'VoIP'),
('Cable',	'SATA', 'VoIP'),
('Cable',	'Others', 'VoIP'),
('Cable',	'Lan_cable', 'VoIP'),
('Cable',	'Handset_cord', 'VoIP'),
('Housing',	'Plastic', 'VoIP'),
('Housing',	'Metal', 'VoIP'),
('Housing',	'Die_Casting', 'VoIP'),
('Housing',	'Hinge', 'VoIP'),
('Housing',	'Others', 'VoIP'),
('Housing',	'Stand', 'VoIP'),
('Housing',	'Glass', 'VoIP'),
('Housing',	'Keypad', 'VoIP'),
('Housing',	'Slide', 'VoIP'),
('Housing',	'Metal_and_Plastic', 'VoIP'),
('Packing',	'Bag', 'VoIP'),
('Packing',	'Carton', 'VoIP'),
('Packing',	'Carton_Unfolded', 'VoIP'),
('Packing',	'BOX', 'VoIP'),
('Packing',	'BOX_Unfolded', 'VoIP'),
('Packing',	'Label', 'VoIP'),
('Packing',	'Manual', 'VoIP'),
('Packing',	'EPE', 'VoIP'),
('Packing',	'Pallet', 'VoIP'),
('Packing',	'Others', 'VoIP'),
('Packing',	'Others_Paper', 'VoIP'),
('Packing',	'Others_Plastic', 'VoIP'),
('Packing',	'Others_Non_woven', 'VoIP'),
('Electro_Mechanical',	'Mic', 'VoIP'),
('Electro_Mechanical',	'Speaker', 'VoIP'),
('Electro_Mechanical',	'Vibrator', 'VoIP'),
('Electro_Mechanical',	'Buzzer', 'VoIP'),
('Electro_Mechanical',	'Soundbar', 'VoIP'),
('Thermal',	'Fan', 'VoIP'),
('Thermal',	'Module', 'VoIP'),
('Thermal',	'Pad', 'VoIP'),
('Thermal',	'Graphite_Sheet', 'VoIP'),
('Thermal',	'Heatsink', 'VoIP'),
('ME_others',	'Standoff', 'VoIP'),
('ME_others',	'Screw', 'VoIP'),
('ME_others',	'Nut', 'VoIP'),
('ME_others',	'Rubber', 'VoIP'),
('ME_others',	'Mesh', 'VoIP'),
('ME_others',	'Glue', 'VoIP'),
('ME_others',	'Spring', 'VoIP'),
('ME_others',	'Lens', 'VoIP'),
('ME_others',	'Busbar', 'VoIP'),
('ME_others',	'Handset', 'VoIP'),
('ME_others',	'Name_Plate', 'VoIP'),
('ME_others',	'Protection_Film_of_Mylar_Sponge_Poron', 'VoIP'),
('ME_others',	'Adhesive_of_Mylar_Sponge_Poron', 'VoIP'),
('ME_others',	'Sponge_of_Mylar_Sponge_Poron', 'VoIP'),
('ME_others',	'Mylar_of_Mylar_Sponge_Poron', 'VoIP'),
('ME_others',	'Acetate_Tape_of_Mylar_Sponge_Poron', 'VoIP'),
('ME_others',	'Non_Woven_of_Mylar_Sponge_Poron', 'VoIP'),
('ME_others',	'Miscellaneous', 'VoIP'),
('EMC',	'Absorber', 'VoIP'),
('EMC',	'EMI_Spring', 'VoIP'),
('EMC',	'Gasket', 'VoIP'),
('EMC',	'Magnet', 'VoIP'),
('EMC',	'Al_Cu_Foil', 'VoIP')
on conflict do nothing;

-- Server
insert into formula.tmp_part_category_2_product_type(part_category_1_name, part_category_2_name, product_type)values
('Cable',	'FFC', 'Server'),
('Cable',	'FPC', 'Server'),
('Cable',	'Wire_Harness', 'Server'),
('Cable',	'Power_Cord', 'Server'),
('Cable',	'External_Cable', 'Server'),
('Cable',	'RF_Cable', 'Server'),
('Cable',	'FIO', 'Server'),
('Cable',	'SATA', 'Server'),
('Cable',	'Flat_Cable', 'Server'),
('Cable',	'Others', 'Server'),
('Cable',	'SAS_Mini_SAS', 'Server'),
('Cable',	'Lan_cable', 'Server'),
('Housing',	'Plastic', 'Server'),
('Housing',	'Metal', 'Server'),
('Housing',	'Die_Casting', 'Server'),
('Housing',	'Hinge', 'Server'),
('Housing',	'Others', 'Server'),
('Housing',	'Keypad', 'Server'),
('Housing',	'Slide', 'Server'),
('Housing',	'Metal_and_Plastic', 'Server'),
('Housing',	'NCT', 'Server'),
('Packing',	'Bag', 'Server'),
('Packing',	'Carton', 'Server'),
('Packing',	'Carton_Unfolded', 'Server'),
('Packing',	'BOX', 'Server'),
('Packing',	'BOX_Unfolded', 'Server'),
('Packing',	'Label', 'Server'),
('Packing',	'Manual', 'Server'),
('Packing',	'EPE', 'Server'),
('Packing',	'Pallet', 'Server'),
('Packing',	'Others', 'Server'),
('Packing',	'Others_Paper', 'Server'),
('Packing',	'Others_Plastic', 'Server'),
('Electro_Mechanical',	'Buzzer', 'Server'),
('Thermal',	'Fan', 'Server'),
('Thermal',	'Module', 'Server'),
('Thermal',	'Pad', 'Server'),
('Thermal',	'Graphite_Sheet', 'Server'),
('Thermal',	'Heatsink', 'Server'),
('Thermal',	'Cooler', 'Server'),
('RACK', 'RACK', 'Server'),
('ME_others',	'Standoff', 'Server'),
('ME_others',	'Screw', 'Server'),
('ME_others',	'Nut', 'Server'),
('ME_others',	'Rubber', 'Server'),
('ME_others',	'Mesh', 'Server'),
('ME_others',	'Glue', 'Server'),
('ME_others',	'Spring', 'Server'),
('ME_others',	'Busbar', 'Server'),
('ME_others',	'Name_Plate', 'VoIP'),
('ME_others',	'Protection_Film_of_Mylar_Sponge_Poron', 'Server'),
('ME_others',	'Adhesive_of_Mylar_Sponge_Poron', 'Server'),
('ME_others',	'Sponge_of_Mylar_Sponge_Poron', 'Server'),
('ME_others',	'Mylar_of_Mylar_Sponge_Poron', 'Server'),
('ME_others',	'Acetate_Tape_of_Mylar_Sponge_Poron', 'Server'),
('ME_others',	'Non_Woven_of_Mylar_Sponge_Poron', 'Server'),
('ME_others',	'Miscellaneous', 'Server'),
('EMC',	'Absorber', 'Server'),
('EMC',	'EMI_Spring', 'Server'),
('EMC',	'Gasket', 'Server'),
('EMC',	'Conductive_Tape', 'Server'),
('EMC',	'Magnet', 'Server'),
('EMC',	'Al_Cu_Foil', 'Server')
on conflict do nothing;

-- VAD
insert into formula.tmp_part_category_2_product_type(part_category_1_name, part_category_2_name, product_type) values
('Cable','FFC', 'VAD'),
('Cable','FPC', 'VAD'),
('Cable','Wire_Harness', 'VAD'),
('Cable','DC_in_cable', 'VAD'),
('Cable','Panel_Cable', 'VAD'),
('Cable','Dongle', 'VAD'),
('Cable','Others', 'VAD'),
('Housing',	'Plastic', 'VAD'),
('Housing',	'Painting', 'VAD'),
('Housing',	'IMR', 'VAD'),
('Housing',	'Double_Injection', 'VAD'),
('Housing',	'RHCM_Process', 'VAD'),
('Housing',	'Insert_Molding', 'VAD'),
('Housing',	'Metal', 'VAD'),
('Housing',	'Aluminum鋁皮外觀件單件or組立', 'VAD'),
('Housing',	'Die_Casting', 'VAD'),
('Housing',	'C_GPU_BKT', 'VAD'),
('Housing',	'HDD_SSD_BKT', 'VAD'),
('Housing',	'Hinge', 'VAD'),
('Housing',	'NIL_process', 'VAD'),
('Housing',	'CNC_Process', 'VAD'),
('Housing',	'AL_Extrusion', 'VAD'),
('Housing',	'Others', 'VAD'),
('Housing',	'Small_Parts', 'VAD'),
('Housing',	'Glass', 'VAD'),
('Housing',	'MIM', 'VAD'),
('Electro_Mechanical','Mic', 'VAD'),
('Electro_Mechanical','Speaker', 'VAD'),
('Thermal',	'Fan', 'VAD'),
('Thermal',	'Module', 'VAD'),
('Thermal',	'Pad', 'VAD'),
('Thermal',	'Graphite_Sheet', 'VAD'),
('Thermal',	'Cu_Foil', 'VAD'),
('ME_others','Bond_Detach_Adhesive', 'VAD'),
('ME_others','Standoff', 'VAD'),
('ME_others','Screw', 'VAD'),
('ME_others','Nut', 'VAD'),
('ME_others','Waterproof_film', 'VAD'),
('ME_others','Rubber', 'VAD'),
('ME_others','Mesh', 'VAD'),
('ME_others','Metal_Dome', 'VAD'),
('ME_others','Glue', 'VAD'),
('ME_others','Spring', 'VAD'),
('ME_others','Lens', 'VAD'),
('ME_others','Name_Plate', 'VAD'),
('ME_others','Protection_Film_of_Mylar_Sponge_Poron', 'VAD'),
('ME_others','Adhesive_of_Mylar_Sponge_Poron', 'VAD'),
('ME_others','Sponge_of_Mylar_Sponge_Poron', 'VAD'),
('ME_others','Mylar_of_Mylar_Sponge_Poron', 'VAD'),
('ME_others','Acetate_Tape_of_Mylar_Sponge_Poron', 'VAD'),
('ME_others','Non_Woven_of_Mylar_Sponge_Poron', 'VAD'),
('ME_others','Mylar/Sponge/Poron', 'VAD'),
('ME_others','Miscellaneous', 'VAD'),
('EMC',	'Absorber', 'VAD'),
('EMC',	'EMI_Spring', 'VAD'),
('EMC',	'Shielding_Can', 'VAD'),
('EMC',	'Conductive_Tape', 'VAD'),
('EMC',	'Gasket', 'VAD'),
('EMC',	'Magnet', 'VAD'),
('EMC',	'Al_Cu_Foil', 'VAD')
on conflict do nothing;

-- VAD ACC
insert into formula.tmp_part_category_2_product_type(part_category_1_name, part_category_2_name, product_type) values
('Cable','FFC', 'VAD ACC'),
('Cable','FPC', 'VAD ACC'),
('Cable','Wire_Harness', 'VAD ACC'),
('Cable','DC_in_cable', 'VAD ACC'),
('Cable','Panel_Cable', 'VAD ACC'),
('Cable','Dongle', 'VAD ACC'),
('Cable','Others', 'VAD ACC'),
('Housing',	'Plastic', 'VAD ACC'),
('Housing',	'Painting', 'VAD ACC'),
('Housing',	'IMR', 'VAD ACC'),
('Housing',	'Double_Injection', 'VAD ACC'),
('Housing',	'RHCM_Process', 'VAD ACC'),
('Housing',	'Insert_Molding', 'VAD ACC'),
('Housing',	'Metal', 'VAD ACC'),
('Housing',	'Aluminum鋁皮外觀件單件or組立', 'VAD ACC'),
('Housing',	'Die_Casting', 'VAD ACC'),
('Housing',	'C_GPU_BKT', 'VAD ACC'),
('Housing',	'HDD_SSD_BKT', 'VAD ACC'),
('Housing',	'Hinge', 'VAD ACC'),
('Housing',	'NIL_process', 'VAD ACC'),
('Housing',	'CNC_Process', 'VAD ACC'),
('Housing',	'AL_Extrusion', 'VAD ACC'),
('Housing',	'Others', 'VAD ACC'),
('Housing',	'Small_Parts', 'VAD ACC'),
('Housing',	'Glass', 'VAD ACC'),
('Housing',	'MIM', 'VAD ACC'),
('Electro_Mechanical','Mic', 'VAD ACC'),
('Electro_Mechanical','Speaker', 'VAD ACC'),
('Thermal',	'Fan', 'VAD ACC'),
('Thermal',	'Module', 'VAD ACC'),
('Thermal',	'Pad', 'VAD ACC'),
('Thermal',	'Graphite_Sheet', 'VAD ACC'),
('Thermal',	'Cu_Foil', 'VAD ACC'),
('ME_others','Bond_Detach_Adhesive', 'VAD ACC'),
('ME_others','Standoff', 'VAD ACC'),
('ME_others','Screw', 'VAD ACC'),
('ME_others','Nut', 'VAD ACC'),
('ME_others','Waterproof_film', 'VAD ACC'),
('ME_others','Rubber', 'VAD ACC'),
('ME_others','Mesh', 'VAD ACC'),
('ME_others','Metal_Dome', 'VAD ACC'),
('ME_others','Glue', 'VAD ACC'),
('ME_others','Spring', 'VAD ACC'),
('ME_others','Lens', 'VAD ACC'),
('ME_others','Name_Plate', 'VAD ACC'),
('ME_others','Protection_Film_of_Mylar_Sponge_Poron', 'VAD ACC'),
('ME_others','Adhesive_of_Mylar_Sponge_Poron', 'VAD ACC'),
('ME_others','Sponge_of_Mylar_Sponge_Poron', 'VAD ACC'),
('ME_others','Mylar_of_Mylar_Sponge_Poron', 'VAD ACC'),
('ME_others','Acetate_Tape_of_Mylar_Sponge_Poron', 'VAD ACC'),
('ME_others','Non_Woven_of_Mylar_Sponge_Poron', 'VAD ACC'),
('ME_others','Mylar/Sponge/Poron', 'VAD ACC'),
('ME_others','Miscellaneous', 'VAD ACC'),
('EMC',	'Absorber', 'VAD ACC'),
('EMC',	'EMI_Spring', 'VAD ACC'),
('EMC',	'Shielding_Can', 'VAD ACC'),
('EMC',	'Conductive_Tape', 'VAD ACC'),
('EMC',	'Gasket', 'VAD ACC'),
('EMC',	'Magnet', 'VAD ACC'),
('EMC',	'Al_Cu_Foil', 'VAD ACC')
on conflict do nothing;

-- Smart Device
insert into formula.tmp_part_category_2_product_type(part_category_1_name, part_category_2_name, product_type) values
('Cable','FFC', 'Smart Device'),
('Cable','FPC', 'Smart Device'),
('Cable','Wire_Harness', 'Smart Device'),
('Cable','DC_in_cable', 'Smart Device'),
('Cable','Panel_Cable', 'Smart Device'),
('Cable','Dongle', 'Smart Device'),
('Cable','Others', 'Smart Device'),
('Housing',	'Plastic', 'Smart Device'),
('Housing',	'Painting', 'Smart Device'),
('Housing',	'IMR', 'Smart Device'),
('Housing',	'Double_Injection', 'Smart Device'),
('Housing',	'RHCM_Process', 'Smart Device'),
('Housing',	'Insert_Molding', 'Smart Device'),
('Housing',	'Metal', 'Smart Device'),
('Housing',	'Aluminum鋁皮外觀件單件or組立', 'Smart Device'),
('Housing',	'Die_Casting', 'Smart Device'),
('Housing',	'C_GPU_BKT', 'Smart Device'),
('Housing',	'HDD_SSD_BKT', 'Smart Device'),
('Housing',	'Hinge', 'Smart Device'),
('Housing',	'NIL_process', 'Smart Device'),
('Housing',	'CNC_Process', 'Smart Device'),
('Housing',	'AL_Extrusion', 'Smart Device'),
('Housing',	'Others', 'Smart Device'),
('Housing',	'Small_Parts', 'Smart Device'),
('Housing',	'Glass', 'Smart Device'),
('Housing',	'MIM', 'Smart Device'),
('Electro_Mechanical','Mic', 'Smart Device'),
('Electro_Mechanical','Speaker', 'Smart Device'),
('Thermal',	'Fan', 'Smart Device'),
('Thermal',	'Module', 'Smart Device'),
('Thermal',	'Pad', 'Smart Device'),
('Thermal',	'Graphite_Sheet', 'Smart Device'),
('Thermal',	'Cu_Foil', 'Smart Device'),
('ME_others','Bond_Detach_Adhesive', 'Smart Device'),
('ME_others','Standoff', 'Smart Device'),
('ME_others','Screw', 'Smart Device'),
('ME_others','Nut', 'Smart Device'),
('ME_others','Waterproof_film', 'Smart Device'),
('ME_others','Rubber', 'Smart Device'),
('ME_others','Mesh', 'Smart Device'),
('ME_others','Metal_Dome', 'Smart Device'),
('ME_others','Glue', 'Smart Device'),
('ME_others','Spring', 'Smart Device'),
('ME_others','Lens', 'Smart Device'),
('ME_others','Name_Plate', 'Smart Device'),
('ME_others','Protection_Film_of_Mylar_Sponge_Poron', 'Smart Device'),
('ME_others','Adhesive_of_Mylar_Sponge_Poron', 'Smart Device'),
('ME_others','Sponge_of_Mylar_Sponge_Poron', 'Smart Device'),
('ME_others','Mylar_of_Mylar_Sponge_Poron', 'Smart Device'),
('ME_others','Acetate_Tape_of_Mylar_Sponge_Poron', 'Smart Device'),
('ME_others','Non_Woven_of_Mylar_Sponge_Poron', 'Smart Device'),
('ME_others','Mylar/Sponge/Poron', 'Smart Device'),
('ME_others','Miscellaneous', 'Smart Device'),
('EMC',	'Absorber', 'Smart Device'),
('EMC',	'EMI_Spring', 'Smart Device'),
('EMC',	'Shielding_Can', 'Smart Device'),
('EMC',	'Conductive_Tape', 'Smart Device'),
('EMC',	'Gasket', 'Smart Device'),
('EMC',	'Magnet', 'Smart Device'),
('EMC',	'Al_Cu_Foil', 'Smart Device')
on conflict do nothing;

drop view if EXISTS formula.v_part_category_2;
drop table if exists formula.part_category_2_product_type;
CREATE TABLE if not exists formula.part_category_2_product_type (
	part_category_2_id uuid NOT NULL,
	product_type_id int4,
  	create_time timestamp,
  	disable_time timestamp,
  CONSTRAINT type_2_product_type_un UNIQUE (part_category_2_id, product_type_id)
);

insert into formula.part_category_2_product_type (part_category_2_id, product_type_id, create_time, disable_time)  
select type2.id as type2_id, sub.pt_id, now(), type2.disable_time   
from (select tmp_type2.*, pt.id as pt_id, type1.id as type1_id  from 
formula.tmp_part_category_2_product_type  tmp_type2
left join formula.product_type pt on tmp_type2.product_type = pt.type_name
left join formula.part_category_1 type1 on tmp_type2.part_category_1_name = type1.category_name) sub
left join formula.part_category_2 type2 on sub.type1_id = type2.part_category_1_id and sub.part_category_2_name = type2.category_name;



CREATE OR REPLACE VIEW formula.v_part_category_2
AS SELECT 
    type2.part_category_1_id,
    type2.category_name,
    type2_product_type.part_category_2_id,
    type2.disable_time,
    type2_product_type.product_type_id,
    type2_product_type.disable_time as product_type_disable_time
   FROM formula.part_category_2_product_type as type2_product_type
   left join formula.part_category_2 type2 on type2.id = type2_product_type.part_category_2_id;

-- Permissions

ALTER TABLE formula.v_part_category_2 OWNER TO "swpc-user";
GRANT ALL ON TABLE formula.v_part_category_2 TO "swpc-user";
GRANT SELECT ON TABLE formula.v_part_category_2 TO emdm;

