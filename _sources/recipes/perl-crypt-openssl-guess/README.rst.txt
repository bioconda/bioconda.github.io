:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-crypt-openssl-guess'
.. highlight: bash

perl-crypt-openssl-guess
========================

.. conda:recipe:: perl-crypt-openssl-guess
   :replaces_section_title:
   :noindex:

   Guess OpenSSL include path

   :homepage: https://github.com/akiym/Crypt-OpenSSL-Guess
   :license: perl_5
   :recipe: /`perl-crypt-openssl-guess <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-crypt-openssl-guess>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-crypt-openssl-guess/meta.yaml>`_

   


.. conda:package:: perl-crypt-openssl-guess

   |downloads_perl-crypt-openssl-guess| |docker_perl-crypt-openssl-guess|

   :versions:
      
      

      ``0.14-0``

      

   
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-crypt-openssl-guess

   and update with::

      conda update perl-crypt-openssl-guess

   or use the docker container::

      docker pull quay.io/biocontainers/perl-crypt-openssl-guess:<tag>

   (see `perl-crypt-openssl-guess/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-crypt-openssl-guess| image:: https://img.shields.io/conda/dn/bioconda/perl-crypt-openssl-guess.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-crypt-openssl-guess
   :alt:   (downloads)
.. |docker_perl-crypt-openssl-guess| image:: https://quay.io/repository/biocontainers/perl-crypt-openssl-guess/status
   :target: https://quay.io/repository/biocontainers/perl-crypt-openssl-guess
.. _`perl-crypt-openssl-guess/tags`: https://quay.io/repository/biocontainers/perl-crypt-openssl-guess?tab=tags


.. raw:: html

    <script>
        var package = "perl-crypt-openssl-guess";
        var versions = ["0.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-crypt-openssl-guess/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-crypt-openssl-guess/README.html