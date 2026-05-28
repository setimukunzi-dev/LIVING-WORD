export default function LivingWordWebsite() {
  const featuredPosts = [
    {
      title: "Finding Meaning in Everyday Life",
      author: "Sarah M.",
      category: "Inspiration",
      excerpt:
        "A reflection on discovering purpose, faith, and hope through ordinary moments.",
    },
    {
      title: "How Community Changes Everything",
      author: "David K.",
      category: "Community",
      excerpt:
        "Why authentic conversations and shared experiences matter more than ever.",
    },
    {
      title: "The Power of Words",
      author: "Emily R.",
      category: "Stories",
      excerpt:
        "Exploring how storytelling can inspire transformation and connection.",
    },
  ];

  const videoHighlights = [
    {
      title: "Weekly Encouragement Session",
      duration: "12 mins",
    },
    {
      title: "Community Stories Live",
      duration: "28 mins",
    },
    {
      title: "Building Faith Through Action",
      duration: "16 mins",
    },
  ];

  const discussions = [
    {
      user: "Michael",
      message: "What inspires you to keep moving forward during difficult seasons?",
    },
    {
      user: "Sophia",
      message: "I’d love to hear everyone’s favorite inspirational books or podcasts.",
    },
    {
      user: "James",
      message: "Community prayer and support groups have been life-changing for me.",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="border-b border-white/10 bg-neutral-950/90 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold tracking-wide">The Living Word</h1>
            <p className="text-sm text-neutral-400">
              Share stories, videos, and meaningful conversations.
            </p>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#home" className="hover:text-white transition">
              Home
            </a>
            <a href="#blogs" className="hover:text-white transition">
              Blogs
            </a>
            <a href="#videos" className="hover:text-white transition">
              Videos
            </a>
            <a href="#community" className="hover:text-white transition">
              Community
            </a>
            <button className="bg-white text-black px-4 py-2 rounded-xl font-medium hover:opacity-90 transition">
              Join Now
            </button>
          </nav>
        </div>
      </header>

      <section
        id="home"
        className="relative overflow-hidden border-b border-white/10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-blue-500/10" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200 mb-6">
              A modern community publishing platform
            </div>

            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Share your voice with the world.
            </h2>

            <p className="text-lg text-neutral-300 leading-relaxed mb-8 max-w-2xl">
              The Living Word is a platform where creators, writers, and communities
              come together to publish blogs, upload videos, and connect through
              meaningful discussions.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-emerald-500 hover:bg-emerald-400 text-black px-6 py-3 rounded-2xl font-semibold transition">
                Start Publishing
              </button>

              <button className="border border-white/20 hover:border-white/50 px-6 py-3 rounded-2xl font-semibold transition">
                Explore Community
              </button>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Creator Dashboard</h3>
                <span className="text-xs bg-emerald-400/20 text-emerald-300 px-3 py-1 rounded-full">
                  Live
                </span>
              </div>

              <div className="space-y-4">
                <div className="bg-neutral-900 rounded-2xl p-4 border border-white/5">
                  <p className="text-sm text-neutral-400 mb-1">Latest Post</p>
                  <h4 className="font-semibold">Faith, Hope & Creativity</h4>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-neutral-900 rounded-2xl p-4 border border-white/5">
                    <p className="text-sm text-neutral-400">Views</p>
                    <h4 className="text-2xl font-bold">24.8K</h4>
                  </div>

                  <div className="bg-neutral-900 rounded-2xl p-4 border border-white/5">
                    <p className="text-sm text-neutral-400">Members</p>
                    <h4 className="text-2xl font-bold">8.4K</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-3xl p-6 text-black shadow-2xl">
              <h3 className="text-2xl font-bold mb-2">Connect Through Stories</h3>
              <p className="font-medium opacity-80">
                Build conversations that inspire and encourage people worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="blogs" className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-4xl font-bold mb-2">Featured Blogs</h2>
            <p className="text-neutral-400">
              Publish articles, devotionals, life stories, and reflections.
            </p>
          </div>

          <button className="hidden md:block border border-white/20 px-5 py-3 rounded-xl hover:border-white/50 transition">
            View All Posts
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:-translate-y-1 transition duration-300 shadow-lg"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
                  {post.category}
                </span>

                <span className="text-sm text-neutral-400">By {post.author}</span>
              </div>

              <h3 className="text-2xl font-semibold mb-4">{post.title}</h3>

              <p className="text-neutral-300 leading-relaxed mb-6">
                {post.excerpt}
              </p>

              <button className="font-semibold text-emerald-300 hover:text-emerald-200 transition">
                Read More →
              </button>
            </article>
          ))}
        </div>
      </section>

      <section
        id="videos"
        className="bg-white/[0.03] border-y border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="mb-10">
            <h2 className="text-4xl font-bold mb-2">Video Sharing</h2>
            <p className="text-neutral-400">
              Upload sermons, podcasts, interviews, live sessions, and community
              stories.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {videoHighlights.map((video, index) => (
              <div
                key={index}
                className="bg-neutral-900 rounded-3xl overflow-hidden border border-white/10 shadow-lg"
              >
                <div className="h-56 bg-gradient-to-br from-neutral-800 to-neutral-700 flex items-center justify-center text-6xl">
                  ▶
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold">{video.title}</h3>
                    <span className="text-sm text-neutral-400">
                      {video.duration}
                    </span>
                  </div>

                  <p className="text-neutral-400 mb-5">
                    Engage your audience with impactful visual storytelling and
                    meaningful discussions.
                  </p>

                  <button className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:opacity-90 transition">
                    Watch Video
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="community" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-4">Community Discussions</h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-8">
              Create a safe and inspiring place where visitors can connect,
              discuss ideas, support one another, and grow together.
            </p>

            <div className="space-y-5">
              {discussions.map((discussion, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-400 to-blue-400" />
                    <div>
                      <h4 className="font-semibold">{discussion.user}</h4>
                      <p className="text-xs text-neutral-500">Community Member</p>
                    </div>
                  </div>

                  <p className="text-neutral-300 leading-relaxed">
                    {discussion.message}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/10 rounded-[2rem] p-8 shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Platform Features</h3>

            <div className="space-y-5 text-neutral-300">
              <div className="flex gap-4">
                <div className="text-2xl">✍️</div>
                <div>
                  <h4 className="font-semibold text-white">Blog Publishing</h4>
                  <p>
                    Rich text editor, categories, featured articles, and author
                    profiles.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">🎥</div>
                <div>
                  <h4 className="font-semibold text-white">Video Hosting</h4>
                  <p>
                    Upload and stream videos with comments, likes, and playlists.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">💬</div>
                <div>
                  <h4 className="font-semibold text-white">Community Chat</h4>
                  <p>
                    Real-time messaging, forums, reactions, and group discussions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">🔒</div>
                <div>
                  <h4 className="font-semibold text-white">Secure Accounts</h4>
                  <p>
                    User authentication, moderation tools, and role-based access.
                  </p>
                </div>
              </div>
            </div>

            <button className="mt-8 w-full bg-emerald-500 hover:bg-emerald-400 text-black py-4 rounded-2xl font-bold transition">
              Launch Your Community
            </button>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-neutral-900/50">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Start Building The Living Word Today
          </h2>

          <p className="text-lg text-neutral-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Create a powerful online space where people can publish inspiring
            content, watch meaningful videos, and connect through authentic
            community conversations.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:opacity-90 transition">
              Create Account
            </button>

            <button className="border border-white/20 px-8 py-4 rounded-2xl font-semibold hover:border-white/50 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-lg">The Living Word</h3>
            <p className="text-sm text-neutral-500">
              A publishing and community platform for inspiration and connection.
            </p>
          </div>

          <div className="flex gap-6 text-sm text-neutral-400">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
