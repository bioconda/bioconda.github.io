:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sierrapy'
.. highlight: bash

sierrapy
========

.. conda:recipe:: sierrapy
   :replaces_section_title:
   :noindex:

   A Client of HIVdb Sierra GraphQL Webservice.

   :homepage: https://github.com/hivdb/sierra-client/tree/master/python
   :license: MIT / MIT License
   :recipe: /`sierrapy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sierrapy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sierrapy/meta.yaml>`_

   


.. conda:package:: sierrapy

   |downloads_sierrapy| |docker_sierrapy|

   :versions:
      
      

      ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.2.1-3``,  ``0.2.1-2``,  ``0.2.1-1``,  ``0.2.1-0``

      

   
   :depends on backoff: ``>=1.6.0``
   :depends on certifi: ``>=2022.9.24``
   :depends on charset-normalizer: ``>=2.1.1``
   :depends on click: ``>=8.1.3``
   :depends on gql: ``>=3.4.0``
   :depends on graphql-core: ``>=3.2.3``
   :depends on idna: ``>=3.4``
   :depends on more-itertools: ``>=8.14.0``
   :depends on multidict: ``>=6.0.2``
   :depends on promise: ``>=2.3``
   :depends on python: 
   :depends on requests: ``>=2.28.1``
   :depends on requests-toolbelt: ``>=0.8.0``
   :depends on six: ``>=1.16.0``
   :depends on tqdm: ``>=4.64.1``
   :depends on urllib3: ``>=1.25.8``
   :depends on voluptuous: ``>=0.13.1``
   :depends on yarl: ``>=1.8.1``

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

    pixi global install sierrapy

to add into an existing workspace instead, run::

    pixi add sierrapy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sierrapy

Alternatively, to install into a new environment, run::

    conda create -n envname sierrapy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sierrapy:<tag>

(see `sierrapy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sierrapy| image:: https://img.shields.io/conda/dn/bioconda/sierrapy.svg?style=flat
   :target: https://anaconda.org/bioconda/sierrapy
   :alt:   (downloads)
.. |docker_sierrapy| image:: https://quay.io/repository/biocontainers/sierrapy/status
   :target: https://quay.io/repository/biocontainers/sierrapy
.. _`sierrapy/tags`: https://quay.io/repository/biocontainers/sierrapy?tab=tags


.. raw:: html

   <script>
      var package = "sierrapy";
      var versions = ["0.4.3","0.4.2","0.4.1","0.2.1","0.2.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_sierrapy"></div>
   <div style="width: 100%" id="platform_plot_sierrapy"></div>
   <div style="width: 100%" id="cdf_plot_sierrapy"></div>



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
         
            // Build cdf plot for sierrapy
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/sierrapy/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_sierrapy', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for sierrapy
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/sierrapy/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_sierrapy', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for sierrapy
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/sierrapy/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_sierrapy', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sierrapy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sierrapy/README.html