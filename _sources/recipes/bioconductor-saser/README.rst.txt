:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-saser'
.. highlight: bash

bioconductor-saser
==================

.. conda:recipe:: bioconductor-saser
   :replaces_section_title:
   :noindex:

   Scalable Aberrant Splicing and Expression Retrieval

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/saseR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-saser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-saser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-saser/meta.yaml>`_

   saseR is a highly performant and fast framework for aberrant expression and splicing analyses. The main functions are\: \\itemize\{ \\item \\code\{\\link\{BamtoAspliCounts\}\} \- Process BAM files to ASpli counts \\item \\code\{\\link\{convertASpli\}\} \- Get gene\, bin or junction counts from ASpli SummarizedExperiment \\item \\code\{\\link\{calculateOffsets\}\} \- Create an offsets assays for aberrant expression or splicing analysis \\item \\code\{\\link\{saseRfindEncodingDim\}\} \- Estimate the optimal number of latent factors to include when estimating the mean expression \\item \\code\{\\link\{saseRfit\}\} \- Parameter estimation of the negative binomial distribution and compute p\-values for aberrant expression and splicing \} For information upon how to use these functions\, check out our vignette at \\url\{https\:\/\/github.com\/statOmics\/saseR\/blob\/main\/vignettes\/Vignette.Rmd\} and the saseR paper\: Segers\, A. et al. \(2023\). Juggling offsets unlocks RNA\-seq tools for fast scalable differential usage\, aberrant splicing and expression analyses. bioRxiv. \\url\{https\:\/\/doi.org\/10.1101\/2023.06.29.547014\}.


.. conda:package:: bioconductor-saser

   |downloads_bioconductor-saser| |docker_bioconductor-saser|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-aspli: ``>=2.20.0,<2.21.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-deseq2: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-edger: ``>=4.8.0,<4.9.0``
   :depends on bioconductor-genomicalignments: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-matrixgenerics: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-igraph: 
   :depends on r-mass: 
   :depends on r-prroc: 

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

    pixi global install bioconductor-saser

to add into an existing workspace instead, run::

    pixi add bioconductor-saser

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-saser

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-saser

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-saser:<tag>

(see `bioconductor-saser/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-saser| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-saser.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-saser
   :alt:   (downloads)
.. |docker_bioconductor-saser| image:: https://quay.io/repository/biocontainers/bioconductor-saser/status
   :target: https://quay.io/repository/biocontainers/bioconductor-saser
.. _`bioconductor-saser/tags`: https://quay.io/repository/biocontainers/bioconductor-saser?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-saser";
        var versions = ["1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-saser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-saser/README.html