:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-overlapselect'
.. highlight: bash

ucsc-overlapselect
==================

.. conda:recipe:: ucsc-overlapselect
   :replaces_section_title:
   :noindex:

    Select records based on overlapping chromosome ranges.  The ranges are specified in the selectFile\, with each block specifying a range. Records are copied from the inFile to outFile based on the selection criteria.  Selection is based on blocks or exons rather than entire range. 

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-overlapselect <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-overlapselect>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-overlapselect/meta.yaml>`_

   


.. conda:package:: ucsc-overlapselect

   |downloads_ucsc-overlapselect| |docker_ucsc-overlapselect|

   :versions:
      
      

      ``366-0``,  ``357-2``,  ``357-1``,  ``357-0``

      

   
   :depends libgcc-ng: ``>=4.9``
   :depends libpng: ``>=1.6.34,<1.7.0a0``
   :depends libuuid: 
   :depends mysql-connector-c: 
   :depends openssl: ``>=1.0.2o,<1.0.3a``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-overlapselect

   and update with::

      conda update ucsc-overlapselect

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-overlapselect:<tag>

   (see `ucsc-overlapselect/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-overlapselect| image:: https://img.shields.io/conda/dn/bioconda/ucsc-overlapselect.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-overlapselect
   :alt:   (downloads)
.. |docker_ucsc-overlapselect| image:: https://quay.io/repository/biocontainers/ucsc-overlapselect/status
   :target: https://quay.io/repository/biocontainers/ucsc-overlapselect
.. _`ucsc-overlapselect/tags`: https://quay.io/repository/biocontainers/ucsc-overlapselect?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-overlapselect/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-overlapselect/README.html