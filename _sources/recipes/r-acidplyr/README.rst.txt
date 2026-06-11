:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-acidplyr'
.. highlight: bash

r-acidplyr
==========

.. conda:recipe:: r-acidplyr
   :replaces_section_title:
   :noindex:

   A grammar of S4 class data manipulation.

   :homepage: https://r.acidgenomics.com/packages/acidplyr/
   :developer docs: https://github.com/acidgenomics/r-acidplyr
   :license: GPL / AGPL-3.0
   :recipe: /`r-acidplyr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidplyr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidplyr/meta.yaml>`_

   


.. conda:package:: r-acidplyr

   |downloads_r-acidplyr| |docker_r-acidplyr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.5-0</code>,  <code>0.5.4-1</code>,  <code>0.5.4-0</code>,  <code>0.5.3-0</code>,  <code>0.5.2-0</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.2-0</code>,  <code>0.4.1-0</code>,  </span></summary>
      

      ``0.5.5-0``,  ``0.5.4-1``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.3.11-0``,  ``0.3.10-2``,  ``0.3.10-1``,  ``0.3.10-0``,  ``0.3.9-1``,  ``0.3.9-0``,  ``0.3.8-0``,  ``0.3.7-1``,  ``0.3.7-0``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.2-1``,  ``0.3.2-0``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.22-0``,  ``0.1.21-0``,  ``0.1.20-0``,  ``0.1.18-2``,  ``0.1.18-1``,  ``0.1.18-0``,  ``0.1.17-1``,  ``0.1.17-0``,  ``0.1.4-1``,  ``0.1.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.46.0``
   :depends on bioconductor-iranges: ``>=2.34.0``
   :depends on bioconductor-s4vectors: ``>=0.38.0``
   :depends on r-acidgenerics: ``>=0.7.4``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-goalie: ``>=0.7.6``

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

    pixi global install r-acidplyr

to add into an existing workspace instead, run::

    pixi add r-acidplyr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-acidplyr

Alternatively, to install into a new environment, run::

    conda create -n envname r-acidplyr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-acidplyr:<tag>

(see `r-acidplyr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-acidplyr| image:: https://img.shields.io/conda/dn/bioconda/r-acidplyr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-acidplyr
   :alt:   (downloads)
.. |docker_r-acidplyr| image:: https://quay.io/repository/biocontainers/r-acidplyr/status
   :target: https://quay.io/repository/biocontainers/r-acidplyr
.. _`r-acidplyr/tags`: https://quay.io/repository/biocontainers/r-acidplyr?tab=tags


.. raw:: html

   <script>
      var package = "r-acidplyr";
      var versions = ["0.5.5","0.5.4","0.5.4","0.5.3","0.5.2"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_r-acidplyr"></div>
   <div style="width: 100%" id="platform_plot_r-acidplyr"></div>
   <div style="width: 100%" id="cdf_plot_r-acidplyr"></div>



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
         
            // Build cdf plot for r-acidplyr
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-acidplyr/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_r-acidplyr', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for r-acidplyr
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-acidplyr/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_r-acidplyr', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for r-acidplyr
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-acidplyr/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_r-acidplyr', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-acidplyr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-acidplyr/README.html