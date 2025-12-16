DELETE FROM barbero;
DELETE FROM barberia;
INSERT INTO barberia (id, nombre, direccion)
VALUES
(1, 'Barbería Central', 'Calle 10'),
(2, 'Golden Cut', 'Carrera 15')
ON CONFLICT (id) DO NOTHING;
INSERT INTO barbero (id, nombre, barberia_id)
VALUES
(1, 'Juan', 1),
(2, 'Carlos', 2)
ON CONFLICT (id) DO NOTHING;

