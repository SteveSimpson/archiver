import Select from 'react-select';
import React, { useState } from 'react';

type Extension = {
    value: string;
    label: string;
    type: string;
};

type Option = {
    label: string;
    value: string;
}

export function FileList() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
            <div>
            <div className="flex flex-wrap gap-4 items-center">
                <Select
                    className="w-32"
                    placeholder="Group"
                    options={[
                        { value: 'images', label: 'Images' },
                        { value: 'documents', label: 'Documents' }
                    ]}
                />
                <Select
                    className="w-32"
                    placeholder="Extension"
                    options={[
                        { value: 'gif', label: 'GIF' },
                        { value: 'jpg', label: 'JPG' },
                        { value: 'png', label: 'PNG' },
                        { value: 'pdf', label: 'PDF' }
                    ]}
                />
                <Select
                    className="w-32"
                    placeholder="File Size"
                    options={[
                        { value: 'small', label: '< 1MB' },
                        { value: 'medium', label: '1-10MB' },
                        { value: 'large', label: '> 10MB' }
                    ]}
                />
                <Select
                    className="w-32"
                    placeholder="Created"
                    options={[
                        { value: 'today', label: 'Today' },
                        { value: 'week', label: 'This Week' },
                        { value: 'month', label: 'This Month' }
                    ]}
                />
                <Select
                    className="w-32"
                    placeholder="Modified"
                    options={[
                        { value: 'today', label: 'Today' },
                        { value: 'week', label: 'This Week' },
                        { value: 'month', label: 'This Month' }
                    ]}
                />
                <Select
                    className="w-32"
                    placeholder="Tags"
                    isMulti
                    options={[
                        { value: 'important', label: 'Important' },
                        { value: 'archived', label: 'Archived' },
                        { value: 'favorite', label: 'Favorite' }
                    ]}
                />
                <input
                    type="text"
                    placeholder="Filename..."
                    className="px-3 py-2 border rounded-md w-48"
                />
            </div>
            </div>
        </header>
        <div className="max-w-[300px] w-full space-y-6 px-4">
          <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
            <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
              What&apos;s next?
            </p>
            <ul>
              {/* {resources.map(({ href, text, icon }) => (
                <li key={href}>
                  <a
                    className="group flex items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {icon}
                    {text}
                  </a>
                </li>
              ))} */}
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
}

// function SearchBar({extensions: Extension}) {
//     const extOptions: never[] = []
//     const groupOptions: never[] = []

//     extensions.forEach((ext) => {

//     })
// //options={extOptions}
//     return (
//         <div>
//             <form>
//                 <DropDown id="ext" label="Extension"  /> 

//                 <input type="text" placeholder="Filename..." id="filename" />
//             </form>
//         </div>
//     );
// }

// // {value: string, label: string}[]
// function DropDown(id: string, label: string, optionList: Option){
//     //const [selectedValue, setSelectedValue] = useState(null);

//     return (
//         <div>
//             <span>{label}</span>
//             <Select
//                 option={optionList} id={id}
//             />
//         </div>
//     );
// }

// const Extensions = [
//     {value: "gif", label: "GIF", type: "images"},
//     {value: "jpg", label: "JPG", type: "images"},
//     {value: "png", label: "PNG",type: "images"},
//     {value: "pdf", label: "PDF", type: "documents"},
// ]