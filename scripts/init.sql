-- init.sql

-- Cria extensão para suportar UUIDs, se ainda não estiver ativa
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Criar tipo ENUM para status das reservas e cargo dos usuários
CREATE TYPE booking_status AS ENUM ('confirmada', 'pendente', 'recusada');
CREATE TYPE client_role AS ENUM('user', 'admin');

-- Criar tabela de Usuários
CREATE TABLE client (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(40) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    role client_role DEFAULT 'user'
);

-- Criar tabela de Salas
CREATE TABLE room (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(40) NOT NULL,
    capacity INT,
    location VARCHAR(100),
    available BOOLEAN DEFAULT TRUE
);

-- Criar tabela de Locação
CREATE TABLE booking (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_id UUID REFERENCES client(id),
    room_id UUID REFERENCES room(id),
    date DATE,
    start_time TIME,
    end_time TIME,
    status booking_status
);

-- Inserir clientes
INSERT INTO client (name, email, password, role) VALUES
('Eduardo Casarini', 'user@example.com', 'senha123', 'user'),
('João da Silva', 'admin@example.com', 'admin123', 'admin');

-- Inserir salas
INSERT INTO room (name, capacity, location, available) VALUES
('Sala Reunião A', 10, 'Andar 1', TRUE),
('Sala São Paulo', 40, 'Térreo', FALSE);

-- Inserir reservas
INSERT INTO booking (client_id, room_id, date, start_time, end_time, status)
VALUES
(
  (SELECT id FROM client WHERE email = 'user@example.com'),
  (SELECT id FROM room WHERE name = 'Sala Reunião A'),
  '09-05-2025',
  '09:00',
  '10:00',
  'confirmada'
),
(
  (SELECT id FROM client WHERE email = 'admin@example.com'),
  (SELECT id FROM room WHERE name = 'Sala São Paulo'),
  '12-05-2025',
  '14:00',
  '16:00',
  'recusada'
); 
