:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bcftools'
.. highlight: bash

bcftools
========

.. conda:recipe:: bcftools
   :replaces_section_title:

   BCFtools is a set of utilities that manipulate variant calls in the Variant Call Format \(VCF\) and its binary counterpart BCF. All commands work transparently with both VCFs and BCFs\, both uncompressed and BGZF\-compressed.  Most commands accept VCF\, bgzipped VCF and BCF with filetype detected automatically even when streaming from a pipe. Indexed VCF and BCF will work in all situations. Un\-indexed VCF and BCF and streams will work in most\, but not all situations.

   :homepage: https://github.com/samtools/bcftools
   :license: MIT
   :recipe: /`bcftools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcftools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcftools/meta.yaml>`_
   :links: biotools: :biotools:`bcftools`, doi: :doi:`10.1093/bioinformatics/btp352`

   


.. conda:package:: bcftools

   |downloads_bcftools| |docker_bcftools|

   :versions: 1.9-6, 1.9-5, 1.9-4, 1.9-3, 1.9-2, 1.9-1, 1.8-3, 1.8-2, 1.8-1, 1.8-0, 1.7-0, 1.6-1, 1.6-0, 1.5-3, 1.5-2, 1.5-1, 1.5-0, 1.4.1-0, 1.4-0, 1.3.1-5, 1.3.1-4, 1.3.1-3, 1.3.1-2, 1.3.1-1, 1.3.1-0, 1.3-3, 1.3-2, 1.3-1, 1.3-0, 1.2-4, 1.2-3, 1.2-2, 1.2-1, 1.2-0
   
   :depends bzip2: >=1.0.8,<2.0a0
   :depends curl: >=7.64.1,<8.0a0
   :depends gsl: >=2.5,<2.6.0a0
   :depends libdeflate: >=1.0,<1.1.0a0
   :depends libgcc-ng: >=7.3.0
   :depends perl: 
   :depends xz: >=5.2.4,<5.3.0a0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bcftools

   and update with::

      conda update bcftools

   or use the docker container::

      docker pull quay.io/biocontainers/bcftools:<tag>

   (see `bcftools/tags`_ for valid values for ``<tag>``)


.. |downloads_bcftools| image:: https://img.shields.io/conda/dn/bioconda/bcftools.svg?style=flat
   :target: https://anaconda.org/bioconda/bcftools
   :alt:   (downloads)
.. |docker_bcftools| image:: https://quay.io/repository/biocontainers/bcftools/status
   :target: https://quay.io/repository/biocontainers/bcftools
.. _`bcftools/tags`: https://quay.io/repository/biocontainers/bcftools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bcftools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bcftools/README.html