"use client";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Check, Copy, Menu, Printer, Share2, X } from "lucide-react";

type Locale = "en" | "zh";
const url = {
  act: "https://www.legislation.gov.au/C2009A00028/latest/text",
  disconnect: "https://www.fairwork.gov.au/employment-conditions/right-to-disconnect",
  protections: "https://www.fairwork.gov.au/employment-conditions/protections-at-work",
  hours: "https://www.fairwork.gov.au/tools-and-resources/fact-sheets/minimum-workplace-entitlements/maximum-weekly-hours",
  bullying: "https://www.fairwork.gov.au/employment-conditions/bullying-in-the-workplace",
  fwc: "https://www.fwc.gov.au/issues-we-help/right-disconnect",
  eu: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32003L0088",
  us: "https://www.dol.gov/agencies/whd/fact-sheets/22-flsa-hours-worked",
  usot: "https://www.dol.gov/agencies/whd/overtime",
  repo: "https://github.com/DouglasMooooo/the-right-to-disconnect",
  source: "https://github.com/996icu/996.ICU",
};
const principles = [
  ["Employment does not eliminate fundamental dignity.","雇佣关系不会消除人的基本尊严。"],
  ["Professional responsibility has lawful and reasonable boundaries.","职业责任有合法且合理的边界。"],
  ["Disagreement is not automatically disloyalty.","意见不同，不等于不忠诚。"],
  ["Employees should be able to exercise lawful rights without prohibited retaliation.","员工应能依法行使权利，而不因法律禁止的理由遭受不利对待。"],
  ["Business continuity depends on planning, not assumed unlimited availability.","业务连续性应依靠有效规划，而非假定员工随时待命。"],
  ["Rest and personal life are legitimate human interests.","休息与私人生活是正当的人之利益。"],
  ["Management authority carries a duty of accountability.","管理权力伴随问责责任。"],
  ["Ethical leadership goes beyond legal minimums.","合乎伦理的领导，不止于守住法律底线。"],
  ["Laws differ by jurisdiction and must not be misrepresented.","法律因司法管辖区而异，不应被歪曲。"],
  ["Public-interest advocacy must be factual, responsible and open to correction.","公益倡议应以事实为本、负责任，并欢迎纠正。"],
];
const refs = [
  {type:["Primary legislation","主要立法"],rows:[["Australia. (2009). Fair Work Act 2009 (Cth), compilation C73 (latest compilation 7 July 2026; version checked 17 November 2026).",url.act]]},
  {type:["Official guidance","官方指引"],rows:[
    ["Fair Work Ombudsman. (n.d.). Right to disconnect.",url.disconnect],
    ["Fair Work Ombudsman. (n.d.). Protections at work.",url.protections],
    ["Fair Work Ombudsman. (n.d.). Maximum weekly hours fact sheet.",url.hours],
    ["Fair Work Ombudsman. (n.d.). Bullying in the workplace.",url.bullying],
    ["Fair Work Commission. (n.d.). Right to disconnect disputes.",url.fwc],
    ["U.S. Department of Labor, Wage and Hour Division. (2008, July). Fact sheet #22: Hours worked under the Fair Labor Standards Act (FLSA).",url.us],
    ["U.S. Department of Labor, Wage and Hour Division. (n.d.). Overtime pay.",url.usot],
  ]},
  {type:["International instruments","国际文书"],rows:[["European Parliament & Council of the European Union. (2003). Directive 2003/88/EC of 4 November 2003 concerning certain aspects of the organisation of working time. Official Journal of the European Union, L 299, 9–19.",url.eu]]},
  {type:["Project inspiration","项目灵感来源"],rows:[["996.ICU. (n.d.). 996.ICU [GitHub repository]. GitHub. Retrieved November 17, 2026.",url.source]]},
];
const sections = [
  {id:"declaration",en:"THE DECLARATION",zh:"公开宣言"}, {id:"law",en:"AUSTRALIAN LEGAL FOUNDATION",zh:"澳大利亚法律依据"},
  {id:"ethics",en:"MORAL CONDEMNATION",zh:"道德谴责"}, {id:"comparison",en:"INTERNATIONAL PERSPECTIVE",zh:"国际比较"},
  {id:"principles",en:"PRINCIPLES AND PURPOSE",zh:"原则与宗旨"}, {id:"references",en:"REFERENCES",zh:"参考文献"},
];
const declaration = {
  en:[
    "An employment relationship creates duties. It does not transfer ownership of a person. A contract does not erase dignity, statutory protections, individual autonomy or the boundaries of private life.",
    "Professionalism is not unquestioning obedience. Respect is not submission. A disagreement about working arrangements is not, by itself, evidence of instability or disloyalty. A lawful exercise of a workplace right is not a failure of character.",
    "Legitimate business needs matter. Contracts, awards, enterprise agreements, emergency duties and on-call arrangements may shape what is reasonably expected. The point is not that work can never reach beyond a scheduled shift. The point is that authority has limits, and those limits depend on law, the applicable instrument and the real circumstances.",
    "A manager may contact a worker. That does not mean the worker must always monitor, read or answer. In Australia, the right to disconnect gives covered employees a qualified right to refuse outside-hours work contact when refusal is not unreasonable. Rights and reasonable business requirements must be understood together."
  ],
  zh:[
    "雇佣关系确立工作义务，但不意味着雇主拥有一个人。劳动合同不会抹去人的尊严、法定保障、个人自主权或私人生活的边界。",
    "职业精神不是不问缘由的服从。尊重不是屈从。对工作安排有异议，本身并不能证明一个人情绪不稳定或不忠诚。依法行使职场权利，也不是品格缺陷。",
    "正当的业务需求确实重要。合同、奖励工资令、企业协议、紧急职责与待命安排，都可能影响合理期待。这里并不是说工作绝不能延伸到排班时间之外，而是说管理权有边界；边界取决于法律、适用文书与真实情境。",
    "管理者可以联系员工，但这不等于员工必须随时监看、阅读或回应。在澳大利亚，断联权赋予受保障员工一项附条件的权利：如果拒绝并非不合理，员工可以拒绝工作时间以外的工作联系。权利与合理业务需求应当一并理解。"
  ]
};
const legal = [
  {title:"01 / RIGHT TO DISCONNECT",zhTitle:"01 / 断联权",en:[
    "Under Fair Work Act 2009 (Cth), s 333M, covered employees may refuse to monitor, read or respond to work-related contact or attempted contact outside working hours unless that refusal is unreasonable. The rule distinguishes an employer’s ability to make contact from an employee’s obligation to engage.",
    "Reasonableness depends on the reason and manner of contact, disruption, compensation or availability payments, the employee’s role and responsibility, personal circumstances (including caring responsibilities), and other relevant matters. A refusal is unreasonable where contact is legally required. Awards and enterprise agreements may add or preserve more favourable terms; on-call and recall provisions can matter.",
    "The rules commenced on 26 August 2024 for employees of non-small-business employers and 26 August 2025 for employees of small-business employers. Workplace discussion comes first; unresolved disputes may be taken to the Fair Work Commission, which has statutory dispute-resolution powers."
  ],zh:[
    "根据《2009年公平工作法》（联邦）第333M条，受保障的员工可以拒绝在工作时间以外监看、阅读或回复与工作有关的联系或联系尝试，除非拒绝本身不合理。法律区分了雇主可以联系员工与员工必须回应之间的差异。",
    "判断拒绝是否不合理时，须考虑联系原因、方式及干扰程度、员工因待命或额外工作获得的报酬、员工职责与责任程度、个人情况（包括照护责任）及其他相关因素。法律要求的联系属于例外。奖励工资令、企业协议可能设有额外或更有利条款；待命与召回安排也可能相关。",
    "该规则自2024年8月26日起适用于非小型企业雇主的员工，自2025年8月26日起适用于小型企业雇主的员工。通常先在工作场所讨论；未能解决的争议可提交公平工作委员会，委员会依法具有争议处理权。"
  ],href:url.disconnect},
  {title:"02 / MAXIMUM WEEKLY HOURS",zhTitle:"02 / 每周最长工时",en:[
    "Section 62 sets, for a full-time employee, 38 hours a week (unless an applicable award or enterprise agreement specifies different hours), plus reasonable additional hours. For other employees, the benchmark is the lesser of 38 hours and their agreed ordinary weekly hours, plus reasonable additional hours.",
    "An employee may refuse unreasonable additional hours. Relevant factors include health and safety risks, personal circumstances, workplace needs, compensation, notice, usual industry patterns, role and responsibility, averaging arrangements and any other relevant matter. So a week above 38 hours is not automatically unlawful; the particular arrangement must be assessed."
  ],zh:[
    "第62条规定，全职员工每周38小时（适用的奖励工资令或企业协议另有规定的除外），另加合理的额外工时。其他员工的基准是每周38小时与其约定普通工时两者中的较低者，再加合理的额外工时。",
    "员工可以拒绝不合理的额外工时。考量因素包括健康与安全风险、个人情况、工作场所需求、报酬、通知时间、行业通常工时模式、职责与责任、平均工时安排及其他相关事项。因此，超过每周38小时并不自动违法；须依具体安排判断是否合理。"
  ],href:url.hours},
  {title:"03 / WORKPLACE RIGHTS & ADVERSE ACTION",zhTitle:"03 / 工作权利与不利行动",en:[
    "Sections 340–341 protect workplace rights from specified adverse action. A workplace right can include an entitlement under a workplace law or instrument, participation in a process under one, or making a complaint or inquiry about employment. Adverse action can include dismissal, disadvantageous changes or other listed conduct.",
    "The legal question includes what action occurred and whether a prohibited reason caused it. A harsh remark, disagreement or poor interaction may be relevant context, but alone does not prove unlawful adverse action. Fair Work Ombudsman guidance explains protections and avenues for assistance."
  ],zh:[
    "第340至341条保护工作权利免受特定不利行动。工作权利可包括依据工作场所法律或文书享有的权益、参与相关程序，或就雇佣事项提出投诉或询问。不利行动可能包括解雇、对员工不利的岗位变更及法律列明的其他行为。",
    "法律判断须查明发生了什么行动，以及是否由法律禁止的理由导致。严厉言辞、意见不合或不佳互动可能是相关背景，但单独并不能证明违法的不利行动。公平工作监察专员的指引说明了相关保障与求助途径。"
  ],href:url.protections},
  {title:"04 / BULLYING & MANAGEMENT ACTION",zhTitle:"04 / 职场欺凌与管理行动",en:[
    "Under the Fair Work Act framework, workplace bullying generally involves repeated unreasonable behaviour towards a worker or group that creates a risk to health and safety. The Fair Work Commission can make orders to stop bullying for workers within the statutory scheme.",
    "Reasonable management action carried out in a reasonable manner is not bullying. Direction, performance management or discipline can be legitimate; the manner and circumstances matter. A single unpleasant exchange is not, by itself, the statutory pattern. A pattern may warrant careful documentation and advice."
  ],zh:[
    "依《公平工作法》的框架，职场欺凌通常指反复发生的不合理行为，针对一名或多名员工并造成健康与安全风险。对于符合该法范围的工作者，公平工作委员会可以作出制止欺凌的命令。",
    "以合理方式实施的合理管理行动不属于欺凌。工作指示、绩效管理或纪律处分可能正当；具体方式与情境很重要。单次令人不快的交流本身并不构成法律要求的反复行为。若出现持续模式，可认真记录并寻求适当意见。"
  ],href:url.bullying}
];
const morals = {
  en:[
    "Calling for a “professional attitude” can be a legitimate request for care, reliability and skill. It becomes coercive when emptied of concrete meaning and used to demand silence: no questions, no boundaries, no refusal. Team spirit cannot be a polished name for surrender.",
    "A worker who asks whether a practice is fair, lawful or sustainable deserves an answer to the substance. To answer instead with a judgment about maturity, temperament or emotional stability shifts attention from the practice to the person. It is an argument by stigma, not by reason.",
    "Career opportunity is a powerful promise. Hints about reputation, advancement or future prospects become ethically corrosive when used to make reasonable disagreement feel professionally dangerous. Loyalty is not measured by the evenings a person remains reachable. Contribution is not consent to permanent availability.",
    "Hierarchy creates asymmetry. A manager can shape workload, evaluation and opportunity; a worker may bear the cost of speaking. That power calls for restraint and explanation. Authority is a responsibility to coordinate work, not a licence to diminish the person doing it.",
    "Not every unfair or humiliating practice is unlawful. Not every disagreement is retaliation; not every discourteous exchange is bullying. Law and ethics are related but distinct. Legal compliance is essential, yet legality alone cannot settle whether conduct is fair, humane or worthy of trust."
  ],
  zh:[
    "要求员工保持“职业态度”，可以是对认真、可靠与专业能力的正当期待。但如果这句话失去具体含义，被用来要求沉默——不提问、不设界限、不拒绝——它就成了压力工具。团队精神不能成为屈从的精致说法。",
    "员工询问一种做法是否公平、合法或可持续，理应得到针对问题本身的回答。若回应转而评判员工是否成熟、情绪稳定或性格良好，讨论焦点便从管理行为转移到了提出问题的人。这不是讲理，而是借标签压人。",
    "职业机会是一种重要承诺。当声誉、晋升或未来发展被含蓄地用来让合理异议显得危险时，这种做法会侵蚀职业伦理。忠诚不应以员工每晚是否随时可联系来衡量；贡献也不等于同意永久待命。",
    "层级关系带来权力不对称。管理者能影响工作量、评价与机会，员工却可能承担提出异议的代价。因此权力要求克制与解释。管理权是协调工作的责任，不是贬损劳动者人格的许可。",
    "并非每种不公平或令人屈辱的做法都违法；意见不合不必然构成报复，失礼交流也不必然构成欺凌。法律与伦理相关，却并不相同。守法是必要的，但仅仅合法，并不能回答行为是否公平、人道、值得信任。"
  ]
};
const countries = [
  {name:"AUSTRALIA",en:"Federal workplace protections include the qualified right to disconnect in Fair Work Act s 333M, the reasonable-additional-hours test in s 62, and general protections in Part 3-1. Coverage, awards and agreements matter. This Australian framework is the primary focus of this declaration.",zh:"澳大利亚联邦职场保障包括《公平工作法》第333M条规定的附条件断联权、第62条合理额外工时标准，以及第3-1部分的一般保障。适用范围、奖励工资令与企业协议均很重要。本宣言以澳大利亚制度为重点。",href:url.act},
  {name:"EUROPEAN UNION",en:"Directive 2003/88/EC requires Member States to secure minimum daily rest of 11 consecutive hours per 24-hour period (Art. 3), weekly rest of 24 hours plus daily rest per seven-day period (Art. 5, with qualifications), and an average 48-hour weekly working-time limit including overtime (Art. 6). Derogations, reference periods and national implementation rules apply. These protections are not, by themselves, a single EU-wide statutory right to disconnect; national law can differ.",zh:"《2003/88/EC号指令》要求成员国保障每24小时内至少连续11小时的每日休息（第3条）、每七日内至少24小时加每日休息的每周休息（第5条，存在条件与例外），以及含加班在内平均每周不超过48小时的工时上限（第6条）。适用豁免、参考期间及各国实施规则。上述保障本身并非统一的欧盟断联权；成员国法律可能不同。",href:url.eu},
  {name:"UNITED STATES",en:"The federal FLSA generally requires covered, non-exempt employees to receive overtime of at least 1.5 times their regular rate after 40 hours worked in a workweek. Whether time is “hours worked” depends on the facts and federal rules; some employees are exempt from overtime under statutory tests. Federal law does not create a general nationwide right to disconnect. State and local rules may add protections.",zh:"美国联邦《公平劳动标准法》通常要求受其覆盖且非豁免的员工，在一个工作周实际工作超过40小时后，按不低于正常工资率1.5倍支付加班费。某段时间是否属于“工作时间”须依事实与联邦规则判断；部分员工依法律标准可豁免加班费。联邦法没有建立全国统一的一般断联权；州与地方规则可能提供额外保障。",href:url.us}
];

function A({href,children}:{href:string;children:React.ReactNode}) { return <a href={href} target="_blank" rel="noreferrer">{children} <ArrowUpRight size={13} aria-hidden="true"/></a>; }
function ReferenceText({text}:{text:string}) {
  const split=text.match(/^(.*?\((?:n\.d\.|\d{4}[^)]*)\)\.\s)(.*)$/);
  return split?<>{split[1]}<em>{split[2]}</em></>:<>{text}</>;
}
export default function Home() {
  const [locale,setLocale]=useState<Locale>("en"),[open,setOpen]=useState(false),[copied,setCopied]=useState(false);
  const en=locale==="en";
  useEffect(()=>{document.documentElement.lang=en?"en":"zh-CN";document.title=en?"The Right to Disconnect — Professionalism Is Not Obedience":"下班后，仍是自己 — 职业精神不是无条件服从";document.querySelector('meta[name="description"]')?.setAttribute("content",en?"An independent bilingual public-interest declaration on workplace dignity, lawful boundaries and the right to disconnect.":"一份关于职场尊严、合法边界与断联权的独立公益宣言。")},[en]);
  async function copy(){try{await navigator.clipboard.writeText(`${(en?["PROFESSIONALISM IS NOT OBEDIENCE.","RESPECT IS NOT SUBMISSION.","EMPLOYMENT IS NOT OWNERSHIP."]: ["职业精神不是无条件服从。","尊重不是屈从。","雇佣关系不是人身所有权。"]).join("\n")}\n\n${declaration[en?"en":"zh"].join("\n\n")}`);setCopied(true);window.setTimeout(()=>setCopied(false),1800)}catch{setCopied(false)}}
  async function share(){if(navigator.share)await navigator.share({title:document.title,url:location.href});else{await navigator.clipboard.writeText(location.href);setCopied(true);window.setTimeout(()=>setCopied(false),1800)}}
  return <>
    <a className="skip focus:top-3" href="#main">{en?"Skip to content":"跳转至正文"}</a>
    <header className="topbar"><div className="wrap topbar-inner"><a className="brand" href="#top">{en?"THE RIGHT TO DISCONNECT":"下班后，仍是自己"}</a><nav className="nav-links" aria-label={en?"Main navigation":"主导航"}>{sections.map(s=><a key={s.id} href={`#${s.id}`}>{en?s.en:s.zh}</a>)}</nav><div className="lang" aria-label="Language"><button aria-pressed={en} onClick={()=>setLocale("en")}>EN</button><span>/</span><button aria-pressed={!en} onClick={()=>setLocale("zh")}>中文</button></div><button className="mobile-menu" aria-label={open?(en?"Close menu":"关闭菜单"):(en?"Open menu":"打开菜单")} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X size={18}/>:<Menu size={18}/>}</button>{open&&<nav className="menu-panel">{sections.map((s,i)=><a key={s.id} onClick={()=>setOpen(false)} href={`#${s.id}`}>{String(i+1).padStart(2,"0")} — {en?s.en:s.zh}</a>)}</nav>}</div></header>
    <main id="main">
      <section className="hero wrap" id="top"><div><div className="hero-kicker">{en?"An independent public-interest declaration":"独立公益宣言"} <span style={{color:"var(--red)"}}> / 01—06</span></div><h1 className="hero-title"><span>{en?"THE RIGHT":"下班之后，"}</span><span className="red">{en?"TO DISCONNECT.":"仍是自己。"}</span></h1><div className="hero-actions"><a className="action" href="#declaration">{en?"READ THE DECLARATION":"阅读宣言"} <ArrowDown size={14}/></a><a className="action" href="#references">{en?"LEGAL REFERENCES":"法律参考资料"} <ArrowDown size={14}/></a><a className="action" href={url.repo} target="_blank" rel="noreferrer">{en?"PROJECT ON GITHUB":"项目 GitHub"} <ArrowUpRight size={13}/></a></div><p className="scope">{en?"Independent public-interest statement · Australia / EU / United States":"独立公益声明 · 澳大利亚 / 欧盟 / 美国"}</p></div><div className="hero-side"><div className="hero-number" aria-hidden="true">01</div><p className="hero-slogan">{en?"PROFESSIONALISM IS NOT OBEDIENCE.":"职业精神，不是无条件服从。"}</p><p className="hero-cn">{en?<>职业精神，<br/>不是无条件服从。</>:<>你的时间，<br/>你的权利。</>}</p><p className="hero-copy">{en?"A public legal declaration and moral statement on workplace dignity, lawful boundaries and the right to disconnect.":"一份关于职场尊严、合法边界与断联权的公开法律宣言与伦理立场。"}</p></div></section>
      <section className="section wrap" id="declaration"><div className="section-head"><span className="index">01 / 06</span><div><h2 className="section-title">{en?sections[0].en:sections[0].zh}</h2><p className="section-title-cn">{en?sections[0].zh:sections[0].en}</p></div></div><div className="content-grid"><div className="prose">{declaration[en?"en":"zh"].slice(0,2).map(p=><p key={p}>{p}</p>)}<div className="quote-block">{(en?["PROFESSIONALISM IS NOT OBEDIENCE.","RESPECT IS NOT SUBMISSION.","EMPLOYMENT IS NOT OWNERSHIP."]:["职业精神不是无条件服从。","尊重不是屈从。","雇佣关系不是人身所有权。"]).map(p=><p className={!en?"quote-cn":""} key={p}>{p}</p>)}</div>{declaration[en?"en":"zh"].slice(2).map(p=><p key={p}>{p}</p>)}</div><div className="prose" lang={en?"zh-CN":"en"}>{declaration[en?"zh":"en"].slice(0,2).map(p=><p key={p}>{p}</p>)}<div className="quote-block">{(en?["职业精神不是无条件服从。","尊重不是屈从。","雇佣关系不是人身所有权。"]:["PROFESSIONALISM IS NOT OBEDIENCE.","RESPECT IS NOT SUBMISSION.","EMPLOYMENT IS NOT OWNERSHIP."]).map(p=><p className={en?"quote-cn":""} key={p}>{p}</p>)}</div>{declaration[en?"zh":"en"].slice(2).map(p=><p key={p}>{p}</p>)}</div></div></section>
      <section className="section wrap" id="law"><div className="section-head"><span className="index">02 / 06</span><div><h2 className="section-title">{en?sections[1].en:sections[1].zh}</h2><p className="section-title-cn">{en?sections[1].zh:sections[1].en}</p></div></div><div className="legal-cards">{legal.map((item,i)=><article className="legal-card" key={item.title}><h3>{en?item.title:item.zhTitle}</h3>{(en?item.en:item.zh).map(p=><p key={p}>{p}</p>)}<p className="citation">({i===0?"Fair Work Act 2009 (Cth), ss. 333M–333N; Fair Work Ombudsman, n.d.":i===1?"Fair Work Act 2009 (Cth), s. 62; Fair Work Ombudsman, n.d.":i===2?"Fair Work Act 2009 (Cth), ss. 340–341; Fair Work Ombudsman, n.d.":"Fair Work Act 2009 (Cth), s. 789FD; Fair Work Ombudsman, n.d."})</p><p className="zh" lang={en?"zh-CN":"en"}>{(en?item.zh:item.en).join(" ")}</p><A href={item.href}>{en?"Official guidance":"官方指引"}</A></article>)}</div><p className="law-note">{en?"General information only, not legal advice. Coverage and outcomes depend on the applicable workplace system, instrument, employment arrangement and facts. Consult the Fair Work Ombudsman for information or a qualified Australian employment lawyer for advice. The Ombudsman and Commission have distinct roles.":"以上为一般信息，不构成法律意见。法律保障的适用与结果取决于工作制度、适用文书、雇佣安排及具体事实。可向公平工作监察专员了解信息，或向具备资格的澳大利亚劳动法律师寻求意见。监察专员与公平工作委员会职能不同。"} <A href={url.act}>Fair Work Act 2009 (Cth), ss 62, 333M–333N, 340–341</A> · <A href={url.fwc}>Fair Work Commission</A></p></section>
      <section className="section wrap" id="ethics"><div className="condemn"><div className="section-head"><span className="index">03 / 06</span><div><div className="ethics-label">{en?"AN ETHICAL CLAIM":"伦理立场"}</div><h2 className="section-title">{en?sections[2].en:sections[2].zh}</h2><p className="section-title-cn">{en?sections[2].zh:sections[2].en}</p></div></div><div className="condemn-grid"><p className="condemn-lead">{en?"THE LAW SETS THE FLOOR. DIGNITY SETS THE STANDARD.":"法律规定底线，尊严决定标准。"}</p><div className="condemn-copy">{morals[en?"en":"zh"].map(p=><p key={p}>{p}</p>)}<div className="quote-block"><p>{en?"THE LAW SETS THE FLOOR.":"法律规定底线。"}</p><p>{en?"DIGNITY SETS THE STANDARD.":"尊严决定标准。"}</p></div>{morals[en?"zh":"en"].map(p=><p lang={en?"zh-CN":"en"} key={p}>{p}</p>)}</div></div></div></section>
      <section className="section wrap" id="comparison"><div className="section-head"><span className="index">04 / 06</span><div><h2 className="section-title">{en?sections[3].en:sections[3].zh}</h2><p className="section-title-cn">{en?sections[3].zh:sections[3].en}</p></div></div><div className="comparison">{countries.map(c=><article className="country" key={c.name}><h3>{c.name}</h3><div><p>{en?c.en:c.zh} <A href={c.href}>{c.name==="EUROPEAN UNION"?"Directive 2003/88/EC":c.name==="UNITED STATES"?"DOL Fact Sheet #22":"Fair Work Act"}</A></p><p className="zh" lang={en?"zh-CN":"en"}>{en?c.zh:c.en}</p></div></article>)}</div><p className="law-note">{en?"Comparative context only. EU and US law does not automatically apply to employees in Australia. Check current national, state and local law for any specific situation.":"本节仅作比较背景。欧盟与美国法律不会自动适用于澳大利亚员工。具体问题请核查当时有效的国家、州及地方规定。"} · <A href={url.usot}>U.S. Department of Labor overtime guidance</A></p></section>
      <section className="section wrap" id="principles"><div className="section-head"><span className="index">05 / 06</span><div><h2 className="section-title">{en?sections[4].en:sections[4].zh}</h2><p className="section-title-cn">{en?sections[4].zh:sections[4].en}</p></div></div><ol className="principles">{principles.map((p,i)=><li key={p[0]}><span className="n">{String(i+1).padStart(2,"0")}</span><p>{en?p[0]:p[1]}</p><p className="zh" lang={en?"zh-CN":"en"}>{en?p[1]:p[0]}</p></li>)}</ol><p className="independent">{en?"This is an independent, non-partisan public-interest declaration. It is not affiliated with or endorsed by any government, tribunal, the Fair Work Ombudsman, the European Union, the U.S. Department of Labor or 996.ICU.":"本项目是一份独立、无党派的公益宣言，与任何政府、仲裁机构、公平工作监察专员、欧盟、美国劳工部或996.ICU均无隶属或背书关系。"}</p></section>
      <section className="section wrap" id="references"><div className="section-head"><span className="index">06 / 06</span><div><h2 className="section-title">{en?sections[5].en:sections[5].zh}</h2><p className="section-title-cn">{en?sections[5].zh:sections[5].en}</p></div></div><p className="independent" style={{marginTop:-25,marginBottom:28}}>{en?"A traceable record of the sources behind the legal statements and project framing.":"记录法律陈述与项目立场所依据的可追溯来源。"}</p><div className="refs">{refs.map(group=><div className="ref-group" key={group.type[0]}><h3 className="ref-type">{en?group.type[0]:group.type[1]}</h3>{group.rows.map(r=><div className="ref" key={r[0]}><ReferenceText text={r[0]}/> <a href={r[1]} target="_blank" rel="noreferrer">{r[1]}</a></div>)}</div>)}<p className="last-check">{en?"LAST LEGAL SOURCE CHECK · 17 NOVEMBER 2026":"最近核查法律来源 · 2026年11月17日"}</p></div><aside className="disclaimer"><strong>{en?"DISCLAIMER":"免责声明"}</strong><br/>{en?"This website provides general legal information, commentary and public-interest advocacy. It is not legal advice. Laws and their application depend on jurisdiction and individual circumstances.":"本网站提供一般法律信息、评论与公益倡议，不构成法律意见。法律及其适用取决于司法管辖区与具体情况。"}<br/><span lang={en?"zh-CN":"en"} style={{color:"var(--muted)"}}>{en?"本网站提供一般法律信息、评论与公益倡议，不构成法律意见。法律及其适用取决于司法管辖区与具体情况。":"This website provides general legal information, commentary and public-interest advocacy. It is not legal advice. Laws and their application depend on jurisdiction and individual circumstances."}</span></aside></section>
    </main>
    <footer className="footer wrap"><span>© 2026 · {en?"THE RIGHT TO DISCONNECT":"下班后，仍是自己"} · CC BY 4.0 declaration / MIT code</span><span>{en?"A public statement, open to correction.":"一份欢迎纠正的公开声明。"}</span><span className="share"><button className="action" onClick={()=>void share()}><Share2 size={13}/>{en?"SHARE":"分享"}</button> <button className="action" onClick={()=>window.print()}><Printer size={13}/>{en?"PRINT":"打印"}</button></span></footer>
    <button className="copy-fab" onClick={()=>void copy()} aria-live="polite">{copied?<Check size={14}/>:<Copy size={14}/>} {copied?(en?"COPIED":"已复制"):(en?"COPY DECLARATION":"复制宣言")}</button>
  </>;
}
