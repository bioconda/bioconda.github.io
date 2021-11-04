:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomicsupersignature'
.. highlight: bash

bioconductor-genomicsupersignature
==================================

.. conda:recipe:: bioconductor-genomicsupersignature
   :replaces_section_title:
   :noindex:

   Interpretation of RNA\-seq experiments through robust\, efficient comparison to public databases

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/GenomicSuperSignature.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genomicsupersignature <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicsupersignature>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicsupersignature/meta.yaml>`_

   This package contains the index\, which is the Replicable and interpretable Axes of Variation \(RAV\) extracted from public RNA sequencing datasets by clustering and averaging top PCs. This index\, named as RAVindex\, is further annotated with MeSH terms and GSEA. Functions to connect PCs from new datasets to RAVs\, extract interpretable annotations\, and provide intuitive visualization\, are implemented in this package. Overall\, this package enables researchers to analyze new data in the context of existing databases with minimal computing resources.


.. conda:package:: bioconductor-genomicsupersignature

   |downloads_bioconductor-genomicsupersignature| |docker_bioconductor-genomicsupersignature|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.1-0``

      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-biocfilecache: ``>=2.2.0,<2.3.0``
   :depends bioconductor-complexheatmap: ``>=2.10.0,<2.11.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dplyr: 
   :depends r-flextable: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-plotly: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genomicsupersignature

   and update with::

      conda update bioconductor-genomicsupersignature

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genomicsupersignature:<tag>

   (see `bioconductor-genomicsupersignature/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genomicsupersignature| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomicsupersignature.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomicsupersignature
   :alt:   (downloads)
.. |docker_bioconductor-genomicsupersignature| image:: https://quay.io/repository/biocontainers/bioconductor-genomicsupersignature/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomicsupersignature
.. _`bioconductor-genomicsupersignature/tags`: https://quay.io/repository/biocontainers/bioconductor-genomicsupersignature?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genomicsupersignature";
        var versions = ["1.2.0","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomicsupersignature/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomicsupersignature/README.html