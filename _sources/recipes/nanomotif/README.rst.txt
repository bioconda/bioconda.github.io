:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanomotif'
.. highlight: bash

nanomotif
=========

.. conda:recipe:: nanomotif
   :replaces_section_title:
   :noindex:

   Identifying methlyation motifs in nanopore data.

   :homepage: https://github.com/MicrobialDarkMatter/nanomotif
   :documentation: https://nanomotif.readthedocs.io/en/latest
   
   :license: MIT / MIT
   :recipe: /`nanomotif <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanomotif>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanomotif/meta.yaml>`_

   


.. conda:package:: nanomotif

   |downloads_nanomotif| |docker_nanomotif|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.2-0</code>,  <code>1.0.2-0</code>,  <code>1.0.0-0</code>,  <code>0.8.0-0</code>,  <code>0.7.1-0</code>,  <code>0.7.0-0</code>,  <code>0.6.2-0</code>,  <code>0.6.1-0</code>,  <code>0.6.0-0</code>,  </span></summary>
      

      ``1.1.2-0``,  ``1.0.2-0``,  ``1.0.0-0``,  ``0.8.0-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.8-0``,  ``0.5.6-0``,  ``0.5.5-0``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-1``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.17-0``,  ``0.4.16-0``,  ``0.4.15-0``,  ``0.4.14-0``,  ``0.4.13-0``,  ``0.4.12-0``,  ``0.4.11-0``,  ``0.4.10-0``,  ``0.4.9-0``,  ``0.4.8-0``,  ``0.4.7-0``,  ``0.4.6-0``,  ``0.4.5-0``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.1.20-0``,  ``0.1.19-0``,  ``0.1.18-0``,  ``0.1.17-0``,  ``0.1.15-0``,  ``0.1.14-0``,  ``0.1.13-0``,  ``0.1.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bio: ``>=1.6.2``
   :depends on epimetheus-py: ``0.7.5``
   :depends on hdbscan: 
   :depends on networkx: ``>=3.1``
   :depends on numpy: ``>=1.24.4,<=2.0.0``
   :depends on pandas: ``>=2.0.2``
   :depends on polars: ``>=1.31``
   :depends on progressbar2: ``>=3.53.1``
   :depends on pyarrow: ``>=15.0.2``
   :depends on pyfastx: ``>=0.2.10``
   :depends on pyinstrument: ``>=5.1.1``
   :depends on pysam: ``>=0.22.0``
   :depends on python: ``>=3``
   :depends on regex: ``>=2025.10.23``
   :depends on requests: 
   :depends on scikit-learn: ``>=1.5.2``
   :depends on scipy: ``>=1.10.1``
   :depends on snakemake-minimal: ``>=7.32.4``

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

    pixi global install nanomotif

to add into an existing workspace instead, run::

    pixi add nanomotif

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nanomotif

Alternatively, to install into a new environment, run::

    conda create -n envname nanomotif

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nanomotif:<tag>

(see `nanomotif/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nanomotif| image:: https://img.shields.io/conda/dn/bioconda/nanomotif.svg?style=flat
   :target: https://anaconda.org/bioconda/nanomotif
   :alt:   (downloads)
.. |docker_nanomotif| image:: https://quay.io/repository/biocontainers/nanomotif/status
   :target: https://quay.io/repository/biocontainers/nanomotif
.. _`nanomotif/tags`: https://quay.io/repository/biocontainers/nanomotif?tab=tags


.. raw:: html

   <script>
      var package = "nanomotif";
      var versions = ["1.1.2","1.0.2","1.0.0","0.8.0","0.7.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_nanomotif"></div>
   <div style="width: 100%" id="platform_plot_nanomotif"></div>
   <div style="width: 100%" id="cdf_plot_nanomotif"></div>



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
         
            // Build cdf plot for nanomotif
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/nanomotif/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_nanomotif', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for nanomotif
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/nanomotif/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_nanomotif', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for nanomotif
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/nanomotif/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_nanomotif', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanomotif/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanomotif/README.html