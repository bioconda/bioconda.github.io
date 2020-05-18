:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gage'
.. highlight: bash

bioconductor-gage
=================

.. conda:recipe:: bioconductor-gage
   :replaces_section_title:

   Generally Applicable Gene\-set Enrichment for Pathway Analysis

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/gage.html
   :license: GPL (>=2.0)
   :recipe: /`bioconductor-gage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gage/meta.yaml>`_
   :links: biotools: :biotools:`gage`

   GAGE is a published method for gene set \(enrichment or GSEA\) or pathway analysis. GAGE is generally applicable independent of microarray or RNA\-Seq data attributes including sample sizes\, experimental designs\, assay platforms\, and other types of heterogeneity\, and consistently achieves superior performance over other frequently used methods. In gage package\, we provide functions for basic GAGE analysis\, result processing and presentation. We have also built pipeline routines for of multiple GAGE analyses in a batch\, comparison between parallel analyses\, and combined analysis of heterogeneous data from different sources\/studies. In addition\, we provide demo microarray data and commonly used gene set data based on KEGG pathways and GO terms. These funtions and data are also useful for gene set analysis using other methods.


.. conda:package:: bioconductor-gage

   |downloads_bioconductor-gage| |docker_bioconductor-gage|

   :versions: 2.37.0-0, 2.36.0-0, 2.34.0-1, 2.32.0-0, 2.30.0-0, 2.28.0-0, 2.26.3-0, 2.21.1-0
   
   :depends bioconductor-annotationdbi: >=1.50.0,<1.51.0
   :depends bioconductor-graph: >=1.66.0,<1.67.0
   :depends bioconductor-keggrest: >=1.28.0,<1.29.0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gage

   and update with::

      conda update bioconductor-gage

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gage:<tag>

   (see `bioconductor-gage/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gage| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gage.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gage
   :alt:   (downloads)
.. |docker_bioconductor-gage| image:: https://quay.io/repository/biocontainers/bioconductor-gage/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gage
.. _`bioconductor-gage/tags`: https://quay.io/repository/biocontainers/bioconductor-gage?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gage/README.html