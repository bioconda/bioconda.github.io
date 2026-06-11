:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-purple'
.. highlight: bash

hmftools-purple
===============

.. conda:recipe:: hmftools-purple
   :replaces_section_title:
   :noindex:

   PURPLE is a purity ploidy estimator for tumor samples.

   :homepage: https://github.com/hartwigmedical/hmftools/tree/master/purple
   :license: GPL3 / GPL-3.0-only
   :recipe: /`hmftools-purple <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-purple>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-purple/meta.yaml>`_

   


.. conda:package:: hmftools-purple

   |downloads_hmftools-purple| |docker_hmftools-purple|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.3-0</code>,  <code>4.2-0</code>,  <code>4.1-0</code>,  <code>4.1_beta-3</code>,  <code>4.1_beta-2</code>,  <code>4.1_beta-1</code>,  <code>4.1_beta-0</code>,  <code>4.0.2-0</code>,  <code>4.0.1-0</code>,  </span></summary>
      

      ``4.3-0``,  ``4.2-0``,  ``4.1-0``,  ``4.1_beta-3``,  ``4.1_beta-2``,  ``4.1_beta-1``,  ``4.1_beta-0``,  ``4.0.2-0``,  ``4.0.1-0``,  ``4.0-0``,  ``3.7.1-0``,  ``3.6-0``,  ``3.5-0``,  ``3.4-0``,  ``3.2-0``,  ``3.1-0``,  ``2.54-0``,  ``2.53-1``,  ``2.53-0``,  ``2.52-0``,  ``2.51-1``,  ``2.51-0``,  ``2.50-0``,  ``2.48-0``,  ``2.47-1``,  ``2.47-0``,  ``2.46-0``,  ``2.45-0``,  ``2.44-0``,  ``2.43-0``,  ``2.41-0``,  ``2.40-0``,  ``2.39-0``,  ``2.38-0``,  ``2.37-0``,  ``2.36-0``,  ``2.35-0``,  ``2.34-0``,  ``2.32-0``,  ``2.31-0``,  ``2.25-1``,  ``2.17-1``,  ``2.16-1``,  ``2.16-0``,  ``2.15-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-variantannotation: 
   :depends on circos: ``>=0.69.6``
   :depends on openjdk: ``>=8,<=21``
   :depends on perl-gd: ``>=2.76``
   :depends on r-cairo: 
   :depends on r-cowplot: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-tidyr: 
   :depends on xorg-libxtst: 
   :depends on zlib: 

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

    pixi global install hmftools-purple

to add into an existing workspace instead, run::

    pixi add hmftools-purple

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hmftools-purple

Alternatively, to install into a new environment, run::

    conda create -n envname hmftools-purple

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hmftools-purple:<tag>

(see `hmftools-purple/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hmftools-purple| image:: https://img.shields.io/conda/dn/bioconda/hmftools-purple.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-purple
   :alt:   (downloads)
.. |docker_hmftools-purple| image:: https://quay.io/repository/biocontainers/hmftools-purple/status
   :target: https://quay.io/repository/biocontainers/hmftools-purple
.. _`hmftools-purple/tags`: https://quay.io/repository/biocontainers/hmftools-purple?tab=tags


.. raw:: html

   <script>
      var package = "hmftools-purple";
      var versions = ["4.3","4.2","4.1","4.1_beta","4.1_beta"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_hmftools-purple"></div>
   <div style="width: 100%" id="platform_plot_hmftools-purple"></div>
   <div style="width: 100%" id="cdf_plot_hmftools-purple"></div>



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
         
            // Build cdf plot for hmftools-purple
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/hmftools-purple/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_hmftools-purple', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for hmftools-purple
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/hmftools-purple/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_hmftools-purple', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for hmftools-purple
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/hmftools-purple/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_hmftools-purple', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-purple/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-purple/README.html