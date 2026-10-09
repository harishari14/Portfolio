import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, CornerDownLeft } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';

interface DeveloperConsoleProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLiveApp: (projectId: string) => void;
  onOpenResume: () => void;
}

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

export const DeveloperConsole: React.FC<DeveloperConsoleProps> = ({
  isOpen,
  onClose,
  onOpenLiveApp,
  onOpenResume,
}) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1 text-slate-300">
          <div className="text-cyan-400 font-bold">Harish M — Developer Terminal Console</div>
          <div className="text-slate-400 text-xs">
            Type <span className="text-cyan-300 font-mono">help</span> to view available commands.
          </div>
        </div>
      ),
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    let resultNode: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        resultNode = (
          <div className="space-y-1 text-xs font-mono text-slate-300">
            <div className="text-cyan-400 font-bold mb-1">Available Commands:</div>
            <div><span className="text-cyan-300 font-semibold">projects</span> : List projects & deployed links</div>
            <div><span className="text-cyan-300 font-semibold">skills</span> : Show technical skills from resume</div>
            <div><span className="text-cyan-300 font-semibold">resume</span> : View resume details</div>
            <div><span className="text-cyan-300 font-semibold">contact</span> : Output email and phone</div>
            <div><span className="text-cyan-300 font-semibold">clear</span> : Clear terminal screen</div>
          </div>
        );
        break;

      case 'projects':
        resultNode = (
          <div className="space-y-2 text-xs font-mono text-slate-300">
            <div className="text-cyan-400 font-bold">Projects:</div>
            {PROJECTS.map((p) => (
              <div key={p.id} className="p-2 bg-slate-900/80 rounded border border-white/[0.05]">
                <div className="text-white font-bold">{p.title}</div>
                <div className="text-slate-400 text-[11px]">{p.description}</div>
                {p.deployedUrl && (
                  <div className="text-cyan-400 pt-1">
                    Deployed: <a href={p.deployedUrl} target="_blank" rel="noreferrer" className="underline">{p.deployedUrl}</a>
                  </div>
                )}
                {p.githubUrl && (
                  <div className="text-slate-400 pt-0.5">
                    GitHub: <a href={p.githubUrl} target="_blank" rel="noreferrer" className="underline">{p.githubUrl}</a>
                  </div>
                )}
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        resultNode = (
          <div className="text-xs font-mono text-slate-300 space-y-1">
            <div><strong className="text-cyan-400">Languages:</strong> Java, JavaScript, SQL</div>
            <div><strong className="text-cyan-400">Frontend:</strong> HTML5, CSS3, JavaScript, React.js, Tailwind CSS</div>
            <div><strong className="text-cyan-400">Backend:</strong> Java Servlets, JSP, JDBC, Spring Boot, Node.js, REST APIs</div>
            <div><strong className="text-cyan-400">Databases:</strong> Oracle DB, MongoDB</div>
            <div><strong className="text-cyan-400">Tools:</strong> Git, GitHub, Eclipse, VS Code, OOP, MVC, SDLC</div>
          </div>
        );
        break;

      case 'resume':
        onOpenResume();
        resultNode = (
          <div className="text-xs font-mono text-emerald-400">
            Opening resume modal...
          </div>
        );
        break;

      case 'contact':
        resultNode = (
          <div className="text-xs font-mono text-slate-300 space-y-1">
            <div>Email: <a href="mailto:amharish.m@gmail.com" className="text-cyan-400 underline">amharish.m@gmail.com</a></div>
            <div>Phone: <span className="text-cyan-400">+91 9944098830</span></div>
            <div>LinkedIn: <a href="https://linkedin.com/in/harish" target="_blank" rel="noreferrer" className="text-cyan-400 underline">linkedin.com/in/harish</a></div>
            <div>GitHub: <a href="https://github.com/harishari14" target="_blank" rel="noreferrer" className="text-cyan-400 underline">github.com/harishari14</a></div>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        return;

      default:
        resultNode = (
          <div className="text-xs font-mono text-rose-400">
            Command not recognized: "{cmd}". Type <span className="text-cyan-300 font-semibold">help</span>.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: rawCmd, output: resultNode }]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl h-[70vh] glass-panel-elevated rounded-2xl border border-white/15 flex flex-col shadow-2xl overflow-hidden font-mono text-xs">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.09] bg-[#0A0E1A]/95">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-cyan-400" />
            <span className="text-white font-bold">Terminal Console</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close terminal"
            className="p-1 text-slate-400 hover:text-white rounded hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Command Ribbon */}
        <div className="px-4 py-2 bg-slate-950 border-b border-white/[0.05] flex items-center gap-2 overflow-x-auto text-[11px]">
          <span className="text-slate-500 shrink-0">Commands:</span>
          {['help', 'projects', 'skills', 'resume', 'contact', 'clear'].map((c) => (
            <button
              key={c}
              onClick={() => handleCommand(c)}
              className="px-2 py-0.5 bg-slate-900 hover:bg-slate-800 text-cyan-300 hover:text-cyan-200 rounded border border-white/[0.06] transition-colors shrink-0 cursor-pointer"
            >
              {c}
            </button>
          ))}
        </div>

        {/* Output */}
        <div className="flex-1 bg-[#06080F]/95 p-5 overflow-y-auto space-y-4">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-cyan-400 font-bold">harish@portfolio:~$</span>
                <span className="text-white font-semibold">{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="px-5 py-3 bg-[#0A0E1A] border-t border-white/[0.08] flex items-center gap-3">
          <span className="text-cyan-400 font-bold shrink-0">harish@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type command ('help', 'projects', 'skills')..."
            className="flex-1 bg-transparent border-0 outline-none text-white font-mono text-xs placeholder:text-slate-600"
          />
          <button
            onClick={() => handleCommand(inputVal)}
            className="p-1 text-slate-400 hover:text-cyan-400 cursor-pointer"
          >
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
