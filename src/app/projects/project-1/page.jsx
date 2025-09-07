import Image from "next/image";
import Link from "next/link";

const RentalHouseProject = () => {
  return (
    <main className="bg-gray-900 text-white min-h-screen py-16 px-4 md:px-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-400 mb-2">Rental House Platform</h1>
        <p className="text-gray-400 text-lg mb-6">
          A full-featured MERN stack platform for rental listings, tenant requests, and landlord approvals.
        </p>

        {/* Banner Image */}
        <div className="relative w-full h-64 md:h-[500px] mb-8 border rounded-lg">
          <Image
            src="/rental-house.png" // put your image in /public/images/projects/
            alt="Rental House Project"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Tech Stack */}
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <ul className="list-disc list-inside text-gray-300 mb-8">
          <li>Frontend: Next.js, Tailwind CSS, TypeScript</li>
          <li>Backend: Node.js, Express.js, MongoDB</li>
          <li>Authentication: JWT & Role-based Access</li>
          <li>Cloud Storage: Cloudinary for image uploads</li>
        </ul>

        {/* Features */}
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside text-gray-300 mb-8 space-y-1">
          <li>Tenant can browse and request rental properties.</li>
          <li>Landlord can accept or reject requests.</li>
          <li>Contact and payment info shown after approval.</li>
          <li>Separate Dashboards for Tenant, Landlord, and Admin.</li>
          <li>Role-based route protection and UI rendering.</li>
        </ul>

        {/* Links */}
        <div className="flex gap-6 mb-12">
          <Link
            href="https://basha-vara-frontend.vercel.app"
            target="_blank"
            className="bg-purple-600 hover:bg-purple-700 transition px-6 py-2 rounded text-white"
          >
            Live Demo
          </Link>
          <Link
            href="https://github.com/your-username/rental-house"
            target="_blank"
            className="bg-gray-800 hover:bg-gray-700 transition px-6 py-2 rounded text-white"
          >
            View Code
          </Link>
        </div>

        {/* Navigation */}
        <Link href="/#projects" className="text-purple-400 hover:underline">
          ← Back to Projects
        </Link>
      </div>
    </main>
  );
};

export default RentalHouseProject;
