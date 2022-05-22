:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-compress-raw-zlib'
.. highlight: bash

perl-compress-raw-zlib
======================

.. conda:recipe:: perl-compress-raw-zlib
   :replaces_section_title:
   :noindex:

   Basic utilities for writing tests.

   :homepage: http://metacpan.org/pod/Compress::Raw::Zlib
   :license: perl_5
   :recipe: /`perl-compress-raw-zlib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-compress-raw-zlib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-compress-raw-zlib/meta.yaml>`_

   


.. conda:package:: perl-compress-raw-zlib

   |downloads_perl-compress-raw-zlib| |docker_perl-compress-raw-zlib|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.105-0</code>,  <code>2.104-0</code>,  <code>2.103-0</code>,  <code>2.101-2</code>,  <code>2.101-1</code>,  <code>2.087-1</code>,  <code>2.087-0</code>,  <code>2.086-1</code>,  <code>2.086-0</code>,  </span></summary>
      

      ``2.105-0``,  ``2.104-0``,  ``2.103-0``,  ``2.101-2``,  ``2.101-1``,  ``2.087-1``,  ``2.087-0``,  ``2.086-1``,  ``2.086-0``,  ``2.084-1``,  ``2.084-0``,  ``2.083-0``,  ``2.081-0``,  ``2.069-7``,  ``2.069-6``,  ``2.069-3``,  ``2.069-2``,  ``2.069-1``,  ``2.069-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-compress-raw-zlib

   and update with::

      conda update perl-compress-raw-zlib

   or use the docker container::

      docker pull quay.io/biocontainers/perl-compress-raw-zlib:<tag>

   (see `perl-compress-raw-zlib/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-compress-raw-zlib| image:: https://img.shields.io/conda/dn/bioconda/perl-compress-raw-zlib.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-compress-raw-zlib
   :alt:   (downloads)
.. |docker_perl-compress-raw-zlib| image:: https://quay.io/repository/biocontainers/perl-compress-raw-zlib/status
   :target: https://quay.io/repository/biocontainers/perl-compress-raw-zlib
.. _`perl-compress-raw-zlib/tags`: https://quay.io/repository/biocontainers/perl-compress-raw-zlib?tab=tags


.. raw:: html

    <script>
        var package = "perl-compress-raw-zlib";
        var versions = ["2.105","2.104","2.103","2.101","2.101"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-compress-raw-zlib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-compress-raw-zlib/README.html