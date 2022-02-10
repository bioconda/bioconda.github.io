:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-db-refseq'
.. highlight: bash

perl-bio-db-refseq
==================

.. conda:recipe:: perl-bio-db-refseq/1.7.4
   :replaces_section_title:
   :noindex:

   Database object interface for RefSeq retrieval

   :homepage: https://metacpan.org/release/Bio-DB-RefSeq
   :license: perl_5
   :recipe: /`perl-bio-db-refseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-db-refseq>`_/`1.7.4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-db-refseq/1.7.4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-db-refseq/1.7.4/meta.yaml>`_

   


.. conda:package:: perl-bio-db-refseq

   |downloads_perl-bio-db-refseq| |docker_perl-bio-db-refseq|

   :versions:
      
      

      ``1.7.4-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-bioperl-core: ``>=1.7.4``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-bio-db-refseq

   and update with::

      conda update perl-bio-db-refseq

   or use the docker container::

      docker pull quay.io/biocontainers/perl-bio-db-refseq:<tag>

   (see `perl-bio-db-refseq/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-db-refseq| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-db-refseq.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-db-refseq
   :alt:   (downloads)
.. |docker_perl-bio-db-refseq| image:: https://quay.io/repository/biocontainers/perl-bio-db-refseq/status
   :target: https://quay.io/repository/biocontainers/perl-bio-db-refseq
.. _`perl-bio-db-refseq/tags`: https://quay.io/repository/biocontainers/perl-bio-db-refseq?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-db-refseq";
        var versions = ["1.7.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-db-refseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-db-refseq/README.html