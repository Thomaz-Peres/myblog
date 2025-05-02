'use client'

import * as React from "react";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "./ui/breadcrumb";
import { usePathname } from "next/navigation";

function BreadcrumbComponent() {
    let paths = usePathname();
    var pathNames = paths.split('/');
    return (
        <>
            <div>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        {/* // TODO: Fazer depois */}
                        {/* <BreadcrumbSeparator /> */}
                        {/* <BreadcrumbItem>
                            {pathNames.map((path) => {
                                console.log(path);
                                path = path.replace(path[0], path[0]);
                                return (<BreadcrumbPage key={path}>{path}</BreadcrumbPage>)
                            })
                            }
                        </BreadcrumbItem> */}
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
        </>
    );
};

export { BreadcrumbComponent };