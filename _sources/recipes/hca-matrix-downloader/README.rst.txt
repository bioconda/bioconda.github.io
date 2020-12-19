:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hca-matrix-downloader'
.. highlight: bash

hca-matrix-downloader
=====================

.. conda:recipe:: hca-matrix-downloader
   :replaces_section_title:
   :noindex:

   Python client for the HCA DCP matrix service

   :homepage: https://github.com/ebi-gene-expression-group/hca-matrix-downloader
   :license: MIT
   :recipe: /`hca-matrix-downloader <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hca-matrix-downloader>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hca-matrix-downloader/meta.yaml>`_

   


.. conda:package:: hca-matrix-downloader

   |downloads_hca-matrix-downloader| |docker_hca-matrix-downloader|

   :versions:
      
      

      ``0.0.4-0``,  ``0.0.3-0``,  ``0.0.2-0``

      

   
   :depends python: ``>=3``
   :depends requests: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hca-matrix-downloader

   and update with::

      conda update hca-matrix-downloader

   or use the docker container::

      docker pull quay.io/biocontainers/hca-matrix-downloader:<tag>

   (see `hca-matrix-downloader/tags`_ for valid values for ``<tag>``)


.. |downloads_hca-matrix-downloader| image:: https://img.shields.io/conda/dn/bioconda/hca-matrix-downloader.svg?style=flat
   :target: https://anaconda.org/bioconda/hca-matrix-downloader
   :alt:   (downloads)
.. |docker_hca-matrix-downloader| image:: https://quay.io/repository/biocontainers/hca-matrix-downloader/status
   :target: https://quay.io/repository/biocontainers/hca-matrix-downloader
.. _`hca-matrix-downloader/tags`: https://quay.io/repository/biocontainers/hca-matrix-downloader?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hca-matrix-downloader/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hca-matrix-downloader/README.html