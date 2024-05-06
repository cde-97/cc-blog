import { defineDocumentType, makeSource } from 'contentlayer2/source-files'
import rehypePrismPlus from 'rehype-prism-plus'
import highlight from 'rehype-highlight'

import remarkGfm from 'remark-gfm'

const Blog = defineDocumentType(() => ({
    name: 'Blog',
    filePathPattern: `blog/**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        date: { type: 'date', required: true },
    },
    computedFields: {
        url: { type: 'string', resolve: (doc) => `/${doc._raw.flattenedPath}` },
    },
}))

const Authors = defineDocumentType(() => ({
    name: 'Authors',
    filePathPattern: `authors/**/*.mdx`,
    contentType: 'mdx',
    fields: {
        name: { type: 'string', required: true },
        avatar: { type: 'string' },
        occupation: { type: 'string' },
        company: { type: 'string' },
        email: { type: 'string' },
        twitter: { type: 'string' },
        linkedin: { type: 'string' },
        github: { type: 'string' },
        layout: { type: 'string' },
    },
    computedFields: {
        url: { type: 'string', resolve: (doc) => `/${doc._raw.flattenedPath}` },
    },
}))


export default makeSource({
    contentDirPath: 'data',
    documentTypes: [Blog, Authors],
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