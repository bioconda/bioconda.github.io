:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-octad'
.. highlight: bash

bioconductor-octad
==================

.. conda:recipe:: bioconductor-octad
   :replaces_section_title:
   :noindex:

   Open Cancer TherApeutic Discovery \(OCTAD\)

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/octad.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-octad <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-octad>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-octad/meta.yaml>`_

   OCTAD provides a platform for virtually screening compounds targeting precise cancer patient groups. The essential idea is to identify drugs that reverse the gene expression signature of disease by tamping down over\-expressed genes and stimulating weakly expressed ones. The package offers deep\-learning based reference tissue selection\, disease gene expression signature creation\, pathway enrichment analysis\, drug reversal potency scoring\, cancer cell line selection\, drug enrichment analysis and in silico hit validation. It currently covers \~20\,000 patient tissue samples covering 50 cancer types\, and expression profiles for \~12\,000 distinct compounds.


.. conda:package:: bioconductor-octad

   |downloads_bioconductor-octad| |docker_bioconductor-octad|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.6.0,<3.7.0``
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-deseq2: ``>=1.38.0,<1.39.0``
   :depends bioconductor-edaseq: ``>=2.32.0,<2.33.0``
   :depends bioconductor-edger: ``>=3.40.0,<3.41.0``
   :depends bioconductor-experimenthub: ``>=2.6.0,<2.7.0``
   :depends bioconductor-gsva: ``>=1.46.0,<1.47.0``
   :depends bioconductor-limma: ``>=3.54.0,<3.55.0``
   :depends bioconductor-octad.db: ``>=1.0.0,<1.1.0``
   :depends bioconductor-rhdf5: ``>=2.42.0,<2.43.0``
   :depends bioconductor-ruvseq: ``>=1.32.0,<1.33.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-htmlwidgets: 
   :depends r-httr: 
   :depends r-magrittr: 
   :depends r-plotly: 
   :depends r-reshape2: 
   :depends r-rfast: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-octad

   and update with::

      conda update bioconductor-octad

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-octad:<tag>

   (see `bioconductor-octad/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-octad| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-octad.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-octad
   :alt:   (downloads)
.. |docker_bioconductor-octad| image:: https://quay.io/repository/biocontainers/bioconductor-octad/status
   :target: https://quay.io/repository/biocontainers/bioconductor-octad
.. _`bioconductor-octad/tags`: https://quay.io/repository/biocontainers/bioconductor-octad?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-octad";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-octad/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-octad/README.html