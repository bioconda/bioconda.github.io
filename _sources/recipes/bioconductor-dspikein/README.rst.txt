:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dspikein'
.. highlight: bash

bioconductor-dspikein
=====================

.. conda:recipe:: bioconductor-dspikein
   :replaces_section_title:
   :noindex:

   Estimating Absolute Abundance from Microbial Spike\-in Controls

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/DspikeIn.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-dspikein <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dspikein>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dspikein/meta.yaml>`_

   Provides a reproducible and modular workflow for absolute microbial quantification using spike\-in controls. Supports both single spike\-in taxa and synthetic microbial communities with user\-defined spike\-in volumes and genome copy numbers. Compatible with \'phyloseq\' and \'TreeSummarizedExperiment\' \(TSE\) data structures. The package implements methods for spike\-in validation\, preprocessing\, scaling factor estimation\, absolute abundance conversion\, bias correction\, and normalization. Facilitates downstream statistical analyses with \'DESeq2\'\, \'edgeR\'\, and other Bioconductor\-compatible methods. Visualization tools are provided via \'ggplot2\'\, \'ggtree\'\, and related packages. Includes detailed vignettes\, case studies\, and function\-level documentation to guide users through experimental design\, quantification\, and interpretation.


.. conda:package:: bioconductor-dspikein

   |downloads_bioconductor-dspikein| |docker_bioconductor-dspikein|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-decipher: ``>=3.6.0,<3.7.0``
   :depends on bioconductor-deseq2: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-edger: ``>=4.8.0,<4.9.0``
   :depends on bioconductor-ggtree: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-ggtreeextra: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-microbiome: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-msa: ``>=1.42.0,<1.43.0``
   :depends on bioconductor-phyloseq: ``>=1.54.0,<1.55.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-treesummarizedexperiment: ``>=2.18.0,<2.19.0``
   :depends on r-ape: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-flextable: 
   :depends on r-ggalluvial: 
   :depends on r-ggnewscale: 
   :depends on r-ggplot2: 
   :depends on r-ggpubr: 
   :depends on r-ggraph: 
   :depends on r-ggrepel: 
   :depends on r-ggridges: 
   :depends on r-ggstar: 
   :depends on r-igraph: 
   :depends on r-matrixstats: 
   :depends on r-officer: 
   :depends on r-patchwork: 
   :depends on r-phangorn: 
   :depends on r-randomforest: 
   :depends on r-rcolorbrewer: 
   :depends on r-reshape2: 
   :depends on r-rlang: 
   :depends on r-scales: 
   :depends on r-tibble: 
   :depends on r-tidyr: 
   :depends on r-xml2: 

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

    pixi global install bioconductor-dspikein

to add into an existing workspace instead, run::

    pixi add bioconductor-dspikein

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-dspikein

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-dspikein

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-dspikein:<tag>

(see `bioconductor-dspikein/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-dspikein| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dspikein.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dspikein
   :alt:   (downloads)
.. |docker_bioconductor-dspikein| image:: https://quay.io/repository/biocontainers/bioconductor-dspikein/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dspikein
.. _`bioconductor-dspikein/tags`: https://quay.io/repository/biocontainers/bioconductor-dspikein?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dspikein";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dspikein/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dspikein/README.html