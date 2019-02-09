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

   :versions: 0.1.16, 0.1.15, 0.1.14, 0.1.11, 0.1.10

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_vcftools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vcftools

   and update with::

      conda update vcftools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/vcftools


.. |required_by_vcftools| conda:required_by:: vcftools
.. |downloads_vcftools| image:: https://img.shields.io/conda/dn/bioconda/vcftools.svg?style=flat
   :alt:   (downloads)
.. |docker_vcftools| image:: https://quay.io/repository/biocontainers/vcftools/status
   :target: https://quay.io/repository/biocontainers/vcftools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcftools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcftools/README.html

