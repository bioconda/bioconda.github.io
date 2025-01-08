:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epiregulon'
.. highlight: bash

bioconductor-epiregulon
=======================

.. conda:recipe:: bioconductor-epiregulon
   :replaces_section_title:
   :noindex:

   Gene regulatory network inference from single cell epigenomic data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/epiregulon.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-epiregulon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epiregulon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epiregulon/meta.yaml>`_

   Gene regulatory networks model the underlying gene regulation hierarchies that drive gene expression and observed phenotypes. Epiregulon infers TF activity in single cells by constructing a gene regulatory network \(regulons\). This is achieved through integration of scATAC\-seq and scRNA\-seq data and incorporation of public bulk TF ChIP\-seq data. Links between regulatory elements and their target genes are established by computing correlations between chromatin accessibility and gene expressions.


.. conda:package:: bioconductor-epiregulon

   |downloads_bioconductor-epiregulon| |docker_bioconductor-epiregulon|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.14.0,<3.15.0``
   :depends bioconductor-annotationhub: ``>=3.14.0,<3.15.0a0``
   :depends bioconductor-assorthead: ``>=1.0.0,<1.1.0``
   :depends bioconductor-assorthead: ``>=1.0.0,<1.1.0a0``
   :depends bioconductor-aucell: ``>=1.28.0,<1.29.0``
   :depends bioconductor-aucell: ``>=1.28.0,<1.29.0a0``
   :depends bioconductor-beachmat: ``>=2.22.0,<2.23.0``
   :depends bioconductor-beachmat: ``>=2.22.0,<2.23.0a0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0a0``
   :depends bioconductor-bluster: ``>=1.16.0,<1.17.0``
   :depends bioconductor-bluster: ``>=1.16.0,<1.17.0a0``
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg19: ``>=1.4.0,<1.5.0``
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg19: ``>=1.4.3,<1.5.0a0``
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg38: ``>=1.4.0,<1.5.0``
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg38: ``>=1.4.5,<1.5.0a0``
   :depends bioconductor-bsgenome.mmusculus.ucsc.mm10: ``>=1.4.0,<1.5.0``
   :depends bioconductor-bsgenome.mmusculus.ucsc.mm10: ``>=1.4.3,<1.5.0a0``
   :depends bioconductor-experimenthub: ``>=2.14.0,<2.15.0``
   :depends bioconductor-experimenthub: ``>=2.14.0,<2.15.0a0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0a0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends bioconductor-motifmatchr: ``>=1.28.0,<1.29.0``
   :depends bioconductor-motifmatchr: ``>=1.28.0,<1.29.0a0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends bioconductor-scmultiome: ``>=1.6.0,<1.7.0``
   :depends bioconductor-scmultiome: ``>=1.6.0,<1.7.0a0``
   :depends bioconductor-scran: ``>=1.34.0,<1.35.0``
   :depends bioconductor-scran: ``>=1.34.0,<1.35.0a0``
   :depends bioconductor-scuttle: ``>=1.16.0,<1.17.0``
   :depends bioconductor-scuttle: ``>=1.16.0,<1.17.0a0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-checkmate: 
   :depends r-entropy: 
   :depends r-lifecycle: 
   :depends r-matrix: 
   :depends r-rcpp: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-epiregulon

   and update with::

      mamba update bioconductor-epiregulon

  To create a new environment, run::

      mamba create --name myenvname bioconductor-epiregulon

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-epiregulon:<tag>

   (see `bioconductor-epiregulon/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-epiregulon| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epiregulon.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-epiregulon
   :alt:   (downloads)
.. |docker_bioconductor-epiregulon| image:: https://quay.io/repository/biocontainers/bioconductor-epiregulon/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epiregulon
.. _`bioconductor-epiregulon/tags`: https://quay.io/repository/biocontainers/bioconductor-epiregulon?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-epiregulon";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epiregulon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epiregulon/README.html