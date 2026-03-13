:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-granie'
.. highlight: bash

bioconductor-granie
===================

.. conda:recipe:: bioconductor-granie
   :replaces_section_title:
   :noindex:

   GRaNIE\: Reconstruction cell type specific gene regulatory networks including enhancers using single\-cell or bulk chromatin accessibility and RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GRaNIE.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-granie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-granie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-granie/meta.yaml>`_

   Genetic variants associated with diseases often affect non\-coding regions\, thus likely having a regulatory role. To understand the effects of genetic variants in these regulatory regions\, identifying genes that are modulated by specific regulatory elements \(REs\) is crucial. The effect of gene regulatory elements\, such as enhancers\, is often cell\-type specific\, likely because the combinations of transcription factors \(TFs\) that are regulating a given enhancer have cell\-type specific activity. This TF activity can be quantified with existing tools such as diffTF and captures differences in binding of a TF in open chromatin regions. Collectively\, this forms a gene regulatory network \(GRN\) with cell\-type and data\-specific TF\-RE and RE\-gene links. Here\, we reconstruct such a GRN using single\-cell or bulk RNAseq and open chromatin \(e.g.\, using ATACseq or ChIPseq for open chromatin marks\) and optionally \(Capture\) Hi\-C data. Our network contains different types of links\, connecting TFs to regulatory elements\, the latter of which is connected to genes in the vicinity or within the same chromatin domain \(TAD\). We use a statistical framework to assign empirical FDRs and weights to all links using a permutation\-based approach.


.. conda:package:: bioconductor-granie

   |downloads_bioconductor-granie| |docker_bioconductor-granie|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.6.1-0``,  ``1.4.1-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-annotationhub: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-biomart: ``>=2.66.0,<2.67.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-deseq2: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-ensembldb: ``>=2.34.0,<2.35.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-topgo: ``>=2.62.0,<2.63.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-checkmate: 
   :depends on r-circlize: 
   :depends on r-colorspace: 
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-forcats: 
   :depends on r-futile.logger: 
   :depends on r-ggplot2: 
   :depends on r-gridextra: 
   :depends on r-igraph: 
   :depends on r-magrittr: 
   :depends on r-matrix: 
   :depends on r-matrixstats: 
   :depends on r-patchwork: ``>=1.2.0``
   :depends on r-progress: 
   :depends on r-rcolorbrewer: 
   :depends on r-readr: 
   :depends on r-reshape2: 
   :depends on r-rlang: 
   :depends on r-scales: 
   :depends on r-stringr: 
   :depends on r-tibble: 
   :depends on r-tidyr: ``>=1.3.0``
   :depends on r-tidyselect: 
   :depends on r-viridis: 

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

    pixi global install bioconductor-granie

to add into an existing workspace instead, run::

    pixi add bioconductor-granie

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-granie

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-granie

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-granie:<tag>

(see `bioconductor-granie/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-granie| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-granie.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-granie
   :alt:   (downloads)
.. |docker_bioconductor-granie| image:: https://quay.io/repository/biocontainers/bioconductor-granie/status
   :target: https://quay.io/repository/biocontainers/bioconductor-granie
.. _`bioconductor-granie/tags`: https://quay.io/repository/biocontainers/bioconductor-granie?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-granie";
        var versions = ["1.14.0","1.10.0","1.6.1","1.4.1","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-granie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-granie/README.html