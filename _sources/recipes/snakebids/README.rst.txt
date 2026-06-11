:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakebids'
.. highlight: bash

snakebids
=========

.. conda:recipe:: snakebids
   :replaces_section_title:
   :noindex:

   BIDS integration into snakemake workflows.

   :homepage: https://github.com/khanlab/snakebids
   :license: MIT / MIT
   :recipe: /`snakebids <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakebids>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakebids/meta.yaml>`_

   Snakebids is a Python package that extends Snakemake\, enabling 
   users to create reproducible\, scalable pipelines for processing 
   neuroimaging data in the BIDS format.



.. conda:package:: snakebids

   |downloads_snakebids| |docker_snakebids|

   :versions:
      
      

      ``0.15.0-0``,  ``0.14.0-2``,  ``0.14.0-1``,  ``0.14.0-0``,  ``0.13.1-0``

      

   
   :depends on attrs: ``>=22.2.0``
   :depends on boutiques: ``>=0.5.25,<0.6.0``
   :depends on copier: ``>=9.2.0``
   :depends on docutils: ``!=0.21.post1``
   :depends on importlib-resources: ``>=5.12.0``
   :depends on jinja2-time: ``>=0.2.0``
   :depends on lazy-loader: ``>=0.3``
   :depends on more-itertools: ``>=8``
   :depends on numpy: ``>=1.23.2``
   :depends on pluggy: ``>=1.3``
   :depends on pvandyken-deprecated: ``0.0.4``
   :depends on pybids: ``>=0.16.0,<0.17``
   :depends on python: ``>=3.8,<4.0``
   :depends on requests: ``>=2.31.0``
   :depends on ruamel.yaml: ``>=0.17.2``
   :depends on scipy: ``>=1.10.0``
   :depends on snakemake: ``>=7.18.2``
   :depends on typing_extensions: ``>=3.10.0``

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

    pixi global install snakebids

to add into an existing workspace instead, run::

    pixi add snakebids

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install snakebids

Alternatively, to install into a new environment, run::

    conda create -n envname snakebids

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/snakebids:<tag>

(see `snakebids/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_snakebids| image:: https://img.shields.io/conda/dn/bioconda/snakebids.svg?style=flat
   :target: https://anaconda.org/bioconda/snakebids
   :alt:   (downloads)
.. |docker_snakebids| image:: https://quay.io/repository/biocontainers/snakebids/status
   :target: https://quay.io/repository/biocontainers/snakebids
.. _`snakebids/tags`: https://quay.io/repository/biocontainers/snakebids?tab=tags


.. raw:: html

   <script>
      var package = "snakebids";
      var versions = ["0.15.0","0.14.0","0.14.0","0.14.0","0.13.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_snakebids"></div>
   <div style="width: 100%" id="platform_plot_snakebids"></div>
   <div style="width: 100%" id="cdf_plot_snakebids"></div>



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
         
            // Build cdf plot for snakebids
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/snakebids/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_snakebids', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for snakebids
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/snakebids/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_snakebids', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for snakebids
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/snakebids/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_snakebids', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakebids/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakebids/README.html