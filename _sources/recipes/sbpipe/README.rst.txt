:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sbpipe'
.. highlight: bash

sbpipe
======

.. conda:recipe:: sbpipe
   :replaces_section_title:
   :noindex:

   SBpipe is a collection of pipelines for systems modelling of biological networks. It allows mathematical modellers to automatically repeat the tasks of model simulation and parameter estimation\, and extract robustness information from these repeat sequences in a solid and consistent manner\, facilitating model development and analysis. SBpipe can run models implemented in COPASI\, Python or coded in any other programming language using Python as a wrapper module. Pipelines can run on multicore computers\, Sun Grid Engine \(SGE\)\, Load Sharing Facility \(LSF\) clusters\, or via Snakemake.

   :homepage: http://sbpipe.readthedocs.io
   :license: MIT
   :recipe: /`sbpipe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sbpipe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sbpipe/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12918-017-0423-3`

   


.. conda:package:: sbpipe

   |downloads_sbpipe| |docker_sbpipe|

   :versions:
      
      

      ``4.21.0-1``,  ``4.21.0-0``,  ``4.20.0-0``,  ``4.18.0-0``

      

   
   :depends on colorlog: 
   :depends on python: 
   :depends on pyyaml: 
   :depends on r-sbpiper: ``1.8.*``

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

    pixi global install sbpipe

to add into an existing workspace instead, run::

    pixi add sbpipe

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sbpipe

Alternatively, to install into a new environment, run::

    conda create -n envname sbpipe

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sbpipe:<tag>

(see `sbpipe/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sbpipe| image:: https://img.shields.io/conda/dn/bioconda/sbpipe.svg?style=flat
   :target: https://anaconda.org/bioconda/sbpipe
   :alt:   (downloads)
.. |docker_sbpipe| image:: https://quay.io/repository/biocontainers/sbpipe/status
   :target: https://quay.io/repository/biocontainers/sbpipe
.. _`sbpipe/tags`: https://quay.io/repository/biocontainers/sbpipe?tab=tags


.. raw:: html

   <script>
      var package = "sbpipe";
      var versions = ["4.21.0","4.21.0","4.20.0","4.18.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_sbpipe"></div>
   <div style="width: 100%" id="platform_plot_sbpipe"></div>
   <div style="width: 100%" id="cdf_plot_sbpipe"></div>



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
         
            // Build cdf plot for sbpipe
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/sbpipe/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_sbpipe', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for sbpipe
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/sbpipe/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_sbpipe', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for sbpipe
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/sbpipe/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_sbpipe', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sbpipe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sbpipe/README.html