import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card"
import Link from 'next/link';

export type ItemProps = {
    link: string;
    title: string;
    description: string;
    dateTime?: Date;
};

type ListPropCard = {
    section: string;
    titleLink: string;
    titleText: string;
    list: ItemProps[];
}

export const Item = ({ link, title, description, dateTime}: ItemProps): JSX.Element => {
    return (
        <Card>
            <Link href={link}>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{dateTime?.toLocaleDateString('en-US')}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>{description}</p>
                </CardContent>
            </Link>
        </Card>
    );
};

export const ListCard = ( { section, titleLink, titleText, list } : ListPropCard): JSX.Element => {
    return (
        <section id={section}>
            <h3 className="text-lg font-bold mb-4">
                <a href={titleLink} className="mt-10">
                    {titleText}
                </a>
            </h3>
            <div className="grid grid-cols-2 gap-x-14 gap-y-8">
                {list.map((item) => (
                    <Item
                        key={item.link}
                        title={item.title}
                        description={item.description}
                        link={item.link}
                        dateTime={item.dateTime}
                    />
                ))}
            </div>

            <p className="italic underline mt-10"><a href={titleLink} > Ver mais {'->'} </a></p>
        </section>
    );
};