function title_spanning() {
    const metas = document.getElementsByTagName('meta');

    for (let i = 0; i < metas.length; i++) {
        if (metas[i].getAttribute('name') === "titles") {
            print(meta[i].getAttribute('content'));
            return metas[i].getAttribute('content');
        }
    }


}