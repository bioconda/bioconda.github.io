:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanosim'
.. highlight: bash

nanosim
=======

.. conda:recipe:: nanosim
   :replaces_section_title:
   :noindex:

   NanoSim is a fast and scalable read simulator for Nanopore sequencing data.

   :homepage: https://github.com/BirolLab/NanoSim
   :license: GPL3 / GPL-3.0-only
   :recipe: /`nanosim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanosim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanosim/meta.yaml>`_
   :links: doi: :doi:`10.1093/gigascience/gix010`, doi: :doi:`10.1093/gigascience/giaa061`

   


.. conda:package:: nanosim

   |downloads_nanosim| |docker_nanosim|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.3-2</code>,  <code>3.2.3-1</code>,  <code>3.2.3-0</code>,  <code>3.2.2-1</code>,  <code>3.2.2-0</code>,  <code>3.2.1-1</code>,  <code>3.2.1-0</code>,  <code>3.2.0-2</code>,  <code>3.2.0-1</code>,  </span></summary>
      

      ``3.2.3-2``,  ``3.2.3-1``,  ``3.2.3-0``,  ``3.2.2-1``,  ``3.2.2-0``,  ``3.2.1-1``,  ``3.2.1-0``,  ``3.2.0-2``,  ``3.2.0-1``,  ``3.2.0-0``,  ``3.1.0-0``,  ``3.0.2-0``,  ``3.0.0-0``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.5.1-1``,  ``2.5.1-0``,  ``2.5.0-0``,  ``2.2.0-0``,  ``2.1.0-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``v1.3.0-0``,  ``v1.2.0-0``,  ``v1.0.1-1``

      
      .. raw:: html

         </details>
      

   
   :depends on genometools-genometools: 
   :depends on htseq: ``>=0.9.1``
   :depends on joblib: 
   :depends on last: 
   :depends on minimap2: ``>=2.18``
   :depends on numpy: ``>=1.13.3,<1.24``
   :depends on piecewise-regression: 
   :depends on pybedtools: ``>=0.7.10``
   :depends on pysam: ``>=0.13``
   :depends on python: 
   :depends on regex: 
   :depends on sam2pairwise: 
   :depends on samtools: 
   :depends on scikit-learn: ``~=0.23.2``
   :depends on scipy: ``>=1.0.0``
   :depends on six: ``>=1.10.0``

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

    pixi global install nanosim

to add into an existing workspace instead, run::

    pixi add nanosim

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nanosim

Alternatively, to install into a new environment, run::

    conda create -n envname nanosim

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nanosim:<tag>

(see `nanosim/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nanosim| image:: https://img.shields.io/conda/dn/bioconda/nanosim.svg?style=flat
   :target: https://anaconda.org/bioconda/nanosim
   :alt:   (downloads)
.. |docker_nanosim| image:: https://quay.io/repository/biocontainers/nanosim/status
   :target: https://quay.io/repository/biocontainers/nanosim
.. _`nanosim/tags`: https://quay.io/repository/biocontainers/nanosim?tab=tags


.. raw:: html

   <script>
      var package = "nanosim";
      var versions = ["3.2.3","3.2.3","3.2.3","3.2.2","3.2.2"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_nanosim"></div>
   <div style="width: 100%" id="platform_plot_nanosim"></div>
   <div style="width: 100%" id="cdf_plot_nanosim"></div>



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
         
            // Build cdf plot for nanosim
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/nanosim/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_nanosim', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for nanosim
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/nanosim/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_nanosim', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for nanosim
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/nanosim/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_nanosim', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanosim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanosim/README.html