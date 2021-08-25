:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-cpan-meta'
.. highlight: bash

perl-test-cpan-meta
===================

.. conda:recipe:: perl-test-cpan-meta
   :replaces_section_title:
   :noindex:

   Validate your CPAN META.json files

   :homepage: http://metacpan.org/pod/Test-CPAN-Meta
   :license: artistic_2
   :recipe: /`perl-test-cpan-meta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-cpan-meta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-cpan-meta/meta.yaml>`_

   


.. conda:package:: perl-test-cpan-meta

   |downloads_perl-test-cpan-meta| |docker_perl-test-cpan-meta|

   :versions:
      
      

      ``0.25-2``,  ``0.25-1``,  ``0.25-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-cpan-meta

   and update with::

      conda update perl-test-cpan-meta

   or use the docker container::

      docker pull quay.io/biocontainers/perl-test-cpan-meta:<tag>

   (see `perl-test-cpan-meta/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-cpan-meta| image:: https://img.shields.io/conda/dn/bioconda/perl-test-cpan-meta.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-cpan-meta
   :alt:   (downloads)
.. |docker_perl-test-cpan-meta| image:: https://quay.io/repository/biocontainers/perl-test-cpan-meta/status
   :target: https://quay.io/repository/biocontainers/perl-test-cpan-meta
.. _`perl-test-cpan-meta/tags`: https://quay.io/repository/biocontainers/perl-test-cpan-meta?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-cpan-meta";
        var versions = ["0.25","0.25","0.25"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-cpan-meta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-cpan-meta/README.html