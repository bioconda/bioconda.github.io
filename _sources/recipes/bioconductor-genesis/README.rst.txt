:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genesis'
.. highlight: bash

bioconductor-genesis
====================

.. conda:recipe:: bioconductor-genesis
   :replaces_section_title:
   :noindex:

   GENetic EStimation and Inference in Structured samples \(GENESIS\)\: Statistical methods for analyzing genetic data from samples with population structure and\/or relatedness

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GENESIS.html
   :license: GPL-3
   :recipe: /`bioconductor-genesis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genesis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genesis/meta.yaml>`_

   The GENESIS package provides methodology for estimating\, inferring\, and accounting for population and pedigree structure in genetic analyses.  The current implementation provides functions to perform PC\-AiR \(Conomos et al.\, 2015\, Gen Epi\) and PC\-Relate \(Conomos et al.\, 2016\, AJHG\). PC\-AiR performs a Principal Components Analysis on genome\-wide SNP data for the detection of population structure in a sample that may contain known or cryptic relatedness. Unlike standard PCA\, PC\-AiR accounts for relatedness in the sample to provide accurate ancestry inference that is not confounded by family structure. PC\-Relate uses ancestry representative principal components to adjust for population structure\/ancestry and accurately estimate measures of recent genetic relatedness such as kinship coefficients\, IBD sharing probabilities\, and inbreeding coefficients. Additionally\, functions are provided to perform efficient variance component estimation and mixed model association testing for both quantitative and binary phenotypes.


.. conda:package:: bioconductor-genesis

   |downloads_bioconductor-genesis| |docker_bioconductor-genesis|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.40.0-1</code>,  <code>2.40.0-0</code>,  <code>2.36.0-0</code>,  <code>2.32.0-0</code>,  <code>2.30.0-0</code>,  <code>2.28.0-1</code>,  <code>2.28.0-0</code>,  <code>2.24.2-0</code>,  <code>2.24.1-0</code>,  </span></summary>
      

      ``2.40.0-1``,  ``2.40.0-0``,  ``2.36.0-0``,  ``2.32.0-0``,  ``2.30.0-0``,  ``2.28.0-1``,  ``2.28.0-0``,  ``2.24.2-0``,  ``2.24.1-0``,  ``2.24.0-0``,  ``2.22.1-0``,  ``2.20.1-0``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.3-0``,  ``2.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0a0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0a0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0a0``
   :depends on bioconductor-gdsfmt: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-gdsfmt: ``>=1.46.0,<1.47.0a0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.1,<1.63.0a0``
   :depends on bioconductor-gwastools: ``>=1.56.0,<1.57.0``
   :depends on bioconductor-gwastools: ``>=1.56.0,<1.57.0a0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0a0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends on bioconductor-seqarray: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-seqarray: ``>=1.50.1,<1.51.0a0``
   :depends on bioconductor-seqvartools: ``>=1.48.0,<1.49.0``
   :depends on bioconductor-seqvartools: ``>=1.48.0,<1.49.0a0``
   :depends on bioconductor-snprelate: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-snprelate: ``>=1.44.0,<1.45.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libopenblas: ``>=0.3.31,<1.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-igraph: 
   :depends on r-matrix: 
   :depends on r-reshape2: 

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

    pixi global install bioconductor-genesis

to add into an existing workspace instead, run::

    pixi add bioconductor-genesis

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-genesis

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-genesis

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-genesis:<tag>

(see `bioconductor-genesis/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-genesis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genesis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genesis
   :alt:   (downloads)
.. |docker_bioconductor-genesis| image:: https://quay.io/repository/biocontainers/bioconductor-genesis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genesis
.. _`bioconductor-genesis/tags`: https://quay.io/repository/biocontainers/bioconductor-genesis?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genesis";
        var versions = ["2.40.0","2.40.0","2.36.0","2.32.0","2.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genesis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genesis/README.html