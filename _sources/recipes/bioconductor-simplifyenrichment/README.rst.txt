:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-simplifyenrichment'
.. highlight: bash

bioconductor-simplifyenrichment
===============================

.. conda:recipe:: bioconductor-simplifyenrichment
   :replaces_section_title:
   :noindex:

   Simplify Functional Enrichment Results

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/simplifyEnrichment.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-simplifyenrichment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simplifyenrichment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simplifyenrichment/meta.yaml>`_

   A new clustering algorithm\, binary cut\, for clustering similarity matrices of functional terms is implemeted in this package. It also provideds functionalities for visualizing\, summarizing and comparing the clusterings.


.. conda:package:: bioconductor-simplifyenrichment

   |downloads_bioconductor-simplifyenrichment| |docker_bioconductor-simplifyenrichment|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.54.0,<1.55.0``
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-complexheatmap: ``>=2.8.0,<2.9.0``
   :depends bioconductor-go.db: ``>=3.13.0,<3.14.0``
   :depends bioconductor-gosemsim: ``>=2.18.0,<2.19.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.13.0,<3.14.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-circlize: 
   :depends r-clue: 
   :depends r-cluster: ``>=1.14.2``
   :depends r-digest: 
   :depends r-getoptlong: 
   :depends r-matrix: 
   :depends r-proxyc: 
   :depends r-slam: 
   :depends r-tm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-simplifyenrichment

   and update with::

      conda update bioconductor-simplifyenrichment

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-simplifyenrichment:<tag>

   (see `bioconductor-simplifyenrichment/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-simplifyenrichment| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-simplifyenrichment.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-simplifyenrichment
   :alt:   (downloads)
.. |docker_bioconductor-simplifyenrichment| image:: https://quay.io/repository/biocontainers/bioconductor-simplifyenrichment/status
   :target: https://quay.io/repository/biocontainers/bioconductor-simplifyenrichment
.. _`bioconductor-simplifyenrichment/tags`: https://quay.io/repository/biocontainers/bioconductor-simplifyenrichment?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-simplifyenrichment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-simplifyenrichment/README.html