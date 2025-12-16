DELETE FROM users;
INSERT INTO users (id, name, email, password, role)
VALUES
(1, 'Administrador', 'admin@barberbook.com', '$2a$10$DOWSDtYlQZ0Y9FhM5R0E5eQZl1QYk9KcE3kO6sQ7TgQZ1M8mZ7u1K', 'ADMIN'),
(2, 'Juan Cliente', 'juan@barberbook.com', '$2a$10$DOWSDtYlQZ0Y9FhM5R0E5eQZl1QYk9KcE3kO6sQ7TgQZ1M8mZ7u1K', 'USER'),
(3, 'Carlos Barbero', 'carlos@barberbook.com', '$2a$10$DOWSDtYlQZ0Y9FhM5R0E5eQZl1QYk9KcE3kO6sQ7TgQZ1M8mZ7u1K', 'BARBER')
ON CONFLICT (id) DO NOTHING;