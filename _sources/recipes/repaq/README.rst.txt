:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'repaq'
.. highlight: bash

repaq
=====

.. conda:recipe:: repaq
   :replaces_section_title:
   :noindex:

   A fast lossless FASTQ compressor with ultra\-high compression ratio

   :homepage: https://github.com/OpenGene/repaq
   :license: MIT
   :recipe: /`repaq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repaq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repaq/meta.yaml>`_

   


.. conda:package:: repaq

   |downloads_repaq| |docker_repaq|

   :versions:
      
      

      ``0.3.0-1``,  ``0.3.0-0``

      

   
   :depends libcxx: ``>=11.1.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install repaq

   and update with::

      conda update repaq

   or use the docker container::

      docker pull quay.io/biocontainers/repaq:<tag>

   (see `repaq/tags`_ for valid values for ``<tag>``)


.. |downloads_repaq| image:: https://img.shields.io/conda/dn/bioconda/repaq.svg?style=flat
   :target: https://anaconda.org/bioconda/repaq
   :alt:   (downloads)
.. |docker_repaq| image:: https://quay.io/repository/biocontainers/repaq/status
   :target: https://quay.io/repository/biocontainers/repaq
.. _`repaq/tags`: https://quay.io/repository/biocontainers/repaq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/repaq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/repaq/README.html