:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ntjoin'
.. highlight: bash

ntjoin
======

.. conda:recipe:: ntjoin
   :replaces_section_title:
   :noindex:

   Genome assembly scaffolder using minimizer graphs

   :homepage: http://www.bcgsc.ca/platform/bioinfo/software/ntjoin
   :license: GPL-3.0
   :recipe: /`ntjoin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntjoin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntjoin/meta.yaml>`_

   


.. conda:package:: ntjoin

   |downloads_ntjoin| |docker_ntjoin|

   :versions:
      
      

      ``1.0.5-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends bedtools: ``>=2.21.0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends make: 
   :depends pybedtools: 
   :depends pymannkendall: 
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python-igraph: 
   :depends python_abi: ``3.6.* *_cp36m``
   :depends samtools: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ntjoin

   and update with::

      conda update ntjoin

   or use the docker container::

      docker pull quay.io/biocontainers/ntjoin:<tag>

   (see `ntjoin/tags`_ for valid values for ``<tag>``)


.. |downloads_ntjoin| image:: https://img.shields.io/conda/dn/bioconda/ntjoin.svg?style=flat
   :target: https://anaconda.org/bioconda/ntjoin
   :alt:   (downloads)
.. |docker_ntjoin| image:: https://quay.io/repository/biocontainers/ntjoin/status
   :target: https://quay.io/repository/biocontainers/ntjoin
.. _`ntjoin/tags`: https://quay.io/repository/biocontainers/ntjoin?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ntjoin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ntjoin/README.html