import OpenAI from 'openai';
import type { WeeklyLessonPlan, LessonPlanRequest } from './types';

export async function generateLessonPlan(request: LessonPlanRequest, apiKey?: string): Promise<WeeklyLessonPlan> {
  const { topic, ageGroup } = request;
  
  // Validate age group
  if (ageGroup < 5 || ageGroup > 12) {
    throw new Error('Age group must be between 5 and 12 years old');
  }

  // Use provided API key or fallback to environment variable
  const key = apiKey || import.meta.env.VITE_OPENAI_API_KEY;
  
  if (!validateApiKey(key)) {
    throw new Error('Valid OpenAI API key is required');
  }

  // Initialize OpenAI client with the API key
  const openai = new OpenAI({
    apiKey: key,
    dangerouslyAllowBrowser: true // Only for development - in production, API calls should be made from a backend
  });

  // Determine appropriate complexity level based on age
  const complexityLevel = ageGroup <= 7 ? 'beginner' : ageGroup <= 10 ? 'intermediate' : 'advanced';
  
  const prompt = `Create a comprehensive 5-day English lesson plan for ${ageGroup}-year-old students on the topic "${topic}".

The lesson plan should be age-appropriate for ${complexityLevel} level students and include:

For each day (5 days total):
- Day number and lesson title
- 2-3 clear learning objectives
- List of required materials
- 4-5 structured activities with:
  - Activity name
  - Duration (in minutes)
  - Detailed description
  - Activity type (introduction, main, practice, review, or wrap-up)
- Assessment method
- Optional homework assignment

Overall requirements:
- Age-appropriate vocabulary and concepts for ${ageGroup}-year-olds
- Interactive and engaging activities
- Progressive difficulty throughout the week
- Mix of speaking, listening, reading, and writing activities
- Clear learning progression from day 1 to day 5

Please format the response as a JSON object with the following structure:
{
  "topic": "${topic}",
  "ageGroup": "${ageGroup} years old",
  "overview": "Brief overview of the weekly plan",
  "lessons": [
    {
      "day": 1,
      "title": "Lesson title",
      "objectives": ["objective1", "objective2", "objective3"],
      "materials": ["material1", "material2"],
      "activities": [
        {
          "name": "Activity name",
          "duration": "15 minutes",
          "description": "Detailed description",
          "type": "introduction"
        }
      ],
      "assessment": "Assessment description",
      "homework": "Optional homework description"
    }
  ]
}`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an experienced elementary school English teacher who creates engaging, age-appropriate lesson plans. Always respond with valid JSON format."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 4000,
    });

    const response = completion.choices[0].message.content;
    
    if (!response) {
      throw new Error('No response received from OpenAI');
    }

    // Parse the JSON response
    const lessonPlan = JSON.parse(response) as WeeklyLessonPlan;
    
    // Validate the response structure
    if (!lessonPlan.lessons || lessonPlan.lessons.length !== 5) {
      throw new Error('Invalid lesson plan structure: must contain exactly 5 lessons');
    }

    return lessonPlan;

  } catch (error) {
    console.error('Error generating lesson plan:', error);
    
    if (error instanceof SyntaxError) {
      throw new Error('Failed to parse lesson plan response. Please try again.');
    }
    
    if (error instanceof Error) {
      throw new Error(`Failed to generate lesson plan: ${error.message}`);
    }
    
    throw new Error('An unexpected error occurred while generating the lesson plan');
  }
}

// Helper function to validate API key
export function validateApiKey(apiKey: string): boolean {
  return Boolean(apiKey && apiKey.length > 0 && apiKey !== 'your-api-key-here');
}
