 <template>
   <div v-if="showBackStatus" @click="backTop">
     <svg viewBox="0 0 32 32" class="return_top" width="3em" height="3em"><g fill-rule="evenodd"><circle cx="16" cy="16" r="15" stroke="#999" stroke-width="0.6" fill="none"></circle> <line x1="16" y1="10" x2="16" y2="21" style="stroke: rgb(153, 153, 153); stroke-width: 0.8;"></line> <line x1="10" y1="10" x2="22" y2="10" style="stroke: rgb(153, 153, 153); stroke-width: 0.8;"></line> <path d="M9.5 18 L16 10 L22.5 18" style="stroke: rgb(153, 153, 153); stroke-width: 0.8; fill: none;"></path> <text x="10" y="27" style="font-size: 6px; fill: rgb(153, 153, 153); font-weight: 700;">顶部</text></g></svg>
   </div>
</template>

<script>
    import {showBack,animate} from 'src/config/mUtils'
    export default {
        data(){
            return{
              showBackStatus: false, //显示返回顶部按钮
            }
        },
        mounted(){
          this.initData();
        },
        methods: {
          async initData(){
            //开始监听scrollTop的值，达到一定程度后显示返回顶部按钮
            showBack(status => {
              this.showBackStatus = status;
            });
          },
          //返回顶部
          backTop(){
            animate(document.body, {scrollTop: '0'}, 400,'ease-out');
          }
        }
    }
</script>

<style lang="scss" scoped>
  .return_top{
    position: fixed;
    bottom: 3rem;
    right: 1rem;
  }
</style>
