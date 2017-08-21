 <template>
   <div>
     <div class="sb_nav">
       <h3 class="title">
         <a href="javascript:void (0)" class="moresidebar" @click="openSidebar"><svg t="1502413598936" class="icon" style="width: 1em; height: 1em; vertical-align: middle; fill: currentcolor; overflow: hidden; font-size: 20px;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3316"><path d="M895.723963 328.541665c-0.539282 2.438539-1.013073 4.89345-1.629103 7.312546-6.241145 24.51637-27.722388 41.161469-53.334719 41.175795-67.276243 0.038886-134.553509 0.013303-201.829751 0.013303-91.305519 0-182.610014 0-273.91451 0-29.218462 0-52.856835-21.554922-55.126528-50.2648-2.257413-28.553313 17.996886-53.595662 46.886867-57.990762 0.5137-0.077771 0.9967-0.35918 1.49505-0.545422 162.983002 0 325.966003 0 488.951051 0 0.604774 0.197498 1.197268 0.471744 1.817392 0.583285 23.014156 4.110621 37.930891 17.367553 44.763506 39.697117 0.822738 2.685155 1.288343 5.478781 1.919722 8.222265C895.723963 320.676533 895.723963 324.610122 895.723963 328.541665z" p-id="3317" fill="#707070"></path><path d="M895.723963 548.110429c-0.539282 2.438539-1.014096 4.894474-1.630127 7.313569-6.240121 24.51637-27.723412 41.160445-53.338812 41.174772-68.156286 0.037862-136.311549 0.013303-204.467835 0.013303-90.546226 0-181.093475 0.001023-271.640724-0.001023-28.668946 0-51.78748-20.98801-54.706973-49.65798-2.787486-27.376511 16.522302-52.809763 44.303019-58.196447 3.300162-0.639566 6.722098-0.907673 10.087753-0.907673 158.266583-0.044002 316.532143 0.100284 474.79668-0.155543 31.063483-0.050142 53.283554 22.514783 56.100716 47.430242 0.047072 0.409322 0.324388 0.793062 0.494257 1.189082C895.723963 540.246321 895.723963 544.177863 895.723963 548.110429z" p-id="3318" fill="#707070"></path><path d="M358.271268 814.871005c-2.430352-0.536212-4.877077-1.00898-7.286963-1.620917-25.561166-6.484691-42.663682-29.891797-41.135886-56.264445 1.493004-25.77606 21.376866-46.954405 47.346331-50.387597 2.158153-0.284479 4.344958-0.505513 6.517437-0.505513 158.801772-0.023536 317.603545-0.028653 476.404294-0.014326 26.171056 0.001023 47.694255 16.461927 53.982472 41.195238 0.615007 2.413979 1.086751 4.864798 1.62501 7.299243 0 3.932566 0 7.865131 0 11.797697-0.206708 0.724501-0.497327 1.436722-0.60989 2.176572-3.282766 21.837354-19.49296 39.60195-40.930201 44.804439-2.307555 0.559748-4.640694 1.016143-6.961552 1.51961C684.237271 814.871005 521.255293 814.871005 358.271268 814.871005z" p-id="3319" fill="#707070"></path><path d="M188.515003 268.242324c1.795902 0.400113 3.589758 0.817622 5.389754 1.198292 28.290323 5.990434 46.644343 32.640398 42.453904 61.650105-3.982708 27.567869-29.535687 47.873334-57.690934 45.845141-24.90318-1.794879-45.560662-20.597107-49.714262-45.233204-0.179079-1.064238-0.48914-2.108011-0.737804-3.160993 0-3.932566 0-7.865131 0-11.797697 0.216941-0.835018 0.502443-1.657756 0.64059-2.505054 3.701299-22.731724 20.521383-40.260959 43.12724-44.934398 1.583055-0.327458 3.155876-0.708128 4.733814-1.063215C180.649871 268.242324 184.582437 268.242324 188.515003 268.242324z" p-id="3320" fill="#707070"></path><path d="M128.215662 535.657816c0.306992-1.3743 0.644683-2.744507 0.915859-4.126994 5.478781-27.969005 31.616068-47.511083 59.007929-44.10859 29.605272 3.677762 50.344618 28.073382 48.806589 57.410548-1.416256 27.02347-23.676236 49.405223-50.763151 51.039443-27.959795 1.687432-52.603055-17.805528-57.229422-45.255717-0.179079-1.064238-0.48914-2.108011-0.737804-3.160993C128.215662 543.523971 128.215662 539.590382 128.215662 535.657816z" p-id="3321" fill="#707070"></path><path d="M128.215662 751.948931c0.306992-1.3743 0.644683-2.744507 0.915859-4.125971 5.477758-27.969005 31.616068-47.512107 59.007929-44.10859 29.605272 3.676739 50.343595 28.072359 48.806589 57.409524-1.416256 27.024493-23.676236 49.405223-50.763151 51.040467-27.958772 1.687432-52.603055-17.806551-57.229422-45.25674-0.179079-1.064238-0.48914-2.108011-0.737804-3.15997C128.215662 759.815085 128.215662 755.88252 128.215662 751.948931z" p-id="3322" fill="#707070"></path></svg><span>更多分类</span></a>
         <label>{{menuTitle}}</label>
       </h3>
     </div>
     <div class="sidebar" :class='{active : openSideIf}'>
       <dl class="list-none" @click="closeSidebar" v-for="(item,index) in menuCont" :key="index">
         <dt :class="{active : item.id == ($route.query.id ? $route.query.id : menuCont[0].id)}"><router-link :to="{path: item.pathUrl, query:{swiperSlide:item.Slide,id:item.id}}" :title="item.title" class="zm"><span>{{item.title}}</span></router-link></dt>
         <dd class="sub" v-if="item.sub.length">
           <h4 :class="{active : ite.senId == $route.query.senId}" v-for="(ite,index) in item.sub" :key="index"><router-link :to="{path: item.pathUrl, query:{swiperSlide:item.Slide,id:item.id,senId:ite.senId}}" :title="ite.title"><span>{{ite.title}}</span></router-link></h4>
         </dd>
       </dl>
     </div>
   </div>
</template>

<script>
    import {menu} from '../../service/getData'
    export default {
        data(){
            return{
              openSideIf : false, //是否显示更多分类
              menuTitle : '', //更多分类标题
              menuCont:[]  //更多分类内容
            }
        },
        created(){
          this.contId = parseInt(this.$route.query.id);
        },
        mounted(){
            this.initData(this.contId);
        },
        props:['alertMupType'],
        methods: {
          //初始化时获取基本数据
          async initData (contId){
            menu().then( res => {
              this.menuCont=res.moreMeu[this.alertMupType];
              this.getMenuTitle(contId);
            });
          },
          //获取标题数据
          getMenuTitle (contId){
            contId ? contId : (contId = this.menuCont[0].id);
            this.menuCont.forEach((item,index) => {
              if(item.id==contId){
                this.menuTitle = item.title;
              }
            });
          },
           //切换弹出层
           openSidebar(){
             this.openSideIf = !this.openSideIf;
           },
           //关闭弹出层
          closeSidebar(){
            this.openSideIf = false;
          }
        },
        watch:{
          "$route" (value){
            this.getMenuTitle(value.query.id);
          }
        }
    }
</script>

<style lang="scss" scoped>
  .sidebar{
    position: fixed;
    top: 0;
    left: 100%;
    width: 100%;
    background-color: rgba(51, 51, 51, 0.9);
    height: 100%;
    z-index: 9999;
    -webkit-transition: left linear .2s;
    transition: left linear .2s;
    dt{
      border-bottom: 1px solid #7b7b7b;
      background: url(../../assets/images/navmore.png) no-repeat 95% center;
      background-size: 12px;
      a{
        padding: 12px 10px;
        display: block;
        color: #fff;
        font-size: 14px;
        span{
          color: #fff;
          font-size: 14px;
        }
      }
    }
    dt.active{
      background-color: #395f5d;
    }
    dd{
      border-bottom: 1px solid #7b7b7b;
      overflow: auto;
      padding: 3px 0;
      h4{
        font-weight: normal;
        float: left;
        width: 33%;
        padding: 6px 0;
        text-align: center;
        overflow: hidden;
        word-wrap: break-word;
        a{
          display: block;
          color: #efefef;
          span{
            font-size: 14px;
            color: #efefef;
          }
        }
      }
      h4.active{
        background-color: #73867b;
      }
    }
  }
  .sidebar.active{
    left: 0;
    -webkit-transition: left linear .3s;
    transition: left linear .3s;
  }
  .sb_nav{
    width: 100%;
    box-sizing: border-box;
    padding: 8px 5px;
    background-color: #ededed;
    label{
      font-size: 14px;
      line-height: 20px;
    }
    .moresidebar{
      float: right;
      font-size: 12px;
      padding: 0 10px;
      line-height: 24px;
      span{
        vertical-align: middle;
        color: #333;
      }
    }
  }
</style>
