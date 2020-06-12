:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metabinkit'
.. highlight: bash

metabinkit
==========

.. conda:recipe:: metabinkit
   :replaces_section_title:
   :noindex:

   Set of programs to perform taxonomic binning.

   :homepage: https://github.com/envmetagen/metabinkit
   :license: GPL / GPL-3
   :recipe: /`metabinkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metabinkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metabinkit/meta.yaml>`_
   :links: biotools: :biotools:`metabinkit`, doi: :doi:`10.5281/zenodo.3855032`

   


.. conda:package:: metabinkit

   |downloads_metabinkit| |docker_metabinkit|

   :versions:
      
      

      ``0.1.7-0``,  ``0.1.6-0``

      

   
   :depends blast: ``>=2.9.0``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends curl: ``>=7.69.1,<8.0a0``
   :depends entrez-direct: 
   :depends libgcc-ng: ``>=7.5.0``
   :depends pcre: ``>=8.44,<9.0a0``
   :depends perl: 
   :depends perl-archive-tar: 
   :depends perl-json: 
   :depends perl-list-moreutils: 
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-data.table: 
   :depends r-matrix: 
   :depends r-optparse: 
   :depends taxonkit: ``0.6.0.*``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metabinkit

   and update with::

      conda update metabinkit

   or use the docker container::

      docker pull quay.io/biocontainers/metabinkit:<tag>

   (see `metabinkit/tags`_ for valid values for ``<tag>``)


.. |downloads_metabinkit| image:: https://img.shields.io/conda/dn/bioconda/metabinkit.svg?style=flat
   :target: https://anaconda.org/bioconda/metabinkit
   :alt:   (downloads)
.. |docker_metabinkit| image:: https://quay.io/repository/biocontainers/metabinkit/status
   :target: https://quay.io/repository/biocontainers/metabinkit
.. _`metabinkit/tags`: https://quay.io/repository/biocontainers/metabinkit?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metabinkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metabinkit/README.html