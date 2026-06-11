:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'galaxy-objectstore'
.. highlight: bash

galaxy-objectstore
==================

.. conda:recipe:: galaxy-objectstore
   :replaces_section_title:
   :noindex:

   The Galaxy object store framework and default implementations.

   :homepage: https://galaxyproject.org
   :documentation: https://docs.galaxyproject.org
   
   :developer docs: https://github.com/galaxyproject/galaxy
   :license: MIT / MIT
   :recipe: /`galaxy-objectstore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-objectstore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-objectstore/meta.yaml>`_
   :links: biotools: :biotools:`galaxy`, doi: :doi:`10.1093/nar/gky379`

   


.. conda:package:: galaxy-objectstore

   |downloads_galaxy-objectstore| |docker_galaxy-objectstore|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>26.0.1-0</code>,  <code>25.1.2-0</code>,  <code>25.1.1-0</code>,  <code>25.0.4-0</code>,  <code>25.0.3-0</code>,  <code>25.0.2-0</code>,  <code>25.0.1-0</code>,  <code>24.2.4-0</code>,  <code>24.2.3-0</code>,  </span></summary>
      

      ``26.0.1-0``,  ``25.1.2-0``,  ``25.1.1-0``,  ``25.0.4-0``,  ``25.0.3-0``,  ``25.0.2-0``,  ``25.0.1-0``,  ``24.2.4-0``,  ``24.2.3-0``,  ``24.2.2-0``,  ``24.2.1-0``,  ``24.2.0-0``,  ``24.1.4-0``,  ``24.1.3-0``,  ``24.1.2-0``,  ``24.1.1-0``,  ``24.0.0-0``,  ``23.2.1-0``,  ``23.1.4-0``,  ``23.1.3-0``,  ``23.1.2-0``,  ``23.1.1-0``,  ``23.0.6-0``,  ``23.0.5-0``,  ``23.0.4-0``,  ``23.0.2-0``,  ``22.1.1-0``,  ``21.9.0-0``,  ``20.9.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on galaxy-tool-util-models: ``>=26.0``
   :depends on galaxy-util: ``>=26.0``
   :depends on pydantic: ``>=2.7.4``
   :depends on python: ``>=3.8``
   :depends on pyyaml: 

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

    pixi global install galaxy-objectstore

to add into an existing workspace instead, run::

    pixi add galaxy-objectstore

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install galaxy-objectstore

Alternatively, to install into a new environment, run::

    conda create -n envname galaxy-objectstore

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/galaxy-objectstore:<tag>

(see `galaxy-objectstore/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_galaxy-objectstore| image:: https://img.shields.io/conda/dn/bioconda/galaxy-objectstore.svg?style=flat
   :target: https://anaconda.org/bioconda/galaxy-objectstore
   :alt:   (downloads)
.. |docker_galaxy-objectstore| image:: https://quay.io/repository/biocontainers/galaxy-objectstore/status
   :target: https://quay.io/repository/biocontainers/galaxy-objectstore
.. _`galaxy-objectstore/tags`: https://quay.io/repository/biocontainers/galaxy-objectstore?tab=tags


.. raw:: html

   <script>
      var package = "galaxy-objectstore";
      var versions = ["26.0.1","25.1.2","25.1.1","25.0.4","25.0.3"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_galaxy-objectstore"></div>
   <div style="width: 100%" id="platform_plot_galaxy-objectstore"></div>
   <div style="width: 100%" id="cdf_plot_galaxy-objectstore"></div>



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
         
            // Build cdf plot for galaxy-objectstore
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/galaxy-objectstore/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_galaxy-objectstore', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for galaxy-objectstore
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/galaxy-objectstore/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_galaxy-objectstore', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for galaxy-objectstore
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/galaxy-objectstore/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_galaxy-objectstore', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galaxy-objectstore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galaxy-objectstore/README.html