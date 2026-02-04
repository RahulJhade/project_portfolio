# API Documentation

## Base URL
```
http://localhost:5000/api
```

## Endpoints

### 1. Get All Projects

**GET** `/projects`

Returns all projects in the database, sorted by creation date (newest first).

**Response:**
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "title": "Brain Tumor Detection",
      "description": "A machine learning application...",
      "techStack": ["Python", "TensorFlow", "Keras"],
      "githubLink": "https://github.com/username/repo",
      "createdAt": "2026-01-30T10:00:00.000Z"
    }
  ]
}
```

---

### 2. Get Single Project

**GET** `/projects/:id`

Returns a specific project by ID.

**Parameters:**
- `id` (URL parameter) - MongoDB ObjectId

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Brain Tumor Detection",
    "description": "A machine learning application...",
    "techStack": ["Python", "TensorFlow", "Keras"],
    "githubLink": "https://github.com/username/repo",
    "createdAt": "2026-01-30T10:00:00.000Z"
  }
}
```

**Error Response (404):**
```json
{
  "success": false,
  "message": "Project not found"
}
```

---

### 3. Create New Project

**POST** `/projects`

Creates a new project.

**Request Body:**
```json
{
  "title": "Project Title",
  "description": "Project description",
  "techStack": ["Tech1", "Tech2"],
  "githubLink": "https://github.com/username/repo"
}
```

**Validation Rules:**
- `title`: Required, String
- `description`: Optional, String
- `techStack`: Optional, Array of Strings
- `githubLink`: Optional, must be valid URL format

**Response (201):**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Project Title",
    "description": "Project description",
    "techStack": ["Tech1", "Tech2"],
    "githubLink": "https://github.com/username/repo",
    "createdAt": "2026-01-30T10:00:00.000Z"
  }
}
```

**Error Response (400):**
```json
{
  "success": false,
  "message": "Error creating project",
  "error": "Project title is required"
}
```

---

### 4. Update Project

**PUT** `/projects/:id`

Updates an existing project.

**Parameters:**
- `id` (URL parameter) - MongoDB ObjectId

**Request Body:** (all fields optional)
```json
{
  "title": "Updated Title",
  "description": "Updated description",
  "techStack": ["NewTech1", "NewTech2"],
  "githubLink": "https://github.com/username/new-repo"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Updated Title",
    "description": "Updated description",
    "techStack": ["NewTech1", "NewTech2"],
    "githubLink": "https://github.com/username/new-repo",
    "createdAt": "2026-01-30T10:00:00.000Z"
  }
}
```

**Error Response (404):**
```json
{
  "success": false,
  "message": "Project not found"
}
```

---

### 5. Delete Project

**DELETE** `/projects/:id`

Deletes a project by ID.

**Parameters:**
- `id` (URL parameter) - MongoDB ObjectId

**Response:**
```json
{
  "success": true,
  "message": "Project deleted successfully"
}
```

**Error Response (404):**
```json
{
  "success": false,
  "message": "Project not found"
}
```

---

## Error Codes

| Status Code | Description |
|-------------|-------------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request (validation error) |
| 404 | Not Found |
| 500 | Internal Server Error |

---

## Example Usage with cURL

### Get all projects
```bash
curl http://localhost:5000/api/projects
```

### Create a project
```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "New Project",
    "description": "Description here",
    "techStack": ["React", "Node.js"],
    "githubLink": "https://github.com/username/repo"
  }'
```

### Update a project
```bash
curl -X PUT http://localhost:5000/api/projects/507f1f77bcf86cd799439011 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated Project Title"
  }'
```

### Delete a project
```bash
curl -X DELETE http://localhost:5000/api/projects/507f1f77bcf86cd799439011
```
