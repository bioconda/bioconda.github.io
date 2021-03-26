:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-featurebits'
.. highlight: bash

ucsc-featurebits
================

.. conda:recipe:: ucsc-featurebits
   :replaces_section_title:
   :noindex:

   Correlate tables via bitmap projections. 

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-featurebits <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-featurebits>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-featurebits/meta.yaml>`_

   


.. conda:package:: ucsc-featurebits

   |downloads_ucsc-featurebits| |docker_ucsc-featurebits|

   :versions:
      
      

      ``377-2``,  ``377-1``,  ``377-0``,  ``366-0``,  ``357-2``,  ``357-1``,  ``357-0``,  ``332-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libpng: ``>=1.6.37,<1.7.0a0``
   :depends libuuid: ``>=2.32.1,<3.0a0``
   :depends mysql-connector-c: ``>=6.1.11,<6.1.12.0a0``
   :depends openssl: ``>=1.1.1k,<1.1.2a``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-featurebits

   and update with::

      conda update ucsc-featurebits

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-featurebits:<tag>

   (see `ucsc-featurebits/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-featurebits| image:: https://img.shields.io/conda/dn/bioconda/ucsc-featurebits.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-featurebits
   :alt:   (downloads)
.. |docker_ucsc-featurebits| image:: https://quay.io/repository/biocontainers/ucsc-featurebits/status
   :target: https://quay.io/repository/biocontainers/ucsc-featurebits
.. _`ucsc-featurebits/tags`: https://quay.io/repository/biocontainers/ucsc-featurebits?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-featurebits/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-featurebits/README.html