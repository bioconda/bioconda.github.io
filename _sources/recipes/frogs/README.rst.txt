:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'frogs'
.. highlight: bash

frogs
=====

.. conda:recipe:: frogs
   :replaces_section_title:
   :noindex:

   FROGS is a workflow designed to metabarcoding sequence analysis

   :homepage: https://github.com/geraldinepascal/FROGS
   :license: GPL-3.0-only
   :recipe: /`frogs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/frogs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/frogs/meta.yaml>`_

   FROGS produces an ASVs count matrix from high depth sequencing amplicon data. This is the official release 5.1.0 of FROGS. To fully install FROGS dependencies\, please refer to the frogs\-conda\-requirements.txt and frogsfunc\-conda\-requirements.txt available at https\:\/\/github.com\/geraldinepascal\/FROGS


.. conda:package:: frogs

   |downloads_frogs| |docker_frogs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.1.0-0</code>,  <code>5.0.2-0</code>,  <code>5.0.1-0</code>,  <code>5.0.0-0</code>,  <code>4.2.0-0</code>,  <code>4.1.0-2</code>,  <code>4.1.0-1</code>,  <code>4.1.0-0</code>,  <code>4.0.1-0</code>,  </span></summary>
      

      ``5.1.0-0``,  ``5.0.2-0``,  ``5.0.1-0``,  ``5.0.0-0``,  ``4.2.0-0``,  ``4.1.0-2``,  ``4.1.0-1``,  ``4.1.0-0``,  ``4.0.1-0``,  ``4.0.0-0``,  ``3.2.3-0``,  ``3.2.2-0``,  ``3.2.1-0``,  ``3.2.0-0``,  ``3.1.0-1``,  ``3.1.0-0``,  ``2.0.1-1``,  ``2.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on pandas: ``>=1.1.5``
   :depends on perl: 
   :depends on perl-io-zlib: 
   :depends on perl-perlio-gzip: 
   :depends on python: ``<=3.7.0``
   :depends on rdptools: ``2.0.3.*``
   :depends on scipy: ``>=1.1.0``

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

    pixi global install frogs

to add into an existing workspace instead, run::

    pixi add frogs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install frogs

Alternatively, to install into a new environment, run::

    conda create -n envname frogs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/frogs:<tag>

(see `frogs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_frogs| image:: https://img.shields.io/conda/dn/bioconda/frogs.svg?style=flat
   :target: https://anaconda.org/bioconda/frogs
   :alt:   (downloads)
.. |docker_frogs| image:: https://quay.io/repository/biocontainers/frogs/status
   :target: https://quay.io/repository/biocontainers/frogs
.. _`frogs/tags`: https://quay.io/repository/biocontainers/frogs?tab=tags


.. raw:: html

   <script>
      var package = "frogs";
      var versions = ["5.1.0","5.0.2","5.0.1","5.0.0","4.2.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_frogs"></div>
   <div style="width: 100%" id="platform_plot_frogs"></div>
   <div style="width: 100%" id="cdf_plot_frogs"></div>



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
         
            // Build cdf plot for frogs
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/frogs/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_frogs', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for frogs
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/frogs/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_frogs', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for frogs
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/frogs/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_frogs', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/frogs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/frogs/README.html