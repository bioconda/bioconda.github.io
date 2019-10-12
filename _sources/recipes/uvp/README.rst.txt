:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'uvp'
.. highlight: bash

uvp
===

.. conda:recipe:: uvp
   :replaces_section_title:

   A Unified Variant Pipeline to identify variants and assign lineage from MTBC sequence data.

   :homepage: https://github.com/CPTR-ReSeqTB/UVP
   :license: MIT
   :recipe: /`uvp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/uvp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/uvp/meta.yaml>`_

   


.. conda:package:: uvp

   |downloads_uvp| |docker_uvp|

   :versions: 2.7.0-0, 2.6.0-0
   
   :depends bcftools: 1.2.*
   :depends bedtools: 2.17.0.*
   :depends bwa: 0.7.12.*
   :depends fastqc: 0.11.5.*
   :depends fqtools: 2.0.*
   :depends gatk: 3.6.*
   :depends kraken: 0.10.5.*
   :depends openjdk: 8.*
   :depends perl-vcftools-vcf: 0.1.16.*
   :depends picard: 1.141.*
   :depends pigz: 2.3.4.*
   :depends prinseq: 0.20.4.*
   :depends python: 
   :depends pyyaml: 5.1.*
   :depends qualimap: 2.1.3.*
   :depends samtools: 1.2.*
   :depends snpeff: 4.1.*
   :depends vcftools: 0.1.16.*
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install uvp

   and update with::

      conda update uvp

   or use the docker container::

      docker pull quay.io/biocontainers/uvp:<tag>

   (see `uvp/tags`_ for valid values for ``<tag>``)


.. |downloads_uvp| image:: https://img.shields.io/conda/dn/bioconda/uvp.svg?style=flat
   :target: https://anaconda.org/bioconda/uvp
   :alt:   (downloads)
.. |docker_uvp| image:: https://quay.io/repository/biocontainers/uvp/status
   :target: https://quay.io/repository/biocontainers/uvp
.. _`uvp/tags`: https://quay.io/repository/biocontainers/uvp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/uvp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/uvp/README.html