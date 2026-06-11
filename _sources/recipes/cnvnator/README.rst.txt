:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cnvnator'
.. highlight: bash

cnvnator
========

.. conda:recipe:: cnvnator
   :replaces_section_title:
   :noindex:

   Tool for calling copy number variations.

   :homepage: https://github.com/abyzovlab/CNVnator
   :license: MIT
   :recipe: /`cnvnator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cnvnator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cnvnator/meta.yaml>`_

   


.. conda:package:: cnvnator

   |downloads_cnvnator| |docker_cnvnator|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.1-12</code>,  <code>0.4.1-11</code>,  <code>0.4.1-10</code>,  <code>0.4.1-9</code>,  <code>0.4.1-8</code>,  <code>0.4.1-7</code>,  <code>0.4.1-6</code>,  <code>0.4.1-5</code>,  <code>0.4.1-4</code>,  </span></summary>
      

      ``0.4.1-12``,  ``0.4.1-11``,  ``0.4.1-10``,  ``0.4.1-9``,  ``0.4.1-8``,  ``0.4.1-7``,  ``0.4.1-6``,  ``0.4.1-5``,  ``0.4.1-4``,  ``0.4.1-3``,  ``0.4.1-2``,  ``0.4.1-1``,  ``0.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on htslib: ``>=1.23,<1.24.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on matplotlib-base: 
   :depends on ncurses: ``>=6.5,<7.0a0``
   :depends on numpy: 
   :depends on perl-getopt-long: 
   :depends on python: ``>=3.13,<3.14.0a0``
   :depends on root_base: ``>=6.34.10,<6.34.11.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      


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

    pixi global install cnvnator

to add into an existing workspace instead, run::

    pixi add cnvnator

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cnvnator

Alternatively, to install into a new environment, run::

    conda create -n envname cnvnator

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cnvnator:<tag>

(see `cnvnator/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cnvnator| image:: https://img.shields.io/conda/dn/bioconda/cnvnator.svg?style=flat
   :target: https://anaconda.org/bioconda/cnvnator
   :alt:   (downloads)
.. |docker_cnvnator| image:: https://quay.io/repository/biocontainers/cnvnator/status
   :target: https://quay.io/repository/biocontainers/cnvnator
.. _`cnvnator/tags`: https://quay.io/repository/biocontainers/cnvnator?tab=tags


.. raw:: html

   <script>
      var package = "cnvnator";
      var versions = ["0.4.1","0.4.1","0.4.1","0.4.1","0.4.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_cnvnator"></div>
   <div style="width: 100%" id="platform_plot_cnvnator"></div>
   <div style="width: 100%" id="cdf_plot_cnvnator"></div>



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
         
            // Build cdf plot for cnvnator
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/cnvnator/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_cnvnator', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for cnvnator
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/cnvnator/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_cnvnator', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for cnvnator
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/cnvnator/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_cnvnator', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cnvnator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cnvnator/README.html