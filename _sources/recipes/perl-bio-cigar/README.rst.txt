.. title:: Package Recipe 'perl-bio-cigar'
.. highlight: bash


perl-bio-cigar
==============

.. conda:recipe:: perl-bio-cigar
   :replaces_section_title:

   Parse CIGAR strings and translate coordinates to\/from reference\/query

   :homepage: https://github.com/MullinsLab/Bio-Cigar
   :license: gpl_2
   :recipe: /`perl-bio-cigar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-cigar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-cigar/meta.yaml>`_
   :links: biotools: :biotools:`bio-cigar`

   


.. conda:package:: perl-bio-cigar

   |downloads_perl-bio-cigar| |docker_perl-bio-cigar|

   :versions: 1.01

   :depends: :conda:package:`perl` 5.22.0* :conda:package:`perl-bioperl`  :conda:package:`perl-carp`  :conda:package:`perl-class-methodmaker`  :conda:package:`perl-extutils-makemaker`  :conda:package:`perl-moo`  :conda:package:`perl-namespace-clean`  :conda:package:`perl-pod-escapes`  :conda:package:`perl-termreadkey`  :conda:package:`perl-test`  :conda:package:`perl-test-more`  :conda:package:`perl-type-tiny`  

   :required~by: |required_by_perl-bio-cigar|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-bio-cigar

   and update with::

      conda update perl-bio-cigar

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-bio-cigar


.. |required_by_perl-bio-cigar| conda:required_by:: perl-bio-cigar
.. |downloads_perl-bio-cigar| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-cigar.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-bio-cigar| image:: https://quay.io/repository/biocontainers/perl-bio-cigar/status
   :target: https://quay.io/repository/biocontainers/perl-bio-cigar







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-cigar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-cigar/README.html

