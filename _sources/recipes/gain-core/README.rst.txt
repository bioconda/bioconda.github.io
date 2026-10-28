:orphan:  .. only available via index, not via toctree
:nosearch:

.. title:: Package Recipe 'gain-core'
.. highlight: bash

gain-core
=========

.. conda:recipe:: gain-core
   :replaces_section_title:
   :noindex:

   GAIn\: Genomic Annotation Infrastructure

   :homepage: https://github.com/iossifovlab/gain
   :documentation: https://iossifovlab.com/gaindocs/
   
   :license: MIT / MIT
   :recipe: /`gain-core <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gain-core>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gain-core/meta.yaml>`_

   GAIn annotates genomic variants with scores and gene models from a
   Genomic Resource Repository \(GRR\)\, and manages GRRs.



.. conda:package:: gain-core

   |downloads_gain-core| |docker_gain-core|

   :versions:
      
      

      ``2026.10.2-0``

      

   
   :depends on anndata: ``>=0.13``
   :depends on apsw: ``>=3.52``
   :depends on cerberus: ``>=1.3``
   :depends on dask-core: ``>=2026.1``
   :depends on dask-jobqueue: ``>=0.9``
   :depends on distributed: ``>=2026.1``
   :depends on docker-py: ``>=7.1``
   :depends on filelock: ``>=3.19``
   :depends on fsspec: ``>=2026.2``
   :depends on h5py: ``>=3.11``
   :depends on intervaltree: 
   :depends on jinja2: ``>=3.1``
   :depends on lark: ``>=1.2``
   :depends on markdown2: ``>=2.4``
   :depends on matplotlib-base: ``>=3.8``
   :depends on networkx: ``>=3.6``
   :depends on numpy: ``>=2.2``
   :depends on openpyxl: ``>=3.1``
   :depends on packaging: 
   :depends on pandas: ``>=2.2``
   :depends on pathspec: ``>=1.0``
   :depends on psutil: 
   :depends on pybigwig: ``>=0.3``
   :depends on pydantic: ``>=2.8``
   :depends on pyliftover: ``>=0.4``
   :depends on pysam: ``>=0.24``
   :depends on python: ``>=3.12``
   :depends on python-box: ``>=7.1``
   :depends on pyyaml: ``>=6``
   :depends on s3fs: ``>=2026.2``
   :depends on scipy: ``>=1.14``
   :depends on tqdm: ``>=4.66``

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

    pixi global install gain-core

to add into an existing workspace instead, run::

    pixi add gain-core

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gain-core

Alternatively, to install into a new environment, run::

    conda create -n envname gain-core

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gain-core:<tag>

(see `gain-core/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gain-core| image:: https://img.shields.io/conda/dn/bioconda/gain-core.svg?style=flat
   :target: https://anaconda.org/bioconda/gain-core
   :alt:   (downloads)
.. |docker_gain-core| image:: https://quay.io/repository/biocontainers/gain-core/status
   :target: https://quay.io/repository/biocontainers/gain-core
.. _`gain-core/tags`: https://quay.io/repository/biocontainers/gain-core?tab=tags


.. raw:: html

   <script>
      var package = "gain-core";
      var versions = ["2026.10.2"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_gain-core"></div>
   <div style="width: 100%" id="platform_plot_gain-core"></div>
   <div style="width: 100%" id="cdf_plot_gain-core"></div>



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
         
            // Build cdf plot for gain-core
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/gain-core/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_gain-core', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for gain-core
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/gain-core/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_gain-core', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for gain-core
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/gain-core/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_gain-core', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gain-core/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gain-core/README.html