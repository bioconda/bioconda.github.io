.. title:: Package Recipe 'bioconductor-egsea'
.. highlight: bash


bioconductor-egsea
==================

.. conda:recipe:: bioconductor-egsea
   :replaces_section_title:

   This package implements the Ensemble of Gene Set Enrichment Analyses \(EGSEA\) method for gene set testing.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/EGSEA.html
   :license: GPL-3
   :recipe: /`bioconductor-egsea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-egsea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-egsea/meta.yaml>`_
   :links: biotools: :biotools:`egsea`

   


.. conda:package:: bioconductor-egsea

   |downloads_bioconductor-egsea| |docker_bioconductor-egsea|

   :versions: 1.10.0, 1.8.0, 1.6.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-edger` >=3.24.0,<3.25.0 :conda:package:`bioconductor-egseadata` >=1.10.0,<1.11.0 :conda:package:`bioconductor-gage` >=2.32.0,<2.33.0 :conda:package:`bioconductor-glimma` >=1.10.0,<1.11.0 :conda:package:`bioconductor-globaltest` >=5.36.0,<5.37.0 :conda:package:`bioconductor-gsva` >=1.30.0,<1.31.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-org.hs.eg.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-org.mm.eg.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-org.rn.eg.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-padog` >=1.24.0,<1.25.0 :conda:package:`bioconductor-pathview` >=1.22.0,<1.23.0 :conda:package:`bioconductor-safe` >=3.22.0,<3.23.0 :conda:package:`bioconductor-topgo` >=2.34.0,<2.35.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dt`  :conda:package:`r-ggplot2` >=1.0.0 :conda:package:`r-gplots` >=2.14.2 :conda:package:`r-htmlutils` >=0.1.5 :conda:package:`r-htmlwidgets`  :conda:package:`r-hwriter` >=1.2.2 :conda:package:`r-metap`  :conda:package:`r-plotly`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-stringi` >=0.5.0 

   :required~by: |required_by_bioconductor-egsea|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-egsea

   and update with::

      conda update bioconductor-egsea

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-egsea


.. |required_by_bioconductor-egsea| conda:required_by:: bioconductor-egsea
.. |downloads_bioconductor-egsea| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-egsea.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-egsea| image:: https://quay.io/repository/biocontainers/bioconductor-egsea/status
   :target: https://quay.io/repository/biocontainers/bioconductor-egsea







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-egsea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-egsea/README.html

