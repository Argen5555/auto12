--liquibase formatted sql
--changeset <postgres>:<create-tables>

create table goods
(
    id    bigserial
        primary key,
    name  varchar(255),
    price numeric(19, 2)
);

--rollback DROP TABLE goods;

create table masters
(
    id   bigserial
        primary key,
    name varchar(255)
);

--rollback DROP TABLE masters;

create table owners
(
    id bigserial
        primary key
);

--rollback DROP TABLE owners;

create table cars
(
    id       bigserial
        primary key,
    brand    varchar(255),
    model    varchar(255),
    number   varchar(255),
    year     integer not null,
    owner_id bigint
        constraint fkhcsx2hgskre1qwetp67r7qfr
            references owners
);

--rollback DROP TABLE cars;

create table orders
(
    id              bigserial
        primary key,
    completion_time timestamp,
    description     varchar(255),
    order_time      timestamp,
    price           numeric(19, 2),
    status          varchar(255),
    car_id          bigint
        constraint fkd2p23ixwrrt395glgi9nnbj23
            references cars
);

--rollback DROP TABLE orders;

create table services
(
    id        bigserial
        primary key,
    price     numeric(19, 2),
    status    varchar(255),
    master_id bigint
        constraint fk565hd47u11qajksyfi4gqrfu0
            references masters,
    order_id  bigint
        constraint fknmykpsxcf4bgaecn9g3vdbc1s
            references orders
);

--rollback DROP TABLE services;

create table masters_complected_orders
(
    master_id           bigint not null
        constraint fk7y53xagi8p6rkms8jxhd7cqqv
            references masters,
    complected_order_id bigint not null
        constraint fkb4u6y58wco88n46ygt9e6j0pf
            references orders
);

--rollback DROP TABLE masters_complected_orders;

create table orders_goods
(
    order_id bigint not null
        constraint fkaoqjqu5li3448xo657dvp6teq
            references orders,
    goods_id bigint not null
        constraint uk_934k2svq65pdcoo9o9j3lokxi
            unique
        constraint fknsv6m7fvy9pmg1b122f7o62x1
            references goods
);

--rollback DROP TABLE orders_goods;

create table orders_services
(
    order_id   bigint not null
        constraint fkq863ndc65lt9lgj0jg1h8ravg
            references orders,
    service_id bigint not null
        constraint uk_6stku4m0dy2cj3phyilue8998
            unique
        constraint fkmlxtixo7scj7qi4p35vltpsg2
            references services
);

--rollback DROP TABLE orders_services;

create table owners_cars
(
    owner_id bigint not null
        constraint fkl3bgvt7natjt1rydg5avnmhcd
            references owners,
    car_id   bigint not null
        constraint uk_4s5l3sbsvheqehaat4rg8qn2g
            unique
        constraint fkobosrw1pt1tmgeqeftq01ldae
            references cars
);

--rollback DROP TABLE owners_cars;

create table owners_orders
(
    owner_id bigint not null
        constraint fk72iccnam7p59oel627kryqyv2
            references owners,
    order_id bigint not null
        constraint uk_3nyffnq542wils22wjbf779a7
            unique
        constraint fkhdu8v0nt2g2wtp40r58tvfy4b
            references orders
);

--rollback DROP TABLE owners_orders;
