:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-convert-binary-c'
.. highlight: bash

perl-convert-binary-c
=====================

.. conda:recipe:: perl-convert-binary-c
   :replaces_section_title:
   :noindex:

   Binary Data Conversion using C Types

   :homepage: http://search.cpan.org/~mhx/Convert-Binary-C/
   :license: perl_5
   :recipe: /`perl-convert-binary-c <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-convert-binary-c>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-convert-binary-c/meta.yaml>`_

   


.. conda:package:: perl-convert-binary-c

   |downloads_perl-convert-binary-c| |docker_perl-convert-binary-c|

   :versions:
      
      

      ``0.84-0``,  ``0.78-4``,  ``0.78-3``,  ``0.78-2``,  ``0.78-1``,  ``0.78-0``

      

   
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-convert-binary-c

   and update with::

      conda update perl-convert-binary-c

   or use the docker container::

      docker pull quay.io/biocontainers/perl-convert-binary-c:<tag>

   (see `perl-convert-binary-c/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-convert-binary-c| image:: https://img.shields.io/conda/dn/bioconda/perl-convert-binary-c.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-convert-binary-c
   :alt:   (downloads)
.. |docker_perl-convert-binary-c| image:: https://quay.io/repository/biocontainers/perl-convert-binary-c/status
   :target: https://quay.io/repository/biocontainers/perl-convert-binary-c
.. _`perl-convert-binary-c/tags`: https://quay.io/repository/biocontainers/perl-convert-binary-c?tab=tags


.. raw:: html

    <script>
        var package = "perl-convert-binary-c";
        var versions = ["0.84","0.78","0.78","0.78","0.78"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-convert-binary-c/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-convert-binary-c/README.html