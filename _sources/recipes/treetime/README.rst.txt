:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'treetime'
.. highlight: bash

treetime
========

.. conda:recipe:: treetime
   :replaces_section_title:
   :noindex:

   Maximum\-Likelihood dating and ancestral inference for phylogenetic trees.

   :homepage: https://github.com/neherlab/treetime
   :documentation: https://treetime.readthedocs.io/en/latest/index.html
   
   :license: MIT / MIT
   :recipe: /`treetime <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treetime>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treetime/meta.yaml>`_
   :links: doi: :doi:`10.1093/ve/vex042`

   


.. conda:package:: treetime

   |downloads_treetime| |docker_treetime|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.12.1-0</code>,  <code>0.12.0-0</code>,  <code>0.11.5-0</code>,  <code>0.11.4-0</code>,  <code>0.11.3-1</code>,  <code>0.11.3-0</code>,  <code>0.11.2-0</code>,  <code>0.11.1-0</code>,  <code>0.11.0-0</code>,  </span></summary>
      

      ``0.12.1-0``,  ``0.12.0-0``,  ``0.11.5-0``,  ``0.11.4-0``,  ``0.11.3-1``,  ``0.11.3-0``,  ``0.11.2-0``,  ``0.11.1-0``,  ``0.11.0-0``,  ``0.10.1-0``,  ``0.10.0-0``,  ``0.9.6-0``,  ``0.9.5-0``,  ``0.9.4-0``,  ``0.9.3-0``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.6-0``,  ``0.8.5-0``,  ``0.8.4-0``,  ``0.8.3-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.7.5-0``,  ``0.7.4-1``,  ``0.7.4-0``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.0-0``,  ``0.6.4.1-0``,  ``0.6.3-0``,  ``0.6.1-0``,  ``0.5.6-0``,  ``0.5.5-0``,  ``0.5.3-0``,  ``0.5.2-1``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.2.4-1``,  ``0.2.4-0``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.1-1``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``>=1.67,!=1.77,!=1.78``
   :depends on matplotlib-base: ``>=2.0``
   :depends on numpy: ``>=1.10.4``
   :depends on pandas: ``>=0.17.1``
   :depends on python: ``>=3.7``
   :depends on scipy: ``>=0.16.1``

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

    pixi global install treetime

to add into an existing workspace instead, run::

    pixi add treetime

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install treetime

Alternatively, to install into a new environment, run::

    conda create -n envname treetime

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/treetime:<tag>

(see `treetime/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_treetime| image:: https://img.shields.io/conda/dn/bioconda/treetime.svg?style=flat
   :target: https://anaconda.org/bioconda/treetime
   :alt:   (downloads)
.. |docker_treetime| image:: https://quay.io/repository/biocontainers/treetime/status
   :target: https://quay.io/repository/biocontainers/treetime
.. _`treetime/tags`: https://quay.io/repository/biocontainers/treetime?tab=tags


.. raw:: html

   <script>
      var package = "treetime";
      var versions = ["0.12.1","0.12.0","0.11.5","0.11.4","0.11.3"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_treetime"></div>
   <div style="width: 100%" id="platform_plot_treetime"></div>
   <div style="width: 100%" id="cdf_plot_treetime"></div>



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
         
            // Build cdf plot for treetime
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/treetime/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_treetime', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for treetime
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/treetime/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_treetime', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for treetime
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/treetime/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_treetime', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/treetime/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/treetime/README.html