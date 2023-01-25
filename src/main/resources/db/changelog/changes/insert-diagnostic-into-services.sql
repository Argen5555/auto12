--liquibase formatted sql
--changeset <postgres>:<insert-diagnostic-into-services>

insert into services (price) values (500);

--rollback DELETE FROM services WHERE id = 1;
