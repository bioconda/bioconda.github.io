:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-procedural'
.. highlight: bash

perl-bio-procedural
===================

.. conda:recipe:: perl-bio-procedural/1.7.4
   :replaces_section_title:
   :noindex:

   Simple low\-dependency procedural interfaces to BioPerl

   :homepage: https://metacpan.org/release/Bio-Procedural
   :license: perl_5
   :recipe: /`perl-bio-procedural <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-procedural>`_/`1.7.4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-procedural/1.7.4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-procedural/1.7.4/meta.yaml>`_

   


.. conda:package:: perl-bio-procedural

   |downloads_perl-bio-procedural| |docker_perl-bio-procedural|

   :versions:
      
      

      ``1.7.4-0``

      

   
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-bio-db-embl: ``1.7.4.*``
   :depends perl-bio-db-refseq: ``1.7.4.*``
   :depends perl-bio-db-swissprot: ``1.7.4.*``
   :depends perl-bio-tools-run-remoteblast: ``1.7.3.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-bio-procedural

   and update with::

      conda update perl-bio-procedural

   or use the docker container::

      docker pull quay.io/biocontainers/perl-bio-procedural:<tag>

   (see `perl-bio-procedural/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-procedural| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-procedural.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-procedural
   :alt:   (downloads)
.. |docker_perl-bio-procedural| image:: https://quay.io/repository/biocontainers/perl-bio-procedural/status
   :target: https://quay.io/repository/biocontainers/perl-bio-procedural
.. _`perl-bio-procedural/tags`: https://quay.io/repository/biocontainers/perl-bio-procedural?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-procedural";
        var versions = ["1.7.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-procedural/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-procedural/README.html