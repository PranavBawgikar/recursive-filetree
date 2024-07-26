import { FolderIcon } from "@heroicons/react/24/solid"

type Folder = {
    name: string
    folders?: Folder[]
}

let folders: Folder[] = [
{
    name: 'Home', folders: [
        { name: 'Movies', folders: [
            { name: 'Sci-fi', folders: [
                { name: '2021' },
                { name: '2017' }
            ]},
            { name: 'Adventure' }
        ]},
        { name: 'Anime', folders: [
            { name: '2021' },
            { name: '2019' }
        ] }, 
        { name: 'Pictures' }, 
        { name: 'Documents' },
        { name: 'Anime' }
    ]
}
]

export default function Index() {
    return (
        <div className="p-8 max-w-sm mx-auto">
            <ul>
                { folders.map((folder) => (
                    <Folder folder={ folder } key={ folder.name } />
                ))}
            </ul>
        </div>
    )
}

function Folder({ folder }: { folder: Folder }) {
    return (
        <li className="my-1.5" key={folder.name}>
            <span className="flex items-center gap-1.5">
                <FolderIcon className="size-6 text-sky-500" />
                {folder.name}
            </span>
            <ul className="pl-6">
                { folder.folders?.map(folder => (
                    <Folder folder={ folder } key={ folder.name }/> // Recursive component
                ))}
            </ul>
        </li>
    )
}