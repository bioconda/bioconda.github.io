:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kleborate'
.. highlight: bash

kleborate
=========

.. conda:recipe:: kleborate
   :replaces_section_title:
   :noindex:

   Kleborate\: a tool for typing and screening pathogen genome assemblies.

   :homepage: https://kleborate.readthedocs.io
   :developer docs: https://github.com/klebgenomics/Kleborate
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`kleborate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kleborate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kleborate/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41467-021-24448-3`, doi: :doi:`10.1099/mgen.0.000102`, biotools: :biotools:`kleborate`, usegalaxy-eu: :usegalaxy-eu:`kleborate`

   


.. conda:package:: kleborate

   |downloads_kleborate| |docker_kleborate|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.4-0</code>,  <code>3.2.3-0</code>,  <code>3.2.2-0</code>,  <code>3.2.1-0</code>,  <code>3.2.0-0</code>,  <code>3.1.3-0</code>,  <code>3.1.2-0</code>,  <code>3.1.0-0</code>,  <code>3.0.9-0</code>,  </span></summary>
      

      ``3.2.4-0``,  ``3.2.3-0``,  ``3.2.2-0``,  ``3.2.1-0``,  ``3.2.0-0``,  ``3.1.3-0``,  ``3.1.2-0``,  ``3.1.0-0``,  ``3.0.9-0``,  ``3.0.8-0``,  ``3.0.6-0``,  ``3.0.5-0``,  ``2.3.2-0``,  ``2.3.1-0``,  ``2.3.0-0``,  ``2.2.0-0``,  ``2.1.0-1``,  ``2.1.0-0``,  ``2.0.4-1``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``>=1.83``
   :depends on dna_features_viewer: 
   :depends on ectyper: 
   :depends on kaptive: 
   :depends on mash: 
   :depends on minimap2: 
   :depends on ncbi-amrfinderplus: 
   :depends on numpy: ``>=1.22``
   :depends on pandas: 
   :depends on python: ``>=3.9``
   :depends on stxtyper: 

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

    pixi global install kleborate

to add into an existing workspace instead, run::

    pixi add kleborate

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install kleborate

Alternatively, to install into a new environment, run::

    conda create -n envname kleborate

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/kleborate:<tag>

(see `kleborate/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_kleborate| image:: https://img.shields.io/conda/dn/bioconda/kleborate.svg?style=flat
   :target: https://anaconda.org/bioconda/kleborate
   :alt:   (downloads)
.. |docker_kleborate| image:: https://quay.io/repository/biocontainers/kleborate/status
   :target: https://quay.io/repository/biocontainers/kleborate
.. _`kleborate/tags`: https://quay.io/repository/biocontainers/kleborate?tab=tags


.. raw:: html

   <script>
      var package = "kleborate";
      var versions = ["3.2.4","3.2.3","3.2.2","3.2.1","3.2.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_kleborate"></div>
   <div style="width: 100%" id="platform_plot_kleborate"></div>
   <div style="width: 100%" id="cdf_plot_kleborate"></div>



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
         
            // Build cdf plot for kleborate
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/kleborate/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_kleborate', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for kleborate
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/kleborate/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_kleborate', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for kleborate
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/kleborate/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_kleborate', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kleborate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kleborate/README.html