.. title:: Package Recipe 'htslib'
.. highlight: bash


htslib
======

.. conda:recipe:: htslib
   :replaces_section_title:

   C library for high\-throughput sequencing data formats.

   :homepage: https://github.com/samtools/htslib
   :license: MIT
   :recipe: /`htslib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/htslib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/htslib/meta.yaml>`_
   :links: biotools: :biotools:`HTSlib`

   


.. conda:package:: htslib

   |downloads_htslib| |docker_htslib|

   :versions: 1.9, 1.8, 1.7, 1.6, 1.5, 1.4.1, 1.4, 1.3.2, 1.3.1, 1.3, 1.2.1

   :depends: :conda:package:`bzip2` >=1.0.6,<2.0a0 :conda:package:`curl` >=7.59.0,<8.0a0 :conda:package:`libdeflate`  :conda:package:`xz` >=5.2.4,<5.3.0a0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_htslib|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install htslib

   and update with::

      conda update htslib

   or use the docker container::

      docker pull quay.io/repository/biocontainers/htslib


.. |required_by_htslib| conda:required_by:: htslib
.. |downloads_htslib| image:: https://img.shields.io/conda/dn/bioconda/htslib.svg?style=flat
   :alt:   (downloads)
.. |docker_htslib| image:: https://quay.io/repository/biocontainers/htslib/status
   :target: https://quay.io/repository/biocontainers/htslib







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/htslib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/htslib/README.html

