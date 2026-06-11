:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'maxquant'
.. highlight: bash

maxquant
========

.. conda:recipe:: maxquant
   :replaces_section_title:
   :noindex:

   MaxQuant is a quantitative proteomics software package designed for analyzing large mass\-spectrometric data sets. License restricted.

   :homepage: http://www.coxdocs.org/doku.php?id=maxquant:start
   :license: http://www.coxdocs.org/lib/exe/fetch.php?media=license_agreement.pdf
   :recipe: /`maxquant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maxquant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maxquant/meta.yaml>`_
   :links: biotools: :biotools:`MaxQuant`, biotools: :biotools:`maxquant`, doi: :doi:`10.1038/s41592-018-0018-y`, usegalaxy-eu: :usegalaxy-eu:`maxquant`

   


.. conda:package:: maxquant

   |downloads_maxquant| |docker_maxquant|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.3.0-1</code>,  <code>2.0.3.0-0</code>,  <code>2.0.1.0-2</code>,  <code>2.0.1.0-1</code>,  <code>2.0.1.0-0</code>,  <code>1.6.17.0-4</code>,  <code>1.6.17.0-3</code>,  <code>1.6.17.0-2</code>,  <code>1.6.17.0-1</code>,  </span></summary>
      

      ``2.0.3.0-1``,  ``2.0.3.0-0``,  ``2.0.1.0-2``,  ``2.0.1.0-1``,  ``2.0.1.0-0``,  ``1.6.17.0-4``,  ``1.6.17.0-3``,  ``1.6.17.0-2``,  ``1.6.17.0-1``,  ``1.6.17.0-0``,  ``1.6.10.43-1``,  ``1.6.10.43-0``,  ``1.6.3.4-1``,  ``1.6.3.4-0``,  ``1.6.2.10-0``

      
      .. raw:: html

         </details>
      

   
   :depends on mono: ``5.14.0.177.*``
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

    pixi global install maxquant

to add into an existing workspace instead, run::

    pixi add maxquant

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install maxquant

Alternatively, to install into a new environment, run::

    conda create -n envname maxquant

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/maxquant:<tag>

(see `maxquant/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_maxquant| image:: https://img.shields.io/conda/dn/bioconda/maxquant.svg?style=flat
   :target: https://anaconda.org/bioconda/maxquant
   :alt:   (downloads)
.. |docker_maxquant| image:: https://quay.io/repository/biocontainers/maxquant/status
   :target: https://quay.io/repository/biocontainers/maxquant
.. _`maxquant/tags`: https://quay.io/repository/biocontainers/maxquant?tab=tags


.. raw:: html

   <script>
      var package = "maxquant";
      var versions = ["2.0.3.0","2.0.3.0","2.0.1.0","2.0.1.0","2.0.1.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_maxquant"></div>
   <div style="width: 100%" id="platform_plot_maxquant"></div>
   <div style="width: 100%" id="cdf_plot_maxquant"></div>



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
         
            // Build cdf plot for maxquant
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/maxquant/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_maxquant', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for maxquant
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/maxquant/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_maxquant', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for maxquant
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/maxquant/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_maxquant', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/maxquant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/maxquant/README.html