:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcftools'
.. highlight: bash

vcftools
========

.. conda:recipe:: vcftools
   :replaces_section_title:

   A set of tools written in Perl and C\+\+ for working with VCF files. This package only contains the C\+\+ libraries whereas the package perl\-vcftools\-vcf contains the perl libraries

   :homepage: https://vcftools.github.io/
   :license: LGPL
   :recipe: /`vcftools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcftools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcftools/meta.yaml>`_
   :links: biotools: :biotools:`vcftools`

   


.. conda:package:: vcftools

   |downloads_vcftools| |docker_vcftools|

   :versions: 0.1.16-2, 0.1.15-2, 0.1.15-1, 0.1.15-0, 0.1.14-5, 0.1.14-4, 0.1.14-3, 0.1.14-2, 0.1.14-1, 0.1.14-0, 0.1.11-2, 0.1.11-1, 0.1.11-0, 0.1.10-1, 0.1.10-0
   
   :depends libstdcxx-ng: >=4.9
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vcftools

   and update with::

      conda update vcftools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/vcftools:<tag>

   (see `vcftools/tags`_ for valid values for ``<tag>``)


.. |downloads_vcftools| image:: https://img.shields.io/conda/dn/bioconda/vcftools.svg?style=flat
   :alt:   (downloads)
.. |docker_vcftools| image:: https://quay.io/repository/biocontainers/vcftools/status
   :target: https://quay.io/repository/biocontainers/vcftools
.. _`vcftools/tags`: https://quay.io/repository/biocontainers/vcftools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcftools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcftools/README.html