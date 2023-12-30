:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-asurat'
.. highlight: bash

bioconductor-asurat
===================

.. conda:recipe:: bioconductor-asurat
   :replaces_section_title:
   :noindex:

   Functional annotation\-driven unsupervised clustering for single\-cell data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ASURAT.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-asurat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-asurat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-asurat/meta.yaml>`_

   ASURAT is a software for single\-cell data analysis. Using ASURAT\, one can simultaneously perform unsupervised clustering and biological interpretation in terms of cell type\, disease\, biological process\, and signaling pathway activity. Inputting a single\-cell RNA\-seq data and knowledge\-based databases\, such as Cell Ontology\, Gene Ontology\, KEGG\, etc.\, ASURAT transforms gene expression tables into original multivariate tables\, termed sign\-by\-sample matrices \(SSMs\).


.. conda:package:: bioconductor-asurat

   |downloads_bioconductor-asurat| |docker_bioconductor-asurat|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends bioconductor-complexheatmap: ``>=2.18.0,<2.19.0``
   :depends bioconductor-complexheatmap: ``>=2.18.0,<2.19.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-circlize: 
   :depends r-cluster: 
   :depends r-plot3d: 
   :depends r-rcpp: ``>=1.0.7``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-asurat

   and update with::

      mamba update bioconductor-asurat

  To create a new environment, run::

      mamba create --name myenvname bioconductor-asurat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-asurat:<tag>

   (see `bioconductor-asurat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-asurat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-asurat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-asurat
   :alt:   (downloads)
.. |docker_bioconductor-asurat| image:: https://quay.io/repository/biocontainers/bioconductor-asurat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-asurat
.. _`bioconductor-asurat/tags`: https://quay.io/repository/biocontainers/bioconductor-asurat?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-asurat";
        var versions = ["1.6.0","1.4.0","1.4.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-asurat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-asurat/README.html