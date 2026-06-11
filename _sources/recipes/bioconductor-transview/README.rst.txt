:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-transview'
.. highlight: bash

bioconductor-transview
======================

.. conda:recipe:: bioconductor-transview
   :replaces_section_title:
   :noindex:

   Read density map construction and accession. Visualization of ChIPSeq and RNASeq data sets

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/TransView.html
   :license: GPL-3
   :recipe: /`bioconductor-transview <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-transview>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-transview/meta.yaml>`_
   :links: biotools: :biotools:`transview`, doi: :doi:`10.1038/nmeth.3252`

   This package provides efficient tools to generate\, access and display read densities of sequencing based data sets such as from RNA\-Seq and ChIP\-Seq.


.. conda:package:: bioconductor-transview

   |downloads_bioconductor-transview| |docker_bioconductor-transview|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-1</code>,  <code>1.42.0-0</code>,  <code>1.38.0-2</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-1</code>,  </span></summary>
      

      ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.38.0-2``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends on bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends on bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends on bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends on bioconductor-iranges: ``>=2.36.0,<2.37.0a0``
   :depends on bioconductor-rhtslib: ``>=2.4.0,<2.5.0``
   :depends on bioconductor-rhtslib: ``>=2.4.0,<2.5.0a0``
   :depends on bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends on bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends on bioconductor-zlibbioc: ``>=1.48.0,<1.49.0``
   :depends on bioconductor-zlibbioc: ``>=1.48.0,<1.49.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-gplots: 

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

    pixi global install bioconductor-transview

to add into an existing workspace instead, run::

    pixi add bioconductor-transview

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-transview

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-transview

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-transview:<tag>

(see `bioconductor-transview/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-transview| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-transview.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-transview
   :alt:   (downloads)
.. |docker_bioconductor-transview| image:: https://quay.io/repository/biocontainers/bioconductor-transview/status
   :target: https://quay.io/repository/biocontainers/bioconductor-transview
.. _`bioconductor-transview/tags`: https://quay.io/repository/biocontainers/bioconductor-transview?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-transview";
      var versions = ["1.46.0","1.44.0","1.42.0","1.42.0","1.38.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-transview"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-transview"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-transview"></div>



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
         
            // Build cdf plot for bioconductor-transview
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-transview/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-transview', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-transview
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-transview/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-transview', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-transview
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-transview/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-transview', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-transview/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-transview/README.html