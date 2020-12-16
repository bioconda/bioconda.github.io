:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bitmapperbs'
.. highlight: bash

bitmapperbs
===========

.. conda:recipe:: bitmapperbs
   :replaces_section_title:
   :noindex:

   BitMapperBS\: a fast and accurate read aligner for whole\-genome bisulfite sequencing

   :homepage: https://github.com/chhylp123/BitMapperBS
   :license: Apache License 2
   :recipe: /`bitmapperbs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bitmapperbs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bitmapperbs/meta.yaml>`_

   


.. conda:package:: bitmapperbs

   |downloads_bitmapperbs| |docker_bitmapperbs|

   :versions:
      
      

      ``1.0.2.3-2``,  ``1.0.2.3-1``,  ``1.0.2.3-0``,  ``1.0.2.1-0``,  ``1.0.2.0-0``,  ``1.0.1.6-0``,  ``1.0.1.2-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libdivsufsort: 
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends xz: ``>=5.2.5,<5.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bitmapperbs

   and update with::

      conda update bitmapperbs

   or use the docker container::

      docker pull quay.io/biocontainers/bitmapperbs:<tag>

   (see `bitmapperbs/tags`_ for valid values for ``<tag>``)


.. |downloads_bitmapperbs| image:: https://img.shields.io/conda/dn/bioconda/bitmapperbs.svg?style=flat
   :target: https://anaconda.org/bioconda/bitmapperbs
   :alt:   (downloads)
.. |docker_bitmapperbs| image:: https://quay.io/repository/biocontainers/bitmapperbs/status
   :target: https://quay.io/repository/biocontainers/bitmapperbs
.. _`bitmapperbs/tags`: https://quay.io/repository/biocontainers/bitmapperbs?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bitmapperbs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bitmapperbs/README.html