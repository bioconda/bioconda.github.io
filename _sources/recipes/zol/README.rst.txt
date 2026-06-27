:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'zol'
.. highlight: bash

zol
===

.. conda:recipe:: zol
   :replaces_section_title:
   :noindex:

   zol \(\& fai\)\: large\-scale targeted detection and evolutionary investigation of gene clusters.

   :homepage: https://github.com/Kalan-Lab/zol
   :documentation: https://github.com/Kalan-Lab/zol/wiki
   
   :license: BSD / BSD-3-Clause
   :recipe: /`zol <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zol>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zol/meta.yaml>`_

   


.. conda:package:: zol

   |downloads_zol| |docker_zol|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6.19-0</code>,  <code>1.6.18-0</code>,  <code>1.6.17-2</code>,  <code>1.6.17-1</code>,  <code>1.6.17-0</code>,  <code>1.6.16-0</code>,  <code>1.6.15-0</code>,  <code>1.6.14-0</code>,  <code>1.6.13-0</code>,  </span></summary>
      

      ``1.6.19-0``,  ``1.6.18-0``,  ``1.6.17-2``,  ``1.6.17-1``,  ``1.6.17-0``,  ``1.6.16-0``,  ``1.6.15-0``,  ``1.6.14-0``,  ``1.6.13-0``,  ``1.6.12-0``,  ``1.6.11-0``,  ``1.6.10-0``,  ``1.6.9-1``,  ``1.6.9-0``,  ``1.6.8-0``,  ``1.6.7-0``,  ``1.6.5-0``,  ``1.6.4-0``,  ``1.6.3-0``,  ``1.6.2-2``,  ``1.6.2-1``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.5.19-0``,  ``1.5.17-0``,  ``1.5.16-0``,  ``1.5.15-0``,  ``1.5.14-0``,  ``1.5.13-0``,  ``1.5.12-0``,  ``1.5.11-0``,  ``1.5.10-0``,  ``1.5.9-0``,  ``1.5.8-0``,  ``1.5.7-0``,  ``1.5.6-0``,  ``1.5.5-0``,  ``1.5.4-0``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-1``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.12-0``,  ``1.4.11-0``,  ``1.4.10-1``,  ``1.4.10-0``,  ``1.4.9-1``,  ``1.4.9-0``,  ``1.4.8-0``,  ``1.4.7-0``,  ``1.4.5-0``,  ``1.4.4-0``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.3.20-0``,  ``1.3.19-0``,  ``1.3.18-0``,  ``1.3.17-0``,  ``1.3.16-0``,  ``1.3.15-0``,  ``1.3.14-0``,  ``1.3.12-0``,  ``1.3.11-0``,  ``1.3.10-0``,  ``1.3.9-0``,  ``1.3.8-0``,  ``1.3.7-0``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.2.8-0``,  ``1.2.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends on __osx: ``>=10.13``
   :depends on aiofile: 
   :depends on aiohttp: 
   :depends on bioconductor-ggtree: 
   :depends on biopython: 
   :depends on codoff: ``>=1.2.3``
   :depends on colour: 
   :depends on curl: 
   :depends on diamond: ``2.1.11.*``
   :depends on ete3: 
   :depends on famsa: ``>2``
   :depends on fasttree: 
   :depends on gzip: 
   :depends on hmmer: ``>=3.0.0``
   :depends on hyphy: ``>=2.5.14``
   :depends on legacy-cgi: 
   :depends on libcxx: ``>=19``
   :depends on libopenblas: 
   :depends on mcl: 
   :depends on miniprot: ``0.13.*``
   :depends on muscle: ``5.1.*``
   :depends on pal2nal: ``>=14.1``
   :depends on pandas: ``>=2.0``
   :depends on peptides: 
   :depends on pip: 
   :depends on pomegranate: ``>=1.0.0``
   :depends on prodigal: 
   :depends on prodigal-gv: 
   :depends on pyhmmer: ``0.11.4.*``
   :depends on pympler: 
   :depends on pyrodigal: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on r-base: 
   :depends on r-cowplot: 
   :depends on r-gggenes: 
   :depends on r-ggplot2: 
   :depends on r-gridextra: 
   :depends on rich-argparse: 
   :depends on scikit-learn: 
   :depends on setuptools: 
   :depends on skani: ``>=0.2.2``
   :depends on slclust: 
   :depends on tqdm: 
   :depends on trimal: 
   :depends on xlsxwriter: ``>=3.0.3``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code>,  <code>linux-aarch64</code></span>
      


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

    pixi global install zol

to add into an existing workspace instead, run::

    pixi add zol

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install zol

Alternatively, to install into a new environment, run::

    conda create -n envname zol

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/zol:<tag>

(see `zol/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_zol| image:: https://img.shields.io/conda/dn/bioconda/zol.svg?style=flat
   :target: https://anaconda.org/bioconda/zol
   :alt:   (downloads)
.. |docker_zol| image:: https://quay.io/repository/biocontainers/zol/status
   :target: https://quay.io/repository/biocontainers/zol
.. _`zol/tags`: https://quay.io/repository/biocontainers/zol?tab=tags


.. raw:: html

   <script>
      var package = "zol";
      var versions = ["1.6.19","1.6.18","1.6.17","1.6.17","1.6.17"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_zol"></div>
   <div style="width: 100%" id="platform_plot_zol"></div>
   <div style="width: 100%" id="cdf_plot_zol"></div>



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
         
            // Build cdf plot for zol
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/zol/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_zol', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for zol
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/zol/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_zol', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for zol
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/zol/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_zol', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/zol/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/zol/README.html