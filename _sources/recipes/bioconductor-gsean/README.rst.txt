:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gsean'
.. highlight: bash

bioconductor-gsean
==================

.. conda:recipe:: bioconductor-gsean
   :replaces_section_title:

   Biological molecules in a living organism seldom work individually. They usually interact each other in a cooperative way. Biological process is too complicated to understand without considering such interactions. Thus\, network\-based procedures can be seen as powerful methods for studying complex process. However\, many methods are devised for analyzing individual genes. It is said that techniques based on biological networks such as gene co\-expression are more precise ways to represent information than those using lists of genes only. This package is aimed to integrate the gene expression and biological network. A biological network is constructed from gene expression data and it is used for Gene Set Enrichment Analysis.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/gsean.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gsean <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsean>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsean/meta.yaml>`_

   


.. conda:package:: bioconductor-gsean

   |downloads_bioconductor-gsean| |docker_bioconductor-gsean|

   :versions: 1.2.0-0
   
   :depends bioconductor-fgsea: >=1.8.0,<1.9.0
   
   :depends bioconductor-ppinfer: >=1.8.0,<1.9.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gsean

   and update with::

      conda update bioconductor-gsean

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-gsean:<tag>

   (see `bioconductor-gsean/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gsean| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gsean.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-gsean| image:: https://quay.io/repository/biocontainers/bioconductor-gsean/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gsean
.. _`bioconductor-gsean/tags`: https://quay.io/repository/biocontainers/bioconductor-gsean?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gsean/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gsean/README.html