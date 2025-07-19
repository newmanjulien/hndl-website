import { Button } from "./ui/button";
import Logo from "../imports/Logo";

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="flex flex-col items-start space-y-8 max-w-2xl">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight">
          Stop doing 3 time consuming tasks{" "}
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
          We handle 3 tasks for C-Suite Execs. Most of the work
          is done by specialized AIs and the last mile is done
          by humans
        </p>

        {/* CTA Button */}
        <Button
          size="lg"
          className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 text-lg rounded-full transition-all duration-200 shadow-lg"
        >
          Join waitlist
        </Button>
      </div>
    </section>
  );
}