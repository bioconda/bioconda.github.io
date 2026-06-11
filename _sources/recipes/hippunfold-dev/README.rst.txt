:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hippunfold-dev'
.. highlight: bash

hippunfold-dev
==============

.. conda:recipe:: hippunfold-dev
   :replaces_section_title:
   :noindex:

   Meta\-package that installs hippunfold with development dependencies.


   :homepage: https://github.com/khanlab/hippunfold
   :license: MIT
   :recipe: /`hippunfold-dev <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hippunfold-dev>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hippunfold-dev/meta.yaml>`_

   


.. conda:package:: hippunfold-dev

   |downloads_hippunfold-dev| |docker_hippunfold-dev|

   :versions:
      
      

      ``2.0.0-0``

      

   
   :depends on black: ``>=24.0.0``
   :depends on flake8: ``>=4.0.1``
   :depends on hippunfold: 
   :depends on isort: ``>=5.10.1``
   :depends on poethepoet: ``>=0.10.0``
   :depends on pylint: ``>=2.11.1``
   :depends on pytest: ``>=6.2.5``
   :depends on pytest-console-scripts: ``>=1.2.1``
   :depends on python: ``>=3.9,<4.0``
   :depends on snakefmt: ``>=0.10.0``

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

    pixi global install hippunfold-dev

to add into an existing workspace instead, run::

    pixi add hippunfold-dev

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hippunfold-dev

Alternatively, to install into a new environment, run::

    conda create -n envname hippunfold-dev

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hippunfold-dev:<tag>

(see `hippunfold-dev/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hippunfold-dev| image:: https://img.shields.io/conda/dn/bioconda/hippunfold-dev.svg?style=flat
   :target: https://anaconda.org/bioconda/hippunfold-dev
   :alt:   (downloads)
.. |docker_hippunfold-dev| image:: https://quay.io/repository/biocontainers/hippunfold-dev/status
   :target: https://quay.io/repository/biocontainers/hippunfold-dev
.. _`hippunfold-dev/tags`: https://quay.io/repository/biocontainers/hippunfold-dev?tab=tags


.. raw:: html

   <script>
      var package = "hippunfold-dev";
      var versions = ["2.0.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_hippunfold-dev"></div>
   <div style="width: 100%" id="platform_plot_hippunfold-dev"></div>
   <div style="width: 100%" id="cdf_plot_hippunfold-dev"></div>



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
         
            // Build cdf plot for hippunfold-dev
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/hippunfold-dev/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_hippunfold-dev', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for hippunfold-dev
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/hippunfold-dev/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_hippunfold-dev', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for hippunfold-dev
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/hippunfold-dev/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_hippunfold-dev', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hippunfold-dev/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hippunfold-dev/README.html