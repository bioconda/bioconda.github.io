:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-crypt-openssl-random'
.. highlight: bash

perl-crypt-openssl-random
=========================

.. conda:recipe:: perl-crypt-openssl-random/0.11
   :replaces_section_title:
   :noindex:

   OpenSSL\/LibreSSL pseudo\-random number generator access

   :homepage: http://sourceforge.net/projects/perl-openssl/
   :license: perl_5
   :recipe: /`perl-crypt-openssl-random <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-crypt-openssl-random>`_/`0.11 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-crypt-openssl-random/0.11>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-crypt-openssl-random/0.11/meta.yaml>`_

   


.. conda:package:: perl-crypt-openssl-random

   |downloads_perl-crypt-openssl-random| |docker_perl-crypt-openssl-random|

   :versions:
      
      

      ``0.11-3``,  ``0.11-2``,  ``0.11-1``,  ``0.11-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends openssl: ``>=1.1.1l,<1.1.2a``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-crypt-openssl-random

   and update with::

      conda update perl-crypt-openssl-random

   or use the docker container::

      docker pull quay.io/biocontainers/perl-crypt-openssl-random:<tag>

   (see `perl-crypt-openssl-random/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-crypt-openssl-random| image:: https://img.shields.io/conda/dn/bioconda/perl-crypt-openssl-random.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-crypt-openssl-random
   :alt:   (downloads)
.. |docker_perl-crypt-openssl-random| image:: https://quay.io/repository/biocontainers/perl-crypt-openssl-random/status
   :target: https://quay.io/repository/biocontainers/perl-crypt-openssl-random
.. _`perl-crypt-openssl-random/tags`: https://quay.io/repository/biocontainers/perl-crypt-openssl-random?tab=tags


.. raw:: html

    <script>
        var package = "perl-crypt-openssl-random";
        var versions = ["0.11","0.11","0.11","0.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-crypt-openssl-random/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-crypt-openssl-random/README.html