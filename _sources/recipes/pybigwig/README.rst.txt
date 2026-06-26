:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pybigwig'
.. highlight: bash

pybigwig
========

.. conda:recipe:: pybigwig
   :replaces_section_title:
   :noindex:

   A python extension written in C for quick access to bigWig files.

   :homepage: https://github.com/deeptools/pyBigWig
   :documentation: https://github.com/deeptools/pyBigWig/blob/0.3.25/README.md
   
   :license: MIT / MIT
   :recipe: /`pybigwig <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybigwig>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybigwig/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.45238`

   


.. conda:package:: pybigwig

   |downloads_pybigwig| |docker_pybigwig|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.25-1</code>,  <code>0.3.25-0</code>,  <code>0.3.24-0</code>,  <code>0.3.23-0</code>,  <code>0.3.22-4</code>,  <code>0.3.22-3</code>,  <code>0.3.22-2</code>,  <code>0.3.22-1</code>,  <code>0.3.22-0</code>,  </span></summary>
      

      ``0.3.25-1``,  ``0.3.25-0``,  ``0.3.24-0``,  ``0.3.23-0``,  ``0.3.22-4``,  ``0.3.22-3``,  ``0.3.22-2``,  ``0.3.22-1``,  ``0.3.22-0``,  ``0.3.18-3``,  ``0.3.18-2``,  ``0.3.18-1``,  ``0.3.18-0``,  ``0.3.17-2``,  ``0.3.17-1``,  ``0.3.17-0``,  ``0.3.16-0``,  ``0.3.15-0``,  ``0.3.14-0``,  ``0.3.13-2``,  ``0.3.13-1``,  ``0.3.13-0``,  ``0.3.12-2``,  ``0.3.12-1``,  ``0.3.12-0``,  ``0.3.11-2``,  ``0.3.11-1``,  ``0.3.11-0``,  ``0.3.10-0``,  ``0.3.9-0``,  ``0.3.8-0``,  ``0.3.7-0``,  ``0.3.6-1``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.2.8-0``,  ``0.2.7-0``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.1b-1``,  ``0.2.1b-0``,  ``0.1.11-1``,  ``0.1.11-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libcurl: ``>=8.19.0,<9.0a0``
   :depends on libzlib: ``>=1.3.2,<2.0a0``
   :depends on numpy: ``>=1.21,<3``
   :depends on numpy: ``>=2.0.0``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      


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

    pixi global install pybigwig

to add into an existing workspace instead, run::

    pixi add pybigwig

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pybigwig

Alternatively, to install into a new environment, run::

    conda create -n envname pybigwig

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pybigwig:<tag>

(see `pybigwig/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pybigwig| image:: https://img.shields.io/conda/dn/bioconda/pybigwig.svg?style=flat
   :target: https://anaconda.org/bioconda/pybigwig
   :alt:   (downloads)
.. |docker_pybigwig| image:: https://quay.io/repository/biocontainers/pybigwig/status
   :target: https://quay.io/repository/biocontainers/pybigwig
.. _`pybigwig/tags`: https://quay.io/repository/biocontainers/pybigwig?tab=tags


.. raw:: html

   <script>
      var package = "pybigwig";
      var versions = ["0.3.25","0.3.25","0.3.24","0.3.23","0.3.22"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_pybigwig"></div>
   <div style="width: 100%" id="platform_plot_pybigwig"></div>
   <div style="width: 100%" id="cdf_plot_pybigwig"></div>



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
         
            // Build cdf plot for pybigwig
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/pybigwig/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_pybigwig', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for pybigwig
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/pybigwig/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_pybigwig', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for pybigwig
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/pybigwig/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_pybigwig', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pybigwig/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pybigwig/README.html