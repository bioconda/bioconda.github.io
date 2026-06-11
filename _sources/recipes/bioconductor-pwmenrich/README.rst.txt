:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pwmenrich'
.. highlight: bash

bioconductor-pwmenrich
======================

.. conda:recipe:: bioconductor-pwmenrich
   :replaces_section_title:
   :noindex:

   PWM enrichment analysis

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/PWMEnrich.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-pwmenrich <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pwmenrich>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pwmenrich/meta.yaml>`_
   :links: biotools: :biotools:`pwmenrich`, doi: :doi:`10.1038/nmeth.3252`

   A toolkit of high\-level functions for DNA motif scanning and enrichment analysis built upon Biostrings. The main functionality is PWM enrichment analysis of already known PWMs \(e.g. from databases such as MotifDb\)\, but the package also implements high\-level functions for PWM scanning and visualisation. The package does not perform \"de novo\" motif discovery\, but is instead focused on using motifs that are either experimentally derived or computationally constructed by other tools.


.. conda:package:: bioconductor-pwmenrich

   |downloads_bioconductor-pwmenrich| |docker_bioconductor-pwmenrich|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.46.0-0</code>,  <code>4.42.0-0</code>,  <code>4.38.0-0</code>,  <code>4.36.0-0</code>,  <code>4.34.0-0</code>,  <code>4.30.0-0</code>,  <code>4.28.1-0</code>,  <code>4.26.0-1</code>,  <code>4.26.0-0</code>,  </span></summary>
      

      ``4.46.0-0``,  ``4.42.0-0``,  ``4.38.0-0``,  ``4.36.0-0``,  ``4.34.0-0``,  ``4.30.0-0``,  ``4.28.1-0``,  ``4.26.0-1``,  ``4.26.0-0``,  ``4.23.0-0``,  ``4.22.0-0``,  ``4.20.0-1``,  ``4.18.0-0``,  ``4.16.0-0``,  ``4.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqlogo: ``>=1.76.0,<1.77.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-evd: 
   :depends on r-gdata: 

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

    pixi global install bioconductor-pwmenrich

to add into an existing workspace instead, run::

    pixi add bioconductor-pwmenrich

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-pwmenrich

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-pwmenrich

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-pwmenrich:<tag>

(see `bioconductor-pwmenrich/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-pwmenrich| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pwmenrich.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pwmenrich
   :alt:   (downloads)
.. |docker_bioconductor-pwmenrich| image:: https://quay.io/repository/biocontainers/bioconductor-pwmenrich/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pwmenrich
.. _`bioconductor-pwmenrich/tags`: https://quay.io/repository/biocontainers/bioconductor-pwmenrich?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-pwmenrich";
      var versions = ["4.46.0","4.42.0","4.38.0","4.36.0","4.34.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-pwmenrich"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-pwmenrich"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-pwmenrich"></div>



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
         
            // Build cdf plot for bioconductor-pwmenrich
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-pwmenrich/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-pwmenrich', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-pwmenrich
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-pwmenrich/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-pwmenrich', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-pwmenrich
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-pwmenrich/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-pwmenrich', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pwmenrich/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pwmenrich/README.html