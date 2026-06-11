:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rsem'
.. highlight: bash

rsem
====

.. conda:recipe:: rsem
   :replaces_section_title:
   :noindex:

   RSEM is a software package for estimating gene and isoform expression levels from RNA\-Seq data.

   :homepage: https://deweylab.github.io/RSEM
   :developer docs: https://github.com/deweylab/RSEM
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`rsem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rsem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rsem/meta.yaml>`_
   :links: doi: :doi:`10.1186/1471-2105-12-323`, biotools: :biotools:`rsem`

   \"RSEM is a software package for estimating gene and isoform expression levels from RNA\-Seq data. \"
   \"The RSEM package provides an user\-friendly interface\, supports threads for parallel computation \"
   \"of the EM algorithm\, single\-end and paired\-end read data\, quality scores\, variable\-length reads \"
   \"and RSPD estimation. In addition\, it provides posterior mean and 95\% credibility interval \"
   \"estimates for expression levels. For visualization\, It can generate BAM and Wiggle files in both \"
   \"transcript\-coordinate and genomic\-coordinate. Genomic\-coordinate files can be visualized by both \"
   \"UCSC Genome browser and Broad Institute\'s Integrative Genomics Viewer \(IGV\). Transcript\-coordinate \"
   \"files can be visualized by IGV. RSEM also has its own scripts to generate transcript read depth \"
   \"plots in pdf format. The unique feature of RSEM is\, the read depth plots can be stacked\, with read \"
   \"depth contributed to unique reads shown in black and contributed to multi\-reads shown in red. In \"
   \"addition\, models learned from data can also be visualized. Last but not least\, RSEM contains a \"
   \"simulator.\"



.. conda:package:: rsem

   |downloads_rsem| |docker_rsem|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.3-12</code>,  <code>1.3.3-11</code>,  <code>1.3.3-10</code>,  <code>1.3.3-9</code>,  <code>1.3.3-7</code>,  <code>1.3.3-6</code>,  <code>1.3.3-5</code>,  <code>1.3.3-4</code>,  <code>1.3.3-3</code>,  </span></summary>
      

      ``1.3.3-12``,  ``1.3.3-11``,  ``1.3.3-10``,  ``1.3.3-9``,  ``1.3.3-7``,  ``1.3.3-6``,  ``1.3.3-5``,  ``1.3.3-4``,  ``1.3.3-3``,  ``1.3.3-2``,  ``1.3.3-1``,  ``1.3.3-0``,  ``1.3.2-1``,  ``1.3.2-0``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.3.0-4``,  ``1.3.0-3``,  ``1.3.0-2``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.28-2``,  ``1.2.28-0``,  ``1.2.22-0``,  ``1.2.21-5``,  ``1.2.21-4``,  ``1.2.21-3``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: 
   :depends on bioconductor-ebseq: 
   :depends on htslib: ``>=1.22.1,<1.24.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-module-build: ``0.4234.*``
   :depends on r-base: 
   :depends on samtools: 
   :depends on ucsc-bigwigsummary: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      


Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install rsem

to add into an existing workspace instead, run::

    pixi add rsem

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rsem

Alternatively, to install into a new environment, run::

    conda create -n envname rsem

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rsem:<tag>

(see `rsem/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rsem| image:: https://img.shields.io/conda/dn/bioconda/rsem.svg?style=flat
   :target: https://anaconda.org/bioconda/rsem
   :alt:   (downloads)
.. |docker_rsem| image:: https://quay.io/repository/biocontainers/rsem/status
   :target: https://quay.io/repository/biocontainers/rsem
.. _`rsem/tags`: https://quay.io/repository/biocontainers/rsem?tab=tags


.. raw:: html

   <script>
      var package = "rsem";
      var versions = ["1.3.3","1.3.3","1.3.3","1.3.3","1.3.3"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_rsem"></div>
   <div style="width: 100%" id="platform_plot_rsem"></div>
   <div style="width: 100%" id="cdf_plot_rsem"></div>



   ..
      Create all the necessary plots for each package by loading all the
      correct specs and data. Important points on the place and implementation
      of this script block:
      1. It is here, and not in a separate HTML file, as it needs to have the
         `package.name` rendered in for each package.
      2. All packages are handled in one `window.onload` function, as multiple
         instances of this throughout a (rendered) HTML just overwrite each
         other.

   <script>
      window.onload = async function() {
         
            // Build cdf plot for rsem
            try {
               const cdf_spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/cdf.vl.json")
               if (!cdf_spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${cdf_spec_resp.status}.`);
               }
               const cdf_spec = await cdf_spec_resp.json();
               const cdf_data_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/cdf.json")
               if (!cdf_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${cdf_data_resp.status}.`);
               }
               const cdf_plot_data = await cdf_data_resp.json();
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/rsem/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_rsem', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for rsem
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/rsem/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_rsem', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for rsem
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/rsem/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_rsem', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rsem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rsem/README.html