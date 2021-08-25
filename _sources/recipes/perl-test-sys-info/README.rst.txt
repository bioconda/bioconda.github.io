:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-sys-info'
.. highlight: bash

perl-test-sys-info
==================

.. conda:recipe:: perl-test-sys-info
   :replaces_section_title:
   :noindex:

   Centralized test suite for Sys\:\:Info.

   :homepage: http://metacpan.org/pod/Test::Sys::Info
   :license: perl_5
   :recipe: /`perl-test-sys-info <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-sys-info>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-sys-info/meta.yaml>`_

   


.. conda:package:: perl-test-sys-info

   |downloads_perl-test-sys-info| |docker_perl-test-sys-info|

   :versions:
      
      

      ``0.23-0``,  ``0.21-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-base: 
   :depends perl-carp: 
   :depends perl-constant: 
   :depends perl-exporter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-sys-info

   and update with::

      conda update perl-test-sys-info

   or use the docker container::

      docker pull quay.io/biocontainers/perl-test-sys-info:<tag>

   (see `perl-test-sys-info/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-sys-info| image:: https://img.shields.io/conda/dn/bioconda/perl-test-sys-info.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-sys-info
   :alt:   (downloads)
.. |docker_perl-test-sys-info| image:: https://quay.io/repository/biocontainers/perl-test-sys-info/status
   :target: https://quay.io/repository/biocontainers/perl-test-sys-info
.. _`perl-test-sys-info/tags`: https://quay.io/repository/biocontainers/perl-test-sys-info?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-sys-info";
        var versions = ["0.23","0.21"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-sys-info/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-sys-info/README.html