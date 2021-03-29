:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-reactomegsa.data'
.. highlight: bash

bioconductor-reactomegsa.data
=============================

.. conda:recipe:: bioconductor-reactomegsa.data
   :replaces_section_title:
   :noindex:

   Companion data package for the ReactomeGSA package

   :homepage: https://bioconductor.org/packages/3.12/data/experiment/html/ReactomeGSA.data.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-reactomegsa.data <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reactomegsa.data>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reactomegsa.data/meta.yaml>`_

   Companion data sets to showcase the functionality of the ReactomeGSA package. This package contains proteomics and RNA\-seq data of the melanoma B\-cell induction study by Griss et al. and scRNA\-seq data from Jerby\-Arnon et al.


.. conda:package:: bioconductor-reactomegsa.data

   |downloads_bioconductor-reactomegsa.data| |docker_bioconductor-reactomegsa.data|

   :versions:
      
      

      ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-edger: ``>=3.32.0,<3.33.0``
   :depends bioconductor-limma: ``>=3.46.0,<3.47.0``
   :depends bioconductor-reactomegsa: ``>=1.4.0,<1.5.0``
   :depends curl: ``>=7.75.0,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-seurat: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-reactomegsa.data

   and update with::

      conda update bioconductor-reactomegsa.data

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-reactomegsa.data:<tag>

   (see `bioconductor-reactomegsa.data/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-reactomegsa.data| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-reactomegsa.data.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-reactomegsa.data
   :alt:   (downloads)
.. |docker_bioconductor-reactomegsa.data| image:: https://quay.io/repository/biocontainers/bioconductor-reactomegsa.data/status
   :target: https://quay.io/repository/biocontainers/bioconductor-reactomegsa.data
.. _`bioconductor-reactomegsa.data/tags`: https://quay.io/repository/biocontainers/bioconductor-reactomegsa.data?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-reactomegsa.data/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-reactomegsa.data/README.html