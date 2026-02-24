import { Package, Zap, Shield, Blocks } from 'lucide-react';

export function Features() {
    const feats = [
        {
            name: "Lightning Fast Builds",
            description: "Harness the power of Vite and Bun to spin up dev servers instantly and build production assets in milliseconds.",
            icon: <Zap className="w-6 h-6 text-yellow-400" />
        },
        {
            name: "Beautiful Components",
            description: "Accessible, customizable components from shadcn/ui and Base UI that you can adapt to match your exact brand.",
            icon: <Blocks className="w-6 h-6 text-blue-400" />
        },
        {
            name: "Type-Safe Everything",
            description: "End-to-end type safety out of the box with React and TypeScript. Catch errors before they hit production.",
            icon: <Shield className="w-6 h-6 text-emerald-400" />
        },
        {
            name: "Modern Infrastructure",
            description: "Deploy seamlessly to Google Cloud Run utilizing multistage, optimized Docker builds.",
            icon: <Package className="w-6 h-6 text-purple-400" />
        }
    ];

    return (
        <section className="py-24 bg-zinc-900 border-t border-zinc-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center md:text-left mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Everything you need
                    </h2>
                    <p className="text-zinc-400 max-w-2xl text-lg">
                        Stop worrying about configuration. We've assembled the perfect stack for modern, high-performance web applications that scale effortlessly.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                    {feats.map((feature, i) => (
                        <div
                            key={i}
                            className="group p-8 rounded-3xl bg-zinc-800/10 border border-zinc-800/50 hover:bg-zinc-800/40 transition-colors relative overflow-hidden"
                        >
                            <div
                                className="absolute right-0 top-0 h-[100px] w-[100px] bg-gradient-to-br from-indigo-500/10 to-transparent blur-2xl group-hover:from-indigo-500/20 transition-all opacity-0 group-hover:opacity-100"
                            />
                            <div className="inline-block p-4 bg-zinc-800 rounded-2xl border border-zinc-700/50 mb-6 drop-shadow-md">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{feature.name}</h3>
                            <p className="text-zinc-400 leading-relaxed max-w-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
