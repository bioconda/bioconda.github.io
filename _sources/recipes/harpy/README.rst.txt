:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'harpy'
.. highlight: bash

harpy
=====

.. conda:recipe:: harpy
   :replaces_section_title:
   :noindex:

   Process linked\-read or WGS data\, from raw sequences to phased haplotypes.

   :homepage: https://github.com/pdimens/harpy
   :documentation: https://pdimens.github.io/harpy
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`harpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/harpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/harpy/meta.yaml>`_

   Harpy is a command\-line tool to easily process platform\-agnostic linked\-read or WGS data. It uses
   Snakemake under the hood to execute different workflows \(quality control\, trimming\, 
   alignment\, variant calling\, phasing\, etc.\)\, but the user is rarely\, if ever\, exposed
   to Snakemake directly. With an emphasis on user\-friendliness\, parallelization\, transparency\,
   and reproducibility\, Harpy quickly handles data processing so that you can focus more
   on analyzing your data. 



.. conda:package:: harpy

   |downloads_harpy| |docker_harpy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.1-0</code>,  <code>4.0-0</code>,  <code>3.2-0</code>,  <code>3.1-2</code>,  <code>3.1-1</code>,  <code>3.1-0</code>,  <code>3.0.1-0</code>,  <code>3.0-0</code>,  <code>2.8.1-0</code>,  </span></summary>
      

      ``4.1-0``,  ``4.0-0``,  ``3.2-0``,  ``3.1-2``,  ``3.1-1``,  ``3.1-0``,  ``3.0.1-0``,  ``3.0-0``,  ``2.8.1-0``,  ``2.8-0``,  ``2.7-0``,  ``2.6.1-1``,  ``2.6.1-0``,  ``2.6.0-0``,  ``2.5.0-1``,  ``2.5.0-0``,  ``2.4.2-0``,  ``2.4.1-0``,  ``2.4-1``,  ``2.4-0``,  ``2.3-1``,  ``2.3-0``,  ``2.2-0``,  ``2.1-0``,  ``2.0-0``,  ``1.16.3-1``,  ``1.16.3-0``,  ``1.16.2-0``,  ``1.16.1-0``,  ``1.16.0-0``,  ``1.15.0-0``,  ``1.14.3-0``,  ``1.14.2-0``,  ``1.14.1-1``,  ``1.14.1-0``,  ``1.14-0``,  ``1.13-0``,  ``1.12-0``,  ``1.11-0``,  ``1.10.1-0``,  ``1.10-0``,  ``1.9-1``,  ``1.9-0``,  ``1.8.2-0``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.7.0-0``,  ``1.6.1-0``,  ``1.6-0``,  ``1.5-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4-0``,  ``1.3-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.1-0``,  ``1.1-1``,  ``1.1-0``,  ``1.0-1``,  ``1.0-0``,  ``0.9.1-0``,  ``0.8.0-0``,  ``0.7.3-0``,  ``0.7.0-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.0-3``,  ``0.3.0-2``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.1-2``,  ``0.1.1-1``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on __osx: ``>=10.13``
   :depends on altair: ``>=6.0``
   :depends on bcftools: ``>=1.23``
   :depends on click: ``>=8.2``
   :depends on conda: ``>=24.8``
   :depends on djinn: ``>=2.3``
   :depends on htslib: ``>=1.23``
   :depends on jupyter-book: ``>=2.1.0``
   :depends on pandas: ``>=2.3.3``
   :depends on papermill: ``>=2.6``
   :depends on pillow: ``>=12.2``
   :depends on polars: ``>=1.39``
   :depends on pysam: ``>=0.23``
   :depends on python: ``>=3.13,<3.14.0a0``
   :depends on python_abi: ``3.13.* *_cp313``
   :depends on rich-click: ``>=1.9.3``
   :depends on samtools: ``>=1.23``
   :depends on seqtk: 
   :depends on snakemake-minimal: ``>=9.19.0``
   :depends on vl-convert-python: ``>=1.9.0``
   :depends on xeus-python: ``>=0.18.1``

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

    pixi global install harpy

to add into an existing workspace instead, run::

    pixi add harpy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install harpy

Alternatively, to install into a new environment, run::

    conda create -n envname harpy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/harpy:<tag>

(see `harpy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_harpy| image:: https://img.shields.io/conda/dn/bioconda/harpy.svg?style=flat
   :target: https://anaconda.org/bioconda/harpy
   :alt:   (downloads)
.. |docker_harpy| image:: https://quay.io/repository/biocontainers/harpy/status
   :target: https://quay.io/repository/biocontainers/harpy
.. _`harpy/tags`: https://quay.io/repository/biocontainers/harpy?tab=tags


.. raw:: html

   <script>
      var package = "harpy";
      var versions = ["4.1","4.0","3.2","3.1","3.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_harpy"></div>
   <div style="width: 100%" id="platform_plot_harpy"></div>
   <div style="width: 100%" id="cdf_plot_harpy"></div>



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
         
            // Build cdf plot for harpy
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/harpy/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_harpy', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for harpy
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/harpy/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_harpy', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for harpy
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/harpy/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_harpy', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/harpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/harpy/README.html