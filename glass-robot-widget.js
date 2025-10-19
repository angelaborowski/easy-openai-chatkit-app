(function(){
    const w = document.createElement('div');
    w.innerHTML = `
        <div style="position:fixed;bottom:20px;right:20px;z-index:1000;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif">
            <button id="chatBtn" style="
                width:64px;height:64px;border-radius:20px;
                background:rgba(255,255,255,0.15);
                backdrop-filter:blur(20px);
                -webkit-backdrop-filter:blur(20px);
                border:1px solid rgba(255,255,255,0.2);
                cursor:pointer;
                display:flex;
                align-items:center;
                justify-content:center;
                box-shadow:0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2);
                transition:all 0.3s cubic-bezier(0.4,0,0.2,1);
                position:relative;
                overflow:hidden;
                color:#1d1d1f;
                font-size:28px;
                font-weight:300;
            ">🤖</button>
            
            <div id="chatPanel" style="
                position:absolute;bottom:80px;right:0;width:420px;height:640px;
                background:rgba(255,255,255,0.1);
                backdrop-filter:blur(30px);
                -webkit-backdrop-filter:blur(30px);
                border:1px solid rgba(255,255,255,0.2);
                border-radius:24px;
                box-shadow:0 25px 80px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.2);
                transform:translateY(20px) scale(0.95);
                opacity:0;visibility:hidden;
                transition:all 0.4s cubic-bezier(0.4,0,0.2,1);
                overflow:hidden;
            ">
                <div style="
                    background:rgba(255,255,255,0.1);
                    backdrop-filter:blur(20px);
                    -webkit-backdrop-filter:blur(20px);
                    border-bottom:1px solid rgba(255,255,255,0.1);
                    color:#1d1d1f;
                    padding:20px 24px;
                    display:flex;
                    align-items:center;
                    justify-content:space-between;
                ">
                    <div>
                        <h3 style="font-size:18px;font-weight:600;margin:0;color:#1d1d1f">AI Assistant</h3>
                        <p style="font-size:13px;opacity:0.7;margin:4px 0 0 0;color:#1d1d1f">Powered by advanced AI</p>
                    </div>
                    <button id="chatClose" style="
                        background:rgba(255,255,255,0.1);
                        backdrop-filter:blur(10px);
                        -webkit-backdrop-filter:blur(10px);
                        border:1px solid rgba(255,255,255,0.2);
                        color:#1d1d1f;
                        font-size:20px;
                        cursor:pointer;
                        padding:8px;
                        border-radius:12px;
                        transition:all 0.2s ease;
                        width:36px;height:36px;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                    ">×</button>
                </div>
                <div style="height:calc(100% - 80px);position:relative;background:rgba(248,249,250,0.3)">
                    <iframe src="https://openai-chatkit-starter-app-one-black.vercel.app" style="
                        width:100%;height:100%;border:none;background:transparent;
                        border-radius:0 0 24px 24px;
                    "></iframe>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(w);
    
    const btn = document.getElementById('chatBtn');
    const panel = document.getElementById('chatPanel');
    const close = document.getElementById('chatClose');
    let open = false;
    
    // Hover effects
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'scale(1.05)';
        btn.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.3)';
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'scale(1)';
        btn.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)';
    });
    
    close.addEventListener('mouseenter', () => {
        close.style.background = 'rgba(255,255,255,0.2)';
        close.style.transform = 'scale(1.1)';
    });
    
    close.addEventListener('mouseleave', () => {
        close.style.background = 'rgba(255,255,255,0.1)';
        close.style.transform = 'scale(1)';
    });
    
    // Toggle functionality
    btn.onclick = () => {
        open = !open;
        if (open) {
            panel.style.transform = 'translateY(0) scale(1)';
            panel.style.opacity = '1';
            panel.style.visibility = 'visible';
            btn.style.background = 'rgba(255,255,255,0.25)';
        } else {
            panel.style.transform = 'translateY(20px) scale(0.95)';
            panel.style.opacity = '0';
            panel.style.visibility = 'hidden';
            btn.style.background = 'rgba(255,255,255,0.15)';
        }
    };
    
    close.onclick = () => {
        open = false;
        panel.style.transform = 'translateY(20px) scale(0.95)';
        panel.style.opacity = '0';
        panel.style.visibility = 'hidden';
        btn.style.background = 'rgba(255,255,255,0.15)';
    };
    
    // Click outside to close
    document.addEventListener('click', e => {
        if (open && !panel.contains(e.target) && !btn.contains(e.target)) {
            open = false;
            panel.style.transform = 'translateY(20px) scale(0.95)';
            panel.style.opacity = '0';
            panel.style.visibility = 'hidden';
            btn.style.background = 'rgba(255,255,255,0.15)';
        }
    });
    
    // ESC key to close
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && open) {
            open = false;
            panel.style.transform = 'translateY(20px) scale(0.95)';
            panel.style.opacity = '0';
            panel.style.visibility = 'hidden';
            btn.style.background = 'rgba(255,255,255,0.15)';
        }
    });
    
    // Mobile responsive
    const updateMobile = () => {
        if (window.innerWidth <= 480) {
            panel.style.width = 'calc(100vw - 40px)';
            panel.style.height = 'calc(100vh - 100px)';
            panel.style.bottom = '80px';
            panel.style.right = '20px';
            panel.style.left = '20px';
        } else {
            panel.style.width = '420px';
            panel.style.height = '640px';
            panel.style.bottom = '80px';
            panel.style.right = '0';
            panel.style.left = 'auto';
        }
    };
    
    window.addEventListener('resize', updateMobile);
    updateMobile();
})();
