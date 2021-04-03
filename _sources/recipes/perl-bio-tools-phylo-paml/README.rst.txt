:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-tools-phylo-paml'
.. highlight: bash

perl-bio-tools-phylo-paml
=========================

.. conda:recipe:: perl-bio-tools-phylo-paml
   :replaces_section_title:
   :noindex:

   Parses output from the PAML programs codeml\, baseml\, basemlg\, codemlsites and yn00

   :homepage: https://metacpan.org/release/Bio-Tools-Phylo-PAML
   :license: perl_5
   :recipe: /`perl-bio-tools-phylo-paml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-tools-phylo-paml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-tools-phylo-paml/meta.yaml>`_

   


.. conda:package:: perl-bio-tools-phylo-paml

   |downloads_perl-bio-tools-phylo-paml| |docker_perl-bio-tools-phylo-paml|

   :versions:
      
      

      ``1.7.3-2``,  ``1.7.3-1``,  ``1.7.3-0``

      

   
   :depends paml: 
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-base: 
   :depends perl-bioperl-run: 
   :depends perl-getopt-long: 
   :depends perl-io-string: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-bio-tools-phylo-paml

   and update with::

      conda update perl-bio-tools-phylo-paml

   or use the docker container::

      docker pull quay.io/biocontainers/perl-bio-tools-phylo-paml:<tag>

   (see `perl-bio-tools-phylo-paml/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-tools-phylo-paml| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-tools-phylo-paml.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-tools-phylo-paml
   :alt:   (downloads)
.. |docker_perl-bio-tools-phylo-paml| image:: https://quay.io/repository/biocontainers/perl-bio-tools-phylo-paml/status
   :target: https://quay.io/repository/biocontainers/perl-bio-tools-phylo-paml
.. _`perl-bio-tools-phylo-paml/tags`: https://quay.io/repository/biocontainers/perl-bio-tools-phylo-paml?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-tools-phylo-paml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-tools-phylo-paml/README.html