# 🤖 Classroom Copilot

An AI-powered lesson plan generator that creates comprehensive 5-day English lesson plans for elementary students (ages 5-12) using GPT-4.

## Features

- **Topic-based lesson planning**: Generate lesson plans for any English topic
- **Age-appropriate content**: Customized for students aged 5-12 years
- **Comprehensive 5-day structure**: Each plan includes 5 complete daily lessons
- **Detailed activities**: Each lesson contains multiple structured activities
- **Professional format**: Includes objectives, materials, activities, assessments, and homework
- **Beautiful UI**: Modern, responsive design with intuitive user experience

## What's Included in Each Lesson Plan

Each generated lesson plan contains:

### Weekly Overview
- Topic and age group specification
- Comprehensive overview of the 5-day learning journey

### Daily Lessons (5 days)
For each day, you get:
- **Learning Objectives**: 2-3 clear, measurable goals
- **Materials Needed**: Complete list of required resources
- **Structured Activities**: 4-5 activities including:
  - Activity name and duration
  - Detailed descriptions
  - Activity type (introduction, main, practice, review, wrap-up)
- **Assessment Methods**: How to evaluate student progress
- **Homework Assignments**: Optional take-home activities

## Getting Started

### Prerequisites
- Node.js 18+ installed
- OpenAI API key (get one at [OpenAI Platform](https://platform.openai.com/api-keys))

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd classroom-copilot
```

2. Install dependencies:
```bash
npm install
```

3. (Optional) Set up environment variables:
```bash
cp .env.example .env
# Edit .env and add your OpenAI API key
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

### Using the Application

1. **API Key Setup**: On first launch, enter your OpenAI API key
2. **Create Lesson Plan**: 
   - Enter an English topic (e.g., "Animals", "Family", "Weather")
   - Select student age (5-12 years)
   - Click "Generate 5-Day Lesson Plan"
3. **Review Results**: Browse through the comprehensive 5-day lesson plan
4. **Create New Plans**: Use the "Create New Lesson Plan" button to generate additional plans

## API Key Security

- Your API key is stored only in your browser's memory
- The key is never sent to external servers (except OpenAI)
- For production use, consider implementing a backend service

## Example Topics

Here are some topic ideas that work well:
- **Basic Vocabulary**: Animals, Colors, Numbers, Family, Body Parts
- **Daily Life**: Food, Clothes, House, School, Transportation
- **Concepts**: Weather, Seasons, Time, Emotions, Actions
- **Stories**: Fairy Tales, Simple Narratives, Character Development

## Technology Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Custom CSS with modern design
- **AI Integration**: OpenAI GPT-4 API
- **Build Tool**: Vite
- **Linting**: ESLint

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── types.ts                 # TypeScript interfaces
├── lessonPlanGenerator.ts   # GPT-4 integration
├── ApiKeyConfig.tsx         # API key configuration component
├── LessonPlanForm.tsx       # Lesson plan request form
├── LessonPlanDisplay.tsx    # Lesson plan display component
├── App.tsx                  # Main application component
├── App.css                  # Application styles
└── main.tsx                 # Application entry point
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you encounter any issues or have questions:
1. Check the browser console for error messages
2. Ensure your OpenAI API key is valid and has sufficient credits
3. Verify your internet connection
4. Try with a different topic or age group

---

Built with ❤️ for educators who want to leverage AI to create engaging lesson plans.
