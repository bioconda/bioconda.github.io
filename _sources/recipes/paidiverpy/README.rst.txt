:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'paidiverpy'
.. highlight: bash

paidiverpy
==========

.. conda:recipe:: paidiverpy
   :replaces_section_title:
   :noindex:

   A library to preprocess image data.

   :homepage: https://github.com/paidiver/paidiverpy
   :license: APACHE / Apache-2.0
   :recipe: /`paidiverpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paidiverpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paidiverpy/meta.yaml>`_

   


.. conda:package:: paidiverpy

   |downloads_paidiverpy| |docker_paidiverpy|

   :versions:
      
      

      ``0.3.1-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.4-0``,  ``0.1.3-0``

      

   
   :depends on boto3: ``>=1.35.92``
   :depends on botocore: ``>=1.35.92``
   :depends on dask: ``>=2024.10.0``
   :depends on dask-image: ``2024.5.3``
   :depends on dask-jobqueue: ``>=0.9.0``
   :depends on distributed: ``>=2024.10.0``
   :depends on geopandas: ``>=1.0.1``
   :depends on geopy: ``>=2.4.1``
   :depends on ipython: ``>=8.26.0``
   :depends on jsonschema: ``>=4.23.0``
   :depends on matplotlib-base: ``>=3.5.0``
   :depends on numpy: ``<2.0``
   :depends on opencv: ``>=4.11``
   :depends on openpyxl: ``>=3.1``
   :depends on pandas: ``>=2.2.2``
   :depends on pillow: ``>=10.4.0``
   :depends on pydantic: 
   :depends on python: ``>=3.10``
   :depends on python-dotenv: ``>=1.0.1``
   :depends on pyyaml: ``>=6.0``
   :depends on rawpy: 
   :depends on scikit-image: ``>=0.24.0``
   :depends on scipy: ``>=1.14``
   :depends on shapely: ``2.0.7``
   :depends on tqdm: ``>=4.66.4``
   :depends on xarray: 

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

    pixi global install paidiverpy

to add into an existing workspace instead, run::

    pixi add paidiverpy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install paidiverpy

Alternatively, to install into a new environment, run::

    conda create -n envname paidiverpy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/paidiverpy:<tag>

(see `paidiverpy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_paidiverpy| image:: https://img.shields.io/conda/dn/bioconda/paidiverpy.svg?style=flat
   :target: https://anaconda.org/bioconda/paidiverpy
   :alt:   (downloads)
.. |docker_paidiverpy| image:: https://quay.io/repository/biocontainers/paidiverpy/status
   :target: https://quay.io/repository/biocontainers/paidiverpy
.. _`paidiverpy/tags`: https://quay.io/repository/biocontainers/paidiverpy?tab=tags


.. raw:: html

   <script>
      var package = "paidiverpy";
      var versions = ["0.3.1","0.2.1","0.2.0","0.1.4","0.1.3"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_paidiverpy"></div>
   <div style="width: 100%" id="platform_plot_paidiverpy"></div>
   <div style="width: 100%" id="cdf_plot_paidiverpy"></div>



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
         
            // Build cdf plot for paidiverpy
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/paidiverpy/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_paidiverpy', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for paidiverpy
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/paidiverpy/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_paidiverpy', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for paidiverpy
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/paidiverpy/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_paidiverpy', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/paidiverpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/paidiverpy/README.html