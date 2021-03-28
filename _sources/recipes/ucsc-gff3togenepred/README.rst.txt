:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-gff3togenepred'
.. highlight: bash

ucsc-gff3togenepred
===================

.. conda:recipe:: ucsc-gff3togenepred
   :replaces_section_title:
   :noindex:

   convert a GFF3 file to a genePred file

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-gff3togenepred <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-gff3togenepred>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-gff3togenepred/meta.yaml>`_

   


.. conda:package:: ucsc-gff3togenepred

   |downloads_ucsc-gff3togenepred| |docker_ucsc-gff3togenepred|

   :versions:
      
      

      ``377-2``,  ``377-1``,  ``377-0``,  ``366-0``,  ``357-2``,  ``357-1``,  ``357-0``,  ``332-0``,  ``324-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libpng: ``>=1.6.37,<1.7.0a0``
   :depends libuuid: ``>=2.32.1,<3.0a0``
   :depends mysql-connector-c: ``>=6.1.11,<6.1.12.0a0``
   :depends openssl: ``>=1.1.1k,<1.1.2a``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-gff3togenepred

   and update with::

      conda update ucsc-gff3togenepred

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-gff3togenepred:<tag>

   (see `ucsc-gff3togenepred/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-gff3togenepred| image:: https://img.shields.io/conda/dn/bioconda/ucsc-gff3togenepred.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-gff3togenepred
   :alt:   (downloads)
.. |docker_ucsc-gff3togenepred| image:: https://quay.io/repository/biocontainers/ucsc-gff3togenepred/status
   :target: https://quay.io/repository/biocontainers/ucsc-gff3togenepred
.. _`ucsc-gff3togenepred/tags`: https://quay.io/repository/biocontainers/ucsc-gff3togenepred?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-gff3togenepred/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-gff3togenepred/README.html