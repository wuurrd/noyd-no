import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import ReactMarkdown from "react-markdown";

export function Markdown({ children, className }: { children?: string | null; className?: string }) {
  // replace links with markdown links with shorter title
  const urlRegexp = /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/gi;
  const replaceLink = (url: string) => {
    const title = url.length > 32 ? url.slice(0, 32) + "..." : url;
    return `[${title}](${url})`;
  };
  const replaced = children?.replace(urlRegexp, replaceLink);
  return (
    <div className={"markdown " + className}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {replaced}
      </ReactMarkdown>
    </div>
  );
}
