:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gcsfilesystem'
.. highlight: bash

bioconductor-gcsfilesystem
==========================

.. conda:recipe:: bioconductor-gcsfilesystem
   :replaces_section_title:
   :noindex:

   Mounting a Google Cloud bucket to a local directory

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/GCSFilesystem.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-gcsfilesystem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gcsfilesystem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gcsfilesystem/meta.yaml>`_

   Mounting a Google Cloud bucket to a local directory. The files in the bucket can be viewed and read as if they are locally stored. For using the package\, you need to install GCSDokan on Windows or gcsfuse on Linux and MacOs.


.. conda:package:: bioconductor-gcsfilesystem

   |downloads_bioconductor-gcsfilesystem| |docker_bioconductor-gcsfilesystem|

   :versions:
      
      

      ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gcsfilesystem

   and update with::

      conda update bioconductor-gcsfilesystem

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gcsfilesystem:<tag>

   (see `bioconductor-gcsfilesystem/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gcsfilesystem| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gcsfilesystem.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gcsfilesystem
   :alt:   (downloads)
.. |docker_bioconductor-gcsfilesystem| image:: https://quay.io/repository/biocontainers/bioconductor-gcsfilesystem/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gcsfilesystem
.. _`bioconductor-gcsfilesystem/tags`: https://quay.io/repository/biocontainers/bioconductor-gcsfilesystem?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gcsfilesystem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gcsfilesystem/README.html