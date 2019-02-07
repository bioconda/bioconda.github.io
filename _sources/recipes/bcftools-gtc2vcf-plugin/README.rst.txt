.. title:: Package Recipe 'bcftools-gtc2vcf-plugin'
.. highlight: bash


bcftools-gtc2vcf-plugin
=======================

.. conda:recipe:: bcftools-gtc2vcf-plugin/1.9
   :replaces_section_title:

   Tools to convert Illumina and Affymetrix array intensity data files into VCF files.

   :homepage: https://github.com/freeseek/gtc2vcf
   :license: MIT
   :recipe: /`bcftools-gtc2vcf-plugin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcftools-gtc2vcf-plugin>`_/`1.9 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcftools-gtc2vcf-plugin/1.9>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcftools-gtc2vcf-plugin/1.9/meta.yaml>`_

   


.. conda:package:: bcftools-gtc2vcf-plugin

   |downloads_bcftools-gtc2vcf-plugin| |docker_bcftools-gtc2vcf-plugin|

   :versions: 1.9

   :depends: :conda:package:`bcftools` 1.9.* :conda:package:`bzip2` >=1.0.6,<2.0a0 :conda:package:`curl` >=7.59.0,<8.0a0 :conda:package:`libdeflate` >=1.0,<1.1.0a0 :conda:package:`libgcc-ng` >=4.9 :conda:package:`xz` >=5.2.4,<5.3.0a0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_bcftools-gtc2vcf-plugin|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bcftools-gtc2vcf-plugin

   and update with::

      conda update bcftools-gtc2vcf-plugin

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bcftools-gtc2vcf-plugin


.. |required_by_bcftools-gtc2vcf-plugin| conda:required_by:: bcftools-gtc2vcf-plugin
.. |downloads_bcftools-gtc2vcf-plugin| image:: https://img.shields.io/conda/dn/bioconda/bcftools-gtc2vcf-plugin.svg?style=flat
   :alt:   (downloads)
.. |docker_bcftools-gtc2vcf-plugin| image:: https://quay.io/repository/biocontainers/bcftools-gtc2vcf-plugin/status
   :target: https://quay.io/repository/biocontainers/bcftools-gtc2vcf-plugin







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bcftools-gtc2vcf-plugin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bcftools-gtc2vcf-plugin/README.html

