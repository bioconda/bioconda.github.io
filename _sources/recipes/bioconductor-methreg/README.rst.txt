:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-methreg'
.. highlight: bash

bioconductor-methreg
====================

.. conda:recipe:: bioconductor-methreg
   :replaces_section_title:
   :noindex:

   Assessing the regulatory potential of DNA methylation regions or sites on gene transcription

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/MethReg.html
   :license: GPL-3
   :recipe: /`bioconductor-methreg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methreg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methreg/meta.yaml>`_

   Epigenome\-wide association studies \(EWAS\) detects a large number of DNA methylation differences\, often hundreds of differentially methylated regions and thousands of CpGs\, that are significantly associated with a disease\, many are located in non\-coding regions. Therefore\, there is a critical need to better understand the functional impact of these CpG methylations and to further prioritize the significant changes. MethReg is an R package for integrative modeling of DNA methylation\, target gene expression and transcription factor binding sites data\, to systematically identify and rank functional CpG methylations. MethReg evaluates\, prioritizes and annotates CpG sites with high regulatory potential using matched methylation and gene expression data\, along with external TF\-target interaction databases based on manually curation\, ChIP\-seq experiments or gene regulatory network analysis.


.. conda:package:: bioconductor-methreg

   |downloads_bioconductor-methreg| |docker_bioconductor-methreg|

   :versions:
      
      

      ``1.20.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends on bioconductor-annotationhub: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-delayedarray: ``>=0.36.0,<0.37.0``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-jaspar2024: ``>=0.99.0,<0.100.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-sesame: ``>=1.28.0,<1.29.0``
   :depends on bioconductor-sesamedata: ``>=1.28.0,<1.29.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-tfbstools: ``>=1.48.0,<1.49.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-ggpubr: 
   :depends on r-mass: 
   :depends on r-matrix: 
   :depends on r-openxlsx: 
   :depends on r-plyr: 
   :depends on r-progress: 
   :depends on r-pscl: 
   :depends on r-readr: 
   :depends on r-rlang: 
   :depends on r-rsqlite: 
   :depends on r-sfsmisc: 
   :depends on r-stringr: 
   :depends on r-tibble: 
   :depends on r-tidyr: 

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

    pixi global install bioconductor-methreg

to add into an existing workspace instead, run::

    pixi add bioconductor-methreg

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-methreg

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-methreg

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-methreg:<tag>

(see `bioconductor-methreg/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-methreg| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methreg.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-methreg
   :alt:   (downloads)
.. |docker_bioconductor-methreg| image:: https://quay.io/repository/biocontainers/bioconductor-methreg/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methreg
.. _`bioconductor-methreg/tags`: https://quay.io/repository/biocontainers/bioconductor-methreg?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-methreg";
        var versions = ["1.20.0","1.12.0","1.10.0","1.8.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methreg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methreg/README.html