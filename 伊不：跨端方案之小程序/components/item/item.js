Component({
  props: {
    checked: false,
    id: 0,
    text: '',
  },
  methods: {
    handleLongTap() {
      this.props.onLongTap(this.props.id);
    },
  },
});
