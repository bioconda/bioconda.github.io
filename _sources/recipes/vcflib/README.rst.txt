:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcflib'
.. highlight: bash

vcflib
======

.. conda:recipe:: vcflib
   :replaces_section_title:

   Command\-line tools for manipulating VCF files

   :homepage: https://github.com/ekg/vcflib
   :license: MIT
   :recipe: /`vcflib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcflib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcflib/meta.yaml>`_
   :links: biotools: :biotools:`vcflib`, doi: :doi:`10.1101/023754`

   


.. conda:package:: vcflib

   |downloads_vcflib| |docker_vcflib|

   :versions: 1.0.0_rc2-2, 1.0.0_rc2-1, 1.0.0_rc2-0, 1.0.0_rc1-3, 1.0.0_rc1-1, 1.0.0_rc1-0, 1.0.0_rc0-0
   
   :depends bzip2: >=1.0.6,<2.0a0
   
   :depends libcxx: >=4.0.1
   
   :depends xz: >=5.2.4,<5.3.0a0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vcflib

   and update with::

      conda update vcflib

   or use the docker container::

      docker pull quay.io/biocontainers/vcflib:<tag>

   (see `vcflib/tags`_ for valid values for ``<tag>``)


.. |downloads_vcflib| image:: https://img.shields.io/conda/dn/bioconda/vcflib.svg?style=flat
   :alt:   (downloads)
.. |docker_vcflib| image:: https://quay.io/repository/biocontainers/vcflib/status
   :target: https://quay.io/repository/biocontainers/vcflib
.. _`vcflib/tags`: https://quay.io/repository/biocontainers/vcflib?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcflib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcflib/README.html