-- Create tables
CREATE TABLE IF NOT EXISTS locations (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    type VARCHAR(100) NOT NULL,
    lat DECIMAL(10, 8),
    lng DECIMAL(11, 8),
    thumbnail TEXT,
    image TEXT,
    maps_link TEXT,
    description TEXT,
    is_hidden BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS events (
    id VARCHAR(50) PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    event_date DATE NOT NULL,
    image TEXT,
    description TEXT,
    location VARCHAR(200),
    is_hidden BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS team_members (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    role VARCHAR(200) NOT NULL,
    image TEXT,
    bio TEXT,
    email VARCHAR(200),
    is_hidden BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS about_info (
    id INT PRIMARY KEY DEFAULT 1,
    content TEXT,
    image TEXT,
    contact TEXT,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS settings (
    id INT PRIMARY KEY DEFAULT 1,
    logo TEXT,
    title VARCHAR(200),
    subtitle VARCHAR(500),
    admin_password VARCHAR(255),
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert default locations
INSERT INTO locations (id, name, type, lat, lng, thumbnail, image, description, is_hidden) VALUES
('main-gate', 'Main Gate', 'Landmark', -14.29090, 28.55127, 'https://i.postimg.cc/132Qfgqw/gate.jpg', 'https://i.postimg.cc/132Qfgqw/gate.jpg', 'The main entrance to Mulungushi University Great North Road Campus.', FALSE),
('ict-block', 'ICT Block', 'Facility', -14.292465, 28.555363, 'https://i.postimg.cc/nhCxFKCj/ict.jpg', 'https://i.postimg.cc/nhCxFKCj/ict.jpg', 'Information and Communication Technology facilities.', FALSE),
('administration-block', 'Administration Block', 'Office', -14.295785, 28.559561, 'https://i.postimg.cc/K8RbG7RD/admin.jpg', 'https://i.postimg.cc/K8RbG7RD/admin.jpg', 'University administration offices.', FALSE),
('university-library', 'University Library', 'Facility', -14.296243, 28.560507, 'https://i.postimg.cc/6pyKWVyG/lib.jpg', 'https://i.postimg.cc/6pyKWVyG/lib.jpg', 'Central library with extensive resources.', FALSE);

-- Insert default events
INSERT INTO events (id, title, event_date, image, description, location, is_hidden) VALUES
('event-1', 'Freshman Orientation Week', '2026-01-15', 'https://i.postimg.cc/132Qfgqw/gate.jpg', 'Welcome new students with campus tours, registration assistance, and orientation activities.', 'Main Campus', FALSE),
('event-2', 'Research Symposium 2026', '2026-03-10', 'https://i.postimg.cc/nhCxFKCj/ict.jpg', 'Annual research symposium showcasing student and faculty research projects.', 'Great Hall', FALSE);

-- Insert default team members
INSERT INTO team_members (id, name, role, image, bio, email, is_hidden) VALUES
('team-1', 'Prof. John Banda', 'Vice Chancellor', 'https://via.placeholder.com/300x250?text=Prof+Banda', 'Leading the university with a vision for excellence in higher education.', 'vc@mulungushi.ac.zm', FALSE),
('team-2', 'Dr. Sarah Mwale', 'Registrar', 'https://via.placeholder.com/300x250?text=Dr+Sarah', 'Overseeing academic records and student services.', 'registrar@mulungushi.ac.zm', FALSE);

-- Insert about info
INSERT INTO about_info (id, content, image, contact) VALUES (1, 
'Mulungushi University Route Finder - Smart Campus Navigation System

FOR STUDENTS:
- Easily locate lecture halls, libraries, hostels, and administrative offices
- Never miss important events with our events calendar
- Get real-time directions to any location on campus

FOR LECTURERS & STAFF:
- Manage campus events through the admin panel
- Guide new students during orientation
- Broadcast important announcements

TECHNOLOGY FEATURES:
- Modern web application built with Node.js, Express, and PostgreSQL
- Mobile-responsive design works on all devices
- Secure admin authentication system',
'https://i.postimg.cc/132Qfgqw/gate.jpg',
'📍 Address: Great North Road, Kabwe, Zambia
📞 Phone: +260 123 456 789
📧 Email: info@mulungushi.ac.zm');

-- Insert settings with CORRECT password hash for 'admin123'
-- This hash is bcrypt encrypted for 'admin123'
INSERT INTO settings (id, logo, title, subtitle, admin_password) VALUES (1,
'https://i.postimg.cc/132Qfgqw/gate.jpg',
'Mulungushi University Route Finder',
'Navigate your campus with ease',
'$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi');

-- Update if exists (for existing databases)
ON CONFLICT (id) DO UPDATE SET
    logo = EXCLUDED.logo,
    title = EXCLUDED.title,
    subtitle = EXCLUDED.subtitle,
    admin_password = EXCLUDED.admin_password,
    updated_at = CURRENT_TIMESTAMP;
