:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-svmdo'
.. highlight: bash

bioconductor-svmdo
==================

.. conda:recipe:: bioconductor-svmdo
   :replaces_section_title:
   :noindex:

   Identification of Tumor\-Discriminating mRNA Signatures via Support Vector Machines Supported by Disease Ontology

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/SVMDO.html
   :license: GPL-3
   :recipe: /`bioconductor-svmdo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-svmdo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-svmdo/meta.yaml>`_

   It is an easy\-to\-use GUI using disease information for detecting tumor\/normal sample discriminating gene sets from differentially expressed genes. Our approach is based on an iterative algorithm filtering genes with disease ontology enrichment analysis and wilk’s lambda criterion connected to SVM classification model construction. Along with gene set extraction\, SVMDO also provides individual prognostic marker detection. The algorithm is designed for FPKM and RPKM normalized RNA\-Seq transcriptome datasets.


.. conda:package:: bioconductor-svmdo

   |downloads_bioconductor-svmdo| |docker_bioconductor-svmdo|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-dose: ``>=3.28.0,<3.29.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.18.0,<3.19.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bsda: ``>=1.2.1``
   :depends r-caret: ``>=6.0-93``
   :depends r-catools: ``>=1.18.2``
   :depends r-data.table: ``>=1.14.6``
   :depends r-dplyr: ``>=1.0.10``
   :depends r-e1071: ``>=1.7-12``
   :depends r-golem: ``>=0.3.5``
   :depends r-klar: ``>=1.7-1``
   :depends r-nortest: ``>=1.0-4``
   :depends r-shiny: ``>=1.7.4``
   :depends r-shinyfiles: ``>=0.9.3``
   :depends r-shinytitle: ``>=0.1.0``
   :depends r-sjmisc: ``>=2.8.9``
   :depends r-survival: ``>=3.4-0``
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

      mamba install bioconductor-svmdo

   and update with::

      mamba update bioconductor-svmdo

  To create a new environment, run::

      mamba create --name myenvname bioconductor-svmdo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-svmdo:<tag>

   (see `bioconductor-svmdo/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-svmdo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-svmdo.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-svmdo
   :alt:   (downloads)
.. |docker_bioconductor-svmdo| image:: https://quay.io/repository/biocontainers/bioconductor-svmdo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-svmdo
.. _`bioconductor-svmdo/tags`: https://quay.io/repository/biocontainers/bioconductor-svmdo?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-svmdo";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-svmdo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-svmdo/README.html