:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pangolearn'
.. highlight: bash

pangolearn
==========

.. conda:recipe:: pangolearn
   :replaces_section_title:
   :noindex:

   Store of the trained model for pangolin to access.

   :homepage: https://github.com/cov-lineages/pangoLEARN
   :license: GPL3 / GPL-3.0
   :recipe: /`pangolearn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pangolearn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pangolearn/meta.yaml>`_

   


.. conda:package:: pangolearn

   |downloads_pangolearn| |docker_pangolearn|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2022.03.22-0</code>,  <code>2022.02.02-0</code>,  <code>2022.01.20-0</code>,  <code>2021.12.06-0</code>,  <code>2021.11.25-0</code>,  <code>2021.11.18-0</code>,  <code>2021.11.09-0</code>,  <code>2021.11.04-0</code>,  <code>2021.10.18-0</code>,  </span></summary>
      

      ``2022.03.22-0``,  ``2022.02.02-0``,  ``2022.01.20-0``,  ``2021.12.06-0``,  ``2021.11.25-0``,  ``2021.11.18-0``,  ``2021.11.09-0``,  ``2021.11.04-0``,  ``2021.10.18-0``,  ``2021.10.13-0``,  ``2021.09.28-0``,  ``2021.09.17-0``,  ``2021.08.24-0``,  ``2021.08.09-0``,  ``2021.07.28-0``,  ``2021.07.09-0``,  ``2021.06.15-0``,  ``2021.06.05-0``,  ``2021.05.27-0``,  ``2021.05.19-0``,  ``2021.05.10-0``,  ``2021.04.28-0``,  ``2021.04.23-0``,  ``2021.04.21-0``,  ``2021.04.14-0``,  ``2021.04.01-0``,  ``2021.03.29-0``,  ``2021.03.16-0``,  ``2021.02.21-0``,  ``2021.02.18-0``,  ``2021.02.12-0``,  ``2021.02.06-0``,  ``2021.02.05-0``,  ``2021.02.01-0``,  ``2021.01.30-0``,  ``2021.01.22-0``,  ``2021.01.16-0``,  ``2020.12.17_2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on python: 

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

    pixi global install pangolearn

to add into an existing workspace instead, run::

    pixi add pangolearn

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pangolearn

Alternatively, to install into a new environment, run::

    conda create -n envname pangolearn

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pangolearn:<tag>

(see `pangolearn/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pangolearn| image:: https://img.shields.io/conda/dn/bioconda/pangolearn.svg?style=flat
   :target: https://anaconda.org/bioconda/pangolearn
   :alt:   (downloads)
.. |docker_pangolearn| image:: https://quay.io/repository/biocontainers/pangolearn/status
   :target: https://quay.io/repository/biocontainers/pangolearn
.. _`pangolearn/tags`: https://quay.io/repository/biocontainers/pangolearn?tab=tags


.. raw:: html

   <script>
      var package = "pangolearn";
      var versions = ["2022.03.22","2022.02.02","2022.01.20","2021.12.06","2021.11.25"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_pangolearn"></div>
   <div style="width: 100%" id="platform_plot_pangolearn"></div>
   <div style="width: 100%" id="cdf_plot_pangolearn"></div>



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
         
            // Build cdf plot for pangolearn
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/pangolearn/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_pangolearn', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for pangolearn
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/pangolearn/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_pangolearn', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for pangolearn
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/pangolearn/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_pangolearn', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pangolearn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pangolearn/README.html