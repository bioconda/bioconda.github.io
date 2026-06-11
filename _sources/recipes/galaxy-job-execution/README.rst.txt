:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'galaxy-job-execution'
.. highlight: bash

galaxy-job-execution
====================

.. conda:recipe:: galaxy-job-execution
   :replaces_section_title:
   :noindex:

   Galaxy job execution runtime utilities.

   :homepage: https://galaxyproject.org
   :documentation: https://docs.galaxyproject.org
   
   :developer docs: https://github.com/galaxyproject/galaxy
   :license: MIT / MIT
   :recipe: /`galaxy-job-execution <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-job-execution>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-job-execution/meta.yaml>`_
   :links: biotools: :biotools:`galaxy`, doi: :doi:`10.1093/nar/gky379`

   


.. conda:package:: galaxy-job-execution

   |downloads_galaxy-job-execution| |docker_galaxy-job-execution|

   :versions:
      
      

      ``26.0.1-1``,  ``26.0.1-0``,  ``25.1.2-0``,  ``25.0.4-0``,  ``25.0.3-0``,  ``25.0.2-0``,  ``25.0.1-0``,  ``24.2.4-0``

      

   
   :depends on galaxy-data: ``>=26.0``
   :depends on galaxy-files: ``>=26.0``
   :depends on galaxy-objectstore: ``>=26.0``
   :depends on galaxy-tool-util: ``>=26.0``
   :depends on galaxy-util: ``>=26.0``
   :depends on markupsafe: 
   :depends on python: ``>=3.10``
   :depends on sqlalchemy: ``>=2.0,<2.1``

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

    pixi global install galaxy-job-execution

to add into an existing workspace instead, run::

    pixi add galaxy-job-execution

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install galaxy-job-execution

Alternatively, to install into a new environment, run::

    conda create -n envname galaxy-job-execution

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/galaxy-job-execution:<tag>

(see `galaxy-job-execution/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_galaxy-job-execution| image:: https://img.shields.io/conda/dn/bioconda/galaxy-job-execution.svg?style=flat
   :target: https://anaconda.org/bioconda/galaxy-job-execution
   :alt:   (downloads)
.. |docker_galaxy-job-execution| image:: https://quay.io/repository/biocontainers/galaxy-job-execution/status
   :target: https://quay.io/repository/biocontainers/galaxy-job-execution
.. _`galaxy-job-execution/tags`: https://quay.io/repository/biocontainers/galaxy-job-execution?tab=tags


.. raw:: html

   <script>
      var package = "galaxy-job-execution";
      var versions = ["26.0.1","26.0.1","25.1.2","25.0.4","25.0.3"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_galaxy-job-execution"></div>
   <div style="width: 100%" id="platform_plot_galaxy-job-execution"></div>
   <div style="width: 100%" id="cdf_plot_galaxy-job-execution"></div>



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
         
            // Build cdf plot for galaxy-job-execution
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/galaxy-job-execution/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_galaxy-job-execution', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for galaxy-job-execution
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/galaxy-job-execution/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_galaxy-job-execution', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for galaxy-job-execution
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/galaxy-job-execution/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_galaxy-job-execution', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galaxy-job-execution/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galaxy-job-execution/README.html