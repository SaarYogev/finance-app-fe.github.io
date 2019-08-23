(function (_, Kotlin, $module$kotlin_extensions, $module$kotlin_react_dom, $module$_material_ui_core_TextField, $module$_material_ui_core_Button, $module$ktor_ktor_client_core, $module$kotlinx_coroutines_core, $module$kotlin_react) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var requireAll = $module$kotlin_extensions.kotlinext.js.requireAll_spd3bs$;
  var Unit = Kotlin.kotlin.Unit;
  var render = $module$kotlin_react_dom.react.dom.render_2955dm$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var js = $module$ktor_ktor_client_core.io.ktor.client.engine.js;
  var HttpClient = $module$ktor_ktor_client_core.io.ktor.client.HttpClient_744i18$;
  var url = $module$ktor_ktor_client_core.io.ktor.client.request.url_g8iu3v$;
  var PrimitiveClasses$stringClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.stringClass;
  var Exception = Kotlin.kotlin.Exception;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var RComponent_init = $module$kotlin_react.react.RComponent_init_8bz2yq$;
  var Job = $module$kotlinx_coroutines_core.kotlinx.coroutines.Job_5dx9e$;
  var RComponent = $module$kotlin_react.react.RComponent;
  var CoroutineScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineScope;
  var getKClass = Kotlin.getKClass;
  var throwCCE = Kotlin.throwCCE;
  var Any = Object;
  var attributesMapOf = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var H1_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H1;
  var RDOMBuilder_init = $module$kotlin_react_dom.react.dom.RDOMBuilder;
  var DIV_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var utils = $module$ktor_ktor_client_core.io.ktor.client.utils;
  var url_0 = $module$ktor_ktor_client_core.io.ktor.client.request.url_3rzbk2$;
  var HttpMethod = $module$ktor_ktor_client_core.$$importsForInline$$['ktor-ktor-http'].io.ktor.http.HttpMethod;
  var HttpRequestBuilder_init = $module$ktor_ktor_client_core.io.ktor.client.request.HttpRequestBuilder;
  var call = $module$ktor_ktor_client_core.io.ktor.client.call.call_30bfl5$;
  var call_0 = $module$ktor_ktor_client_core.io.ktor.client.call;
  var TypeInfo_init = $module$ktor_ktor_client_core.io.ktor.client.call.TypeInfo;
  var RComponent_init_0 = $module$kotlin_react.react.RComponent_init_lqgejo$;
  var H2_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H2;
  var CODE_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.CODE;
  var P_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.P;
  NewExpense.prototype = Object.create(RComponent.prototype);
  NewExpense.prototype.constructor = NewExpense;
  App.prototype = Object.create(RComponent.prototype);
  App.prototype.constructor = App;
  function main$lambda($receiver) {
    app($receiver);
    return Unit;
  }
  function main(args) {
    requireAll(require.context('kotlin', true, /\.css$/));
    render(document.getElementById('root'), void 0, main$lambda);
  }
  function Expense(amount, type, paymentMethod, paymentDate) {
    this.amount = amount;
    this.type = type;
    this.paymentMethod = paymentMethod;
    this.paymentDate = paymentDate;
  }
  Expense.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Expense',
    interfaces: []
  };
  Expense.prototype.component1 = function () {
    return this.amount;
  };
  Expense.prototype.component2 = function () {
    return this.type;
  };
  Expense.prototype.component3 = function () {
    return this.paymentMethod;
  };
  Expense.prototype.component4 = function () {
    return this.paymentDate;
  };
  Expense.prototype.copy_c760gc$ = function (amount, type, paymentMethod, paymentDate) {
    return new Expense(amount === void 0 ? this.amount : amount, type === void 0 ? this.type : type, paymentMethod === void 0 ? this.paymentMethod : paymentMethod, paymentDate === void 0 ? this.paymentDate : paymentDate);
  };
  Expense.prototype.toString = function () {
    return 'Expense(amount=' + Kotlin.toString(this.amount) + (', type=' + Kotlin.toString(this.type)) + (', paymentMethod=' + Kotlin.toString(this.paymentMethod)) + (', paymentDate=' + Kotlin.toString(this.paymentDate)) + ')';
  };
  Expense.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.amount) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.paymentMethod) | 0;
    result = result * 31 + Kotlin.hashCode(this.paymentDate) | 0;
    return result;
  };
  Expense.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.amount, other.amount) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.paymentMethod, other.paymentMethod) && Kotlin.equals(this.paymentDate, other.paymentDate)))));
  };
  function h1$lambda(closure$classes) {
    return function (it) {
      return new H1_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function post$lambda($receiver) {
    return Unit;
  }
  function TickerProps() {
  }
  TickerProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TickerProps',
    interfaces: []
  };
  function TickerState() {
  }
  TickerState.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TickerState',
    interfaces: []
  };
  function NewExpense(props) {
    RComponent_init(props, this);
    this.job_0 = Job();
    this.timerID = null;
  }
  Object.defineProperty(NewExpense.prototype, 'coroutineContext', {
    get: function () {
      return this.job_0;
    }
  });
  NewExpense.prototype.init_65a95q$ = function ($receiver, props) {
    $receiver.secondsElapsed = props.startFrom;
  };
  function NewExpense$render$lambda$lambda$lambda$lambda(closure$amount) {
    return function (event) {
      closure$amount.v = getInputValue(event);
      return Unit;
    };
  }
  function NewExpense$render$lambda$lambda$lambda(closure$amount) {
    return function ($receiver) {
      $receiver.label = 'Amount';
      $receiver.defaultValue = closure$amount.v;
      $receiver.onChange = NewExpense$render$lambda$lambda$lambda$lambda(closure$amount);
      return Unit;
    };
  }
  function NewExpense$render$lambda$lambda(closure$amount) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(NewExpense$render$lambda$lambda$lambda(closure$amount));
      return Unit;
    };
  }
  function NewExpense$render$lambda$lambda$lambda$lambda_0(closure$paymentType) {
    return function (event) {
      closure$paymentType.v = getInputValue(event);
      return Unit;
    };
  }
  function NewExpense$render$lambda$lambda$lambda_0(closure$paymentType) {
    return function ($receiver) {
      $receiver.label = 'Type';
      $receiver.defaultValue = closure$paymentType.v;
      $receiver.onChange = NewExpense$render$lambda$lambda$lambda$lambda_0(closure$paymentType);
      return Unit;
    };
  }
  function NewExpense$render$lambda$lambda_0(closure$paymentType) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(NewExpense$render$lambda$lambda$lambda_0(closure$paymentType));
      return Unit;
    };
  }
  function NewExpense$render$lambda$lambda$lambda$lambda_1(closure$paymentMethod) {
    return function (event) {
      closure$paymentMethod.v = getInputValue(event);
      return Unit;
    };
  }
  function NewExpense$render$lambda$lambda$lambda_1(closure$paymentMethod) {
    return function ($receiver) {
      $receiver.label = 'Payment Method';
      $receiver.defaultValue = closure$paymentMethod.v;
      $receiver.onChange = NewExpense$render$lambda$lambda$lambda$lambda_1(closure$paymentMethod);
      return Unit;
    };
  }
  function NewExpense$render$lambda$lambda_1(closure$paymentMethod) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(NewExpense$render$lambda$lambda$lambda_1(closure$paymentMethod));
      return Unit;
    };
  }
  function NewExpense$render$lambda$lambda$lambda$lambda_2(closure$date) {
    return function (event) {
      closure$date.v = getInputValue(event);
      return Unit;
    };
  }
  function NewExpense$render$lambda$lambda$lambda_2(closure$date) {
    return function ($receiver) {
      $receiver.type = 'datetime-local';
      $receiver.defaultValue = closure$date.v;
      $receiver.label = 'Date';
      $receiver.onChange = NewExpense$render$lambda$lambda$lambda$lambda_2(closure$date);
      return Unit;
    };
  }
  function NewExpense$render$lambda$lambda_2(closure$date) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(NewExpense$render$lambda$lambda$lambda_2(closure$date));
      return Unit;
    };
  }
  function NewExpense$render$lambda$lambda$lambda_3(closure$amount, closure$paymentType, closure$paymentMethod, closure$date, this$NewExpense) {
    return function () {
      this$NewExpense.saveExpenseFromForm_0(closure$amount.v, closure$paymentType.v, closure$paymentMethod.v, closure$date.v);
      return Unit;
    };
  }
  function NewExpense$render$lambda$lambda_3(closure$amount, closure$paymentType, closure$paymentMethod, closure$date, this$NewExpense) {
    return function ($receiver) {
      $receiver.disabled = false;
      $receiver.onClick = NewExpense$render$lambda$lambda$lambda_3(closure$amount, closure$paymentType, closure$paymentMethod, closure$date, this$NewExpense);
      $receiver.color = 'primary';
      return Unit;
    };
  }
  function NewExpense$render$lambda(closure$amount, closure$paymentType, closure$paymentMethod, closure$date, this$NewExpense) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(NewExpense$render$lambda$lambda_3(closure$amount, closure$paymentType, closure$paymentMethod, closure$date, this$NewExpense));
      $receiver.unaryPlus_pdl1vz$('Save');
      return Unit;
    };
  }
  NewExpense.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new RDOMBuilder_init(h1$lambda(null));
    $receiver_0.unaryPlus_pdl1vz$('New Expense');
    $receiver.child_2usv9w$($receiver_0.create());
    var amount = {v: '0'};
    var $receiver_0_0 = new RDOMBuilder_init(div$lambda(null));
    $receiver_0_0.invoke_eb8iu4$($module$_material_ui_core_TextField.default, NewExpense$render$lambda$lambda(amount));
    $receiver.child_2usv9w$($receiver_0_0.create());
    var paymentType = {v: ''};
    var $receiver_0_1 = new RDOMBuilder_init(div$lambda(null));
    $receiver_0_1.invoke_eb8iu4$($module$_material_ui_core_TextField.default, NewExpense$render$lambda$lambda_0(paymentType));
    $receiver.child_2usv9w$($receiver_0_1.create());
    var paymentMethod = {v: ''};
    var $receiver_0_2 = new RDOMBuilder_init(div$lambda(null));
    $receiver_0_2.invoke_eb8iu4$($module$_material_ui_core_TextField.default, NewExpense$render$lambda$lambda_1(paymentMethod));
    $receiver.child_2usv9w$($receiver_0_2.create());
    var date = {v: '2017-05-24T10:30'};
    var $receiver_0_3 = new RDOMBuilder_init(div$lambda(null));
    $receiver_0_3.invoke_eb8iu4$($module$_material_ui_core_TextField.default, NewExpense$render$lambda$lambda_2(date));
    $receiver.child_2usv9w$($receiver_0_3.create());
    $receiver.invoke_eb8iu4$($module$_material_ui_core_Button.default, NewExpense$render$lambda(amount, paymentType, paymentMethod, date, this));
  };
  function NewExpense$saveExpenseFromForm$lambda($receiver) {
    return Unit;
  }
  function NewExpense$saveExpenseFromForm$lambda$lambda(closure$backendUrl, closure$expenseJson) {
    return function ($receiver) {
      url($receiver, closure$backendUrl);
      $receiver.body = closure$expenseJson;
      return Unit;
    };
  }
  function Coroutine$NewExpense$saveExpenseFromForm$lambda(closure$client_0, closure$backendUrl_0, closure$expenseJson_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 5;
    this.local$closure$client = closure$client_0;
    this.local$closure$backendUrl = closure$backendUrl_0;
    this.local$closure$expenseJson = closure$expenseJson_0;
  }
  Coroutine$NewExpense$saveExpenseFromForm$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$NewExpense$saveExpenseFromForm$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$NewExpense$saveExpenseFromForm$lambda.prototype.constructor = Coroutine$NewExpense$saveExpenseFromForm$lambda;
  Coroutine$NewExpense$saveExpenseFromForm$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            println('started post');
            this.exceptionState_0 = 3;
            var $receiver_0 = this.local$closure$client;
            var block = NewExpense$saveExpenseFromForm$lambda$lambda(this.local$closure$backendUrl, this.local$closure$expenseJson);
            var host;
            var body;
            host = 'localhost';
            body = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url_0($receiver_1, 'http', host, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Post;
            $receiver_1.body = body;
            block($receiver_1);
            this.state_0 = 1;
            this.result_0 = call($receiver_0, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            var tmp$_0;
            this.state_0 = 2;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(PrimitiveClasses$stringClass, call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.result_0 = typeof (tmp$_0 = this.result_0) === 'string' ? tmp$_0 : throwCCE();
            this.result_0;
            this.exceptionState_0 = 5;
            this.state_0 = 4;
            continue;
          case 3:
            this.exceptionState_0 = 5;
            var e = this.exception_0;
            if (Kotlin.isType(e, Exception)) {
              println('oops, exception: ' + e);
            }
             else
              throw e;
            this.state_0 = 4;
            continue;
          case 4:
            return println('finished post'), Unit;
          case 5:
            throw this.exception_0;
          default:this.state_0 = 5;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 5) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function NewExpense$saveExpenseFromForm$lambda_0(closure$client_0, closure$backendUrl_0, closure$expenseJson_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$NewExpense$saveExpenseFromForm$lambda(closure$client_0, closure$backendUrl_0, closure$expenseJson_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  NewExpense.prototype.saveExpenseFromForm_0 = function (amount, type, paymentMethod, date) {
    if (amount != null && type != null && paymentMethod != null && date != null) {
      println(amount);
      println(type);
      println(paymentMethod);
      println(date);
      var expense = new Expense(toInt(amount), type, paymentMethod, new Date(date));
      var expenseJson = JSON.stringify(expense);
      println(expense);
      var corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
      var backendUrl = corsAnywhere + 'https://finance-app-be.herokuapp.com/expenseString';
      var client = HttpClient(js.Js, NewExpense$saveExpenseFromForm$lambda);
      launch(this, void 0, void 0, NewExpense$saveExpenseFromForm$lambda_0(client, backendUrl, expenseJson));
      println('finished function');
    }
     else {
      println('Fail');
    }
  };
  NewExpense.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NewExpense',
    interfaces: [CoroutineScope, RComponent]
  };
  function newExpenseForm$lambda(closure$startFrom) {
    return function ($receiver) {
      $receiver.attrs.startFrom = closure$startFrom;
      return Unit;
    };
  }
  function newExpenseForm($receiver, startFrom) {
    if (startFrom === void 0)
      startFrom = 0;
    return $receiver.child_bzgiuu$(getKClass(NewExpense), newExpenseForm$lambda(startFrom));
  }
  function getInputValue($receiver) {
    var tmp$;
    return (Kotlin.isType(tmp$ = $receiver.target, HTMLInputElement) ? tmp$ : throwCCE()).value;
  }
  function jsonAs() {
    var tmp$;
    return (tmp$ = {}) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  }
  function h2$lambda(closure$classes) {
    return function (it) {
      return new H2_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function code$lambda(closure$classes) {
    return function (it) {
      return new CODE_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda_0(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function p$lambda(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function App() {
    RComponent_init_0(this);
  }
  App.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new RDOMBuilder_init(div$lambda_0('App-header'));
    var $receiver_0_0 = new RDOMBuilder_init(h2$lambda(null));
    $receiver_0_0.unaryPlus_pdl1vz$('Welcome to React with Kotlin');
    $receiver_0.child_2usv9w$($receiver_0_0.create());
    $receiver.child_2usv9w$($receiver_0.create());
    var $receiver_0_1 = new RDOMBuilder_init(p$lambda('App-intro'));
    $receiver_0_1.unaryPlus_pdl1vz$('To get started, edit ');
    var $receiver_0_2 = new RDOMBuilder_init(code$lambda(null));
    $receiver_0_2.unaryPlus_pdl1vz$('package tictactoe\n\nimport logo.logo\nimport new_expense.newExpenseForm\nimport react.RBuilder\nimport react.RComponent\nimport react.RProps\nimport react.RState\nimport react.dom.code\nimport react.dom.div\nimport react.dom.h2\nimport react.dom.p\n\nclass App : RComponent<RProps, RState>() {\n    override fun RBuilder.render() {\n        div("App-header") {\n            logo()\n            h2 {\n                +"Welcome to React with Kotlin"\n            }\n        }\n        p("App-intro") {\n            +"To get started, edit "\n            code { +"tictactoe/App.kt" }\n            +" and save to reload."\n        }\n        div("New-expense-form") {\n            newExpenseForm()\n        }\n    }\n}\n\nfun RBuilder.tictactoe() = child(App::class) {}\n');
    $receiver_0_1.child_2usv9w$($receiver_0_2.create());
    $receiver_0_1.unaryPlus_pdl1vz$(' and save to reload.');
    $receiver.child_2usv9w$($receiver_0_1.create());
    var $receiver_0_3 = new RDOMBuilder_init(div$lambda_0('New-expense-form'));
    newExpenseForm($receiver_0_3);
    $receiver.child_2usv9w$($receiver_0_3.create());
  };
  App.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'App',
    interfaces: [RComponent]
  };
  function app$lambda($receiver) {
    return Unit;
  }
  function app($receiver) {
    return $receiver.child_bzgiuu$(getKClass(App), app$lambda);
  }
  var package$index = _.index || (_.index = {});
  package$index.main_kand9s$ = main;
  var package$new_expense = _.new_expense || (_.new_expense = {});
  package$new_expense.Expense = Expense;
  package$new_expense.TickerProps = TickerProps;
  package$new_expense.TickerState = TickerState;
  $$importsForInline$$['kotlin-react-dom'] = $module$kotlin_react_dom;
  $$importsForInline$$['ktor-ktor-client-core'] = $module$ktor_ktor_client_core;
  package$new_expense.NewExpense = NewExpense;
  package$new_expense.newExpenseForm_e0iee1$ = newExpenseForm;
  package$new_expense.getInputValue_g0pdir$ = getInputValue;
  package$new_expense.jsonAs_287e2$ = jsonAs;
  var package$tictactoe = _.tictactoe || (_.tictactoe = {});
  package$tictactoe.App = App;
  package$tictactoe.app_ss14n$ = app;
  main([]);
  Kotlin.defineModule('finance-app-fe', _);
  return _;
}(module.exports, require('kotlin'), require('kotlin-extensions'), require('kotlin-react-dom'), require('@material-ui/core/TextField'), require('@material-ui/core/Button'), require('ktor-ktor-client-core'), require('kotlinx-coroutines-core'), require('kotlin-react')));

//# sourceMappingURL=finance-app-fe.js.map
