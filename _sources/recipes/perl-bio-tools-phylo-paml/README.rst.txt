.. title:: Package Recipe 'perl-bio-tools-phylo-paml'
.. highlight: bash


perl-bio-tools-phylo-paml
=========================

.. conda:recipe:: perl-bio-tools-phylo-paml
   :replaces_section_title:

   Parses output from the PAML programs codeml\, baseml\, basemlg\, codemlsites and yn00

   :homepage: https://metacpan.org/release/Bio-Tools-Phylo-PAML
   :license: perl_5
   :recipe: /`perl-bio-tools-phylo-paml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-tools-phylo-paml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-tools-phylo-paml/meta.yaml>`_

   


.. conda:package:: perl-bio-tools-phylo-paml

   |downloads_perl-bio-tools-phylo-paml| |docker_perl-bio-tools-phylo-paml|

   :versions: 1.7.3

   :depends: :conda:package:`paml`  :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-base`  :conda:package:`perl-bioperl-run`  :conda:package:`perl-getopt-long`  :conda:package:`perl-io-string`  

   :required~by: |required_by_perl-bio-tools-phylo-paml|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-bio-tools-phylo-paml

   and update with::

      conda update perl-bio-tools-phylo-paml

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-bio-tools-phylo-paml


.. |required_by_perl-bio-tools-phylo-paml| conda:required_by:: perl-bio-tools-phylo-paml
.. |downloads_perl-bio-tools-phylo-paml| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-tools-phylo-paml.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-bio-tools-phylo-paml| image:: https://quay.io/repository/biocontainers/perl-bio-tools-phylo-paml/status
   :target: https://quay.io/repository/biocontainers/perl-bio-tools-phylo-paml







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-tools-phylo-paml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-tools-phylo-paml/README.html

