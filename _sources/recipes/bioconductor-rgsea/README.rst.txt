:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rgsea'
.. highlight: bash

bioconductor-rgsea
==================

.. conda:recipe:: bioconductor-rgsea
   :replaces_section_title:

   Combining bootstrap aggregating and Gene set enrichment analysis \(GSEA\)\, RGSEA is a classfication algorithm with high robustness and no over\-fitting problem. It performs well especially for the data generated from different exprements.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/RGSEA.html
   :license: GPL(>=3)
   :recipe: /`bioconductor-rgsea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgsea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgsea/meta.yaml>`_
   :links: biotools: :biotools:`rgsea`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-rgsea

   |downloads_bioconductor-rgsea| |docker_bioconductor-rgsea|

   :versions: 1.16.0-0, 1.14.0-0, 1.12.0-0, 1.10.0-0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rgsea

   and update with::

      conda update bioconductor-rgsea

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rgsea:<tag>

   (see `bioconductor-rgsea/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rgsea| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rgsea.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rgsea| image:: https://quay.io/repository/biocontainers/bioconductor-rgsea/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rgsea
.. _`bioconductor-rgsea/tags`: https://quay.io/repository/biocontainers/bioconductor-rgsea?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rgsea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rgsea/README.html