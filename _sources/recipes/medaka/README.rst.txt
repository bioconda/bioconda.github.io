:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'medaka'
.. highlight: bash

medaka
======

.. conda:recipe:: medaka
   :replaces_section_title:

   Neural network sequence error correction.

   :homepage: https://github.com/nanoporetech/medaka
   :documentation: https://nanoporetech.github.io/medaka/index.html
   
   :license: OTHER / Mozilla Public License 2.0
   :recipe: /`medaka <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/medaka>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/medaka/meta.yaml>`_

   


.. conda:package:: medaka

   |downloads_medaka| |docker_medaka|

   :versions: 0.5.2-0
   
   :depends bcftools: 1.3.1
   
   :depends biopython: 
   
   :depends bzip2: >=1.0.6,<2.0a0
   
   :depends cffi: 
   
   :depends h5py: 2.7.1
   
   :depends htslib: >=1.3.1,<1.4.0a0
   
   :depends intervaltree: >=3.0.0
   
   :depends keras: 2.2.4
   
   :depends libdeflate: >=1.0,<1.1.0a0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends minimap2: 2.11
   
   :depends numpy: 1.16.1
   
   :depends pysam: 
   
   :depends python: >=3.6,<3.7.0a0
   
   :depends samtools: 1.3.1
   
   :depends tensorflow: 1.12.0
   
   :depends xz: >=5.2.4,<5.3.0a0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install medaka

   and update with::

      conda update medaka

   or use the docker container::

      docker pull quay.io/biocontainers/medaka:<tag>

   (see `medaka/tags`_ for valid values for ``<tag>``)


.. |downloads_medaka| image:: https://img.shields.io/conda/dn/bioconda/medaka.svg?style=flat
   :alt:   (downloads)
.. |docker_medaka| image:: https://quay.io/repository/biocontainers/medaka/status
   :target: https://quay.io/repository/biocontainers/medaka
.. _`medaka/tags`: https://quay.io/repository/biocontainers/medaka?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/medaka/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/medaka/README.html