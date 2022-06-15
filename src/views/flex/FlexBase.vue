<template>
  <div class="flexBase">
    <h1>设置为Flex布局后，子元素的float, clear, vertical-align都将失效</h1>
    <section>
      <h2>设置为flex之前</h2>
      <div>
        <div class="float">float-left</div>
        <div class="unclear">no-clear-both</div>
        <div class="clear">clear-both</div>
        <div class="bottom" style="">vertical-align_bottom</div>
        <div class="normal">normal</div>
      </div>
    </section>
    <section>
      <h2>设置为flex之后</h2>
      <div class="flex">
        <div class="float">float-left</div>
        <div class="unclear">no-clear-both</div>
        <div class="clear">clear-both</div>
        <div class="bottom" style="">vertical-align_bottom</div>
        <div class="normal">normal</div>
      </div>
    </section>

    <article>
      <header>
        <h1>基本概念</h1>
      </header>
      <p>
        采用Flex布局的元素，成为flex容器，简称‘容器’。它的所有子元素自动成为容器成员，
        成为flex项目（flex item）,简称‘项目’。
      </p>
    </article>

    <article>
      <header>
        <h1>容器属性</h1>
      </header>
      <section>
        <p>flex-direction: row | row-reverse | column | column-reverse</p>
        <section>
          <p>flex-direction: row;</p>
          <div class="flex flex-dir row">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
          </div>
        </section>
        <section>
          <p>flex-direction: row-reverse;</p>
          <div class="flex flex-dir rowr">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
          </div>
        </section>
        <section>
          <p>flex-direction: column;</p>
          <div class="flex flex-dir column">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
          </div>
        </section>
        <section>
          <p>flex-direction: columnr;</p>
          <div class="flex flex-dir columnr">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
          </div>
        </section>
      </section>

      <section>
        <p>flex-wrap: nowrap(默认值) |wrap | wrap-reverse</p>
        <section>
          <p>flex-wrap: wrap;</p>
          <div
            class="flex flex-wrap wrap"
            style="width: 500px; border: 1px solid"
          >
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
            <div class="item">4</div>
            <div class="item">5</div>
            <div class="item">6</div>
            <div class="item">7</div>
          </div>
        </section>
        <section>
          <p>flex-wrap: nowrap;默认值，会压缩项目宽度</p>
          <div
            class="flex flex-wrap nowrap"
            style="width: 500px; border: 1px solid"
          >
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
            <div class="item">4</div>
            <div class="item">5</div>
            <div class="item">6</div>
            <div class="item">7</div>
          </div>
        </section>
        <section>
          <p>flex-wrap: wrap-reverse;</p>
          <div
            class="flex flex-wrap wrapr"
            style="width: 500px; border: 1px solid"
          >
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
            <div class="item">4</div>
            <div class="item">5</div>
            <div class="item">6</div>
            <div class="item">7</div>
          </div>
        </section>
      </section>

      <section>
        <p>
          flex-flow: &lt;flex-direction&gt;|| &lt;flex-wrap&gt;
          四flex-direction和flex-wrap的简写形式，默认值为 row wrap
        </p>
      </section>

      <section>
        <p>
          justify-content: flex-start | flex-end | center | space-between
          space-around
        </p>
        <section>
          <p>justify-content: flex-start;默认值</p>
          <div class="flex just start" style="width: 500px; border: 1px solid">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
          </div>
        </section>
        <section>
          <p>justify-content: end;</p>
          <div class="flex just end" style="width: 500px; border: 1px solid">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
          </div>
        </section>
        <section>
          <p>justify-content:center;</p>
          <div class="flex just center" style="width: 500px; border: 1px solid">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
          </div>
        </section>
        <section>
          <p>justify-content:space-between;</p>
          <div
            class="flex just between"
            style="width: 500px; border: 1px solid"
          >
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
          </div>
        </section>
        <section>
          <p>justify-content:space-around;</p>
          <div class="flex just around" style="width: 500px; border: 1px solid">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
          </div>
        </section>
      </section>

      <section>
        <h2>
          align-item: flex-start | flex-end | center | baseline | stretch
          定义项目在交叉轴上如何对齐
        </h2>
        <section>
          <p>align-item: flex-start;起点对齐</p>
          <div class="flex align start" style="width: 500px; border: 1px solid">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
          </div>
        </section>
        <section>
          <p>align-item: flex-start;终点对齐</p>
          <div class="flex align end" style="width: 500px; border: 1px solid">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
          </div>
        </section>
        <section>
          <p>align-item: center;项目交叉轴的中点对齐</p>
          <div
            class="flex align center"
            style="width: 500px; border: 1px solid"
          >
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
          </div>
        </section>
        <section>
          <p>align-item: baseline;项目的第一行文字的基线对齐</p>
          <div class="flex align base" style="width: 500px; border: 1px solid">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
          </div>
        </section>
        <section>
          <p>
            align-item:
            stretch;默认值,如果项目未设置高度，或为auto，将沾满整个容器的高度
          </p>
          <div
            class="flex align stretch"
            style="width: 500px; border: 1px solid"
          >
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
          </div>
        </section>
      </section>

      <section>
        <h2>项目属性order: &lt;integer&gt; 定义项目的排列顺序</h2>
        <section>
          <p>align-item: flex-start;起点对齐</p>
          <div class="flex" style="width: 500px; border: 1px solid">
            <div class="item" style="order: 1">order=1, 实际顺序1</div>
            <div class="item" style="order: 3">order=3, 实际顺序2</div>
            <div class="item" style="order: 2">order=2, 实际顺序3</div>
          </div>
        </section>
      </section>

      <section>
        <h2>
          项目属性flex-grow: &lt;number&gt; default
          0（即使存在剩余空间，也不放大）
          如果所有的项目的flex-grow都为1，他们将等分剩余空间，如果一个项目的flex-grow为2，其他项目都为1，
          则前者占据的剩余空间将比其他项目多一倍。
        </h2>
        <section>
          <p>flex-grow: 0; 不放大</p>
          <div class="flex" style="width: 500px; border: 1px solid">
            <div class="item" style="flex-grow: 0">1</div>
            <div class="item" style="flex-grow: 0">2</div>
            <div class="item" style="flex-grow: 0">3</div>
          </div>
        </section>
        <section>
          <p>flex-grow: 1; 等分放大</p>
          <div class="flex" style="width: 500px; border: 1px solid">
            <div class="item" style="flex-grow: 1">1</div>
            <div class="item" style="flex-grow: 1">2</div>
            <div class="item" style="flex-grow: 1">3</div>
          </div>
        </section>
        <section>
          <p>flex-grow: 1:1:2; 等分放大</p>
          <div class="flex" style="width: 500px; border: 1px solid">
            <div class="item" style="flex-grow: 1">1</div>
            <div class="item" style="flex-grow: 1">2</div>
            <div class="item" style="flex-grow: 2">3</div>
          </div>
        </section>
      </section>

      <section>
        <h2>
          项目属性flex-shrink: &lt;number&gt; default 1（空间不足，项目将缩小）
          如果所有的项目的flex-shrink都为1，他们将等比缩小，如果一个项目的flex-shrink为0，其他项目都为1，
          则前者不会缩小。
        </h2>
        <section>
          <p>flex-shrink: 1;等比缩小</p>
          <div class="flex" style="width: 500px; border: 1px solid">
            <div class="item" style="flex-shrink: 1">1</div>
            <div class="item" style="flex-shrink: 1">1</div>
            <div class="item" style="flex-shrink: 1">1</div>
            <div class="item" style="flex-shrink: 1">1</div>
            <div class="item" style="flex-shrink: 1">1</div>
            <div class="item" style="flex-shrink: 1">1</div>
            <div class="item" style="flex-shrink: 1">1</div>
          </div>
        </section>
        <section>
          <p>flex-shrink: 0; 不缩小</p>
          <div class="flex" style="width: 500px; border: 1px solid;">
            <div class="item" style="flex-shrink: 0">1</div>
            <div class="item" style="flex-shrink: 0">1</div>
            <div class="item" style="flex-shrink: 0">1</div>
            <div class="item" style="flex-shrink: 0">1</div>
            <div class="item" style="flex-shrink: 0">1</div>
            <div class="item" style="flex-shrink: 0">1</div>
            <div class="item" style="flex-shrink: 0">1</div>
            <div class="item" style="flex-shrink: 0">1</div>
          </div>
        </section>
        <section>
          <p>flex-shrink: 0:1</p>
          <div class="flex" style="width: 500px; border: 1px solid;">
            <div class="item" style="flex-shrink: 0">flex-shrink=0 未缩放</div>
            <div class="item" style="flex-shrink: 0">flex-shrink=0 未缩放</div>
            <div class="item" style="flex-shrink: 1">flex-shrink=1缩小</div>
            <div class="item" style="flex-shrink: 1">flex-shrink=1缩小</div>
            <div class="item" style="flex-shrink: 1">flex-shrink=1缩小</div>
            <div class="item" style="flex-shrink: 3">flex-shrink=2,与flex-shrink=1缩小效果一致</div>
          </div>
        </section>
      </section>


      <section>
        <h2>
          项目属性flex-basis: &lt;length&gt; auto
          定义了在分配多余的空间之前，项目占据的主轴空间。可以看作是
          width（flex-direction=row）或者height(flex-direction=column)
          但是权重更高。
        </h2>
        <section>
          <p>flex-basis: 1;等比缩小</p>
          <div class="flex" style="width: 1000px; height:200px;border: 1px solid">
            <div class="item" style="flex-basis: unset">flex-basis: unset</div>
            <div class="item" style="flex-basis: auto">flex-basis: auto</div>
            <div class="item" style="flex-basis: 100px">flex-basis: 100px</div>
            <div class="item" style="flex-basis: 200px">flex-basis: 200px</div>
            <div class="item" style="flex-basis: 300px">flex-basis: 300px</div>
          </div>
        </section>
      </section>

      <section>
        <h2>
          项目属性flex: none | [&lt;flex-grow&gt;,&lt;flex-shrink&gt;,&lt;flex-basis&gt;]
          flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选
          该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。
          建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值
        </h2>
        <section>
          <div class="flex" style="width: 400px;border: 1px solid">
            <div class="item" style="flex: auto">flex: auto</div>
            <div class="item" style="flex:0 1 auto">flex:0 1 auto</div>
            <div class="item" style="flex: none">flex: none</div>
            <div class="item" style="flex-basis: 200px">flex-basis: 200px</div>
            <div class="item" style="flex-basis: 300px">flex-basis: 300px</div>
          </div>
        </section>

        <section>
          <div class="flex" style="width: 1000px;border: 1px solid">
            <div class="item" style="flex: auto">flex: auto</div>
            <div class="item" style="flex:0 1 auto">flex:0 1 auto</div>
            <div class="item" style="flex: none">flex: none</div>
            <div class="item" style="flex-basis: 200px">flex-basis: 200px</div>
            <div class="item" style="flex-basis: 300px">flex-basis: 300px</div>
          </div>
        </section>
      </section>

      <section>
        <h2>
          项目属性align-self: auto | flex-start | flex-end | center | baseline | stretch
          除了auto之外，其他值的都与align-items完全一致
        </h2>
        <section>
          <div class="flex" style="width: 400px;height: 200px;border: 1px solid">
            <div class="item" style="align-self: auto">align-self: auto</div>
            <div class="item" style="align-self: flex-start">align-self: flex-start</div>
            <div class="item" style="align-self: flex-end">align-self: flex-end</div>
            <div class="item" style="align-self: center">align-self: center</div>
            <div class="item" style="align-self: baseline;font-size: 50px;">align-self: baseline</div>
            <div class="item" style="align-self: stretch">align-self: stretch</div>
          </div>
        </section>

        <section>
          <div class="flex" style="width: 1000px;border: 1px solid">
            <div class="item" style="flex: auto">flex: auto</div>
            <div class="item" style="flex:0 1 auto">flex:0 1 auto</div>
            <div class="item" style="flex: none">flex: none</div>
            <div class="item" style="flex-basis: 200px">flex-basis: 200px</div>
            <div class="item" style="flex-basis: 300px">flex-basis: 300px</div>
          </div>
        </section>
      </section>


    </article>
  </div>
</template>
<script>
export default {
  name: "FlexBase",
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.flex {
  display: flex;
  flex-grow: 0;
  flex-basis: 1;
  flex-shrink: 1;
}
.flex-dir {
  &.row {
    flex-direction: row;
  }
  &.rowr {
    flex-direction: row-reverse;
  }
  &.columnr {
    flex-direction: column;
  }
  &.columnr {
    flex-direction: column-reverse;
  }
}
.flex-wrap {
  &.wrap {
    flex-wrap: wrap;
  }
  &.nowrap {
    flex-wrap: nowrap;
  }
  &.wrapr {
    flex-wrap: wrap-reverse;
  }
}
.just {
  .item {
    margin: 0;
  }
  &.start {
    justify-content: flex-start;
  }
  &.end {
    justify-content: flex-end;
  }
  &.center {
    justify-content: center;
  }
  &.between {
    justify-content: space-between;
  }
  &.around {
    justify-content: space-around;
  }
}
.align {
  .item:first-child {
    height: 50px;
    font-size: 50px;
  }
  .item:nth-child(2) {
    height: 100px;
    font-size: 30px;
  }
  .item:nth-child(3) {
    height: 150px;
  }
  &.start {
    align-items: flex-start;
  }
  &.end {
    align-items: flex-end;
  }
  &.center {
    align-items: center;
  }
  &.base {
    align-items: baseline;
  }
  &.stretch {
    align-items: stretch;
    .item {
      height: auto;
    }
  }
}
.item {
  width: 100px;
  height: 100px;
  background-color: grey;
  margin: 10px;
}
.float {
  float: right;
  height: 100px;
  background-color: red;
  width: 500px;
}
.unclear {
  height: 50px;
  background-color: green;
  width: 100px;
}
.clear {
  clear: both;
  height: 50px;
  background-color: blue;
  width: 100px;
}
.bottom {
  vertical-align: bottom;
  background-color: aquamarine;
  height: 50px;
  width: 100px;
}
.normal {
  height: 20px;
  background-color: blueviolet;
  width: 100px;
}
</style>