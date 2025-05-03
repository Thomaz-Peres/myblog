import {
    Card,
    CardDate,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card"
import Link from 'next/link';
import { FaCalendar } from "react-icons/fa6";

export type ItemProps = {
    link: string;
    title: string;
    dateTime: Date;
    tags: string
};

type ListPropCard = {
    section: string;
    titleLink: string;
    titleText: string;
    list: ItemProps[];
    maxItems: number;
}

export const Item = ({ link, title, dateTime, tags }: ItemProps): JSX.Element => {
    return (
        <Card>
            <CardHeader>
                <Link href={link}>
                    <CardTitle className="tracking-wide">
                        {title}
                    </CardTitle>
                </Link>
                <CardDate>
                    <FaCalendar className="text-muted-foreground mr-3" />
                    {dateTime?.toLocaleDateString('en-US')}
                </CardDate>
            </CardHeader>
            <CardFooter>
                {tags.split(",").map((str) =>
                    <Link key={str} href={"tags/" + str} className="mr-2 py-0.5 px-2 text-[0.80rem] rounded-xl border bg-card">
                        {str}
                    </Link>
                )}
            </CardFooter>
        </Card>
    );
};

export const ListCards = ({ section, titleLink, titleText, list, maxItems }: ListPropCard): JSX.Element => {
    var sortedItems = list.slice()
        .sort((a, b) => b.dateTime.getTime() - a.dateTime.getTime())
        .slice(0, maxItems);

    return (
        <section id={section}>
            <h3 className="mt-5 text-lg font-bold mb-4">
                <a href={titleLink} className="mt-10 ">
                    {titleText}
                </a>
            </h3>
            <div className="grid gap-x-14 gap-y-8">
                {sortedItems.map((item) => (
                    <Item
                        key={item.link}
                        title={item.title}
                        link={item.link}
                        dateTime={item.dateTime}
                        tags={item.tags}
                    />
                ))}
            </div>
        </section>
    );
};
