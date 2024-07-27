'use client'
import { ChevronRightIcon, DocumentIcon, FolderIcon } from "@heroicons/react/24/solid"
import { useState } from "react"

type Node = {
    name: string
    nodes?: Node[]
}

let nodes: Node[] = [
{
    name: 'Home', nodes: [
        { name: 'Movies', nodes: [
            { name: 'Sci-fi', nodes: [
                { name: '2021', nodes: [
                    { name: 'dune-part-one.mp4'},
                    { name: 'spider-man-no-way-home.mp4'}
                ] },
                { name: '2017', nodes: [
                    { name: 'blade-runner-2049.mp4'}
                ] }
            ]},
            { name: 'Adventure', nodes: [] }
        ]},
        { name: 'Anime', nodes: [
            { name: '2021', nodes: [
                { name: 'tokyo-revengers.mp4' }
            ] },
            { name: '2019', nodes: [
                {name: 'demon-slayer.mp4'}
            ] }
        ] }, 
        { name: 'Pictures', nodes: [] }, 
        { name: 'Documents',nodes: [] },
        { name: 'passwords.txt' }
    ]
}
]

export default function Index() {
    return (
        <div className="p-8 max-w-lg mx-auto">
            <ul>
                { nodes.map((node) => (
                    <FileSystemItem node={ node } key={ node.name } />
                ))}
            </ul>
        </div>
    )
}

function FileSystemItem({ node }: { node: Node }) {

    let [ isOpen, setIsOpen ] = useState(false)

    return (
        <li className="my-1.5" key={node.name}>
            <span className="flex items-center gap-1.5">
                { node.nodes && node.nodes.length > 0 && (
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <ChevronRightIcon className={`size-4 text-gray-500 ${ isOpen ? 'rotate-90' : '' }`} />   
                    </button>
                )}
                { node.nodes? (
                    <FolderIcon className={`size-6 text-sky-500 ${node.nodes.length === 0 ? 'ml-[22px]' : ''}`} />
                ) : (
                    <DocumentIcon className="ml-[22px] size-6 text-gray-900" />
                )}
                {node.name}
            </span>
            {isOpen && (
                <ul className="pl-6">
                    { node.nodes?.map(folder => (
                        <FileSystemItem node={ folder } key={ folder.name }/> // Recursive component
                    ))}
                </ul>
            )}
        </li>
    )
}