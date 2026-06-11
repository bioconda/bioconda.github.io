:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'recognizer'
.. highlight: bash

recognizer
==========

.. conda:recipe:: recognizer
   :replaces_section_title:
   :noindex:

   A tool for domain based annotation with the COG database

   :homepage: https://github.com/iquasere/reCOGnizer
   :documentation: https://github.com/iquasere/reCOGnizer/blob/master/README.md
   
   :license: BSD / BSD-3-Clause
   :recipe: /`recognizer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/recognizer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/recognizer/meta.yaml>`_

   reCOGnizer performs domain based annotation with RPS\-BLAST\, using
   Hidden Markov Models \(HMM\) from COG database. It rebuilds COG database
   for multithreaded annotation\, organizes information regarding COG IDs
   and respective categories\, obtains EC numbers using resources from the
   eggNOG database and organizes all this information into TSV and EXCEL
   files for easy handling by users or pipelines. It also produces a Krona
   plot representing the quantification of COG functions identified.



.. conda:package:: recognizer

   |downloads_recognizer| |docker_recognizer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.12.2-0</code>,  <code>1.12.1-0</code>,  <code>1.12.0-0</code>,  <code>1.11.1-0</code>,  <code>1.11.0-0</code>,  <code>1.10.1-0</code>,  <code>1.10.0-0</code>,  <code>1.9.4-0</code>,  <code>1.9.3-0</code>,  </span></summary>
      

      ``1.12.2-0``,  ``1.12.1-0``,  ``1.12.0-0``,  ``1.11.1-0``,  ``1.11.0-0``,  ``1.10.1-0``,  ``1.10.0-0``,  ``1.9.4-0``,  ``1.9.3-0``,  ``1.9.2-0``,  ``1.9.1-0``,  ``1.9.0-0``,  ``1.8.3-0``,  ``1.8.2-0``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.7.2-0``,  ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.5-0``,  ``1.6.4-0``,  ``1.6.3-0``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.10-0``,  ``1.4.9-0``,  ``1.4.8-0``,  ``1.4.7-0``,  ``1.4.6-0``,  ``1.4.5-0``,  ``1.4.4-1``,  ``1.4.4-0``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on blast: ``>=2.12``
   :depends on krona: 
   :depends on lxml: 
   :depends on openpyxl: 
   :depends on pandas: 
   :depends on python: 
   :depends on requests: 
   :depends on rpsbproc: 
   :depends on tqdm: 
   :depends on wget: 
   :depends on xlsxwriter: 

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

    pixi global install recognizer

to add into an existing workspace instead, run::

    pixi add recognizer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install recognizer

Alternatively, to install into a new environment, run::

    conda create -n envname recognizer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/recognizer:<tag>

(see `recognizer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_recognizer| image:: https://img.shields.io/conda/dn/bioconda/recognizer.svg?style=flat
   :target: https://anaconda.org/bioconda/recognizer
   :alt:   (downloads)
.. |docker_recognizer| image:: https://quay.io/repository/biocontainers/recognizer/status
   :target: https://quay.io/repository/biocontainers/recognizer
.. _`recognizer/tags`: https://quay.io/repository/biocontainers/recognizer?tab=tags


.. raw:: html

   <script>
      var package = "recognizer";
      var versions = ["1.12.2","1.12.1","1.12.0","1.11.1","1.11.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_recognizer"></div>
   <div style="width: 100%" id="platform_plot_recognizer"></div>
   <div style="width: 100%" id="cdf_plot_recognizer"></div>



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
         
            // Build cdf plot for recognizer
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/recognizer/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_recognizer', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for recognizer
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/recognizer/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_recognizer', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for recognizer
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/recognizer/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_recognizer', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/recognizer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/recognizer/README.html