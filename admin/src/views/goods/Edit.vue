<script type="text/javascript">
	import Create from './Create';
	export default {
		mixins: [Create],
		data() {
			return {
				pageTitle: '编辑商品',
				url: 'admin/goods/update'
			}
		},
		methods: {
			getData() {
				let {parms} = this.$route;
				this.$http
						.get('/admin/goods/detail', {parms})
						.then(({data}) => {
							if(data.errno === 0) {
								this.data = data.data;
							} else {
								this.data = {};
								this.$alert(data.msg);
							}
						})
			}
		}
		created() {
			this.getData();
		},
		watch: {
			$route(){
				this.getData()
			}
		}

	}
</script>