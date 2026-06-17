:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'macs3'
.. highlight: bash

macs3
=====

.. conda:recipe:: macs3
   :replaces_section_title:
   :noindex:

   Model Based Analysis for ChIP\-Seq data.

   :homepage: https://github.com/macs3-project/MACS
   :documentation: https://macs3-project.github.io/MACS
   
   :license: BSD / BSD-3-Clause
   :recipe: /`macs3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/macs3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/macs3/meta.yaml>`_
   :links: biotools: :biotools:`macs`, doi: :doi:`10.1186/gb-2008-9-9-r137`, usegalaxy-eu: :usegalaxy-eu:`peakcalling_macs`, usegalaxy-eu: :usegalaxy-eu:`macs2_bdgbroadcall`, usegalaxy-eu: :usegalaxy-eu:`macs2_bdgcmp`, usegalaxy-eu: :usegalaxy-eu:`macs2_bdgdiff`, usegalaxy-eu: :usegalaxy-eu:`macs2_bdgpeakcall`, usegalaxy-eu: :usegalaxy-eu:`macs2_callpeak`, usegalaxy-eu: :usegalaxy-eu:`macs2_filterdup`, usegalaxy-eu: :usegalaxy-eu:`macs2_predictd`, usegalaxy-eu: :usegalaxy-eu:`macs2_randsample`, usegalaxy-eu: :usegalaxy-eu:`macs2_refinepeak`

   


.. conda:package:: macs3

   |downloads_macs3| |docker_macs3|

   :versions:
      
      

      ``3.0.4-0``,  ``3.0.3-0``,  ``3.0.2-2``,  ``3.0.2-1``,  ``3.0.2-0``,  ``3.0.1-3``,  ``3.0.1-2``,  ``3.0.1-1``,  ``3.0.1-0``

      

   
   :depends on cykhash: ``>=2.0,<3.0``
   :depends on hmmlearn: ``>=0.3.2``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on numpy: ``>=1.21,<3``
   :depends on numpy: ``>=1.25``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on scikit-learn: ``>=1.3``
   :depends on scipy: ``>=1.12``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      


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

    pixi global install macs3

to add into an existing workspace instead, run::

    pixi add macs3

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install macs3

Alternatively, to install into a new environment, run::

    conda create -n envname macs3

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/macs3:<tag>

(see `macs3/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_macs3| image:: https://img.shields.io/conda/dn/bioconda/macs3.svg?style=flat
   :target: https://anaconda.org/bioconda/macs3
   :alt:   (downloads)
.. |docker_macs3| image:: https://quay.io/repository/biocontainers/macs3/status
   :target: https://quay.io/repository/biocontainers/macs3
.. _`macs3/tags`: https://quay.io/repository/biocontainers/macs3?tab=tags


.. raw:: html

   <script>
      var package = "macs3";
      var versions = ["3.0.4","3.0.3","3.0.2","3.0.2","3.0.2"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_macs3"></div>
   <div style="width: 100%" id="platform_plot_macs3"></div>
   <div style="width: 100%" id="cdf_plot_macs3"></div>



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
         
            // Build cdf plot for macs3
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/macs3/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_macs3', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for macs3
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/macs3/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_macs3', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for macs3
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/macs3/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_macs3', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/macs3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/macs3/README.html