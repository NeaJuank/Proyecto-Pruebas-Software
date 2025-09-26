import type { Framework } from "../types/framework";

export const frameworks: Framework[] = [
  {
    id: "react",
    name: "React",
    category: "frontend",
    description:
      "A JavaScript library for building user interfaces with a component-based architecture.",
    logo: "https://blogs.perficient.com/files/EpOqfO6d_400x400.png",
    language: "JavaScript/TypeScript",
    popularity: 95,
    releaseYear: 2013,
    maintainedBy: "Meta (Facebook)",
    officialDocs: "https://react.dev/",
    githubUrl: "https://github.com/facebook/react",
    features: [
      "Virtual DOM",
      "Component-Based",
      "Declarative",
      "JSX",
      "Hooks",
      "Server Components",
    ],
    pros: [
      "Large ecosystem",
      "Strong community",
      "Flexible",
      "Great developer tools",
    ],
    cons: ["Steep learning curve", "Rapid changes", "JSX syntax learning"],
    useCases: [
      "Single Page Applications",
      "Progressive Web Apps",
      "Mobile apps with React Native",
      "Desktop apps with Electron",
    ],
    syntaxExample: {
      title: "Basic Component",
      code: `function Welcome({ name }) {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}`,
    },
    companies: ["Facebook", "Netflix", "Airbnb", "Uber", "Instagram"],
    learningCurve: "Medium",
    performance: 4,
  },
  {
    id: "vue",
    name: "Vue.js",
    category: "frontend",
    description:
      "The Progressive JavaScript Framework for building user interfaces.",
    logo: "https://res.cloudinary.com/ddxwdqwkr/image/upload/v1690837534/patterns.dev/Images/vue/intro/vue.png",
    language: "JavaScript/TypeScript",
    popularity: 85,
    releaseYear: 2014,
    maintainedBy: "Evan You & Community",
    officialDocs: "https://vuejs.org/",
    githubUrl: "https://github.com/vuejs/vue",
    features: [
      "Template Syntax",
      "Reactivity System",
      "Component System",
      "Directives",
      "Composition API",
    ],
    pros: [
      "Easy to learn",
      "Great documentation",
      "Flexible",
      "Small bundle size",
    ],
    cons: [
      "Smaller ecosystem than React",
      "Less job opportunities",
      "Community fragmentation",
    ],
    useCases: [
      "Progressive Web Apps",
      "Single Page Applications",
      "Prototyping",
      "Small to medium projects",
    ],
    syntaxExample: {
      title: "Vue Component",
      code: `<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="increment">
      Count: {{ count }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue!',
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
</script>`,
    },
    companies: ["GitLab", "Adobe", "Nintendo", "BMW", "Louis Vuitton"],
    learningCurve: "Easy",
    performance: 4,
  },
  {
    id: "angular",
    name: "Angular",
    category: "frontend",
    description:
      "A platform for building mobile and desktop web applications using TypeScript.",
    logo: "https://colorlib.com/wp/wp-content/uploads/sites/2/angular-logo.png",
    language: "TypeScript",
    popularity: 75,
    releaseYear: 2016,
    maintainedBy: "Google",
    officialDocs: "https://angular.io/",
    githubUrl: "https://github.com/angular/angular",
    features: [
      "TypeScript",
      "Dependency Injection",
      "RxJS",
      "CLI",
      "Two-way Data Binding",
      "Directives",
    ],
    pros: [
      "Full framework",
      "TypeScript by default",
      "Great for large apps",
      "Strong conventions",
    ],
    cons: [
      "Steep learning curve",
      "Verbose syntax",
      "Heavy bundle size",
      "Complex for small projects",
    ],
    useCases: [
      "Enterprise applications",
      "Large-scale projects",
      "Progressive Web Apps",
      "Cross-platform mobile apps",
    ],
    syntaxExample: {
      title: "Angular Component",
      code: `@Component({
  selector: 'app-counter',
  template: \`
    <h1>{{title}}</h1>
    <button (click)="increment()">
      Count: {{count}}
    </button>
  \`
})
export class CounterComponent {
  title = 'Hello Angular!';
  count = 0;
  
  increment() {
    this.count++;
  }
}`,
    },
    companies: ["Google", "Microsoft", "Deutsche Bank", "Samsung", "UPS"],
    learningCurve: "Hard",
    performance: 4,
  },
  {
    id: "svelte",
    name: "Svelte",
    category: "frontend",
    description:
      "A radical new approach to building user interfaces with compile-time optimizations.",
    logo: "https://images.ctfassets.net/23aumh6u8s0i/3AjGhVf8Z2TYapHqJFjhMx/07f030f08831d09151efc29a049ceb63/svelte",
    language: "JavaScript/TypeScript",
    popularity: 70,
    releaseYear: 2016,
    maintainedBy: "Rich Harris & Community",
    officialDocs: "https://svelte.dev/",
    githubUrl: "https://github.com/sveltejs/svelte",
    features: [
      "Compile-time optimization",
      "No Virtual DOM",
      "Reactive statements",
      "Built-in state management",
    ],
    pros: [
      "Smallest bundle size",
      "Great performance",
      "Easy to learn",
      "Less boilerplate",
    ],
    cons: [
      "Smaller ecosystem",
      "Less tooling",
      "Newer framework",
      "Limited job market",
    ],
    useCases: [
      "High-performance apps",
      "Small to medium projects",
      "Progressive enhancement",
      "Interactive websites",
    ],
    syntaxExample: {
      title: "Svelte Component",
      code: `<script>
  let name = 'Svelte';
  let count = 0;
  
  function increment() {
    count += 1;
  }
</script>

<h1>Hello {name}!</h1>
<button on:click={increment}>
  Count: {count}
</button>

<style>
  h1 {
    color: #ff3e00;
  }
</style>`,
    },
    companies: ["The New York Times", "Apple", "Spotify", "1Password", "Brave"],
    learningCurve: "Easy",
    performance: 5,
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "fullstack",
    description:
      "The React framework for production with built-in optimizations and full-stack capabilities.",
    logo: "https://cdn.creazilla.com/icons/3254134/nextjs-icon-icon-sm.png",
    language: "JavaScript/TypeScript",
    popularity: 90,
    releaseYear: 2016,
    maintainedBy: "Vercel",
    officialDocs: "https://nextjs.org/",
    githubUrl: "https://github.com/vercel/next.js",
    features: [
      "Server-Side Rendering",
      "Static Site Generation",
      "API Routes",
      "File-based routing",
      "Image optimization",
    ],
    pros: [
      "Great performance",
      "SEO-friendly",
      "Full-stack capabilities",
      "Great developer experience",
    ],
    cons: [
      "React knowledge required",
      "Can be overkill for simple sites",
      "Vercel vendor lock-in",
    ],
    useCases: [
      "E-commerce sites",
      "Blogs",
      "Marketing websites",
      "Full-stack applications",
    ],
    syntaxExample: {
      title: "Next.js Page",
      code: `// pages/index.js
export default function Home({ posts }) {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
        </article>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const posts = await fetch('/api/posts');
  return {
    props: { posts }
  };
}`,
    },
    companies: ["Netflix", "TikTok", "Twitch", "Hulu", "Target"],
    learningCurve: "Medium",
    performance: 5,
  },
  {
    id: "express",
    name: "Express.js",
    category: "backend",
    description: "Fast, unopinionated, minimalist web framework for Node.js.",
    logo: "https://e7.pngegg.com/pngimages/247/558/png-clipart-node-js-javascript-express-js-npm-react-github-angle-text.png",
    language: "JavaScript/TypeScript",
    popularity: 88,
    releaseYear: 2010,
    maintainedBy: "OpenJS Foundation",
    officialDocs: "https://expressjs.com/",
    githubUrl: "https://github.com/expressjs/express",
    features: [
      "Middleware system",
      "Routing",
      "Template engines",
      "HTTP utilities",
      "Minimal core",
    ],
    pros: [
      "Simple and flexible",
      "Large ecosystem",
      "Great performance",
      "Minimalist approach",
    ],
    cons: [
      "Manual setup required",
      "Security considerations",
      "Callback complexity",
    ],
    useCases: [
      "REST APIs",
      "Web applications",
      "Microservices",
      "Real-time applications",
    ],
    syntaxExample: {
      title: "Express Server",
      code: `const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/users', (req, res) => {
  res.json({ users: [] });
});

app.post('/api/users', (req, res) => {
  const user = req.body;
  // Save user logic
  res.status(201).json(user);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`,
    },
    companies: ["Uber", "Accenture", "IBM", "Fox Broadcasting", "PayPal"],
    learningCurve: "Easy",
    performance: 4,
  },
  {
    id: "django",
    name: "Django",
    category: "backend",
    description:
      "The web framework for perfectionists with deadlines. High-level Python framework.",
    logo: "https://e7.pngegg.com/pngimages/10/113/png-clipart-django-web-development-web-framework-python-software-framework-django-text-trademark-thumbnail.png",
    language: "Python",
    popularity: 82,
    releaseYear: 2005,
    maintainedBy: "Django Software Foundation",
    officialDocs: "https://www.djangoproject.com/",
    githubUrl: "https://github.com/django/django",
    features: [
      "ORM",
      "Admin interface",
      "Authentication",
      "URL routing",
      "Template system",
      "Security features",
    ],
    pros: [
      "Batteries included",
      "Rapid development",
      "Secure by default",
      "Great documentation",
    ],
    cons: [
      "Monolithic structure",
      "Learning curve",
      "Can be overkill for simple projects",
    ],
    useCases: [
      "Content management",
      "Social networks",
      "Scientific computing platforms",
      "E-commerce",
    ],
    syntaxExample: {
      title: "Django View",
      code: `# views.py
from django.http import JsonResponse
from django.shortcuts import render
from .models import User

def user_list(request):
    if request.method == 'GET':
        users = User.objects.all()
        return JsonResponse({
            'users': [{'id': u.id, 'name': u.name} 
                     for u in users]
        })
    
def user_detail(request, user_id):
    user = User.objects.get(id=user_id)
    return render(request, 'user.html', 
                 {'user': user})`,
    },
    companies: ["Instagram", "Spotify", "YouTube", "Dropbox", "Pinterest"],
    learningCurve: "Medium",
    performance: 4,
  },
  {
    id: "flutter",
    name: "Flutter",
    category: "mobile",
    description:
      "Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop.",
    logo: "https://web-strapi.mrmilu.com/uploads/flutter_logo_470e9f7491.png",
    language: "Dart",
    popularity: 85,
    releaseYear: 2017,
    maintainedBy: "Google",
    officialDocs: "https://flutter.dev/",
    githubUrl: "https://github.com/flutter/flutter",
    features: [
      "Cross-platform",
      "Hot reload",
      "Widget-based",
      "Native performance",
      "Custom UI",
    ],
    pros: [
      "Single codebase",
      "Great performance",
      "Rich widgets",
      "Strong community",
    ],
    cons: [
      "Dart language learning",
      "Large app size",
      "Limited native features",
    ],
    useCases: [
      "Mobile apps",
      "Desktop applications",
      "Web applications",
      "Embedded systems",
    ],
    syntaxExample: {
      title: "Flutter Widget",
      code: `class CounterApp extends StatefulWidget {
  @override
  _CounterAppState createState() => _CounterAppState();
}

class _CounterAppState extends State<CounterApp> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Counter')),
      body: Center(
        child: Text('Count: $_counter'),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        child: Icon(Icons.add),
      ),
    );
  }
}`,
    },
    companies: ["Google", "Alibaba", "BMW", "Square", "eBay"],
    learningCurve: "Medium",
    performance: 5,
  },
  {
    id: "rails",
    name: "Ruby on Rails",
    category: "backend",
    description:
      "A server-side web application framework written in Ruby under the MIT License.",
    logo: "https://e7.pngegg.com/pngimages/782/228/png-clipart-ruby-on-rails-rubygems-amazon-dynamodb-ruby-text-logo-thumbnail.png",
    language: "Ruby",
    popularity: 72,
    releaseYear: 2004,
    maintainedBy: "Rails Core Team",
    officialDocs: "https://rubyonrails.org/",
    githubUrl: "https://github.com/rails/rails",
    features: [
      "Convention over Configuration",
      "ActiveRecord ORM",
      "MVC Architecture",
      "RESTful design",
      "Built-in testing",
      "Asset pipeline",
    ],
    pros: [
      "Rapid development",
      "Convention over configuration",
      "Great for MVPs",
      "Strong community",
    ],
    cons: [
      "Performance limitations",
      "Magic can be confusing",
      "Monolithic structure",
      "Declining popularity",
    ],
    useCases: [
      "Web applications",
      "E-commerce platforms",
      "Content management systems",
      "API development",
    ],
    syntaxExample: {
      title: "Rails Controller",
      code: `class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.new(user_params)
    
    if @user.save
      render json: @user, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email)
  end
end`,
    },
    companies: ["GitHub", "Shopify", "Basecamp", "Airbnb", "SoundCloud"],
    learningCurve: "Easy",
    performance: 3,
  },
  {
    id: "dotnet",
    name: ".NET Core",
    category: "backend",
    description:
      "A cross-platform, high-performance framework for building modern, cloud-based, internet-connected applications.",
    logo: "https://cdn.dribbble.com/userupload/21359917/file/original-6949a8f0c08103ef18a6dd8bb6f15b73.jpg",
    language: "C#",
    popularity: 78,
    releaseYear: 2016,
    maintainedBy: "Microsoft",
    officialDocs: "https://docs.microsoft.com/en-us/dotnet/",
    githubUrl: "https://github.com/dotnet/core",
    features: [
      "Cross-platform",
      "High performance",
      "Dependency injection",
      "Built-in security",
      "Cloud-ready",
      "Microservices support",
    ],
    pros: [
      "Excellent performance",
      "Strong typing",
      "Great tooling",
      "Enterprise-ready",
    ],
    cons: [
      "Microsoft ecosystem",
      "Verbose syntax",
      "Learning curve for non-C# developers",
    ],
    useCases: [
      "Enterprise applications",
      "Microservices",
      "Web APIs",
      "Cloud applications",
    ],
    syntaxExample: {
      title: ".NET Core Controller",
      code: `[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly IUserService _userService;

    public UsersController(IUserService userService)
    {
        _userService = userService;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<User>>> GetUsers()
    {
        var users = await _userService.GetAllUsersAsync();
        return Ok(users);
    }

    [HttpPost]
    public async Task<ActionResult<User>> CreateUser(User user)
    {
        var createdUser = await _userService.CreateUserAsync(user);
        return CreatedAtAction(nameof(GetUser), 
                             new { id = createdUser.Id }, createdUser);
    }
}`,
    },
    companies: ["Microsoft", "Stack Overflow", "Dell", "GoDaddy", "Siemens"],
    learningCurve: "Medium",
    performance: 5,
  },
  {
    id: "laravel",
    name: "Laravel",
    category: "backend",
    description:
      "The PHP framework for web artisans with elegant syntax and powerful tools.",
    logo: "https://desarrolloweb.com/storage/serie_images/TLU8RF8GVhElDaXPIIDNqgaS5kTA4Ep81HK0tlXE.jpeg",
    language: "PHP",
    popularity: 80,
    releaseYear: 2011,
    maintainedBy: "Taylor Otwell & Community",
    officialDocs: "https://laravel.com/docs",
    githubUrl: "https://github.com/laravel/laravel",
    features: [
      "Eloquent ORM",
      "Artisan CLI",
      "Blade templating",
      "Migration system",
      "Queue system",
      "Authentication",
    ],
    pros: [
      "Elegant syntax",
      "Rich ecosystem",
      "Great documentation",
      "Rapid development",
    ],
    cons: [
      "PHP stigma",
      "Performance compared to compiled languages",
      "Can be heavy for simple projects",
    ],
    useCases: [
      "Web applications",
      "E-commerce platforms",
      "Content management systems",
      "RESTful APIs",
    ],
    syntaxExample: {
      title: "Laravel Route & Controller",
      code: `// routes/api.php
Route::get('/users', [UserController::class, 'index']);
Route::post('/users', [UserController::class, 'store']);

// UserController.php
class UserController extends Controller
{
    public function index()
    {
        return User::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
        ]);

        $user = User::create($request->all());
        
        return response()->json($user, 201);
    }
}`,
    },
    companies: ["9GAG", "Pfizer", "BBC", "About.com", "Deltanet Travel"],
    learningCurve: "Easy",
    performance: 3,
  },
];
