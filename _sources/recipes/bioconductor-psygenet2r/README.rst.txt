:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-psygenet2r'
.. highlight: bash

bioconductor-psygenet2r
=======================

.. conda:recipe:: bioconductor-psygenet2r
   :replaces_section_title:
   :noindex:

   psygenet2r \- An R package for querying PsyGeNET and to perform comorbidity studies in psychiatric disorders

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/psygenet2r.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-psygenet2r <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-psygenet2r>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-psygenet2r/meta.yaml>`_
   :links: biotools: :biotools:`psygenet2r`, doi: :doi:`10.1093/bioinformatics/btv301`

   Package to retrieve data from PsyGeNET database \(www.psygenet.org\) and to perform comorbidity studies with PsyGeNET\'s and user\'s data.


.. conda:package:: bioconductor-psygenet2r

   |downloads_bioconductor-psygenet2r| |docker_bioconductor-psygenet2r|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.32.2-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.21.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.32.2-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.21.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-bgeedb: ``>=2.28.0,<2.29.0``
   :depends on bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends on bioconductor-biomart: ``>=2.58.0,<2.59.0``
   :depends on bioconductor-go.db: ``>=3.18.0,<3.19.0``
   :depends on bioconductor-topgo: ``>=2.54.0,<2.55.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-ggplot2: 
   :depends on r-igraph: 
   :depends on r-labeling: 
   :depends on r-rcurl: 
   :depends on r-reshape2: 
   :depends on r-stringr: 

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

    pixi global install bioconductor-psygenet2r

to add into an existing workspace instead, run::

    pixi add bioconductor-psygenet2r

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-psygenet2r

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-psygenet2r

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-psygenet2r:<tag>

(see `bioconductor-psygenet2r/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-psygenet2r| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-psygenet2r.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-psygenet2r
   :alt:   (downloads)
.. |docker_bioconductor-psygenet2r| image:: https://quay.io/repository/biocontainers/bioconductor-psygenet2r/status
   :target: https://quay.io/repository/biocontainers/bioconductor-psygenet2r
.. _`bioconductor-psygenet2r/tags`: https://quay.io/repository/biocontainers/bioconductor-psygenet2r?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-psygenet2r";
      var versions = ["1.34.0","1.32.2","1.30.0","1.26.0","1.24.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-psygenet2r"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-psygenet2r"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-psygenet2r"></div>



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
         
            // Build cdf plot for bioconductor-psygenet2r
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-psygenet2r/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-psygenet2r', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-psygenet2r
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-psygenet2r/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-psygenet2r', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-psygenet2r
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-psygenet2r/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-psygenet2r', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-psygenet2r/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-psygenet2r/README.html