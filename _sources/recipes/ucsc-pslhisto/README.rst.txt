:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-pslhisto'
.. highlight: bash

ucsc-pslhisto
=============

.. conda:recipe:: ucsc-pslhisto
   :replaces_section_title:
   :noindex:

    Collect counts on PSL alignments for making histograms. These then be analyzed with R\, textHistogram\, etc. 

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-pslhisto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslhisto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslhisto/meta.yaml>`_

   


.. conda:package:: ucsc-pslhisto

   |downloads_ucsc-pslhisto| |docker_ucsc-pslhisto|

   :versions:
      
      

      ``377-0``,  ``366-0``,  ``357-2``,  ``357-1``,  ``357-0``,  ``332-0``,  ``324-0``

      

   
   :depends libgcc-ng: ``>=7.3.0``
   :depends libpng: ``>=1.6.35,<1.7.0a0``
   :depends libuuid: ``>=2.32.1,<3.0a0``
   :depends mysql-connector-c: ``>=6.1.11,<6.1.12.0a0``
   :depends openssl: ``>=1.0.2p,<1.0.3a``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-pslhisto

   and update with::

      conda update ucsc-pslhisto

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-pslhisto:<tag>

   (see `ucsc-pslhisto/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-pslhisto| image:: https://img.shields.io/conda/dn/bioconda/ucsc-pslhisto.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-pslhisto
   :alt:   (downloads)
.. |docker_ucsc-pslhisto| image:: https://quay.io/repository/biocontainers/ucsc-pslhisto/status
   :target: https://quay.io/repository/biocontainers/ucsc-pslhisto
.. _`ucsc-pslhisto/tags`: https://quay.io/repository/biocontainers/ucsc-pslhisto?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-pslhisto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-pslhisto/README.html