/* Replace with your SQL commands */
-- SATA
insert into wiprocurement.bom_partlist_config(parts_ctgy_1, parts_ctgy_2, format)
select p1.id, p2.id, ft.id
from formula.part_category_1 p1,
formula.part_category_2 p2,
wiprocurement.bom_partlist_format ft
where p1.category_name = 'Cable'
and p2.category_name = 'SATA'
and ft.format_key = 'cable-wire' on conflict do nothing;

insert into wiprocurement.bom_partlist_config_product_type(config_id, product_type_id)
select pc.id, pt.id
from wiprocurement.bom_partlist_config pc
left join formula.part_category_1 p1 on pc.parts_ctgy_1 = p1.id
left join formula.part_category_2 p2 on pc.parts_ctgy_2 = p2.id
left join wiprocurement.bom_partlist_format ft on pc.format = ft.id,
formula.product_type pt
where p1.category_name = 'Cable'
and p2.category_name = 'SATA'
and ft.format_key = 'cable-wire'
and pt.type_name = 'DT' on conflict do nothing;

insert into wiprocurement.bom_partlist_config_product_type(config_id, product_type_id)
select pc.id, pt.id
from wiprocurement.bom_partlist_config pc
left join formula.part_category_1 p1 on pc.parts_ctgy_1 = p1.id
left join formula.part_category_2 p2 on pc.parts_ctgy_2 = p2.id
left join wiprocurement.bom_partlist_format ft on pc.format = ft.id,
formula.product_type pt
where p1.category_name = 'Cable'
and p2.category_name = 'SATA'
and ft.format_key = 'cable-wire'
and pt.type_name = 'AIO' on conflict do nothing;

-- FFC--------------------------------------------------------------------------------------

insert into wiprocurement.bom_partlist_config_product_type(config_id, product_type_id)
select pc.id, pt.id
from wiprocurement.bom_partlist_config pc
left join formula.part_category_1 p1 on pc.parts_ctgy_1 = p1.id
left join formula.part_category_2 p2 on pc.parts_ctgy_2 = p2.id
left join wiprocurement.bom_partlist_format ft on pc.format = ft.id,
formula.product_type pt
where p1.category_name = 'Cable'
and p2.category_name = 'FFC'
and ft.format_key = 'cable-ffc'
and pt.type_name = 'DT' on conflict do nothing;

insert into wiprocurement.bom_partlist_config_product_type(config_id, product_type_id)
select pc.id, pt.id
from wiprocurement.bom_partlist_config pc
left join formula.part_category_1 p1 on pc.parts_ctgy_1 = p1.id
left join formula.part_category_2 p2 on pc.parts_ctgy_2 = p2.id
left join wiprocurement.bom_partlist_format ft on pc.format = ft.id,
formula.product_type pt
where p1.category_name = 'Cable'
and p2.category_name = 'FFC'
and ft.format_key = 'cable-ffc'
and pt.type_name = 'AIO' on conflict do nothing;

-- FPC -----------------------------------------------------------------------------------------

insert into wiprocurement.bom_partlist_config_product_type(config_id, product_type_id)
select pc.id, pt.id
from wiprocurement.bom_partlist_config pc
left join formula.part_category_1 p1 on pc.parts_ctgy_1 = p1.id
left join formula.part_category_2 p2 on pc.parts_ctgy_2 = p2.id
left join wiprocurement.bom_partlist_format ft on pc.format = ft.id,
formula.product_type pt
where p1.category_name = 'Cable'
and p2.category_name = 'FPC'
and ft.format_key = 'cable-fpc'
and pt.type_name = 'DT' on conflict do nothing;

insert into wiprocurement.bom_partlist_config_product_type(config_id, product_type_id)
select pc.id, pt.id
from wiprocurement.bom_partlist_config pc
left join formula.part_category_1 p1 on pc.parts_ctgy_1 = p1.id
left join formula.part_category_2 p2 on pc.parts_ctgy_2 = p2.id
left join wiprocurement.bom_partlist_format ft on pc.format = ft.id,
formula.product_type pt
where p1.category_name = 'Cable'
and p2.category_name = 'FPC'
and ft.format_key = 'cable-fpc'
and pt.type_name = 'AIO' on conflict do nothing;

-- Wire_Harness--------------------------------------------------------------------------------------
insert into wiprocurement.bom_partlist_config_product_type(config_id, product_type_id)
select pc.id, pt.id
from wiprocurement.bom_partlist_config pc
left join formula.part_category_1 p1 on pc.parts_ctgy_1 = p1.id
left join formula.part_category_2 p2 on pc.parts_ctgy_2 = p2.id
left join wiprocurement.bom_partlist_format ft on pc.format = ft.id,
formula.product_type pt
where p1.category_name = 'Cable'
and p2.category_name = 'Wire_Harness'
and ft.format_key = 'cable-wire'
and pt.type_name = 'DT' on conflict do nothing;

insert into wiprocurement.bom_partlist_config_product_type(config_id, product_type_id)
select pc.id, pt.id
from wiprocurement.bom_partlist_config pc
left join formula.part_category_1 p1 on pc.parts_ctgy_1 = p1.id
left join formula.part_category_2 p2 on pc.parts_ctgy_2 = p2.id
left join wiprocurement.bom_partlist_format ft on pc.format = ft.id,
formula.product_type pt
where p1.category_name = 'Cable'
and p2.category_name = 'Wire_Harness'
and ft.format_key = 'cable-wire'
and pt.type_name = 'AIO' on conflict do nothing;