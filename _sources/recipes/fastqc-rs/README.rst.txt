:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastqc-rs'
.. highlight: bash

fastqc-rs
=========

.. conda:recipe:: fastqc-rs
   :replaces_section_title:
   :noindex:

   A fast quality control tool for FASTQ files written in rust.

   :homepage: https://github.com/fxwiegand/fastqc-rs
   :license: MIT
   :recipe: /`fastqc-rs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastqc-rs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastqc-rs/meta.yaml>`_

   


.. conda:package:: fastqc-rs

   |downloads_fastqc-rs| |docker_fastqc-rs|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends expat: ``>=2.2.10,<2.3.0a0``
   :depends freetype: ``>=2.9.1,<3.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends openssl: ``>=1.1.1i,<1.1.2a``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastqc-rs

   and update with::

      conda update fastqc-rs

   or use the docker container::

      docker pull quay.io/biocontainers/fastqc-rs:<tag>

   (see `fastqc-rs/tags`_ for valid values for ``<tag>``)


.. |downloads_fastqc-rs| image:: https://img.shields.io/conda/dn/bioconda/fastqc-rs.svg?style=flat
   :target: https://anaconda.org/bioconda/fastqc-rs
   :alt:   (downloads)
.. |docker_fastqc-rs| image:: https://quay.io/repository/biocontainers/fastqc-rs/status
   :target: https://quay.io/repository/biocontainers/fastqc-rs
.. _`fastqc-rs/tags`: https://quay.io/repository/biocontainers/fastqc-rs?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastqc-rs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastqc-rs/README.html