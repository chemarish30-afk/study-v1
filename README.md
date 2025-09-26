# Study CMS - Strapi v4

A simple Strapi v4 CMS for educational content management.

## Content Structure

- **ExamCourse** → **Subject** → **Unit** → **Chapter** → **Module** → **Content**

## Content Types

- **ExamCourse**: Top-level exam courses
- **Subject**: Subjects within an exam course  
- **Unit**: Units within a subject
- **Chapter**: Chapters within a unit
- **Module**: Modules within a chapter
- **Content**: Individual content items with rich media

## Components

- **HighlightPoint**: Key highlight text
- **DataTable**: Structured data tables
- **MCQ**: Multiple choice questions

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run develop
   ```

3. Access admin panel at `http://localhost:1337/admin`

## API Endpoints

- REST API: `/api/*`
- GraphQL: `/graphql`

## Deployment

This project is ready for Strapi Cloud deployment. Simply connect your GitHub repository to Strapi Cloud.