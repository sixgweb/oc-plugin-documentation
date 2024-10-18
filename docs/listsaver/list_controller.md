# List Controller

### list_config.yaml
By default, ListSaver is shown on the **index** and **export** actions of the [ListController](https://docs.octobercms.com/3.x/extend/lists/list-controller.html). You can override this value by adding the listSaver to your [config_list.yaml](https://docs.octobercms.com/3.x/extend/lists/list-controller.html#configuring-the-list-behavior).

``` yaml
# config_list.yaml
title: Blog Posts
list: ~/plugins/acme/blog/models/post/columns.yaml
modelClass: Acme\Blog\Models\Post
recordUrl: acme/blog/posts/update/:id

listSaver:
    actions:
        - index
        - export
        - customAction

```