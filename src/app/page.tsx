import { FolderIcon } from "@heroicons/react/24/solid";

export default function Index() {

  let folders = [
    { name: 'Movies', folders: [
        { name: 'Sci-fi', folders: [
            { name: '2021' },
            { name: '2017' }
        ] },
        { name: 'Adventure' }
    ]},
    { name: 'Anime' }, 
    { name: 'Pictures' }, 
    { name: 'Documents' },
    { name: 'Anime' }
    ]

    return (
        <div className="p-8 max-w-sm mx-auto">
            <ul>
                <li className="my-1.5">
                    <span className="flex items-center gap-1.5">
                        <FolderIcon className="size-6 text-sky-500" />
                        Home
                    </span>
                    <ul className="pl-6">
                      { folders.map((folder) => (
                        <li className="my-1.5" key={folder.name}>
                          <span className="flex items-center gap-1.5">
                              <FolderIcon className="size-6 text-sky-500" />
                              {folder.name}
                          </span>
                          <ul className="pl-6">
                            { folder.folders?.map(folder => (
                                <Folder folder={ folder } key={ folder.name }/>
                            ))}
                          </ul>
                      </li>
                      ))}
                    </ul>
                </li>
            </ul>
        </div>
    )
}

function Folder({ folder }) {
    return (
        <li className="my-1.5" key={folder.name}>
            <span className="flex items-center gap-1.5">
                <FolderIcon className="size-6 text-sky-500" />
                {folder.name}
            </span>
            <ul className="pl-6">
                { folder.folders?.map(folder => (
                    <Folder folder={ folder } key={ folder.name }/>
                ))}
            </ul>
        </li>
    )
}