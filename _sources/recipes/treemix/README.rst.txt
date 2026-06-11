:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'treemix'
.. highlight: bash

treemix
=======

.. conda:recipe:: treemix
   :replaces_section_title:
   :noindex:

   TreeMix is a method for inferring the patterns of population splits and mixtures in the history of a set of populations.

   :homepage: http://pritchardlab.stanford.edu/software.html
   :license: GPL / GPLv3
   :recipe: /`treemix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treemix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treemix/meta.yaml>`_
   :links: biotools: :biotools:`TreeMix`, doi: :doi:`10.1371/journal.pgen.1002967`

   


.. conda:package:: treemix

   |downloads_treemix| |docker_treemix|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.13-10</code>,  <code>1.13-9</code>,  <code>1.13-8</code>,  <code>1.13-7</code>,  <code>1.13-6</code>,  <code>1.13-5</code>,  <code>1.13-4</code>,  <code>1.13-3</code>,  <code>1.13-2</code>,  </span></summary>
      

      ``1.13-10``,  ``1.13-9``,  ``1.13-8``,  ``1.13-7``,  ``1.13-6``,  ``1.13-5``,  ``1.13-4``,  ``1.13-3``,  ``1.13-2``,  ``1.13-1``,  ``1.13-0``,  ``1.12-3``,  ``1.12-2``,  ``1.12-1``,  ``1.12-0``

      
      .. raw:: html

         </details>
      

   
   :depends on boost-cpp: 
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on libcblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=3.6``
   :depends on r-rcolorbrewer: 
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

    pixi global install treemix

to add into an existing workspace instead, run::

    pixi add treemix

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install treemix

Alternatively, to install into a new environment, run::

    conda create -n envname treemix

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/treemix:<tag>

(see `treemix/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_treemix| image:: https://img.shields.io/conda/dn/bioconda/treemix.svg?style=flat
   :target: https://anaconda.org/bioconda/treemix
   :alt:   (downloads)
.. |docker_treemix| image:: https://quay.io/repository/biocontainers/treemix/status
   :target: https://quay.io/repository/biocontainers/treemix
.. _`treemix/tags`: https://quay.io/repository/biocontainers/treemix?tab=tags


.. raw:: html

   <script>
      var package = "treemix";
      var versions = ["1.13","1.13","1.13","1.13","1.13"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_treemix"></div>
   <div style="width: 100%" id="platform_plot_treemix"></div>
   <div style="width: 100%" id="cdf_plot_treemix"></div>



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
         
            // Build cdf plot for treemix
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/treemix/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_treemix', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for treemix
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/treemix/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_treemix', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for treemix
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/treemix/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_treemix', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/treemix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/treemix/README.html