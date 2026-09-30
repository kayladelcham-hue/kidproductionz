const button=document.querySelector('.menu-toggle');const nav=document.querySelector('.mobile-nav');if(button&&nav){button.addEventListener('click',()=>{const open=nav.hasAttribute('hidden');if(open){nav.removeAttribute('hidden');button.textContent='✕'}else{nav.setAttribute('hidden','');button.textContent='☰'}})}

// Keep the curated Resources page discoverable across the site without having to
// duplicate the link manually in every existing page template.
(()=>{
  const path=window.location.pathname;
  const isRoot=/\/kidproductionz\/?$/.test(path)||path==='/'||/\/index\.html$/.test(path);
  const resourcesHref=path.includes('/resources/')?'./':(isRoot?'resources/':'../resources/');
  const addLink=(container,beforeSelector)=>{
    if(!container||Array.from(container.querySelectorAll('a')).some(a=>a.textContent.trim().toLowerCase()==='resources'))return;
    const link=document.createElement('a');link.href=resourcesHref;link.textContent='Resources';
    const before=beforeSelector?container.querySelector(beforeSelector):null;
    if(before)container.insertBefore(link,before);else container.appendChild(link);
  };
  addLink(document.querySelector('.desktop-nav'),'a[href*="about"]');
  addLink(document.querySelector('.mobile-nav'),'a[href*="about"]');
  document.querySelectorAll('.footer-links>div').forEach(group=>{
    const heading=group.querySelector('b');
    if(heading&&heading.textContent.trim().toLowerCase()==='explore')addLink(group,'a[href*="about"]');
  });
})();

if(window.location.pathname.includes('/hospitality')){
  const projectCta=document.querySelector('.project-cta');
  if(projectCta){
    const style=document.createElement('style');
    style.textContent=`
      .tiktok-ads-partner{padding:92px 0;background:linear-gradient(135deg,var(--bg) 0%,var(--surface) 68%,var(--surface2) 100%);color:var(--text);border-top:1px solid var(--border);border-bottom:1px solid var(--border)}
      .tiktok-ads-partner .partner-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:10%;align-items:end}
      .tiktok-ads-partner .eyebrow{color:var(--muted)}
      .tiktok-ads-partner h2{font-family:var(--display);font-size:clamp(58px,7vw,104px);font-weight:400;line-height:.88;margin:28px 0 0;color:var(--text)}
      .tiktok-ads-partner h2 em{font-style:normal;color:var(--blue)}
      .tiktok-ads-partner .partner-copy{max-width:500px}
      .tiktok-ads-partner .partner-copy>p{font-size:15px;line-height:1.8;color:var(--muted);margin:0 0 26px}
      .tiktok-ads-partner .partner-credit{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin:0 0 28px}
      .tiktok-ads-partner .partner-credit span{background:rgba(255,255,255,.035);border:1px solid var(--border);border-radius:14px;padding:16px 14px;font-size:11px;line-height:1.4;color:var(--muted)}
      .tiktok-ads-partner .partner-credit strong{display:block;color:var(--text);font-size:20px;margin-bottom:4px}
      .tiktok-ads-partner .partner-disclosure{font-size:10px!important;line-height:1.6!important;color:#64748b!important;margin:16px 0 0!important}
      .tiktok-ads-partner .button.primary{display:inline-flex;background:var(--blue);color:#fff;border-color:var(--blue)}
      .tiktok-ads-partner .button.primary:hover{filter:brightness(1.08)}
      @media(max-width:900px){.tiktok-ads-partner .partner-grid{grid-template-columns:1fr;gap:36px;align-items:start}.tiktok-ads-partner .partner-copy{max-width:620px}}
      @media(max-width:640px){.tiktok-ads-partner{padding:64px 0}.tiktok-ads-partner .partner-grid{gap:30px}.tiktok-ads-partner h2{font-size:clamp(54px,15vw,72px);line-height:.9;margin-top:22px}.tiktok-ads-partner .partner-copy>p{font-size:14px;line-height:1.7;margin-bottom:22px}.tiktok-ads-partner .partner-credit{grid-template-columns:1fr;gap:9px;margin-bottom:22px}.tiktok-ads-partner .partner-credit span{padding:14px 16px}.tiktok-ads-partner .partner-credit strong{font-size:18px}.tiktok-ads-partner .button.primary{width:100%;padding:16px 18px}.tiktok-ads-partner .partner-disclosure{margin-top:14px!important}}
    `;
    document.head.appendChild(style);

    const section=document.createElement('section');
    section.className='tiktok-ads-partner';
    section.innerHTML=`<div class="content-wrap"><div class="partner-grid"><div><span class="eyebrow"><span class="blue-dot"></span>Paid distribution</span><h2>GREAT CONTENT.<br><em>NOW GET IT SEEN.</em></h2></div><div class="partner-copy"><p>Thinking about putting paid spend behind your content? Eligible new advertisers can currently access matching TikTok Ads promotional credits when they start through my TikTok for Business partner link.</p><div class="partner-credit"><span><strong>$200</strong>spend → $200 credit</span><span><strong>$500</strong>spend → $500 credit</span><span><strong>Up to $6K</strong>in matching credits</span></div><a class="button primary" href="https://getstartedtiktok.partnerlinks.io/s5j2gsrjo0eg" target="_blank" rel="sponsored noopener">Get TikTok Ad Credits →</a><p class="partner-disclosure">Affiliate disclosure: KidProductionz may earn a commission from eligible activity through this partner link. Promotional credits are subject to TikTok eligibility and program terms.</p></div></div></div>`;
    projectCta.parentNode.insertBefore(section,projectCta);
  }
}