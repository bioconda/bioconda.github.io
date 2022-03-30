:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-alien-build'
.. highlight: bash

perl-alien-build
================

.. conda:recipe:: perl-alien-build
   :replaces_section_title:
   :noindex:

   Build external dependencies for use in CPAN

   :homepage: https://metacpan.org/pod/Alien::Build
   :license: perl_5
   :recipe: /`perl-alien-build <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-alien-build>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-alien-build/meta.yaml>`_

   


.. conda:package:: perl-alien-build

   |downloads_perl-alien-build| |docker_perl-alien-build|

   :versions:
      
      

      ``2.48-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-capture-tiny: 
   :depends perl-ffi-checklib: ``0.28.*``
   :depends perl-file-chdir: 
   :depends perl-file-which: 
   :depends perl-path-tiny: 
   :depends perl-test2-suite: ``0.000145.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-alien-build

   and update with::

      conda update perl-alien-build

   or use the docker container::

      docker pull quay.io/biocontainers/perl-alien-build:<tag>

   (see `perl-alien-build/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-alien-build| image:: https://img.shields.io/conda/dn/bioconda/perl-alien-build.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-alien-build
   :alt:   (downloads)
.. |docker_perl-alien-build| image:: https://quay.io/repository/biocontainers/perl-alien-build/status
   :target: https://quay.io/repository/biocontainers/perl-alien-build
.. _`perl-alien-build/tags`: https://quay.io/repository/biocontainers/perl-alien-build?tab=tags


.. raw:: html

    <script>
        var package = "perl-alien-build";
        var versions = ["2.48"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-alien-build/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-alien-build/README.html