import{useState,useEffect}from'react'
import{motion,AnimatePresence}from'framer-motion'
import{useInView}from'react-intersection-observer'
import{List,X,Star,WhatsappLogo,Phone,MapPin,Clock,Camera,Image,UserFocus,Baby,Heart,Aperture,InstagramLogo,Quotes,CaretLeft,CaretRight}from'@phosphor-icons/react'

const biz={name:'Alonso Fotografia',phone:'(48) 99823-0020',whatsapp:'5548998230020',address:'R. Lauro Linhares, 2123 - Trindade Shopping, Sala 206-B, Florianópolis - SC',hours:'Somente com hora agendada',rating:4.9,reviews:200,ig:'@alonsofotografiafloripa',cnpj:'18.764.908/0001-37',
whatsappMsg:'Olá! Vi o site e gostaria de agendar um ensaio fotográfico.'}
const servicos=[{t:'Book Feminino',d:'Ensaio em estúdio ou externo nas praias de Florianópolis.',i:'UserFocus'},{t:'Ensaio Gestante',d:'Registre esse momento único com fotos profissionais e emocionantes.',i:'Baby'},{t:'Book Casal',d:'Pré-casamento e ensaios românticos nas praias e locações da ilha.',i:'Heart'},{t:'Fotografia de Produtos',d:'E-commerce e catálogos com iluminação profissional em estúdio.',i:'Image'},{t:'Fotografia para Hotéis',d:'Ambientes, Airbnb e pousadas com fotos que vendem.',i:'Camera'},{t:'Fotos de Formatura',d:'Ensaio de formatura em estúdio com cenários exclusivos.',i:'Aperture'}]
const im={UserFocus,Baby,Heart,Image,Camera,Aperture}
const revs=[{n:'Camila S.',t:'Alonso é um artista! Meu book ficou incrível. Profissional premiado e super atencioso com cada detalhe.',r:5},{n:'Rafael M.',t:'Fizemos o ensaio de pré-casamento nas praias de Floripa. As fotos ficaram espetaculares. Recomendo demais!',r:5},{n:'Marina L.',t:'25 anos de experiência fazem toda diferença. Resultado profissional impecável. Melhor fotógrafo de Florianópolis.',r:5}]
const waUrl=`https://wa.me/${biz.whatsapp}?text=${encodeURIComponent(biz.whatsappMsg)}`

export default function App(){
const[sc,setSc]=useState(false);const[mo,setMo]=useState(false);const[cur,setCur]=useState(0)
useEffect(()=>{const h=()=>setSc(window.scrollY>40);window.addEventListener('scroll',h);return()=>window.removeEventListener('scroll',h)},[])
const nav=['Portfólio','Sobre','Depoimentos','Contato'];const ids=['portfolio','sobre','deps','contato']
return(<>
<motion.header initial={{y:-100}} animate={{y:0}} transition={{duration:0.8,ease:[0.22,1,0.36,1]}}
style={{position:'fixed',top:0,left:0,right:0,zIndex:1000,padding:'0 clamp(1rem,4vw,3rem)',height:80,display:'flex',alignItems:'center',justifyContent:'space-between',background:sc?'rgba(250,250,250,0.95)':'rgba(250,250,250,0.7)',backdropFilter:'blur(16px)',borderBottom:sc?'1px solid var(--border)':'1px solid transparent',transition:'all 0.4s'}}>
<a href="#hero" style={{fontFamily:'var(--heading)',fontSize:20,fontWeight:800,color:'var(--text)',letterSpacing:-0.5}}>ALONSO <span style={{color:'var(--accent)'}}>FOTO</span></a>
<nav style={{display:'flex',alignItems:'center',gap:'1.5rem'}}>
<div className="dn" style={{display:'flex',gap:'1.5rem'}}>{nav.map((l,i)=><a key={i} href={`#${ids[i]}`} style={{fontSize:13,letterSpacing:0.5,textTransform:'uppercase',color:'var(--text-light)',fontWeight:500}}>{l}</a>)}</div>
<a href={waUrl} target="_blank" rel="noopener noreferrer" style={{background:'var(--text)',color:'#fff',padding:'10px 24px',borderRadius:100,fontSize:13,fontWeight:600,textTransform:'uppercase',display:'inline-flex',alignItems:'center',gap:6}}><WhatsappLogo size={16} weight="fill"/>Orçamento</a>
<button className="hm" onClick={()=>setMo(!mo)} style={{display:'none',color:'var(--text)'}}>{mo?<X size={28}/>:<List size={28}/>}</button>
</nav></motion.header>

<AnimatePresence>{mo&&<motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} style={{position:'fixed',inset:0,top:80,background:'rgba(250,250,250,0.98)',zIndex:999,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'2rem'}}>
{nav.map((l,i)=><a key={i} href={`#${ids[i]}`} onClick={()=>setMo(false)} style={{fontFamily:'var(--heading)',fontSize:36,fontWeight:700}}>{l}</a>)}</motion.div>}</AnimatePresence>

<section id="hero" style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',position:'relative',overflow:'hidden',background:'linear-gradient(160deg,#fafafa 0%,#f5f0e0 50%,#f0c040 150%)',paddingTop:80}}>
<div style={{maxWidth:850,margin:'0 auto',padding:'2rem clamp(1.5rem,5vw,3rem)',textAlign:'center',position:'relative',zIndex:1}}>
<motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.3}} style={{display:'inline-flex',alignItems:'center',gap:8,background:'rgba(255,255,255,0.8)',padding:'8px 20px',borderRadius:100,marginBottom:'2rem',border:'1px solid var(--border)'}}>
{[...Array(5)].map((_,i)=><Star key={i} size={14} weight="fill" style={{color:'var(--accent)'}}/>)}<span style={{fontSize:13,color:'var(--text-light)'}}>{biz.rating} — {biz.reviews} avaliações | Premiado 5x</span></motion.div>
<motion.div initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}} transition={{delay:0.5}} style={{marginBottom:'1.5rem'}}><Aperture size={48} weight="duotone" style={{color:'var(--text)',margin:'0 auto'}}/></motion.div>
<motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:0.7,duration:1}} style={{fontFamily:'var(--heading)',fontSize:'clamp(2.5rem,7vw,5rem)',fontWeight:800,lineHeight:0.95,marginBottom:'1.5rem',letterSpacing:-2}}>
CADA MOMENTO<br/>MERECE SER <span style={{color:'var(--accent)'}}>ETERNO</span></motion.h1>
<motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.2}} style={{fontSize:'clamp(1rem,2vw,1.1rem)',color:'var(--text-light)',maxWidth:500,margin:'0 auto 2.5rem',lineHeight:1.7}}>
25+ anos capturando momentos únicos em Florianópolis. Ensaios, books, produtos e eventos com premiação em maratona fotográfica.</motion.p>
<motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:1.5}} style={{display:'flex',gap:'1rem',justifyContent:'center',flexWrap:'wrap'}}>
<a href={waUrl} target="_blank" rel="noopener noreferrer" style={{display:'inline-flex',alignItems:'center',gap:10,background:'var(--text)',color:'#fff',padding:'16px 36px',borderRadius:100,fontSize:14,fontWeight:700,textTransform:'uppercase'}}><WhatsappLogo size={20} weight="fill"/>Solicitar Orçamento</a>
<a href="#portfolio" style={{display:'inline-flex',border:'2px solid var(--text)',padding:'16px 36px',borderRadius:100,fontSize:14,fontWeight:700,textTransform:'uppercase'}}>Ver Portfólio</a>
</motion.div></div></section>

<section id="portfolio" style={{padding:'clamp(4rem,8vw,8rem) clamp(1.5rem,5vw,3rem)'}}>
<div style={{maxWidth:'var(--max-w)',margin:'0 auto'}}>
<div style={{textAlign:'center',marginBottom:'clamp(2.5rem,5vw,4rem)'}}><p style={{fontSize:12,letterSpacing:4,textTransform:'uppercase',color:'var(--accent)',marginBottom:'1rem',fontWeight:700}}>Serviços</p><h2 style={{fontFamily:'var(--heading)',fontSize:'clamp(2rem,5vw,3.5rem)',fontWeight:800,letterSpacing:-1}}>PORTFÓLIO</h2></div>
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'1.5rem'}}>
{servicos.map((s,i)=>{const I=im[s.i];return(
<motion.div key={i} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}}
style={{background:'var(--surface)',borderRadius:20,padding:'clamp(1.5rem,3vw,2rem)',border:'1px solid var(--border)',transition:'transform 0.3s,box-shadow 0.3s'}}
onMouseOver={e=>{e.currentTarget.style.transform='translateY(-6px)';e.currentTarget.style.boxShadow='0 16px 40px rgba(0,0,0,0.08)'}} onMouseOut={e=>{e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='none'}}>
<div style={{width:52,height:52,borderRadius:14,background:'linear-gradient(135deg,rgba(240,192,64,0.15),rgba(0,0,0,0.03))',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'1rem'}}><I size={26} weight="duotone" style={{color:'var(--text)'}}/></div>
<h3 style={{fontFamily:'var(--heading)',fontSize:'1.15rem',fontWeight:700,marginBottom:'0.5rem'}}>{s.t}</h3><p style={{fontSize:'0.9rem',lineHeight:1.7,color:'var(--text-light)'}}>{s.d}</p></motion.div>)})}
</div>
<div style={{textAlign:'center',marginTop:'2.5rem'}}><a href={waUrl} target="_blank" rel="noopener noreferrer" style={{display:'inline-flex',alignItems:'center',gap:8,background:'var(--text)',color:'#fff',padding:'14px 32px',borderRadius:100,fontSize:13,fontWeight:700,textTransform:'uppercase'}}><WhatsappLogo size={16} weight="fill"/>Solicitar Orçamento</a></div>
</div></section>

<section id="sobre" style={{padding:'clamp(4rem,8vw,6rem) clamp(1.5rem,5vw,3rem)',background:'linear-gradient(180deg,#f0ece0,var(--bg))'}}>
<div style={{maxWidth:700,margin:'0 auto',textAlign:'center'}}>
<Camera size={48} weight="duotone" style={{color:'var(--text)',margin:'0 auto 1rem'}}/>
<h2 style={{fontFamily:'var(--heading)',fontSize:'clamp(2rem,4vw,2.5rem)',fontWeight:800,marginBottom:'1.5rem'}}>25+ ANOS DE ARTE</h2>
<p style={{fontSize:'1rem',color:'var(--text-light)',lineHeight:1.8,marginBottom:'1.5rem'}}>O fotógrafo Alonso é profissional há mais de 25 anos, atuando em Florianópolis com estúdio próprio equipado com iluminação profissional. Premiado nas Maratonas Fotográficas de Florianópolis nos anos de 2018, 2019, 2023, 2024 e 2025, na modalidade analógica.</p>
<div style={{display:'flex',justifyContent:'center',gap:'2rem',flexWrap:'wrap'}}>
{['2018','2019','2023','2024','2025'].map(y=><div key={y} style={{background:'var(--surface)',borderRadius:12,padding:'0.75rem 1.25rem',border:'1px solid var(--border)'}}><span style={{fontFamily:'var(--heading)',fontWeight:800,fontSize:'1.1rem'}}>{y}</span><br/><span style={{fontSize:'0.7rem',color:'var(--text-muted)',letterSpacing:1}}>PREMIADO</span></div>)}
</div>
</div></section>

<section id="deps" style={{padding:'clamp(4rem,8vw,8rem) clamp(1.5rem,5vw,3rem)'}}>
<div style={{maxWidth:700,margin:'0 auto',textAlign:'center'}}>
<p style={{fontSize:12,letterSpacing:4,textTransform:'uppercase',color:'var(--accent)',marginBottom:'1rem',fontWeight:700}}>Depoimentos</p>
<h2 style={{fontFamily:'var(--heading)',fontSize:'clamp(2rem,4vw,3rem)',fontWeight:800,marginBottom:'2.5rem'}}>CLIENTES</h2>
<AnimatePresence mode="wait"><motion.div key={cur} initial={{opacity:0,x:40}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-40}} style={{background:'var(--surface)',borderRadius:24,padding:'clamp(2rem,4vw,3rem)',border:'1px solid var(--border)'}}>
<Quotes size={36} weight="fill" style={{color:'rgba(240,192,64,0.2)',marginBottom:'1rem'}}/><p style={{fontSize:'clamp(1.1rem,2.5vw,1.3rem)',fontStyle:'italic',lineHeight:1.7,marginBottom:'1.5rem'}}>"{revs[cur].t}"</p>
<div style={{display:'flex',gap:2,justifyContent:'center',marginBottom:'0.75rem'}}>{[...Array(5)].map((_,i)=><Star key={i} size={14} weight="fill" style={{color:'var(--accent)'}}/>)}</div><p style={{fontWeight:700}}>{revs[cur].n}</p>
</motion.div></AnimatePresence>
<div style={{display:'flex',justifyContent:'center',gap:'1rem',marginTop:'1.5rem'}}>
<button onClick={()=>setCur(c=>(c-1+revs.length)%revs.length)} style={{width:44,height:44,borderRadius:'50%',border:'1px solid var(--border)',display:'flex',alignItems:'center',justifyContent:'center',background:'var(--surface)'}}><CaretLeft size={18} weight="bold"/></button>
<div style={{display:'flex',alignItems:'center',gap:8}}>{revs.map((_,i)=><button key={i} onClick={()=>setCur(i)} style={{width:cur===i?24:8,height:8,borderRadius:100,background:cur===i?'var(--text)':'var(--border)',transition:'all 0.3s'}}/>)}</div>
<button onClick={()=>setCur(c=>(c+1)%revs.length)} style={{width:44,height:44,borderRadius:'50%',border:'1px solid var(--border)',display:'flex',alignItems:'center',justifyContent:'center',background:'var(--surface)'}}><CaretRight size={18} weight="bold"/></button>
</div></div></section>

<section id="contato" style={{padding:'clamp(4rem,8vw,8rem) clamp(1.5rem,5vw,3rem)',background:'linear-gradient(180deg,var(--bg),#f0ece0)'}}>
<div style={{maxWidth:'var(--max-w)',margin:'0 auto'}}>
<div style={{textAlign:'center',marginBottom:'2rem'}}><h2 style={{fontFamily:'var(--heading)',fontSize:'clamp(2rem,4vw,3rem)',fontWeight:800}}>AGENDE SEU ENSAIO</h2></div>
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',gap:'1.5rem'}}>
<a href={waUrl} target="_blank" rel="noopener noreferrer" style={{background:'linear-gradient(135deg,#25d366,#128c7e)',borderRadius:20,padding:'2rem',color:'#fff',display:'flex',flexDirection:'column',gap:'1rem',transition:'transform 0.3s'}} onMouseOver={e=>e.currentTarget.style.transform='translateY(-4px)'} onMouseOut={e=>e.currentTarget.style.transform='translateY(0)'}><WhatsappLogo size={36} weight="fill"/><h3 style={{fontSize:'1.2rem',fontWeight:700}}>WhatsApp</h3><p style={{fontSize:'1rem',fontWeight:700}}>{biz.phone}</p></a>
<a href="https://www.instagram.com/alonsofotografiafloripa/" target="_blank" rel="noopener noreferrer" style={{background:'var(--surface)',borderRadius:20,padding:'2rem',border:'1px solid var(--border)',display:'flex',flexDirection:'column',gap:'1rem'}}><InstagramLogo size={36} weight="duotone" style={{color:'#e1306c'}}/><h3 style={{fontSize:'1.1rem',fontWeight:600}}>Instagram</h3><p style={{fontSize:'0.9rem',color:'var(--text-light)'}}>{biz.ig}</p></a>
<div style={{background:'var(--surface)',borderRadius:20,padding:'2rem',border:'1px solid var(--border)',display:'flex',flexDirection:'column',gap:'1rem'}}><MapPin size={36} weight="duotone" style={{color:'var(--text)'}}/><h3 style={{fontSize:'1.1rem',fontWeight:600}}>Estúdio</h3><p style={{fontSize:'0.85rem',color:'var(--text-light)',lineHeight:1.6}}>{biz.address}</p></div>
<div style={{background:'var(--surface)',borderRadius:20,padding:'2rem',border:'1px solid var(--border)',display:'flex',flexDirection:'column',gap:'1rem'}}><Clock size={36} weight="duotone" style={{color:'var(--text)'}}/><h3 style={{fontSize:'1.1rem',fontWeight:600}}>Horário</h3><p style={{fontSize:'0.9rem',color:'var(--text-light)'}}>{biz.hours}</p></div>
</div></div></section>

<footer style={{background:'#111',color:'#fff',padding:'clamp(3rem,6vw,4rem) clamp(1.5rem,5vw,3rem) 2rem'}}>
<div style={{maxWidth:'var(--max-w)',margin:'0 auto',display:'flex',flexWrap:'wrap',justifyContent:'space-between',alignItems:'center',gap:'1rem'}}>
<div><p style={{fontFamily:'var(--heading)',fontSize:20,fontWeight:800}}>ALONSO <span style={{color:'var(--accent)'}}>FOTO</span></p><p style={{fontSize:11,opacity:0.5}}>CNPJ: {biz.cnpj} | Florianópolis - SC</p></div>
<div style={{display:'flex',gap:'0.75rem'}}><a href={waUrl} target="_blank" rel="noopener noreferrer" style={{width:40,height:40,borderRadius:'50%',border:'1px solid rgba(255,255,255,0.2)',display:'flex',alignItems:'center',justifyContent:'center',color:'rgba(255,255,255,0.7)'}}><WhatsappLogo size={20}/></a>
<a href="https://www.instagram.com/alonsofotografiafloripa/" target="_blank" rel="noopener noreferrer" style={{width:40,height:40,borderRadius:'50%',border:'1px solid rgba(255,255,255,0.2)',display:'flex',alignItems:'center',justifyContent:'center',color:'rgba(255,255,255,0.7)'}}><InstagramLogo size={20}/></a></div>
<p style={{fontSize:'0.75rem',opacity:0.4}}>© {new Date().getFullYear()} Alonso Fotografia.</p></div></footer>

<motion.a href={waUrl} target="_blank" rel="noopener noreferrer" initial={{scale:0}} animate={{scale:1}} transition={{delay:2,type:'spring'}}
style={{position:'fixed',bottom:24,right:24,zIndex:900,width:60,height:60,borderRadius:'50%',background:'linear-gradient(135deg,#25d366,#128c7e)',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',boxShadow:'0 4px 20px rgba(37,211,102,0.4)'}}>
<WhatsappLogo size={32} weight="fill"/></motion.a>
<style>{`@media(max-width:900px){.dn{display:none!important}.hm{display:block!important}}`}</style>
</>)}
