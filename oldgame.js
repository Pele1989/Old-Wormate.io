function p__PW() {
    p__PWinner()
}

var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t) {
    return typeof t
}

:function(t) {
    return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t !==Symbol.prototype?"symbol": typeof t
}

,
GoogleAuth,
p__PWinner=function() {}

;

window.addEventListener("load", function() {
        function t(t) {
            return window.I18N_MESSAGES[t]
        }

        function i(t) {
            return t[d]?t[d]:t.en?t.en:t.x
        }

        function e(i) {
            var e=(Math.floor(i)%60).toString(), n=(Math.floor(i/60)%60).toString(), o=(Math.floor(i/3600)%24).toString(), s=Math.floor(i/86400).toString(), h=t("util.time.days"), a=t("util.time.hours"), r=t("util.time.min"), c=t("util.time.sec"); return s>0?s+" "+h+" "+o+" "+a+" "+n+" "+r+" "+e+" "+c:o>0?o+" "+a+" "+n+" "+r+" "+e+" "+c:n>0?n+" "+r+" "+e+" "+c:e+" "+c
        }

        function n(t, i, e) {
            var n=document.createElement("script"), o= !0; i&&(n.id=i), n.async="async", n.type="text/javascript", n.src=t, e&&(n.onload=n.onreadystatechange=function() {
                    o= !1; try {
                        e()
                    }

                    catch(t) {
                        console.log(t)
                    }

                    n.onload=n.onreadystatechange=null
                }

            ), (document.head||document.getElementsByTagName("head")[0]).appendChild(n)
        }

        function o(t, i) {
            var e=i; return e.prototype=Object.create(t.prototype), e.prototype.constructor=e, e
        }

        function s(t) {
            return t%=l, t<0?t+l:t
        }

        function h(t, i, e) {
            return e>i?i:e<t?t:Number.isFinite(e)?e:.5*(t+i)
        }

        function a(t) {
            try {
                var i=t.getContext("2d"); return i.pathCircle=function(t, e, n) {
                    i.beginPath(), i.arc(t, e, n, 0, l), i.closePath()
                }

                , i.pathSector=function(t, e, n, o, s, h) {
                    i.beginPath(), i.arc(t, e, n, o, s, h)
                }

                , i.drawRegionTransformed=function(t, e, n, o, s, h) {
                    i.save(), i.translate(o, s), i.rotate(h), i.drawRegion(t, e, n, 0, 0), i.restore()
                }

                , i.drawRegion=function(t, e, n, o, s) {
                    i.drawImage(t.a, t.b, t.c, t.d, t.e, o+2*e*t.f, s+2*n*t.g, 2*e*t.i, 2*n*t.j)
                }

                , i
            }

            catch(t) {}

            return null
        }

        function r(t) {
            var i=null, e= {}

            ; return e.k=function(e) {
                n(t, null, function() {
                        "undefined" !=typeof aipPlayer&&(i=new aipPlayer( {
                                    AD_WIDTH:960, AD_HEIGHT:540, AD_FULLSCREEN: !0, PREROLL_ELEM:document.getElementById("whatisthat"), AIP_COMPLETE:function() {
                                        e(), $("#whatisthat").hide(); try {
                                            ga("send", "event", "preroll", "complete", "adinplay")
                                        }

                                        catch(t) {}
                                    }
                                }

                            ))
                    }

                )
            }

            , e.l=function() {
                if(i) {
                    $("#whatisthat").show(), i.startPreRoll(); try {
                        ga("send", "event", "preroll", "request", "adinplay")
                    }

                    catch(t) {}
                }
            }

            , e
        }

        function c(t) {
            var i= {
                m:0, n:1, o:2, p:3
            }

            , e= {}

            ; return e.q=30, e.r=new Float32Array(100), e.s=i.m, e.t=null, e.u=300, e.v=function() {}

            , e.z=function() {}

            , e.A=function() {}

            , e.B=function() {}

            , e.C=new y, e.D=new M, e.F=null, e.G=null, e.H= {}

            , e.I= {}

            , e.J=12.5, e.K=40, e.L=500, e.M=500, e.D.N=500, e.G=new C(e.D), e.k=function() {
                setInterval(function() {
                        e.A(function(t, i) {
                                e.O(t, i)
                            }

                        )
                    }

                    , 100)
            }

            , e.P=function(t, n) {
                e.F.Q(), null==e.t||e.s !=i.o&&e.s !=i.p||(e.R(t, n), e.K=4+e.J*e.G.S); for(var o=1e3/Math.max(1, n), s=0, h=0; h<e.r.length-1; h++)s+=e.r[h], e.r[h]=e.r[h+1]; e.r[e.r.length-1]=o, e.q=(s+o)/e.r.length
            }

            , e.R=function(t, i) {
                var n=2*e.K, o=e.G.T[0], s=e.G.T[1], h=o-n, a=o+n, r=s-n, c=s+n, f=function(t, i) {
                    return t>h&&t<a&&i>r&&i<c&&Math.hypot(o-t, s-i)<n
                }

                ; e.G.U(t, i), e.G.V(t, i, f); for(var u in e.I) {
                    var d=e.I[u]; d.U(t, i), d.W&&d.V(t, i, f), d.X|| !(d.Y<.005)&&d.W||delete e.I[d.$.Z]
                }

                for(var p in e.H) {
                    var l=e.H[p]; l.U(t, i), l.V(t, i), l._&&(l.Y<.005|| !f(l.aa, l.ba))&&delete e.H[l.$.Z]
                }

                e.C.P(t, i)
            }

            , e.ca=function() {
                e.s==i.n&&(e.s=i.o, e.v())
            }

            , e.da=function() {
                if(e.s==i.n||e.s==i.o) {
                    e.s=i.p; var t=e.t; setTimeout(function() {
                            e.s==i.p&&(e.s=i.m), null !=t&&t==e.t&&(e.t.close(), e.t=null)
                        }

                        , 5e3), setTimeout(function() {
                            e.z()
                        }

                        , 1e3)
                }
            }

            , e.ea=function() {
                return(e.s==i.m||e.s==i.p)&&(e.s=i.n, e.F.fa(), e.H= {}

                    , e.I= {}

                    , e.G.ga(), null !=e.t&&(e.t.close(), e.t=null),  !0)
            }

            , e.ha=function() {
                e.t=null, e.F.fa(), e.s !=i.p&&e.B(), e.s=i.m
            }

            , e.ia=function(t, i) {
                e.ja(t, function() {
                        var t=Math.min(2048, i.length), n=new ArrayBuffer(6+2*t), o=new DataView(n), s=0; o.setInt8(s, 129), s+=1, o.setInt16(s, 2700), s+=2, o.setInt8(s, 1), s+=1, o.setInt16(s, t), s+=2; for(var h=0; h<t; h++)o.setInt16(s, i.charCodeAt(h)), s+=2; e.ka(n)
                    }

                )
            }

            , e.la=function(t, i, n) {
                e.ja(t, function() {
                        var t=Math.min(32, i.length), o=new ArrayBuffer(7+2*t), s=new DataView(o), h=0; s.setInt8(h, 129), h+=1, s.setInt16(h, 2700), h+=2, s.setInt8(h, 0), h+=1, s.setInt16(h, n), h+=2, s.setInt8(h, t), h++; for(var a=0; a<t; a++)s.setInt16(h, i.charCodeAt(a)), h+=2; e.ka(o)
                    }

                )
            }

            , e.ka=function(t) {
                try {
                    null !=e.t&&e.t.readyState==WebSocket.OPEN&&e.t.send(t)
                }

                catch(t) {
                    console.log("Socket send error: "+t), e.ha()
                }
            }

            , e.O=function(t, i) {
                var n=i?128:0, o=s(t)/l*128&127, h=255&(n|o); if(e.u !=h) {
                    var a=new ArrayBuffer(1); new DataView(a).setInt8(0, h), e.ka(a), e.u=h
                }
            }

            , e.ja=function(t, i) {
                var n=e.t=new WebSocket(t); n.binaryType="arraybuffer", n.onopen=function() {
                    e.t==n&&(console.log("Socket opened"), i())
                }

                , n.onclose=function() {
                    e.t==n&&(console.log("Socket closed"), e.ha())
                }

                , n.onerror=function(t) {
                    e.t==n&&(console.log("Socket error"), e.ha())
                }

                , n.onmessage=function(t) {
                    e.t==n&&e.F.ma(t.data)
                }
            }

            , e
        }

        function f() {
            return it
        }

        var u=(/iPad|iPhone|iPod/.test(navigator.userAgent)&&window.MSStream, atob("aHR0cHM6Ly9nYXRld2F5Lndvcm1hdGUuaW8=")), d=window.I18N_LANG; d||(d="en"); var p=void 0; switch(d) {
            case"uk":p="uk_UA"; break; case"de":p="de_DE"; break; case"fr":p="fr_FR"; break; case"ru":p="ru_RU"; break; case"es":p="es_ES"; break; default:p="en_US"
        }

        moment.locale(p); var l=2*Math.PI;  !function() {
            function t(t, i) {
                var e=parseInt(i)%2147483647; e<=0&&(e+=2147483646); for(var n=[t], o=0; o<t; o++)n[o]=o; for(var s=t; s; s--) {
                    var h=(e=16807*e%2147483647-1)%t, a=n[s-1]; n[s-1]=n[h], n[h]=a
                }

                return n
            }

            function i(i, e) {
                for(var n=t(i.length, e), o=[i.length], s=0; s<i.length; s++)o[s]=i.charAt(n[s]); return o.join("")
            }

            var e= {}

            ; e.encode=function(t, e) {
                return i(btoa(btoa(t)), e)
            }

            , e.decode=function(t, e) {
                return atob(atob(i(t, e)))
            }
        }

        ();  !function() {
            var t="Z2V0", i="=", e=t+"SW50", n=t+"RmxvYXQ", o=[atob(e+"OA=="), atob(e+"MTY"+i), atob(e+"MzI"+i), atob(n+"zMg=="), atob(n+"2NA==")]; DataView.prototype.na=function(t) {
                return this[o[0]](t)
            }

            , DataView.prototype.oa=function(t) {
                return this[o[1]](t)
            }

            , DataView.prototype.pa=function(t) {
                return this[o[2]](t)
            }

            , DataView.prototype.qa=function(t) {
                return this[o[3]](t)
            }

            , DataView.prototype.ra=function(t) {
                return this[o[4]](t)
            }
        }

        (); var g=function() {
            function t(t) {
                this.sa=t, this.ta= !1, this.ua=100
            }

            return t
        }

        (), b=function() {
            function t(t) {
                this.va= {}

                , this.wa=[], this.xa=null, this.ya=null, this.za= {
                    Aa:20, Ba:40, Ca:function() {
                        var t=window.document.createElement("canvas"); return t.width=80, t.height=80, t
                    }

                    ()
                }

                , this.Da= {}

                , this.Ea=null, this.Fa= {}

                , this.Ga= {}

                , this.Ha= {}

                , this.Ia= {}

                , this.Ja= {}

                , this.Ka= {}

                , this.La=null, this.Ma= {}

                , this.Na=null
            }

            function i(t, i) {
                for(var e=t.length, n=new Array(t.length), o=0; o<t.length; o++) {
                    var s=n[o]=new Image; s.onload=function() {
                        0==--e&&i(n)
                    }

                    , s.src=t[o]
                }
            }

            function e(t, i) {
                for(var e=t.length, n= {}

                    , o=0; o<t.length; o++) {
                    var s=t[o], h=n[s.name]=new Image; h.onload=function() {
                        0==--e&&i(n)
                    }

                    , h.src=s.src
                }
            }

            function n(t, i, e, n) {
                var o=parseInt(n.substring(1, 3), 16), s=parseInt(n.substring(3, 5), 16), h=parseInt(n.substring(5, 7), 16), a=window.document.createElement("canvas"); a.width=i, a.height=e; var r=a&&a.getContext?a.getContext("2d"):null; r.clearRect(0, 0, i, e), r.drawImage(t, 0, 0, i, e); for(var c=r.getImageData(0, 0, i, e), f=i*e, u=0; u<f; u++)c.data[4*u]*=o/256, c.data[4*u+1]*=s/256, c.data[4*u+2]*=h/256; return r.putImageData(c, 0, 0), a
            }

            return t.prototype.Oa=function(t) {
                var i=this.Da[t]; return i||this.Ea
            }

            , t.prototype.Pa=function(t) {
                var i=this.Fa[t]; return i||this.Fa[0]
            }

            , t.prototype.Qa=function(t) {
                var i=this.Ga[t]; return i||this.Ga[0]
            }

            , t.prototype.Ra=function(t) {
                var i=this.Ha[t]; return i||this.Ha[0]
            }

            , t.prototype.Sa=function(t) {
                var i=this.Ia[t]; return i||this.Ia[0]
            }

            , t.prototype.Ta=function(t) {
                var i=this.Ja[t]; return i||this.Ja[0]
            }

            , t.prototype.Ua=function(t) {
                var i=this.Ka[t]; return i||this.La
            }

            , t.prototype.Va=function(t) {
                var i=this.Ma[t]; return i||this.Na
            }

            , t.prototype.k=function(t) {
                var i=this; $.get(u+"/pub/assets/assets.json", function(e) {
                        i.va=e, i.Wa(t)
                    }

                )
            }

            , t.prototype.Wa=function(t) {
                function o() {
                    0==--a&&t()
                }

                function s(t, i) {
                    for(var e in t)t.hasOwnProperty(e)&&i(e, t[e])
                }

                var h=this, a=3; i(["/images/bg-pattern.png", "/images/bg-pattern-TEAM2.png"], function(t) {
                        h.xa=t[0], h.ya=t[1], o()
                    }

                ), i(["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABwUlEQVRIS73VB2sWQRDG8d/aoth7R7HEgt//k4hdUexGjSaR2OLKI3PhXmMB4RwYbt/b9+a/88zsbjOxtb/F773nP5tGnk++Dd5a63+K8VtA7z1Bt2Ib5mq8uYKt4Qs+4XPGrbVAN9gvAb33LdiBXeU7sR15H/uKj/iAlfLV1lrez9gGQO89q96NfTiA/diLQDIXy+oT/D0W8RbvsNxay9y6zQBq5XtwEEdxDEcKFGikikWa5Qr8Ci/wEm+wNM5kHVCaZ5WHcQKnyzM+hIDHgCW8xjM8Ls94IdkNNRkD8nEkOYmzOFfPUwUNIAWPpbABJNgTPMSDej5NZq21ZOkHoFoxBY0kCX4R8wUJIBlkflyDFDcZBJDgd3C3IJFsJS08ANJ+KWaCXcDl8vOVUebSVWndWFpytQqcFd/HrfJ7BV1sra0NgKwsqzyDS7iKKwjgeOk/7IGhQ7IXItPzAtzEDdzGo2SXjhoA0T/FjTxZ/bUCpA6RLcX/uaWzg9OqkSMSBXC9skhNFlKH/waYXKLJixyppmvT2gvTbbQCpMenOyoKkuN4msNu2D2THtcjyHQXzggy3ZU5vpEmu/Rnb9Z///UddRYCKBhTvLwAAAAASUVORK5CYII="], function(t) {
                        var i=t[0], e=new Array(9); e[0]=n(i, 8, 8, "#ff66aa"), e[1]=n(i, 8, 8, "#ff8888"), e[2]=n(i, 8, 8, "#ffaa66"), e[3]=n(i, 8, 8, "#aaff66"), e[4]=n(i, 8, 8, "#88ff88"), e[5]=n(i, 8, 8, "#66ffaa"), e[6]=n(i, 8, 8, "#66aaff"), e[7]=n(i, 8, 8, "#8888ff"), e[8]=n(i, 8, 8, "#aa66ff"), h.wa=e, o()
                    }

                ); var r=h.va, c=[]; s(r.textureDict, function(t, i) {
                        return c.push( {
                                name:t, src:u+i.url
                            }

                        )
                    }

                ), e(c, function(t) {
                        var i= {}

                        ; s(r.colorDict, function(t, e) {
                                i[t]=e
                            }

                        ); var e= {}

                        ; s(r.regionDict, function(i, n) {
                                var o=n.px||(n.pw||n.w)/2, s=n.py||(n.ph||n.h)/2, h=n.pw||n.w, a=n.ph||n.h; e[i]= {
                                    a:t[n.texture], b:n.x, c:n.y, d:n.w, e:n.h, Xa:o, Ya:s, Za:h, $a:a, f:o/h-.5-.5*n.w/h, g:s/a-.5-.5*n.h/a, i:n.w/h, j:n.h/a
                                }
                            }

                        ); for(var n=0; n<r.skinArrayDict.length; n++) {
                            var a=r.skinArrayDict[n]; h.Da[a.id]= {
                                _a:"#"+i[a.prime], ab:a.base.map(function(t) {
                                        return e[t]
                                    }

                                ), bb:a.glow.map(function(t) {
                                        return e[t]
                                    }

                                )
                            }
                        }

                        var c=r.skinUnknown; h.Ea= {
                            _a:"#"+i[c.prime], ab:c.base.map(function(t) {
                                    return e[t]
                                }

                            ), bb:c.glow.map(function(t) {
                                    return e[t]
                                }

                            )
                        }

                        , s(r.teamDict, function(t, n) {
                                t=parseInt(t), h.Fa[t]= {
                                    cb: {
                                        _a:"#"+i[n.skin.prime], bb:n.skin.glow.map(function(t) {
                                                return e[t]
                                            }

                                        )
                                    }

                                    , db: {
                                        bb:e[n.portion.glow]
                                    }

                                    , eb:n.name
                                }
                            }

                        ), s(r.eyesDict, function(t, i) {
                                t=parseInt(t), h.Ga[t]= {
                                    ab:i.base.map(function(t) {
                                            return e[t.region]
                                        }

                                    )
                                }
                            }

                        ), s(r.mouthDict, function(t, i) {
                                t=parseInt(t), h.Ha[t]= {
                                    ab:i.base.map(function(t) {
                                            return e[t.region]
                                        }

                                    )
                                }
                            }

                        ), s(r.glassesDict, function(t, i) {
                                t=parseInt(t), h.Ia[t]= {
                                    ab:i.base.map(function(t) {
                                            return e[t.region]
                                        }

                                    )
                                }
                            }

                        ), s(r.hatDict, function(t, i) {
                                t=parseInt(t), h.Ja[t]= {
                                    ab:i.base.map(function(t) {
                                            return e[t.region]
                                        }

                                    )
                                }
                            }

                        ), s(r.portionDict, function(t, i) {
                                t=parseInt(t), h.Ka[t]= {
                                    ab:e[i.base], bb:e[l.glow]
                                }
                            }

                        ); var f=r.portionUnknown; h.La= {
                            ab:e[f.base], bb:e[f.glow]
                        }

                        , s(r.abilityDict, function(t, i) {
                                t=parseInt(t), h.Ma[t]= {
                                    ab:e[i.base]
                                }
                            }

                        ); var u=r.abilityUnknown; h.Na= {
                            ab:e[u.base]
                        }

                        , o()
                    }

                )
            }

            , t
        }

        (), v=function() {
            function t(t) {
                this.fb=t, this.gb=t.get()[0], this.hb=a(this.gb), this.ib()
            }

            var i=[ {
                jb:l*Math.random(), kb:.1+.4*Math.random(), lb:1, mb:2, nb:0
            }

            , {
                jb:l*Math.random(), kb:.1+.4*Math.random(), lb:1.5, mb:1.5, nb:1
            }

            , {
                jb:l*Math.random(), kb:.1+.4*Math.random(), lb:2, mb:1, nb:2
            }

            , {
                jb:l*Math.random(), kb:.1+.4*Math.random(), lb:3, mb:2, nb:3
            }

            , {
                jb:l*Math.random(), kb:.1+.4*Math.random(), lb:2.5, mb:2.5, nb:4
            }

            , {
                jb:l*Math.random(), kb:.1+.4*Math.random(), lb:2, mb:3, nb:5
            }

            , {
                jb:l*Math.random(), kb:.1+.4*Math.random(), lb:5, mb:4, nb:6
            }

            , {
                jb:l*Math.random(), kb:.1+.4*Math.random(), lb:4.5, mb:4.5, nb:7
            }

            , {
                jb:l*Math.random(), kb:.1+.4*Math.random(), lb:4, mb:5, nb:8
            }

            ]; return t.prototype.ib=function() {
                var t=window.devicePixelRatio?window.devicePixelRatio:1; this.gb.width=t*this.fb.width()*.25, this.gb.height=t*this.fb.height()*.25
            }

            , t.prototype.ob=function(t) {
                var e=this.gb.width, n=this.gb.height; if(this.hb.setTransform(1, 0, 0, 1, 0, 0), this.hb.fillStyle="#000000", this.hb.fillRect(0, 0, e, n), it.pb.wa) {
                    this.hb.save(); for(var o=.8*Math.max(e, n), s=0; s<i.length; s++) {
                        this.hb.globalCompositeOperation="normal"; var h=i[s], a=Math.cos(h.lb*(8e-5*t)+h.jb), r=Math.sin(h.mb*(8e-5*t)); this.hb.globalAlpha=.2+.2*Math.cos(h.jb+h.kb*(.001*t)), this.hb.drawImage(it.pb.wa[h.nb], .5*e+.4*a*e-.5*o, .5*n+.2*r*n-.5*o, o, o)
                    }

                    this.hb.restore()
                }
            }

            , t
        }

        (), y=function() {
            function t() {
                this.qb=[], this.rb=0
            }

            t.prototype.sb=function(t) {
                if(this.rb+=t, this.rb>=1) {
                    var e=Math.floor(this.rb); this.rb-=e; var n=i.newScoreChangeString(e); this.qb.push(n)
                }
            }

            , t.prototype.P=function(t, i) {
                for(var e=0; e<this.qb.length; ) {
                    var n=this.qb[e]; n.tb+=i/2e3*n.ub, n.vb+=i/2e3*n.wb, n.vb>1&&(this.qb.splice(e, 1), e--), e++
                }
            }

            ; var i=function() {
                function t(t, i, e, n, o, s, h) {
                    this.xb=t, this.yb=i, this.tb=e, this.ub=n, this.zb=o, this.Ab=s, this.wb=h, this.vb=0
                }

                return t.newScoreChangeString=function(t) {
                    var e=void 0; e=t>0?"+"+t:t<0?"-"+t:"0"; var n=Math.min(1.5, .5+t/600), o=void 0; o=t<15?"#ffffff":t<165?"#f4d100":t<500?"#ed563f":"#f900f9"; var s=Math.random(), h=1+.5*Math.random(); return new i(e,  !0, .5, n, o, s, h)
                }

                , t.newKillString=function(t) {
                    return new i(t?"HEADSHOT":"KILL",  !1, .5, 1.2, t?"#ed900f9":"#ffffff", .5, t?1:1.5)
                }

                , t
            }

            (); return t
        }

        (), m= {
            Bb:0, Cb:16
        }

        , M=function() {
            function t() {
                this.Db=m.Bb, this.Eb=0, this.N=500, this.Fb=4e3, this.Gb=7e3
            }

            return t.TEAM_DEFAULT=0, t.prototype.Hb=function() {
                return 1.02*this.N
            }

            , t
        }

        (), T=function() {
            function e(t) {
                this.fb=t, this.gb=t.get()[0], this.hb=a(this.gb), this.Ib=window.document.createElement("canvas"), this.Jb=a(this.Ib), this.Kb=Math.floor(360*Math.random()), this.Lb=100, this.Mb=this.hb.createPattern(f().pb.xa, "repeat"), this.Nb=this.hb.createPattern(f().pb.ya, "repeat"), this.Ob=new j, this.Pb= !0, this.ib()
            }

            var n=1, o=4; return e.prototype.Qb=function(t) {
                this.Ob=t
            }

            , e.prototype.Rb=function(t, i) {
                this.Pb=i
            }

            , e.prototype.ib=function() {
                var t=window.devicePixelRatio?window.devicePixelRatio:1; this.gb.width=this.Ib.width=t*this.fb.width(), this.gb.height=this.Ib.height=t*this.fb.height()
            }

            , e.prototype.ob=function(t, i) {
                var e=this.fb.width(), n=this.fb.height(), o=Math.min(Math.min(e, n), .625*Math.max(e, n)); this.Lb=h(5, 500, this.Lb+i/1e3*(o/it.Sb.K-this.Lb)), this.Kb=this.Kb+.01*i, this.Kb>360&&(this.Kb=this.Kb%360), this.Tb(t), this.Ub(t)
            }

            , e.prototype.Vb=function(t, i, e, s, h) {
                t=""+t, h||(h=n); var a=this.Jb.measureText(t).width; if(s>0)for(; a>s; )t=t.substring(0, t.length-1), a=this.Jb.measureText(t).width; switch(h) {
                    case n:return this.Jb.fillText(t, i, e), a; case 2:return this.Jb.fillText(t, i+(s-a)/2, e), a; case o:return this.Jb.fillText(t, i+s-a, e), a
                }
            }

            , e.prototype.Tb=function(t) {
                var i=window.devicePixelRatio?window.devicePixelRatio:1, e=this.Jb, n=it.Sb, o=this.fb.width(), s=this.fb.height(); if(null !=n.G.Wb) {
                    var h=n.G.Wb.Yb[0].Xb(), a=n.G.Wb.Yb[0].Zb(); e.setTransform(i, 0, 0, i, 0, 0), e.clearRect(0, 0, o, s), e.save(), e.globalAlpha=.8, e.fillStyle="#000000", e.strokeStyle="#f7941d"; var r=it.pb.za.Aa, c=it.pb.za.Ba; e.lineWidth=2, e.pathCircle(r+c, r+c, c), e.fill(), e.stroke(), e.lineWidth=2, e.beginPath(), e.moveTo(r+c, r), e.lineTo(r+c, r+2*c), e.closePath(), e.stroke(), e.beginPath(), e.moveTo(r, r+c), e.lineTo(r+2*c, r+c), e.closePath(), e.stroke(), e.globalAlpha=.5, e.drawImage(it.pb.za.Ca, r, r, 2*c, 2*c), e.globalAlpha=.5, e.fillStyle="#000000", e.pathCircle(r+c+h/n.D.N*c, r+c+a/n.D.N*c, .1*c), e.fill(), e.globalAlpha=.9, e.fillStyle="#f7941d", e.pathCircle(r+c+h/n.D.N*c, r+c+a/n.D.N*c, .05*c), e.fill(); var f=130, u=.5+.5*Math.cos(l*(t/1e3/1.6%1)); for(var d in n.G.$b) {
                        var p=n.G.$b[d]; if(p&&p.ta) {
                            var g=p.ua; e.globalAlpha=1-g+g*u; var b=it.pb.Va(p.sa).ab; e.drawRegion(b, 20, 20, f, 30), f+=40
                        }
                    }

                    this._b(); for(var v=o/2, y=0; y<n.C.qb.length; y++) {
                        var m=n.C.qb[y]; e.fillStyle=m.zb, e.globalAlpha=.5*Math.sin(Math.PI*m.vb), e.font=Math.floor(48*m.tb)+"px PT Sans"; var M=o*(.25+.5*m.Ab), T=m.yb?.5*s*(1-m.vb):.5*s*(2-m.vb); this.Vb(m.xb, M-.5*v, T, v, 2)
                    }

                    e.restore()
                }
            }

            , e.prototype._b=function() {
                function e(t, i, e) {
                    s.Vb(t, f, u, 30, o), s.Vb(i, f+35, u, 100, n), s.Vb(e, f+140, u, 80, o)
                }

                var s=this, h=this.Ob, a=this.Jb, r=it.Sb, c=this.fb.width(), f=c-225, u=12; a.font="12px PT Sans"; var d=it.Sb.D.Db==m.Cb; a.globalAlpha=1, a.fillStyle="#ffffff", e("", t("index.game.leader.top10"), "("+r.M+" online)"), u+=12, h.ac.length>0&&(u+=8); for(var p=0; p<h.ac.length; p++) {
                    var l=h.ac[p], g=it.pb.Pa(l.bc); a.globalAlpha=.8, a.fillStyle=g.cb._a, e(p+1, i(g.eb), Math.floor(l.cc)), u+=12
                }

                h.dc.length>0&&(u+=8); for(var b=0; b<h.dc.length; b++) {
                    var v=h.dc[b], y=r.D.Eb==v.ec, M=y?r.G:r.I[v.ec], T=y?"#ffffff":d?it.pb.Pa(null !=M?M.$.fc:0).cb._a:it.pb.Oa(null !=M?M.$.gc:0)._a, w=y||this.Pb?null !=M?M.$.eb:"?":"---"; y&&(u+=8), a.globalAlpha=y?1:.8, a.fillStyle=T, e(b+1, w, Math.floor(v.cc)), u+=12, y&&(u+=8)
                }

                r.L>h.dc.length&&(u+=8, a.globalAlpha=1, a.fillStyle="#ffffff", e(r.L, r.G.$.eb, Math.floor(r.G.cc)), u+=12, u+=8)
            }

            , e.prototype.Ub=function(t) {
                var i=f(), e=window.devicePixelRatio?window.devicePixelRatio:1, n=this.hb, o=i.Sb, s=this.fb.width(), h=this.fb.height(), a=e*s, r=e*h; if(null !=o.G.Wb) {
                    var c=o.G.Wb.Yb[0].Xb(), u=o.G.Wb.Yb[0].Zb(); n.setTransform(1, 0, 0, 1, 0, 0), n.clearRect(0, 0, a, r); var d=this.Lb*e; n.save(), n.globalAlpha=.3, n.fillStyle=o.D.Db==m.Bb?this.Mb:this.Nb; n.setTransform(.016*d, 0, 0, .016*d, .5*a-c*d, .5*r-u*d), n.fillRect(-(.5*s-c)/.016, -(.5*h-u)/.016, s/.016, h/.016), n.restore(), n.setTransform(d, 0, 0, d, .5*a-c*d, .5*r-u*d), n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.globalCompositeOperation="lighter", n.fillStyle="hsl("+Math.floor(this.Kb)+", 100%, 75%)", n.globalAlpha=.1, n.fillRect(0, 0, a, r), n.restore(), n.save(), n.globalAlpha=.3, n.strokeStyle="red", n.lineWidth=.2, n.beginPath(), n.moveTo(o.D.N, 0); for(var p=0; p<=160; p++) {
                        var g=l*p/160; n.lineTo(o.D.N*Math.cos(g), o.D.N*Math.sin(g))
                    }

                    n.closePath(), n.stroke(), n.restore(), n.save(), n.globalCompositeOperation="lighter"; for(var b in o.H) {
                        var v=o.H[b]; v&&v.ic.hc(n)
                    }

                    n.globalCompositeOperation="source-over"; for(var y in o.H) {
                        var M=o.H[y]; M&&M.ic.jc(n)
                    }

                    n.restore(), o.G.W&&o.G.Wb.kc(n); for(var T in o.I) {
                        var w=o.I[T]; if(w&&w.W) {
                            var A=w.Wb; null !=A&&A.kc(n), this.Pb&&function(t) {
                                var e=t.Wb; if(null !=e&&t.W&&e.Yb[0].lc()) {
                                    var s=e.Yb[0].Xb(), h=e.Yb[0].Zb(); n.save(), n.font="20px PT Sans", n.globalAlpha=.6*t.Y, n.fillStyle=o.D.Db==m.Bb?i.pb.Oa(t.$.gc)._a:i.pb.Pa(t.$.fc).cb._a, n.translate(s, h+3*t.S), n.scale(.015, .015), n.fillText(t.$.eb, 0, 0), n.restore()
                                }
                            }

                            (w)
                        }
                    }

                    n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(this.Ib, 0, 0, a, r)
                }
            }

            , e
        }

        (), w=function() {
            function t(t) {
                this.Sb=t, this.mc=[], this.nc=0
            }

            t.prototype.ma=function(t) {
                this.mc.push(new DataView(t))
            }

            , t.prototype.fa=function() {
                this.nc=0, this.mc=[]
            }

            , t.prototype.Q=function() {
                for(var t=0; t<10; t++) {
                    if(0==this.mc.length)return; var i=this.mc.shift(); try {
                        this.oc(i)
                    }

                    catch(t) {
                        throw console.log("DataReader error: "+t), t
                    }
                }
            }

            , t.prototype.oc=function(t) {
                switch(255&t.na(0)) {
                    case 0:return void this.pc(t, 1); case 1:return void this.qc(t, 1); case 2:return void this.rc(t, 1); case 3:return void this.sc(t, 1); case 4:return void this.tc(t, 1); case 5:return void this.uc(t, 1); case 6:return void this.vc(t, 1)
                }
            }

            , t.prototype.pc=function(t, i) {
                console.log("sgp1"), this.Sb.D.Db=t.na(i), i+=1; var e=t.oa(i); return i+=2, this.Sb.D.Eb=e, this.Sb.G.$.Z=e, this.Sb.D.N=t.qa(i), i+=4, this.Sb.D.Fb=t.qa(i), i+=4, this.Sb.D.Gb=t.qa(i), i+=4, it.yc.xc.wc.Rb(this.Sb.D, it.yc.Ac.zc()), console.log("sgp2"), i
            }

            , t.prototype.qc=function(t, i) {
                var e=t.oa(i); i+=2; var n=Date.now(); this.nc=n+e; var o=void 0; o=this.Bc(t, i), i+=this.Cc(o); for(var s=0; s<o; s++)i=this.Dc(t, i); o=this.Bc(t, i), i+=this.Cc(o); for(var h=0; h<o; h++)i=this.Ec(t, i); o=this.Bc(t, i), i+=this.Cc(o); for(var a=0; a<o; a++)i=this.Fc(t, i); o=this.Bc(t, i), i+=this.Cc(o); for(var r=0; r<o; r++)i=this.Gc(t, i); o=this.Bc(t, i), i+=this.Cc(o); for(var c=0; c<o; c++)i=this.Hc(t, i); o=this.Bc(t, i), i+=this.Cc(o); for(var f=0; f<o; f++)i=this.Ic(t, i); o=this.Bc(t, i), i+=this.Cc(o); for(var u=0; u<o; u++)i=this.Jc(t, i); o=this.Bc(t, i), i+=this.Cc(o); for(var d=0; d<o; d++)i=this.Kc(t, i); return i=this.Lc(t, i), this.Sb.ca(), i
            }

            , t.prototype.Gc=function(t, i) {
                var e=new C.Config; e.Z=t.oa(i), i+=2, e.fc=this.Sb.D.Db==m.Cb?t.na(i++):M.TEAM_DEFAULT, e.gc=t.oa(i), i+=2, e.Mc=t.oa(i), i+=2, e.Nc=t.oa(i), i+=2, e.Oc=t.oa(i), i+=2, e.Pc=t.oa(i), i+=2; var n=t.na(i); i+=1; for(var o="", s=0; s<n; s++)o+=String.fromCharCode(t.oa(i)), i+=2; if(e.eb=o, this.Sb.D.Eb==e.Z)this.Sb.G.Qc(e); else {
                    var h=new C(this.Sb.D); h.Qc(e), this.Sb.I[e.Z]=h
                }

                return i
            }

            , t.prototype.Hc=function(t, i) {
                var e=t.oa(i); i+=2; var n=this.Rc(e); return void 0 !==n&&(n.X= !1), i
            }

            , t.prototype.Kc=function(t, i) {
                var e=t.oa(i); i+=2; var n=e==this.Sb.D.Eb?null:this.Sb.I[e], o=t.na(i); i+=1; var s= ! !(1&o); if( ! !(2&o)) {
                    var h=t.qa(i); i+=4, n&&n.Sc(h)
                }

                var a=this.Tc(t.na(i++), t.na(i++), t.na(i++)), r=this.Tc(t.na(i++), t.na(i++), t.na(i++)); n&&n.Uc(this.nc, a, r, s); var c=this.Bc(t, i); if(i+=this.Cc(c), n)for(var f in n.$b) {
                    var u=n.$b[f]; u&&(u.ta= !1)
                }

                for(var d=0; d<c; d++) {
                    var p=t.na(i); i++; var l=t.na(i); if(i++, n) {
                        var b=n.$b[p]; b||(b=n.$b[p]=new g(p)), b.ta= !0, b.ua=Math.min(1, Math.max(0, l/100))
                    }
                }

                return i
            }

            , t.prototype.Lc=function(t, i) {
                var e=this.Sb.G, n=t.na(i); i+=1; var o= ! !(1&n), s= ! !(2&n), h= ! !(4&n); if(s) {
                    var a=e.cc; e.Sc(t.qa(i)), i+=4, a=e.cc-a, a>0&&this.Sb.C.sb(a)
                }

                h&&(this.Sb.J=t.qa(i), i+=4), e.Uc(this.nc, this.Tc(t.na(i++), t.na(i++), t.na(i++)), this.Tc(t.na(i++), t.na(i++), t.na(i++)), o); var r=this.Bc(t, i); i+=this.Cc(r); for(var c in e.$b) {
                    var f=e.$b[c]; f&&(f.ta= !1)
                }

                for(var u=0; u<r; u++) {
                    var d=t.na(i); i++; var p=t.na(i); i++; var l=e.$b[d]; l||(l=e.$b[d]=new g(d)), l.ta= !0, l.ua=Math.min(1, Math.max(0, p/100))
                }
            }

            , t.prototype.Ic=function(t, i) {
                var e=this, n=t.oa(i); i+=2; var o=this.Rc(n), s=t.qa(i); i+=4; var h=this.Bc(t, i); return i+=this.Cc(h), o?(o.Sc(s), o.Vc(this.nc, function() {
                            return e.Tc(t.na(i++), t.na(i++), t.na(i++))
                        }

                        , h), o.Wc( !0)):i+=6*h, i
            }

            , t.prototype.Jc=function(t, i) {
                var e=t.oa(i); i+=2; var n=this.Sb.I[e]; return n&&n.X&&n.Wc( !1), i
            }

            , t.prototype.Dc=function(t, i) {
                var e=new I.Config; e.Z=t.pa(i), i+=4, e.fc=this.Sb.D.Db==m.Cb?t.na(i++):M.TEAM_DEFAULT; var n=this.Tc(t.na(i++), t.na(i++), t.na(i++)); e.gc=t.na(i++); var o=new I(e); return o.Xc=1, o.Ba=n, o.Yc(this.Zc(e.Z), this.$c(e.Z),  !0), this.Sb.H[e.Z]=o, i
            }

            , t.prototype.Ec=function(t, i) {
                var e=t.pa(i); i+=4; var n=this.Sb.H[e]; return n&&(n.Xc=0, n.Ba=1.5*n.Ba, n._= !0), i
            }

            , t.prototype.Fc=function(t, i) {
                var e=t.pa(i); i+=4; var n=t.oa(i); i+=2; var o=this.Sb.H[e]; if(o) {
                    o.Xc=0, o.Ba=.1*o.Ba, o._= !0; var s=this.Rc(n); s&&s.W&&o.Yc(s.T[0], s.T[1],  !1)
                }

                return i
            }

            ; var i=[34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34]; return t.prototype.rc=function(t) {
                for(var e=f().pb.za.Ca, n=e&&e.getContext?e.getContext("2d"):null, o=n.getImageData(0, 0, 80, 80), s=i[0], h=80-s, a=0, r=0; r<628; r++)for(var c=t.na(1+r), u=0; u<8; u++) {
                    var d=0 !=(c>>u&1), p=4*(s+80*a); d?(o.data[p]=255, o.data[p+1]=255, o.data[p+2]=255, o.data[p+3]=255):o.data[p+3]=0, ++s>=h&&++a<80&&(s=i[a], h=80-s)
                }

                n.putImageData(o, 0, 0)
            }

            , t.prototype.tc=function(t, i) {
                var e=t.pa(i); i+=4, console.log("Wormy Error: "+e)
            }

            , t.prototype.uc=function(t, i) {
                console.log("g.o"), this.Sb.da()
            }

            , t.prototype.vc=function(t, i) {
                t.oa(i); i+=2; t.na(i); i+=1
            }

            , t.prototype.sc=function(t, i) {
                this.Sb.M=t.oa(i), i+=2, this.Sb.L=t.oa(i), i+=2; var e=new j; e.dc=[]; for(var n=t.na(i++), o=0; o<n; o++) {
                    var s=t.oa(i); i+=2; var h=t.qa(i); i+=4, e.dc.push(j._c(s, h))
                }

                if(e.ac=[], this.Sb.D.Db==m.Cb)for(var a=t.na(i++), r=0; r<a; r++) {
                    var c=t.na(i); i+=1; var f=t.qa(i); i+=4, e.ac.push(j.ad(c, f))
                }

                it.yc.xc.wc.Qb(e)
            }

            , t.prototype.Rc=function(t) {
                return t==this.Sb.D.Eb?this.Sb.G:this.Sb.I[t]
            }

            , t.prototype.Tc=function(t, i, e) {
                return 1e4*((16777215&(255&e|i<<8&65280|t<<16&16711680))/8388608-1)
            }

            , t.prototype.Zc=function(t) {
                return((65535&t)/32768-1)*this.Sb.D.Hb()
            }

            , t.prototype.$c=function(t) {
                return((t>>16&65535)/32768-1)*this.Sb.D.Hb()
            }

            , t.prototype.Bc=function(t, i) {
                var e=t.na(i); if(0==(128&e))return e; var n=t.na(i+1); if(0==(128&n))return n|e<<7&16256; var o=t.na(i+2); if(0==(128&o))return o|n<<7&16256|e<<14&2080768; var s=t.na(i+3); return 0==(128&s)?s|o<<7&16256|n<<14&2080768|e<<21&266338304:void 0
            }

            , t.prototype.Cc=function(t) {
                return t<128?1:t<16384?2:t<2097152?3:t<268435456?4:void 0
            }

            , t
        }

        (), A=function() {
            function t(t) {
                this.bd=t
            }

            return t.cd=function() {
                return new A(null)
            }

            , t.dd=function(t) {
                return new A(t)
            }

            , t.prototype.ed=function() {
                return this.bd
            }

            , t.prototype.fd=function() {
                return null !=this.bd
            }

            , t.prototype.gd=function(t) {
                null !=this.bd&&t(this.bd)
            }

            , t
        }

        (), I=function() {
            function t(t) {
                this.$=t, this.hd=t.gc>=80, this.aa=0, this.ba=0, this.jd=0, this.kd=0, this.Ba=0, this.Xc=0, this._= !1, this.ld=0, this.md=0, this.Y=1, this.jb=2*Math.PI*Math.random(), this.ic=new k, this.ic.nd(it.pb.Ua(this.$.gc), this.$.fc==M.TEAM_DEFAULT?null:it.pb.Pa(this.$.fc), it.Sb.D.Db)
            }

            return t.prototype.Yc=function(t, i, e) {
                this.aa=t, this.ba=i, e&&(this.jd=t, this.kd=i)
            }

            , t.prototype.U=function(t, i) {
                var e=i/200; this.ld=this.ld+.5*e*(this.Ba-this.ld); var n=(1.5+.3*Math.cos(this.jb+t/200))*this.Ba; this.md=this.md+e*(n-this.md), this.Y=h(0, 1, this.Y+e*(this.Xc-this.Y)), this.ic.pd.od(2*(this.hd?.65:1)*Math.min(4, this.md)), this.ic.pd.qd(2*(this.hd?.6:Math.min(.5, this.ld))), this.ic.pd.rd((this.hd?.9:.3)*this.Y), this.ic.pd.sd(this.Y)
            }

            , t.prototype.V=function(t, i) {
                var e=2*i/1e3; this.jd=this.jd*(1-e)+this.aa*e, this.kd=this.kd*(1-e)+this.ba*e, this.ic.pd.td(this.jd), this.ic.pd.ud(this.kd)
            }

            , t.Config=function() {
                function t() {
                    this.Z=0, this.fc=M.TEAM_DEFAULT, this.gc=0
                }

                return t
            }

            (), t
        }

        (), k=function() {
            function t() {
                this.pd=new i(new N, new N)
            }

            t.prototype.nd=function(t, i, e) {
                var n=t.ab; this.pd.wd.vd(n); var o=e==m.Cb&&null !=i?i.bb:t.bb; this.pd.xd.vd(o)
            }

            , t.prototype.hc=function(t) {
                this.pd.xd.yd(t, this.pd.zd)
            }

            , t.prototype.jc=function(t) {
                this.pd.wd.yd(t, this.pd.Ad)
            }

            ; var i=function() {
                function t(t, i) {
                    this.wd=t, this.xd=i, this.Ad=0, this.zd=0
                }

                return t.prototype.td=function(t) {
                    this.wd.Bd.b=t, this.xd.Bd.b=t
                }

                , t.prototype.ud=function(t) {
                    this.wd.Bd.c=t, this.xd.Bd.c=t
                }

                , t.prototype.sd=function(t) {
                    this.Ad=t
                }

                , t.prototype.rd=function(t) {
                    this.zd=t
                }

                , t.prototype.qd=function(t) {
                    this.wd.Dd.Cd=t, this.wd.Dd.Ed=t
                }

                , t.prototype.od=function(t) {
                    this.xd.Dd.Cd=t, this.xd.Dd.Ed=t
                }

                , t
            }

            (); return t
        }

        (), S=function() {
            function t(t) {
                this.Fd=0, this.Gd=0, this.Hd=0, this.Id=0, this.Jd=0, this.Kd=[]
            }

            function i(t, i) {
                var n=it.pb.va; if("SKIN"===i) {
                    var o=e(n.skinArrayDict, t); return o<0?null:n.skinArrayDict[o]
                }

                switch(i) {
                    case"EYES":return n.eyesDict[t]; case"MOUTH":return n.mouthDict[t]; case"GLASSES":return n.glassesDict[t]; case"HAT":return n.hatDict[t]
                }

                return null
            }

            function e(t, i) {
                for(var e=0; e<t.length; e++)if(t[e].id==i)return e; return-1
            }

            return t.prototype.k=function() {}

            , t.prototype.Ld=function(t) {
                switch(t) {
                    case"SKIN":return this.Fd; case"EYES":return this.Gd; case"MOUTH":return this.Hd; case"GLASSES":return this.Id; case"HAT":return this.Jd
                }

                return 0
            }

            , t.prototype.Md=function(t) {
                this.Kd.push(t), this.Nd()
            }

            , t.prototype.Od=function() {
                for(var t=it.pb.va, i=[], e=0; e<t.skinArrayDict.length; e++) {
                    var n=t.skinArrayDict[e]; this.Pd(n.id, "SKIN")&&i.push(n)
                }

                return 0==i.length?0:i[parseInt(i.length*Math.random())].id
            }

            , t.prototype.Qd=function() {
                var t=it.pb.va.skinArrayDict, i=e(t, this.Fd); if( !(i<0)) {
                    for(var n=i+1; n<t.length; n++)if(this.Pd(t[n].id, "SKIN"))return this.Fd=t[n].id, void this.Nd(); for(var o=0; o<i; o++)if(this.Pd(t[o].id, "SKIN"))return this.Fd=t[o].id, void this.Nd()
                }
            }

            , t.prototype.Rd=function() {
                var t=it.pb.va.skinArrayDict, i=e(t, this.Fd); if( !(i<0)) {
                    for(var n=i-1; n>=0; n--)if(this.Pd(t[n].id, "SKIN"))return this.Fd=t[n].id, void this.Nd(); for(var o=t.length-1; o>i; o--)if(this.Pd(t[o].id, "SKIN"))return this.Fd=t[o].id, void this.Nd()
                }
            }

            , t.prototype.Sd=function(t, i) {
                if(this.Pd(t, i))switch(i) {
                    case"SKIN":return void(this.Fd !=t&&(this.Fd=t, this.Nd())); case"EYES":return void(this.Gd !=t&&(this.Gd=t, this.Nd())); case"MOUTH":return void(this.Hd !=t&&(this.Hd=t, this.Nd())); case"GLASSES":return void(this.Id !=t&&(this.Id=t, this.Nd())); case"HAT":return void(this.Jd !=t&&(this.Jd=t, this.Nd()))
                }
            }

            , t.prototype.Pd=function(t, e) {
                var n=i(t, e); return null !=n&&(0==n.price&& !n.nonbuyable||it.Ud.Td(t, e))
            }

            , t.prototype.Nd=function() {
                for(var t=0; t<this.Kd.length; t++)this.Kd[t]()
            }

            , t
        }

        (), D=function() {
            function t() {
                this.xc=null, this.Vd=null, this.Wd=null, this.Xd=null, this.Yd=null, this.Ac=null, this.Zd=null, this.$d=null, this._d=null, this.ae=null, this.be=null, this.ce=null, this.de=[], this.ee=null
            }

            function i(t, i) {
                if(0 !=i) {
                    var e=t[i]; o(t, 0, 1, i), t[0]=e
                }
            }

            function e(t, i) {
                if(i !=t.length+1) {
                    var e=t[i]; o(t, i+1, i, t.length-i-1), t[t.length-1]=e
                }
            }

            function n(t, i) {
                for(var e=0; e<t.length; e++)if(t[e]==i)return e; return-1
            }

            function o(t, i, e, n) {
                t.copyWithin(e, i, i+n)
            }

            return t.prototype.k=function() {
                this.de=[this.xc=new Y, this.Vd=new W, this.Wd=new G, this.Xd=new R, this.Yd=new H, this.Ac=new F, this.Zd=new V, this.$d=new K, this._d=new Z, this.ae=new _, this.be=new E, this.ce=new B], this.ee=new v(U.fe)
            }

            , t.prototype.ob=function(t, i) {
                for(var e=this.de.length-1; e>=0; e--)this.de[e].ob(t, i); this.de[0] !=this.xc&&this.de[0] !=this.ce&&null !=this.ee&&this.ee.ob(t, i)
            }

            , t.prototype.ib=function() {
                for(var t=this.de.length-1; t>=0; t--)this.de[t].ib(); null !=this.ee&&this.ee.ib()
            }

            , t.prototype.ge=function(t) {
                var e=n(this.de, t); e<0||(this.de[0].he(), i(this.de, e), this.ie())
            }

            , t.prototype.je=function() {
                this.de[0].he(); do {
                    e(this.de, 0)
                }

                while(this.de[0].sa !=z.ke); this.ie()
            }

            , t.prototype.ie=function() {
                var t=this.de[0]; t.le(), t.me(), t.sa==z.ke&&this.ae.ne()&&this.ge(this.ae)
            }

            , t
        }

        (), j=(function() {
                function t() {
                    this.oe= !1, this.pe= !1, this.eb="", this.cc=0, this.zb="#ffffff"
                }
            }

            (), function() {
                function t() {
                    this.dc=[], this.ac=[]
                }

                return t._c=function(t, i) {
                    return {
                        ec:t, cc:i
                    }
                }

                , t.ad=function(t, i) {
                    return {
                        bc:t, cc:i
                    }
                }

                , t
            }

            ()), N=function() {
            function t() {
                this.qe=null, this.W= !0, this.Bd= {
                    b:0, c:0
                }

                , this.Dd= {
                    Cd:0, Ed:0
                }

                , this.re=0
            }

            return t.prototype.vd=function(t) {
                this.qe=t
            }

            , t.prototype.yd=function(t, i) {
                this.W&&null !=this.qe&&(t.globalAlpha=i, 0==this.re?t.drawRegion(this.qe, .5*this.Dd.Cd, .5*this.Dd.Ed, this.Bd.b, this.Bd.c):t.drawRegionTransformed(this.qe, .5*this.Dd.Cd, .5*this.Dd.Ed, this.Bd.b, this.Bd.c, this.re))
            }

            , t
        }

        (), L=function() {
            function t(t) {
                this.se=[], this.te=[], this.ue= !1, this.ve="guest", this.we= {}

                , this.xe=null
            }

            return t.prototype.k=function() {
                this.ye()
            }

            , t.prototype.ze=function() {
                return this.ue?this.we.userId:""
            }

            , t.prototype.Ae=function() {
                return this.ue?this.we.username:""
            }

            , t.prototype.Be=function() {
                return this.ue?this.we.nickname:""
            }

            , t.prototype.Ce=function() {
                return this.ue?this.we.avatarUrl:"/images/guest-avatar.png"
            }

            , t.prototype.De=function() {
                return this.ue?this.we.coins:0
            }

            , t.prototype.Ee=function() {
                return this.ue?this.we.level:1
            }

            , t.prototype.Fe=function() {
                return this.ue?this.we.expOnLevel:0
            }

            , t.prototype.Ge=function() {
                return this.ue?this.we.expToNext:50
            }

            , t.prototype.He=function() {
                return this.ue?this.we.skinId:0
            }

            , t.prototype.Ie=function() {
                return this.ue?this.we.eyesId:0
            }

            , t.prototype.Je=function() {
                return this.ue?this.we.mouthId:0
            }

            , t.prototype.Ke=function() {
                return this.ue?this.we.glassesId:0
            }

            , t.prototype.Le=function() {
                return this.ue?this.we.hatId:0
            }

            , t.prototype.Me=function() {
                return this.ue?this.we.highScore:0
            }

            , t.prototype.Ne=function() {
                return this.ue?this.we.bestSurvivalTimeSec:0
            }

            , t.prototype.Oe=function() {
                return this.ue?this.we.kills:0
            }

            , t.prototype.Pe=function() {
                return this.ue?this.we.headShots:0
            }

            , t.prototype.Qe=function() {
                return this.ue?this.we.sessionsPlayed:0
            }

            , t.prototype.Re=function() {
                return this.ue?this.we.totalPlayTimeSec:0
            }

            , t.prototype.Se=function() {
                return this.ue?this.we.regDate: {}
            }

            , t.prototype.Te=function(t) {
                this.se.push(t)
            }

            , t.prototype.Ue=function(t) {
                this.te.push(t)
            }

            , t.prototype.Td=function(t, i) {
                var e=this.we.propertyList; if( !e)return !1; for(var n=0; n<e.length; n++) {
                    var o=e[n]; if(o.id==t&&o.type===i)return !0
                }

                return !1
            }

            , t.prototype.Ve=function() {
                return this.ue
            }

            , t.prototype.We=function() {
                return this.ve
            }

            , t.prototype.Xe=function() {
                return this.we
            }

            , t.prototype.Ye=function(t) {
                this.we=t, this.Ze()
            }

            , t.prototype.$e=function(t) {
                var i=this; this.ue&&this._e(function(e) {
                        if(e) {
                            var n=i.De(), o=i.Ee(); i.we=e, i.Ze(); var s=i.De(), h=i.Ee(); h>1&&h !=o&&it.yc.ae.af(new q(h)); var a=s-n; a>=20&&it.yc.ae.af(new X(a))
                        }

                        t&&t()
                    }

                )
            }

            , t.prototype._e=function(t) {
                $.get(u+"/pub/wuid/"+this.ve+"/getUserData", function(i) {
                        t(i.user_data)
                    }

                )
            }

            , t.prototype.bf=function(t, i, e) {
                var n=this; $.get(u+"/pub/wuid/"+this.ve+"/buyProperty?id="+t+"&type="+i, function(t) {
                        1200==t.code?n.$e(e):e()
                    }

                ).fail(function() {
                        e()
                    }

                )
            }

            , t.prototype.cf=function() {
                var t=this; if(this.df(), "undefined"==typeof FB)return void this.ef(); FB.getLoginStatus(function(i) {
                        if("connected"===i.status)return void(i.authResponse&&i.authResponse.accessToken?t.ff("facebook", "fb_"+i.authResponse.accessToken):t.ef()); FB.login(function(i) {
                                if("connected"===i.status&&i.authResponse&&i.authResponse.accessToken)return void t.ff("facebook", "fb_"+i.authResponse.accessToken); t.ef()
                            }

                        )
                    }

                )
            }

            , t.prototype.gf=function() {
                var t=this; if(this.df(), void 0===GoogleAuth)return void this.ef(); GoogleAuth.then(function() {
                        if(GoogleAuth.isSignedIn.get()) {
                            var i=GoogleAuth.currentUser.get(); return void t.ff("google", "gg_"+i.getAuthResponse().id_token)
                        }

                        GoogleAuth.currentUser.listen(function(i) {
                                i.isSignedIn()?t.ff("google", "gg_"+i.getAuthResponse().id_token):t.ef()
                            }

                        ),
                        GoogleAuth.signIn()
                    }

                )
            }

            , t.prototype.hf=function() {
                var t=this; this.df(), VK.Auth.getLoginStatus(function(i) {
                        if(i.session)return void(i.session.sid?t.ff("vkontakte", "vk_"+i.session.sid):t.ef()); VK.Auth.login(function(i) {
                                if(i.session&&i.session.sid)return void t.ff("vkontakte", "vk_"+i.session.sid); t.ef()
                            }

                        )
                    }

                )
            }

            , t.prototype.df=function() {
                if(console.log("iSI: "+this.ue), this.ue) {
                    var t=this.xe; switch(this.ue= !1, this.ve="guest", this.we= {}

                        , this.xe=null, setCookie("account_type", this.xe, 60), t) {
                        case"facebook":return void this.if(); case"google":return void this.jf(); case"vkontakte":return void this.kf()
                    }

                    this.ye()
                }
            }

            , t.prototype.lf=function() {
                "facebook"==getCookie("account_type")&&(console.log("rs:fb"), this.cf())
            }

            , t.prototype.mf=function() {
                "google"==getCookie("account_type")&&(console.log("rs:gg"), this.gf())
            }

            , t.prototype.nf=function() {
                "vkontakte"==getCookie("account_type")&&(console.log("rs:vk"), this.hf())
            }

            , t.prototype.ye=function() {
                for(var t=0; t<this.se.length; t++)this.se[t](); this.Ze()
            }

            , t.prototype.Ze=function() {
                for(var t=0; t<this.te.length; t++)this.te[t]()
            }

            , t.prototype.ff=function(t, i) {
                var e=this; $.get(u+"/pub/wuid/"+i+"/login", function(n) {
                        n&&n.user_data?(e.ue= !0, e.ve=i, e.we=n.user_data, e.xe=t, setCookie("account_type", e.xe, 60), e.ye()):e.ef()
                    }

                ).fail(function() {
                        e.ef()
                    }

                )
            }

            , t.prototype.ef=function() {
                this.df()
            }

            , t.prototype.if=function() {
                console.log("lo:fb"), FB.logout(function() {}

                ), this.ye()
            }

            , t.prototype.jf=function() {
                console.log("lo:gg"), GoogleAuth.signOut(), this.ye()
            }

            , t.prototype.kf=function() {
                console.log("lo:vk"), VK.Auth.logout(function() {}

                ), this.ye()
            }

            , t
        }

        (), C=function() {
            function t(t) {
                this.D=t, this.$=new C.Config, this.W= !1, this.X= !0, this.pf= !1, this.S=0, this.qf=0, this.Y=1, this.rf=0, this.cc=0, this.$b= {}

                , this.sf=0, this.tf=0, this.uf=new Float32Array(2*i), this.vf=new Float32Array(2*i), this.T=new Float32Array(2*i), this.Wb=null, this.ga()
            }

            var i=200; return t.prototype.ga=function() {
                this.Sc(.25), this.eb="", this.X= !0, this.Wc( !1)
            }

            , t.prototype.Qc=function(t) {
                this.$=t, this.wf(this.W)
            }

            , t.prototype.Wc=function(t) {
                var i=this.W; this.W=t, this.wf(i)
            }

            , t.prototype.Sc=function(t) {
                this.cc=50*t; var e=t; t>this.D.Fb&&(e=Math.atan((t-this.D.Fb)/this.D.Gb)*this.D.Gb+this.D.Fb); var n=Math.sqrt(4*Math.pow(5*e, .707106781186548)+25), o=Math.min(i, Math.max(3, 5*(n-5)+1)), s=this.tf; if(this.S=.025*(5+.9*n), this.tf=Math.floor(o), this.qf=o-this.tf, s>0&&s<this.tf)for(var h=this.uf[2*s-2], a=this.uf[2*s-1], r=this.vf[2*s-2], c=this.vf[2*s-1], f=this.T[2*s-2], u=this.T[2*s-1], d=s; d<this.tf; d++)this.uf[2*d]=h, this.uf[2*d+1]=a, this.vf[2*d]=r, this.vf[2*d+1]=c, this.T[2*d]=f, this.T[2*d+1]=u
            }

            , t.prototype.Vc=function(t, i, e) {
                this.sf=t, this.tf=e; for(var n=0; n<this.tf; n++)this.T[2*n]=this.vf[2*n]=this.uf[2*n]=i(), this.T[2*n+1]=this.vf[2*n+1]=this.uf[2*n+1]=i()
            }

            , t.prototype.Uc=function(t, i, e, n) {
                this.sf=t, this.pf=n, this.xf(i, e, this.tf, this.uf); for(var o=0; o<this.tf; o++)this.vf[2*o]=this.uf[2*o], this.vf[2*o+1]=this.uf[2*o+1]
            }

            , t.prototype.xf=function(t, i, e, n) {
                var o=n[0], s=void 0, h=n[1], a=void 0, r=Math.hypot(o-t, h-i); if(r>0) {
                    n[0]=t, n[1]=i; for(var c=this.S/(this.S+r), f=1-2*c, u=1, d=e-1; u<d; u++)s=n[2*u], n[2*u]=n[2*u-2]*f+(s+o)*c, o=s, a=n[2*u+1], n[2*u+1]=n[2*u-1]*f+(a+h)*c, h=a; c=this.qf*this.S/(this.qf*this.S+r), f=1-2*c, n[2*e-2]=n[2*e-4]*f+(n[2*e-2]+o)*c, n[2*e-1]=n[2*e-3]*f+(n[2*e-1]+h)*c
                }
            }

            , t.prototype.U=function(t, i) {
                var e=h(.1, 1, i/400); this.Y=h(0, 1, this.Y+e*((this.X?this.pf?.8+.2*Math.cos(t/400*Math.PI):1:0)-this.Y)), this.rf=h(0, 1, this.rf+e*((this.X?this.pf?1:0:1)-this.rf)), null !=this.Wb&&(this.Wb.yf=this.Y)
            }

            , t.prototype.V=function(t, i, e) {
                if(this.X&&this.W&&this.sf>0) {
                    for(; t>this.sf; ) {
                        this.sf+=95; var n=this.vf[0]-this.vf[2], o=this.vf[1]-this.vf[3], s=Math.hypot(n, o), h=this.vf[0]+n/s*(this.pf?8:4)*95/1e3, a=this.vf[1]+o/s*(this.pf?8:4)*95/1e3; this.xf(h, a, this.tf, this.vf)
                    }

                    for(var r=Math.min(.5, 1*i/(this.sf-t+i)), c=0; c<this.tf; c++)this.T[2*c]+=r*(this.vf[2*c]-this.T[2*c]), this.T[2*c+1]+=r*(this.vf[2*c+1]-this.T[2*c+1])
                }

                this.zf(t, i, e)
            }

            , t.prototype.zf=function(t, i, e) {
                null !=this.Wb&&this.Wb.Af(this, t, e)
            }

            , t.prototype.wf=function(t) {
                this.W&&(t||this.Bf())
            }

            , t.prototype.Bf=function() {
                null==this.Wb&&(this.Wb=new x), this.Wb.nd(it.pb.Oa(this.$.gc), it.pb.Qa(this.$.Mc), it.pb.Ra(this.$.Nc), it.pb.Sa(this.$.Oc), it.pb.Ta(this.$.Pc), it.pb.Pa(this.$.fc), it.Sb.D.Db)
            }

            , t.Config=function() {
                function t() {
                    this.Z=0, this.fc=M.TEAM_DEFAULT, this.gc=0, this.Mc=0, this.Nc=0, this.Oc=0, this.Pc=0, this.eb=""
                }

                return t
            }

            (), t
        }

        (), x=function() {
            function t() {
                this.yf=0, this.Cf=0, this.Yb=new Array(i); for(var t=0; t<i; t++)this.Yb[t]=new y(new N, new N); this.Df=new v
            }

            var i=797, e=-.06640625, n=.84375, o=.2578125, s=-.03515625, h=-.0625, a=.5625, r=3*e+n, c=o-3*e, f=e+s, u=.375, d=.75, p=h+h, l=3*s+o, g=n-3*s, b=s+e; t.prototype.kc=function(t) {
                t.save(), t.globalAlpha=this.yf, this.Yb[this.Cf-1].xd.yd(t, this.yf); for(var i=this.Cf-1; i>=1; i--)this.Yb[i-1].xd.yd(t, this.yf), this.Yb[i].wd.yd(t, this.yf); if(this.Yb[0].wd.yd(t, this.yf), this.Yb[0].lc()) {
                    for(var e=this.Yb[0].Xb(), n=this.Yb[0].Zb(), o=this.Yb[0].Ef(), s=this.Yb[0].Ff(), h=0; h<this.Df.Gf.length; h++) {
                        var a=this.Df.Gf[h]; a.Bd.b=e, a.Bd.c=n, a.Dd.Cd=s, a.Dd.Ed=s, a.re=o, a.yd(t, this.yf)
                    }

                    for(var r=0; r<this.Df.Hf.length; r++) {
                        var c=this.Df.Hf[r]; c.Bd.b=e, c.Bd.c=n, c.Dd.Cd=s, c.Dd.Ed=s, c.re=o, c.yd(t, this.yf)
                    }

                    for(var f=0; f<this.Df.If.length; f++) {
                        var u=this.Df.If[f]; u.Bd.b=e, u.Bd.c=n, u.Dd.Cd=s, u.Dd.Ed=s, u.re=o, u.yd(t, this.yf)
                    }

                    for(var d=0; d<this.Df.Jf.length; d++) {
                        var p=this.Df.Jf[d]; p.Bd.b=e, p.Bd.c=n, p.Dd.Cd=s, p.Dd.Ed=s, p.re=o, p.yd(t, this.yf)
                    }
                }

                t.restore()
            }

            , t.prototype.nd=function(t, i, e, n, o, s, h) {
                var a=t.ab, r=h==m.Cb?s.cb.bb:t.bb; if(a.length>0&&r.length)for(var c=0; c<this.Yb.length; c++)this.Yb[c].wd.vd(a[c%a.length]), this.Yb[c].xd.vd(r[c%r.length]); this.Df.Kf(this.Df.Gf, i.ab), this.Df.Kf(this.Df.Hf, e.ab), this.Df.Kf(this.Df.If, n.ab), this.Df.Kf(this.Df.Jf, o.ab)
            }

            ; var v=function() {
                function t() {
                    this.Gf=[], this.Hf=[], this.If=[], this.Jf=[]
                }

                return t.prototype.Kf=function(t, i) {
                    for(; i.length>t.length; ) {
                        var e=new N; t.push(e)
                    }

                    for(; i.length<t.length; )t.unshift(); for(var n=0; n<i.length; n++)t[n].vd(i[n])
                }

                , t
            }

            (); t.prototype.Af=function(t, i, v) {
                function y(t) {
                    return w+A*Math.cos(t*m-M)
                }

                var m=.1*Math.PI, M=i/400*Math.PI, T=2*t.S, w=1.5*T, A=.15*T*t.rf, I=t.T, k=t.tf; this.Cf=4*k-3; var S=void 0, D=void 0, j=void 0, N=void 0, L=void 0, C=void 0, x=void 0, O=void 0, U=void 0, Y=void 0, $=void 0, E=void 0; E=v(I[0], I[1]), this.Yb[0].Wc(E), this.Yb[1].Wc(E), this.Yb[2].Wc(E); for(var W=1; W<k-2; W++)U=4*W, $=v(I[2*W], I[2*W+1]), this.Yb[U-1].Wc(E||$), this.Yb[U].Wc(E||$), this.Yb[U+1].Wc($), this.Yb[U+2].Wc($), E=$; U=4*k, $=v(I[2*k-4], I[2*k-3]), this.Yb[U-9].Wc(E||$), this.Yb[U-8].Wc(E||$), this.Yb[U-7].Wc($), this.Yb[U-6].Wc($), this.Yb[U-5].Wc($), this.Yb[U-4].Wc($||v(I[2*k-2], I[2*k-1])); for(var B=U-3, _=Math.min(U+13, this.Yb.length); B<_; B++)this.Yb[B].Wc( !1); Y=0, D=I[0], C=I[1], j=I[2], x=I[3], N=I[4], O=I[5], this.Yb[Y].lc()&&(this.Yb[Y].td(D), this.Yb[Y].ud(C)), Y++, this.Yb[Y].lc()&&(this.Yb[Y].td(r*D+c*j+f*N), this.Yb[Y].ud(r*C+c*x+f*O)), Y++, this.Yb[Y].lc()&&(this.Yb[Y].td(u*D+d*j+p*N), this.Yb[Y].ud(u*C+d*x+p*O)), Y++, this.Yb[Y].lc()&&(this.Yb[Y].td(l*D+g*j+b*N), this.Yb[Y].ud(l*C+g*x+b*O)), Y++; for(var z=1; z<k-2; z++)U=2*z, S=I[U-2], L=I[U-1], D=I[U], C=I[U+1], j=I[U+2], x=I[U+3], N=I[U+4], O=I[U+5], this.Yb[Y].lc()&&(this.Yb[Y].td(D), this.Yb[Y].ud(C)), Y++, this.Yb[Y].lc()&&(this.Yb[Y].td(e*S+n*D+o*j+s*N), this.Yb[Y].ud(e*L+n*C+o*x+s*O)), Y++, this.Yb[Y].lc()&&(this.Yb[Y].td(h*S+a*D+a*j+h*N), this.Yb[Y].ud(h*L+a*C+a*x+h*O)), Y++, this.Yb[Y].lc()&&(this.Yb[Y].td(s*S+o*D+n*j+e*N), this.Yb[Y].ud(s*L+o*C+n*x+e*O)), Y++; U=2*k-4, S=I[U-2], L=I[U-1], D=I[U], C=I[U+1], j=I[U+2], x=I[U+3], this.Yb[Y].lc()&&(this.Yb[Y].td(D), this.Yb[Y].ud(C)), Y++, this.Yb[Y].lc()&&(this.Yb[Y].td(b*S+g*D+l*j), this.Yb[Y].ud(b*L+g*C+l*x)), Y++, this.Yb[Y].lc()&&(this.Yb[Y].td(p*S+d*D+u*j), this.Yb[Y].ud(p*L+d*C+u*x)), Y++, this.Yb[Y].lc()&&(this.Yb[Y].td(f*S+c*D+r*j), this.Yb[Y].ud(f*L+c*C+r*x)), Y++, this.Yb[Y].lc()&&(this.Yb[Y].td(j), this.Yb[Y].ud(x)), Y++, this.Yb[0].lc()&&(this.Yb[0].qd(T), this.Yb[0].od(y(0)), this.Yb[0].Lf(Math.atan2(this.Yb[0].Zb()-this.Yb[1].Zb(), this.Yb[0].Xb()-this.Yb[1].Xb()))); for(var P=1, G=4*k-4; P<G; P++)this.Yb[P].lc()&&(this.Yb[P].qd(T), this.Yb[P].od(y(P)), this.Yb[P].Lf(Math.atan2(this.Yb[P-1].Zb()-this.Yb[P+1].Zb(), this.Yb[P-1].Xb()-this.Yb[P+1].Xb()))); this.Yb[4*k-4].lc()&&(this.Yb[4*k-4].qd(T), this.Yb[4*k-4].od(y(4*k-4)), this.Yb[4*k-4].Lf(Math.atan2(this.Yb[4*k-5].Zb()-this.Yb[4*k-4].Zb(), this.Yb[4*k-5].Xb()-this.Yb[4*k-4].Xb())))
            }

            ; var y=function() {
                function t(t, i) {
                    this.wd=t, this.wd.W= !1, this.xd=i, this.xd.W= !1
                }

                return t.prototype.Wc=function(t) {
                    this.wd.W=t, this.xd.W=t
                }

                , t.prototype.lc=function() {
                    return this.wd.W
                }

                , t.prototype.td=function(t) {
                    this.wd.Bd.b=t, this.xd.Bd.b=t
                }

                , t.prototype.Xb=function() {
                    return this.wd.Bd.b
                }

                , t.prototype.ud=function(t) {
                    this.wd.Bd.c=t, this.xd.Bd.c=t
                }

                , t.prototype.Zb=function() {
                    return this.wd.Bd.c
                }

                , t.prototype.Lf=function(t) {
                    this.wd.re=t, this.xd.re=t
                }

                , t.prototype.Ef=function() {
                    return this.wd.re
                }

                , t.prototype.qd=function(t) {
                    this.wd.Dd.Cd=t, this.wd.Dd.Ed=t
                }

                , t.prototype.Ff=function() {
                    return this.wd.Dd.Cd
                }

                , t.prototype.od=function(t) {
                    this.xd.Dd.Cd=t, this.xd.Dd.Ed=t
                }

                , t.prototype.Mf=function() {
                    return this.xd.Dd.Cd
                }

                , t
            }

            (); return t
        }

        (), O=function() {
            function t(t) {
                this.Nf=t, this.Ca=this.Nf.get()[0], this.Of=a(this.Ca), this.Pf=0, this.Qf=0, this.Rf=0, this.Sf=0, this.Tf=new Float32Array(0), this.tf=0, this.Ba=1, this.Fd=0, this.Gd=0, this.Hd=0, this.Id=0, this.Jd=0, this.Uf= !1, this.Vf= !1, this.Wf= !1, this.Xf= !1, this.Yf= !1, this.Zf= !1, this.$f= !1, this._f= !1, this.ag= !1, this.bg= !1, this.ib()
            }

            return t.prototype.cg=function(t, i, e) {
                this.Fd=t, this.Uf=i, this.Zf=e
            }

            , t.prototype.dg=function(t, i, e) {
                this.Gd=t, this.Vf=i, this.$f=e
            }

            , t.prototype.eg=function(t, i, e) {
                this.Hd=t, this.Wf=i, this._f=e
            }

            , t.prototype.fg=function(t, i, e) {
                this.Id=t, this.Xf=i, this.ag=e
            }

            , t.prototype.gg=function(t, i, e) {
                this.Jd=t, this.Yf=i, this.bg=e
            }

            , t.prototype.ib=function() {
                var t=window.devicePixelRatio?window.devicePixelRatio:1; this.Pf=this.Nf.width(), this.Qf=this.Nf.height(), this.Rf=t*this.Pf, this.Sf=t*this.Qf, this.Ca.width=this.Rf, this.Ca.height=this.Sf, this.Ba=this.Qf/4, this.tf=2*Math.floor(this.Pf/this.Ba)-5, 3*this.tf>this.Tf.length&&(this.Tf=new Float32Array(3*this.tf))
            }

            , t.prototype.ob=function() {
                for(var t=f().pb, i=window.devicePixelRatio?window.devicePixelRatio:1, e=Date.now(), n=e/200, o=Math.sin(n), s=this.Ba, h=1.5*this.Ba, a=0, r=0, c=-1; c<this.tf; c++) {
                    var u=c, d=Math.cos(c/s*Math.PI-n)*(1-Math.pow(16, -c/s)); c>=0&&(this.Tf[3*c]=-.5*s*u, this.Tf[3*c+1]=.5*s*d, this.Tf[3*c+2]=Math.atan2(r-d, u-a)), a=u, r=d
                }

                var p=t.Oa(this.Fd), l=p.ab, g=p.bb; this.Of.setTransform(1, 0, 0, 1, 0, 0), this.Of.clearRect(0, 0, this.Rf, this.Sf), this.Of.setTransform(i, 0, 0, i, this.Rf-.5*(this.Pf-.5*s*(this.tf-1))*i, .5*this.Sf), this.Of.globalAlpha=this.Uf?this.Zf?.4+.2*o:.9+.1*o:this.Zf?.4:1; for(var b=this.tf-1; b>=0; b--)this.Of.drawRegionTransformed(g[b%g.length], h, h, this.Tf[3*b], this.Tf[3*b+1], this.Tf[3*b+2]); for(var v=this.tf-1; v>=0; v--)this.Of.drawRegionTransformed(l[v%l.length], s, s, this.Tf[3*v], this.Tf[3*v+1], this.Tf[3*v+2]); this.Of.translate(this.Tf[0], this.Tf[1]), this.Of.rotate(this.Tf[2]), this.Of.globalAlpha=this.Vf?this.$f?.4+.2*o:.9+.1*o:this.$f?.4:1; for(var y=t.Qa(this.Gd).ab, m=0; m<y.length; m++)this.Of.drawRegion(y[m], s, s, 0, 0); this.Of.globalAlpha=this.Wf?this._f?.4+.2*o:.9+.1*o:this._f?.4:1; for(var M=t.Ra(this.Hd).ab, T=0; T<M.length; T++)this.Of.drawRegion(M[T], s, s, 0, 0); this.Of.globalAlpha=this.Xf?this.ag?.4+.2*o:.9+.1*o:this.ag?.4:1; for(var w=t.Sa(this.Id).ab, A=0; A<w.length; A++)this.Of.drawRegion(w[A], s, s, 0, 0); this.Of.globalAlpha=this.Yf?this.bg?.4+.2*o:.9+.1*o:this.bg?.4:1; for(var I=t.Ta(this.Jd).ab, k=0; k<I.length; k++)this.Of.drawRegion(I[k], s, s, 0, 0)
            }

            , t
        }

        (), U=function() {
            function t(t) {
                this.sa=t
            }

            return t.hg=$("#game-view"), t.ig=$("#results-view"), t.jg=$("#main-menu-view"), t.kg=$("#popup-view"), t.lg=$("#toaster-view"), t.mg=$("#loading-view"), t.ng=$("#stretch-box"), t.fe=$("#background-canvas"), t.og=$("#social-buttons"), t.pg=$("#markup-wrap"), t.qg=$("#bmv2zxj3aw50zxi"), t.prototype.le=function() {}

            , t.prototype.me=function() {}

            , t.prototype.he=function() {}

            , t.prototype.ib=function() {}

            , t.prototype.ob=function(t, i) {}

            , t
        }

        (), Y=function() {
            function i(t, i, e, n, o, s) {
                var h='<div><svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 456 456" xml:space="preserve"><rect x="0" y="0" width="456" height="456" fill="#F7941D"/><path d="M118.1 138.7c10.9 27 24.8 52.4 43 75.2 2.4 3 5.5 5.7 8.7 7.9 4.7 3.2 9.1 2.1 11-3.3 2-5.6 3.9-17 4-23 0.3-15.4 0-25.6-0.9-41 -0.5-9.9-4.1-18.6-18.6-21.2 -4.5-0.8-4.9-4.5-2-8.2 6-7.7 14.4-8.9 23.4-9.4 14.7-0.8 29.5-0.1 44.2 0 6 0.1 12 0.5 17.9 1.8 7.7 1.7 11.8 7.1 13.1 14.6 0.7 3.9 1 7.9 0.9 11.8 -0.4 16.9-1.2 33.7-1.4 50.6 -0.1 6.6 0.4 13.4 1.8 19.8 2 9 8.1 11.2 14.3 4.7 7.9-8.2 14.9-17.5 21.5-26.9 11.9-17.1 20.8-35.9 28.5-55.3 4-10 7-12.2 17.8-12.2 20.2 0 40.4-0.1 60.7 0 3.6 0 7.3 0.4 10.7 1.4 5.5 1.8 7.7 6.2 6.4 11.9 -3 13.3-10.2 24.6-17.9 35.5 -12.4 17.5-25.3 34.5-38 51.8 -1.6 2.2-3 4.5-4.4 6.9 -4.7 8.6-4.4 13.4 2.5 20.5 11 11.3 22.8 22 33.4 33.6 7.7 8.5 14.9 17.7 21 27.4 7.8 12.2 3 23.8-11.5 25.8 -9.1 1.3-53.6 0-55.9 0 -12-0.1-22.5-4.2-30.9-12.3 -9.4-9.1-17.9-19-27-28.4 -2.7-2.8-5.6-5.6-8.7-8 -7.4-5.6-14.6-4.4-18.1 4.3 -2.9 7.4-5.5 27-5.6 28.7 -0.6 8.7-6.2 14.3-16 14.8 -28.2 1.5-55.6-1.6-81.1-15.3 -21.6-11.6-38.9-27.9-53.8-47 -23.7-30.3-42.5-63.6-59.6-97.9 -0.9-1.8-18.2-38.7-18.7-40.4 -1.5-5.8-0.1-11.4 4.8-13.3 3.1-1.2 60.2 0 61.2 0C108 125.4 114.2 129.2 118.1 138.7z" fill="#FFF"/></svg><span>'+t+"</span></div>"; return"undefined" !=typeof VK&&void 0 !==VK.Share?VK.Share.button( {
                        noparse: !0, url:i, title:n, description:o, image:s
                    }

                    , {
                        type:"custom", text:h
                    }

                ):$(h)
            }

            function e(t, i, e, n, o, s) {
                var h='<div><svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 456 456" xml:space="preserve"><rect x="0" y="0" width="456" height="456" fill="#F7941D"/><path d="M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z" fill="#fff"/></svg><span>'+t+"</span></div>", a=$(h); return a.click(function() {
                        "undefined" !=typeof FB&&void 0 !==FB.ui&&FB.ui( {
                                method:"feed", display:"popup", link:i, name:e, caption:n, description:o, picture:s
                            }

                            , function() {}

                        )
                    }

                ), a
            }

            var n=o(U, function() {
                    U.call(this, z.rg); var i=this, e=$("#final-caption"), n=$("#final-continue"); this.sg=$("#final-share-vk"), this.tg=$("#final-share-fb"), this.ug=$("#final-message"), this.vg=$("#final-score"), this.wg=$("#final-place"), this.xg=$("#final-board"), this.yg=$("#game-canvas"); var o=this.yg.get()[0]; console.log("sSE="+tt.zg), this.sg.toggle(tt.zg), this.tg.toggle(tt.zg), e.text(t("index.game.result.title")), n.text(t("index.game.result.continue")), n.click(function() {
                            try {
                                aipDisplayTag.refresh(tt.Ag())
                            }

                            catch(t) {}

                            it.yc.ge(it.yc.Vd)
                        }

                    ), $("html").keydown(function(t) {
                            32==t.keyCode&&(i.Bg= !0)
                        }

                    ).keyup(function(t) {
                            32==t.keyCode&&(i.Bg= !1)
                        }

                    ), o.addEventListener("touchmove", function(t) {
                            (t=t||window.event)&&(t=t.touches[0], void 0 !==t.clientX?i.Cg=Math.atan2(t.clientY-.5*o.offsetHeight, t.clientX-.5*o.offsetWidth):i.Cg=Math.atan2(t.pageY-.5*o.offsetHeight, t.pageX-.5*o.offsetWidth))
                        }

                        ,  !0), o.addEventListener("touchstart", function(t) {
                            (t=t||window.event)&&(i.Bg=t.touches.length>=2), t.preventDefault()
                        }

                        ,  !0), o.addEventListener("touchend", function(t) {
                            (t=t||window.event)&&(i.Bg=t.touches.length>=2)
                        }

                        ,  !0), o.addEventListener("mousemove", function(t) {
                            (t=t||window.event&&void 0 !==t.clientX)&&(i.Cg=Math.atan2(t.clientY-.5*o.offsetHeight, t.clientX-.5*o.offsetWidth))
                        }

                        ,  !0), o.addEventListener("mousedown", function(t) {
                            i.Bg= !0
                        }

                        ,  !0), o.addEventListener("mouseup", function(t) {
                            i.Bg= !1
                        }

                        ,  !0), this.wc=new T(this.yg), this.s=s.Dg, this.Cg=0, this.Bg= !1
                }

            ); n.prototype.le=function() {
                this.s==s.Dg?(U.hg.stop(), U.hg.fadeIn(500), U.ig.stop(), U.ig.fadeOut(1), U.jg.stop(), U.jg.fadeOut(50), U.kg.stop(), U.kg.fadeOut(50), U.lg.stop(), U.lg.fadeOut(50), U.mg.stop(), U.mg.fadeOut(50), U.ng.stop(), U.ng.fadeOut(1), U.fe.stop(), U.fe.fadeOut(50), U.og.stop(), U.og.fadeOut(50), U.pg.stop(), U.pg.fadeOut(50)):(U.hg.stop(), U.hg.fadeIn(500), U.ig.stop(), U.ig.fadeIn(1e3), U.jg.stop(), U.jg.fadeOut(50), U.kg.stop(), U.kg.fadeOut(50), U.lg.stop(), U.lg.fadeOut(50), U.mg.stop(), U.mg.fadeOut(50), U.ng.stop(), U.ng.fadeOut(1), U.fe.stop(), U.fe.fadeOut(50), U.og.stop(), U.og.fadeOut(50), U.pg.stop(), U.pg.fadeOut(50))
            }

            , n.prototype.Dg=function() {
                return this.s=s.Dg, this
            }

            , n.prototype.Eg=function() {
                return this.s=s.Eg, this
            }

            , n.prototype.me=function() {
                this.Bg= !1, this.wc.ib()
            }

            , n.prototype.ib=function() {
                this.wc.ib()
            }

            , n.prototype.ob=function(t, i) {
                this.wc.ob(t, i)
            }

            , n.prototype.Fg=function(n, o, s) {
                var h=void 0, a=void 0, r=void 0; if(o>=1&&o<=10?(h=t("index.game.result.place.i"+o), a=t("index.game.result.placeInBoard"), r=t("index.game.social.shareResult.messGood").replace("{0}", s).replace("{1}", n).replace("{2}", h)):(h="", a=t("index.game.result.tryHit"), r=t("index.game.social.shareResult.messNorm").replace("{0}", s).replace("{1}", n)), this.ug.html(t("index.game.result.your")), this.vg.html(n), this.wg.html(h), this.xg.html(a), tt.zg) {
                    var c=t("index.game.result.share"); t("index.game.social.shareResult.caption"); this.sg.empty().append(i(c, "https://web.archive.org/web/20180416003435/https://wormate.io", "wormate.io", r, r, "https://web.archive.org/web/20180416003435/https://wormate.io/images/og-share-img-new.jpg")), this.tg.empty().append(e(c, "https://web.archive.org/web/20180416003435/https://wormate.io", "wormate.io", r, r, "https://web.archive.org/web/20180416003435/https://wormate.io/images/og-share-img-new.jpg"))
                }
            }

            , n.prototype.Gg=function() {
                return this.Cg
            }

            , n.prototype.Hg=function() {
                return this.Bg
            }

            ; var s= {
                Dg:0, Eg:1
            }

            ; return n
        }

        (), E=function() {
            var t=o(U, function() {
                    U.call(this, z.rg)
                }

            ); return t.prototype.le=function() {
                U.hg.stop(), U.hg.fadeOut(50), U.ig.stop(), U.ig.fadeOut(50), U.jg.stop(), U.jg.fadeOut(50), U.kg.stop(), U.kg.fadeOut(50), U.lg.stop(), U.lg.fadeOut(50), U.mg.stop(), U.mg.fadeIn(500), U.ng.stop(), U.ng.fadeIn(1), U.fe.stop(), U.fe.fadeIn(500), U.og.stop(), U.og.fadeOut(50), U.pg.stop(), U.pg.fadeOut(50)
            }

            , t
        }

        (), W=function() {
            var i=o(U, function() {
                    U.call(this, z.ke); var t=this, i=$("#mm-skin-canv"), e=$("#mm-skin-prev"), n=$("#mm-skin-next"); this.Ig=$("#mm-skin-over"), this.Jg=$("#mm-skin-over-button-list"), this.Kg=$("#mm-params-nickname"), this.Lg=$("#mm-params-game-mode"); var o=$("#mm-action-play"), s=$("#mm-action-guest"), h=$("#mm-action-login"), a=$("#mm-player-info"), r=$("#mm-store"), c=$("#mm-leaders"), f=$("#mm-settings"), u=$("#mm-coins-box"); this.Mg=$("#mm-player-avatar"), this.Ng=$("#mm-player-username"), this.Og=$("#mm-coins-val"), this.Pg=$("#mm-player-exp-bar"), this.Qg=$("#mm-player-exp-val"), this.Rg=$("#mm-player-level"), this.Sg=new O(i), i.click(function() {
                            it.Ud.Ve()&&it.yc.ge(it.yc.Zd)
                        }

                    ), e.click(function() {
                            it.Tg.Rd()
                        }

                    ), n.click(function() {
                            it.Tg.Qd()
                        }

                    ), this.Kg.keypress(function(t) {
                            13==t.keyCode&&it.Ug()
                        }

                    ), o.click(it.Ug), s.click(it.Ug), h.click(function() {
                            it.yc.ge(it.yc.Ac)
                        }

                    ), f.click(function() {
                            it.yc.ge(it.yc.Ac)
                        }

                    ), a.click(function() {
                            it.Ud.Ve()&&it.yc.ge(it.yc.Yd)
                        }

                    ), c.click(function() {
                            it.Ud.Ve()&&it.yc.ge(it.yc.Xd)
                        }

                    ), r.click(function() {
                            it.Ud.Ve()&&it.yc.ge(it.yc.$d)
                        }

                    ), u.click(function() {
                            it.Ud.Ve()&&it.yc.ge(it.yc.Wd)
                        }

                    ), this.Vg(), this.Wg(); var d=getCookie("gameMode"); "ARENA" !=d&&"TEAM2" !=d&&(d="ARENA"), this.Lg.val(d), console.log("Load GM: "+d), it.Ud.Ue(function() {
                            it.Ud.Ve()?(it.Tg.Sd(it.Ud.He(), "SKIN"), it.Tg.Sd(it.Ud.Ie(), "EYES"), it.Tg.Sd(it.Ud.Je(), "MOUTH"), it.Tg.Sd(it.Ud.Ke(), "GLASSES"), it.Tg.Sd(it.Ud.Le(), "HAT")):(it.Tg.Sd(it.Xg(), "SKIN"), it.Tg.Sd(0, "EYES"), it.Tg.Sd(0, "MOUTH"), it.Tg.Sd(0, "GLASSES"), it.Tg.Sd(0, "HAT"))
                        }

                    ), it.Ud.Ue(function() {
                            o.toggle(it.Ud.Ve()), h.toggle( !it.Ud.Ve()), s.toggle( !it.Ud.Ve()), c.toggle(it.Ud.Ve()), r.toggle(it.Ud.Ve()), u.toggle(it.Ud.Ve()), it.Ud.Ve()?(t.Ig.hide(), t.Ng.html(it.Ud.Ae()), t.Mg.attr("src", it.Ud.Ce()), t.Og.html(it.Ud.De()), t.Pg.width(100*it.Ud.Fe()/it.Ud.Ge()+"%"), t.Qg.html(it.Ud.Fe()+" / "+it.Ud.Ge()), t.Rg.html(it.Ud.Ee()), t.Kg.val(it.Ud.Be())):(t.Ig.toggle(tt.zg&& !it.Yg()), t.Ng.html(t.Ng.data("guest")), t.Mg.attr("src", "/images/guest-avatar.png"), t.Og.html("10"), t.Pg.width("0"), t.Qg.html(""), t.Rg.html(1), t.Kg.val(getCookie("nickname")))
                        }

                    ), it.Tg.Md(function() {
                            t.Sg.cg(it.Tg.Ld("SKIN"),  !1,  !1), t.Sg.dg(it.Tg.Ld("EYES"),  !1,  !1), t.Sg.eg(it.Tg.Ld("MOUTH"),  !1,  !1), t.Sg.fg(it.Tg.Ld("GLASSES"),  !1,  !1), t.Sg.gg(it.Tg.Ld("HAT"),  !1,  !1)
                        }

                    )
                }

            ); return i.prototype.le=function() {
                U.hg.stop(), U.hg.fadeOut(50), U.ig.stop(), U.ig.fadeOut(50), U.jg.stop(), U.jg.fadeIn(500), U.kg.stop(), U.kg.fadeOut(50), U.lg.stop(), U.lg.fadeOut(50), U.mg.stop(), U.mg.fadeOut(50), U.ng.stop(), U.ng.fadeIn(1), U.fe.stop(), U.fe.fadeIn(500), U.og.stop(), U.og.fadeIn(500), U.pg.stop(), U.pg.fadeIn(500)
            }

            , i.prototype.ib=function() {
                this.Sg.ib()
            }

            , i.prototype.ob=function(t, i) {
                this.Sg.ob()
            }

            , i.prototype.Be=function() {
                return this.Kg.val()
            }

            , i.prototype.Zg=function() {
                return this.Lg.val()
            }

            , i.prototype.Vg=function() {
                var t=$("#mm-advice-cont").children(), i=0; setInterval(function() {
                        t.eq(i).fadeOut(500, function() {
                                ++i>=t.length&&(i=0), t.eq(i).fadeIn(500).css("display", "inline-block")
                            }

                        )
                    }

                    , 3e3)
            }

            , i.prototype.Wg=function() {
                function i() {
                    it.$g( !0), e.Ig.hide()
                }

                var e=this; if(tt.zg&& !it.Yg()) {
                    this.Ig.show(); var n=t("index.game.main.menu.unlockSkins.share"), o=encodeURIComponent(t("index.game.main.menu.unlockSkins.comeAndPlay")+" https://wormate.io/ #wormate #wormateio"), s=encodeURIComponent(t("index.game.main.menu.unlockSkins.comeAndPlay")); this.Jg.append($('<a class="mm-skin-over-button" id="mm-skin-over-tw" target="_blank" href="https://web.archive.org/web/20180416003435/http://twitter.com/intent/tweet?status='+o+'"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg=="><span>'+n+"</span></a>").click(i)), this.Jg.append($('<a class="mm-skin-over-button" id="mm-skin-over-vk" target="_blank" href="https://web.archive.org/web/20180416003435/http://vk.com/share.php?url=https%3A%2F%2Fwormate.io"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0xMTguMSAxMjVjMTAuOSAyNyAyNC44IDUyLjQgNDMgNzUuMiAyLjQgMyA1LjUgNS43IDguNyA3LjkgNC43IDMuMiA5LjEgMi4xIDExLTMuMyAyLTUuNiAzLjktMTcgNC0yMyAwLjMtMTUuNCAwLTI1LjYtMC45LTQxIC0wLjUtOS45LTQuMS0xOC42LTE4LjYtMjEuMiAtNC41LTAuOC00LjktNC41LTItOC4yIDYtNy43IDE0LjQtOC45IDIzLjQtOS40IDE0LjctMC44IDI5LjUtMC4xIDQ0LjIgMCA2IDAuMSAxMiAwLjUgMTcuOSAxLjggNy43IDEuNyAxMS44IDcuMSAxMy4xIDE0LjYgMC43IDMuOSAxIDcuOSAwLjkgMTEuOCAtMC40IDE2LjktMS4yIDMzLjctMS40IDUwLjYgLTAuMSA2LjYgMC40IDEzLjQgMS44IDE5LjggMiA5IDguMSAxMS4yIDE0LjMgNC43IDcuOS04LjIgMTQuOS0xNy41IDIxLjUtMjYuOSAxMS45LTE3LjEgMjAuOC0zNS45IDI4LjUtNTUuMyA0LTEwIDctMTIuMiAxNy44LTEyLjIgMjAuMiAwIDQwLjQtMC4xIDYwLjcgMCAzLjYgMCA3LjMgMC40IDEwLjcgMS40IDUuNSAxLjggNy43IDYuMiA2LjQgMTEuOSAtMyAxMy4zLTEwLjIgMjQuNi0xNy45IDM1LjUgLTEyLjQgMTcuNS0yNS4zIDM0LjUtMzggNTEuOCAtMS42IDIuMi0zIDQuNS00LjQgNi45IC00LjcgOC42LTQuNCAxMy40IDIuNSAyMC41IDExIDExLjMgMjIuOCAyMiAzMy40IDMzLjYgNy43IDguNSAxNC45IDE3LjcgMjEgMjcuNCA3LjggMTIuMiAzIDIzLjgtMTEuNSAyNS44IC05LjEgMS4zLTUzLjYgMC01NS45IDAgLTEyLTAuMS0yMi41LTQuMi0zMC45LTEyLjMgLTkuNC05LjEtMTcuOS0xOS0yNy0yOC40IC0yLjctMi44LTUuNi01LjYtOC43LTggLTcuNC01LjYtMTQuNi00LjQtMTguMSA0LjMgLTIuOSA3LjQtNS41IDI3LTUuNiAyOC43IC0wLjYgOC43LTYuMiAxNC4zLTE2IDE0LjggLTI4LjIgMS41LTU1LjYtMS42LTgxLjEtMTUuMyAtMjEuNi0xMS42LTM4LjktMjcuOS01My44LTQ3IC0yMy43LTMwLjMtNDIuNS02My42LTU5LjYtOTcuOSAtMC45LTEuOC0xOC4yLTM4LjctMTguNy00MC40IC0xLjUtNS44LTAuMS0xMS40IDQuOC0xMy4zIDMuMS0xLjIgNjAuMiAwIDYxLjIgMEMxMDggMTI1LjQgMTE0LjIgMTI5LjIgMTE4LjEgMTM4Ljd6IiBmaWxsPSIjRkZGIi8+PC9zdmc+"><span>'+n+"</span></a>").click(i)), this.Jg.append($('<a class="mm-skin-over-button" id="mm-skin-over-fb" target="_blank" href="https://web.archive.org/web/20180416003435/https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote='+s+'"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+"><span>'+n+"</span></a>").click(i))
                }
            }

            , i
        }

        (), B=function() {
            var t=o(U, function() {
                    U.call(this, z.rg)
                }

            ); return t.prototype.le=function() {
                U.hg.stop(), U.hg.fadeOut(50), U.ig.stop(), U.ig.fadeOut(50), U.jg.stop(), U.jg.fadeOut(50), U.kg.stop(), U.kg.fadeOut(50), U.lg.stop(), U.lg.fadeOut(50), U.mg.stop(), U.mg.fadeOut(50), U.ng.stop(), U.ng.fadeOut(1), U.fe.stop(), U.fe.fadeOut(50), U.og.stop(), U.og.fadeOut(50), U.pg.stop(), U.pg.fadeOut(50)
            }

            , t
        }

        (), _=function() {
            var t=$("#toaster-stack"), i=o(U, function() {
                    U.call(this, z.rg), this._g=[], this.ah=null
                }

            ); return i.prototype.le=function() {
                U.hg.stop(), U.hg.fadeOut(50), U.ig.stop(), U.ig.fadeOut(50), U.jg.stop(), U.jg.fadeOut(50), U.kg.stop(), U.kg.fadeOut(50), U.lg.stop(), U.lg.fadeIn(500), U.mg.stop(), U.mg.fadeOut(50), U.ng.stop(), U.ng.fadeIn(1), U.fe.stop(), U.fe.fadeIn(500), U.og.stop(), U.og.fadeOut(50), U.pg.stop(), U.pg.fadeOut(50)
            }

            , i.prototype.me=function() {
                this.bh()
            }

            , i.prototype.ne=function() {
                return null !=this.ah||this._g.length>0
            }

            , i.prototype.af=function(t) {
                this._g.push(t)
            }

            , i.prototype.bh=function() {
                var i=this; if(null==this.ah) {
                    if(0==this._g.length)return void it.yc.je(); var e=this._g.shift(); this.ah=e; var n=e.ch(); n.hide(), n.fadeIn(300), t.append(n), e.dh=function() {
                        n.fadeOut(300), setTimeout(function() {
                                i.ah==e&&t.remove(n)
                            }

                            , 300), i.ah==e&&(i.ah=null), i.bh()
                    }
                }
            }

            , i
        }

        (), z= {
            rg:0, ke:1
        }

        , P=function() {
            var t=$("#popup-menu-label"), i=$("#popup-menu-coins-box"), e=$("#popup-menu-coins-val"); $("#popup-menu-back").click(function() {
                    it.yc.je()
                }

            ), i.click(function() {
                    it.Ud.Ve()&&it.yc.ge(it.yc.Wd)
                }

            ); var n=o(U, function(t, i) {
                    U.call(this, z.ke), this.eb=t, this.eh=i, it.Ud.Ue(function() {
                            it.Ud.Ve()?e.html(it.Ud.De()):e.html("0")
                        }

                    )
                }

            ); return n.fh=$("#coins-view"), n.gh=$("#leaders-view"), n.hh=$("#profile-view"), n.ih=$("#settings-view"), n.jh=$("#skins-view"), n.kh=$("#store-view"), n.lh=$("#wear-view"), n.mh=$("#please-wait-view"), n.prototype.le=function() {
                U.hg.stop(), U.hg.fadeOut(200), U.ig.stop(), U.ig.fadeOut(200), U.jg.stop(), U.jg.fadeOut(200), U.kg.stop(), U.kg.fadeIn(200), U.lg.stop(), U.lg.fadeOut(200), U.mg.stop(), U.mg.fadeOut(200), U.og.stop(), U.og.fadeIn(200), U.pg.stop(), U.pg.fadeIn(200), t.html(this.eb), i.toggle(this.eh), this.nh(), this.oh()
            }

            , n.prototype.oh=function() {}

            , n.prototype.qh=function() {
                P.mh.stop(), P.mh.fadeIn(300)
            }

            , n.prototype.nh=function() {
                P.mh.stop(), P.mh.fadeOut(300)
            }

            , n
        }

        (), G=function() {
            var i=o(P, function() {
                    P.call(this, t("index.game.popup.menu.coins.tab"),  !0); var i=this; $("#store-buy-coins_125000").click(function() {
                            return i.rh("coins_125000")
                        }

                    ), $("#store-buy-coins_50000").click(function() {
                            return i.rh("coins_50000")
                        }

                    ), $("#store-buy-coins_16000").click(function() {
                            return i.rh("coins_16000")
                        }

                    ), $("#store-buy-coins_7000").click(function() {
                            return i.rh("coins_7000")
                        }

                    ), $("#store-buy-coins_3250").click(function() {
                            return i.rh("coins_3250")
                        }

                    ), $("#store-buy-coins_1250").click(function() {
                            return i.rh("coins_1250")
                        }

                    )
                }

            ); return i.prototype.oh=function() {
                P.fh.stop(), P.fh.fadeIn(200), P.gh.stop(), P.gh.fadeOut(50), P.hh.stop(), P.hh.fadeOut(50), P.ih.stop(), P.ih.fadeOut(50), P.jh.stop(), P.jh.fadeOut(50), P.kh.stop(), P.kh.fadeOut(50), P.lh.stop(), P.lh.fadeOut(50)
            }

            , i.prototype.rh=function(t) {}

            , i
        }

        (), R=function() {
            var i=o(P, function() {
                    P.call(this, t("index.game.popup.menu.leaders.tab"),  !0), this.sh=$("#highscore-table"), this.th=$("#leaders-button-level"), this.uh=$("#leaders-button-highscore"), this.vh=$("#leaders-button-kills"), this.wh= {}

                    , this.xh= {
                        yh: {
                            zh:this.th, Ah:"byLevel"
                        }

                        , Bh: {
                            zh:this.uh, Ah:"byHighScore"
                        }

                        , Ch: {
                            zh:this.vh, Ah:"byKillsAndHeadShots"
                        }
                    }

                    ; var i=this; this.th.click(function() {
                            return i.Dh(i.xh.yh)
                        }

                    ), this.uh.click(function() {
                            return i.Dh(i.xh.Bh)
                        }

                    ), this.vh.click(function() {
                            return i.Dh(i.xh.Ch)
                        }

                    )
                }

            ); return i.prototype.oh=function() {
                P.fh.stop(), P.fh.fadeOut(50), P.gh.stop(), P.gh.fadeIn(200), P.hh.stop(), P.hh.fadeOut(50), P.ih.stop(), P.ih.fadeOut(50), P.jh.stop(), P.jh.fadeOut(50), P.kh.stop(), P.kh.fadeOut(50), P.lh.stop(), P.lh.fadeOut(50)
            }

            , i.prototype.me=function() {
                var t=this; this.qh(), $.get(u+"/pub/leaders", function(i) {
                        t.wh=i, t.Dh(null !=t.Eh?t.Eh:t.xh.yh), t.nh()
                    }

                ).done(function() {
                        t.nh()
                    }

                )
            }

            , i.prototype.Dh=function(t) {
                this.Eh=t; for(var i in this.xh)if(this.xh.hasOwnProperty(i)) {
                    var e=this.xh[i]; e.zh.removeClass("pressed")
                }

                this.Eh.zh.addClass("pressed"); for(var n=this.wh[this.Eh.Ah], o="", s=0; s<n.length; s++) {
                    var h=n[s]; o+='<div class="table-row"><span>'+(s+1)+'</span><span><img src="'+h.avatarUrl+'"/></span><span>'+h.username+"</span><span>"+h.level+"</span><span>"+h.highScore+"</span><span>"+h.headShots+" / "+h.kills+"</span></div>"
                }

                this.sh.empty(), this.sh.append(o)
            }

            , i
        }

        (), H=function() {
            var i=o(P, function() {
                    P.call(this, t("index.game.popup.menu.profile.tab"),  !0), this.Fh=$("#profile-avatar"), this.Gh=$("#profile-username"), this.Hh=$("#profile-experience-bar"), this.Ih=$("#profile-experience-val"), this.Jh=$("#profile-level"), this.Kh=$("#profile-stat-highScore"), this.Lh=$("#profile-stat-bestSurvivalTime"), this.Mh=$("#profile-stat-kills"), this.Nh=$("#profile-stat-headshots"), this.Oh=$("#profile-stat-gamesPlayed"), this.Ph=$("#profile-stat-totalTimeSpent"), this.Qh=$("#profile-stat-registrationDate")
                }

            ); return i.prototype.oh=function() {
                P.fh.stop(), P.fh.fadeOut(50), P.gh.stop(), P.gh.fadeOut(50), P.hh.stop(), P.hh.fadeIn(200), P.ih.stop(), P.ih.fadeOut(50), P.jh.stop(), P.jh.fadeOut(50), P.kh.stop(), P.kh.fadeOut(50), P.lh.stop(), P.lh.fadeOut(50)
            }

            , i.prototype.me=function() {
                var t=it.Ud.Se(), i=moment([t.year, t.month-1, t.day]).format("LL"); this.Gh.html(it.Ud.Ae()), this.Fh.attr("src", it.Ud.Ce()), this.Hh.width(100*it.Ud.Fe()/it.Ud.Ge()+"%"), this.Ih.html(it.Ud.Fe()+" / "+it.Ud.Ge()), this.Jh.html(it.Ud.Ee()), this.Kh.html(it.Ud.Me()), this.Lh.html(e(it.Ud.Ne())), this.Mh.html(it.Ud.Oe()), this.Nh.html(it.Ud.Pe()), this.Oh.html(it.Ud.Qe()), this.Ph.html(e(it.Ud.Re())), this.Qh.html(i)
            }

            , i
        }

        (), F=function() {
            var i=o(P, function() {
                    P.call(this, t("index.game.popup.menu.settings.tab"),  !1); var i=this; this.Rh=$("#settings-show-names-switch"), this.Sh=$("#popup-login-gg"), this.Th=$("#popup-login-fb"), this.Uh=$("#popup-login-vk"), this.Vh=$("#popup-logout"), it.Ud.Te(function() {
                            i.Sh.toggle( !it.Ud.Ve()), i.Th.toggle( !it.Ud.Ve()), i.Uh.toggle( !it.Ud.Ve()), i.Vh.toggle(it.Ud.Ve())
                        }

                    ), this.Sh.click(function() {
                            it.Ud.gf()
                        }

                    ), this.Th.click(function() {
                            it.Ud.cf()
                        }

                    ), this.Uh.click(function() {
                            it.Ud.hf()
                        }

                    ), this.Vh.click(function() {
                            it.Ud.df()
                        }

                    ); var e=void 0; switch(getCookie("showPlayerNames")) {
                        case"false":e= !1; break; default:e= !0
                    }

                    console.log("Load sPN: "+e), this.Rh.prop("checked", e)
                }

            ); return i.prototype.oh=function() {
                P.fh.stop(), P.fh.fadeOut(50), P.gh.stop(), P.gh.fadeOut(50), P.hh.stop(), P.hh.fadeOut(50), P.ih.stop(), P.ih.fadeIn(200), P.jh.stop(), P.jh.fadeOut(50), P.kh.stop(), P.kh.fadeOut(50), P.lh.stop(), P.lh.fadeOut(50)
            }

            , i.prototype.zc=function() {
                return this.Rh.prop("checked")
            }

            , i
        }

        (), V=function() {
            var e=o(P, function() {
                    P.call(this, t("index.game.popup.menu.skins.tab"),  !0); var i=this; this.Wh=$("#store-view-canv"), this.Xh=$("#store-locked-bar"), this.Yh=$("#store-buy-button"), this.Zh=$("#store-item-price"), this.$h=$("#store-groups"), this._h=$("#store-view-prev"), this.ai=$("#store-view-next"); var e=it.pb.va; this.bi=null, this.ci=[], this.di= {}

                    , this.ei=new O(this.Wh), this.Yh.click(function() {
                            return i.fi()
                        }

                    ), this._h.click(function() {
                            return i.bi.gi()
                        }

                    ), this.ai.click(function() {
                            return i.bi.hi()
                        }

                    ), this.ci=[]; for(var o=0; o<e.skinGroupArrayDict.length; o++)this.ci.push(new n(this, e.skinGroupArrayDict[o])); this.di= {}

                    ; for(var s=0; s<it.pb.va.skinArrayDict.length; s++) {
                        var h=it.pb.va.skinArrayDict[s]; this.di[h.id]=h
                    }

                    this.ii( !1), it.Tg.Md(function() {
                            i.ii( !1)
                        }

                    )
                }

            ); e.prototype.oh=function() {
                P.fh.stop(), P.fh.fadeOut(50), P.gh.stop(), P.gh.fadeOut(50), P.hh.stop(), P.hh.fadeOut(50), P.ih.stop(), P.ih.fadeOut(50), P.jh.stop(), P.jh.fadeIn(200), P.kh.stop(), P.kh.fadeOut(50), P.lh.stop(), P.lh.fadeOut(50)
            }

            , e.prototype.me=function() {
                this.ji()
            }

            , e.prototype.ib=function() {
                this.ei.ib()
            }

            , e.prototype.ob=function(t, i) {
                this.ei.ob()
            }

            , e.prototype.ji=function() {
                var t=this, i=this; this.$h.empty(); for(var e=0; e<this.ci.length; e++) !function(e) {
                    var n=t.ci[e], o=document.createElement("li"); t.$h.append(o); var s=$(o); s.html(n.ki()), s.click(function() {
                            return i.li(n)
                        }

                    ), n.mi=s
                }

                (e); if(this.ci.length>0) {
                    for(var n=it.Tg.Ld("SKIN"), e=0; e<this.ci.length; e++)for(var o=this.ci[e], s=o.ni.list, h=0; h<s.length; h++)if(s[h]==n)return o.oi=h, void this.li(o); this.li(this.ci[0])
                }
            }

            , e.prototype.li=function(t) {
                this.bi !=t&&(this.bi=t, this.$h.children().removeClass("pressed"), this.bi.mi&&this.bi.mi.addClass("pressed"), this.ii( !0))
            }

            , e.prototype.pi=function() {
                return null==this.bi?A.cd():this.bi.qi()
            }

            , e.prototype.fi=function() {
                var t=this; this.pi().gd(function(i) {
                        t.ri(i)
                    }

                )
            }

            , e.prototype.ri=function(t) {
                var i=this, e=this.di[t].price; it.Ud.De()<e||(this.qh(), it.Ud.bf(t, "SKIN", function() {
                            it.Ud.Td(t, "SKIN")&&it.Tg.Sd(t, "SKIN"), i.nh()
                        }

                    ))
            }

            , e.prototype.ii=function(t) {
                this.ei.dg(it.Tg.Ld("EYES"),  !1,  !1), this.ei.eg(it.Tg.Ld("MOUTH"),  !1,  !1), this.ei.fg(it.Tg.Ld("GLASSES"),  !1,  !1), this.ei.gg(it.Tg.Ld("HAT"),  !1,  !1); var i=this.pi(); if(i.fd()) {
                    var e=i.ed(), n=this.di[e], o= !1; it.Tg.Pd(e, "SKIN")?(this.Xh.hide(), this.Yh.hide()):null==n||1==n.nonbuyable?(o= !0, this.Xh.show(), this.Yh.hide()):(this.Xh.hide(), this.Yh.show(), this.Zh.html(null !=n?n.price:0)), this.ei.cg(e,  !0, o), t&&it.Tg.Sd(e, "SKIN")
                }
            }

            ; var n=function() {
                function t(t, i) {
                    this.si=t, this.oi=0, this.ni=i
                }

                return t.prototype.gi=function() {
                    --this.oi<0&&(this.oi=this.ni.list.length-1), this.si.ii( !0)
                }

                , t.prototype.hi=function() {
                    ++this.oi>=this.ni.list.length&&(this.oi=0), this.si.ii( !0)
                }

                , t.prototype.ki=function() {
                    return i(this.ni.name)
                }

                , t.prototype.qi=function() {
                    return this.oi>=this.ni.list.length?A.cd():A.dd(this.ni.list[this.oi])
                }

                , t
            }

            (); return e
        }

        (), K=function() {
            var i=o(P, function() {
                    P.call(this, t("index.game.popup.menu.store.tab"),  !0); var i=$("#store-go-coins-button"), e=$("#store-go-skins-button"), n=$("#store-go-wear-button"); i.click(function() {
                            it.yc.ge(it.yc.Wd)
                        }

                    ), e.click(function() {
                            it.yc.ge(it.yc.Zd)
                        }

                    ), n.click(function() {
                            it.yc.ge(it.yc._d)
                        }

                    )
                }

            ); return i.prototype.oh=function() {
                P.fh.stop(), P.fh.fadeOut(50), P.gh.stop(), P.gh.fadeOut(50), P.hh.stop(), P.hh.fadeOut(50), P.ih.stop(), P.ih.fadeOut(50), P.jh.stop(), P.jh.fadeOut(50), P.kh.stop(), P.kh.fadeIn(200), P.lh.stop(), P.lh.fadeOut(50)
            }

            , i
        }

        (), Z=function() {
            var i=o(P, function() {
                    var i=this; P.call(this, t("index.game.popup.menu.wear.tab"),  !0), this.ti=$("#wear-view-canv"), this.vi=$("#wear-locked-bar"), this.wi=$("#wear-buy-button"), this.xi=$("#wear-item-price"), this.yi=$("#wear-eyes-button"), this.zi=$("#wear-mouths-button"), this.Ai=$("#wear-glasses-button"), this.Bi=$("#wear-hats-button"), this.Ci=$("#wear-tint-chooser"), this.Di=$("#wear-view-prev"), this.Ei=$("#wear-view-next"); var n=this, o=it.pb.va; this.Fi=[], this.Gi=new e(this, "EYES", this.yi), this.Hi=new e(this, "MOUTH", this.zi), this.Ii=new e(this, "GLASSES", this.Ai), this.Ji=new e(this, "HAT", this.Bi), this.Ki=null, this.Li=null, this.Mi=null, this.Ni=null, this.Oi=null, this.Pi=null, this.Qi=new O(this.ti), this.wi.click(function() {
                            return n.Ri()
                        }

                    ), this.Di.click(function() {
                            return n.Ki.Si()
                        }

                    ), this.Ei.click(function() {
                            return n.Ki.Ti()
                        }

                    ), this.yi.click(function() {
                            return n.Ui(i.Gi)
                        }

                    ), this.zi.click(function() {
                            return n.Ui(i.Hi)
                        }

                    ), this.Ai.click(function() {
                            return n.Ui(i.Ii)
                        }

                    ), this.Bi.click(function() {
                            return n.Ui(i.Ji)
                        }

                    ), this.Fi.push(this.Gi), this.Fi.push(this.Hi), this.Fi.push(this.Ii), this.Fi.push(this.Ji), this.Li=o.eyesDict, this.Mi=o.mouthDict, this.Ni=o.glassesDict, this.Oi=o.hatDict, this.Pi=o.colorDict, this.Gi.Vi(o.eyesVariantArray), this.Gi.Wi(this.Li), this.Hi.Vi(o.mouthVariantArray), this.Hi.Wi(this.Mi), this.Ii.Vi(o.glassesVariantArray), this.Ii.Wi(this.Ni), this.Ji.Vi(o.hatVariantArray), this.Ji.Wi(this.Oi), this.ii( !1), it.Tg.Md(function() {
                            n.ii( !1)
                        }

                    )
                }

            ); i.prototype.oh=function() {
                P.fh.stop(), P.fh.fadeOut(50), P.gh.stop(), P.gh.fadeOut(50), P.hh.stop(), P.hh.fadeOut(50), P.ih.stop(), P.ih.fadeOut(50), P.jh.stop(), P.jh.fadeOut(50), P.kh.stop(), P.kh.fadeOut(50), P.lh.stop(), P.lh.fadeIn(200)
            }

            , i.prototype.me=function() {
                this.Ui(null !=this.Ki?this.Ki:this.Gi)
            }

            , i.prototype.ib=function() {
                this.Qi.ib()
            }

            , i.prototype.ob=function(t, i) {
                this.Qi.ob()
            }

            , i.prototype.Ui=function(t) {
                this.Ki=t; for(var i=0; i<this.Fi.length; i++)this.Fi[i].zh.removeClass("pressed"); this.Ki.zh.addClass("pressed"), this.Ki.le()
            }

            , i.prototype.Xi=function() {
                return null==this.Ki?A.cd():A.dd( {
                        Z:this.Ki.qi(), sa:this.Ki.sa
                    }

                )
            }

            , i.prototype.Ri=function() {
                var t=this; this.Xi().gd(function(i) {
                        t.bf(i.Z, i.sa)
                    }

                )
            }

            , i.prototype.bf=function(t, i) {
                var e=this, n=void 0; switch(i) {
                    case"EYES":n=this.Li[t].price; break; case"MOUTH":n=this.Mi[t].price; break; case"GLASSES":n=this.Ni[t].price; break; case"HAT":n=this.Oi[t].price; break; default:return
                }

                it.Ud.De()<n||(this.qh(), it.Ud.bf(t, i, function() {
                            it.Ud.Td(t, i)&&it.Tg.Sd(t, i), e.nh()
                        }

                    ))
            }

            , i.prototype.Yi=function(t, i) {
                switch(i) {
                    case"EYES":return this.Li[t]; case"MOUTH":return this.Mi[t]; case"GLASSES":return this.Ni[t]; case"HAT":return this.Oi[t]
                }

                return null
            }

            , i.prototype.ii=function(t) {
                this.Qi.cg(it.Tg.Ld("SKIN"),  !1,  !1), this.Qi.dg(it.Tg.Ld("EYES"),  !1,  !1), this.Qi.eg(it.Tg.Ld("MOUTH"),  !1,  !1), this.Qi.fg(it.Tg.Ld("GLASSES"),  !1,  !1), this.Qi.gg(it.Tg.Ld("HAT"),  !1,  !1); var i=this.Xi(); if(i.fd()) {
                    var e=i.ed(), n=this.Yi(e.Z, e.sa), o= !1; switch(it.Tg.Pd(e.Z, e.sa)?(this.vi.hide(), this.wi.hide()):null==n||1==n.nonbuyable?(o= !0, this.vi.show(), this.wi.hide()):(this.vi.hide(), this.wi.show(), this.xi.html(null !=n?n.price:0)), e.sa) {
                        case"EYES":this.Qi.dg(e.Z,  !0, o); break; case"MOUTH":this.Qi.eg(e.Z,  !0, o); break; case"GLASSES":this.Qi.fg(e.Z,  !0, o); break; case"HAT":this.Qi.gg(e.Z,  !0, o)
                    }

                    t&&it.Tg.Sd(e.Z, e.sa)
                }
            }

            ; var e=function() {
                function t(t, i, e) {
                    this.si=t, this.sa=i, this.zh=e, this.Zi= {}

                    , this.$i=[[]], this._i=-10, this.aj=-10
                }

                return t.prototype.Vi=function(t) {
                    this.$i=t
                }

                , t.prototype.Wi=function(t) {
                    this.Zi=t
                }

                , t.prototype.le=function() {
                    for(var t=it.Tg.Ld(this.sa), i=0; i<this.$i.length; i++)for(var e=0; e<this.$i[i].length; e++)if(this.$i[i][e]==t)return this.bj(i), void this.cj(e); this.bj(0), this.cj(0)
                }

                , t.prototype.Si=function() {
                    var t=this._i-1; t<0&&(t=this.$i.length-1), this.bj(t), this.cj(this.aj%this.$i[t].length)
                }

                , t.prototype.Ti=function() {
                    var t=this._i+1; t>=this.$i.length&&(t=0), this.bj(t), this.cj(this.aj%this.$i[t].length)
                }

                , t.prototype.bj=function(t) {
                    var i=this; if( !(t<0||t>=this.$i.length)) {
                        this._i=t, this.si.Ci.empty(); var e=this.$i[this._i]; if(e.length>1)for(var n=0; n<e.length; n++) !function(t) {
                            var n=e[t], o=i.Zi[n], s="#"+i.si.Pi[o.prime], h=$('<div style="border-color:'+s+'"></div>'); h.click(function() {
                                    return i.cj(t)
                                }

                            ), i.si.Ci.append(h)
                        }

                        (n)
                    }
                }

                , t.prototype.cj=function(t) {
                    if( !(t<0||t>=this.$i[this._i].length)) {
                        this.aj=t, this.si.Ci.children().css("background-color", "transparent"); var i=this.si.Ci.children(":nth-child("+(1+t)+")"); i.css("background-color", i.css("border-color")), this.si.ii( !0)
                    }
                }

                , t.prototype.qi=function() {
                    return this.$i[this._i][this.aj]
                }

                , t
            }

            (); return i
        }

        (), Q=function() {
            function t() {
                this.dh=function() {}
            }

            return t.prototype.ch=function() {}

            , t
        }

        (), X=function() {
            var i=o(Q, function(i) {
                    Q.call(this); var e=Date.now()+"_"+Math.floor(1e3+8999*Math.random()); this.dj=$('<div id="'+e+'" class="toaster">    <img class="toaster-coins-img" alt="Wormate Coin" src="/images/coin_320.png" />    <div class="toaster-coins-val">+'+i+'</div>    <div class="toaster-coins-close">'+t("index.game.toaster.continue")+"</div></div>"); var n=this; this.dj.find(".toaster-coins-close").click(function() {
                            n.dh()
                        }

                    )
                }

            ); return i.prototype.ch=function() {
                return this.dj
            }

            , i
        }

        (), q=function() {
            var i=o(Q, function(i) {
                    Q.call(this); var e=Date.now()+"_"+Math.floor(1e3+8999*Math.random()); this.dj=$('<div id="'+e+'" class="toaster">    <img class="toaster-levelup-img" alt="Wormate Level Up Star" src="/images/level-star.svg" />    <div class="toaster-levelup-val">'+i+'</div>    <div class="toaster-levelup-text">'+t("index.game.toaster.levelup")+'</div>    <div class="toaster-levelup-close">'+t("index.game.toaster.continue")+"</div></div>"); var n=this; this.dj.find(".toaster-levelup-close").click(function() {
                            n.dh()
                        }

                    )
                }

            ); return i.prototype.ch=function() {
                return this.dj
            }

            , i
        }

        (), J= {}

        ; J.main= {
            Ag:function() {
                return atob("V1JNX3dvcm1hdGUtaW9fMzAweDI1MA==")
            }

            , ej:function() {}

            , fj:r(atob("Ly9hcGkuYWRpbnBsYXkuY29tL3BsYXllci92Mi9XUk0vd29ybWF0ZS5pby9wbGF5ZXIubWluLmpz")), gj:4, hj: !1, zg: !0
        }

        , J.__dev__= {
            Ag:function() {
                return atob("V1JNX3dvcm1hdGUtaW9fMzAweDI1MA==")
            }

            , ej:function() {}

            , fj:r(atob("Ly9hcGkuYWRpbnBsYXkuY29tL3BsYXllci92Mi9XUk0vd29ybWF0ZS5pby9wbGF5ZXIubWluLmpz")), gj:1, hj: !1, zg: !0
        }

        , J.miniclip= {
            Ag:function() {
                return btoa("V1JNX3dvcm1hdGUtaW9fMzAweDI1MF9NQw==")
            }

            , ej:function() {}

            , fj:r(atob("Ly9hcGkuYWRpbnBsYXkuY29tL3BsYXllci92Mi9XUk0vbWluaWNsaXAud29ybWF0ZS5pby9wbGF5ZXIubWluLmpz")), gj:4, hj: !1, zg: !1
        }

        ; var tt=J[window.ENV]; tt||(tt=J.main), window.onerror=function(t, i, e, n, o) {
            try {
                var s=void 0; try {
                    s=it.Ud.ze()
                }

                catch(t) {
                    s="err"
                }

                var h=o?o.stack:"[no stack]"; "undefined" !=typeof $&&$.get(u+"/pub/error.jpg?m="+encodeURI(t)+"&u="+encodeURI(i)+"&uid="+encodeURI(s)+"&ln="+encodeURI(e)+"&cn="+encodeURI(n)+"&s="+encodeURI(h), function() {}

                )
            }

            catch(o) {
                console.log("eoe: "+t+" "+i+" "+e+":"+n)
            }

            return !1
        }

        , function() {
            try {
                var t="background:#000", i="color:#", e=i+"FFC107;"+t, n=i+"26C6DA;"+t, o=i+"FFEB3B;"+t, s=i+"8BC34A;"+t, h=i+"CDDC39;"+t; console.log("A  `-.TTTTTT`-::`  AT  .:/:-`T A -/.`-:///:.`T AT  ..TT  .T  ATTT..TAT `.-------..``TA  ``.`````````TTTTTTTTT\nA sNMMd-TTTTToN@N- A  :yN@MMNy-  A.@@@MMNy-  AT.hMMd.T /mMd`TATT /mMMm/ A`odN@@@@Mmh/A`yN@MMNNN@oTTTTTTTT  \nA/@MMN-TTTT :@@s A.h@@@MM/  AN@No:-:sN@+ ATd@Mm. `y@MyTATTs@@s:AN@@@@NNNNmoAs@MNNNNNNNNh-TTTTTTTT  \nA-@@mTTTT +@@y`Am@MmddN@MM- Ad@sT  +@N A  /@@Nym@@.  AT  o@@MMo.A:////o@Md:.--.` Ay@h-..----`TTTTTTTTT \nA d@@/TTTT+@@+Ay@N+`  .h@My Ah@d.T`y@d A  h@N@@N@Ms  AT /@M+N@M:T  A s@-TT As@-TTTTT A +hhy-AT./shhhs/.  \nA -N@MMdTTTT+@@-A@MoT  -@Md Ah@Mmhyhm@d- A .@m-sNMNd/.@MN  AT-N@o +@MN.T A .@`TT A+@+``.-/+/.TT  A.@MyA `sN@@MN+ \nA  +@@-TTT  y@MMyA:@M:T  .@Mm Am@@@mo-`  A s@o  -:-` `@MM: A  .m@Nsym@MMhT A .@:TT Ay@Mmdm@MhTT  A`@M/A hMMNs::+N@/\nATs@MMyT`oys`  .N@MM-A:@M+T  +@MhA`@My/yNMMNh-TA N@sTT /@MMy A .m@MNMMNm@MM/TA -@dTT Ad@Nsshddhs-TT  A h@:A:@oT +@h\nAT y@MM/ .d@d-:d@MMo A`@MN:T:N@M/Ao@Mo  -d@m`  A-@MN.TTs@MMm A.m@Mm.--.`N@MN`  A o@M/TTA@M/T `TTT  A y@sAo@:T +@h\nAT `s@MNsm@MMNN@MMy  A s@MNdhdN@MhA`N@MdT-@Mm: A/@MMm`T  h@@`Ad@MMoT  s@MMo  A N@MdTTA@Mo.`.----.  A `..  A N@dA/@h`  .m@+\nATTo@@Md+h@@Ms`  A  oN@@@Ns`A.@MMhT N@MMyA/@@yT  s@@:A@MMm`T  `m@Md  A.@@TTAN@MNNNNNNNNd.A-mNNm:A-@MmA`d@NhhN@h`\nATT :dMMNh/T-yNMNh:T AT.+ymNNNdy+.TAy@m-T :m@NsA yN@N+T  `h@Mo`Ah@h.TT .h@o  A sNMMNoTTAo@NN@@Md`A-mMMN-A`d@oA `od@@h/  \nATTT..`TT  ``TTATTTTTTA`.`TT  .-.` A  `.--`TT  `..`  A `.`TTT  .-.TA  `..`TT A ````````..``  A  `.  A  .-. AT `-:-.`T \n".split("@").join("MMM").split("T").join("   ").split("A").join("%c"), e, n, o, s, n, e, h, e, n, o, s, n, e, h, e, n, o, s, n, e, h, e, n, o, s, n, e, h, e, n, o, s, n, e, h, e, n, e, n, o, s, n, e, h, e, n, e, n, o, s, n, e, h, e, n, e, n, o, s, n, e, h, e, n, e, n, o, s, n, e, h, e, n, e, n, o, s, n, e, h, s, e, n, e, n, o, s, n, e, h, s, e, n, e, n, o, s, n, e, h, s, e, n, e, n, o, s, n, e, h, s, e, n)
            }

            catch(t) {}
        }

        (); var it=function() {
            if(document.getElementById("game-wrap").style.display="block",  !function() {
                    return function(t, i, e) {
                        function n(t, i) {
                            return(void 0===t?"undefined":_typeof(t))===i
                        }

                        function o() {
                            return"function" !=typeof i.createElement?i.createElement(arguments[0]):u?i.createElementNS.call(i, "http://www.w3.org/2000/svg", arguments[0]):i.createElement.apply(i, arguments)
                        }

                        var s=[], h=[], a= {
                            _version:"3.3.1", _config: {
                                classPrefix:"", enableClasses: !0, enableJSClass: !0, usePrefixes: !0
                            }

                            , _q:[], on:function(t, i) {
                                var e=this; setTimeout(function() {
                                        i(e[t])
                                    }

                                    , 0)
                            }

                            , addTest:function(t, i, e) {
                                h.push( {
                                        name:t, fn:i, options:e
                                    }

                                )
                            }

                            , addAsyncTest:function(t) {
                                h.push( {
                                        name:null, fn:t
                                    }

                                )
                            }
                        }

                        , r=function() {}

                        ; r.prototype=a, r=new r; var c= !1; try {
                            c="WebSocket"in t&&2===t.WebSocket.CLOSING
                        }

                        catch(t) {}

                        r.addTest("websockets", c); var f=i.documentElement, u="svg"===f.nodeName.toLowerCase(); r.addTest("canvas", function() {
                                var t=o("canvas"); return !( !t.getContext|| !t.getContext("2d"))
                            }

                        ), r.addTest("canvastext", function() {
                                return !1 !==r.canvas&&"function"==typeof o("canvas").getContext("2d").fillText
                            }

                        ), function() {
                            var t, i, e, o, a, c, f; for(var u in h)if(h.hasOwnProperty(u)) {
                                if(t=[], i=h[u], i.name&&(t.push(i.name.toLowerCase()), i.options&&i.options.aliases&&i.options.aliases.length))for(e=0; e<i.options.aliases.length; e++)t.push(i.options.aliases[e].toLowerCase()); for(o=n(i.fn, "function")?i.fn():i.fn, a=0; a<t.length; a++)c=t[a], f=c.split("."), 1===f.length?r[f[0]]=o:( !r[f[0]]||r[f[0]]instanceof Boolean||(r[f[0]]=new Boolean(r[f[0]])), r[f[0]][f[1]]=o), s.push((o?"":"no-")+f.join("-"))
                            }
                        }

                        (), function(t) {
                            var i=f.className, e=r._config.classPrefix||""; if(u&&(i=i.baseVal), r._config.enableJSClass) {
                                var n=new RegExp("(^|\\s)"+e+"no-js(\\s|$)"); i=i.replace(n, "$1"+e+"js$2")
                            }

                            r._config.enableClasses&&(i+=" "+e+t.join(" "+e), u?f.className.baseVal=i:f.className=i)
                        }

                        (s), delete a.addTest, delete a.addAsyncTest; for(var d=0; d<r._q.length; d++)r._q[d](); t.Modernizr=r
                    }

                    (window, document), Modernizr.websockets&&Modernizr.canvas&&Modernizr.canvastext
                }

                ())return void(document.getElementById("error-view").style.display="block"); var t=function() {
                var t=parseInt(getCookie("prerollCount")); t>=0&&t<tt.gj||(t=Math.max(0, tt.gj-2)); var i= {}

                ; return i.ij=tt, i.jj=Date.now(), i.kj=0, i.lj=0, i.mj=p, i.nj=d, i.Sb=c(i, $("#game-canvas"), $("#background-canvas")), i.pb=new b(i), i.yc=new D(i), i.Tg=new S(i), i.Ud=new L(i), i.oj=function() {
                    i.Sb.F=new w(i.Sb), i.k()
                }

                , i.k=function() {
                    tt.fj.k(function() {
                            setCookie("prerollCount", t=0, 30), i.pj()
                        }

                    ), i.Sb.B=function() {
                        i.Sb.z()
                    }

                    , i.Sb.v=function() {
                        var t=i.yc.Vd.Zg(); try {
                            ga("send", "event", "game", "start", t)
                        }

                        catch(t) {}

                        i.yc.ge(i.yc.xc.Dg())
                    }

                    , i.Sb.z=function() {
                        try {
                            ga("send", "event", "game", "end")
                        }

                        catch(t) {}

                         !function() {
                            var t=Math.floor(i.Sb.G.cc), e=i.Sb.L; i.Ud.Ve()?i.Ud.$e(function() {
                                    i.qj(t, e)
                                }

                            ):i.qj(t, e)
                        }

                        ()
                    }

                    , i.Sb.A=function(t) {
                        t(i.yc.xc.Gg(), i.yc.xc.Hg())
                    }

                    , i.pb.k(function() {
                            i.Ud.Te(function() {
                                    if(i.yc.ge(i.yc.Vd), i.Ud.Ve())try {
                                        ga("set", "userId", i.Ud.ze())
                                    }

                                    catch(t) {}
                                }

                            ), addEventListener("contextmenu", function(t) {
                                    return t.preventDefault(), t.stopPropagation(),  !1
                                }

                            ), i.Sb.k(), i.yc.k(), i.Tg.k(), i.Ud.k(), i.yc.ge(i.yc.Vd)
                        }

                    )
                }

                , i.rj=function(t) {
                    var e=i.Ud.We(), n=i.yc.Vd.Zg(), o=i.yc.Vd.Be(), s=i.Tg.Ld("SKIN"), h=i.Tg.Ld("EYES"), a=i.Tg.Ld("MOUTH"), r=i.Tg.Ld("GLASSES"), c=i.Tg.Ld("HAT"); $.get(u+"/pub/wuid/"+e+"/start?gameMode="+encodeURI(n)+"&nickname="+encodeURI(o)+"&skinId="+encodeURI(s)+"&eyesId="+encodeURI(h)+"&mouthId="+encodeURI(a)+"&glassesId="+encodeURI(r)+"&hatId="+encodeURI(c), function(i) {
                            var e=i.server_url; try {
                                console.log("s.u.: "+e.substring(e.indexOf("/")+2, e.indexOf(".")))
                            }

                            catch(t) {}

                            t(e)
                        }

                    )
                }

                , i.Ug=function() {
                    if(setCookie("prerollCount", t+=1, 30),  !tt.hj&&t>=tt.gj)return i.yc.ge(i.yc.ce), void tt.fj.l(); i.pj()
                }

                , i.pj=function() {
                    if(i.Sb.ea()) {
                        i.yc.ge(i.yc.be); var t=i.yc.Vd.Zg(); setCookie("gameMode", t, 30), console.log("save gm: "+t); var e=i.yc.Ac.zc(); if(setCookie("showPlayerNames", e, 30), console.log("save sPN: "+e), i.Ud.Ve())i.rj(function(t) {
                                i.Sb.ia(t, i.Ud.We())
                            }

                        ); else {
                            var n=i.yc.Vd.Be(); setCookie("nickname", n, 30); var o=i.Tg.Ld("SKIN"); setCookie("skin", o, 30), i.rj(function(t) {
                                    i.Sb.la(t, n, o)
                                }

                            )
                        }
                    }
                }

                , i.qj=function(t, e) {
                    var n=i.yc.Vd.Be(); i.yc.xc.Fg(t, e, n), i.yc.ge(i.yc.xc.Eg())
                }

                , i.Xg=function() {
                    return i.Yg()?parseInt(getCookie("skin")):i.Tg.Od()
                }

                , i.$g=function(t) {
                    setCookie("shared",  ! !t, 1800)
                }

                , i.Yg=function() {
                    return"true"===getCookie("shared")
                }

                , i.ob=function() {
                    i.kj=Date.now(), i.lj=Math.min(1e3, i.kj-i.jj), i.Sb.P(i.kj, i.lj), i.yc.ob(i.kj, i.lj), i.jj=i.kj
                }

                , i.ib=function() {
                    i.yc.ib()
                }

                , i
            }

            (); return $(function() {
                    FastClick.attach(document.body)
                }

            ), setTimeout(function() {
                    n("//web.archive.org/web/20180416003435/https://connect.facebook.net/"+p+"/sdk.js", "facebook-jssdk", function() {
                            FB.init( {
                                    appId:"861926850619051", cookie: !0, xfbml: !0, status: !0, version:"v2.8"
                                }

                            ), t.Ud.lf()
                        }

                    ), n("//web.archive.org/web/20180416003435/https://vk.com/js/api/openapi.js?127", null, function() {
                            VK.init( {
                                    apiId:5607778
                                }

                            ), $("#__vk_like").length&&VK.Widgets.Like("__vk_like", {
                                    redesign:1, type:"mini", height:20
                                }

                            ), $("#__vk_subscribe").length&&VK.Widgets.Subscribe("__vk_subscribe", {
                                    mode:1, soft:1
                                }

                                , -124481002)
                        }

                    ), n("//web.archive.org/web/20180416003435/https://apis.google.com/js/api:client.js", null, function() {
                            gapi.load("auth2", function() {
                                    GoogleAuth=gapi.auth2.init( {
                                            client_id:"959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com"
                                        }

                                    ), t.Ud.mf()
                                }

                            )
                        }

                    ), n("//web.archive.org/web/20180416003435/https://platform.twitter.com/widgets.js", "twitter-wjs"), n("//web.archive.org/web/20180416003435/https://vk.com/js/api/share.js?90"), n("//web.archive.org/web/20180416003435/https://apis.google.com/js/platform.js"), tt.ej()
                }

                , 0), t
        }

        (); it.oj();  !function t() {
            requestAnimationFrame(t), it.ob()
        }

        (); var et=function() {
            var t=nt.width(), i=nt.height(), e=ot.outerWidth(), n=ot.outerHeight(), o=st.outerHeight(), s=ht.outerHeight(), h=Math.min(1, Math.min((i-s-o)/n, t/e)), a="translate(-50%, -50%) scale("+h+")"; ot.css( {
                    "-webkit-transform":a, "-moz-transform":a, "-ms-transform":a, "-o-transform":a, transform:a
                }

            ), it.ib(), window.scrollTo(0, 1)
        }

        , nt=$("body"), ot=$("#stretch-box"), st=$("#markup-header"), ht=$("#markup-footer"); et(), $(window).resize(et)
    }

);