import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-8xl font-black text-primary mb-4">404</h1>
      <p className="text-xl text-white/60 mb-8">This sector of the metaverse hasn't been discovered yet.</p>
      <Link 
        to="/" 
        className="px-8 py-4 bg-primary text-black font-black rounded-2xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_30px_rgba(182,254,5,0.2)] hover:shadow-[0_0_50px_rgba(182,254,5,0.4)]"
      >
        Return Home
      </Link>
    </div>
  );
}