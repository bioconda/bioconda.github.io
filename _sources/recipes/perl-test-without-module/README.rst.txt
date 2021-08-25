:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-without-module'
.. highlight: bash

perl-test-without-module
========================

.. conda:recipe:: perl-test-without-module
   :replaces_section_title:
   :noindex:

   Test fallback behaviour in absence of modules

   :homepage: http://metacpan.org/pod/Test-Without-Module
   :license: perl_5
   :recipe: /`perl-test-without-module <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-without-module>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-without-module/meta.yaml>`_

   


.. conda:package:: perl-test-without-module

   |downloads_perl-test-without-module| |docker_perl-test-without-module|

   :versions:
      
      

      ``0.20-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-without-module

   and update with::

      conda update perl-test-without-module

   or use the docker container::

      docker pull quay.io/biocontainers/perl-test-without-module:<tag>

   (see `perl-test-without-module/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-without-module| image:: https://img.shields.io/conda/dn/bioconda/perl-test-without-module.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-without-module
   :alt:   (downloads)
.. |docker_perl-test-without-module| image:: https://quay.io/repository/biocontainers/perl-test-without-module/status
   :target: https://quay.io/repository/biocontainers/perl-test-without-module
.. _`perl-test-without-module/tags`: https://quay.io/repository/biocontainers/perl-test-without-module?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-without-module";
        var versions = ["0.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-without-module/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-without-module/README.html