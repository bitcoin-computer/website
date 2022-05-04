import Box from "@mui/material/Box";

import "./CodeSection.css";

function CodeSection() {
  return (
    <Box className="code-section-container">
      <Box>
        <pre className="code-block">
          <code> 1 </code>
          <code className="code-yellow">class</code>{" "}
          <code className="code-dark-yellow">NFT</code>
          <code className="code-gray">{` {`}</code>
          <br />
          <code> 2 </code>
          <code className="code-dark-blue">{`    constructor`}</code>
          <code>(</code>
          <code className="code-light-blue">url, title, artist, owner</code>
          <code>)</code> <code>{`{`}</code>
          <br />
          <code> 3 </code>
          <code className="code-blue">{`        this`}</code>
          <code>.</code>
          <code className="code-dark-blue">url</code> <code>=</code>{" "}
          <code className="code-dark-blue">url</code>
          <br />
          <code> 4 </code>
          <code className="code-blue">{`        this`}</code>
          <code>.</code>
          <code className="code-dark-blue">title</code> <code>=</code>{" "}
          <code className="code-dark-blue">title</code>
          <br />
          <code> 5 </code>
          <code className="code-blue">{`        this`}</code>
          <code>.</code>
          <code className="code-dark-blue">artist</code> <code>=</code>{" "}
          <code className="code-dark-blue">artist</code>
          <br />
          <code>11 </code>
          <code className="code-blue">{`        this`}</code>
          <code>.</code>
          <code className="code-dark-blue">_owners</code> <code>= [</code>
          <code className="code-dark-blue">to</code>
          <code>]</code>
          <br />
          <code> 4 </code>
          <code>{`    }`}</code>
          <br />
          <code> 5 </code>
          <br />
          <code>10 </code>
          <code className="code-dark-blue">{`    send`}</code>
          <code>(</code>
          <code className="code-light-blue">to</code>
          <code>)</code> <code>{`{`}</code>
          <br />
          <code>11 </code>
          <code className="code-blue">{`        this`}</code>
          <code>.</code>
          <code className="code-dark-blue">_owners</code> <code>= [</code>
          <code className="code-dark-blue">to</code>
          <code>]</code>
          <br />
          <code>12 </code>
          <code>{`    }`}</code>
          <br />
          <code>13 </code>
          <code>{`}`}</code>
        </pre>
      </Box>
    </Box>
  );
}

export default CodeSection;
