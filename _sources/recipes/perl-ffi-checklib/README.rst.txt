:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-ffi-checklib'
.. highlight: bash

perl-ffi-checklib
=================

.. conda:recipe:: perl-ffi-checklib
   :replaces_section_title:
   :noindex:

   Check that a library is available for FFI

   :homepage: https://metacpan.org/pod/FFI::CheckLib
   :license: perl_5
   :recipe: /`perl-ffi-checklib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ffi-checklib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ffi-checklib/meta.yaml>`_

   


.. conda:package:: perl-ffi-checklib

   |downloads_perl-ffi-checklib| |docker_perl-ffi-checklib|

   :versions:
      
      

      ``0.28-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-ffi-checklib

   and update with::

      conda update perl-ffi-checklib

   or use the docker container::

      docker pull quay.io/biocontainers/perl-ffi-checklib:<tag>

   (see `perl-ffi-checklib/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-ffi-checklib| image:: https://img.shields.io/conda/dn/bioconda/perl-ffi-checklib.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-ffi-checklib
   :alt:   (downloads)
.. |docker_perl-ffi-checklib| image:: https://quay.io/repository/biocontainers/perl-ffi-checklib/status
   :target: https://quay.io/repository/biocontainers/perl-ffi-checklib
.. _`perl-ffi-checklib/tags`: https://quay.io/repository/biocontainers/perl-ffi-checklib?tab=tags


.. raw:: html

    <script>
        var package = "perl-ffi-checklib";
        var versions = ["0.28"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-ffi-checklib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-ffi-checklib/README.html