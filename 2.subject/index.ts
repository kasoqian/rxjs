import { Subject } from "rxjs";

// 建立一个可以被观察的异步时间(串流)发生
const dataS = new Subject();

// 订阅观察的函数
dataS.subscribe(value => {
  console.log("被观察到了");
  console.log("value:", value);
});

// next代表有一个新的异步事件(串流)发生
dataS.next(1);
dataS.next(3);
dataS.next(5);
dataS.next(7);
