:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mhcnuggets'
.. highlight: bash

mhcnuggets
==========

.. conda:recipe:: mhcnuggets
   :replaces_section_title:
   :noindex:

   MHCnuggets\: Neoantigen peptide MHC binding prediction for class I and II

   :homepage: http://karchinlab.org/apps/mhcnuggets.html
   :license: APACHE / Apache License
   :recipe: /`mhcnuggets <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mhcnuggets>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mhcnuggets/meta.yaml>`_

   \# MHCnuggets

   Welcome to MHCnuggets\! Presumably you\'re here to do some
   peptide\-MHC prediction and not because you were \[hungry\]\(https\:\/\/www.mcdonalds.com\/us\/en\-us\/product\/chicken\-mcnuggets\-4\-piece.html\).

   \#\#\# Usage \#\#\#
   For an overview of how to use MHCnuggets please refer to the Jupyter notebook
   called \`user\_guide.ipynb\` in the repository

   \#\#\# Installation \#\#\#

   MHCnuggets is \`pip\` installable as\:
   \`\`\`bash
   pip install mhcnuggets
   \`\`\`

   \*\*Required pacakges\:\*\*

   \* numpy
   \* scipy
   \* scikit\-learn
   \* tensorflow
   \* keras

   You might want to check if the Keras backend is configured to use
   the Tensforflow backend.


.. conda:package:: mhcnuggets

   |downloads_mhcnuggets| |docker_mhcnuggets|

   :versions:
      
      

      ``2.4.1-0``,  ``2.4.0-0``,  ``2.3.2-0``,  ``2.3.1-0``,  ``2.2-0``

      

   
   :depends on keras: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: ``3.6.*``
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on tensorflow: 
   :depends on varcode: 

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

    pixi global install mhcnuggets

to add into an existing workspace instead, run::

    pixi add mhcnuggets

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mhcnuggets

Alternatively, to install into a new environment, run::

    conda create -n envname mhcnuggets

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mhcnuggets:<tag>

(see `mhcnuggets/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mhcnuggets| image:: https://img.shields.io/conda/dn/bioconda/mhcnuggets.svg?style=flat
   :target: https://anaconda.org/bioconda/mhcnuggets
   :alt:   (downloads)
.. |docker_mhcnuggets| image:: https://quay.io/repository/biocontainers/mhcnuggets/status
   :target: https://quay.io/repository/biocontainers/mhcnuggets
.. _`mhcnuggets/tags`: https://quay.io/repository/biocontainers/mhcnuggets?tab=tags


.. raw:: html

   <script>
      var package = "mhcnuggets";
      var versions = ["2.4.1","2.4.0","2.3.2","2.3.1","2.2"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_mhcnuggets"></div>
   <div style="width: 100%" id="platform_plot_mhcnuggets"></div>
   <div style="width: 100%" id="cdf_plot_mhcnuggets"></div>



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
         
            // Build cdf plot for mhcnuggets
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/mhcnuggets/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_mhcnuggets', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for mhcnuggets
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/mhcnuggets/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_mhcnuggets', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for mhcnuggets
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/mhcnuggets/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_mhcnuggets', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mhcnuggets/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mhcnuggets/README.html