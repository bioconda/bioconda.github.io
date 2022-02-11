:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-perlio-utf8_strict'
.. highlight: bash

perl-perlio-utf8_strict
=======================

.. conda:recipe:: perl-perlio-utf8_strict
   :replaces_section_title:
   :noindex:

   Fast and correct UTF\-8 IO

   :homepage: http://metacpan.org/pod/PerlIO::utf8_strict
   :license: perl_5
   :recipe: /`perl-perlio-utf8_strict <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-perlio-utf8_strict>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-perlio-utf8_strict/meta.yaml>`_

   


.. conda:package:: perl-perlio-utf8_strict

   |downloads_perl-perlio-utf8_strict| |docker_perl-perlio-utf8_strict|

   :versions:
      
      

      ``0.009-0``,  ``0.007-3``,  ``0.007-1``,  ``0.007-0``,  ``0.006-1``,  ``0.006-0``

      

   
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-perlio-utf8_strict

   and update with::

      conda update perl-perlio-utf8_strict

   or use the docker container::

      docker pull quay.io/biocontainers/perl-perlio-utf8_strict:<tag>

   (see `perl-perlio-utf8_strict/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-perlio-utf8_strict| image:: https://img.shields.io/conda/dn/bioconda/perl-perlio-utf8_strict.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-perlio-utf8_strict
   :alt:   (downloads)
.. |docker_perl-perlio-utf8_strict| image:: https://quay.io/repository/biocontainers/perl-perlio-utf8_strict/status
   :target: https://quay.io/repository/biocontainers/perl-perlio-utf8_strict
.. _`perl-perlio-utf8_strict/tags`: https://quay.io/repository/biocontainers/perl-perlio-utf8_strict?tab=tags


.. raw:: html

    <script>
        var package = "perl-perlio-utf8_strict";
        var versions = ["0.009","0.007","0.007","0.007","0.006"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-perlio-utf8_strict/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-perlio-utf8_strict/README.html