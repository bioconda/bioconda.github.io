:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-copyneutralima'
.. highlight: bash

bioconductor-copyneutralima
===========================

.. conda:recipe:: bioconductor-copyneutralima
   :replaces_section_title:

   Copy Neutral Illumina Methylation Arrays

   :homepage: https://bioconductor.org/packages/3.10/data/experiment/html/CopyNeutralIMA.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-copyneutralima <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-copyneutralima>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-copyneutralima/meta.yaml>`_

   Provides a set of genomic copy neutral samples hybridized using Illumina Methylation arrays \(450k and EPIC\).


.. conda:package:: bioconductor-copyneutralima

   |downloads_bioconductor-copyneutralima| |docker_bioconductor-copyneutralima|

   :versions: 1.6.0-0, 1.4.0-0, 1.2.0-1, 1.0.0-0
   
   :depends bioconductor-experimenthub: >=1.14.0,<1.15.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-rdpack: >=0.8
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-copyneutralima

   and update with::

      conda update bioconductor-copyneutralima

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-copyneutralima:<tag>

   (see `bioconductor-copyneutralima/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-copyneutralima| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-copyneutralima.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-copyneutralima
   :alt:   (downloads)
.. |docker_bioconductor-copyneutralima| image:: https://quay.io/repository/biocontainers/bioconductor-copyneutralima/status
   :target: https://quay.io/repository/biocontainers/bioconductor-copyneutralima
.. _`bioconductor-copyneutralima/tags`: https://quay.io/repository/biocontainers/bioconductor-copyneutralima?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-copyneutralima/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-copyneutralima/README.html