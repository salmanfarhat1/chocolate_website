--
-- PostgreSQL database dump
--

-- Dumped from database version 14.18 (Homebrew)
-- Dumped by pg_dump version 14.18 (Homebrew)

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
-- Name: chocolate_variants; Type: TABLE; Schema: public; Owner: salmanfarhat
--

CREATE TABLE public.chocolate_variants (
    id integer NOT NULL,
    chocolate_id integer NOT NULL,
    size character varying(50) NOT NULL,
    weight numeric(6,2),
    price numeric(8,2) NOT NULL
);


ALTER TABLE public.chocolate_variants OWNER TO salmanfarhat;

--
-- Name: chocolate_variants_id_seq; Type: SEQUENCE; Schema: public; Owner: salmanfarhat
--

CREATE SEQUENCE public.chocolate_variants_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.chocolate_variants_id_seq OWNER TO salmanfarhat;

--
-- Name: chocolate_variants_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: salmanfarhat
--

ALTER SEQUENCE public.chocolate_variants_id_seq OWNED BY public.chocolate_variants.id;


--
-- Name: chocolates; Type: TABLE; Schema: public; Owner: salmanfarhat
--

CREATE TABLE public.chocolates (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    ingredients text,
    photo_urls text[]
);


ALTER TABLE public.chocolates OWNER TO salmanfarhat;

--
-- Name: chocolates_id_seq; Type: SEQUENCE; Schema: public; Owner: salmanfarhat
--

CREATE SEQUENCE public.chocolates_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.chocolates_id_seq OWNER TO salmanfarhat;

--
-- Name: chocolates_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: salmanfarhat
--

ALTER SEQUENCE public.chocolates_id_seq OWNED BY public.chocolates.id;


--
-- Name: chocolate_variants id; Type: DEFAULT; Schema: public; Owner: salmanfarhat
--

ALTER TABLE ONLY public.chocolate_variants ALTER COLUMN id SET DEFAULT nextval('public.chocolate_variants_id_seq'::regclass);


--
-- Name: chocolates id; Type: DEFAULT; Schema: public; Owner: salmanfarhat
--

ALTER TABLE ONLY public.chocolates ALTER COLUMN id SET DEFAULT nextval('public.chocolates_id_seq'::regclass);


--
-- Data for Name: chocolate_variants; Type: TABLE DATA; Schema: public; Owner: salmanfarhat
--

COPY public.chocolate_variants (id, chocolate_id, size, weight, price) FROM stdin;
1	1	Small	50.00	2.99
2	1	Large	100.00	5.49
3	4	Large	200.00	4.00
4	6	Small	200.00	12.00
\.


--
-- Data for Name: chocolates; Type: TABLE DATA; Schema: public; Owner: salmanfarhat
--

COPY public.chocolates (id, name, ingredients, photo_urls) FROM stdin;
1	Dark Delight	Cocoa, Sugar, Milk	{/photos/dark_large_3.jpg,/photos/dark_large_3.jpg}
2	Hazelnut Delight	Cocoa, Sugar, Hazelnuts	{/photos/dark_large_3.jpg,/photos/dark_large_3.jpg}
3	Snickers	Cheveux d-ange, peanut butter, nuts	{/photos/dark_large_3.jpg,/photos/dark_large_3.jpg}
4	Angel	coton candy, pistache	{/photos/dark_large_3.jpg,/photos/dark_large_3.jpg}
5	test	surprise	{/photos/dark_large_3.jpg,/photos/dark_large_3.jpg}
6	lazy	biscuts, milk concentrate, pistache	{/photos/dark_large_3.jpg,/photos/dark_large_3.jpg}
\.


--
-- Name: chocolate_variants_id_seq; Type: SEQUENCE SET; Schema: public; Owner: salmanfarhat
--

SELECT pg_catalog.setval('public.chocolate_variants_id_seq', 4, true);


--
-- Name: chocolates_id_seq; Type: SEQUENCE SET; Schema: public; Owner: salmanfarhat
--

SELECT pg_catalog.setval('public.chocolates_id_seq', 6, true);


--
-- Name: chocolate_variants chocolate_variants_pkey; Type: CONSTRAINT; Schema: public; Owner: salmanfarhat
--

ALTER TABLE ONLY public.chocolate_variants
    ADD CONSTRAINT chocolate_variants_pkey PRIMARY KEY (id);


--
-- Name: chocolates chocolates_pkey; Type: CONSTRAINT; Schema: public; Owner: salmanfarhat
--

ALTER TABLE ONLY public.chocolates
    ADD CONSTRAINT chocolates_pkey PRIMARY KEY (id);


--
-- Name: chocolate_variants chocolate_variants_chocolate_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: salmanfarhat
--

ALTER TABLE ONLY public.chocolate_variants
    ADD CONSTRAINT chocolate_variants_chocolate_id_fkey FOREIGN KEY (chocolate_id) REFERENCES public.chocolates(id) ON DELETE CASCADE;


--
-- Name: TABLE chocolate_variants; Type: ACL; Schema: public; Owner: salmanfarhat
--

GRANT ALL ON TABLE public.chocolate_variants TO chocolate_admin;


--
-- Name: SEQUENCE chocolate_variants_id_seq; Type: ACL; Schema: public; Owner: salmanfarhat
--

GRANT ALL ON SEQUENCE public.chocolate_variants_id_seq TO chocolate_admin;


--
-- Name: TABLE chocolates; Type: ACL; Schema: public; Owner: salmanfarhat
--

GRANT ALL ON TABLE public.chocolates TO chocolate_admin;


--
-- Name: SEQUENCE chocolates_id_seq; Type: ACL; Schema: public; Owner: salmanfarhat
--

GRANT ALL ON SEQUENCE public.chocolates_id_seq TO chocolate_admin;


--
-- PostgreSQL database dump complete
--

