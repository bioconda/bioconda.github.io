:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spacepharer'
.. highlight: bash

spacepharer
===========

.. conda:recipe:: spacepharer
   :replaces_section_title:
   :noindex:

   SpacePHARER\: Sensitive identification of phages from CRISPR spacers in prokaryotic hosts

   :homepage: https://github.com/soedinglab/spacepharer
   :license: GPL / GPL-3
   :recipe: /`spacepharer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spacepharer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spacepharer/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btab222`, biotools: :biotools:`spacepharer`

   


.. conda:package:: spacepharer

   |downloads_spacepharer| |docker_spacepharer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.c2e680a-7</code>,  <code>5.c2e680a-6</code>,  <code>5.c2e680a-5</code>,  <code>5.c2e680a-4</code>,  <code>5.c2e680a-3</code>,  <code>5.c2e680a-2</code>,  <code>5.c2e680a-1</code>,  <code>5.c2e680a-0</code>,  <code>4.228b9e5-2</code>,  </span></summary>
      

      ``5.c2e680a-7``,  ``5.c2e680a-6``,  ``5.c2e680a-5``,  ``5.c2e680a-4``,  ``5.c2e680a-3``,  ``5.c2e680a-2``,  ``5.c2e680a-1``,  ``5.c2e680a-0``,  ``4.228b9e5-2``,  ``4.228b9e5-1``,  ``4.228b9e5-0``,  ``3.5b8c86d-0``,  ``2.fc5e668-0``,  ``1.56925d2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on gawk: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on wget: 
   :depends on zlib: 

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

    pixi global install spacepharer

to add into an existing workspace instead, run::

    pixi add spacepharer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install spacepharer

Alternatively, to install into a new environment, run::

    conda create -n envname spacepharer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/spacepharer:<tag>

(see `spacepharer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_spacepharer| image:: https://img.shields.io/conda/dn/bioconda/spacepharer.svg?style=flat
   :target: https://anaconda.org/bioconda/spacepharer
   :alt:   (downloads)
.. |docker_spacepharer| image:: https://quay.io/repository/biocontainers/spacepharer/status
   :target: https://quay.io/repository/biocontainers/spacepharer
.. _`spacepharer/tags`: https://quay.io/repository/biocontainers/spacepharer?tab=tags


.. raw:: html

   <script>
      var package = "spacepharer";
      var versions = ["5.c2e680a","5.c2e680a","5.c2e680a","5.c2e680a","5.c2e680a"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_spacepharer"></div>
   <div style="width: 100%" id="platform_plot_spacepharer"></div>
   <div style="width: 100%" id="cdf_plot_spacepharer"></div>



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
         
            // Build cdf plot for spacepharer
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/spacepharer/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_spacepharer', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for spacepharer
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/spacepharer/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_spacepharer', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for spacepharer
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/spacepharer/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_spacepharer', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spacepharer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spacepharer/README.html