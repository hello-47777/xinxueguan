import { defineConfig } from 'vitepress'
        import { withMermaid } from 'vitepress-plugin-mermaid'
        export default withMermaid(defineConfig({
          title: "心血管核心知识库",
          description: "VIP 高阶医学课程",
          ignoreDeadLinks: true,
          cleanUrls: true,
          themeConfig: {
            search: { provider: 'local' },
            nav: [ { text: 'Home', link: '/' } ],
            sidebar: [
  {
    "text": "专辑 01：心脏解剖学实景课 (Heart Anatomy - Course)",
    "collapsed": true,
    "items": [
      {
        "text": "01 Heart Orientation - Anatomy Explained in Mixed Reality",
        "link": "/%E4%B8%93%E8%BE%91%2001%EF%BC%9A%E5%BF%83%E8%84%8F%E8%A7%A3%E5%89%96%E5%AD%A6%E5%AE%9E%E6%99%AF%E8%AF%BE%20%28Heart%20Anatomy%20-%20Course%29/01%20Heart%20Orientation%20-%20Anatomy%20Explained%20in%20Mixed%20Reality"
      },
      {
        "text": "02 Heart Basic Anatomy - Explained in Mixed Reality",
        "link": "/%E4%B8%93%E8%BE%91%2001%EF%BC%9A%E5%BF%83%E8%84%8F%E8%A7%A3%E5%89%96%E5%AD%A6%E5%AE%9E%E6%99%AF%E8%AF%BE%20%28Heart%20Anatomy%20-%20Course%29/02%20Heart%20Basic%20Anatomy%20-%20Explained%20in%20Mixed%20Reality"
      },
      {
        "text": "03 Heart Chambers Anatomy - Explained in Mixed Reality",
        "link": "/%E4%B8%93%E8%BE%91%2001%EF%BC%9A%E5%BF%83%E8%84%8F%E8%A7%A3%E5%89%96%E5%AD%A6%E5%AE%9E%E6%99%AF%E8%AF%BE%20%28Heart%20Anatomy%20-%20Course%29/03%20Heart%20Chambers%20Anatomy%20-%20Explained%20in%20Mixed%20Reality"
      },
      {
        "text": "04 Right Atrium Anatomy - Explained in Mixed Reality",
        "link": "/%E4%B8%93%E8%BE%91%2001%EF%BC%9A%E5%BF%83%E8%84%8F%E8%A7%A3%E5%89%96%E5%AD%A6%E5%AE%9E%E6%99%AF%E8%AF%BE%20%28Heart%20Anatomy%20-%20Course%29/04%20Right%20Atrium%20Anatomy%20-%20Explained%20in%20Mixed%20Reality"
      },
      {
        "text": "05 Right Ventricle Anatomy - Explained in Mixed Reality",
        "link": "/%E4%B8%93%E8%BE%91%2001%EF%BC%9A%E5%BF%83%E8%84%8F%E8%A7%A3%E5%89%96%E5%AD%A6%E5%AE%9E%E6%99%AF%E8%AF%BE%20%28Heart%20Anatomy%20-%20Course%29/05%20Right%20Ventricle%20Anatomy%20-%20Explained%20in%20Mixed%20Reality"
      },
      {
        "text": "06 Left Atrium Anatomy - Explained in Mixed Reality",
        "link": "/%E4%B8%93%E8%BE%91%2001%EF%BC%9A%E5%BF%83%E8%84%8F%E8%A7%A3%E5%89%96%E5%AD%A6%E5%AE%9E%E6%99%AF%E8%AF%BE%20%28Heart%20Anatomy%20-%20Course%29/06%20Left%20Atrium%20Anatomy%20-%20Explained%20in%20Mixed%20Reality"
      },
      {
        "text": "07 Left Ventricle Anatomy - Explained in Mixed Reality",
        "link": "/%E4%B8%93%E8%BE%91%2001%EF%BC%9A%E5%BF%83%E8%84%8F%E8%A7%A3%E5%89%96%E5%AD%A6%E5%AE%9E%E6%99%AF%E8%AF%BE%20%28Heart%20Anatomy%20-%20Course%29/07%20Left%20Ventricle%20Anatomy%20-%20Explained%20in%20Mixed%20Reality"
      },
      {
        "text": "08 360 video -Cardiac Valves - Explained in Mixed Reality",
        "link": "/%E4%B8%93%E8%BE%91%2001%EF%BC%9A%E5%BF%83%E8%84%8F%E8%A7%A3%E5%89%96%E5%AD%A6%E5%AE%9E%E6%99%AF%E8%AF%BE%20%28Heart%20Anatomy%20-%20Course%29/08%20360%20video%20-Cardiac%20Valves%20-%20Explained%20in%20Mixed%20Reality"
      },
      {
        "text": "09 360 video -Tricuspid Valve - Explained in Mixed Reality",
        "link": "/%E4%B8%93%E8%BE%91%2001%EF%BC%9A%E5%BF%83%E8%84%8F%E8%A7%A3%E5%89%96%E5%AD%A6%E5%AE%9E%E6%99%AF%E8%AF%BE%20%28Heart%20Anatomy%20-%20Course%29/09%20360%20video%20-Tricuspid%20Valve%20-%20Explained%20in%20Mixed%20Reality"
      },
      {
        "text": "10 360 video - Mitral Valve - Explained in Mixed Reality",
        "link": "/%E4%B8%93%E8%BE%91%2001%EF%BC%9A%E5%BF%83%E8%84%8F%E8%A7%A3%E5%89%96%E5%AD%A6%E5%AE%9E%E6%99%AF%E8%AF%BE%20%28Heart%20Anatomy%20-%20Course%29/10%20360%20video%20-%20Mitral%20Valve%20-%20Explained%20in%20Mixed%20Reality"
      },
      {
        "text": "11 360 video - Pulmonary Valve - Explained in Mixed Reality",
        "link": "/%E4%B8%93%E8%BE%91%2001%EF%BC%9A%E5%BF%83%E8%84%8F%E8%A7%A3%E5%89%96%E5%AD%A6%E5%AE%9E%E6%99%AF%E8%AF%BE%20%28Heart%20Anatomy%20-%20Course%29/11%20360%20video%20-%20Pulmonary%20Valve%20-%20Explained%20in%20Mixed%20Reality"
      },
      {
        "text": "12 360 video - Aortic Valve - Explained in Mixed Reality",
        "link": "/%E4%B8%93%E8%BE%91%2001%EF%BC%9A%E5%BF%83%E8%84%8F%E8%A7%A3%E5%89%96%E5%AD%A6%E5%AE%9E%E6%99%AF%E8%AF%BE%20%28Heart%20Anatomy%20-%20Course%29/12%20360%20video%20-%20Aortic%20Valve%20-%20Explained%20in%20Mixed%20Reality"
      },
      {
        "text": "13 360 video - Cardiac Conduction System - Explained in Mixed Reality",
        "link": "/%E4%B8%93%E8%BE%91%2001%EF%BC%9A%E5%BF%83%E8%84%8F%E8%A7%A3%E5%89%96%E5%AD%A6%E5%AE%9E%E6%99%AF%E8%AF%BE%20%28Heart%20Anatomy%20-%20Course%29/13%20360%20video%20-%20Cardiac%20Conduction%20System%20-%20Explained%20in%20Mixed%20Reality"
      },
      {
        "text": "14 360 video - Coronary Vessels - Explained in Mixed Reality",
        "link": "/%E4%B8%93%E8%BE%91%2001%EF%BC%9A%E5%BF%83%E8%84%8F%E8%A7%A3%E5%89%96%E5%AD%A6%E5%AE%9E%E6%99%AF%E8%AF%BE%20%28Heart%20Anatomy%20-%20Course%29/14%20360%20video%20-%20Coronary%20Vessels%20-%20Explained%20in%20Mixed%20Reality"
      },
      {
        "text": "15 360 video - Coronary Arteries - Explained in Mixed Reality",
        "link": "/%E4%B8%93%E8%BE%91%2001%EF%BC%9A%E5%BF%83%E8%84%8F%E8%A7%A3%E5%89%96%E5%AD%A6%E5%AE%9E%E6%99%AF%E8%AF%BE%20%28Heart%20Anatomy%20-%20Course%29/15%20360%20video%20-%20Coronary%20Arteries%20-%20Explained%20in%20Mixed%20Reality"
      },
      {
        "text": "16 360 video - Right Coronary Artery - Explained in Mixed Reality",
        "link": "/%E4%B8%93%E8%BE%91%2001%EF%BC%9A%E5%BF%83%E8%84%8F%E8%A7%A3%E5%89%96%E5%AD%A6%E5%AE%9E%E6%99%AF%E8%AF%BE%20%28Heart%20Anatomy%20-%20Course%29/16%20360%20video%20-%20Right%20Coronary%20Artery%20-%20Explained%20in%20Mixed%20Reality"
      },
      {
        "text": "17 360 video - Left Coronary Artery - Explained in Mixed Reality",
        "link": "/%E4%B8%93%E8%BE%91%2001%EF%BC%9A%E5%BF%83%E8%84%8F%E8%A7%A3%E5%89%96%E5%AD%A6%E5%AE%9E%E6%99%AF%E8%AF%BE%20%28Heart%20Anatomy%20-%20Course%29/17%20360%20video%20-%20Left%20Coronary%20Artery%20-%20Explained%20in%20Mixed%20Reality"
      },
      {
        "text": "18 360 video - Cardiac Veins - Explained in Mixed Reality",
        "link": "/%E4%B8%93%E8%BE%91%2001%EF%BC%9A%E5%BF%83%E8%84%8F%E8%A7%A3%E5%89%96%E5%AD%A6%E5%AE%9E%E6%99%AF%E8%AF%BE%20%28Heart%20Anatomy%20-%20Course%29/18%20360%20video%20-%20Cardiac%20Veins%20-%20Explained%20in%20Mixed%20Reality"
      }
    ]
  },
  {
    "text": "专辑 02：心血管系统概览 (Cardiovascular System)",
    "collapsed": true,
    "items": [
      {
        "text": "01 Meet the heart! Circulatory system physiology NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2002%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%B3%BB%E7%BB%9F%E6%A6%82%E8%A7%88%20%28Cardiovascular%20System%29/01%20Meet%20the%20heart%21%20Circulatory%20system%20physiology%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "02 Layers of the heart Human anatomy and physiology Health & Medicine Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2002%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%B3%BB%E7%BB%9F%E6%A6%82%E8%A7%88%20%28Cardiovascular%20System%29/02%20Layers%20of%20the%20heart%20Human%20anatomy%20and%20physiology%20Health%20%26%20Medicine%20Khan%20Academy"
      },
      {
        "text": "03 Flow through the heart Circulatory system physiology NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2002%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%B3%BB%E7%BB%9F%E6%A6%82%E8%A7%88%20%28Cardiovascular%20System%29/03%20Flow%20through%20the%20heart%20Circulatory%20system%20physiology%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "04 Two Circulations in the Body Circulatory system physiology NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2002%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%B3%BB%E7%BB%9F%E6%A6%82%E8%A7%88%20%28Cardiovascular%20System%29/04%20Two%20Circulations%20in%20the%20Body%20Circulatory%20system%20physiology%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "05 Lub Dub Circulatory system physiology NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2002%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%B3%BB%E7%BB%9F%E6%A6%82%E8%A7%88%20%28Cardiovascular%20System%29/05%20Lub%20Dub%20Circulatory%20system%20physiology%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "06 Circulatory system and the heart Human anatomy and physiology Health & Medicine Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2002%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%B3%BB%E7%BB%9F%E6%A6%82%E8%A7%88%20%28Cardiovascular%20System%29/06%20Circulatory%20system%20and%20the%20heart%20Human%20anatomy%20and%20physiology%20Health%20%26%20Medicine%20Khan%20Academy"
      },
      {
        "text": "07 Arteries vs. veins-what's the difference Circulatory system physiology NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2002%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%B3%BB%E7%BB%9F%E6%A6%82%E8%A7%88%20%28Cardiovascular%20System%29/07%20Arteries%20vs.%20veins-what%27s%20the%20difference%20Circulatory%20system%20physiology%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "08 Layers of a blood vessel Circulatory system physiology NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2002%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%B3%BB%E7%BB%9F%E6%A6%82%E8%A7%88%20%28Cardiovascular%20System%29/08%20Layers%20of%20a%20blood%20vessel%20Circulatory%20system%20physiology%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "09 Arteries, arterioles, venules, and veins Health & Medicine Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2002%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%B3%BB%E7%BB%9F%E6%A6%82%E8%A7%88%20%28Cardiovascular%20System%29/09%20Arteries%2C%20arterioles%2C%20venules%2C%20and%20veins%20Health%20%26%20Medicine%20Khan%20Academy"
      },
      {
        "text": "10 Three types of capillaries Circulatory system physiology NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2002%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%B3%BB%E7%BB%9F%E6%A6%82%E8%A7%88%20%28Cardiovascular%20System%29/10%20Three%20types%20of%20capillaries%20Circulatory%20system%20physiology%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "11 Pre-capillary sphincters Circulatory system physiology NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2002%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%B3%BB%E7%BB%9F%E6%A6%82%E8%A7%88%20%28Cardiovascular%20System%29/11%20Pre-capillary%20sphincters%20Circulatory%20system%20physiology%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "12 What is blood pressure Circulatory system physiology NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2002%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%B3%BB%E7%BB%9F%E6%A6%82%E8%A7%88%20%28Cardiovascular%20System%29/12%20What%20is%20blood%20pressure%20Circulatory%20system%20physiology%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "13 Learn how a stethoscope can help determine blood pressure NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2002%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%B3%BB%E7%BB%9F%E6%A6%82%E8%A7%88%20%28Cardiovascular%20System%29/13%20Learn%20how%20a%20stethoscope%20can%20help%20determine%20blood%20pressure%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "14 Resistance in a tube Circulatory system physiology NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2002%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%B3%BB%E7%BB%9F%E6%A6%82%E8%A7%88%20%28Cardiovascular%20System%29/14%20Resistance%20in%20a%20tube%20Circulatory%20system%20physiology%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "15 Adding up resistance in series and in parallel NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2002%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%B3%BB%E7%BB%9F%E6%A6%82%E8%A7%88%20%28Cardiovascular%20System%29/15%20Adding%20up%20resistance%20in%20series%20and%20in%20parallel%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "16 Adding up resistance problem Circulatory system physiology NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2002%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%B3%BB%E7%BB%9F%E6%A6%82%E8%A7%88%20%28Cardiovascular%20System%29/16%20Adding%20up%20resistance%20problem%20Circulatory%20system%20physiology%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "17 Flow and perfusion Circulatory system physiology NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2002%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%B3%BB%E7%BB%9F%E6%A6%82%E8%A7%88%20%28Cardiovascular%20System%29/17%20Flow%20and%20perfusion%20Circulatory%20system%20physiology%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "18 Putting it all together Pressure, flow, and resistance NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2002%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%B3%BB%E7%BB%9F%E6%A6%82%E8%A7%88%20%28Cardiovascular%20System%29/18%20Putting%20it%20all%20together%20Pressure%2C%20flow%2C%20and%20resistance%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "19 Blood pressure changes over time Circulatory system physiology NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2002%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%B3%BB%E7%BB%9F%E6%A6%82%E8%A7%88%20%28Cardiovascular%20System%29/19%20Blood%20pressure%20changes%20over%20time%20Circulatory%20system%20physiology%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "20 Regulation of blood pressure with baroreceptors NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2002%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%B3%BB%E7%BB%9F%E6%A6%82%E8%A7%88%20%28Cardiovascular%20System%29/20%20Regulation%20of%20blood%20pressure%20with%20baroreceptors%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "21 Parts of a nephron Circulatory system physiology NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2002%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%B3%BB%E7%BB%9F%E6%A6%82%E8%A7%88%20%28Cardiovascular%20System%29/21%20Parts%20of%20a%20nephron%20Circulatory%20system%20physiology%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "22 General overview of the RAAS system Cells and hormones NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2002%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%B3%BB%E7%BB%9F%E6%A6%82%E8%A7%88%20%28Cardiovascular%20System%29/22%20General%20overview%20of%20the%20RAAS%20system%20Cells%20and%20hormones%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "23 Renin production in the kidneys Renal system physiology NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2002%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%B3%BB%E7%BB%9F%E6%A6%82%E8%A7%88%20%28Cardiovascular%20System%29/23%20Renin%20production%20in%20the%20kidneys%20Renal%20system%20physiology%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "24 Activating angiotensin 2 Renal system physiology NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2002%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%B3%BB%E7%BB%9F%E6%A6%82%E8%A7%88%20%28Cardiovascular%20System%29/24%20Activating%20angiotensin%202%20Renal%20system%20physiology%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "25 Angiotensin 2 raises blood pressure Renal system physiology NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2002%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%B3%BB%E7%BB%9F%E6%A6%82%E8%A7%88%20%28Cardiovascular%20System%29/25%20Angiotensin%202%20raises%20blood%20pressure%20Renal%20system%20physiology%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "26 Aldosterone raises blood pressure and lowers potassium NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2002%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%B3%BB%E7%BB%9F%E6%A6%82%E8%A7%88%20%28Cardiovascular%20System%29/26%20Aldosterone%20raises%20blood%20pressure%20and%20lowers%20potassium%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "27 Aldosterone removes acid from the blood Renal system physiology NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2002%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%B3%BB%E7%BB%9F%E6%A6%82%E8%A7%88%20%28Cardiovascular%20System%29/27%20Aldosterone%20removes%20acid%20from%20the%20blood%20Renal%20system%20physiology%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "28 ADH secretion Renal system physiology NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2002%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%B3%BB%E7%BB%9F%E6%A6%82%E8%A7%88%20%28Cardiovascular%20System%29/28%20ADH%20secretion%20Renal%20system%20physiology%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "29 ADH effects on blood pressure Renal system physiology NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2002%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%B3%BB%E7%BB%9F%E6%A6%82%E8%A7%88%20%28Cardiovascular%20System%29/29%20ADH%20effects%20on%20blood%20pressure%20Renal%20system%20physiology%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "30 Aldosterone and ADH Renal system physiology NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2002%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%B3%BB%E7%BB%9F%E6%A6%82%E8%A7%88%20%28Cardiovascular%20System%29/30%20Aldosterone%20and%20ADH%20Renal%20system%20physiology%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "31 Conduction system of the heart",
        "link": "/%E4%B8%93%E8%BE%91%2002%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%B3%BB%E7%BB%9F%E6%A6%82%E8%A7%88%20%28Cardiovascular%20System%29/31%20Conduction%20system%20of%20the%20heart"
      },
      {
        "text": "32 Overview of Heart Anatomy Tutorial",
        "link": "/%E4%B8%93%E8%BE%91%2002%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%B3%BB%E7%BB%9F%E6%A6%82%E8%A7%88%20%28Cardiovascular%20System%29/32%20Overview%20of%20Heart%20Anatomy%20Tutorial"
      },
      {
        "text": "33 Systemic arteries",
        "link": "/%E4%B8%93%E8%BE%91%2002%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%B3%BB%E7%BB%9F%E6%A6%82%E8%A7%88%20%28Cardiovascular%20System%29/33%20Systemic%20arteries"
      }
    ]
  },
  {
    "text": "专辑 03：心血管生理学深度精讲 (Cardiovascular Physiology)",
    "collapsed": true,
    "items": [
      {
        "text": "01 Cardiovascular Anatomy of the Heart Heart Model",
        "link": "/%E4%B8%93%E8%BE%91%2003%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%94%9F%E7%90%86%E5%AD%A6%E6%B7%B1%E5%BA%A6%E7%B2%BE%E8%AE%B2%20%28Cardiovascular%20Physiology%29/01%20Cardiovascular%20Anatomy%20of%20the%20Heart%20Heart%20Model"
      },
      {
        "text": "02 Cardiovascular Structures and Layers of the Heart",
        "link": "/%E4%B8%93%E8%BE%91%2003%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%94%9F%E7%90%86%E5%AD%A6%E6%B7%B1%E5%BA%A6%E7%B2%BE%E8%AE%B2%20%28Cardiovascular%20Physiology%29/02%20Cardiovascular%20Structures%20and%20Layers%20of%20the%20Heart"
      },
      {
        "text": "03 Cardiovascular Electrophysiology Intrinsic Cardiac Conduction System",
        "link": "/%E4%B8%93%E8%BE%91%2003%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%94%9F%E7%90%86%E5%AD%A6%E6%B7%B1%E5%BA%A6%E7%B2%BE%E8%AE%B2%20%28Cardiovascular%20Physiology%29/03%20Cardiovascular%20Electrophysiology%20Intrinsic%20Cardiac%20Conduction%20System"
      },
      {
        "text": "04 Cardiovascular Electrophysiology Extrinsic Cardiac Conduction System",
        "link": "/%E4%B8%93%E8%BE%91%2003%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%94%9F%E7%90%86%E5%AD%A6%E6%B7%B1%E5%BA%A6%E7%B2%BE%E8%AE%B2%20%28Cardiovascular%20Physiology%29/04%20Cardiovascular%20Electrophysiology%20Extrinsic%20Cardiac%20Conduction%20System"
      },
      {
        "text": "05 ECG Basics How to Read & Interpret ECGs Updated Lecture",
        "link": "/%E4%B8%93%E8%BE%91%2003%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%94%9F%E7%90%86%E5%AD%A6%E6%B7%B1%E5%BA%A6%E7%B2%BE%E8%AE%B2%20%28Cardiovascular%20Physiology%29/05%20ECG%20Basics%20How%20to%20Read%20%26%20Interpret%20ECGs%20Updated%20Lecture"
      },
      {
        "text": "06 Cardiovascular ECG Basics",
        "link": "/%E4%B8%93%E8%BE%91%2003%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%94%9F%E7%90%86%E5%AD%A6%E6%B7%B1%E5%BA%A6%E7%B2%BE%E8%AE%B2%20%28Cardiovascular%20Physiology%29/06%20Cardiovascular%20ECG%20Basics"
      },
      {
        "text": "07 Cardiovascular ECG's",
        "link": "/%E4%B8%93%E8%BE%91%2003%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%94%9F%E7%90%86%E5%AD%A6%E6%B7%B1%E5%BA%A6%E7%B2%BE%E8%AE%B2%20%28Cardiovascular%20Physiology%29/07%20Cardiovascular%20ECG%27s"
      },
      {
        "text": "08 Cardiovascular Cardiac Cycle",
        "link": "/%E4%B8%93%E8%BE%91%2003%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%94%9F%E7%90%86%E5%AD%A6%E6%B7%B1%E5%BA%A6%E7%B2%BE%E8%AE%B2%20%28Cardiovascular%20Physiology%29/08%20Cardiovascular%20Cardiac%20Cycle"
      },
      {
        "text": "09 Cardiovascular Cardiac Cycle Digital Version",
        "link": "/%E4%B8%93%E8%BE%91%2003%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%94%9F%E7%90%86%E5%AD%A6%E6%B7%B1%E5%BA%A6%E7%B2%BE%E8%AE%B2%20%28Cardiovascular%20Physiology%29/09%20Cardiovascular%20Cardiac%20Cycle%20Digital%20Version"
      },
      {
        "text": "10 Cardiovascular Cardiac Output",
        "link": "/%E4%B8%93%E8%BE%91%2003%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%94%9F%E7%90%86%E5%AD%A6%E6%B7%B1%E5%BA%A6%E7%B2%BE%E8%AE%B2%20%28Cardiovascular%20Physiology%29/10%20Cardiovascular%20Cardiac%20Output"
      },
      {
        "text": "11 Cardiovascular Blood Vessel Characteristics",
        "link": "/%E4%B8%93%E8%BE%91%2003%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%94%9F%E7%90%86%E5%AD%A6%E6%B7%B1%E5%BA%A6%E7%B2%BE%E8%AE%B2%20%28Cardiovascular%20Physiology%29/11%20Cardiovascular%20Blood%20Vessel%20Characteristics"
      },
      {
        "text": "12 Cardiovascular Tunic Layers & Types of Capillaries",
        "link": "/%E4%B8%93%E8%BE%91%2003%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%94%9F%E7%90%86%E5%AD%A6%E6%B7%B1%E5%BA%A6%E7%B2%BE%E8%AE%B2%20%28Cardiovascular%20Physiology%29/12%20Cardiovascular%20Tunic%20Layers%20%26%20Types%20of%20Capillaries"
      },
      {
        "text": "13 Cardiovascular Microcirculation",
        "link": "/%E4%B8%93%E8%BE%91%2003%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%94%9F%E7%90%86%E5%AD%A6%E6%B7%B1%E5%BA%A6%E7%B2%BE%E8%AE%B2%20%28Cardiovascular%20Physiology%29/13%20Cardiovascular%20Microcirculation"
      },
      {
        "text": "14 Cardiovascular Fundamentals of Blood Pressure",
        "link": "/%E4%B8%93%E8%BE%91%2003%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%94%9F%E7%90%86%E5%AD%A6%E6%B7%B1%E5%BA%A6%E7%B2%BE%E8%AE%B2%20%28Cardiovascular%20Physiology%29/14%20Cardiovascular%20Fundamentals%20of%20Blood%20Pressure"
      },
      {
        "text": "15 Cardiovascular Blood Pressure Regulation Hypotension",
        "link": "/%E4%B8%93%E8%BE%91%2003%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%94%9F%E7%90%86%E5%AD%A6%E6%B7%B1%E5%BA%A6%E7%B2%BE%E8%AE%B2%20%28Cardiovascular%20Physiology%29/15%20Cardiovascular%20Blood%20Pressure%20Regulation%20Hypotension"
      },
      {
        "text": "16 Cardiovascular Blood Pressure Regulation Hypertension",
        "link": "/%E4%B8%93%E8%BE%91%2003%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%94%9F%E7%90%86%E5%AD%A6%E6%B7%B1%E5%BA%A6%E7%B2%BE%E8%AE%B2%20%28Cardiovascular%20Physiology%29/16%20Cardiovascular%20Blood%20Pressure%20Regulation%20Hypertension"
      },
      {
        "text": "17 The Cardiovascular System An Overview",
        "link": "/%E4%B8%93%E8%BE%91%2003%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%94%9F%E7%90%86%E5%AD%A6%E6%B7%B1%E5%BA%A6%E7%B2%BE%E8%AE%B2%20%28Cardiovascular%20Physiology%29/17%20The%20Cardiovascular%20System%20An%20Overview"
      },
      {
        "text": "18 The Cardiac Action Potential",
        "link": "/%E4%B8%93%E8%BE%91%2003%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%94%9F%E7%90%86%E5%AD%A6%E6%B7%B1%E5%BA%A6%E7%B2%BE%E8%AE%B2%20%28Cardiovascular%20Physiology%29/18%20The%20Cardiac%20Action%20Potential"
      },
      {
        "text": "19 Cardiac Excitation-Contraction Coupling",
        "link": "/%E4%B8%93%E8%BE%91%2003%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%94%9F%E7%90%86%E5%AD%A6%E6%B7%B1%E5%BA%A6%E7%B2%BE%E8%AE%B2%20%28Cardiovascular%20Physiology%29/19%20Cardiac%20Excitation-Contraction%20Coupling"
      },
      {
        "text": "20 Cardiac Mechanics (preload, afterload, contractility, ejection fraction, and cardiac output)",
        "link": "/%E4%B8%93%E8%BE%91%2003%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%94%9F%E7%90%86%E5%AD%A6%E6%B7%B1%E5%BA%A6%E7%B2%BE%E8%AE%B2%20%28Cardiovascular%20Physiology%29/20%20Cardiac%20Mechanics%20%28preload%2C%20afterload%2C%20contractility%2C%20ejection%20fraction%2C%20and%20cardiac%20output%29"
      },
      {
        "text": "21 The Cardiac Cycle and PV Loops",
        "link": "/%E4%B8%93%E8%BE%91%2003%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%94%9F%E7%90%86%E5%AD%A6%E6%B7%B1%E5%BA%A6%E7%B2%BE%E8%AE%B2%20%28Cardiovascular%20Physiology%29/21%20The%20Cardiac%20Cycle%20and%20PV%20Loops"
      },
      {
        "text": "22 Hemodynamics",
        "link": "/%E4%B8%93%E8%BE%91%2003%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%94%9F%E7%90%86%E5%AD%A6%E6%B7%B1%E5%BA%A6%E7%B2%BE%E8%AE%B2%20%28Cardiovascular%20Physiology%29/22%20Hemodynamics"
      },
      {
        "text": "23 Viscosity and Turbulence",
        "link": "/%E4%B8%93%E8%BE%91%2003%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%94%9F%E7%90%86%E5%AD%A6%E6%B7%B1%E5%BA%A6%E7%B2%BE%E8%AE%B2%20%28Cardiovascular%20Physiology%29/23%20Viscosity%20and%20Turbulence"
      },
      {
        "text": "24 The Arterial System and Blood Pressure",
        "link": "/%E4%B8%93%E8%BE%91%2003%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E7%94%9F%E7%90%86%E5%AD%A6%E6%B7%B1%E5%BA%A6%E7%B2%BE%E8%AE%B2%20%28Cardiovascular%20Physiology%29/24%20The%20Arterial%20System%20and%20Blood%20Pressure"
      }
    ]
  },
  {
    "text": "专辑 04：抗心律失常药物详解 (Antiarrhythmics)",
    "collapsed": true,
    "items": [
      {
        "text": "01 Wide Complex Tachycardia (Part 1 of 2) INTERMEDIATE ADVANCED",
        "link": "/%E4%B8%93%E8%BE%91%2004%EF%BC%9A%E6%8A%97%E5%BF%83%E5%BE%8B%E5%A4%B1%E5%B8%B8%E8%8D%AF%E7%89%A9%E8%AF%A6%E8%A7%A3%20%28Antiarrhythmics%29/01%20Wide%20Complex%20Tachycardia%20%28Part%201%20of%202%29%20INTERMEDIATE%20ADVANCED"
      },
      {
        "text": "02 Wide Complex Tachycardia (Part 2 of 2) INTERMEDIATE ADVANCED",
        "link": "/%E4%B8%93%E8%BE%91%2004%EF%BC%9A%E6%8A%97%E5%BF%83%E5%BE%8B%E5%A4%B1%E5%B8%B8%E8%8D%AF%E7%89%A9%E8%AF%A6%E8%A7%A3%20%28Antiarrhythmics%29/02%20Wide%20Complex%20Tachycardia%20%28Part%202%20of%202%29%20INTERMEDIATE%20ADVANCED"
      },
      {
        "text": "03 Approach to SVT Diagnosis Part 1",
        "link": "/%E4%B8%93%E8%BE%91%2004%EF%BC%9A%E6%8A%97%E5%BF%83%E5%BE%8B%E5%A4%B1%E5%B8%B8%E8%8D%AF%E7%89%A9%E8%AF%A6%E8%A7%A3%20%28Antiarrhythmics%29/03%20Approach%20to%20SVT%20Diagnosis%20Part%201"
      },
      {
        "text": "04 Approach to SVT Diagnosis Part 2",
        "link": "/%E4%B8%93%E8%BE%91%2004%EF%BC%9A%E6%8A%97%E5%BF%83%E5%BE%8B%E5%A4%B1%E5%B8%B8%E8%8D%AF%E7%89%A9%E8%AF%A6%E8%A7%A3%20%28Antiarrhythmics%29/04%20Approach%20to%20SVT%20Diagnosis%20Part%202"
      },
      {
        "text": "05 AV blocks & Bradycardia Part 13 (INTERMEDIATE ADVANCED ECGs)",
        "link": "/%E4%B8%93%E8%BE%91%2004%EF%BC%9A%E6%8A%97%E5%BF%83%E5%BE%8B%E5%A4%B1%E5%B8%B8%E8%8D%AF%E7%89%A9%E8%AF%A6%E8%A7%A3%20%28Antiarrhythmics%29/05%20AV%20blocks%20%26%20Bradycardia%20Part%2013%20%28INTERMEDIATE%20ADVANCED%20ECGs%29"
      },
      {
        "text": "06 AV blocks & Bradycardia Part 23 (INTERMEDIATE ADVANCED ECGs)",
        "link": "/%E4%B8%93%E8%BE%91%2004%EF%BC%9A%E6%8A%97%E5%BF%83%E5%BE%8B%E5%A4%B1%E5%B8%B8%E8%8D%AF%E7%89%A9%E8%AF%A6%E8%A7%A3%20%28Antiarrhythmics%29/06%20AV%20blocks%20%26%20Bradycardia%20Part%2023%20%28INTERMEDIATE%20ADVANCED%20ECGs%29"
      },
      {
        "text": "07 AV blocks & Bradycardia Part 33 (INTERMEDIATE ADVANCED ECGs)",
        "link": "/%E4%B8%93%E8%BE%91%2004%EF%BC%9A%E6%8A%97%E5%BF%83%E5%BE%8B%E5%A4%B1%E5%B8%B8%E8%8D%AF%E7%89%A9%E8%AF%A6%E8%A7%A3%20%28Antiarrhythmics%29/07%20AV%20blocks%20%26%20Bradycardia%20Part%2033%20%28INTERMEDIATE%20ADVANCED%20ECGs%29"
      }
    ]
  },
  {
    "text": "专辑 05：心电图基础入门 (ECG Basics)",
    "collapsed": true,
    "items": [
      {
        "text": "01 Rate and Rhythm Normal Sinus Rhythm",
        "link": "/%E4%B8%93%E8%BE%91%2005%EF%BC%9A%E5%BF%83%E7%94%B5%E5%9B%BE%E5%9F%BA%E7%A1%80%E5%85%A5%E9%97%A8%20%28ECG%20Basics%29/01%20Rate%20and%20Rhythm%20Normal%20Sinus%20Rhythm"
      },
      {
        "text": "02 Rate and Rhythm Sinus Bradycardia and Sinus Tachycardia",
        "link": "/%E4%B8%93%E8%BE%91%2005%EF%BC%9A%E5%BF%83%E7%94%B5%E5%9B%BE%E5%9F%BA%E7%A1%80%E5%85%A5%E9%97%A8%20%28ECG%20Basics%29/02%20Rate%20and%20Rhythm%20Sinus%20Bradycardia%20and%20Sinus%20Tachycardia"
      },
      {
        "text": "03 Rate and Rhythm Junctional and Idioventricular Rhythm",
        "link": "/%E4%B8%93%E8%BE%91%2005%EF%BC%9A%E5%BF%83%E7%94%B5%E5%9B%BE%E5%9F%BA%E7%A1%80%E5%85%A5%E9%97%A8%20%28ECG%20Basics%29/03%20Rate%20and%20Rhythm%20Junctional%20and%20Idioventricular%20Rhythm"
      },
      {
        "text": "04 Rate and Rhythm Atrial Fibrillation and Atrial Flutter",
        "link": "/%E4%B8%93%E8%BE%91%2005%EF%BC%9A%E5%BF%83%E7%94%B5%E5%9B%BE%E5%9F%BA%E7%A1%80%E5%85%A5%E9%97%A8%20%28ECG%20Basics%29/04%20Rate%20and%20Rhythm%20Atrial%20Fibrillation%20and%20Atrial%20Flutter"
      },
      {
        "text": "05 Rate and Rhythm Supraventricular Tachycardia (SVT) and Wolff-Parkinson-White (WPW) Syndrome",
        "link": "/%E4%B8%93%E8%BE%91%2005%EF%BC%9A%E5%BF%83%E7%94%B5%E5%9B%BE%E5%9F%BA%E7%A1%80%E5%85%A5%E9%97%A8%20%28ECG%20Basics%29/05%20Rate%20and%20Rhythm%20Supraventricular%20Tachycardia%20%28SVT%29%20and%20Wolff-Parkinson-White%20%28WPW%29%20Syndrome"
      },
      {
        "text": "06 Rate and Rhythm Premature Atrial Contraction (PAC)",
        "link": "/%E4%B8%93%E8%BE%91%2005%EF%BC%9A%E5%BF%83%E7%94%B5%E5%9B%BE%E5%9F%BA%E7%A1%80%E5%85%A5%E9%97%A8%20%28ECG%20Basics%29/06%20Rate%20and%20Rhythm%20Premature%20Atrial%20Contraction%20%28PAC%29"
      },
      {
        "text": "07 Rate and Rhythm Premature Ventricular Contraction (PVC)",
        "link": "/%E4%B8%93%E8%BE%91%2005%EF%BC%9A%E5%BF%83%E7%94%B5%E5%9B%BE%E5%9F%BA%E7%A1%80%E5%85%A5%E9%97%A8%20%28ECG%20Basics%29/07%20Rate%20and%20Rhythm%20Premature%20Ventricular%20Contraction%20%28PVC%29"
      },
      {
        "text": "08 Rate and Rhythm Ventricular Tachycardia",
        "link": "/%E4%B8%93%E8%BE%91%2005%EF%BC%9A%E5%BF%83%E7%94%B5%E5%9B%BE%E5%9F%BA%E7%A1%80%E5%85%A5%E9%97%A8%20%28ECG%20Basics%29/08%20Rate%20and%20Rhythm%20Ventricular%20Tachycardia"
      },
      {
        "text": "09 Rate and Rhythm Torsades de Pointes",
        "link": "/%E4%B8%93%E8%BE%91%2005%EF%BC%9A%E5%BF%83%E7%94%B5%E5%9B%BE%E5%9F%BA%E7%A1%80%E5%85%A5%E9%97%A8%20%28ECG%20Basics%29/09%20Rate%20and%20Rhythm%20Torsades%20de%20Pointes"
      },
      {
        "text": "10 Rate and Rhythm Ventricular Fibrillation",
        "link": "/%E4%B8%93%E8%BE%91%2005%EF%BC%9A%E5%BF%83%E7%94%B5%E5%9B%BE%E5%9F%BA%E7%A1%80%E5%85%A5%E9%97%A8%20%28ECG%20Basics%29/10%20Rate%20and%20Rhythm%20Ventricular%20Fibrillation"
      }
    ]
  },
  {
    "text": "专辑 06：12导联心电图判读大师 (12 Lead EKG Mastery)",
    "collapsed": true,
    "items": [
      {
        "text": "01 The Anatomy of the Coronary Circulation",
        "link": "/%E4%B8%93%E8%BE%91%2006%EF%BC%9A12%E5%AF%BC%E8%81%94%E5%BF%83%E7%94%B5%E5%9B%BE%E5%88%A4%E8%AF%BB%E5%A4%A7%E5%B8%88%20%2812%20Lead%20EKG%20Mastery%29/01%20The%20Anatomy%20of%20the%20Coronary%20Circulation"
      },
      {
        "text": "02 What is the PHYSIOLOGY of the coronary circulation",
        "link": "/%E4%B8%93%E8%BE%91%2006%EF%BC%9A12%E5%AF%BC%E8%81%94%E5%BF%83%E7%94%B5%E5%9B%BE%E5%88%A4%E8%AF%BB%E5%A4%A7%E5%B8%88%20%2812%20Lead%20EKG%20Mastery%29/02%20What%20is%20the%20PHYSIOLOGY%20of%20the%20coronary%20circulation"
      },
      {
        "text": "03 The Electrical Conduction System of the Heart EXPLAINED!",
        "link": "/%E4%B8%93%E8%BE%91%2006%EF%BC%9A12%E5%AF%BC%E8%81%94%E5%BF%83%E7%94%B5%E5%9B%BE%E5%88%A4%E8%AF%BB%E5%A4%A7%E5%B8%88%20%2812%20Lead%20EKG%20Mastery%29/03%20The%20Electrical%20Conduction%20System%20of%20the%20Heart%20EXPLAINED%21"
      },
      {
        "text": "04 Introduction to Concepts of 12-Lead EKG Interpretation",
        "link": "/%E4%B8%93%E8%BE%91%2006%EF%BC%9A12%E5%AF%BC%E8%81%94%E5%BF%83%E7%94%B5%E5%9B%BE%E5%88%A4%E8%AF%BB%E5%A4%A7%E5%B8%88%20%2812%20Lead%20EKG%20Mastery%29/04%20Introduction%20to%20Concepts%20of%2012-Lead%20EKG%20Interpretation"
      },
      {
        "text": "05 The SIMPLE Steps of 12-Lead EKG Interpretation - EXPLAINED CLEARLY!",
        "link": "/%E4%B8%93%E8%BE%91%2006%EF%BC%9A12%E5%AF%BC%E8%81%94%E5%BF%83%E7%94%B5%E5%9B%BE%E5%88%A4%E8%AF%BB%E5%A4%A7%E5%B8%88%20%2812%20Lead%20EKG%20Mastery%29/05%20The%20SIMPLE%20Steps%20of%2012-Lead%20EKG%20Interpretation%20-%20EXPLAINED%20CLEARLY%21"
      },
      {
        "text": "06 Bundle Branch Blocks MADE EASY!! - 12 Lead EKG",
        "link": "/%E4%B8%93%E8%BE%91%2006%EF%BC%9A12%E5%AF%BC%E8%81%94%E5%BF%83%E7%94%B5%E5%9B%BE%E5%88%A4%E8%AF%BB%E5%A4%A7%E5%B8%88%20%2812%20Lead%20EKG%20Mastery%29/06%20Bundle%20Branch%20Blocks%20MADE%20EASY%21%21%20-%2012%20Lead%20EKG"
      },
      {
        "text": "07 Understanding Cardiac Axis and Deviations - 12-Lead EKG",
        "link": "/%E4%B8%93%E8%BE%91%2006%EF%BC%9A12%E5%AF%BC%E8%81%94%E5%BF%83%E7%94%B5%E5%9B%BE%E5%88%A4%E8%AF%BB%E5%A4%A7%E5%B8%88%20%2812%20Lead%20EKG%20Mastery%29/07%20Understanding%20Cardiac%20Axis%20and%20Deviations%20-%2012-Lead%20EKG"
      },
      {
        "text": "08 IDENTIFY Atrial Enlargement on 12-Lead EKG",
        "link": "/%E4%B8%93%E8%BE%91%2006%EF%BC%9A12%E5%AF%BC%E8%81%94%E5%BF%83%E7%94%B5%E5%9B%BE%E5%88%A4%E8%AF%BB%E5%A4%A7%E5%B8%88%20%2812%20Lead%20EKG%20Mastery%29/08%20IDENTIFY%20Atrial%20Enlargement%20on%2012-Lead%20EKG"
      },
      {
        "text": "09 Ventricular Hypertrophy (LVH & RVH) on 12-Lead EKG",
        "link": "/%E4%B8%93%E8%BE%91%2006%EF%BC%9A12%E5%AF%BC%E8%81%94%E5%BF%83%E7%94%B5%E5%9B%BE%E5%88%A4%E8%AF%BB%E5%A4%A7%E5%B8%88%20%2812%20Lead%20EKG%20Mastery%29/09%20Ventricular%20Hypertrophy%20%28LVH%20%26%20RVH%29%20on%2012-Lead%20EKG"
      },
      {
        "text": "10 The ST Segment and T Wave REVIEW",
        "link": "/%E4%B8%93%E8%BE%91%2006%EF%BC%9A12%E5%AF%BC%E8%81%94%E5%BF%83%E7%94%B5%E5%9B%BE%E5%88%A4%E8%AF%BB%E5%A4%A7%E5%B8%88%20%2812%20Lead%20EKG%20Mastery%29/10%20The%20ST%20Segment%20and%20T%20Wave%20REVIEW"
      },
      {
        "text": "11 Introductory Concepts for Acute Myocardial Infarction (AMI) on 12-Lead EKG",
        "link": "/%E4%B8%93%E8%BE%91%2006%EF%BC%9A12%E5%AF%BC%E8%81%94%E5%BF%83%E7%94%B5%E5%9B%BE%E5%88%A4%E8%AF%BB%E5%A4%A7%E5%B8%88%20%2812%20Lead%20EKG%20Mastery%29/11%20Introductory%20Concepts%20for%20Acute%20Myocardial%20Infarction%20%28AMI%29%20on%2012-Lead%20EKG"
      },
      {
        "text": "12 Myocardial Ischemia - ST Depression & T Wave Inversion - 12-lead EKG",
        "link": "/%E4%B8%93%E8%BE%91%2006%EF%BC%9A12%E5%AF%BC%E8%81%94%E5%BF%83%E7%94%B5%E5%9B%BE%E5%88%A4%E8%AF%BB%E5%A4%A7%E5%B8%88%20%2812%20Lead%20EKG%20Mastery%29/12%20Myocardial%20Ischemia%20-%20ST%20Depression%20%26%20T%20Wave%20Inversion%20-%2012-lead%20EKG"
      },
      {
        "text": "13 Recognize ST Elevation Myocardial Infarction (STEMI) on 12-lead EKG!",
        "link": "/%E4%B8%93%E8%BE%91%2006%EF%BC%9A12%E5%AF%BC%E8%81%94%E5%BF%83%E7%94%B5%E5%9B%BE%E5%88%A4%E8%AF%BB%E5%A4%A7%E5%B8%88%20%2812%20Lead%20EKG%20Mastery%29/13%20Recognize%20ST%20Elevation%20Myocardial%20Infarction%20%28STEMI%29%20on%2012-lead%20EKG%21"
      },
      {
        "text": "14 HOW-TO Recognize STEMI Mimics on 12-Lead EKG!",
        "link": "/%E4%B8%93%E8%BE%91%2006%EF%BC%9A12%E5%AF%BC%E8%81%94%E5%BF%83%E7%94%B5%E5%9B%BE%E5%88%A4%E8%AF%BB%E5%A4%A7%E5%B8%88%20%2812%20Lead%20EKG%20Mastery%29/14%20HOW-TO%20Recognize%20STEMI%20Mimics%20on%2012-Lead%20EKG%21"
      },
      {
        "text": "15 Sgarbossa's Criteria - HOW TO Identify AMI with LBBB on 12-lead EKG",
        "link": "/%E4%B8%93%E8%BE%91%2006%EF%BC%9A12%E5%AF%BC%E8%81%94%E5%BF%83%E7%94%B5%E5%9B%BE%E5%88%A4%E8%AF%BB%E5%A4%A7%E5%B8%88%20%2812%20Lead%20EKG%20Mastery%29/15%20Sgarbossa%27s%20Criteria%20-%20HOW%20TO%20Identify%20AMI%20with%20LBBB%20on%2012-lead%20EKG"
      }
    ]
  },
  {
    "text": "专辑 07：心律失常诊断实战 (Arrhythmia Diagnosis)",
    "collapsed": true,
    "items": [
      {
        "text": "01 Antiarrhythmics (Lesson 1 - An Introduction)",
        "link": "/%E4%B8%93%E8%BE%91%2007%EF%BC%9A%E5%BF%83%E5%BE%8B%E5%A4%B1%E5%B8%B8%E8%AF%8A%E6%96%AD%E5%AE%9E%E6%88%98%20%28Arrhythmia%20Diagnosis%29/01%20Antiarrhythmics%20%28Lesson%201%20-%20An%20Introduction%29"
      },
      {
        "text": "02 Antiarrhythmics (Lesson 2 - Sodium Channel Blockers)",
        "link": "/%E4%B8%93%E8%BE%91%2007%EF%BC%9A%E5%BF%83%E5%BE%8B%E5%A4%B1%E5%B8%B8%E8%AF%8A%E6%96%AD%E5%AE%9E%E6%88%98%20%28Arrhythmia%20Diagnosis%29/02%20Antiarrhythmics%20%28Lesson%202%20-%20Sodium%20Channel%20Blockers%29"
      },
      {
        "text": "03 Antiarrhythmics (Lesson 3 - Beta Blockers)",
        "link": "/%E4%B8%93%E8%BE%91%2007%EF%BC%9A%E5%BF%83%E5%BE%8B%E5%A4%B1%E5%B8%B8%E8%AF%8A%E6%96%AD%E5%AE%9E%E6%88%98%20%28Arrhythmia%20Diagnosis%29/03%20Antiarrhythmics%20%28Lesson%203%20-%20Beta%20Blockers%29"
      },
      {
        "text": "04 Antiarrhythmics (Lesson 4 - Potassium Channel Blockers)",
        "link": "/%E4%B8%93%E8%BE%91%2007%EF%BC%9A%E5%BF%83%E5%BE%8B%E5%A4%B1%E5%B8%B8%E8%AF%8A%E6%96%AD%E5%AE%9E%E6%88%98%20%28Arrhythmia%20Diagnosis%29/04%20Antiarrhythmics%20%28Lesson%204%20-%20Potassium%20Channel%20Blockers%29"
      },
      {
        "text": "05 Antiarrhythmics (Lesson 5 - Calcium Channel Blockers)",
        "link": "/%E4%B8%93%E8%BE%91%2007%EF%BC%9A%E5%BF%83%E5%BE%8B%E5%A4%B1%E5%B8%B8%E8%AF%8A%E6%96%AD%E5%AE%9E%E6%88%98%20%28Arrhythmia%20Diagnosis%29/05%20Antiarrhythmics%20%28Lesson%205%20-%20Calcium%20Channel%20Blockers%29"
      },
      {
        "text": "06 Antiarrhythmics (Lesson 6 - Digoxin, Adenosine, Atropine, Isoproterenol, and Ivabradine)",
        "link": "/%E4%B8%93%E8%BE%91%2007%EF%BC%9A%E5%BF%83%E5%BE%8B%E5%A4%B1%E5%B8%B8%E8%AF%8A%E6%96%AD%E5%AE%9E%E6%88%98%20%28Arrhythmia%20Diagnosis%29/06%20Antiarrhythmics%20%28Lesson%206%20-%20Digoxin%2C%20Adenosine%2C%20Atropine%2C%20Isoproterenol%2C%20and%20Ivabradine%29"
      },
      {
        "text": "07 Antiarrhytmics (Lesson 7 - How to Choose the Right Med and Classic Pitfalls)",
        "link": "/%E4%B8%93%E8%BE%91%2007%EF%BC%9A%E5%BF%83%E5%BE%8B%E5%A4%B1%E5%B8%B8%E8%AF%8A%E6%96%AD%E5%AE%9E%E6%88%98%20%28Arrhythmia%20Diagnosis%29/07%20Antiarrhytmics%20%28Lesson%207%20-%20How%20to%20Choose%20the%20Right%20Med%20and%20Classic%20Pitfalls%29"
      }
    ]
  },
  {
    "text": "专辑 08：心血管检查技术 (Procedures and Tests)",
    "collapsed": true,
    "items": [
      {
        "text": "1_How Hidden Prediabetic Patients are found with Kraft Tests and 5 Major Causes of Insulin Resistance",
        "link": "/%E4%B8%93%E8%BE%91%2008%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E6%A3%80%E6%9F%A5%E6%8A%80%E6%9C%AF%20%28Procedures%20and%20Tests%29/1_How%20Hidden%20Prediabetic%20Patients%20are%20found%20with%20Kraft%20Tests%20and%205%20Major%20Causes%20of%20Insulin%20Resistance"
      },
      {
        "text": "2 Why External Counterpulsation (ECP or EECP) benefits patients with Chest Pain and Coronary Calcium",
        "link": "/%E4%B8%93%E8%BE%91%2008%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E6%A3%80%E6%9F%A5%E6%8A%80%E6%9C%AF%20%28Procedures%20and%20Tests%29/2%20Why%20External%20Counterpulsation%20%28ECP%20or%20EECP%29%20benefits%20patients%20with%20Chest%20Pain%20and%20Coronary%20Calcium"
      },
      {
        "text": "3_What is an Echocardiogram",
        "link": "/%E4%B8%93%E8%BE%91%2008%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E6%A3%80%E6%9F%A5%E6%8A%80%E6%9C%AF%20%28Procedures%20and%20Tests%29/3_What%20is%20an%20Echocardiogram"
      },
      {
        "text": "4 What is Right Heart Catheterization ",
        "link": "/%E4%B8%93%E8%BE%91%2008%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E6%A3%80%E6%9F%A5%E6%8A%80%E6%9C%AF%20%28Procedures%20and%20Tests%29/4%20What%20is%20Right%20Heart%20Catheterization%20"
      },
      {
        "text": "5_Evolution of Cardiac Diagnostics A New Era with AI-Powered FFR-CT",
        "link": "/%E4%B8%93%E8%BE%91%2008%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E6%A3%80%E6%9F%A5%E6%8A%80%E6%9C%AF%20%28Procedures%20and%20Tests%29/5_Evolution%20of%20Cardiac%20Diagnostics%20A%20New%20Era%20with%20AI-Powered%20FFR-CT"
      }
    ]
  },
  {
    "text": "专辑 09：心脏急救与高级生命支持 (ACLS Mastery)",
    "collapsed": true,
    "items": [
      {
        "text": "01 The Systematic Approach to Emergency Situations - ACLS Review",
        "link": "/%E4%B8%93%E8%BE%91%2009%EF%BC%9A%E5%BF%83%E8%84%8F%E6%80%A5%E6%95%91%E4%B8%8E%E9%AB%98%E7%BA%A7%E7%94%9F%E5%91%BD%E6%94%AF%E6%8C%81%20%28ACLS%20Mastery%29/01%20The%20Systematic%20Approach%20to%20Emergency%20Situations%20-%20ACLS%20Review"
      },
      {
        "text": "02 Cardiac Arrest - ACLS Review",
        "link": "/%E4%B8%93%E8%BE%91%2009%EF%BC%9A%E5%BF%83%E8%84%8F%E6%80%A5%E6%95%91%E4%B8%8E%E9%AB%98%E7%BA%A7%E7%94%9F%E5%91%BD%E6%94%AF%E6%8C%81%20%28ACLS%20Mastery%29/02%20Cardiac%20Arrest%20-%20ACLS%20Review"
      },
      {
        "text": "03 Bradycardia - ACLS Review",
        "link": "/%E4%B8%93%E8%BE%91%2009%EF%BC%9A%E5%BF%83%E8%84%8F%E6%80%A5%E6%95%91%E4%B8%8E%E9%AB%98%E7%BA%A7%E7%94%9F%E5%91%BD%E6%94%AF%E6%8C%81%20%28ACLS%20Mastery%29/03%20Bradycardia%20-%20ACLS%20Review"
      },
      {
        "text": "04 Tachycardia Algorithm - ACLS Review",
        "link": "/%E4%B8%93%E8%BE%91%2009%EF%BC%9A%E5%BF%83%E8%84%8F%E6%80%A5%E6%95%91%E4%B8%8E%E9%AB%98%E7%BA%A7%E7%94%9F%E5%91%BD%E6%94%AF%E6%8C%81%20%28ACLS%20Mastery%29/04%20Tachycardia%20Algorithm%20-%20ACLS%20Review"
      },
      {
        "text": "05 Post Cardiac Arrest - ACLS Review",
        "link": "/%E4%B8%93%E8%BE%91%2009%EF%BC%9A%E5%BF%83%E8%84%8F%E6%80%A5%E6%95%91%E4%B8%8E%E9%AB%98%E7%BA%A7%E7%94%9F%E5%91%BD%E6%94%AF%E6%8C%81%20%28ACLS%20Mastery%29/05%20Post%20Cardiac%20Arrest%20-%20ACLS%20Review"
      },
      {
        "text": "06 ACS & Stroke Algorithms - ACLS Review",
        "link": "/%E4%B8%93%E8%BE%91%2009%EF%BC%9A%E5%BF%83%E8%84%8F%E6%80%A5%E6%95%91%E4%B8%8E%E9%AB%98%E7%BA%A7%E7%94%9F%E5%91%BD%E6%94%AF%E6%8C%81%20%28ACLS%20Mastery%29/06%20ACS%20%26%20Stroke%20Algorithms%20-%20ACLS%20Review"
      },
      {
        "text": "07 The Comprehensive ACLS Review Series!",
        "link": "/%E4%B8%93%E8%BE%91%2009%EF%BC%9A%E5%BF%83%E8%84%8F%E6%80%A5%E6%95%91%E4%B8%8E%E9%AB%98%E7%BA%A7%E7%94%9F%E5%91%BD%E6%94%AF%E6%8C%81%20%28ACLS%20Mastery%29/07%20The%20Comprehensive%20ACLS%20Review%20Series%21"
      }
    ]
  },
  {
    "text": "专辑 10：高血压管理指南 (Hypertension)",
    "collapsed": true,
    "items": [
      {
        "text": "01 What is hypertension Circulatory System and Disease NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2010%EF%BC%9A%E9%AB%98%E8%A1%80%E5%8E%8B%E7%AE%A1%E7%90%86%E6%8C%87%E5%8D%97%20%28Hypertension%29/01%20What%20is%20hypertension%20Circulatory%20System%20and%20Disease%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "02 Stages of hypertension Circulatory System and Disease NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2010%EF%BC%9A%E9%AB%98%E8%A1%80%E5%8E%8B%E7%AE%A1%E7%90%86%E6%8C%87%E5%8D%97%20%28Hypertension%29/02%20Stages%20of%20hypertension%20Circulatory%20System%20and%20Disease%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "03 Primary hypertension Circulatory System and Disease NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2010%EF%BC%9A%E9%AB%98%E8%A1%80%E5%8E%8B%E7%AE%A1%E7%90%86%E6%8C%87%E5%8D%97%20%28Hypertension%29/03%20Primary%20hypertension%20Circulatory%20System%20and%20Disease%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "04 Hypertension and heart damage Circulatory System and Disease NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2010%EF%BC%9A%E9%AB%98%E8%A1%80%E5%8E%8B%E7%AE%A1%E7%90%86%E6%8C%87%E5%8D%97%20%28Hypertension%29/04%20Hypertension%20and%20heart%20damage%20Circulatory%20System%20and%20Disease%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "05 Hypertension and blood vessel damage Circulatory System and Disease NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2010%EF%BC%9A%E9%AB%98%E8%A1%80%E5%8E%8B%E7%AE%A1%E7%90%86%E6%8C%87%E5%8D%97%20%28Hypertension%29/05%20Hypertension%20and%20blood%20vessel%20damage%20Circulatory%20System%20and%20Disease%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "06 Complications of hypertension Circulatory System and Disease NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2010%EF%BC%9A%E9%AB%98%E8%A1%80%E5%8E%8B%E7%AE%A1%E7%90%86%E6%8C%87%E5%8D%97%20%28Hypertension%29/06%20Complications%20of%20hypertension%20Circulatory%20System%20and%20Disease%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "07 Secondary hypertension Circulatory System and Disease NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2010%EF%BC%9A%E9%AB%98%E8%A1%80%E5%8E%8B%E7%AE%A1%E7%90%86%E6%8C%87%E5%8D%97%20%28Hypertension%29/07%20Secondary%20hypertension%20Circulatory%20System%20and%20Disease%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "08 Diagnosis of hypertension Circulatory System and Disease NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2010%EF%BC%9A%E9%AB%98%E8%A1%80%E5%8E%8B%E7%AE%A1%E7%90%86%E6%8C%87%E5%8D%97%20%28Hypertension%29/08%20Diagnosis%20of%20hypertension%20Circulatory%20System%20and%20Disease%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "09 Treatment of hypertension Circulatory System and Disease NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2010%EF%BC%9A%E9%AB%98%E8%A1%80%E5%8E%8B%E7%AE%A1%E7%90%86%E6%8C%87%E5%8D%97%20%28Hypertension%29/09%20Treatment%20of%20hypertension%20Circulatory%20System%20and%20Disease%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "10 Hypertensive crisis Circulatory System and Disease NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2010%EF%BC%9A%E9%AB%98%E8%A1%80%E5%8E%8B%E7%AE%A1%E7%90%86%E6%8C%87%E5%8D%97%20%28Hypertension%29/10%20Hypertensive%20crisis%20Circulatory%20System%20and%20Disease%20NCLEX-RN%20Khan%20Academy"
      }
    ]
  },
  {
    "text": "专辑 11：冠心病与心肌梗死 (Heart AttacksMI)",
    "collapsed": true,
    "items": [
      {
        "text": "01 What is valvular heart disease Circulatory System and Disease NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2011%EF%BC%9A%E5%86%A0%E5%BF%83%E7%97%85%E4%B8%8E%E5%BF%83%E8%82%8C%E6%A2%97%E6%AD%BB%20%28Heart%20AttacksMI%29/01%20What%20is%20valvular%20heart%20disease%20Circulatory%20System%20and%20Disease%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "02 Valvular heart disease causes Circulatory System and Disease NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2011%EF%BC%9A%E5%86%A0%E5%BF%83%E7%97%85%E4%B8%8E%E5%BF%83%E8%82%8C%E6%A2%97%E6%AD%BB%20%28Heart%20AttacksMI%29/02%20Valvular%20heart%20disease%20causes%20Circulatory%20System%20and%20Disease%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "03 How to identify murmurs Circulatory System and Disease NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2011%EF%BC%9A%E5%86%A0%E5%BF%83%E7%97%85%E4%B8%8E%E5%BF%83%E8%82%8C%E6%A2%97%E6%AD%BB%20%28Heart%20AttacksMI%29/03%20How%20to%20identify%20murmurs%20Circulatory%20System%20and%20Disease%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "04 Systolic murmurs, diastolic murmurs, and extra heart sounds - Part 1 NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2011%EF%BC%9A%E5%86%A0%E5%BF%83%E7%97%85%E4%B8%8E%E5%BF%83%E8%82%8C%E6%A2%97%E6%AD%BB%20%28Heart%20AttacksMI%29/04%20Systolic%20murmurs%2C%20diastolic%20murmurs%2C%20and%20extra%20heart%20sounds%20-%20Part%201%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "05 Systolic murmurs, diastolic murmurs, and extra heart sounds - Part 2 NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2011%EF%BC%9A%E5%86%A0%E5%BF%83%E7%97%85%E4%B8%8E%E5%BF%83%E8%82%8C%E6%A2%97%E6%AD%BB%20%28Heart%20AttacksMI%29/05%20Systolic%20murmurs%2C%20diastolic%20murmurs%2C%20and%20extra%20heart%20sounds%20-%20Part%202%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "06 Aortic stenosis and aortic regurgitation Circulatory System and Disease NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2011%EF%BC%9A%E5%86%A0%E5%BF%83%E7%97%85%E4%B8%8E%E5%BF%83%E8%82%8C%E6%A2%97%E6%AD%BB%20%28Heart%20AttacksMI%29/06%20Aortic%20stenosis%20and%20aortic%20regurgitation%20Circulatory%20System%20and%20Disease%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "07 Mitral valve regurgitation and mitral valve prolapse NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2011%EF%BC%9A%E5%86%A0%E5%BF%83%E7%97%85%E4%B8%8E%E5%BF%83%E8%82%8C%E6%A2%97%E6%AD%BB%20%28Heart%20AttacksMI%29/07%20Mitral%20valve%20regurgitation%20and%20mitral%20valve%20prolapse%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "08 Mitral stenosis Circulatory System and Disease NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2011%EF%BC%9A%E5%86%A0%E5%BF%83%E7%97%85%E4%B8%8E%E5%BF%83%E8%82%8C%E6%A2%97%E6%AD%BB%20%28Heart%20AttacksMI%29/08%20Mitral%20stenosis%20Circulatory%20System%20and%20Disease%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "09 Valvular heart disease diagnosis and treatment NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2011%EF%BC%9A%E5%86%A0%E5%BF%83%E7%97%85%E4%B8%8E%E5%BF%83%E8%82%8C%E6%A2%97%E6%AD%BB%20%28Heart%20AttacksMI%29/09%20Valvular%20heart%20disease%20diagnosis%20and%20treatment%20NCLEX-RN%20Khan%20Academy"
      }
    ]
  },
  {
    "text": "专辑 12：心力衰竭全攻略 (Heart Failure)",
    "collapsed": true,
    "items": [
      {
        "text": "01 What is heart failure Circulatory System and Disease NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2012%EF%BC%9A%E5%BF%83%E5%8A%9B%E8%A1%B0%E7%AB%AD%E5%85%A8%E6%94%BB%E7%95%A5%20%28Heart%20Failure%29/01%20What%20is%20heart%20failure%20Circulatory%20System%20and%20Disease%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "02 Systolic heart failure pathophysiology Circulatory System and Disease NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2012%EF%BC%9A%E5%BF%83%E5%8A%9B%E8%A1%B0%E7%AB%AD%E5%85%A8%E6%94%BB%E7%95%A5%20%28Heart%20Failure%29/02%20Systolic%20heart%20failure%20pathophysiology%20Circulatory%20System%20and%20Disease%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "03 Diastolic heart failure pathophysiology Circulatory System and Disease NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2012%EF%BC%9A%E5%BF%83%E5%8A%9B%E8%A1%B0%E7%AB%AD%E5%85%A8%E6%94%BB%E7%95%A5%20%28Heart%20Failure%29/03%20Diastolic%20heart%20failure%20pathophysiology%20Circulatory%20System%20and%20Disease%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "04 Compensation and decompensation in heart failure NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2012%EF%BC%9A%E5%BF%83%E5%8A%9B%E8%A1%B0%E7%AB%AD%E5%85%A8%E6%94%BB%E7%95%A5%20%28Heart%20Failure%29/04%20Compensation%20and%20decompensation%20in%20heart%20failure%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "05 Symptoms of left sided heart failure Circulatory System and Disease NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2012%EF%BC%9A%E5%BF%83%E5%8A%9B%E8%A1%B0%E7%AB%AD%E5%85%A8%E6%94%BB%E7%95%A5%20%28Heart%20Failure%29/05%20Symptoms%20of%20left%20sided%20heart%20failure%20Circulatory%20System%20and%20Disease%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "06 Symptoms of right sided heart failure Circulatory System and Disease NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2012%EF%BC%9A%E5%BF%83%E5%8A%9B%E8%A1%B0%E7%AB%AD%E5%85%A8%E6%94%BB%E7%95%A5%20%28Heart%20Failure%29/06%20Symptoms%20of%20right%20sided%20heart%20failure%20Circulatory%20System%20and%20Disease%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "07 Heart failure diagnosis Circulatory System and Disease NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2012%EF%BC%9A%E5%BF%83%E5%8A%9B%E8%A1%B0%E7%AB%AD%E5%85%A8%E6%94%BB%E7%95%A5%20%28Heart%20Failure%29/07%20Heart%20failure%20diagnosis%20Circulatory%20System%20and%20Disease%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "08 Heart failure treatment - Early stages _ Circulatory System and Disease _ NCLEX-RN _ Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2012%EF%BC%9A%E5%BF%83%E5%8A%9B%E8%A1%B0%E7%AB%AD%E5%85%A8%E6%94%BB%E7%95%A5%20%28Heart%20Failure%29/08%20Heart%20failure%20treatment%20-%20Early%20stages%20_%20Circulatory%20System%20and%20Disease%20_%20NCLEX-RN%20_%20Khan%20Academy"
      },
      {
        "text": "09 Heart failure treatment - Late stages Circulatory System and Disease NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2012%EF%BC%9A%E5%BF%83%E5%8A%9B%E8%A1%B0%E7%AB%AD%E5%85%A8%E6%94%BB%E7%95%A5%20%28Heart%20Failure%29/09%20Heart%20failure%20treatment%20-%20Late%20stages%20Circulatory%20System%20and%20Disease%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "10 Heart failure treatment - Devices and surgery NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2012%EF%BC%9A%E5%BF%83%E5%8A%9B%E8%A1%B0%E7%AB%AD%E5%85%A8%E6%94%BB%E7%95%A5%20%28Heart%20Failure%29/10%20Heart%20failure%20treatment%20-%20Devices%20and%20surgery%20NCLEX-RN%20Khan%20Academy"
      }
    ]
  },
  {
    "text": "专辑 13：心脏瓣膜病 (Heart Valve Diseases)",
    "collapsed": true,
    "items": [
      {
        "text": "01 What is valvular heart disease Circulatory System and Disease NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2013%EF%BC%9A%E5%BF%83%E8%84%8F%E7%93%A3%E8%86%9C%E7%97%85%20%28Heart%20Valve%20Diseases%29/01%20What%20is%20valvular%20heart%20disease%20Circulatory%20System%20and%20Disease%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "02 Valvular heart disease causes Circulatory System and Disease NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2013%EF%BC%9A%E5%BF%83%E8%84%8F%E7%93%A3%E8%86%9C%E7%97%85%20%28Heart%20Valve%20Diseases%29/02%20Valvular%20heart%20disease%20causes%20Circulatory%20System%20and%20Disease%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "03 How to identify murmurs Circulatory System and Disease NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2013%EF%BC%9A%E5%BF%83%E8%84%8F%E7%93%A3%E8%86%9C%E7%97%85%20%28Heart%20Valve%20Diseases%29/03%20How%20to%20identify%20murmurs%20Circulatory%20System%20and%20Disease%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "04 Systolic murmurs, diastolic murmurs, and extra heart sounds - Part 1 NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2013%EF%BC%9A%E5%BF%83%E8%84%8F%E7%93%A3%E8%86%9C%E7%97%85%20%28Heart%20Valve%20Diseases%29/04%20Systolic%20murmurs%2C%20diastolic%20murmurs%2C%20and%20extra%20heart%20sounds%20-%20Part%201%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "05 Systolic murmurs, diastolic murmurs, and extra heart sounds - Part 2 NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2013%EF%BC%9A%E5%BF%83%E8%84%8F%E7%93%A3%E8%86%9C%E7%97%85%20%28Heart%20Valve%20Diseases%29/05%20Systolic%20murmurs%2C%20diastolic%20murmurs%2C%20and%20extra%20heart%20sounds%20-%20Part%202%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "06 Aortic stenosis and aortic regurgitation Circulatory System and Disease NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2013%EF%BC%9A%E5%BF%83%E8%84%8F%E7%93%A3%E8%86%9C%E7%97%85%20%28Heart%20Valve%20Diseases%29/06%20Aortic%20stenosis%20and%20aortic%20regurgitation%20Circulatory%20System%20and%20Disease%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "07 Mitral valve regurgitation and mitral valve prolapse NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2013%EF%BC%9A%E5%BF%83%E8%84%8F%E7%93%A3%E8%86%9C%E7%97%85%20%28Heart%20Valve%20Diseases%29/07%20Mitral%20valve%20regurgitation%20and%20mitral%20valve%20prolapse%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "08 Mitral stenosis Circulatory System and Disease NCLEX-RN Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2013%EF%BC%9A%E5%BF%83%E8%84%8F%E7%93%A3%E8%86%9C%E7%97%85%20%28Heart%20Valve%20Diseases%29/08%20Mitral%20stenosis%20Circulatory%20System%20and%20Disease%20NCLEX-RN%20Khan%20Academy"
      },
      {
        "text": "09 Valvular heart disease diagnosis and treatment _ NCLEX-RN _ Khan Academy",
        "link": "/%E4%B8%93%E8%BE%91%2013%EF%BC%9A%E5%BF%83%E8%84%8F%E7%93%A3%E8%86%9C%E7%97%85%20%28Heart%20Valve%20Diseases%29/09%20Valvular%20heart%20disease%20diagnosis%20and%20treatment%20_%20NCLEX-RN%20_%20Khan%20Academy"
      }
    ]
  },
  {
    "text": "专辑 14：心血管内科综合 (Cardiovascular Medicine)",
    "collapsed": true,
    "items": [
      {
        "text": "01 MASTER ECGEKG INTERPRETATION A Systematic Approach for 12 Lead ECGEKGs",
        "link": "/%E4%B8%93%E8%BE%91%2014%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E5%86%85%E7%A7%91%E7%BB%BC%E5%90%88%20%28Cardiovascular%20Medicine%29/01%20MASTER%20ECGEKG%20INTERPRETATION%20A%20Systematic%20Approach%20for%2012%20Lead%20ECGEKGs"
      },
      {
        "text": "02 ECG Interpretation Clinical Medicine",
        "link": "/%E4%B8%93%E8%BE%91%2014%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E5%86%85%E7%A7%91%E7%BB%BC%E5%90%88%20%28Cardiovascular%20Medicine%29/02%20ECG%20Interpretation%20Clinical%20Medicine"
      },
      {
        "text": "03 Arrhythmias Clinical Medicine",
        "link": "/%E4%B8%93%E8%BE%91%2014%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E5%86%85%E7%A7%91%E7%BB%BC%E5%90%88%20%28Cardiovascular%20Medicine%29/03%20Arrhythmias%20Clinical%20Medicine"
      },
      {
        "text": "04 Atrial Fibrillation Clinical Medicine",
        "link": "/%E4%B8%93%E8%BE%91%2014%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E5%86%85%E7%A7%91%E7%BB%BC%E5%90%88%20%28Cardiovascular%20Medicine%29/04%20Atrial%20Fibrillation%20Clinical%20Medicine"
      },
      {
        "text": "05 Coronary Artery Disease Clinical Medicine",
        "link": "/%E4%B8%93%E8%BE%91%2014%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E5%86%85%E7%A7%91%E7%BB%BC%E5%90%88%20%28Cardiovascular%20Medicine%29/05%20Coronary%20Artery%20Disease%20Clinical%20Medicine"
      },
      {
        "text": "06 Congestive Heart Failure Clinical Medicine",
        "link": "/%E4%B8%93%E8%BE%91%2014%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E5%86%85%E7%A7%91%E7%BB%BC%E5%90%88%20%28Cardiovascular%20Medicine%29/06%20Congestive%20Heart%20Failure%20Clinical%20Medicine"
      },
      {
        "text": "07 Cardiomyopathy Clinical Medicine",
        "link": "/%E4%B8%93%E8%BE%91%2014%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E5%86%85%E7%A7%91%E7%BB%BC%E5%90%88%20%28Cardiovascular%20Medicine%29/07%20Cardiomyopathy%20Clinical%20Medicine"
      },
      {
        "text": "08 Pericardial Diseases Clinical Medicine",
        "link": "/%E4%B8%93%E8%BE%91%2014%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E5%86%85%E7%A7%91%E7%BB%BC%E5%90%88%20%28Cardiovascular%20Medicine%29/08%20Pericardial%20Diseases%20Clinical%20Medicine"
      },
      {
        "text": "09 Heart Sounds & Murmurs _ Clinical Medicine",
        "link": "/%E4%B8%93%E8%BE%91%2014%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E5%86%85%E7%A7%91%E7%BB%BC%E5%90%88%20%28Cardiovascular%20Medicine%29/09%20Heart%20Sounds%20%26%20Murmurs%20_%20Clinical%20Medicine"
      },
      {
        "text": "10 Valvular Heart Diseases Clinical Medicine",
        "link": "/%E4%B8%93%E8%BE%91%2014%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E5%86%85%E7%A7%91%E7%BB%BC%E5%90%88%20%28Cardiovascular%20Medicine%29/10%20Valvular%20Heart%20Diseases%20Clinical%20Medicine"
      },
      {
        "text": "11 Aortic Diseases Clinical Medicine",
        "link": "/%E4%B8%93%E8%BE%91%2014%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E5%86%85%E7%A7%91%E7%BB%BC%E5%90%88%20%28Cardiovascular%20Medicine%29/11%20Aortic%20Diseases%20Clinical%20Medicine"
      },
      {
        "text": "12 Hypertension Clinical Medicine",
        "link": "/%E4%B8%93%E8%BE%91%2014%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E5%86%85%E7%A7%91%E7%BB%BC%E5%90%88%20%28Cardiovascular%20Medicine%29/12%20Hypertension%20Clinical%20Medicine"
      },
      {
        "text": "13 Hyperlipidemia Clinical Medicine",
        "link": "/%E4%B8%93%E8%BE%91%2014%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E5%86%85%E7%A7%91%E7%BB%BC%E5%90%88%20%28Cardiovascular%20Medicine%29/13%20Hyperlipidemia%20Clinical%20Medicine"
      },
      {
        "text": "14 Peripheral Arterial Disease Clinical Medicine",
        "link": "/%E4%B8%93%E8%BE%91%2014%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E5%86%85%E7%A7%91%E7%BB%BC%E5%90%88%20%28Cardiovascular%20Medicine%29/14%20Peripheral%20Arterial%20Disease%20Clinical%20Medicine"
      },
      {
        "text": "15 Shock Clinical Medicine",
        "link": "/%E4%B8%93%E8%BE%91%2014%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E5%86%85%E7%A7%91%E7%BB%BC%E5%90%88%20%28Cardiovascular%20Medicine%29/15%20Shock%20Clinical%20Medicine"
      },
      {
        "text": "16 Syncope Clinical Medicine",
        "link": "/%E4%B8%93%E8%BE%91%2014%EF%BC%9A%E5%BF%83%E8%A1%80%E7%AE%A1%E5%86%85%E7%A7%91%E7%BB%BC%E5%90%88%20%28Cardiovascular%20Medicine%29/16%20Syncope%20Clinical%20Medicine"
      }
    ]
  },
  {
    "text": "专辑 15：经皮冠脉介入手术 (PCI Insights)",
    "collapsed": true,
    "items": [
      {
        "text": "01 Optimal Medication Selection for PCI Procedures",
        "link": "/%E4%B8%93%E8%BE%91%2015%EF%BC%9A%E7%BB%8F%E7%9A%AE%E5%86%A0%E8%84%89%E4%BB%8B%E5%85%A5%E6%89%8B%E6%9C%AF%20%28PCI%20Insights%29/01%20Optimal%20Medication%20Selection%20for%20PCI%20Procedures"
      },
      {
        "text": "02 Assessing Lesion Severity in Coronary Angiography",
        "link": "/%E4%B8%93%E8%BE%91%2015%EF%BC%9A%E7%BB%8F%E7%9A%AE%E5%86%A0%E8%84%89%E4%BB%8B%E5%85%A5%E6%89%8B%E6%9C%AF%20%28PCI%20Insights%29/02%20Assessing%20Lesion%20Severity%20in%20Coronary%20Angiography"
      },
      {
        "text": "03 Mastering Femoral Artery Access in PCI",
        "link": "/%E4%B8%93%E8%BE%91%2015%EF%BC%9A%E7%BB%8F%E7%9A%AE%E5%86%A0%E8%84%89%E4%BB%8B%E5%85%A5%E6%89%8B%E6%9C%AF%20%28PCI%20Insights%29/03%20Mastering%20Femoral%20Artery%20Access%20in%20PCI"
      },
      {
        "text": "04 Radial Artery Access Benefits and Techniques",
        "link": "/%E4%B8%93%E8%BE%91%2015%EF%BC%9A%E7%BB%8F%E7%9A%AE%E5%86%A0%E8%84%89%E4%BB%8B%E5%85%A5%E6%89%8B%E6%9C%AF%20%28PCI%20Insights%29/04%20Radial%20Artery%20Access%20Benefits%20and%20Techniques"
      },
      {
        "text": "05 Addressing Complications in Radial Access PCI",
        "link": "/%E4%B8%93%E8%BE%91%2015%EF%BC%9A%E7%BB%8F%E7%9A%AE%E5%86%A0%E8%84%89%E4%BB%8B%E5%85%A5%E6%89%8B%E6%9C%AF%20%28PCI%20Insights%29/05%20Addressing%20Complications%20in%20Radial%20Access%20PCI"
      },
      {
        "text": "06 Balloon Loading & Pre-Dilatation in PCI",
        "link": "/%E4%B8%93%E8%BE%91%2015%EF%BC%9A%E7%BB%8F%E7%9A%AE%E5%86%A0%E8%84%89%E4%BB%8B%E5%85%A5%E6%89%8B%E6%9C%AF%20%28PCI%20Insights%29/06%20Balloon%20Loading%20%26%20Pre-Dilatation%20in%20PCI"
      },
      {
        "text": "07 Utilizing Pressure Wire in PCI Insights & Techniques",
        "link": "/%E4%B8%93%E8%BE%91%2015%EF%BC%9A%E7%BB%8F%E7%9A%AE%E5%86%A0%E8%84%89%E4%BB%8B%E5%85%A5%E6%89%8B%E6%9C%AF%20%28PCI%20Insights%29/07%20Utilizing%20Pressure%20Wire%20in%20PCI%20Insights%20%26%20Techniques"
      },
      {
        "text": "08 Handling Calcified Vessels in PCI Advanced Techniques",
        "link": "/%E4%B8%93%E8%BE%91%2015%EF%BC%9A%E7%BB%8F%E7%9A%AE%E5%86%A0%E8%84%89%E4%BB%8B%E5%85%A5%E6%89%8B%E6%9C%AF%20%28PCI%20Insights%29/08%20Handling%20Calcified%20Vessels%20in%20PCI%20Advanced%20Techniques"
      },
      {
        "text": "09 Navigating Arterial Access Complications in PCI",
        "link": "/%E4%B8%93%E8%BE%91%2015%EF%BC%9A%E7%BB%8F%E7%9A%AE%E5%86%A0%E8%84%89%E4%BB%8B%E5%85%A5%E6%89%8B%E6%9C%AF%20%28PCI%20Insights%29/09%20Navigating%20Arterial%20Access%20Complications%20in%20PCI"
      },
      {
        "text": "10 Rapidly Addressing Hypotension Post-PCI",
        "link": "/%E4%B8%93%E8%BE%91%2015%EF%BC%9A%E7%BB%8F%E7%9A%AE%E5%86%A0%E8%84%89%E4%BB%8B%E5%85%A5%E6%89%8B%E6%9C%AF%20%28PCI%20Insights%29/10%20Rapidly%20Addressing%20Hypotension%20Post-PCI"
      }
    ]
  },
  {
    "text": "专辑 16：脉冲场消融技术 (Pulsed Field Ablation)",
    "collapsed": true,
    "items": [
      {
        "text": "01 PulseSelect™ Pulsed Field Ablation System",
        "link": "/%E4%B8%93%E8%BE%91%2016%EF%BC%9A%E8%84%89%E5%86%B2%E5%9C%BA%E6%B6%88%E8%9E%8D%E6%8A%80%E6%9C%AF%20%28Pulsed%20Field%20Ablation%29/01%20PulseSelect%E2%84%A2%20Pulsed%20Field%20Ablation%20System"
      },
      {
        "text": "02 FlexCath Cross™ transseptal solution",
        "link": "/%E4%B8%93%E8%BE%91%2016%EF%BC%9A%E8%84%89%E5%86%B2%E5%9C%BA%E6%B6%88%E8%9E%8D%E6%8A%80%E6%9C%AF%20%28Pulsed%20Field%20Ablation%29/02%20FlexCath%20Cross%E2%84%A2%20transseptal%20solution"
      },
      {
        "text": "03 Interview with Professor Damijan Miklavčič",
        "link": "/%E4%B8%93%E8%BE%91%2016%EF%BC%9A%E8%84%89%E5%86%B2%E5%9C%BA%E6%B6%88%E8%9E%8D%E6%8A%80%E6%9C%AF%20%28Pulsed%20Field%20Ablation%29/03%20Interview%20with%20Professor%20Damijan%20Miklav%C4%8Di%C4%8D"
      },
      {
        "text": "04 Dr. Verma PFA Video Series - Pt. 2 Understanding Pulse Waveforms",
        "link": "/%E4%B8%93%E8%BE%91%2016%EF%BC%9A%E8%84%89%E5%86%B2%E5%9C%BA%E6%B6%88%E8%9E%8D%E6%8A%80%E6%9C%AF%20%28Pulsed%20Field%20Ablation%29/04%20Dr.%20Verma%20PFA%20Video%20Series%20-%20Pt.%202%20Understanding%20Pulse%20Waveforms"
      },
      {
        "text": "05 Dr. Verma PFA Video Series - Pt. 1 Cell Death & Lesion Evolution",
        "link": "/%E4%B8%93%E8%BE%91%2016%EF%BC%9A%E8%84%89%E5%86%B2%E5%9C%BA%E6%B6%88%E8%9E%8D%E6%8A%80%E6%9C%AF%20%28Pulsed%20Field%20Ablation%29/05%20Dr.%20Verma%20PFA%20Video%20Series%20-%20Pt.%201%20Cell%20Death%20%26%20Lesion%20Evolution"
      },
      {
        "text": "06 Dr. Verma PFA Video Series - Pt. 3 Catheter Design & Vectoring",
        "link": "/%E4%B8%93%E8%BE%91%2016%EF%BC%9A%E8%84%89%E5%86%B2%E5%9C%BA%E6%B6%88%E8%9E%8D%E6%8A%80%E6%9C%AF%20%28Pulsed%20Field%20Ablation%29/06%20Dr.%20Verma%20PFA%20Video%20Series%20-%20Pt.%203%20Catheter%20Design%20%26%20Vectoring"
      },
      {
        "text": "07 Dr. Verma PFA Video Series - Pt. 4 Mitigating PFA-Specific Effects",
        "link": "/%E4%B8%93%E8%BE%91%2016%EF%BC%9A%E8%84%89%E5%86%B2%E5%9C%BA%E6%B6%88%E8%9E%8D%E6%8A%80%E6%9C%AF%20%28Pulsed%20Field%20Ablation%29/07%20Dr.%20Verma%20PFA%20Video%20Series%20-%20Pt.%204%20Mitigating%20PFA-Specific%20Effects"
      },
      {
        "text": "08 Dr. Verma PFA Video Series - Pt. 5 Contact vs. Contact Force",
        "link": "/%E4%B8%93%E8%BE%91%2016%EF%BC%9A%E8%84%89%E5%86%B2%E5%9C%BA%E6%B6%88%E8%9E%8D%E6%8A%80%E6%9C%AF%20%28Pulsed%20Field%20Ablation%29/08%20Dr.%20Verma%20PFA%20Video%20Series%20-%20Pt.%205%20Contact%20vs.%20Contact%20Force"
      },
      {
        "text": "09 Dr. Verma PFA Video Series - Pt. 6 Cell vs. Tissue Specificity",
        "link": "/%E4%B8%93%E8%BE%91%2016%EF%BC%9A%E8%84%89%E5%86%B2%E5%9C%BA%E6%B6%88%E8%9E%8D%E6%8A%80%E6%9C%AF%20%28Pulsed%20Field%20Ablation%29/09%20Dr.%20Verma%20PFA%20Video%20Series%20-%20Pt.%206%20Cell%20vs.%20Tissue%20Specificity"
      }
    ]
  },
  {
    "text": "专辑 17：药理学大师课 (Speed Pharmacology)",
    "collapsed": true,
    "items": [
      {
        "text": "01 Pharmacology - PHARMACOKINETICS (MADE EASY)",
        "link": "/%E4%B8%93%E8%BE%91%2017%EF%BC%9A%E8%8D%AF%E7%90%86%E5%AD%A6%E5%A4%A7%E5%B8%88%E8%AF%BE%20%28Speed%20Pharmacology%29/01%20Pharmacology%20-%20PHARMACOKINETICS%20%28MADE%20EASY%29"
      },
      {
        "text": "02 Pharmacology - PHARMACODYNAMICS (MADE EASY)",
        "link": "/%E4%B8%93%E8%BE%91%2017%EF%BC%9A%E8%8D%AF%E7%90%86%E5%AD%A6%E5%A4%A7%E5%B8%88%E8%AF%BE%20%28Speed%20Pharmacology%29/02%20Pharmacology%20-%20PHARMACODYNAMICS%20%28MADE%20EASY%29"
      },
      {
        "text": "03 Pharmacology - AUTONOMIC NERVOUS SYSTEM (MADE EASY)",
        "link": "/%E4%B8%93%E8%BE%91%2017%EF%BC%9A%E8%8D%AF%E7%90%86%E5%AD%A6%E5%A4%A7%E5%B8%88%E8%AF%BE%20%28Speed%20Pharmacology%29/03%20Pharmacology%20-%20AUTONOMIC%20NERVOUS%20SYSTEM%20%28MADE%20EASY%29"
      },
      {
        "text": "04 Pharmacology - CHOLINERGIC DRUGS (MADE EASY)",
        "link": "/%E4%B8%93%E8%BE%91%2017%EF%BC%9A%E8%8D%AF%E7%90%86%E5%AD%A6%E5%A4%A7%E5%B8%88%E8%AF%BE%20%28Speed%20Pharmacology%29/04%20Pharmacology%20-%20CHOLINERGIC%20DRUGS%20%28MADE%20EASY%29"
      },
      {
        "text": "05 NEURON ACTION POTENTIAL (MADE EASY)",
        "link": "/%E4%B8%93%E8%BE%91%2017%EF%BC%9A%E8%8D%AF%E7%90%86%E5%AD%A6%E5%A4%A7%E5%B8%88%E8%AF%BE%20%28Speed%20Pharmacology%29/05%20NEURON%20ACTION%20POTENTIAL%20%28MADE%20EASY%29"
      },
      {
        "text": "06 Pharmacology - ANTICHOLINERGIC & NEUROMUSCULAR BLOCKING AGENTS (MADE EASY)",
        "link": "/%E4%B8%93%E8%BE%91%2017%EF%BC%9A%E8%8D%AF%E7%90%86%E5%AD%A6%E5%A4%A7%E5%B8%88%E8%AF%BE%20%28Speed%20Pharmacology%29/06%20Pharmacology%20-%20ANTICHOLINERGIC%20%26%20NEUROMUSCULAR%20BLOCKING%20AGENTS%20%28MADE%20EASY%29"
      },
      {
        "text": "07 Pharmacology - ADRENERGIC RECEPTORS & AGONISTS (MADE EASY)",
        "link": "/%E4%B8%93%E8%BE%91%2017%EF%BC%9A%E8%8D%AF%E7%90%86%E5%AD%A6%E5%A4%A7%E5%B8%88%E8%AF%BE%20%28Speed%20Pharmacology%29/07%20Pharmacology%20-%20ADRENERGIC%20RECEPTORS%20%26%20AGONISTS%20%28MADE%20EASY%29"
      },
      {
        "text": "08 Pharmacology - ALPHA & BETA BLOCKERS - ADRENERGIC ANTAGONISTS ( MADE EASY)",
        "link": "/%E4%B8%93%E8%BE%91%2017%EF%BC%9A%E8%8D%AF%E7%90%86%E5%AD%A6%E5%A4%A7%E5%B8%88%E8%AF%BE%20%28Speed%20Pharmacology%29/08%20Pharmacology%20-%20ALPHA%20%26%20BETA%20BLOCKERS%20-%20ADRENERGIC%20ANTAGONISTS%20%28%20MADE%20EASY%29"
      },
      {
        "text": "09 Pharmacology - ANTIDEPRESSANTS - SSRIs, SNRIs, TCAs, MAOIs, Lithium ( MADE EASY)",
        "link": "/%E4%B8%93%E8%BE%91%2017%EF%BC%9A%E8%8D%AF%E7%90%86%E5%AD%A6%E5%A4%A7%E5%B8%88%E8%AF%BE%20%28Speed%20Pharmacology%29/09%20Pharmacology%20-%20ANTIDEPRESSANTS%20-%20SSRIs%2C%20SNRIs%2C%20TCAs%2C%20MAOIs%2C%20Lithium%20%28%20MADE%20EASY%29"
      },
      {
        "text": "10 Pharmacology - ANTIARRHYTHMIC DRUGS (MADE EASY)",
        "link": "/%E4%B8%93%E8%BE%91%2017%EF%BC%9A%E8%8D%AF%E7%90%86%E5%AD%A6%E5%A4%A7%E5%B8%88%E8%AF%BE%20%28Speed%20Pharmacology%29/10%20Pharmacology%20-%20ANTIARRHYTHMIC%20DRUGS%20%28MADE%20EASY%29"
      },
      {
        "text": "11 Pharmacology - DIURETICS (MADE EASY)",
        "link": "/%E4%B8%93%E8%BE%91%2017%EF%BC%9A%E8%8D%AF%E7%90%86%E5%AD%A6%E5%A4%A7%E5%B8%88%E8%AF%BE%20%28Speed%20Pharmacology%29/11%20Pharmacology%20-%20DIURETICS%20%28MADE%20EASY%29"
      },
      {
        "text": "12 Pharmacology - HYPERTENSION & ANTIHYPERTENSIVES (MADE EASY)",
        "link": "/%E4%B8%93%E8%BE%91%2017%EF%BC%9A%E8%8D%AF%E7%90%86%E5%AD%A6%E5%A4%A7%E5%B8%88%E8%AF%BE%20%28Speed%20Pharmacology%29/12%20Pharmacology%20-%20HYPERTENSION%20%26%20ANTIHYPERTENSIVES%20%28MADE%20EASY%29"
      },
      {
        "text": "13 Pharmacology - DRUGS FOR HYPERLIPIDEMIA (MADE EASY)",
        "link": "/%E4%B8%93%E8%BE%91%2017%EF%BC%9A%E8%8D%AF%E7%90%86%E5%AD%A6%E5%A4%A7%E5%B8%88%E8%AF%BE%20%28Speed%20Pharmacology%29/13%20Pharmacology%20-%20DRUGS%20FOR%20HYPERLIPIDEMIA%20%28MADE%20EASY%29"
      },
      {
        "text": "14 Pharmacology - ANTICOAGULANTS & ANTIPLATELET DRUGS (MADE EASY)",
        "link": "/%E4%B8%93%E8%BE%91%2017%EF%BC%9A%E8%8D%AF%E7%90%86%E5%AD%A6%E5%A4%A7%E5%B8%88%E8%AF%BE%20%28Speed%20Pharmacology%29/14%20Pharmacology%20-%20ANTICOAGULANTS%20%26%20ANTIPLATELET%20DRUGS%20%28MADE%20EASY%29"
      },
      {
        "text": "15 Pharmacology - DRUGS FOR DIABETES (MADE EASY)",
        "link": "/%E4%B8%93%E8%BE%91%2017%EF%BC%9A%E8%8D%AF%E7%90%86%E5%AD%A6%E5%A4%A7%E5%B8%88%E8%AF%BE%20%28Speed%20Pharmacology%29/15%20Pharmacology%20-%20DRUGS%20FOR%20DIABETES%20%28MADE%20EASY%29"
      },
      {
        "text": "16 Pharmacology - ANTIHISTAMINES (MADE EASY)",
        "link": "/%E4%B8%93%E8%BE%91%2017%EF%BC%9A%E8%8D%AF%E7%90%86%E5%AD%A6%E5%A4%A7%E5%B8%88%E8%AF%BE%20%28Speed%20Pharmacology%29/16%20Pharmacology%20-%20ANTIHISTAMINES%20%28MADE%20EASY%29"
      },
      {
        "text": "17 Pharmacology - NSAIDs & PROSTAGLANDIN ANALOGS (MADE EASY)",
        "link": "/%E4%B8%93%E8%BE%91%2017%EF%BC%9A%E8%8D%AF%E7%90%86%E5%AD%A6%E5%A4%A7%E5%B8%88%E8%AF%BE%20%28Speed%20Pharmacology%29/17%20Pharmacology%20-%20NSAIDs%20%26%20PROSTAGLANDIN%20ANALOGS%20%28MADE%20EASY%29"
      },
      {
        "text": "18 Pharmacology - GENERAL & LOCAL ANESTHETICS (MADE EASY)",
        "link": "/%E4%B8%93%E8%BE%91%2017%EF%BC%9A%E8%8D%AF%E7%90%86%E5%AD%A6%E5%A4%A7%E5%B8%88%E8%AF%BE%20%28Speed%20Pharmacology%29/18%20Pharmacology%20-%20GENERAL%20%26%20LOCAL%20ANESTHETICS%20%28MADE%20EASY%29"
      },
      {
        "text": "19 Pharmacology – ANTIBIOTICS – CELL WALL & MEMBRANE INHIBITORS (MADE EASY)",
        "link": "/%E4%B8%93%E8%BE%91%2017%EF%BC%9A%E8%8D%AF%E7%90%86%E5%AD%A6%E5%A4%A7%E5%B8%88%E8%AF%BE%20%28Speed%20Pharmacology%29/19%20Pharmacology%20%E2%80%93%20ANTIBIOTICS%20%E2%80%93%20CELL%20WALL%20%26%20MEMBRANE%20INHIBITORS%20%28MADE%20EASY%29"
      },
      {
        "text": "20 Pharmacology – ANTIBIOTICS – DNA, RNA, FOLIC ACID, PROTEIN SYNTHESIS INHIBITORS (MADE EASY)",
        "link": "/%E4%B8%93%E8%BE%91%2017%EF%BC%9A%E8%8D%AF%E7%90%86%E5%AD%A6%E5%A4%A7%E5%B8%88%E8%AF%BE%20%28Speed%20Pharmacology%29/20%20Pharmacology%20%E2%80%93%20ANTIBIOTICS%20%E2%80%93%20DNA%2C%20RNA%2C%20FOLIC%20ACID%2C%20PROTEIN%20SYNTHESIS%20INHIBITORS%20%28MADE%20EASY%29"
      }
    ]
  },
  {
    "text": "专辑 18：心内科终极百科辞典 (The Cardiology Encyclopedia)",
    "collapsed": true,
    "items": [
      {
        "text": "01 Cardiovascular Physiology - Pressure-Volume loops, Cardiac Cycle, ESV, EDV, SV, CO, Starling Law",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/01%20Cardiovascular%20Physiology%20-%20Pressure-Volume%20loops%2C%20Cardiac%20Cycle%2C%20ESV%2C%20EDV%2C%20SV%2C%20CO%2C%20Starling%20Law"
      },
      {
        "text": "02 Clinically-Oriented Anatomy of the Thorax (part 1)",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/02%20Clinically-Oriented%20Anatomy%20of%20the%20Thorax%20%28part%201%29"
      },
      {
        "text": "03 Clinically-Oriented Anatomy of the Thorax (Part 2)",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/03%20Clinically-Oriented%20Anatomy%20of%20the%20Thorax%20%28Part%202%29"
      },
      {
        "text": "04 Carotid Arteries - Internal Carotid Artery (ICA), External Carotid Artery (ECA) - Anatomy of Neck",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/04%20Carotid%20Arteries%20-%20Internal%20Carotid%20Artery%20%28ICA%29%2C%20External%20Carotid%20Artery%20%28ECA%29%20-%20Anatomy%20of%20Neck"
      },
      {
        "text": "05 Fetal Circulation - Explained Clearly - Placenta, Umbilical Vessels, Ductus Arteriosus Venosus",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/05%20Fetal%20Circulation%20-%20Explained%20Clearly%20-%20Placenta%2C%20Umbilical%20Vessels%2C%20Ductus%20Arteriosus%20Venosus"
      },
      {
        "text": "06 How to take a Medical History - OSCE - SOAP Notes - Clinical Skills (Part 1)",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/06%20How%20to%20take%20a%20Medical%20History%20-%20OSCE%20-%20SOAP%20Notes%20-%20Clinical%20Skills%20%28Part%201%29"
      },
      {
        "text": "07 How to take a medical History - OSCE, SOAP notes, Clinical Skills (Part 2)",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/07%20How%20to%20take%20a%20medical%20History%20-%20OSCE%2C%20SOAP%20notes%2C%20Clinical%20Skills%20%28Part%202%29"
      },
      {
        "text": "08 Vital Signs - Pulse, Blood Pressure, Respiratory Rate, Temperature - Patient assessment - EMS, EMT",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/08%20Vital%20Signs%20-%20Pulse%2C%20Blood%20Pressure%2C%20Respiratory%20Rate%2C%20Temperature%20-%20Patient%20assessment%20-%20EMS%2C%20EMT"
      },
      {
        "text": "09 Physical Examination in Emergency Medicine - Pupils, Capillary Refill, Neck Veins - EMS, EMT",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/09%20Physical%20Examination%20in%20Emergency%20Medicine%20-%20Pupils%2C%20Capillary%20Refill%2C%20Neck%20Veins%20-%20EMS%2C%20EMT"
      },
      {
        "text": "10 Cardiac Output, Stroke Volume, End systolic & End diastolic volumes, Ejection Fraction",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/10%20Cardiac%20Output%2C%20Stroke%20Volume%2C%20End%20systolic%20%26%20End%20diastolic%20volumes%2C%20Ejection%20Fraction"
      },
      {
        "text": "11 Pressure-Volume Loops & the Cardiac Cycle — Cardiophysiology — Physiology Playlist",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/11%20Pressure-Volume%20Loops%20%26%20the%20Cardiac%20Cycle%20%E2%80%94%20Cardiophysiology%20%E2%80%94%20Physiology%20Playlist"
      },
      {
        "text": "12 Arterial Blood Pressure (ABP) and Fluid Balance - Systolic and Diastolic Pressure",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/12%20Arterial%20Blood%20Pressure%20%28ABP%29%20and%20Fluid%20Balance%20-%20Systolic%20and%20Diastolic%20Pressure"
      },
      {
        "text": "13 Starling Forces - made easy - Hydrostatic Pressure and Colloidal Osmotic (Oncotic) Pressure - Physio",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/13%20Starling%20Forces%20-%20made%20easy%20-%20Hydrostatic%20Pressure%20and%20Colloidal%20Osmotic%20%28Oncotic%29%20Pressure%20-%20Physio"
      },
      {
        "text": "14 The Cardiovascular System (CVS)  A Simple Introduction - Biology, Anatomy, Physiology",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/14%20The%20Cardiovascular%20System%20%28CVS%29%20%20A%20Simple%20Introduction%20-%20Biology%2C%20Anatomy%2C%20Physiology"
      },
      {
        "text": "15 The Cardiac Cycle - Systole and Diastole - Atria and Ventricles - Physiology and Biology",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/15%20The%20Cardiac%20Cycle%20-%20Systole%20and%20Diastole%20-%20Atria%20and%20Ventricles%20-%20Physiology%20and%20Biology"
      },
      {
        "text": "16 Cardiac Electrical Conduction System - SA node, AV node, Hiss Bundle, Purkinje fibers - Physiology",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/16%20Cardiac%20Electrical%20Conduction%20System%20-%20SA%20node%2C%20AV%20node%2C%20Hiss%20Bundle%2C%20Purkinje%20fibers%20-%20Physiology"
      },
      {
        "text": "17 Blood  Vessels  (Vasculature) - Arteries, Arterioles, Capillaries, Venules & Veins",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/17%20Blood%20%20Vessels%20%20%28Vasculature%29%20-%20Arteries%2C%20Arterioles%2C%20Capillaries%2C%20Venules%20%26%20Veins"
      },
      {
        "text": "18 Baroreceptor Reflex - Carotid Sinus, Aortic Arch - Reflex Arc - Pressure- Cardiovascular Physiology",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/18%20Baroreceptor%20Reflex%20-%20Carotid%20Sinus%2C%20Aortic%20Arch%20-%20Reflex%20Arc%20-%20Pressure-%20Cardiovascular%20Physiology"
      },
      {
        "text": "19 Bainbridge Reflex - Cardiopulmonary Mechanoreceptors - Vasomotor center, SNS, PNS - Cardiophysiology",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/19%20Bainbridge%20Reflex%20-%20Cardiopulmonary%20Mechanoreceptors%20-%20Vasomotor%20center%2C%20SNS%2C%20PNS%20-%20Cardiophysiology"
      },
      {
        "text": "20 Cardiovascular Physiological Changes During Pregnancy",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/20%20Cardiovascular%20Physiological%20Changes%20During%20Pregnancy"
      },
      {
        "text": "21 Physiological Murmurs vs. Pathological Murmurs - Comparisons",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/21%20Physiological%20Murmurs%20vs.%20Pathological%20Murmurs%20-%20Comparisons"
      },
      {
        "text": "22 cAMP - ATP, ADP, cAMP - Adenylate cyclase - Protein Kinase A - G-protein, Cell Signaling - Physio",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/22%20cAMP%20-%20ATP%2C%20ADP%2C%20cAMP%20-%20Adenylate%20cyclase%20-%20Protein%20Kinase%20A%20-%20G-protein%2C%20Cell%20Signaling%20-%20Physio"
      },
      {
        "text": "23 Tissue Hypoxia - Types of hypoxia (Hypoxic, Ischemic, Anemic, Cytotoxic) - Pathophysiology",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/23%20Tissue%20Hypoxia%20-%20Types%20of%20hypoxia%20%28Hypoxic%2C%20Ischemic%2C%20Anemic%2C%20Cytotoxic%29%20-%20Pathophysiology"
      },
      {
        "text": "24 Prinzmetal (Vasospastic) Angina Mnemonic",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/24%20Prinzmetal%20%28Vasospastic%29%20Angina%20Mnemonic"
      },
      {
        "text": "25 Lactate Dehydrogenase (LDH) - Organ Damage - Biochemistry, Labs, Clinical significance",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/25%20Lactate%20Dehydrogenase%20%28LDH%29%20-%20Organ%20Damage%20-%20Biochemistry%2C%20Labs%2C%20Clinical%20significance"
      },
      {
        "text": "26 Friction Rub - Pericarditis, Pleurisy (Pleuritis) - Signs in Medicine",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/26%20Friction%20Rub%20-%20Pericarditis%2C%20Pleurisy%20%28Pleuritis%29%20-%20Signs%20in%20Medicine"
      },
      {
        "text": "27 LDH-1 to LDH-2 Ratio (and the flipped LDH) Lactate Dehydrogenase and Heart Attacks ",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/27%20LDH-1%20to%20LDH-2%20Ratio%20%28and%20the%20flipped%20LDH%29%20Lactate%20Dehydrogenase%20and%20Heart%20Attacks%20"
      },
      {
        "text": "28 Tetralogy of Fallot (TOF) Cyanotic Congenital Heart Disease (CHD) Cardiology",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/28%20Tetralogy%20of%20Fallot%20%28TOF%29%20Cyanotic%20Congenital%20Heart%20Disease%20%28CHD%29%20Cardiology"
      },
      {
        "text": "29 Tetralogy of Fallot (TOF)  Patients Squat a lot…Ever Wonder Why",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/29%20Tetralogy%20of%20Fallot%20%28TOF%29%20%20Patients%20Squat%20a%20lot%E2%80%A6Ever%20Wonder%20Why"
      },
      {
        "text": "30 Coarctation of the Aorta - Cardiology Series - Types, Symptoms, Signs, Diagnosis & Treatment",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/30%20Coarctation%20of%20the%20Aorta%20-%20Cardiology%20Series%20-%20Types%2C%20Symptoms%2C%20Signs%2C%20Diagnosis%20%26%20Treatment"
      },
      {
        "text": "31 Rheumatic Fever - Jones Criteria - Causes, Signs, Symptoms, Diagnosis & Treatment - Cardiology",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/31%20Rheumatic%20Fever%20-%20Jones%20Criteria%20-%20Causes%2C%20Signs%2C%20Symptoms%2C%20Diagnosis%20%26%20Treatment%20-%20Cardiology"
      },
      {
        "text": "32 Sydenham Chorea (St. Vitus Dance) - Rheumatic Fever - Neurology & Cardiology",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/32%20Sydenham%20Chorea%20%28St.%20Vitus%20Dance%29%20-%20Rheumatic%20Fever%20-%20Neurology%20%26%20Cardiology"
      },
      {
        "text": "33 Infective Endocarditis - Fever & New Murmur - Modified Duke’s Criteria - Cardiology Playlist",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/33%20Infective%20Endocarditis%20-%20Fever%20%26%20New%20Murmur%20-%20Modified%20Duke%E2%80%99s%20Criteria%20-%20Cardiology%20Playlist"
      },
      {
        "text": "34 Rheumatic Fever vs. Infective Endocarditis - Comparison - Cardiology Series",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/34%20Rheumatic%20Fever%20vs.%20Infective%20Endocarditis%20-%20Comparison%20-%20Cardiology%20Series"
      },
      {
        "text": "35 Acute Myocarditis — Causes, Symptoms, Diagnosis & Treatment — Cardiology",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/35%20Acute%20Myocarditis%20%E2%80%94%20Causes%2C%20Symptoms%2C%20Diagnosis%20%26%20Treatment%20%E2%80%94%20Cardiology"
      },
      {
        "text": "36 Acute Pericarditis, Pericardial Effusions, Dressler Syndrome — Cardiology Series",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/36%20Acute%20Pericarditis%2C%20Pericardial%20Effusions%2C%20Dressler%20Syndrome%20%E2%80%94%20Cardiology%20Series"
      },
      {
        "text": "37 Cardiac Tamponade - Causes, Symptoms, Signs, Diagnosis & Treatment - Cardiology Series",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/37%20Cardiac%20Tamponade%20-%20Causes%2C%20Symptoms%2C%20Signs%2C%20Diagnosis%20%26%20Treatment%20-%20Cardiology%20Series"
      },
      {
        "text": "38 Constrictive Pericarditis - Causes, Symptoms, Signs, Diagnosis & Management - Cardiology",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/38%20Constrictive%20Pericarditis%20-%20Causes%2C%20Symptoms%2C%20Signs%2C%20Diagnosis%20%26%20Management%20-%20Cardiology"
      },
      {
        "text": "39 Constrictive Pericarditis vs. Cardiac Tamponade - Cardiology Series",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/39%20Constrictive%20Pericarditis%20vs.%20Cardiac%20Tamponade%20-%20Cardiology%20Series"
      },
      {
        "text": "40 Heart Arrhythmia - Wolff-Parkinson White (WPW) Syndrome - AVRT - Supraventricular Tachycardia - ECG",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/40%20Heart%20Arrhythmia%20-%20Wolff-Parkinson%20White%20%28WPW%29%20Syndrome%20-%20AVRT%20-%20Supraventricular%20Tachycardia%20-%20ECG"
      },
      {
        "text": "41 Anaphylactic Shock (Anaphylaxis) Distributive Shock Pathophysiology + Mnemonic",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/41%20Anaphylactic%20Shock%20%28Anaphylaxis%29%20Distributive%20Shock%20Pathophysiology%20%2B%20Mnemonic"
      },
      {
        "text": "42 Valvular Heart Diseases (VHD) - An Introduction - Cardiology",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/42%20Valvular%20Heart%20Diseases%20%28VHD%29%20-%20An%20Introduction%20-%20Cardiology"
      },
      {
        "text": "43 Aortic Stenosis (AS) - Valvular Heart Disease (VHD) - Causes, Symptoms, Diagnosis, Treatment -Cardio",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/43%20Aortic%20Stenosis%20%28AS%29%20-%20Valvular%20Heart%20Disease%20%28VHD%29%20-%20Causes%2C%20Symptoms%2C%20Diagnosis%2C%20Treatment%20-Cardio"
      },
      {
        "text": "44 Aortic Regurgitation (AR) - Aortic Insufficiency - Valvular Heart Disease (VHD) - Cardiology",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/44%20Aortic%20Regurgitation%20%28AR%29%20-%20Aortic%20Insufficiency%20-%20Valvular%20Heart%20Disease%20%28VHD%29%20-%20Cardiology"
      },
      {
        "text": "45 Mitral Stenosis (MS) - Valvular Heart Disease (VHD) - Mitral Valve Stenosis - Cardiology Series",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/45%20Mitral%20Stenosis%20%28MS%29%20-%20Valvular%20Heart%20Disease%20%28VHD%29%20-%20Mitral%20Valve%20Stenosis%20-%20Cardiology%20Series"
      },
      {
        "text": "46 Mitral Regurgitaion (MR) - Valvular Heart Disease (VHD) - Mitral valve Insufficiency - Cardiology",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/46%20Mitral%20Regurgitaion%20%28MR%29%20-%20Valvular%20Heart%20Disease%20%28VHD%29%20-%20Mitral%20valve%20Insufficiency%20-%20Cardiology"
      },
      {
        "text": "47 Mitral Valve Prolapse (MVP) - Mitral Regurgitation (MR) - Valvular Heart Disease (VHD) - Cardiology",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/47%20Mitral%20Valve%20Prolapse%20%28MVP%29%20-%20Mitral%20Regurgitation%20%28MR%29%20-%20Valvular%20Heart%20Disease%20%28VHD%29%20-%20Cardiology"
      },
      {
        "text": "48 Tricuspid Stenosis (TS) - Valvular Heart Disease (VHD) - Tricuspid valve stenosis - Cardiology",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/48%20Tricuspid%20Stenosis%20%28TS%29%20-%20Valvular%20Heart%20Disease%20%28VHD%29%20-%20Tricuspid%20valve%20stenosis%20-%20Cardiology"
      },
      {
        "text": "49 Tricuspid Regurgitation (TR) - Valvular Heart Disease (VHD) - Tricuspid Valve Insufficiency - Cardio",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/49%20Tricuspid%20Regurgitation%20%28TR%29%20-%20Valvular%20Heart%20Disease%20%28VHD%29%20-%20Tricuspid%20Valve%20Insufficiency%20-%20Cardio"
      },
      {
        "text": "50 Pulmonic Stenosis (PS) - Pulmonic Valve Stenosis - Valvular Heart Disease (VHD) - Cardiology",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/50%20Pulmonic%20Stenosis%20%28PS%29%20-%20Pulmonic%20Valve%20Stenosis%20-%20Valvular%20Heart%20Disease%20%28VHD%29%20-%20Cardiology"
      },
      {
        "text": "51 Pulmonary Regurgitation (PR) - Pulmonic Insufficiency - Valvular Heart Disease (VHD) - Cardiology",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/51%20Pulmonary%20Regurgitation%20%28PR%29%20-%20Pulmonic%20Insufficiency%20-%20Valvular%20Heart%20Disease%20%28VHD%29%20-%20Cardiology"
      },
      {
        "text": "52 Heart Murmurs - Quick Review - Stenosis, Regurgitaion, AS, AR, MS, MR, PS, PR, MVP, TS, TR",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/52%20Heart%20Murmurs%20-%20Quick%20Review%20-%20Stenosis%2C%20Regurgitaion%2C%20AS%2C%20AR%2C%20MS%2C%20MR%2C%20PS%2C%20PR%2C%20MVP%2C%20TS%2C%20TR"
      },
      {
        "text": "53 Dilated (Congestive) Cardiomyopathy (Systolic Dysfunction) - Causes, Symptoms, Diagnosis, Treatment",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/53%20Dilated%20%28Congestive%29%20Cardiomyopathy%20%28Systolic%20Dysfunction%29%20-%20Causes%2C%20Symptoms%2C%20Diagnosis%2C%20Treatment"
      },
      {
        "text": "54 Hypertrophic Cardiomyopathy (HOCM) - Sudden Cardiac Death - Cardiology Series",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/54%20Hypertrophic%20Cardiomyopathy%20%28HOCM%29%20-%20Sudden%20Cardiac%20Death%20-%20Cardiology%20Series"
      },
      {
        "text": "55 Restrictive Cardiomyopathy - Causes, Symptoms, Diagnosis & Treatment - Cardiology Series",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/55%20Restrictive%20Cardiomyopathy%20-%20Causes%2C%20Symptoms%2C%20Diagnosis%20%26%20Treatment%20-%20Cardiology%20Series"
      },
      {
        "text": "56 Broken Heart Syndrome (Takotsubo cardiomyopathy) Cardiology Series",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/56%20Broken%20Heart%20Syndrome%20%28Takotsubo%20cardiomyopathy%29%20Cardiology%20Series"
      },
      {
        "text": "57 Heart Tumors - Myxoma, Rhabdomyoma, Leiomyosarcoma - Cardiology Playlist",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/57%20Heart%20Tumors%20-%20Myxoma%2C%20Rhabdomyoma%2C%20Leiomyosarcoma%20-%20Cardiology%20Playlist"
      },
      {
        "text": "58 Postural Orthostatic Tachycardia Syndrome (POTS) - Causes, Symptoms, Diagnosis, Treatment-Cardiology",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/58%20Postural%20Orthostatic%20Tachycardia%20Syndrome%20%28POTS%29%20-%20Causes%2C%20Symptoms%2C%20Diagnosis%2C%20Treatment-Cardiology"
      },
      {
        "text": "59 Aortic Dissection - Dissecting Aortic Aneurysm - Cardiology Series",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/59%20Aortic%20Dissection%20-%20Dissecting%20Aortic%20Aneurysm%20-%20Cardiology%20Series"
      },
      {
        "text": "60 Aortic Dissection - Stanford Type A vs Stanford Type B - Cardiology Series",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/60%20Aortic%20Dissection%20-%20Stanford%20Type%20A%20vs%20Stanford%20Type%20B%20-%20Cardiology%20Series"
      },
      {
        "text": "61 Hypertension & Kidney Disease Renovascular Hypertension vs Hypertensive Nephropathy",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/61%20Hypertension%20%26%20Kidney%20Disease%20Renovascular%20Hypertension%20vs%20Hypertensive%20Nephropathy"
      },
      {
        "text": "62 Henoch-Schönlein Purpura (HSP) - with a Mnemonic - IgA Vasculitis (IgA Disease) -Vascular Pathology",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/62%20Henoch-Sch%C3%B6nlein%20Purpura%20%28HSP%29%20-%20with%20a%20Mnemonic%20-%20IgA%20Vasculitis%20%28IgA%20Disease%29%20-Vascular%20Pathology"
      },
      {
        "text": "63 Giant cell arteritis (Temporal arteritis)",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/63%20Giant%20cell%20arteritis%20%28Temporal%20arteritis%29"
      },
      {
        "text": "64 Pharmacology Intro - Pharmacokinetics, Pharmacodynamics, Autonomic, Neuro, Cardiac, Respiratory, GI",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/64%20Pharmacology%20Intro%20-%20Pharmacokinetics%2C%20Pharmacodynamics%2C%20Autonomic%2C%20Neuro%2C%20Cardiac%2C%20Respiratory%2C%20GI"
      },
      {
        "text": "65 Sympathomimetics (Adrenergic Agonists)—Epinephrine, Norepinephrine - Alpha & Beta Receptors",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/65%20Sympathomimetics%20%28Adrenergic%20Agonists%29%E2%80%94Epinephrine%2C%20Norepinephrine%20-%20Alpha%20%26%20Beta%20Receptors"
      },
      {
        "text": "66 Sympatholytics (Adrenergic Antagonists) — Alpha blockers, Beta blockers, Calcium channel blockers",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/66%20Sympatholytics%20%28Adrenergic%20Antagonists%29%20%E2%80%94%20Alpha%20blockers%2C%20Beta%20blockers%2C%20Calcium%20channel%20blockers"
      },
      {
        "text": "67 Alpha vs. Beta Adrenergic Receptors - Autonomic Nervous System - Physiology and Pharmacology",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/67%20Alpha%20vs.%20Beta%20Adrenergic%20Receptors%20-%20Autonomic%20Nervous%20System%20-%20Physiology%20and%20Pharmacology"
      },
      {
        "text": "68 Hypertension in Pregnancy Mnemonic",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/68%20Hypertension%20in%20Pregnancy%20Mnemonic"
      },
      {
        "text": "69 Digoxin Mnemonic - Cardiac Glycosides (Inotropes) - Cardiac Pharmacology - Cardiology",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/69%20Digoxin%20Mnemonic%20-%20Cardiac%20Glycosides%20%28Inotropes%29%20-%20Cardiac%20Pharmacology%20-%20Cardiology"
      },
      {
        "text": "70 Cardiac Pharmaoclogy (1) Fenoldopam with a Mnemonic",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/70%20Cardiac%20Pharmaoclogy%20%281%29%20Fenoldopam%20with%20a%20Mnemonic"
      },
      {
        "text": "71 Cardiac Pharmacology (2) Reserpine with a Mnemonic",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/71%20Cardiac%20Pharmacology%20%282%29%20Reserpine%20with%20a%20Mnemonic"
      },
      {
        "text": "72 Cardiac Pharmacology (4) Bempedoic Acid",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/72%20Cardiac%20Pharmacology%20%284%29%20Bempedoic%20Acid"
      },
      {
        "text": "73 Cardiac Pharmacology (3) Niacin with a Mnemonic - NAD+, NADH, Nicotinic Acid - Cardiology",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/73%20Cardiac%20Pharmacology%20%283%29%20Niacin%20with%20a%20Mnemonic%20-%20NAD%2B%2C%20NADH%2C%20Nicotinic%20Acid%20-%20Cardiology"
      },
      {
        "text": "74 Cardiac Pharmacology (5) Ivabradine with Mnemonic",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/74%20Cardiac%20Pharmacology%20%285%29%20Ivabradine%20with%20Mnemonic"
      },
      {
        "text": "75 Bradykinin Pharmacology and ACE inhibitors - Immunology - Pathology",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/75%20Bradykinin%20Pharmacology%20and%20ACE%20inhibitors%20-%20Immunology%20-%20Pathology"
      },
      {
        "text": "76 Dopamine & Dobutamine - with a Mnemonic - Cardiac Pharmacology (6)",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/76%20Dopamine%20%26%20Dobutamine%20-%20with%20a%20Mnemonic%20-%20Cardiac%20Pharmacology%20%286%29"
      },
      {
        "text": "77 Cardiac Pharmacology (7) Methyldopa",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/77%20Cardiac%20Pharmacology%20%287%29%20Methyldopa"
      },
      {
        "text": "78 Cardiac Pharmacology (8) Statins, With a Mnemonic",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/78%20Cardiac%20Pharmacology%20%288%29%20Statins%2C%20With%20a%20Mnemonic"
      },
      {
        "text": "79 Lipid-Lowering Agents - Statin, Niacin, Fibrates, Cholestyramine,...etc - Pharmacology (Picmomic)",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/79%20Lipid-Lowering%20Agents%20-%20Statin%2C%20Niacin%2C%20Fibrates%2C%20Cholestyramine%2C...etc%20-%20Pharmacology%20%28Picmomic%29"
      },
      {
        "text": "80 Pericarditis Tamponade physical findings",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/80%20Pericarditis%20Tamponade%20physical%20findings"
      },
      {
        "text": "81 Noonan Syndrome - The Mushroom mnemonic",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/81%20Noonan%20Syndrome%20-%20The%20Mushroom%20mnemonic"
      },
      {
        "text": "82 The Megakaryocytes' Clinical Significance, Tetralogy of Fallot, Nail Clubbing, Cardiology",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/82%20The%20Megakaryocytes%27%20Clinical%20Significance%2C%20Tetralogy%20of%20Fallot%2C%20Nail%20Clubbing%2C%20Cardiology"
      },
      {
        "text": "83 Do you want to (Join) my Youtube membership program Member-only videos!",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/83%20Do%20you%20want%20to%20%28Join%29%20my%20Youtube%20membership%20program%20Member-only%20videos%21"
      },
      {
        "text": "84 Antistreptolysin O (ASO) titer for Streptococcus pyogenes (Rheumatic Fever, APSGN) Nephro Labs",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/84%20Antistreptolysin%20O%20%28ASO%29%20titer%20for%20Streptococcus%20pyogenes%20%28Rheumatic%20Fever%2C%20APSGN%29%20Nephro%20Labs"
      },
      {
        "text": "85 Serum Potassium - Hyperkalemia & Hypokalemia - Electrolytes Series",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/85%20Serum%20Potassium%20-%20Hyperkalemia%20%26%20Hypokalemia%20-%20Electrolytes%20Series"
      },
      {
        "text": "86 Urine Potassium (K) Urine Labs",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/86%20Urine%20Potassium%20%28K%29%20Urine%20Labs"
      },
      {
        "text": "87 Renin-Angiotensin-Aldosterone System (RAAS) & Plasma Renin Activity Assay - Labs",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/87%20Renin-Angiotensin-Aldosterone%20System%20%28RAAS%29%20%26%20Plasma%20Renin%20Activity%20Assay%20-%20Labs"
      },
      {
        "text": "88 Renal vein renin assay - Hypertension and Renal artery stenosis - Nephrology",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/88%20Renal%20vein%20renin%20assay%20-%20Hypertension%20and%20Renal%20artery%20stenosis%20-%20Nephrology"
      },
      {
        "text": "89 Renin Stimulation Test for Hyperaldosteronism - Primary Conn vs Secondary - Physiology Labs",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/89%20Renin%20Stimulation%20Test%20for%20Hyperaldosteronism%20-%20Primary%20Conn%20vs%20Secondary%20-%20Physiology%20Labs"
      },
      {
        "text": "90 ACE Inhibitor Stimulation Test (Captopril Stimulation Test) - Renal Artery Stenosis - Hypertension",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/90%20ACE%20Inhibitor%20Stimulation%20Test%20%28Captopril%20Stimulation%20Test%29%20-%20Renal%20Artery%20Stenosis%20-%20Hypertension"
      },
      {
        "text": "91 Renin Angiotensin Aldosterone System (RAAS) - Physiology",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/91%20Renin%20Angiotensin%20Aldosterone%20System%20%28RAAS%29%20-%20Physiology"
      },
      {
        "text": "92 Marfan Syndrome - Causes, Symptoms, Diagnosis, and Treatment - Genetics",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/92%20Marfan%20Syndrome%20-%20Causes%2C%20Symptoms%2C%20Diagnosis%2C%20and%20Treatment%20-%20Genetics"
      },
      {
        "text": "93 Marfan Syndrome - with a Mnemonic - Biochemistry and Genetics",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/93%20Marfan%20Syndrome%20-%20with%20a%20Mnemonic%20-%20Biochemistry%20and%20Genetics"
      },
      {
        "text": "94 Ehlers-Danlos Syndrome - Causes, Symptoms, Diagnosis, and Treatment - Biochemistry & Genetics",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/94%20Ehlers-Danlos%20Syndrome%20-%20Causes%2C%20Symptoms%2C%20Diagnosis%2C%20and%20Treatment%20-%20Biochemistry%20%26%20Genetics"
      },
      {
        "text": "95 Ehlers-Danlos Syndrome - with a Mnemonic",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/95%20Ehlers-Danlos%20Syndrome%20-%20with%20a%20Mnemonic"
      },
      {
        "text": "96 Marfan Syndrome vs. Ehlers-Danlos Syndrome - Biochemistry and Genetics",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/96%20Marfan%20Syndrome%20vs.%20Ehlers-Danlos%20Syndrome%20-%20Biochemistry%20and%20Genetics"
      },
      {
        "text": "97 Homocystinemia (Homocystinuria) - Causes, Symptoms, Diagnosis, Treatment - Biochemistry & Genetics",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/97%20Homocystinemia%20%28Homocystinuria%29%20-%20Causes%2C%20Symptoms%2C%20Diagnosis%2C%20Treatment%20-%20Biochemistry%20%26%20Genetics"
      },
      {
        "text": "98 Marfan Syndrome vs. Homocystinemia - Biochemistry & Genetics",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/98%20Marfan%20Syndrome%20vs.%20Homocystinemia%20-%20Biochemistry%20%26%20Genetics"
      },
      {
        "text": "99 Pompe Disease (with a mnemonic) -Glycogen Storage Disease Type II (GSD-II) - Biochemistry & Genetics",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/99%20Pompe%20Disease%20%28with%20a%20mnemonic%29%20-Glycogen%20Storage%20Disease%20Type%20II%20%28GSD-II%29%20-%20Biochemistry%20%26%20Genetics"
      },
      {
        "text": "100 Chagas disease - American Trypanosomiasis - Trypanosoma cruzi Protozoa",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/100%20Chagas%20disease%20-%20American%20Trypanosomiasis%20-%20Trypanosoma%20cruzi%20Protozoa"
      },
      {
        "text": "101 Cardiology Cases & Answers TrueLearn Qbank",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/101%20Cardiology%20Cases%20%26%20Answers%20TrueLearn%20Qbank"
      },
      {
        "text": "102 Cardiology Cases (with answers) - Physiology and Pathology - TrueLearn Qbank",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/102%20Cardiology%20Cases%20%28with%20answers%29%20-%20Physiology%20and%20Pathology%20-%20TrueLearn%20Qbank"
      },
      {
        "text": "103 Cardiovascular & Respiratory Cases for USMLE Anatomy, Physiology, Pathology, Microbiology, Pharm",
        "link": "/%E4%B8%93%E8%BE%91%2018%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E7%99%BE%E7%A7%91%E8%BE%9E%E5%85%B8%20%28The%20Cardiology%20Encyclopedia%29/103%20Cardiovascular%20%26%20Respiratory%20Cases%20for%20USMLE%20Anatomy%2C%20Physiology%2C%20Pathology%2C%20Microbiology%2C%20Pharm"
      }
    ]
  },
  {
    "text": "专辑 19：心内科终极辞典基础科学篇",
    "collapsed": true,
    "items": [
      {
        "text": "01 What Happens When Your Heartstrings Tear",
        "link": "/%E4%B8%93%E8%BE%91%2019%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E5%9F%BA%E7%A1%80%E7%A7%91%E5%AD%A6%E7%AF%87/01%20What%20Happens%20When%20Your%20Heartstrings%20Tear"
      },
      {
        "text": "02 You Can Literally Die From a Broken Heart Broken Heart Syndrome",
        "link": "/%E4%B8%93%E8%BE%91%2019%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E5%9F%BA%E7%A1%80%E7%A7%91%E5%AD%A6%E7%AF%87/02%20You%20Can%20Literally%20Die%20From%20a%20Broken%20Heart%20Broken%20Heart%20Syndrome"
      },
      {
        "text": "03 Your Heart Sits In a Sac Pericardium & Pericarditis",
        "link": "/%E4%B8%93%E8%BE%91%2019%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E5%9F%BA%E7%A1%80%E7%A7%91%E5%AD%A6%E7%AF%87/03%20Your%20Heart%20Sits%20In%20a%20Sac%20Pericardium%20%26%20Pericarditis"
      },
      {
        "text": "04 What Happens During a Heart Attack Anatomy of a Heart Attack",
        "link": "/%E4%B8%93%E8%BE%91%2019%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E5%9F%BA%E7%A1%80%E7%A7%91%E5%AD%A6%E7%AF%87/04%20What%20Happens%20During%20a%20Heart%20Attack%20Anatomy%20of%20a%20Heart%20Attack"
      },
      {
        "text": "05 How the Heart Changes with Exercise",
        "link": "/%E4%B8%93%E8%BE%91%2019%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E5%9F%BA%E7%A1%80%E7%A7%91%E5%AD%A6%E7%AF%87/05%20How%20the%20Heart%20Changes%20with%20Exercise"
      },
      {
        "text": "06 What You NEED to Know About Blood Clots",
        "link": "/%E4%B8%93%E8%BE%91%2019%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E5%9F%BA%E7%A1%80%E7%A7%91%E5%AD%A6%E7%AF%87/06%20What%20You%20NEED%20to%20Know%20About%20Blood%20Clots"
      },
      {
        "text": "07 Let's Talk About Irregular Heartbeats",
        "link": "/%E4%B8%93%E8%BE%91%2019%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E5%9F%BA%E7%A1%80%E7%A7%91%E5%AD%A6%E7%AF%87/07%20Let%27s%20Talk%20About%20Irregular%20Heartbeats"
      },
      {
        "text": "08 Can YOU Build a Human With TWO Hearts",
        "link": "/%E4%B8%93%E8%BE%91%2019%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E5%9F%BA%E7%A1%80%E7%A7%91%E5%AD%A6%E7%AF%87/08%20Can%20YOU%20Build%20a%20Human%20With%20TWO%20Hearts"
      },
      {
        "text": "09 Exercise & Sugar When Sugar Can Be a Good Thing",
        "link": "/%E4%B8%93%E8%BE%91%2019%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E5%9F%BA%E7%A1%80%E7%A7%91%E5%AD%A6%E7%AF%87/09%20Exercise%20%26%20Sugar%20When%20Sugar%20Can%20Be%20a%20Good%20Thing"
      },
      {
        "text": "10 Why Your Heart Doesn't EXPLODE Pumping 2000 Gallons a Day",
        "link": "/%E4%B8%93%E8%BE%91%2019%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E5%9F%BA%E7%A1%80%E7%A7%91%E5%AD%A6%E7%AF%87/10%20Why%20Your%20Heart%20Doesn%27t%20EXPLODE%20Pumping%202000%20Gallons%20a%20Day"
      }
    ]
  },
  {
    "text": "专辑 20：心内科终极辞典疾病机制篇 (PathologyMechanisms)",
    "collapsed": true,
    "items": [
      {
        "text": "01 Right Sided Heart Failure",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/01%20Right%20Sided%20Heart%20Failure"
      },
      {
        "text": "02 Left Sided Heart Failure",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/02%20Left%20Sided%20Heart%20Failure"
      },
      {
        "text": "03 Primary Hemostasis _ Physiology, Pathophysiology, and Pharmacology",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/03%20Primary%20Hemostasis%20_%20Physiology%2C%20Pathophysiology%2C%20and%20Pharmacology"
      },
      {
        "text": "04 Heart Rate Variability (HRV) and Health",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/04%20Heart%20Rate%20Variability%20%28HRV%29%20and%20Health"
      },
      {
        "text": "05 An Athletes Heart Blood Flow During Exercise",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/05%20An%20Athletes%20Heart%20Blood%20Flow%20During%20Exercise"
      },
      {
        "text": "06 ST Elevation vs ST Depression",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/06%20ST%20Elevation%20vs%20ST%20Depression"
      },
      {
        "text": "07 Renin Angiotensin Aldosterone System & Blood Pressure Drugs",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/07%20Renin%20Angiotensin%20Aldosterone%20System%20%26%20Blood%20Pressure%20Drugs"
      },
      {
        "text": "08 Erythropoiesis Making Red Blood Cells",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/08%20Erythropoiesis%20Making%20Red%20Blood%20Cells"
      },
      {
        "text": "09 Cardiac Cycle",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/09%20Cardiac%20Cycle"
      },
      {
        "text": "10 Understanding ECGs From Placement to Interpretation",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/10%20Understanding%20ECGs%20From%20Placement%20to%20Interpretation"
      },
      {
        "text": "11 Ischemic Heart Disease (Coronary Artery Disease)",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/11%20Ischemic%20Heart%20Disease%20%28Coronary%20Artery%20Disease%29"
      },
      {
        "text": "12 Heart attack vs Cardiac arrest in 2 mins(1)",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/12%20Heart%20attack%20vs%20Cardiac%20arrest%20in%202%20mins%281%29"
      },
      {
        "text": "13 Heart attack vs Cardiac arrest in 2 mins",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/13%20Heart%20attack%20vs%20Cardiac%20arrest%20in%202%20mins"
      },
      {
        "text": "14 Heart attack vs Heart failure vs Cardiac arrest",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/14%20Heart%20attack%20vs%20Heart%20failure%20vs%20Cardiac%20arrest"
      },
      {
        "text": "15 Hemostasis and the Clotting Cascade (Why Vitamin K & Calcium are important!)",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/15%20Hemostasis%20and%20the%20Clotting%20Cascade%20%28Why%20Vitamin%20K%20%26%20Calcium%20are%20important%21%29"
      },
      {
        "text": "16 ECGs (EKGs) Made Easy!",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/16%20ECGs%20%28EKGs%29%20Made%20Easy%21"
      },
      {
        "text": "17 Capillary Exchange",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/17%20Capillary%20Exchange"
      },
      {
        "text": "18 Anaemia - An overview",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/18%20Anaemia%20-%20An%20overview"
      },
      {
        "text": "19 Valsalva Maneuver Physiology, Benefits, Dangers",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/19%20Valsalva%20Maneuver%20Physiology%2C%20Benefits%2C%20Dangers"
      },
      {
        "text": "20 Beta Blockers Mechanism of Action, categories, clinical indications & adverse effects",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/20%20Beta%20Blockers%20Mechanism%20of%20Action%2C%20categories%2C%20clinical%20indications%20%26%20adverse%20effects"
      },
      {
        "text": "21 Blood Pressure Drugs Mechanism of Action",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/21%20Blood%20Pressure%20Drugs%20Mechanism%20of%20Action"
      },
      {
        "text": "22 Understanding Circulation and Blood Vessels",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/22%20Understanding%20Circulation%20and%20Blood%20Vessels"
      },
      {
        "text": "23 Best way to draw and label the heart! Heart Anatomy",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/23%20Best%20way%20to%20draw%20and%20label%20the%20heart%21%20Heart%20Anatomy"
      },
      {
        "text": "24 Substances That Alter Blood Pressure Chemicals, Hormones, and Neurotransmitters",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/24%20Substances%20That%20Alter%20Blood%20Pressure%20Chemicals%2C%20Hormones%2C%20and%20Neurotransmitters"
      },
      {
        "text": "25 Myocardial Infarction in 2 mins!",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/25%20Myocardial%20Infarction%20in%202%20mins%21"
      },
      {
        "text": "26 Angina pectoris (stable, unstable, variant) - in 2 mins!",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/26%20Angina%20pectoris%20%28stable%2C%20unstable%2C%20variant%29%20-%20in%202%20mins%21"
      },
      {
        "text": "27 Peripheral Vascular Disease",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/27%20Peripheral%20Vascular%20Disease"
      },
      {
        "text": "28 Atherosclerosis - Pathogenesis, risk factors and complications",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/28%20Atherosclerosis%20-%20Pathogenesis%2C%20risk%20factors%20and%20complications"
      },
      {
        "text": "29 Edema (Oedema) In 2 minutes!",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/29%20Edema%20%28Oedema%29%20In%202%20minutes%21"
      },
      {
        "text": "30 Cardiac Output Preload and Afterload EXPLAINED!",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/30%20Cardiac%20Output%20Preload%20and%20Afterload%20EXPLAINED%21"
      },
      {
        "text": "31 Oedema (Edema) Capillary Exchange, Causes, and Pathophysiology",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/31%20Oedema%20%28Edema%29%20Capillary%20Exchange%2C%20Causes%2C%20and%20Pathophysiology"
      },
      {
        "text": "32 ABO Blood Types Made Easy!",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/32%20ABO%20Blood%20Types%20Made%20Easy%21"
      },
      {
        "text": "33 Blood Pressure",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/33%20Blood%20Pressure"
      },
      {
        "text": "34 Coronary Arteries - in 2mins",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/34%20Coronary%20Arteries%20-%20in%202mins"
      },
      {
        "text": "36 Clinically Important Arteries",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/36%20Clinically%20Important%20Arteries"
      },
      {
        "text": "37 Red Blood Cell Production (erythropoiesis) and Breakdown (bilirubin metabolism)",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/37%20Red%20Blood%20Cell%20Production%20%28erythropoiesis%29%20and%20Breakdown%20%28bilirubin%20metabolism%29"
      },
      {
        "text": "38 Parts of the Cardiovascular System",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/38%20Parts%20of%20the%20Cardiovascular%20System"
      },
      {
        "text": "39 Circulatory System Overview",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/39%20Circulatory%20System%20Overview"
      },
      {
        "text": "40 Swelling and Oedema (Capillary Exchange)",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/40%20Swelling%20and%20Oedema%20%28Capillary%20Exchange%29"
      },
      {
        "text": "41 Exercise & Blood Pressure",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/41%20Exercise%20%26%20Blood%20Pressure"
      },
      {
        "text": "42 Heart Conduction & ECG (EKG) Interpretation",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/42%20Heart%20Conduction%20%26%20ECG%20%28EKG%29%20Interpretation"
      },
      {
        "text": "43 Parts of the Cardiac System (Heart Anatomy)",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/43%20Parts%20of%20the%20Cardiac%20System%20%28Heart%20Anatomy%29"
      },
      {
        "text": "44 Introduction to the Cardiac System",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/44%20Introduction%20to%20the%20Cardiac%20System"
      },
      {
        "text": "45 Causes of Shock",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/45%20Causes%20of%20Shock"
      },
      {
        "text": "46 How to read an ECG EKG",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/46%20How%20to%20read%20an%20ECG%20EKG"
      },
      {
        "text": "47 Gas Transport",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/47%20Gas%20Transport"
      },
      {
        "text": "48 Gas Transport",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/48%20Gas%20Transport"
      },
      {
        "text": "49 Blood Types (Blood Groups)",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/49%20Blood%20Types%20%28Blood%20Groups%29"
      },
      {
        "text": "50 Blood Components (Hematocrit)",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/50%20Blood%20Components%20%28Hematocrit%29"
      },
      {
        "text": "51 Blood Clotting (Hemostasis)",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/51%20Blood%20Clotting%20%28Hemostasis%29"
      },
      {
        "text": "52 Types of Shock",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/52%20Types%20of%20Shock"
      },
      {
        "text": "53 ST Elevation and ST Depression EXPLAINED",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/53%20ST%20Elevation%20and%20ST%20Depression%20EXPLAINED"
      },
      {
        "text": "54 Blood Pressure Drugs Pharmacology",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/54%20Blood%20Pressure%20Drugs%20Pharmacology"
      },
      {
        "text": "55 Diving Physiology Respiratory System",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/55%20Diving%20Physiology%20Respiratory%20System"
      },
      {
        "text": "56 Exam Question Anaemia",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/56%20Exam%20Question%20Anaemia"
      },
      {
        "text": "57 Exam Question Acute Coronary Syndrome Medications",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/57%20Exam%20Question%20Acute%20Coronary%20Syndrome%20Medications"
      },
      {
        "text": "58 Exam Question Heart failure Secondary to COPD",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/58%20Exam%20Question%20Heart%20failure%20Secondary%20to%20COPD"
      },
      {
        "text": "59 Pacemaker Cells of the Heart Cardiology",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/59%20Pacemaker%20Cells%20of%20the%20Heart%20Cardiology"
      },
      {
        "text": "60 Neural Control of the Heart Cardiology",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/60%20Neural%20Control%20of%20the%20Heart%20Cardiology"
      },
      {
        "text": "61 Cardiac Conduction System Cardiology",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/61%20Cardiac%20Conduction%20System%20Cardiology"
      },
      {
        "text": "62 Systemic Vascular Resistance (Total Peripheral Resistance) Cardiology",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/62%20Systemic%20Vascular%20Resistance%20%28Total%20Peripheral%20Resistance%29%20Cardiology"
      },
      {
        "text": "63 Blood Vessels Cardiology",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/63%20Blood%20Vessels%20Cardiology"
      },
      {
        "text": "64 Aortic Branches Cardiology",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/64%20Aortic%20Branches%20Cardiology"
      },
      {
        "text": "65 Heart Failure Causes",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/65%20Heart%20Failure%20Causes"
      },
      {
        "text": "66 Afterload Cardiology",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/66%20Afterload%20Cardiology"
      },
      {
        "text": "67 Heart Sounds & Surface Anatomy Cardiology",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/67%20Heart%20Sounds%20%26%20Surface%20Anatomy%20Cardiology"
      },
      {
        "text": "68 Myocardial Thickness Cardiology",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/68%20Myocardial%20Thickness%20Cardiology"
      },
      {
        "text": "69 Heart Circulation Cardiology",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/69%20Heart%20Circulation%20Cardiology"
      },
      {
        "text": "70 Preload ｜ Cardiology",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/70%20Preload%20%EF%BD%9C%20Cardiology"
      },
      {
        "text": "71 Cardiac Output Cardiology",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/71%20Cardiac%20Output%20Cardiology"
      },
      {
        "text": "72 Coeliac Trunk _ Blood Supply to Stomach, Liver, and Spleen",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/72%20Coeliac%20Trunk%20_%20Blood%20Supply%20to%20Stomach%2C%20Liver%2C%20and%20Spleen"
      },
      {
        "text": "73 Heart failure Left versus Right Side Heart Failure",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/73%20Heart%20failure%20Left%20versus%20Right%20Side%20Heart%20Failure"
      },
      {
        "text": "74 Jugular venous pressure",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/74%20Jugular%20venous%20pressure"
      },
      {
        "text": "75 Cardiac dysrhythmias (arrhythmias) (common)",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/75%20Cardiac%20dysrhythmias%20%28arrhythmias%29%20%28common%29"
      },
      {
        "text": "76 Fetal circulation Embryology",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/76%20Fetal%20circulation%20Embryology"
      },
      {
        "text": "77 Hypertension & Anti-hypertensive drugs",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/77%20Hypertension%20%26%20Anti-hypertensive%20drugs"
      },
      {
        "text": "78 Capillary exchange",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/78%20Capillary%20exchange"
      },
      {
        "text": "79 ECG measurement and interpretation",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/79%20ECG%20measurement%20and%20interpretation"
      },
      {
        "text": "80 Heart Muscle (myocardium) Action Potential Cardiology",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/80%20Heart%20Muscle%20%28myocardium%29%20Action%20Potential%20Cardiology"
      },
      {
        "text": "81 ECG Placement",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/81%20ECG%20Placement"
      },
      {
        "text": "82 Coronary arteries",
        "link": "/%E4%B8%93%E8%BE%91%2020%EF%BC%9A%E5%BF%83%E5%86%85%E7%A7%91%E7%BB%88%E6%9E%81%E8%BE%9E%E5%85%B8%E7%96%BE%E7%97%85%E6%9C%BA%E5%88%B6%E7%AF%87%20%28PathologyMechanisms%29/82%20Coronary%20arteries"
      }
    ]
  }
],
            socialLinks: [ { icon: 'github', link: 'https://github.com/vuejs/vitepress' } ]
          },
          mermaid: { theme: 'dark' },
        }))