CREATE TABLE IF NOT EXISTS enquiries (
  id          SERIAL PRIMARY KEY,
  kind        TEXT NOT NULL CHECK (kind IN ('admission', 'contact')),
  name        TEXT NOT NULL,
  email       TEXT NOT NULL,
  phone       TEXT NOT NULL,
  child_name  TEXT,
  level       TEXT,
  message     TEXT NOT NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);
-- Portal tables (users, students, attendance, results, fees...) will be added in the portal phase.
