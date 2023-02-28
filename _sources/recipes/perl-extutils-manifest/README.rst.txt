:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-extutils-manifest'
.. highlight: bash

perl-extutils-manifest
======================

.. conda:recipe:: perl-extutils-manifest
   :replaces_section_title:
   :noindex:

   Utilities to write and check a MANIFEST file

   :homepage: https://metacpan.org/release/ExtUtils-Manifest
   :license: perl_5
   :recipe: /`perl-extutils-manifest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-manifest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-manifest/meta.yaml>`_

   


.. conda:package:: perl-extutils-manifest

   |downloads_perl-extutils-manifest| |docker_perl-extutils-manifest|

   :versions:
      
      

      ``1.73-0``,  ``1.72-1``,  ``1.72-0``,  ``1.71-0``,  ``1.70-2``,  ``1.70-1``,  ``1.70-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-extutils-manifest

   and update with::

      conda update perl-extutils-manifest

   or use the docker container::

      docker pull quay.io/biocontainers/perl-extutils-manifest:<tag>

   (see `perl-extutils-manifest/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-extutils-manifest| image:: https://img.shields.io/conda/dn/bioconda/perl-extutils-manifest.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-extutils-manifest
   :alt:   (downloads)
.. |docker_perl-extutils-manifest| image:: https://quay.io/repository/biocontainers/perl-extutils-manifest/status
   :target: https://quay.io/repository/biocontainers/perl-extutils-manifest
.. _`perl-extutils-manifest/tags`: https://quay.io/repository/biocontainers/perl-extutils-manifest?tab=tags


.. raw:: html

    <script>
        var package = "perl-extutils-manifest";
        var versions = ["1.73","1.72","1.72","1.71","1.70"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-extutils-manifest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-extutils-manifest/README.html