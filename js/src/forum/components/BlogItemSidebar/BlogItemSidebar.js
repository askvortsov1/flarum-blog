import Component from 'flarum/Component';
import ItemList from 'flarum/utils/ItemList';
import listItems from 'flarum/helpers/listItems';
import BlogAuthor from './BlogAuthor';
import BlogCategories from '../BlogCategories';

export default class BlogItemSidebar extends Component {
  view() {
    return (
      <div className={"FlarumBlog-Article-Sidebar"}>
        <ul>
          {listItems(this.items().toArray())}
        </ul>
      </div>
    )
  }

  items() {
    const itemlist = new ItemList();

    itemlist.add("author", BlogAuthor.component(this.props), 0);

    itemlist.add("categories", BlogCategories.component(this.props), 0);

    return itemlist;
  }
}