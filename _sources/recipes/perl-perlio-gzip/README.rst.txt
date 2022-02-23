:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-perlio-gzip'
.. highlight: bash

perl-perlio-gzip
================

.. conda:recipe:: perl-perlio-gzip
   :replaces_section_title:
   :noindex:

   PerlIO interface to gzip\/gunzip

   :homepage: http://metacpan.org/pod/PerlIO-gzip
   :license: perl_5
   :recipe: /`perl-perlio-gzip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-perlio-gzip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-perlio-gzip/meta.yaml>`_

   


.. conda:package:: perl-perlio-gzip

   |downloads_perl-perlio-gzip| |docker_perl-perlio-gzip|

   :versions:
      
      

      ``0.20-3``,  ``0.20-2``,  ``0.20-1``,  ``0.20-0``,  ``0.19-3``,  ``0.19-2``,  ``0.19-1``,  ``0.19-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-perlio-gzip

   and update with::

      conda update perl-perlio-gzip

   or use the docker container::

      docker pull quay.io/biocontainers/perl-perlio-gzip:<tag>

   (see `perl-perlio-gzip/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-perlio-gzip| image:: https://img.shields.io/conda/dn/bioconda/perl-perlio-gzip.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-perlio-gzip
   :alt:   (downloads)
.. |docker_perl-perlio-gzip| image:: https://quay.io/repository/biocontainers/perl-perlio-gzip/status
   :target: https://quay.io/repository/biocontainers/perl-perlio-gzip
.. _`perl-perlio-gzip/tags`: https://quay.io/repository/biocontainers/perl-perlio-gzip?tab=tags


.. raw:: html

    <script>
        var package = "perl-perlio-gzip";
        var versions = ["0.20","0.20","0.20","0.20","0.19"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-perlio-gzip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-perlio-gzip/README.html