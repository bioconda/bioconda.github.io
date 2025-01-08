:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-easycelltype'
.. highlight: bash

bioconductor-easycelltype
=========================

.. conda:recipe:: bioconductor-easycelltype
   :replaces_section_title:
   :noindex:

   Annotate cell types for scRNA\-seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/EasyCellType.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-easycelltype <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-easycelltype>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-easycelltype/meta.yaml>`_

   We developed EasyCellType which can automatically examine the input marker lists obtained from existing software such as Seurat over the cell markerdatabases. Two quantification approaches to annotate cell types are provided\: Gene set enrichment analysis \(GSEA\) and a modified versio of Fisher\'s exact test. The function presents annotation recommendations in graphical outcomes\: bar plots for each cluster showing candidate cell types\, as well as a dot plot summarizing the top 5 significant annotations for each cluster.


.. conda:package:: bioconductor-easycelltype

   |downloads_bioconductor-easycelltype| |docker_bioconductor-easycelltype|

   :versions:
      
      

      ``1.8.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-biocstyle: ``>=2.34.0,<2.35.0``
   :depends bioconductor-clusterprofiler: ``>=4.14.0,<4.15.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.20.0,<3.21.0``
   :depends bioconductor-org.mm.eg.db: ``>=3.20.0,<3.21.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-forcats: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-rlang: 
   :depends r-vctrs: ``>=0.6.4``
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

      mamba install bioconductor-easycelltype

   and update with::

      mamba update bioconductor-easycelltype

  To create a new environment, run::

      mamba create --name myenvname bioconductor-easycelltype

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-easycelltype:<tag>

   (see `bioconductor-easycelltype/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-easycelltype| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-easycelltype.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-easycelltype
   :alt:   (downloads)
.. |docker_bioconductor-easycelltype| image:: https://quay.io/repository/biocontainers/bioconductor-easycelltype/status
   :target: https://quay.io/repository/biocontainers/bioconductor-easycelltype
.. _`bioconductor-easycelltype/tags`: https://quay.io/repository/biocontainers/bioconductor-easycelltype?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-easycelltype";
        var versions = ["1.8.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-easycelltype/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-easycelltype/README.html