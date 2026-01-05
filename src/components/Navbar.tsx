
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "About", to: "about" },
        { name: "Experience", to: "experience" },
        { name: "Skills", to: "skills" },
        { name: "Projects", to: "projects" },
        { name: "Contact", to: "contact" },
    ];

    return (
        <nav
            className={cn(
                "fixed w-full z-50 transition-all duration-300 border-b border-transparent",
                scrolled
                    ? "bg-background/80 backdrop-blur-md border-primary/10 py-4 shadow-lg"
                    : "bg-transparent py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
                <Link
                    to="hero"
                    smooth={true}
                    duration={500}
                    className="flex items-center gap-2 cursor-pointer group"
                >
                    <div className="p-2 bg-primary/10 rounded border border-primary/20 group-hover:border-primary/50 transition-colors">
                        <Terminal className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-mono text-xl font-bold tracking-tight text-primary">
                        &lt;Parth /&gt;
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.to}
                            smooth={true}
                            duration={500}
                            className="text-sm font-mono text-muted-foreground hover:text-primary cursor-pointer transition-colors hover:underline decoration-primary/50 underline-offset-4"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-lg border-b border-border p-4 md:hidden flex flex-col gap-4 animate-in slide-in-from-top-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.to}
                                smooth={true}
                                duration={500}
                                className="text-sm font-mono text-muted-foreground hover:text-primary cursor-pointer py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
