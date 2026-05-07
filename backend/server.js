const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

// Test database connection
pool.connect((err, client, release) => {
    if (err) {
        console.error('Database connection error:', err.stack);
    } else {
        console.log('Connected to PostgreSQL database');
        release();
    }
});

// Root route
app.get('/', (req, res) => {
    res.json({ message: 'Mulungushi University API is running', status: 'ok' });
});

// Get all locations
app.get('/api/locations', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM locations ORDER BY name');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});

// Add location
app.post('/api/locations', async (req, res) => {
    const { id, name, type, lat, lng, thumbnail, image, maps_link, description } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO locations (id, name, type, lat, lng, thumbnail, image, maps_link, description) VALUES (, , , , , , , , ) RETURNING *',
            [id, name, type, lat, lng, thumbnail, image, maps_link, description]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to add location' });
    }
});

// Update location
app.put('/api/locations/:id', async (req, res) => {
    const { id } = req.params;
    const { name, type, lat, lng, thumbnail, image, maps_link, description } = req.body;
    try {
        const result = await pool.query(
            'UPDATE locations SET name=, type=, lat=, lng=, thumbnail=, image=, maps_link=, description=, updated_at=CURRENT_TIMESTAMP WHERE id= RETURNING *',
            [name, type, lat, lng, thumbnail, image, maps_link, description, id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to update location' });
    }
});

// Delete location
app.delete('/api/locations/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM locations WHERE id = ', [id]);
        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to delete location' });
    }
});

// Get all events
app.get('/api/events', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM events ORDER BY event_date DESC');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});

// Add event
app.post('/api/events', async (req, res) => {
    const { id, title, event_date, image, description, location } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO events (id, title, event_date, image, description, location) VALUES (, , , , , ) RETURNING *',
            [id, title, event_date, image, description, location]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to add event' });
    }
});

// Update event
app.put('/api/events/:id', async (req, res) => {
    const { id } = req.params;
    const { title, event_date, image, description, location } = req.body;
    try {
        const result = await pool.query(
            'UPDATE events SET title=, event_date=, image=, description=, location= WHERE id= RETURNING *',
            [title, event_date, image, description, location, id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to update event' });
    }
});

// Delete event
app.delete('/api/events/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM events WHERE id = ', [id]);
        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to delete event' });
    }
});

// Get all team members
app.get('/api/team', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM team_members ORDER BY name');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});

// Add team member
app.post('/api/team', async (req, res) => {
    const { id, name, role, image, bio, email } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO team_members (id, name, role, image, bio, email) VALUES (, , , , , ) RETURNING *',
            [id, name, role, image, bio, email]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to add team member' });
    }
});

// Update team member
app.put('/api/team/:id', async (req, res) => {
    const { id } = req.params;
    const { name, role, image, bio, email } = req.body;
    try {
        const result = await pool.query(
            'UPDATE team_members SET name=, role=, image=, bio=, email= WHERE id= RETURNING *',
            [name, role, image, bio, email, id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to update team member' });
    }
});

// Delete team member
app.delete('/api/team/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM team_members WHERE id = ', [id]);
        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to delete team member' });
    }
});

// Get about info
app.get('/api/about', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM about_info WHERE id = 1');
        res.json(result.rows[0] || {});
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});

// Update about info
app.put('/api/about', async (req, res) => {
    const { content, image, contact } = req.body;
    try {
        const result = await pool.query(
            'UPDATE about_info SET content=, image=, contact=, updated_at=CURRENT_TIMESTAMP WHERE id=1 RETURNING *',
            [content, image, contact]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to update about info' });
    }
});

// Get settings
app.get('/api/settings', async (req, res) => {
    try {
        const result = await pool.query('SELECT logo, title, subtitle FROM settings WHERE id = 1');
        res.json(result.rows[0] || {});
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});

// Update settings
app.put('/api/settings', async (req, res) => {
    const { logo, title, subtitle, adminPassword } = req.body;
    try {
        if (adminPassword) {
            const hashedPassword = await bcrypt.hash(adminPassword, 10);
            await pool.query(
                'UPDATE settings SET logo=, title=, subtitle=, admin_password=, updated_at=CURRENT_TIMESTAMP WHERE id=1',
                [logo, title, subtitle, hashedPassword]
            );
        } else {
            await pool.query(
                'UPDATE settings SET logo=, title=, subtitle=, updated_at=CURRENT_TIMESTAMP WHERE id=1',
                [logo, title, subtitle]
            );
        }
        const result = await pool.query('SELECT logo, title, subtitle FROM settings WHERE id = 1');
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to update settings' });
    }
});

// Login
app.post('/api/login', async (req, res) => {
    const { password } = req.body;
    try {
        const result = await pool.query('SELECT admin_password FROM settings WHERE id = 1');
        const storedPassword = result.rows[0]?.admin_password;
        
        if (storedPassword && await bcrypt.compare(password, storedPassword)) {
            res.json({ success: true });
        } else {
            res.status(401).json({ success: false, error: 'Invalid password' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Login failed' });
    }
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});


// TEMPORARY RESET ENDPOINT - Remove after use
app.post('/api/reset-admin', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash('admin123', 10);
        await pool.query('UPDATE settings SET admin_password = $1 WHERE id = 1', [hashedPassword]);
        res.json({ success: true, message: 'Password reset to admin123' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// TEMPORARY - Remove after use
app.get('/reset-password', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash('admin123', 10);
        await pool.query('UPDATE settings SET admin_password = $1 WHERE id = 1', [hashedPassword]);
        res.send('✅ Password reset to: admin123');
    } catch (err) {
        res.send('❌ Error: ' + err.message);
    }
});

app.listen(port, () => {
    console.log('Server running on port', port);
});


