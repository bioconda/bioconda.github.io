:orphan:  .. only available via index, not via toctree
:nosearch:

.. title:: Package Recipe 'nf-meta'
.. highlight: bash

nf-meta
=======

.. conda:recipe:: nf-meta
   :replaces_section_title:
   :noindex:

   Build\, validate and run metapipelines of Nextflow pipelines and nf\-core modules

   :homepage: https://github.com/bmds-tue/nf-meta
   :documentation: https://bmds-tue.github.io/nf-meta/
   
   :license: APACHE / Apache-2.0
   :recipe: /`nf-meta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nf-meta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nf-meta/meta.yaml>`_

   nf\-meta describes a metapipeline\, a directed acyclic graph of Nextflow pipeline and module
   steps\, in a single YAML file\, and comes with a browser\-based editor and a command\-line tool
   to validate and run it.



.. conda:package:: nf-meta

   |downloads_nf-meta| |docker_nf-meta|

   :versions:
      
      

      ``0.6.1-0``

      

   
   :depends on click: ``>=8.3.1``
   :depends on fastapi-core: ``>=0.128.0``
   :depends on networkx: ``>=3.6.1``
   :depends on packaging: ``>=26.0``
   :depends on pydantic: ``>=2.12.5``
   :depends on python: ``>=3.11``
   :depends on pyyaml: ``>=6.0.3``
   :depends on questionary: ``>=2.1``
   :depends on requests: ``>=2.32.5``
   :depends on rich: ``>=14.3.3``
   :depends on uvicorn: ``>=0.40.0``

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

    pixi global install nf-meta

to add into an existing workspace instead, run::

    pixi add nf-meta

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nf-meta

Alternatively, to install into a new environment, run::

    conda create -n envname nf-meta

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nf-meta:<tag>

(see `nf-meta/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nf-meta| image:: https://img.shields.io/conda/dn/bioconda/nf-meta.svg?style=flat
   :target: https://anaconda.org/bioconda/nf-meta
   :alt:   (downloads)
.. |docker_nf-meta| image:: https://quay.io/repository/biocontainers/nf-meta/status
   :target: https://quay.io/repository/biocontainers/nf-meta
.. _`nf-meta/tags`: https://quay.io/repository/biocontainers/nf-meta?tab=tags


.. raw:: html

   <script>
      var package = "nf-meta";
      var versions = ["0.6.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_nf-meta"></div>
   <div style="width: 100%" id="platform_plot_nf-meta"></div>
   <div style="width: 100%" id="cdf_plot_nf-meta"></div>



   .. Create all the necessary plots for each package by loading all the
      correct specs and data. Important points on the place and implementation
      of this script block:
      1. It is here, and not in a separate HTML file, as it needs to have the
         `package.name` rendered in for each package.
      2. All packages are handled in one `window.onload` function, as multiple
         instances of this throughout a (rendered) HTML just overwrite each
         other.

   <script>
      window.onload = async function() {
         
            // Build cdf plot for nf-meta
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/nf-meta/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_nf-meta', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for nf-meta
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/nf-meta/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_nf-meta', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for nf-meta
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/nf-meta/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_nf-meta', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nf-meta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nf-meta/README.html