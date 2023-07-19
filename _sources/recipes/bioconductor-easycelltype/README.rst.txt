:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-easycelltype'
.. highlight: bash

bioconductor-easycelltype
=========================

.. conda:recipe:: bioconductor-easycelltype
   :replaces_section_title:
   :noindex:

   Annotate cell types for scRNA\-seq data

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/EasyCellType.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-easycelltype <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-easycelltype>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-easycelltype/meta.yaml>`_

   We developed EasyCellType which can automatically examine the input marker lists obtained from existing software such as Seurat over the cell markerdatabases. Two quantification approaches to annotate cell types are provided\: Gene set enrichment analysis \(GSEA\) and a modified versio of Fisher\'s exact test. The function presents annotation recommendations in graphical outcomes\: bar plots for each cluster showing candidate cell types\, as well as a dot plot summarizing the top 5 significant annotations for each cluster.


.. conda:package:: bioconductor-easycelltype

   |downloads_bioconductor-easycelltype| |docker_bioconductor-easycelltype|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-clusterprofiler: ``>=4.8.0,<4.9.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.17.0,<3.18.0``
   :depends bioconductor-org.mm.eg.db: ``>=3.17.0,<3.18.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-forcats: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-rlang: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-easycelltype

   and update with::

      conda update bioconductor-easycelltype

   or use the docker container::

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
        var versions = ["1.2.0","1.0.0"];
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