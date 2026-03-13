:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cardelino'
.. highlight: bash

bioconductor-cardelino
======================

.. conda:recipe:: bioconductor-cardelino
   :replaces_section_title:
   :noindex:

   Clone Identification from Single Cell Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/cardelino.html
   :license: GPL-3
   :recipe: /`bioconductor-cardelino <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cardelino>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cardelino/meta.yaml>`_

   Methods to infer clonal tree configuration for a population of cells using single\-cell RNA\-seq data \(scRNA\-seq\)\, and possibly other data modalities. Methods are also provided to assign cells to inferred clones and explore differences in gene expression between clones. These methods can flexibly integrate information from imperfect clonal trees inferred based on bulk exome\-seq data\, and sparse variant alleles expressed in scRNA\-seq data. A flexible beta\-binomial error model that accounts for stochastic dropout events as well as systematic allelic imbalance is used.


.. conda:package:: bioconductor-cardelino

   |downloads_bioconductor-cardelino| |docker_bioconductor-cardelino|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-ggtree: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-snpstats: ``>=1.60.0,<1.61.0``
   :depends on bioconductor-variantannotation: ``>=1.56.0,<1.57.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-combinat: 
   :depends on r-ggplot2: 
   :depends on r-matrix: 
   :depends on r-matrixstats: 
   :depends on r-pheatmap: 
   :depends on r-vcfr: 

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

    pixi global install bioconductor-cardelino

to add into an existing workspace instead, run::

    pixi add bioconductor-cardelino

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cardelino

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cardelino

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cardelino:<tag>

(see `bioconductor-cardelino/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cardelino| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cardelino.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cardelino
   :alt:   (downloads)
.. |docker_bioconductor-cardelino| image:: https://quay.io/repository/biocontainers/bioconductor-cardelino/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cardelino
.. _`bioconductor-cardelino/tags`: https://quay.io/repository/biocontainers/bioconductor-cardelino?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cardelino";
        var versions = ["1.12.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cardelino/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cardelino/README.html