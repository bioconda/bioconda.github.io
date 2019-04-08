:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-rna-rnaalisplit'
.. highlight: bash

perl-bio-rna-rnaalisplit
========================

.. conda:recipe:: perl-bio-rna-rnaalisplit
   :replaces_section_title:

   Split and deconvolute structural RNA multiple sequence alignments

   :homepage: http://metacpan.org/pod/Bio::RNA::RNAaliSplit
   :license: agpl_3
   :recipe: /`perl-bio-rna-rnaalisplit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-rna-rnaalisplit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-rna-rnaalisplit/meta.yaml>`_

   


.. conda:package:: perl-bio-rna-rnaalisplit

   |downloads_perl-bio-rna-rnaalisplit| |docker_perl-bio-rna-rnaalisplit|

   :versions: v0.09-0, v0.08-0, v0.07-0, v0.06-2, v0.06-1
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-array-set: 
   :depends perl-bioperl: >=1.6.924
   :depends perl-constant: 
   :depends perl-data-dumper: 
   :depends perl-devel-globaldestruction: 
   :depends perl-digest-md5: 
   :depends perl-extutils-makemaker: 
   :depends perl-file-path: 
   :depends perl-file-share: 
   :depends perl-file-spec: 
   :depends perl-filedirutil: 
   :depends perl-ipc-cmd: 
   :depends perl-lib: 
   :depends perl-module-implementation: 
   :depends perl-moose: 
   :depends perl-namespace-autoclean: 
   :depends perl-path-class: 
   :depends perl-pod-usage: 
   :depends perl-storable: 
   :depends perl-sub-exporter-progressive: 
   :depends perl-test-prereq: 
   :depends rnaz: >=2.1
   :depends rscape: >=1.2.2
   :depends viennarna: >=2.4.9
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-bio-rna-rnaalisplit

   and update with::

      conda update perl-bio-rna-rnaalisplit

   or use the docker container::

      docker pull quay.io/biocontainers/perl-bio-rna-rnaalisplit:<tag>

   (see `perl-bio-rna-rnaalisplit/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-rna-rnaalisplit| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-rna-rnaalisplit.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-bio-rna-rnaalisplit| image:: https://quay.io/repository/biocontainers/perl-bio-rna-rnaalisplit/status
   :target: https://quay.io/repository/biocontainers/perl-bio-rna-rnaalisplit
.. _`perl-bio-rna-rnaalisplit/tags`: https://quay.io/repository/biocontainers/perl-bio-rna-rnaalisplit?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-rna-rnaalisplit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-rna-rnaalisplit/README.html