:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-linx'
.. highlight: bash

hmftools-linx
=============

.. conda:recipe:: hmftools-linx
   :replaces_section_title:
   :noindex:

   LINX is an annotation\, interpretation and visualisation tool for structural variants.

   :homepage: https://github.com/hartwigmedical/hmftools/tree/master/linx
   :license: GPL / GPL-3.0-only
   :recipe: /`hmftools-linx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-linx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-linx/meta.yaml>`_

   


.. conda:package:: hmftools-linx

   |downloads_hmftools-linx| |docker_hmftools-linx|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3-0</code>,  <code>2.2-0</code>,  <code>2.1-0</code>,  <code>2.0.3-0</code>,  <code>2.0.2-0</code>,  <code>2.0.1-0</code>,  <code>2.0-0</code>,  <code>2.0_beta-2</code>,  <code>2.0_beta-1</code>,  </span></summary>
      

      ``2.3-0``,  ``2.2-0``,  ``2.1-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0-0``,  ``2.0_beta-2``,  ``2.0_beta-1``,  ``2.0_beta-0``,  ``1.25-0``,  ``1.23.6-0``,  ``1.22.1-0``,  ``1.22-0``,  ``1.21-0``,  ``1.20-0``,  ``1.19-0``,  ``1.18-0``,  ``1.17-0``,  ``1.16-0``,  ``1.15-0``,  ``1.14-1``,  ``1.14-0``,  ``1.13-0``,  ``1.12-0``,  ``1.11-0``,  ``1.10-1``,  ``1.10-0``,  ``1.7-0``,  ``1.6-0``,  ``1.5-0``,  ``1.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-gviz: 
   :depends on circos: ``>=0.69.6``
   :depends on openjdk: ``>=8,<=21``
   :depends on perl-gd: ``>=2.76``
   :depends on r-cowplot: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-magick: 
   :depends on r-tidyr: 
   :depends on xorg-libxtst: 

   :additional platforms:
      


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

    pixi global install hmftools-linx

to add into an existing workspace instead, run::

    pixi add hmftools-linx

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hmftools-linx

Alternatively, to install into a new environment, run::

    conda create -n envname hmftools-linx

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hmftools-linx:<tag>

(see `hmftools-linx/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hmftools-linx| image:: https://img.shields.io/conda/dn/bioconda/hmftools-linx.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-linx
   :alt:   (downloads)
.. |docker_hmftools-linx| image:: https://quay.io/repository/biocontainers/hmftools-linx/status
   :target: https://quay.io/repository/biocontainers/hmftools-linx
.. _`hmftools-linx/tags`: https://quay.io/repository/biocontainers/hmftools-linx?tab=tags


.. raw:: html

   <script>
      var package = "hmftools-linx";
      var versions = ["2.3","2.2","2.1","2.0.3","2.0.2"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_hmftools-linx"></div>
   <div style="width: 100%" id="platform_plot_hmftools-linx"></div>
   <div style="width: 100%" id="cdf_plot_hmftools-linx"></div>



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
         
            // Build cdf plot for hmftools-linx
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/hmftools-linx/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_hmftools-linx', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for hmftools-linx
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/hmftools-linx/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_hmftools-linx', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for hmftools-linx
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/hmftools-linx/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_hmftools-linx', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-linx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-linx/README.html