:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crossmap'
.. highlight: bash

crossmap
========

.. conda:recipe:: crossmap
   :replaces_section_title:
   :noindex:

   CrossMap is a program for convenient conversion of genome coordinates and genomeannotation files between assemblies.

   :homepage: https://crossmap.sourceforge.net
   :documentation: https://crossmap.readthedocs.io/en/latest
   
   :developer docs: https://github.com/liguowang/CrossMap
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`crossmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crossmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crossmap/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`crossmap_bam`, usegalaxy-eu: :usegalaxy-eu:`crossmap_bed`, usegalaxy-eu: :usegalaxy-eu:`crossmap_vcf`, usegalaxy-eu: :usegalaxy-eu:`crossmap_wig`, usegalaxy-eu: :usegalaxy-eu:`crossmap_gff`, doi: :doi:`10.1093/bioinformatics/btt730`, biotools: :biotools:`crossmap`

   


.. conda:package:: crossmap

   |downloads_crossmap| |docker_crossmap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.3-0</code>,  <code>0.7.0-0</code>,  <code>0.6.5-0</code>,  <code>0.6.4-0</code>,  <code>0.6.3-0</code>,  <code>0.6.1-0</code>,  <code>0.6.0-0</code>,  <code>0.5.2-0</code>,  <code>0.4.2-0</code>,  </span></summary>
      

      ``0.7.3-0``,  ``0.7.0-0``,  ``0.6.5-0``,  ``0.6.4-0``,  ``0.6.3-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.2-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.3.9-0``,  ``0.3.7-2``,  ``0.3.7-1``,  ``0.3.7-0``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.2.8-0``,  ``0.2.7-2``,  ``0.2.7-1``,  ``0.2.7-0``,  ``0.2.5-1``,  ``0.2.5-0``,  ``0.2.2-3``,  ``0.2.2-2``,  ``0.2.2-1``,  ``0.2.2-0``,  ``0.2.1-1``,  ``0.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bx-python: 
   :depends on numpy: 
   :depends on pybigwig: 
   :depends on pysam: 
   :depends on python: ``>=3.8``
   :depends on ucsc-wigtobigwig: 

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

    pixi global install crossmap

to add into an existing workspace instead, run::

    pixi add crossmap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install crossmap

Alternatively, to install into a new environment, run::

    conda create -n envname crossmap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/crossmap:<tag>

(see `crossmap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_crossmap| image:: https://img.shields.io/conda/dn/bioconda/crossmap.svg?style=flat
   :target: https://anaconda.org/bioconda/crossmap
   :alt:   (downloads)
.. |docker_crossmap| image:: https://quay.io/repository/biocontainers/crossmap/status
   :target: https://quay.io/repository/biocontainers/crossmap
.. _`crossmap/tags`: https://quay.io/repository/biocontainers/crossmap?tab=tags


.. raw:: html

   <script>
      var package = "crossmap";
      var versions = ["0.7.3","0.7.0","0.6.5","0.6.4","0.6.3"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_crossmap"></div>
   <div style="width: 100%" id="platform_plot_crossmap"></div>
   <div style="width: 100%" id="cdf_plot_crossmap"></div>



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
         
            // Build cdf plot for crossmap
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/crossmap/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_crossmap', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for crossmap
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/crossmap/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_crossmap', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for crossmap
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/crossmap/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_crossmap', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crossmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crossmap/README.html