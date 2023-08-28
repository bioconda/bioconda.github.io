:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-asn1-entrezgene'
.. highlight: bash

perl-bio-asn1-entrezgene
========================

.. conda:recipe:: perl-bio-asn1-entrezgene
   :replaces_section_title:
   :noindex:

   Regular expression\-based Perl Parser for NCBI Entrez Gene

   :homepage: http://search.cpan.org/dist/Bio-ASN1-EntrezGene
   :license: perl_5
   :recipe: /`perl-bio-asn1-entrezgene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-asn1-entrezgene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-asn1-entrezgene/meta.yaml>`_

   


.. conda:package:: perl-bio-asn1-entrezgene

   |downloads_perl-bio-asn1-entrezgene| |docker_perl-bio-asn1-entrezgene|

   :versions:
      
      

      ``1.73-3``,  ``1.73-2``,  ``1.73-1``,  ``1.73-0``,  ``1.72-2``,  ``1.72-1``,  ``1.70-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-base: 
   :depends perl-bioperl-core: 
   :depends perl-carp: 
   :depends perl-data-dumper: 
   :depends perl-parent: 
   :depends perl-test-most: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-bio-asn1-entrezgene

   and update with::

      mamba update perl-bio-asn1-entrezgene

  To create a new environment, run::

      mamba create --name myenvname perl-bio-asn1-entrezgene

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-bio-asn1-entrezgene:<tag>

   (see `perl-bio-asn1-entrezgene/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-asn1-entrezgene| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-asn1-entrezgene.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-asn1-entrezgene
   :alt:   (downloads)
.. |docker_perl-bio-asn1-entrezgene| image:: https://quay.io/repository/biocontainers/perl-bio-asn1-entrezgene/status
   :target: https://quay.io/repository/biocontainers/perl-bio-asn1-entrezgene
.. _`perl-bio-asn1-entrezgene/tags`: https://quay.io/repository/biocontainers/perl-bio-asn1-entrezgene?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-asn1-entrezgene";
        var versions = ["1.73","1.73","1.73","1.73","1.72"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-asn1-entrezgene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-asn1-entrezgene/README.html