:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sirius-csifingerid'
.. highlight: bash

sirius-csifingerid
==================

.. conda:recipe:: sirius-csifingerid
   :replaces_section_title:
   :noindex:

   SIRIUS \(CLI \+ GUI\) LC\-MS\/MS data analyses framework. Includes\: SIRIUS\, ZODIAC\, CSI\:FingerID \(with COSMIC\) and CANOPUS

   :homepage: https://bio.informatik.uni-jena.de/software/sirius/
   :documentation: https://boecker-lab.github.io/docs.sirius.github.io/
   
   :developer docs: https://github.com/boecker-lab/sirius
   :license: AGPL-3.0-only AND OTHER
   :recipe: /`sirius-csifingerid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sirius-csifingerid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sirius-csifingerid/meta.yaml>`_

   SIRIUS is a java\-based software framework for the analysis of LC\-MS\/MS data of metabolites and other small molecules of biological interest. SIRIUS integrates a collection of our tools\, including CSI\:FingerID \(with COSMIC\)\, ZODIAC and CANOPUS.  In particular\, both the graphical user interface and the command line version of SIRIUS seamlessly integrate the CSI\:FingerID and CANOPUS web services.


.. conda:package:: sirius-csifingerid

   |downloads_sirius-csifingerid| |docker_sirius-csifingerid|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.8.6-0</code>,  <code>5.8.5-0</code>,  <code>5.8.4-0</code>,  <code>5.8.3-0</code>,  <code>5.8.2-0</code>,  <code>4.9.15-3</code>,  <code>4.9.15-2</code>,  <code>4.9.15-1</code>,  <code>4.9.15-0</code>,  </span></summary>
      

      ``5.8.6-0``,  ``5.8.5-0``,  ``5.8.4-0``,  ``5.8.3-0``,  ``5.8.2-0``,  ``4.9.15-3``,  ``4.9.15-2``,  ``4.9.15-1``,  ``4.9.15-0``,  ``4.9.8-2``,  ``4.9.8-1``,  ``4.9.8-0``,  ``4.9.4-0``,  ``4.9.3-0``,  ``4.0.1-1``,  ``4.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on coin-or-cbc: 
   :depends on openjdk: ``17.*``

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

    pixi global install sirius-csifingerid

to add into an existing workspace instead, run::

    pixi add sirius-csifingerid

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sirius-csifingerid

Alternatively, to install into a new environment, run::

    conda create -n envname sirius-csifingerid

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sirius-csifingerid:<tag>

(see `sirius-csifingerid/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sirius-csifingerid| image:: https://img.shields.io/conda/dn/bioconda/sirius-csifingerid.svg?style=flat
   :target: https://anaconda.org/bioconda/sirius-csifingerid
   :alt:   (downloads)
.. |docker_sirius-csifingerid| image:: https://quay.io/repository/biocontainers/sirius-csifingerid/status
   :target: https://quay.io/repository/biocontainers/sirius-csifingerid
.. _`sirius-csifingerid/tags`: https://quay.io/repository/biocontainers/sirius-csifingerid?tab=tags


.. raw:: html

   <script>
      var package = "sirius-csifingerid";
      var versions = ["5.8.6","5.8.5","5.8.4","5.8.3","5.8.2"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_sirius-csifingerid"></div>
   <div style="width: 100%" id="platform_plot_sirius-csifingerid"></div>
   <div style="width: 100%" id="cdf_plot_sirius-csifingerid"></div>



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
         
            // Build cdf plot for sirius-csifingerid
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/sirius-csifingerid/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_sirius-csifingerid', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for sirius-csifingerid
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/sirius-csifingerid/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_sirius-csifingerid', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for sirius-csifingerid
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/sirius-csifingerid/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_sirius-csifingerid', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sirius-csifingerid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sirius-csifingerid/README.html