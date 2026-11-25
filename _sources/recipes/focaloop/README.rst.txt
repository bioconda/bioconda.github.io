:orphan:  .. only available via index, not via toctree
:nosearch:

.. title:: Package Recipe 'focaloop'
.. highlight: bash

focaloop
========

.. conda:recipe:: focaloop
   :replaces_section_title:
   :noindex:

   Adaptive byte\-budgeted streaming loops for RNA\-seq expression\, genomic variation\, and eukaryotic genome annotation

   :homepage: https://github.com/nekrut/focaloop
   :license: MIT / MIT
   :recipe: /`focaloop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/focaloop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/focaloop/meta.yaml>`_

   


.. conda:package:: focaloop

   |downloads_focaloop| |docker_focaloop|

   :versions:
      
      

      ``0.4.0-0``,  ``0.3.0-0``

      

   
   :depends on __osx: ``>=10.13``
   :depends on barrnap: 
   :depends on bcftools: ``>=1.21``
   :depends on biopython: ``>=1.83``
   :depends on bwa: ``>=0.7.17``
   :depends on bwa-mem2: ``>=2.2.1``
   :depends on curl: 
   :depends on diamond: 
   :depends on gffcompare: 
   :depends on hisat2: ``>=2.2.1``
   :depends on hmmer: 
   :depends on htslib: ``>=1.21``
   :depends on infernal: 
   :depends on llvm-openmp: ``>=19.1.7``
   :depends on llvm-openmp: ``>=23.1.6``
   :depends on mappy: ``>=2.26``
   :depends on minimap2: ``>=2.28``
   :depends on miniprot: 
   :depends on numba: ``>=0.58``
   :depends on numpy: ``>=1.24``
   :depends on pandas: ``>=2.0``
   :depends on piscem: ``>=0.10.3``
   :depends on pyarrow: ``>=14``
   :depends on pydeseq2: ``>=0.4.12``
   :depends on pysam: ``>=0.22``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on pyyaml: ``>=6``
   :depends on requests: ``>=2.28``
   :depends on salmon: ``>=1.10.3``
   :depends on samtools: ``>=1.21``
   :depends on scikit-learn: ``>=1.5``
   :depends on scipy: ``>=1.10``
   :depends on seqkit: 
   :depends on statsmodels: ``>=0.14``
   :depends on stringtie: 
   :depends on strobealign: ``>=0.14.0``
   :depends on trnascan-se: 
   :depends on zstandard: ``>=0.21``
   :depends on zstd: 

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

    pixi global install focaloop

to add into an existing workspace instead, run::

    pixi add focaloop

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install focaloop

Alternatively, to install into a new environment, run::

    conda create -n envname focaloop

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/focaloop:<tag>

(see `focaloop/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_focaloop| image:: https://img.shields.io/conda/dn/bioconda/focaloop.svg?style=flat
   :target: https://anaconda.org/bioconda/focaloop
   :alt:   (downloads)
.. |docker_focaloop| image:: https://quay.io/repository/biocontainers/focaloop/status
   :target: https://quay.io/repository/biocontainers/focaloop
.. _`focaloop/tags`: https://quay.io/repository/biocontainers/focaloop?tab=tags


.. raw:: html

   <script>
      var package = "focaloop";
      var versions = ["0.4.0","0.3.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_focaloop"></div>
   <div style="width: 100%" id="platform_plot_focaloop"></div>
   <div style="width: 100%" id="cdf_plot_focaloop"></div>



   .. Create all the necessary plots for each package by loading all the
      correct specs and data. Important points on the place and implementation
      of this script block:
      1. It is here, and not in a separate HTML file, as it needs to have the
         `package.name` rendered in for each package.
      2. All packages are handled in one `window.onload` function, as multiple
         instances of this throughout a (rendered) HTML just overwrite each
         other.

   <script>
      window.onload = async function() {
         
            // Build cdf plot for focaloop
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/focaloop/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_focaloop', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for focaloop
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/focaloop/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_focaloop', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for focaloop
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/focaloop/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_focaloop', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/focaloop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/focaloop/README.html