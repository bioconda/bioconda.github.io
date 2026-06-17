:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phykit'
.. highlight: bash

phykit
======

.. conda:recipe:: phykit
   :replaces_section_title:
   :noindex:

   PhyKIT is a UNIX shell toolkit for processing and analyzing phylogenomic data.

   :homepage: https://github.com/jlsteenwyk/phykit
   :documentation: https://jlsteenwyk.com/PhyKIT
   
   :license: MIT / MIT
   :recipe: /`phykit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phykit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phykit/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btab096`, biotools: :biotools:`phykit`

   


.. conda:package:: phykit

   |downloads_phykit| |docker_phykit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.94-0</code>,  <code>2.1.93-0</code>,  <code>2.1.92-0</code>,  <code>2.1.90-0</code>,  <code>2.1.89-0</code>,  <code>2.1.85-0</code>,  <code>2.1.82-0</code>,  <code>2.1.76-0</code>,  <code>2.1.72-0</code>,  </span></summary>
      

      ``2.1.94-0``,  ``2.1.93-0``,  ``2.1.92-0``,  ``2.1.90-0``,  ``2.1.89-0``,  ``2.1.85-0``,  ``2.1.82-0``,  ``2.1.76-0``,  ``2.1.72-0``,  ``2.1.60-0``,  ``2.1.47-0``,  ``2.1.38-0``,  ``2.1.37-0``,  ``2.1.5-0``,  ``2.1.2-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.20.0-0``,  ``1.19.9-0``,  ``1.19.8-0``,  ``1.19.6-0``,  ``1.19.5-0``,  ``1.19.4-0``,  ``1.19.3-0``,  ``1.19.2-0``,  ``1.19.1-0``,  ``1.19.0-0``,  ``1.17.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.13.1-0``,  ``1.13.0-0``,  ``1.12.5-0``,  ``1.12.4-0``,  ``1.12.3-0``,  ``1.12.2-0``,  ``1.12.0-0``,  ``1.11.16-0``,  ``1.11.15-0``,  ``1.11.14-0``,  ``1.11.13-0``,  ``1.11.12-0``,  ``1.11.10-0``,  ``1.11.7-0``,  ``1.11.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``>=1.82``
   :depends on numpy: ``>=1.24.0``
   :depends on python: ``>=3``
   :depends on scikit-learn: ``>=1.4.2``
   :depends on scipy: ``>=1.11.3``

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

    pixi global install phykit

to add into an existing workspace instead, run::

    pixi add phykit

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install phykit

Alternatively, to install into a new environment, run::

    conda create -n envname phykit

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/phykit:<tag>

(see `phykit/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_phykit| image:: https://img.shields.io/conda/dn/bioconda/phykit.svg?style=flat
   :target: https://anaconda.org/bioconda/phykit
   :alt:   (downloads)
.. |docker_phykit| image:: https://quay.io/repository/biocontainers/phykit/status
   :target: https://quay.io/repository/biocontainers/phykit
.. _`phykit/tags`: https://quay.io/repository/biocontainers/phykit?tab=tags


.. raw:: html

   <script>
      var package = "phykit";
      var versions = ["2.1.94","2.1.93","2.1.92","2.1.90","2.1.89"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_phykit"></div>
   <div style="width: 100%" id="platform_plot_phykit"></div>
   <div style="width: 100%" id="cdf_plot_phykit"></div>



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
         
            // Build cdf plot for phykit
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/phykit/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_phykit', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for phykit
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/phykit/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_phykit', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for phykit
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/phykit/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_phykit', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phykit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phykit/README.html