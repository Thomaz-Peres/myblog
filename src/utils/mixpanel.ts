import mixpanel, { Dict } from 'mixpanel-browser'
mixpanel.init('26c21819e483012dfd4a1bae422bfc7d')

const mixPanel = {
    identify: (id: string) => {
        mixpanel.identify(id)
    },
    reset: () => {
        mixpanel.reset()
    },
    alias: (id: string) => {
        mixpanel.alias(id)
    },
    track: (name: string, props?: Dict) => {
        mixpanel.track(name, props)
    },
    track_pageview: (dictionary?: Dict) => {
        mixpanel.track_pageview(dictionary)
    },
    people: {
        set: (props: Dict) => {
            mixpanel.people.set(props)
        },
    },
    register: (props: Dict) => {
        mixpanel.register(props)
    },
};

export default mixPanel;
