:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-db-swissprot'
.. highlight: bash

perl-bio-db-swissprot
=====================

.. conda:recipe:: perl-bio-db-swissprot/1.7.4
   :replaces_section_title:
   :noindex:

   Database object interface to SwissProt retrieval

   :homepage: https://metacpan.org/release/Bio-DB-SwissProt
   :license: perl_5
   :recipe: /`perl-bio-db-swissprot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-db-swissprot>`_/`1.7.4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-db-swissprot/1.7.4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-db-swissprot/1.7.4/meta.yaml>`_

   


.. conda:package:: perl-bio-db-swissprot

   |downloads_perl-bio-db-swissprot| |docker_perl-bio-db-swissprot|

   :versions:
      
      

      ``1.7.4-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-bioperl-core: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-bio-db-swissprot

   and update with::

      conda update perl-bio-db-swissprot

   or use the docker container::

      docker pull quay.io/biocontainers/perl-bio-db-swissprot:<tag>

   (see `perl-bio-db-swissprot/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-db-swissprot| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-db-swissprot.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-db-swissprot
   :alt:   (downloads)
.. |docker_perl-bio-db-swissprot| image:: https://quay.io/repository/biocontainers/perl-bio-db-swissprot/status
   :target: https://quay.io/repository/biocontainers/perl-bio-db-swissprot
.. _`perl-bio-db-swissprot/tags`: https://quay.io/repository/biocontainers/perl-bio-db-swissprot?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-db-swissprot";
        var versions = ["1.7.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-db-swissprot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-db-swissprot/README.html