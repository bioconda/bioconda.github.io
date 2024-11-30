:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ttgsea'
.. highlight: bash

bioconductor-ttgsea
===================

.. conda:recipe:: bioconductor-ttgsea
   :replaces_section_title:
   :noindex:

   Tokenizing Text of Gene Set Enrichment Analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ttgsea.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ttgsea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ttgsea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ttgsea/meta.yaml>`_

   Functional enrichment analysis methods such as gene set enrichment analysis \(GSEA\) have been widely used for analyzing gene expression data. GSEA is a powerful method to infer results of gene expression data at a level of gene sets by calculating enrichment scores for predefined sets of genes. GSEA depends on the availability and accuracy of gene sets. There are overlaps between terms of gene sets or categories because multiple terms may exist for a single biological process\, and it can thus lead to redundancy within enriched terms. In other words\, the sets of related terms are overlapping. Using deep learning\, this pakage is aimed to predict enrichment scores for unique tokens or words from text in names of gene sets to resolve this overlapping set issue. Furthermore\, we can coin a new term by combining tokens and find its enrichment score by predicting such a combined tokens.


.. conda:package:: bioconductor-ttgsea

   |downloads_bioconductor-ttgsea| |docker_bioconductor-ttgsea|

   :versions:
      
      

      ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-diagrammer: 
   :depends r-keras: 
   :depends r-purrr: 
   :depends r-stopwords: 
   :depends r-text2vec: 
   :depends r-textstem: 
   :depends r-tm: 
   :depends r-tokenizers: 
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

      mamba install bioconductor-ttgsea

   and update with::

      mamba update bioconductor-ttgsea

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ttgsea

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ttgsea:<tag>

   (see `bioconductor-ttgsea/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ttgsea| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ttgsea.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ttgsea
   :alt:   (downloads)
.. |docker_bioconductor-ttgsea| image:: https://quay.io/repository/biocontainers/bioconductor-ttgsea/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ttgsea
.. _`bioconductor-ttgsea/tags`: https://quay.io/repository/biocontainers/bioconductor-ttgsea?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ttgsea";
        var versions = ["1.10.0","1.10.0","1.8.0","1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ttgsea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ttgsea/README.html