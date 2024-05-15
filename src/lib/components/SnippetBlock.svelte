<script lang="ts">
    import { CodeBlock } from '@skeletonlabs/skeleton'

    import hljs from 'highlight.js/lib/core'

    import xml from 'highlight.js/lib/languages/xml'
    import plaintext from 'highlight.js/lib/languages/plaintext'

    hljs.registerLanguage('xml', xml)
    hljs.registerLanguage('plaintext', plaintext)

    import 'highlight.js/styles/github-dark.min.css'
    import { storeHighlightJs } from '@skeletonlabs/skeleton'
    storeHighlightJs.set(hljs)

    export let snippet:string, language:string = 'plaintext', showLineNumbers:boolean = true
</script>

<CodeBlock
    language={language}
    code={snippet}
    buttonCopied={['✊🏻', '✌🏻', '🖐🏻'][Math.floor(Math.random()*3)]}
    lineNumbers={showLineNumbers}
></CodeBlock>
