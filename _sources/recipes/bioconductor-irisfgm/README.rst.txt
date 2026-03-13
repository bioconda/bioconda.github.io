:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-irisfgm'
.. highlight: bash

bioconductor-irisfgm
====================

.. conda:recipe:: bioconductor-irisfgm
   :replaces_section_title:
   :noindex:

   Comprehensive Analysis of Gene Interactivity Networks Based on Single\-Cell RNA\-Seq

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/IRISFGM.html
   :license: GPL-2
   :recipe: /`bioconductor-irisfgm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-irisfgm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-irisfgm/meta.yaml>`_

   Single\-cell RNA\-Seq data is useful in discovering cell heterogeneity and signature genes in specific cell populations in cancer and other complex diseases. Specifically\, the investigation of functional gene modules \(FGM\) can help to understand gene interactive networks and complex biological processes. QUBIC2 is recognized as one of the most efficient and effective tools for FGM identification from scRNA\-Seq data. However\, its availability is limited to a C implementation\, and its applicative power is affected by only a few downstream analyses functionalities. We developed an R package named IRIS\-FGM \(integrative scRNA\-Seq interpretation system for functional gene module analysis\) to support the investigation of FGMs and cell clustering using scRNA\-Seq data. Empowered by QUBIC2\, IRIS\-FGM can identify co\-expressed and co\-regulated FGMs\, predict types\/clusters\, identify differentially expressed genes\, and perform functional enrichment analysis. It is noteworthy that IRIS\-FGM also applies Seurat objects that can be easily used in the Seurat vignettes.


.. conda:package:: bioconductor-irisfgm

   |downloads_bioconductor-irisfgm| |docker_bioconductor-irisfgm|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-clusterprofiler: ``>=4.8.0,<4.9.0``
   :depends on bioconductor-desingle: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-org.hs.eg.db: ``>=3.17.0,<3.18.0``
   :depends on bioconductor-org.mm.eg.db: ``>=3.17.0,<3.18.0``
   :depends on bioconductor-scater: ``>=1.28.0,<1.29.0``
   :depends on bioconductor-scran: ``>=1.28.0,<1.29.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on libstdcxx-ng: ``>=12``
   :depends on r-adaptgauss: 
   :depends on r-anocva: 
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-colorspace: 
   :depends on r-drimpute: 
   :depends on r-ggplot2: 
   :depends on r-ggpubr: 
   :depends on r-ggraph: 
   :depends on r-igraph: 
   :depends on r-knitr: 
   :depends on r-matrix: 
   :depends on r-mcl: 
   :depends on r-mixtools: 
   :depends on r-pheatmap: 
   :depends on r-polychrome: 
   :depends on r-rcolorbrewer: 
   :depends on r-rcpp: ``>=1.0.0``
   :depends on r-seurat: 

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

    pixi global install bioconductor-irisfgm

to add into an existing workspace instead, run::

    pixi add bioconductor-irisfgm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-irisfgm

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-irisfgm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-irisfgm:<tag>

(see `bioconductor-irisfgm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-irisfgm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-irisfgm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-irisfgm
   :alt:   (downloads)
.. |docker_bioconductor-irisfgm| image:: https://quay.io/repository/biocontainers/bioconductor-irisfgm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-irisfgm
.. _`bioconductor-irisfgm/tags`: https://quay.io/repository/biocontainers/bioconductor-irisfgm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-irisfgm";
        var versions = ["1.8.0","1.6.0","1.2.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-irisfgm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-irisfgm/README.html