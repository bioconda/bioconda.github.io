:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'king'
.. highlight: bash

king
====

.. conda:recipe:: king
   :replaces_section_title:
   :noindex:

   \`Kinship\-based INference for Gwas \(KING\) is a toolset that makes use of high\-throughput SNP data typically seen in a genome\-wide association study \<http\:\/\/people.virginia.edu\/\~wc9c\/KING\/\>\`\_

   :homepage: http://people.virginia.edu/~wc9c/KING/
   :license: GPLv3
   :recipe: /`king <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/king>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/king/meta.yaml>`_

   


.. conda:package:: king

   |downloads_king| |docker_king|

   :versions:
      
      

      ``2.2.4-1``,  ``2.2.4-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends openmp: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install king

   and update with::

      conda update king

   or use the docker container::

      docker pull quay.io/biocontainers/king:<tag>

   (see `king/tags`_ for valid values for ``<tag>``)


.. |downloads_king| image:: https://img.shields.io/conda/dn/bioconda/king.svg?style=flat
   :target: https://anaconda.org/bioconda/king
   :alt:   (downloads)
.. |docker_king| image:: https://quay.io/repository/biocontainers/king/status
   :target: https://quay.io/repository/biocontainers/king
.. _`king/tags`: https://quay.io/repository/biocontainers/king?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/king/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/king/README.html