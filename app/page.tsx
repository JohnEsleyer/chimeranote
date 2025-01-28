import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <header className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">ChimeraNote</h1>
          <p className="text-lg mt-2">Effortless Markdown Notes, Connected and Organized</p>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4">
        <section className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Write, Organize, Connect</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            ChimeraNote is a web app designed for effortless note-taking in Markdown. Focus on your ideas and let ChimeraNote handle the rest.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-medium text-gray-800 mb-4">Seamless Markdown Editing</h3>
            <p className="text-gray-600">Write and format your notes with ease using familiar Markdown syntax.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-medium text-gray-800 mb-4">Intuitive Organization</h3>
            <p className="text-gray-600">Link your notes together to create a network of knowledge and explore your ideas from different perspectives.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-medium text-gray-800 mb-4">Cloud Sync</h3>
            <p className="text-gray-600">Access your notes from anywhere, anytime, on any device.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-medium text-gray-800 mb-4">Distraction-Free Writing</h3>
            <p className="text-gray-600">A clean and minimal interface helps you stay focused on your thoughts.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-medium text-gray-800 mb-4">Customizable Themes</h3>
            <p className="text-gray-600">Personalize the look of your writing environment.</p>
          </div>
        </section>

        <section className="text-center mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Experience the ChimeraNote Difference</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            ChimeraNote is more than just a note-taking app; it's a tool for thinking, creating, and connecting ideas. Start capturing your thoughts today!
          </p>
          <button className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300">
            Start Writing Now
          </button>
        </section>
      </main>
    </div>
  );
}
