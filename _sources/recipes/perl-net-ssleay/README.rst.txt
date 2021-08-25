:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-net-ssleay'
.. highlight: bash

perl-net-ssleay
===============

.. conda:recipe:: perl-net-ssleay
   :replaces_section_title:
   :noindex:

   Perl extension for using OpenSSL

   :homepage: http://metacpan.org/pod/Net::SSLeay
   :license: perl_5
   :recipe: /`perl-net-ssleay <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-net-ssleay>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-net-ssleay/meta.yaml>`_

   


.. conda:package:: perl-net-ssleay

   |downloads_perl-net-ssleay| |docker_perl-net-ssleay|

   :versions:
      
      

      ``1.88-0``,  ``1.86-0``,  ``1.85-0``,  ``1.84-1``,  ``1.84-0``,  ``1.74-1``,  ``1.74-0``,  ``1.72-0``

      

   
   :depends libgcc-ng: ``>=7.3.0``
   :depends openssl: ``>=1.1.1a,<1.1.2a``
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-mime-base64: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-net-ssleay

   and update with::

      conda update perl-net-ssleay

   or use the docker container::

      docker pull quay.io/biocontainers/perl-net-ssleay:<tag>

   (see `perl-net-ssleay/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-net-ssleay| image:: https://img.shields.io/conda/dn/bioconda/perl-net-ssleay.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-net-ssleay
   :alt:   (downloads)
.. |docker_perl-net-ssleay| image:: https://quay.io/repository/biocontainers/perl-net-ssleay/status
   :target: https://quay.io/repository/biocontainers/perl-net-ssleay
.. _`perl-net-ssleay/tags`: https://quay.io/repository/biocontainers/perl-net-ssleay?tab=tags


.. raw:: html

    <script>
        var package = "perl-net-ssleay";
        var versions = ["1.88","1.86","1.85","1.84","1.84"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-net-ssleay/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-net-ssleay/README.html