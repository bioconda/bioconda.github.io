:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-samtools'
.. highlight: bash

perl-bio-samtools
=================

.. conda:recipe:: perl-bio-samtools
   :replaces_section_title:
   :noindex:

   Read SAM\/BAM files

   :homepage: http://search.cpan.org/~lds/Bio-SamTools-1.43/
   :license: perl_5
   :recipe: /`perl-bio-samtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-samtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-samtools/meta.yaml>`_

   


.. conda:package:: perl-bio-samtools

   |downloads_perl-bio-samtools| |docker_perl-bio-samtools|

   :versions:
      
      

      ``1.43-1``,  ``1.43-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-bioperl-core: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-bio-samtools

   and update with::

      conda update perl-bio-samtools

   or use the docker container::

      docker pull quay.io/biocontainers/perl-bio-samtools:<tag>

   (see `perl-bio-samtools/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-samtools| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-samtools.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-samtools
   :alt:   (downloads)
.. |docker_perl-bio-samtools| image:: https://quay.io/repository/biocontainers/perl-bio-samtools/status
   :target: https://quay.io/repository/biocontainers/perl-bio-samtools
.. _`perl-bio-samtools/tags`: https://quay.io/repository/biocontainers/perl-bio-samtools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-samtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-samtools/README.html