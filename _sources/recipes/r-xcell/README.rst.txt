:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-xcell'
.. highlight: bash

r-xcell
=======

.. conda:recipe:: r-xcell
   :replaces_section_title:
   :noindex:

   Estimate immune cell proportions from gene expression data

   :homepage: https://github.com/dviraran/xCell
   :license: GPL / GPL-3
   :recipe: /`r-xcell <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-xcell>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-xcell/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-017-1349-1`

   \"Tissues are a complex milieu consisting of numerous cell types. In cancer\, understanding the cellular heterogeneity in the tumor microenvironment is an emerging field of research. Numerous methods have been published in recent years for the enumeration of cell subsets from tissue expression profiles. However\, the available methods suffer from three major problems\: inferring cell subset based on gene sets learned and verified from limited sources\; displaying only partial portrayal of the full cellular heterogeneity\; and insufficient validation in mixed tissues. The xCell package performs cell type enrichment analysis from gene expression data for 64 immune and stroma cell types. xCell is a gene signatures\-based method learned from thousands of pure cell types from various sources. xCell applies a novel technique for reducing associations between closley related cell types. xCell signatures were validated using extensive in\-silico simulations and also cytometry immunophenotyping\, and were shown to outperform previous methods. xCell allows researchers to reliably portray the cellular heterogeneity landscape of tissue expression profiles.\"



.. conda:package:: r-xcell

   |downloads_r-xcell| |docker_r-xcell|

   :versions:
      
      

      ``1.3-2``,  ``1.3-1``,  ``1.3-0``,  ``1.2-3``,  ``1.2-2``,  ``1.2-1``,  ``1.2-0``

      

   
   :depends bioconductor-gseabase: 
   :depends bioconductor-gsva: 
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-curl: 
   :depends r-digest: 
   :depends r-mass: 
   :depends r-pracma: 
   :depends r-quadprog: 
   :depends r-roxygen2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-xcell

   and update with::

      conda update r-xcell

   or use the docker container::

      docker pull quay.io/biocontainers/r-xcell:<tag>

   (see `r-xcell/tags`_ for valid values for ``<tag>``)


.. |downloads_r-xcell| image:: https://img.shields.io/conda/dn/bioconda/r-xcell.svg?style=flat
   :target: https://anaconda.org/bioconda/r-xcell
   :alt:   (downloads)
.. |docker_r-xcell| image:: https://quay.io/repository/biocontainers/r-xcell/status
   :target: https://quay.io/repository/biocontainers/r-xcell
.. _`r-xcell/tags`: https://quay.io/repository/biocontainers/r-xcell?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-xcell/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-xcell/README.html