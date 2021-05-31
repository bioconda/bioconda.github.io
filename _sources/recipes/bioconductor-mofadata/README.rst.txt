:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mofadata'
.. highlight: bash

bioconductor-mofadata
=====================

.. conda:recipe:: bioconductor-mofadata
   :replaces_section_title:
   :noindex:

   Data package for Multi\-Omics Factor Analysis \(MOFA\)

   :homepage: https://bioconductor.org/packages/3.12/data/experiment/html/MOFAdata.html
   :license: LGPL-3
   :recipe: /`bioconductor-mofadata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mofadata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mofadata/meta.yaml>`_

   A collection of datasets to accompany the R package MOFA and illustrate running and analysing MOFA models.


.. conda:package:: bioconductor-mofadata

   |downloads_bioconductor-mofadata| |docker_bioconductor-mofadata|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mofadata

   and update with::

      conda update bioconductor-mofadata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mofadata:<tag>

   (see `bioconductor-mofadata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mofadata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mofadata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mofadata
   :alt:   (downloads)
.. |docker_bioconductor-mofadata| image:: https://quay.io/repository/biocontainers/bioconductor-mofadata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mofadata
.. _`bioconductor-mofadata/tags`: https://quay.io/repository/biocontainers/bioconductor-mofadata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mofadata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mofadata/README.html