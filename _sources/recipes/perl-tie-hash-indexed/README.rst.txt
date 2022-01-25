:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-tie-hash-indexed'
.. highlight: bash

perl-tie-hash-indexed
=====================

.. conda:recipe:: perl-tie-hash-indexed
   :replaces_section_title:
   :noindex:

   Ordered hashes for Perl

   :homepage: https://metacpan.org/pod/Tie::Hash::Indexed
   :license: perl_5
   :recipe: /`perl-tie-hash-indexed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-tie-hash-indexed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-tie-hash-indexed/meta.yaml>`_

   


.. conda:package:: perl-tie-hash-indexed

   |downloads_perl-tie-hash-indexed| |docker_perl-tie-hash-indexed|

   :versions:
      
      

      ``0.05-2``,  ``0.05-1``,  ``0.05-0``

      

   
   :depends libgcc-ng: ``>=9.4.0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-tie-hash-indexed

   and update with::

      conda update perl-tie-hash-indexed

   or use the docker container::

      docker pull quay.io/biocontainers/perl-tie-hash-indexed:<tag>

   (see `perl-tie-hash-indexed/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-tie-hash-indexed| image:: https://img.shields.io/conda/dn/bioconda/perl-tie-hash-indexed.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-tie-hash-indexed
   :alt:   (downloads)
.. |docker_perl-tie-hash-indexed| image:: https://quay.io/repository/biocontainers/perl-tie-hash-indexed/status
   :target: https://quay.io/repository/biocontainers/perl-tie-hash-indexed
.. _`perl-tie-hash-indexed/tags`: https://quay.io/repository/biocontainers/perl-tie-hash-indexed?tab=tags


.. raw:: html

    <script>
        var package = "perl-tie-hash-indexed";
        var versions = ["0.05","0.05","0.05"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-tie-hash-indexed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-tie-hash-indexed/README.html