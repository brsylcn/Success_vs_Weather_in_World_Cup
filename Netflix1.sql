-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/tljoTc
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "Netflix1" (
    "sshow_id" INT   NOT NULL,
    "type" VARCHAR   NULL,
    "title" VARCHAR   NULL,
    "director" VARCHAR   NULL,
    "cast" VARCHAR   NULL,
    "country" VARCHAR   NULL,
    "date_added" DATE   NULL,
    "release_year" INT   NULL,
    "rating" VARCHAR   NULL,
    "duration" VARCHAR   NULL,
    "listed_in" VARCHAR   NULL,
    "description" VARCHAR   NULL,
    CONSTRAINT "pk_Netflix-1" PRIMARY KEY (
        "sshow_id"
     )
);

