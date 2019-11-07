:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-egsea'
.. highlight: bash

bioconductor-egsea
==================

.. conda:recipe:: bioconductor-egsea
   :replaces_section_title:

   Ensemble of Gene Set Enrichment Analyses

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/EGSEA.html
   :license: GPL-3
   :recipe: /`bioconductor-egsea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-egsea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-egsea/meta.yaml>`_
   :links: biotools: :biotools:`egsea`

   This package implements the Ensemble of Gene Set Enrichment Analyses \(EGSEA\) method for gene set testing.


.. conda:package:: bioconductor-egsea

   |downloads_bioconductor-egsea| |docker_bioconductor-egsea|

   :versions: 1.12.0-1, 1.10.0-0, 1.8.0-0, 1.6.0-0
   
   :depends bioconductor-annotationdbi: >=1.46.0,<1.47.0
   :depends bioconductor-biobase: >=2.44.0,<2.45.0
   :depends bioconductor-edger: >=3.26.0,<3.27.0
   :depends bioconductor-egseadata: >=1.12.0,<1.13.0
   :depends bioconductor-gage: >=2.34.0,<2.35.0
   :depends bioconductor-glimma: >=1.12.0,<1.13.0
   :depends bioconductor-globaltest: >=5.38.0,<5.39.0
   :depends bioconductor-gsva: >=1.32.0,<1.33.0
   :depends bioconductor-limma: >=3.40.0,<3.41.0
   :depends bioconductor-org.hs.eg.db: >=3.8.0,<3.9.0
   :depends bioconductor-org.mm.eg.db: >=3.8.0,<3.9.0
   :depends bioconductor-org.rn.eg.db: >=3.8.0,<3.9.0
   :depends bioconductor-padog: >=1.26.0,<1.27.0
   :depends bioconductor-pathview: >=1.24.0,<1.25.0
   :depends bioconductor-safe: >=3.24.0,<3.25.0
   :depends bioconductor-topgo: >=2.36.0,<2.37.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-dt: 
   :depends r-ggplot2: >=1.0.0
   :depends r-gplots: >=2.14.2
   :depends r-htmlutils: >=0.1.5
   :depends r-htmlwidgets: 
   :depends r-hwriter: >=1.2.2
   :depends r-metap: 
   :depends r-plotly: 
   :depends r-rcolorbrewer: 
   :depends r-stringi: >=0.5.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-egsea

   and update with::

      conda update bioconductor-egsea

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-egsea:<tag>

   (see `bioconductor-egsea/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-egsea| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-egsea.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-egsea
   :alt:   (downloads)
.. |docker_bioconductor-egsea| image:: https://quay.io/repository/biocontainers/bioconductor-egsea/status
   :target: https://quay.io/repository/biocontainers/bioconductor-egsea
.. _`bioconductor-egsea/tags`: https://quay.io/repository/biocontainers/bioconductor-egsea?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-egsea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-egsea/README.html