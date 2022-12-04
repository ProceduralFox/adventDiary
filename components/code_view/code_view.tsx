import React, { useEffect } from 'react'
import hljs from 'highlight.js';
import typescript from 'highlight.js/lib/languages/typescript';
import { useRouter } from 'next/router';

hljs.registerLanguage("typescript", typescript)

type Props = {
  // code: string
  children: React.ReactNode
}

  
const CodeView = (props: Props) => {
  const { children } = props;

  const router = useRouter();
  const { day } = router.query

  useEffect(()=>{
    hljs.initHighlighting();

    return // I feel like this should return something to clean up the operation from the library initing it
  }, [day]);

  return (
    <div style={{ width: "50%"}}>
      <pre>
        <code className="ts">
            {children}
        </code>
      </pre>
    </div>
  )
}

export default CodeView