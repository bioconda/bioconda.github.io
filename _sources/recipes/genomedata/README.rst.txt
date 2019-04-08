:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genomedata'
.. highlight: bash

genomedata
==========

.. conda:recipe:: genomedata
   :replaces_section_title:

   tools for accessing large amounts of genomic data

   :homepage: http://genomedata.hoffmanlab.org/
   :license: GPL2
   :recipe: /`genomedata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomedata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomedata/meta.yaml>`_
   :links: biotools: :biotools:`genomedata`, doi: :doi:`10.1093/bioinformatics/btq164`

   


.. conda:package:: genomedata

   |downloads_genomedata| |docker_genomedata|

   :versions: 1.4.4-1, 1.4.4-0, 1.4.1-3, 1.4.1-2, 1.4.1-0, 1.4.0-1, 1.4.0-0, 1.3.6-0, 1.3.5-0
   
   :depends bedtools: 
   :depends hdf5: >=1.10.3,<1.10.4.0a0
   :depends libgcc-ng: >=4.9
   :depends path.py: 
   :depends pytables: >=3.4.3
   :depends python: >=2.7,<2.8.0a0
   :depends six: 
   :depends textinput: 
   :depends ucsc-bigwigtobedgraph: 
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genomedata

   and update with::

      conda update genomedata

   or use the docker container::

      docker pull quay.io/biocontainers/genomedata:<tag>

   (see `genomedata/tags`_ for valid values for ``<tag>``)


.. |downloads_genomedata| image:: https://img.shields.io/conda/dn/bioconda/genomedata.svg?style=flat
   :alt:   (downloads)
.. |docker_genomedata| image:: https://quay.io/repository/biocontainers/genomedata/status
   :target: https://quay.io/repository/biocontainers/genomedata
.. _`genomedata/tags`: https://quay.io/repository/biocontainers/genomedata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genomedata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genomedata/README.html