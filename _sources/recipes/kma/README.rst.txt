:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kma'
.. highlight: bash

kma
===

.. conda:recipe:: kma
   :replaces_section_title:
   :noindex:

   KMA is a mapping method designed to map raw reads directly against redundant databases\, in an ultra\-fast manner using seed and extend.

   :homepage: https://bitbucket.org/genomicepidemiology/kma
   :documentation: https://bitbucket.org/genomicepidemiology/kma/src/1.6.11/README.md
   
   :license: APACHE / Apache-2.0
   :recipe: /`kma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kma/meta.yaml>`_
   :links: doi: :doi:`10.1093/nargab/lqaf116`, usegalaxy-eu: :usegalaxy-eu:`kma_map`, biotools: :biotools:`kma`

   


.. conda:package:: kma

   |downloads_kma| |docker_kma|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6.11-0</code>,  <code>1.6.10-0</code>,  <code>1.6.8-0</code>,  <code>1.6.7-0</code>,  <code>1.6.6-0</code>,  <code>1.5.1-0</code>,  <code>1.5.0-0</code>,  <code>1.4.18-0</code>,  <code>1.4.17-0</code>,  </span></summary>
      

      ``1.6.11-0``,  ``1.6.10-0``,  ``1.6.8-0``,  ``1.6.7-0``,  ``1.6.6-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.18-0``,  ``1.4.17-0``,  ``1.4.15-1``,  ``1.4.15-0``,  ``1.4.14-1``,  ``1.4.14-0``,  ``1.4.9-2``,  ``1.4.9-1``,  ``1.4.9-0``,  ``1.4.3-1``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.28-1``,  ``1.3.28-0``,  ``1.3.27-0``,  ``1.3.26-0``,  ``1.3.25-0``,  ``1.3.24-0``,  ``1.3.23-0``,  ``1.3.22-0``,  ``1.3.21-0``,  ``1.3.19-0``,  ``1.3.18-0``,  ``1.3.17-0``,  ``1.3.15-0``,  ``1.3.14-0``,  ``1.3.13-1``,  ``1.3.13-0``,  ``1.3.12-0``,  ``1.3.10-0``,  ``1.3.9-0``,  ``1.3.8-0``,  ``1.3.7-0``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.0-0``,  ``1.2.26-0``,  ``1.2.25-0``,  ``1.2.22-0``,  ``1.2.21-0``,  ``1.2.20-0``,  ``1.2.19-0``,  ``1.2.18-0``,  ``1.2.17-0``,  ``1.2.16-0``,  ``1.2.15-0``,  ``1.2.14-0``,  ``1.2.12-0``,  ``1.2.11-0``,  ``1.2.9-0``,  ``1.2.7-0``,  ``1.2.6-0``,  ``1.2.5-0``,  ``1.2.3-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.7-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on __glibc: ``>=2.17,<3.0.a0``
   :depends on libgcc: ``>=14``
   :depends on libzlib: ``>=1.3.2,<2.0a0``

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

    pixi global install kma

to add into an existing workspace instead, run::

    pixi add kma

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install kma

Alternatively, to install into a new environment, run::

    conda create -n envname kma

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/kma:<tag>

(see `kma/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_kma| image:: https://img.shields.io/conda/dn/bioconda/kma.svg?style=flat
   :target: https://anaconda.org/bioconda/kma
   :alt:   (downloads)
.. |docker_kma| image:: https://quay.io/repository/biocontainers/kma/status
   :target: https://quay.io/repository/biocontainers/kma
.. _`kma/tags`: https://quay.io/repository/biocontainers/kma?tab=tags


.. raw:: html

   <script>
      var package = "kma";
      var versions = ["1.6.11","1.6.10","1.6.8","1.6.7","1.6.6"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_kma"></div>
   <div style="width: 100%" id="platform_plot_kma"></div>
   <div style="width: 100%" id="cdf_plot_kma"></div>



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
         
            // Build cdf plot for kma
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/kma/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_kma', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for kma
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/kma/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_kma', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for kma
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/kma/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_kma', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kma/README.html