import { defineDocumentType, makeSource } from 'contentlayer2/source-files'
import rehypePrismPlus from 'rehype-prism-plus'
import highlight from 'rehype-highlight'

import remarkGfm from 'remark-gfm'

const Blog = defineDocumentType(() => ({
    name: 'Blog',
    filePathPattern: `**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        date: { type: 'date', required: true },
    },
    computedFields: {
        url: { type: 'string', resolve: (doc) => `/sss/${doc._raw.flattenedPath}` },
    },
}))

export default makeSource({
    contentDirPath: 'data',
    documentTypes: [Blog],
    mdx: {
        remarkPlugins: [
            remarkGfm
        ],
        rehypePlugins: [
            [rehypePrismPlus, { defaultLanguage: 'js', ignoreMissing: true }],
            highlight
        ]
    }
})