DELETE FROM appointments;
INSERT INTO appointments (id, date, time, status, user_id, barber_id, service_id)
VALUES
(1, '2025-12-16', '10:00', 'PENDING', 2, 1, 1),
(2, '2025-12-16', '11:30', 'CONFIRMED', 2, 1, 2),
(3, '2025-12-17', '15:00', 'CANCELLED', 3, 2, 3)
ON CONFLICT (id) DO NOTHING;