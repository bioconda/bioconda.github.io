:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-pslscore'
.. highlight: bash

ucsc-pslscore
=============

.. conda:recipe:: ucsc-pslscore
   :replaces_section_title:
   :noindex:

   calculate web blat score from psl files

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-pslscore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslscore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslscore/meta.yaml>`_

   


.. conda:package:: ucsc-pslscore

   |downloads_ucsc-pslscore| |docker_ucsc-pslscore|

   :versions:
      
      

      ``377-1``,  ``377-0``,  ``366-0``,  ``357-2``,  ``357-1``,  ``357-0``,  ``332-0``,  ``324-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libpng: ``>=1.6.37,<1.7.0a0``
   :depends libuuid: ``>=2.32.1,<3.0a0``
   :depends mysql-connector-c: ``>=6.1.11,<6.1.12.0a0``
   :depends openssl: ``>=1.1.1g,<1.1.2a``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-pslscore

   and update with::

      conda update ucsc-pslscore

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-pslscore:<tag>

   (see `ucsc-pslscore/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-pslscore| image:: https://img.shields.io/conda/dn/bioconda/ucsc-pslscore.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-pslscore
   :alt:   (downloads)
.. |docker_ucsc-pslscore| image:: https://quay.io/repository/biocontainers/ucsc-pslscore/status
   :target: https://quay.io/repository/biocontainers/ucsc-pslscore
.. _`ucsc-pslscore/tags`: https://quay.io/repository/biocontainers/ucsc-pslscore?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-pslscore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-pslscore/README.html