toc.dat                                                                                             0000600 0004000 0002000 00000005042 13756565465 0014466 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        PGDMP           2            
    x            Game2    12.4    12.4                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                    0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                    0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                    1262    24613    Game2    DATABASE     �   CREATE DATABASE "Game2" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'French_France.1252' LC_CTYPE = 'French_France.1252';
    DROP DATABASE "Game2";
                postgres    false         �            1259    24614    player    TABLE     l   CREATE TABLE public.player (
    email text,
    password text,
    id integer NOT NULL,
    pseudo text
);
    DROP TABLE public.player;
       public         heap    postgres    false         �            1259    24638    player_id_seq    SEQUENCE     �   CREATE SEQUENCE public.player_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.player_id_seq;
       public          postgres    false    202         	           0    0    player_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.player_id_seq OWNED BY public.player.id;
          public          postgres    false    203         �
           2604    24640 	   player id    DEFAULT     f   ALTER TABLE ONLY public.player ALTER COLUMN id SET DEFAULT nextval('public.player_id_seq'::regclass);
 8   ALTER TABLE public.player ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    203    202                   0    24614    player 
   TABLE DATA           =   COPY public.player (email, password, id, pseudo) FROM stdin;
    public          postgres    false    202       2817.dat 
           0    0    player_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.player_id_seq', 11, true);
          public          postgres    false    203         �
           2606    24648    player player_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.player
    ADD CONSTRAINT player_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.player DROP CONSTRAINT player_pkey;
       public            postgres    false    202                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      2817.dat                                                                                            0000600 0004000 0002000 00000001015 13756565465 0014276 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        julie@f.net	$2b$10$.KQ4HVdfZJv.iJ8tpcEB4eunEZAraRvqvxM80yVLtBTDh1pGLK7ZC	4	\N
ju	$2b$10$20U1E/otyoz35OMVxsgJY.BoU4UOoyMB2ZsMANLkOPky9Zi7umBC.	6	\N
jul	$2b$10$na2aADFm.8syxGtDM7o72.b1SkYMKG5ojobomyv4XRy933tT6mRvG	7	\N
julie	$2b$10$5kUvE9S8vXh1lvO6dJJiROUHmHXzBpEU83bj47uHwqSBrh8h3pjCm	8	\N
	$2b$10$RICJjyacVltotGvBt63YIO5Uolsl3etvIMMlYki/pFRQDai73d7Km	9	\N
julie.gn@gan.fr	$2b$10$/kaXCrj2YiRV7xbHaYfeL.NcDqq7.MaQkPfvG8Xm9tC2E1GJikFbW	10	\N
hello@test.fr	$2b$10$qAByJFoOejFU0N/1bc/AOO12cw7BJiMdmfegaxQ6UsIfI.FfjKsLG	11	\N
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   restore.sql                                                                                         0000600 0004000 0002000 00000005220 13756565465 0015411 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        --
-- NOTE:
--
-- File paths need to be edited. Search for $$PATH$$ and
-- replace it with the path to the directory containing
-- the extracted data files.
--
--
-- PostgreSQL database dump
--

-- Dumped from database version 12.4
-- Dumped by pg_dump version 12.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE "Game2";
--
-- Name: Game2; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE "Game2" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'French_France.1252' LC_CTYPE = 'French_France.1252';


ALTER DATABASE "Game2" OWNER TO postgres;

\connect "Game2"

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: player; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.player (
    email text,
    password text,
    id integer NOT NULL,
    pseudo text
);


ALTER TABLE public.player OWNER TO postgres;

--
-- Name: player_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.player_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.player_id_seq OWNER TO postgres;

--
-- Name: player_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.player_id_seq OWNED BY public.player.id;


--
-- Name: player id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.player ALTER COLUMN id SET DEFAULT nextval('public.player_id_seq'::regclass);


--
-- Data for Name: player; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.player (email, password, id, pseudo) FROM stdin;
\.
COPY public.player (email, password, id, pseudo) FROM '$$PATH$$/2817.dat';

--
-- Name: player_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.player_id_seq', 11, true);


--
-- Name: player player_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.player
    ADD CONSTRAINT player_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                