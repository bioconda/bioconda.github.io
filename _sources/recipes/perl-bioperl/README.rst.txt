:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bioperl'
.. highlight: bash

perl-bioperl
============

.. conda:recipe:: perl-bioperl
   :replaces_section_title:

   Bioinformatics Toolkit

   :homepage: http://metacpan.org/pod/BioPerl
   :license: perl_5
   :recipe: /`perl-bioperl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bioperl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bioperl/meta.yaml>`_
   :links: biotools: :biotools:`bioperl`, doi: :doi:`10.1007/978-1-59745-535-0_26`

   


.. conda:package:: perl-bioperl

   |downloads_perl-bioperl| |docker_perl-bioperl|

   :versions: 1.7.2-8, 1.6.924-7, 1.6.924-6, 1.6.924-5, 1.6.924-4, 1.6.924-3, 1.6.924-2, 1.6.924-1, 1.6.924-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-bio-asn1-entrezgene: 
   
   :depends perl-bio-coordinate: 
   
   :depends perl-bio-featureio: 
   
   :depends perl-bio-samtools: 
   
   :depends perl-bio-tools-phylo-paml: 
   
   :depends perl-bio-tools-run-alignment-clustalw: 
   
   :depends perl-bioperl-core: 1.7.2
   
   :depends perl-bioperl-run: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-bioperl

   and update with::

      conda update perl-bioperl

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-bioperl:<tag>

   (see `perl-bioperl/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bioperl| image:: https://img.shields.io/conda/dn/bioconda/perl-bioperl.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-bioperl| image:: https://quay.io/repository/biocontainers/perl-bioperl/status
   :target: https://quay.io/repository/biocontainers/perl-bioperl
.. _`perl-bioperl/tags`: https://quay.io/repository/biocontainers/perl-bioperl?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bioperl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bioperl/README.html